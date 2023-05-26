export default [
    {
        path: '/404',
        name: 'notFound',
        meta: {
          title: '404',
        },
        component: () => import('../404.vue'),
    },
    {
        path: '/403',
        name: 'notFound',
        meta: {
          title: '403',
        },
        component: () => import('../403.vue'),
      },
]