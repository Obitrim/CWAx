import AppLogin from '@/views/auth/AppLogin.vue';
import LandingPage from '@/views/LandingPage.vue';
import AppRegister from '@/views/auth/AppRegister.vue';

// Master routes
import HomeLayout from '@/views/home/Index.vue';
import CWACalculator from '@/views/home/calculators/CWACalculator.vue';
import ScoreEstimateCalculator from '@/views/home/calculators/ScoreEstimateCalculator.vue';

export default [
    {
        path: '/',
        name: 'home',
        component: LandingPage
    },
    {
        path: '/app',
        name: 'master',
        component: HomeLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'landing',
                component: LandingPage
            },
            {
                path: 'cwa-calculator',
                name: 'cwa',
                component: CWACalculator
            },
            {
                path: 'score-estimate',
                name: 'estimator',
                component: ScoreEstimateCalculator
            }
        ]
    },
    {
        path: '/calculator',
        name: 'calculator',
        component: CWACalculator
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
    },
   
];