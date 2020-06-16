<template>
    <div class="landing_page">
        <header class="text-center d-flex align-items-center py-5 bg_primary banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1 banner_content">
                        <h1 class="text-warning">CWAx</h1>
                        <p class="text-white">
                            Save your per semester results, calculate your CWA and make score predictions for an increase, controlled decrease or a maintenance of your CWA all in one place
                        </p>
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

        <main class="intro_guide">
            <section class="intro text-center py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <h2 class="text_primary">Why use CWAx ?</h2>
                            <p class="my-3">
                                CWAx is a Web Application making it accessible by students everywhere and on any device with an internet connection. Did you want to increase your CWA by a specific amount but did not know what effort was expected of you achieve your aim? CWAx is for you. In CWAx, you can calculate your Cumulative Weighted Average (CWA) or make score predictions for an increase, controlled decrease or maintenance of one's CWA, giving you some level of control over one's CWA
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="text-center py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <h2 class="text-center text_primary">Calculate CWA</h2>
                            <p class="my-3">
                                Calculate your Cumulative Weighted Average using the CWAx CWA calculator
                            </p>
                            <button 
                                type="button"
                                class="btn mx-auto mt-4 bg_primary text-white"
                                @click="routeTo({name: 'calculator'})"
                                >
                                Calculate now!
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="text-center py-5">
                <div class="container">
                    <div class="row">
                    <div class="col-md-10 offset-md-1">
                            <h2 class="text_primary">Estimate Score</h2>
                            <p class="my-3">
                                Not knowing how much effort to put into studies is sometimes stressful. Estimate some potential scores to attain in your examination in ordert to maintain, increase or decrease controllably your CWA.
                            </p>
                            <button 
                                type="button"
                                class="btn mx-auto mt-4 bg_primary text-white"
                                @click="routeTo({name: 'estimator'})"
                                >
                                Estimate Scores
                            </button>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import {eventBus} from '@/event-bus.js';

export default {
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