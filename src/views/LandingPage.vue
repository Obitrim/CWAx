<template>
    <div class="landing_page d-flex">
        <!-- sidebar -->
        <app-sidebar title="CWAx">
            <ul class="navbar_nav my-4">
                <router-link to="/" tag="li" exact-active-class="active">
                    <a>Home</a>
                </router-link>
                <router-link to="#" tag="li" exact-active-class="active">
                    <a>CWA calculator</a>
                </router-link>
                <router-link to="#" tag="li" exact-active-class="active">
                    <a>Score Estimator</a>
                </router-link>
                <router-link to="#" tag="li" exact-active-class="active">
                    <a>Login</a>
                </router-link>
                <router-link to="#" tag="li" exact-active-class="active">
                    <a>Register</a>
                </router-link>
            </ul>
        </app-sidebar>

        <div class="landing_page_content">
            <header class="text-center d-flex align-items-center py-5 bg_primary banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1 banner_content">
                            <h1 class="text_light">CWAx</h1>
                            <p class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quidem ipsam sed harum doloribus consequatur deserunt ex praesentium repellat itaque.</p>
                            <div class="btn_bar mb-3 mt-5">
                                <button 
                                    type="button" 
                                    class="btn mr-3 px-3 py-2"
                                    @click="routeTo('/login')"
                                    >
                                    Login
                                </button>
                                <button 
                                    type="button"
                                    class="btn btn-outline-light px-3 py-2"
                                    @click="routeTo('/register')"
                                    >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <!-- sidebar toggler -->
            <sidebar-toggler class="bg_primary"/>

            <main>
                <section class="intro text-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <h2 class="text_primary">Why use CWAx ?</h2>
                                <p class="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quaerat saepe aspernatur laudantium molestias est voluptas iste suscipit dolores perferdis.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="estimate_score text-center py-5">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-10 offset-md-1">
                                <h2 class="text_primary">Estimate Score</h2>
                                <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam repellat temporibus! Impedit debitis nam in repudiandae! Accusantium adipisci, modi molestiae veniam illum aspernatur saepe?</p>
                                <button 
                                    type="button"
                                    class="btn mx-auto mt-4 bg_primary text-white"
                                    >
                                    Estimate Scores
                                </button>
                        </div>
                        </div>
                    </div>
                </section>
                <section class="calculate_cwa text-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <h2 class="text-center text_primary">Calculate CWA</h2>
                                <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laboriosam repellat temporibus! Impedit debitis nam in repudiandae! Accusantium adipisci, modi molestiae veniam illum aspernatur saepe?</p>
                                <button 
                                    type="button"
                                    class="btn mx-auto mt-4 bg_primary text-white"
                                    >
                                    Calculate now!
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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