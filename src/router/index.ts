import { createRouter, createWebHashHistory } from 'vue-router'

import { registerGuards } from './guards'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

registerGuards(router)

export default router
