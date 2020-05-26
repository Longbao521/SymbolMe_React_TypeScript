import { Login, PersonalInfo, NotFound, CesiumViewer, Skill } from '../views'

export const mainRouter = [{
    pathname: '/login',
    component: Login
}, {
    pathname: '/personInfo',
    component: PersonalInfo
}, {
    pathname: '/404',
    component: NotFound
}, {
    pathname: '/cesium',
    component: CesiumViewer
}, {
    pathname: '/skill',
    component: Skill
}]
// FIXME:后期增加权限认证
export const adminRouter = [{
    pathname:'/admin/personInfo',
    component: PersonalInfo
}]
