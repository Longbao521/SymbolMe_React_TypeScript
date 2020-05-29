import React, { ReactElement, createRef, useState, SyntheticEvent } from 'react'
import './Video.less'

type Props = {
    initPhoto?: string;
    src: string;
    title: string;
    copyRight: string;
    desc: string;
}

export default function Video(props: Props): ReactElement {
    const videoRef = createRef<HTMLVideoElement>()
    const [isStopFade, setIsStopFade] = useState<boolean>(false)
    const handleClick = (event: SyntheticEvent<EventTarget>): void => {
        setIsStopFade(true)
        // 添加类型声明
        const target = event.target as HTMLButtonElement
        if(target.innerHTML == 'Play') {
            videoRef.current?.play()
            target.innerHTML = 'Paused'
        } else {
            videoRef.current?.pause()
            target.innerHTML = 'Play'
        }
    }
    return (
        <div>
            <video ref={videoRef} className={isStopFade ? 'stopfade' : ''} id="bgvid" poster={props.initPhoto} playsInline muted loop>
                <source src={props.src} type="video/webm" />
                <source src={props.src} type="video/mp4" />
            </video>
            <div id="polina">
                <h1>{props.title}</h1>
                <p>{props.copyRight}</p>
                <p><a href="http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video">nnu</a></p>
                    <p>{props.desc}</p>
                    <button onClick={handleClick}>Play</button>
            </div>
        </div>
    )
}
