import React, { ReactElement, useState } from 'react'
import MarkdownEditor from '@uiw/react-markdown-editor';
import './Editor.less'

export default function Editor(): ReactElement {
    const [markdown, setMarkDown] = useState<string>('')
    return (
        <MarkdownEditor
            value={markdown}
            onChange={(): void => setMarkDown(markdown)}
      />
    )
}
