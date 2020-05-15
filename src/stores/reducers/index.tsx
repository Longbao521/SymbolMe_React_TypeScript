import { combineReducers, ReducersMapObject, AnyAction } from 'redux';
import Login, { LoginState } from './Login'

export interface CombinedState {
    login: LoginState;
}
// 用于将reducers进行组合
const reducers: ReducersMapObject<CombinedState, AnyAction> = {
    login: Login
}

export default combineReducers(reducers)