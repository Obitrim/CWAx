<template>
    <div class="auth_view">
        <auth-layout>
            <template #header-content>
                <div>
                    <h1>Register</h1>
                </div>
            </template>
            <template>
                <form
                    method="POST" 
                    action="#"
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
                        <input 
                            type="password" 
                            name="password"
                            class="w-100 py-3 px-4"
                            placeholder="Password"
                            autocomplete
                            >
                        <a 
                            href="#" 
                            class="icon"
                            v-if="passwordVisible"
                            @click.prevent="togglePasswordVisibility"
                            >
                            <i class="fa fa-eye-slash"></i>
                        </a>
                        <a 
                            href="#"
                            class="icon" 
                            v-else
                            @click.prevent="togglePasswordVisibility"
                            >
                            <i class="fa fa-eye"></i>
                        </a>
                    </div>
                    <div class="form-group my-3">
                        <input 
                            type="password" 
                            name="confirmPass"
                            class="w-100 py-3 px-4"
                            placeholder="Confirm password"
                            autocomplete
                            >
                        <a 
                            href="#" 
                            class="icon"
                            v-if="confirmPassVisible"
                            @click.prevent="togglePasswordVisibility"
                            >
                            <i class="fa fa-eye-slash"></i>
                        </a>
                        <a 
                            href="#"
                            class="icon" 
                            v-else
                            @click.prevent="togglePasswordVisibility"
                            >
                            <i class="fa fa-eye"></i>
                        </a>
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

    data(){
        return {
            passwordVisible: false,
            confirmPassVisible: false
        }
    },

    methods: {
        submit(){
            console.log('Submitting');
        },

        togglePasswordVisibility(evt){
            let passwordField = evt.target;
            console.log(passwordField);
            let inputType = passwordField.getAttribute("type");
            let isTypePassword = inputType === "password";

            if(isTypePassword){
                passwordField.setAttribute(
                    "type" , 
                    isTypePassword ? 'text': 'password'
                );
            }

            this.passwordVisible = isTypePassword;
            this.confirmPassVisible = isTypePassword;
        }

    }
};
</script>