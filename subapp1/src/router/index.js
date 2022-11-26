import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/subapp1'
  },
  {
    path: '/subapp1',
    name: 'subapp1',
    component: HomeView
  },
  {
    path: '/subapp1/about',
    name: 'subapp1About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // component: AboutView
  }
]

// const router = new VueRouter({
//   mode: 'hash',
//   routes
// })

export default routes
