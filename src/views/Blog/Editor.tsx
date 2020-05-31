import React, { ReactElement, useState, useEffect } from 'react'
import './Editor.less'
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

export default function Editor(): ReactElement {
    const [markdown, setMarkDown] = useState<string>('# React')
    const handleSubmit = (): void => {
        console.log(markdown)
    }
    const handleChange = (value: string): void => {
        console.log(value)
        console.log(markdown)
        setMarkDown(value)
    }
    const handleSave = (event: KeyboardEvent): void => {
        if (event.key === 's' && event.ctrlKey) {
            // 阻止原生的保存网页的行为
            event.preventDefault()
            // 提示保存陈宫
            notification.open({
                message: '保存成功',
                description:
                    '草稿已保存.',
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            });
        }
    }
    useEffect(() => {
        // 监听器的注册于取消必须使用相同的外部函数，切不能赋参数
        document.addEventListener('keydown', handleSave)
        console.log(markdown)
        // 删除监听事件,会在每一次调用时删除
        return (): void => {
            document.removeEventListener('keydown', handleSave)
        }
        // 只有当markdown更新时，才会触发该函数
    }, [markdown])
    return (
        <div className="blog-editor">
            <ReactMde
                value={markdown}
                onChange={handleChange}
                generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
            />
            <Button type="primary" className="submit-btn" onClick={handleSubmit}>submit</Button>
        </div>
    )
}
