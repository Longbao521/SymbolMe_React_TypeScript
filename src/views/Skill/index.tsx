import React, { ReactElement, ReactChild, useState, useEffect } from 'react'
import { Divider } from 'antd'
import { ThemeContext } from '../../context'
import { Color } from '../../constant'
import { SkillInfo } from '../../services/type';
import request from '../../services/api';

import './index.less'

export default function index(): ReactElement {
    const [ skillInfos, setSkillInfos ] = useState<Array<SkillInfo>>([])
    useEffect(() => {
        (async function(): Promise<void> {
            const {status, data} = await request.get('/api/skillInfo')
            if(status === 200) {
                setSkillInfos(data)
            }
        })()
    }, [])

    return (
        <ThemeContext.Consumer>
            {
                ({ theme, setTheme }): ReactChild => (
                    <>
                        <h3 className="infoTitle" style={theme === 'light' ? { color: Color.textLightColor } : { color: Color.textNightColor }}>关于我 | About Me</h3>
                        <div id="baseInfoConatiner">
                            <Divider orientation="left" plain style={theme === 'light' ? { color: Color.textLightColor } : { color: Color.textNightColor }}>
                                基本信息
                            </Divider>
                        </div>
                        <div id="skillContainer" style={theme === 'light' ? { color: Color.textLightColor } : { color: Color.textNightColor }}>
                            {
                                // 使用React中的v-html
                                skillInfos.map(elem => (
                                    <p dangerouslySetInnerHTML={{__html:elem.html}} key={elem.id}></p>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </ThemeContext.Consumer >
    )
}
