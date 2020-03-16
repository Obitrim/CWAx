<template>
    <div class="auth_view">
        <auth-layout>
            <template #header-content>
                <div >
                    <h1 class="py-4">Register</h1>
                </div>
            </template>
            <template>
                <form
                    method="POST"
                    @submit.prevent="submit"
                    >
                    <div class="form-group my-3">
                        <input 
                            type="text" 
                            name="username"
                            class="w-100 py-3 px-4"
                            placeholder="Username"
                            >
                    </div>
                    <div class="form-group my-3">
                        <input 
                            type="email" 
                            name="email"
                            class="w-100 py-3 px-4"
                            placeholder="Email"
                            >
                    </div>
                    <div class="form-group my-3">
                        <base-password-field placeholder="New Password"/>
                    </div>
                    <div class="form-group my-3">
                        <base-password-field placeholder="Confirm Password"/>
                    </div>
                    <div class="form-group">
                        <button 
                            type="submit"
                            class="btn btn_login bg-white w-100 elevate b_round mt-4 py-3"
                            @click.prevent="submit"
                            >
                            Register
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
        AuthLayout,
    },
    methods: {
        submit(){
            console.log('AppRegister: Form submit');
        },
    }
};
</script>