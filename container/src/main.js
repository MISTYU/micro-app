import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'
import VueRouter from 'vue-router'

const getActiveRule = (hash) => (location) => {
  return location.hash.startsWith(hash)
}
registerMicroApps([
  {
    name: 'subApp1',
    entry: 'http://192.168.2.3:8081',
    container: '#container',
    activeRule: getActiveRule('#/subapp1'),
    props: {
      data: {
        VueRouter
      }
    }
  }
])
// 启动 qiankun
start()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
