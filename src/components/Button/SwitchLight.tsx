import React, { ReactElement, useState } from 'react'

import './SwitchLight.less'


export default function SwitchLight(): ReactElement {
    const [switchClass, setSwitchClass] = useState("onOff daySwitch")
    function handleClick(): void {
        const tmpArr = switchClass.split(" ")
        if(tmpArr.length>1) {
            setSwitchClass(tmpArr[0])
        }else {
            tmpArr.push('daySwitch')
            setSwitchClass(tmpArr.join(" "))
        }
    }
    return (
        <div id="dayNightSwitch" >
            <div className={switchClass}  onClick={() => handleClick()}>
                <div className="star sky"></div>
                <div className="sunMoon">
                    <div className="crater crater1"></div>
                    <div className="crater crater2"></div>
                    <div className="crater crater3"></div>
                    <div className="cloud part1"></div>
                    <div className="cloud part2"></div>
                </div>
            </div>
        </div>
    )
}
