<template>
    <div 
        class="sidebar" 
        v-if="sidebarVisible"
        @click.self="openSidebar(false)"
        >
        <div class="sidebar_inner bg-white h-100">

            <!-- header -->
            <div class="d-flex justify-content-between align-items-center p-3 bg_primary text_light">
                <h3 class="m-0">{{ title }}</h3>
                <a 
                    href="#"
                    class="text_light p-1 icon_close"
                    @click.prevent="openSidebar(false)"
                    >
                    <i class="fa fa-times"></i>
                </a>
            </div>

            <!-- nav links -->
            <nav>
                <slot />
            </nav>
        </div>
    </div>
</template>

<script>
import { eventBus } from '@/event-bus.js';

export default {
    props: {
        title: {
            type: String,
            default: "Title"
        }
    },

    data(){
        return {
            sidebarVisible: false
        }
    },
    
    methods: {
        openSidebar( open = true ){
            this.sidebarVisible = open;
        }
    },

    created(){
        eventBus.$on('sidebar-clicked', this.openSidebar);
    }
};
</script>