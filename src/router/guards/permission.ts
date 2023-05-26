import { NavigationGuardNext } from "vue-router"

export function permissionGuard(to: { path: string }, from: any, next: NavigationGuardNext) {
  next()
  // const token = localStorage.getItem('ms_token')
  // if (!token && to.path !== '/login') {
  //   next('/login')
  // } else {
  //   next()
  // }
}
