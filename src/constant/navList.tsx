import { createFromIconfontCN } from '@ant-design/icons';
import React from 'react';

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1829892_pscgnd2gljb.js', // 在 iconfont.cn 上生成
});

const navList = [
    { key: '1', path: '/personInfo', icon: <MyIcon type="icon-gerenxinxi-" />, text: '个人信息' },
    {
        key: '2', path: '/project', icon: <MyIcon type="icon-xiangmu" />, text: '项目经历', children: [
            { key: '2.1', path: '/project/deepEarth', text: '深时地球' },
            { key: '2.2', path: '/project/DDG', text: '全球离散格网' },
        ]
    },
    { key: '3', path: '/skill', icon: <MyIcon type="icon-jishu" />, text: '技术栈' },
    { key: '4', path: '/blog', icon: <MyIcon type="icon-bokeyuan" />, text: '博客' },
    { key: '5', path: '/cesium', icon: <MyIcon type="icon-diqiu" />, text: 'Cesium平台' },
]
// export default不能像export一样放在变量声明前面
export default navList
 