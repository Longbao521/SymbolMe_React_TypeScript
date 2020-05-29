import { Login, PersonalInfo, NotFound, CesiumViewer, Skill, DeepEarth, Video3D, Editor } from '../views'

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
}, {
    pathname: '/project/deepEarth',
    component: DeepEarth
}, {
    pathname: '/project/video3D',
    component: Video3D
}, {
    pathname: '/blog/editor',
    component: Editor
}]
// FIXME:后期增加权限认证
export const adminRouter = [{
    pathname:'/admin/personInfo',
    component: PersonalInfo
}]
