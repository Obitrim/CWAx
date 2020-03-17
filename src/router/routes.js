import AppLogin from '@/views/auth/AppLogin.vue';
import LandingPage from '@/views/app/LandingPage.vue';
import AppRegister from '@/views/auth/AppRegister.vue';

// Master routes
import Dashboard from '@/views/master/Index.vue';
import MasterLayout from '@/views/layouts/MasterLayout.vue';
import CWACalculator from '@/views/master/calculators/CWACalculator.vue';
import ScoreEstimateCalculator from '@/views/master/calculators/ScoreEstimateCalculator.vue';

export default [
    {
        path: '/',
        name: 'home',
        component: LandingPage
    },
    {
        path: '/app',
        component: MasterLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'dashboard',
                component: Dashboard
            },
            {
                path: 'cwa-calculator',
                name: 'master-calculator',
                component: CWACalculator
            },
            {
                path: 'score-estimate',
                name: 'master-estimator',
                component: ScoreEstimateCalculator
            }
        ]
    },
    {
        path: '/cwa-calculator',
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
    {
        path: '/logout',
        name: 'logout',
        redirect: '/'
    }
   
];