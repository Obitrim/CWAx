<template>
    <a 
        href="#"
        class="sidebar_toggler p-2"
        @click.prevent="onClick"
        >
        <i class="fa fa-align-right"></i>
    </a>
</template>

<script>
import { eventBus } from '@/event-bus.js';

export default {
    methods: {
        onClick(){
            eventBus.$emit('sidebar-clicked');
        }
    }
};
</script>