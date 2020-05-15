import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './stores'

render(
    // 使用Provider将store传下去
    <Provider store={ store }>
      <App/>
    </Provider>,
    document.querySelector('#root') as HTMLElement,
);
