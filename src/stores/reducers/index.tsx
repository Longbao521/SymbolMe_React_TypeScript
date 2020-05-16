import { combineReducers, ReducersMapObject, AnyAction } from 'redux';
import Login, { LoginState } from './Login'
// redux与路由结合,并不是ConnetedRouter组件
import { connectRouter,  RouterState } from 'connected-react-router'
import history from '../history'

export interface CombinedState {
    login: LoginState;
    router: RouterState;    // 这个是状态的类型，不含行为
}
// 用于将reducers进行组合
const reducers: ReducersMapObject<CombinedState, any > = {
    login: Login,
    router: connectRouter(history)    // AnyAction 与 LocationChangeAction不兼容
}

export default combineReducers(reducers)