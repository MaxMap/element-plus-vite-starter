export default [{
    name: 'index',
    path: '/home',
    component: () => import('@/layout/Layout.vue'),
    redirect:"/home/index",
    meta: {
        title: '首页',
    },
    children: [{
        path: 'index',
        name: '首页',
        component: ()=>import('@/views/Home/Home.vue'),
    }]
}]