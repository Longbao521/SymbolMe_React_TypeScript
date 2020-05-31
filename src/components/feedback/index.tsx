import React, { Component, ReactChild, ReactElement } from 'react'
import { Modal, Button } from 'antd';

type Props = {
    children: ReactChild | ReactChild[];
    visible: boolean;
    loading: boolean;
    title: string;
    onOk(): void;
    onCancel(): void;
}

export default function AlertBox(props: Props): ReactElement {
    return (
        <Modal
          visible={props.visible}
          title={props.title}
          onOk={props.onOk}
          onCancel={props.onCancel}
          footer={[
            <Button key="back" onClick={props.onCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={props.loading} onClick={props.onOk}>
              Submit
            </Button>,
          ]}
        >
          {props.children}
        </Modal>
    )
}