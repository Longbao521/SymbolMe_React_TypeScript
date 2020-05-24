/*
 * @Descripttion: 
 * @version: 
 * @Author: liyulong
 * @Date: 2020-05-16 06:56:20
 * @LastEditors: liyulong
 * @LastEditTime: 2020-05-24 09:46:46
 */
import React, { ReactElement, useEffect, useState, ReactChild } from 'react'
import { Divider } from 'antd'
import { InfoType } from '../../services/type';
import request from '../../services/api'
import { ThemeContext } from '../../context'
import { Card } from '../../components'

import './index.less'

type resType = { status: number; data: Array<InfoType> }

export default function index(): ReactElement {
    const [data, setData] = useState<Array<InfoType>>([])
    useEffect(() => {
        (async function (): Promise<void> {
            const { status, data }: resType = await request.get('/api/info')
            if (status === 200) {
                setData(data)
            }
        })()
    }, [])  // [] 代表只执行一次
    // FIXME: 将style计算拆离
    return (
        <ThemeContext.Consumer>
            {
                ({ theme, setTheme }): ReactChild => (
                    <>
                        <h3 className="infoTitle" style={theme=== 'light' ? { color: '#36292f'}: { color: '#eccc68'}}>关于我 | About Me</h3>
                        <div id="baseInfoConatiner">
                            <Divider orientation="left" plain style={theme=== 'light' ? { color: '#36292f'}: { color: '#eccc68'}}>
                                基本信息
                            </Divider>
                            <div id="baseContainer">
                                {
                                    data.map(elem => (
                                        <span key={elem.key}  style={theme=== 'light' ? { color: '#36292f'}: { color: '#eccc68'}}>{elem.key}:&nbsp;{elem.value}</span>
                                    ))
                                }
                                <span></span>
                            </div>
                        </div>
                        <Card />
                    </>
                )
            }
        </ThemeContext.Consumer>
    )
}
