// 引入动作类型
import { LOGIN, LOGOUT } from '../action-types';
import { AnyAction } from 'redux';
// 定义state的类型接口
export interface LoginState {
    isLogin: boolean;
    msg: string;
}

// 定义初始状态
const initState: LoginState = {
    isLogin: false,
    msg: ''
}

// 这就是reducer的函数,action的类型都为AnyAction, action的值会在后面进行指定
export default function(state: LoginState = initState, action: AnyAction): LoginState {
    switch(action.type) {
        case LOGIN:
            return { isLogin: true, msg: (action.payload || '') }
            break;
        case LOGOUT:
            return { isLogin: false, msg: (action.payload || '') }
            break;
        default:
            return state;
    }
}