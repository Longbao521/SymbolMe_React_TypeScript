import React, { Component, RefObject, MouseEvent } from 'react'
import { withDefaultProps } from '../../utils';
import './Background.less'
import { createPortal } from 'react-dom'

const defaultProps = {
    vx: 4,
    vy: 4,
    height: 2,
    width: 2,
    count: 100,
    color: '121, 162,185',
    stroke: '130, 255, 255',
    dist: 6000,
    eDist: 20000,
    maxConn: 10
}

type DefaultProps = Readonly<typeof defaultProps>;

type Props = {
} & DefaultProps

interface State {
    points?: number;
    ctx: CanvasRenderingContext2D | null;
}

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    maxConn: number;  // 最大连接数
}

interface Mouse {
    x: number;
    y: number;
}


type CanvasProperty = RefObject<HTMLCanvasElement>
type ContainerRefProperty = RefObject<HTMLDivElement>
type CanvasElementProperty = HTMLCanvasElement | null


export default withDefaultProps(
    defaultProps,
    class Background extends Component<Props, State> {
        private containerRef: ContainerRefProperty = React.createRef()
        private canvasRef: CanvasProperty = React.createRef()
        private mouse: Mouse | null = null
        private points: Array<Point> = []
        constructor(props: Readonly<Props>) {
            super(props)
            this.state = {
                points: 0,
                ctx: null
            }
            this.handleMouseMove = this.handleMouseMove.bind(this)
            this.handleMouseLeave = this.handleMouseLeave.bind(this)
        }
        componentDidMount(): void {
            const canvas: CanvasElementProperty = this.canvasRef.current
            if (canvas && canvas.getContext) {
                this.setState({
                    ctx: canvas.getContext("2d")
                })
            } else {
                return
            }
            this.setSize(canvas)
            window.onresize = (): void => {
                this.setSize(canvas)
            }
            // 每隔40s绘制一个点
            setInterval(() => {
                this.drawPoint(canvas)
            }, 40)
            // console.log(canvas.width)
        }
        handleMouseMove(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void {
            this.mouse = {
                x: event.clientX,
                y: event.clientY
            }
        }
        handleMouseLeave(): void {
            this.mouse = null
        }
        drawPoint(canvas: CanvasElementProperty): void {
            const { ctx } = this.state
            if (!ctx || !canvas) {
                return
            }
            let point: Point
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.beginPath()
            ctx.fillStyle = `rgb(${this.props.color})`
            for (let i = 0, len = this.props.count; i < len; i++) {
                if (this.points.length !== this.props.count) {
                    // 初始化所有点
                    point = {
                        x: Math.floor(Math.random() * canvas.width),
                        y: Math.floor(Math.random() * canvas.height),
                        vx: this.props.vx / 2 - Math.random() * this.props.vx,
                        vy: this.props.vy / 2 - Math.random() * this.props.vy,
                        maxConn: 0
                    }
                } else {
                    // 处理点的速度和位置，并且做边界处理
                    point = this.borderPoint(this.points[i], canvas)
                }
                ctx.fillRect( // 利用矩形绘制点
                    point.x - this.props.width / 2,
                    point.y - this.props.height / 2,
                    this.props.width + 2, // 增大像素点
                    this.props.height + 2
                )

                this.points[i] = point
            }
            this.drawLine(ctx)
            ctx.closePath()
        }
        setSize(canvas: CanvasElementProperty): void {
            // console.log(this.canvasRef.clientWidth)
            const ele = this.containerRef.current
            const width = ele === null ? 0 : ele.clientWidth
            const height = ele === null ? 0 : ele.clientHeight
            if (canvas) {
                canvas.width = width || window.innerWidth || document.body.clientWidth
                canvas.height = height || window.innerHeight || document.body.clientHeight
            } else {
                return
            }
        }

        borderPoint(point: Point, canvas: CanvasElementProperty): Point {
            let p = point
            if (!canvas) {
                return p
            }
            if (point.x <= 0 || point.x >= canvas.width) {
                p.vx = -p.vx
                p.x += p.vx
            } else if (point.y <= 0 || point.y >= canvas.height) {
                p.vy = -p.vy
                p.y += p.vy
            } else {
                p = {
                    x: p.x + p.vx,
                    y: p.y + p.vy,
                    vx: p.vx,
                    vy: p.vy,
                    maxConn: 0
                }
            }
            return p
        }

        drawLine(ctx: CanvasRenderingContext2D): void {
            ctx = ctx
            const mouse = this.mouse
            let dist
            for (let i = 0, len = this.props.count; i < len; i++) {
                const pointI = this.points[i]
                pointI.maxConn = 0
                for (let j = 0; j < len; j++) {
                    if (i !== j) {
                        const pointJ = this.points[j]
                        dist =
                            Math.round(pointI.x - pointJ.x) *
                            Math.round(pointI.x - pointJ.x) +
                            Math.round(pointI.y - pointJ.y) *
                            Math.round(pointI.y - pointJ.y)
                        // 两点距离小于吸附距离，而且小于最大连接数，则画线
                        if (
                            dist <= this.props.dist &&
                            pointI.maxConn < this.props.maxConn
                        ) {
                            pointI.maxConn++
                            // 距离越远，线条越细，而且越透明
                            ctx.lineWidth = 0.5 - dist / this.props.dist
                            ctx.strokeStyle = `rgba(${this.props.stroke},${1 - dist / this.props.dist})`
                            ctx.beginPath()
                            ctx.moveTo(pointI.x, pointI.y)
                            ctx.lineTo(pointJ.x, pointJ.y)
                            ctx.stroke()
                        }
                    }
                }
                // 如果鼠标进入画布
                if (mouse) {
                    dist =
                        Math.round(pointI.x - mouse.x) *
                        Math.round(pointI.x - mouse.x) +
                        Math.round(pointI.y - mouse.y) *
                        Math.round(pointI.y - mouse.y)
                    // 遇到鼠标吸附距离时加速，直接改变point的x, y值达到加速效果
                    if (dist > this.props.dist && dist <= this.props.eDist) {
                        pointI.x =
                            pointI.x + (mouse.x - pointI.x) / 20
                        pointI.y =
                            pointI.y + (mouse.y - pointI.y) / 20
                    }
                    if (dist <= this.props.eDist) {
                        ctx.lineWidth = 1
                        ctx.strokeStyle = `rgba(${this.props.stroke}, ${1 - dist / this.props.eDist})`
                        ctx.beginPath()
                        ctx.moveTo(pointI.x, pointI.y)
                        ctx.lineTo(mouse.x, mouse.y)
                        ctx.stroke()
                    }
                }
            }
        }
        render() {
            return (
                createPortal(
                    (<div className="canvasContainer" ref={this.containerRef} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave}>
                        <canvas ref={this.canvasRef}>
                            您的浏览器不支持canvas，请更换浏览器.
                    </canvas>
                    </div>), document.body
                )

            )
        }
    })
