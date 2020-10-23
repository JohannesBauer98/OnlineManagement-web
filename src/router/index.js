import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterView from '../components/RouterView.vue';
import { i18n } from '@/main';

Vue.use(VueRouter)

const routes = [{
    path: '',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: 'signup',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: 'forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/:lang",
      component: RouterView,
      beforeEnter(to, from, next) {
        const lang = to.params.lang;
        if (!["en", "de"].includes(lang)) return next("de");
        if (i18n.locale !== lang) {
          i18n.locale = lang;
        }
        return next();
      },
      children: routes
    },
    {
      path: "*",
      redirect: "/de"
    }
  ]

})

export default router