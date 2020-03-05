import LandingPage from '@/views/LandingPage.vue';
import AppLogin from '@/views/auth/AppLogin.vue';
import AppRegister from '@/views/auth/AppRegister.vue';

export default [
    {
        path: '/',
        name: 'home',
        component: LandingPage
    },
    {
        path: '/login',
        name: 'login',
        component: AppLogin
    },
    {
        path: '/register',
        name: 'register',
        component: AppRegister
    }
];