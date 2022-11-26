import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import routes from './router'
import store from './store'
import './public-path'

Vue.config.productionTip = false
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
let instance = null
function render (props = {}) {
  const { container } = props
  //  router = new VueRouter({
  //    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
  //    mode: 'history',
  //    routes
  //  })
  const VueRouter = props.VueRouter || window.VueRouter
  Vue.use(VueRouter)
  const router = new VueRouter({
    mode: 'hash',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props) {
  console.log('[vue] props from main framework', props)
  render(props)
}
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
