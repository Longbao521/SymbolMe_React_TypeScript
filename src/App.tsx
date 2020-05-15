import React, { ReactElement } from 'react';
import { DatePicker } from 'antd'
import { Login } from './views'

export default function App(): ReactElement {
  return (
    <>
      <Login />
      <DatePicker />
    </>
  );
}
