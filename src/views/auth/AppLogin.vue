<template>
    <div class="auth_view">
        <auth-layout btnText="Register">
            <template #header-content>
                <div class="pt-5">
                    <h1>Heading</h1>
                </div>
            </template>
            <template>
                <form 
                    method="POST" 
                    action="#"
                    @submit.prevent="submit"
                    >
                    <div class="form-group my-4">
                        <input 
                            type="email" 
                            name="email"
                            class="w-100 py-3 px-4"
                            placeholder="Email"
                            >
                    </div>
                    <div class="form-group my-4">
                        <input 
                            type="password" 
                            name="password"
                            class="w-100 py-3 px-4"
                            placeholder="Password"
                            autocomplete
                            ref="passwordField"
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

    data(){
        return {
            passwordVisible: false
        }
    },

    methods: {
        submit(){
            console.log('Submitting');
        },

        togglePasswordVisibility(){
            let passwordField = this.$refs.passwordField;
            let inputType = passwordField.getAttribute("type");
            let isTypePassword = inputType === "password";
            passwordField.setAttribute(
                "type" , 
                isTypePassword ? 'text': 'password'
            );

            this.passwordVisible = isTypePassword;
        }

    }
};
</script>