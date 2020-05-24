import React, { ReactElement, useState, useEffect } from 'react'
import request from '../../services/api'

import './Card.less'

type SchoolInfo = {
    src: string;
    name: string;
    desc: string;
}


export default function Card(): ReactElement {
    const [info, setInfo] = useState<Array<SchoolInfo>>([])
    useEffect(() => {
        (async function (): Promise<void> {
            const { status, data }  = await request.get('/api/schoolInfo')
            if (status === 200) {
                setInfo(data)
            }
        })()
    }, [])  // [] 代表只执行一次
    return (
        <div className="Card">
            {
                info.map(elem => (
                    <div className="box" key={elem.name}>
                        <div className="imgBx">
                            <img src={elem.src} />
                        </div>
                        <div className="content">
                            <h2>{elem.name}<br /><span>{elem.desc}</span></h2>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
