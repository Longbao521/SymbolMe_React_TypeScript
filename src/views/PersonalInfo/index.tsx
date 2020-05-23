/*
 * @Descripttion: 
 * @version: 
 * @Author: liyulong
 * @Date: 2020-05-16 06:56:20
 * @LastEditors: liyulong
 * @LastEditTime: 2020-05-23 08:18:12
 */
import React, { ReactElement, useEffect, useState } from 'react'
import { Divider } from 'antd'
import { InfoType } from '../../services/type';
import request from '../../services/api'

type resType =  {status: number; data:  Array<InfoType>}

export default function index(): ReactElement {
    const [data, setData] = useState<Array<InfoType>>([])
    useEffect(() => {
        (async function() {
            const { status, data }: resType= await request.get('/api/info')
            if(status === 200) {
                setData(data)
            }
        })()
    }, [])  // [] 代表只执行一次
    return (
        <>
            <h3>关于我 | About Me</h3>
            <div id="baseInfoConatiner">
                <Divider orientation="left" plain>
                    基本信息
                </Divider>
                <div id="baseContainer">
                    {
                        data.map(elem => (
                            <span key={elem.key}>{elem.key}:&nbsp;{elem.value}</span>
                        ))
                    }
                    <span></span>
                </div>
            </div>
        </>
    )
}
