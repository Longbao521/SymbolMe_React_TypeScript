import React, { ReactElement, createRef, useState } from 'react'
import { VideoContainer } from '../../components'
import photo from './Earth.jpg'

export default function deepEarth(): ReactElement {
    return (
        <>
            <VideoContainer initPhoto={photo} desc="深时数字地球（DDE）计划是由国际地质科学联合会（下简称国际地科联）的几个
            附属国家成员和国际协会附属成员提出的一项新动议。DDE计划已被国际地科联批准为首个国际地科联认可的大科学计划，执行期10年（2019-2028）。
            DDE计划旨在建立地球大数据关联集点，提供深时的地质、地理数据，以及这些数据的属性，使用者可由此深度认知地球资源、材料的分布与价值，以及
            地质灾害信息等，从而推演地球未来的地质情况。DDE作为一个新的平台，将有效地促进知识共享，并由此推动广泛的国际合作。该计划将作为一个开放运
            行计划，鼓励地球科学和跨学科领域的广泛合作。" title="深时数字地球" copyRight="南京师范大学虚拟环境重点实验室"  src="http://localhost:3001/api/project/IOT"/>
        </>
    )
}
