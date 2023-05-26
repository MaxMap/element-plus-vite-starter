import { defineStore } from 'pinia'

interface State {
    token: null | string
  }
export const globalStore = defineStore('global', {
    persist: {
        enabled: true
      },
    state:():State => {
        return {
            token: null
        }
    },
    getters: {
        getToken: (state) => state.token
    },
    
    actions: {
        setToken() {
            this.token = '123456'
        }
    }
})