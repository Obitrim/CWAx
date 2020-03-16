<template>
    <div class="auth_view">
        <auth-layout btnText="Register">
            <template #header-content>
                 <h1 class="pt-4">Login</h1>
                 <p class="mb-5">To secure your academic results from unauthorized access, provide your valid Username and Master Password</p>
            </template>
            <template>
                <form 
                    method="POST" 
                    @submit.prevent="submit"
                    >
                    <div class="form-group my-4">
                        <input 
                            type="text" 
                            name="username"
                            class="w-100 py-3 px-4"
                            placeholder="Username"
                            >
                    </div>
                    <div class="form-group my-4">
                        <base-password-field placeholder="Master Password"/>
                    </div>
                    <div class="form-group">
                        <button 
                            type="submit"
                            class="btn btn_login bg-white w-100 elevate b_round mt-4 py-3"
                            @click.prevent="submit"
                            >
                            Login
                        </button>
                    </div>
                </form>
            </template>
        </auth-layout>
    </div>
</template>

<script>
import AuthLayout from '@/views/layouts/AuthLayout.vue';

export default {
    components: {
        AuthLayout
    },

    methods: {
        submit(){
           console.log('AppLogin: Form submit');
        },

    }
};
</script>