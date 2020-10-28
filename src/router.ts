import Vue from 'vue'
import Router from 'vue-router'
import RouterView from './views/RouterView.vue';
import i18n from "@/plugins/i18n";

import DashboardPage from '@/views/dashboard/DashboardPage.vue';
import {AuthenticationModule} from "@/store/modules/authentication";
import FinancePage from "@/views/finance/FinancePage.vue";

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: () => import('@/views/main/MainPage.vue'),
        children: [
            {
                path: '',
                component: DashboardPage,
                meta: {
                    requiresAuth: true
                },
            }
        ]
    },
    {
        path: '/assets',
        component: () => import('@/views/main/MainPage.vue'),
        children: [
            {
                path: '',
                component: FinancePage,
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: () => import('@/views/signIn/SignIn.vue'),
        meta: {
            requiresAuth: false
        }
    },
]

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})

router.beforeEach((to, from , next) => {
    AuthenticationModule.initAuth().then(r => {
        if(to.meta.requiresAuth) {
            if(!AuthenticationModule.isAuthenticated) {
                AuthenticationModule.removeToken();
                next("/signIn");
            }
        }
        next();
    });
});

export default router;