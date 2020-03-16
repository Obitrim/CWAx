import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes.js';
import { eventBus } from '@/event-bus.js';

Vue.use(Router);

const router = new Router({
    routes,
    mode: 'history',
    base: process.env.BASE_URL,
}); 

router.afterEach(() => {
    let isMobileView = window.innerWidth < 768;
    eventBus.$emit('sidebar-clicked', isMobileView ? false : true);
});

export default router;