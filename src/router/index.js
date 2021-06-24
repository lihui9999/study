import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
  },{
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/message/Message')
  }, {
    path: '/more',
    name: 'More',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/more/More')
  },
  {
    path: '/person',
    name: 'PersonalInfo',
    component: () => import(/* webpackChunkName: "person" */ '../views/personalInfo/PersonalInfo'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

