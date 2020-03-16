<template>
    <div class="home_layout d-flex">
        <!-- sidebar -->
        <app-sidebar title="CWAx">
            <ul class="navbar_nav my-4">
                <router-link 
                    :to="{ name: 'landing' }" 
                    tag="li" 
                    exact-active-class="active"
                    >
                    <a href="/app">Home</a>
                </router-link>
                <router-link 
                    :to="{ name: 'calculator' }" 
                    tag="li" 
                    exact-active-class="active"
                    >
                    <a href="/app/cwa-calculator">CWA calculator</a>
                </router-link>
                <router-link 
                    :to="{ name: 'estimator' }" 
                    tag="li" 
                    exact-active-class="active"
                    >
                    <a href="/app/score-estimate">Score Estimator</a>
                </router-link>
                <router-link 
                    to="/login" 
                    tag="li" 
                    exact-active-class="active"
                    >
                    <a href="/login">Login</a>
                </router-link>
                <router-link 
                    to="/register" 
                    tag="li" 
                    exact-active-class="active"
                    >
                    <a href="/register">Register</a>
                </router-link>
            </ul>
        </app-sidebar>

        <!-- sidebar toggler -->
        <sidebar-toggler class="bg_primary"/>

        <div class="home_layout_content">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </div>
    </div>
</template>

<script>
import {eventBus} from '@/event-bus.js';
import AppSidebar from '@/components/navigations/AppSidebar.vue';
import SidebarToggler from '@/components/navigations/SidebarToggler.vue';

export default {
    components: {
        AppSidebar,
        SidebarToggler
    },

    methods: {
        routeTo(route){
            this.$router.push(route);
        }
    },

    mounted(){
        let breakPoint = 768;
        
        if(window.innerWidth >= breakPoint){
            eventBus.$emit('sidebar-clicked');
        }
        
        window.addEventListener('resize', function(){
            if(window.innerWidth >= breakPoint){
                eventBus.$emit('sidebar-clicked');
            } else {
                eventBus.$emit('sidebar-clicked', false);
            }
        });
    }
};
</script>