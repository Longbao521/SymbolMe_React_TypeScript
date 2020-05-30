import React, { ReactElement, useState } from 'react'
import MarkdownEditor from '@uiw/react-markdown-editor';
import './Editor.less'
import { Button } from 'antd';

export default function Editor(): ReactElement {
    const [markdown, setMarkDown] = useState<string>('')
    return (
        <>
            <MarkdownEditor
                value={markdown}
                onChange={(): void => setMarkDown(markdown)}
            />
            <Button type="primary" className="submit-tn">提交</Button>
        </>
    )
}
