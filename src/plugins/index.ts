import {registerRouter} from './router'
import {registerPinia} from './pinia'
import { App } from 'vue'

export function registerPlugins(app: App<Element>) {
    const plugins = [registerRouter,registerPinia]
    plugins.forEach(item=>{
      item(app)
    })
  }