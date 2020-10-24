import Vue from 'vue'
import Router from 'vue-router'
import RouterView from './views/RouterView.vue';
import i18n from "@/plugins/i18n";

import DashboardPage from '@/views/dashboard/DashboardPage.vue';

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
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginPage.vue'),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/Signup.vue'),
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('@/views/ForgotPassword.vue'),
        meta: {
            requiresAuth: false
        }
    }
]

let router = new Router({
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
        }
    ]

})

router.beforeEach((to, from , next) => {
    // @ToDo: Authentifizierung implementieren
    //AuthModule.initAuth();
    //prevent endless recursion
    if(to.meta.requiresAuth) {
        const istAuthenticated = false;

        if(!istAuthenticated) {
            //AuthModule.removeToken();
            next("/" + to.params.lang + "/login");
        }
    }
    next();
});

export default router;