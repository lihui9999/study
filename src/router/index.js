import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
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
  },
  {
    path: '/courseCenter',
    name: 'courseCenter',
    component: () => import(/* webpackChunkName: "person" */ '../views/courseCenter/CourseCenter'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home'}):  next();
    }
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "person" */ '../views/login/Login'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home'}):  next();
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from ,next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login'});
})
export default router

