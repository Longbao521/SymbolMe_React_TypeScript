// cretaeStore为创建仓库方法， applyMiddleware为使用中间件方法
import { createStore, applyMiddleware, StoreEnhancer, StoreEnhancerStoreCreator, Store } from 'redux';
// thunk是一个中间件用于实现异步action
import thunk from 'redux-thunk'
// 引入路由中间件
import { routerMiddleware } from 'connected-react-router'
// reducer是核心，他提供subscribe(订阅), getState(得到状态), dispatch(修改状态)三个方法
import reducers from './reducers'
import history from './history'
// 添加中间件
const storeEnhancer: StoreEnhancer = applyMiddleware(thunk, routerMiddleware(history))
// 创建加强版createStore
const storeEnhanceStoreCreator: StoreEnhancerStoreCreator =  storeEnhancer(createStore)
// 创建store
const store: Store = storeEnhanceStoreCreator(reducers)

export default store