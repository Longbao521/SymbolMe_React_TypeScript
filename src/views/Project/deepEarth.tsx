import React, { ReactElement, createRef, useState } from 'react'
import './deepEarth.less'
import photo from './deepEarth.jpg'

export default function deepEarth(): ReactElement {
    const videoRef = createRef<HTMLVideoElement>()
    const [isStopFade, setIsStopFade] = useState<boolean>(false)
    const handleClick = (event: any): void => {
        setIsStopFade(true)
        if(event.target.innerHTML == 'Play') {
            videoRef.current?.play()
            event.target.innerHTML = 'Paused'
        } else {
            videoRef.current?.pause()
            event.target.innerHTML = 'Play'
        }
    }
    return (
        <div>
            <video ref={videoRef} className={isStopFade ? 'stopfade' : ''} id="bgvid" poster={photo} playsInline muted loop>
                <source src="http://localhost:3001/api/project/deepEarth" type="video/webm" />
                <source src="http://localhost:3001/api/project/deepEarth" type="video/mp4" />
            </video>
            <div id="polina">
                <h1>DeepEarth</h1>
                <p>南京师范大学虚拟环境重点实验室</p>
                <p><a href="http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video">nnu</a></p>
                    <p>本次项目由王成善院士与周成虎院士等领头的大科学计划.</p>
                    <p>深时数字地球（DDE）计划是由国际地质科学联合会（下简称国际地科联）的几个附属国家成员和国际协会附属成员提出的一项新动议。DDE计划已被国际地科联批准为首个国际地科联认可的大科学计划，执行期10年（2019-2028）。DDE计划旨在建立地球大数据关联集点，提供深时的地质、地理数据，以及这些数据的属性，使用者可由此深度认知地球资源、材料的分布与价值，以及地质灾害信息等，从而推演地球未来的地质情况。DDE作为一个新的平台，将有效地促进知识共享，并由此推动广泛的国际合作。该计划将作为一个开放运行计划，鼓励地球科学和跨学科领域的广泛合作。</p>
                    <button onClick={handleClick}>Play</button>
            </div>
        </div>
    )
}
