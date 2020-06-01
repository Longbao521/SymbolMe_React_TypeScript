import React, { ReactElement, useState, useEffect } from 'react'
import { Button, notification, Input } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import { AlertBox } from '../../components'
import "react-mde/lib/styles/css/react-mde-all.css";
import './Editor.less'
import request from '../../services/api'
const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

export default function Editor(): ReactElement {
    // 从缓存中得到初始内容， FIXME:提示用户切换页面要用Ctrl+S保存
    const historyContent: string | null = window.localStorage.getItem('history')
    const [markdown, setMarkDown] = useState<string>(historyContent ? historyContent : '')
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [modalLoading, setModalLoading] = useState<boolean>(false)
    const [blogClass, setBlogClass] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const handleSubmit = (): void => {
        setModalVisible(true)
    }
    const handleChange = (value: string): void => {
        setMarkDown(value)
    }
    const onOk = async(): Promise<void> => {
        const {data, status} = await request.post(`/api/blog/upload/${blogClass}/${title}`, {markdown})
        if(status === 200) {
            setModalVisible(false)
            setModalVisible(false)
            notification.open({
                message: '保存成功',
                description:
                    '博客已保存 .',
                icon: <SmileOutlined style={{ color: '#108ee9' }} />,
            });
        } else {
            notification.open({
                message: '保存失败',
                description:
                    '博客保存失败 .',
                icon: <FrownOutlined style={{ color: '#108ee9' }} />,
            });
        }
    }
    const onCancel = (): void => {
        setModalVisible(false)
    }
    const handleSave = (event: KeyboardEvent): void => {
        if (event.key === 's' && event.ctrlKey) {
            // 阻止原生的保存网页的行为
            event.preventDefault()
            window.localStorage.setItem('history', markdown)
            // 提示保存成功
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
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown): Promise<string> =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
            />
            <Button type="primary" className="submit-btn" onClick={handleSubmit}>submit</Button>
            <AlertBox visible={modalVisible} title="提交博客" onOk={onOk} onCancel={onCancel} loading={modalLoading}>
                {/* defaultValue用于非受控组件，value用于受控组件 */}
                <Input placeholder="输入一个分类:(如React)" value={blogClass} onChange={(event): void=> setBlogClass(event.currentTarget.value)}/>
                <Input placeholder="输入一个标题:(如Hook)" value={title} onChange={(event): void=> setTitle(event.currentTarget.value)}/>
            </AlertBox>
        </div>
    )
}
