<template>
    <div class="auth_view">
        <auth-layout>
            <template #header-content>
                <div class="py-4">
                    <h1 class="text-warning">Register</h1>
                    <p class="mb-0 text-warning">*All fields are required</p>
                </div>
            </template>
            <template>
                <form method="POST" @submit.prevent="submit">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input 
                            type="text" 
                            name="username"
                            id="username"
                            class="w-100 py-2 px-3"
                            placeholder="Username"
                            ref="usernameField"
                            v-model="credentials.username"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            class="w-100 py-2 px-3"
                            placeholder="Email"
                            ref="emailField"
                            v-model="credentials.email"/>
                    </div>
                    <div class="form-group my-3">
                        <label for="new-password">New Password</label>
                        <base-password-field 
                            placeholder="New Password" 
                            id="new-password" 
                            v-model="credentials.newPassword"/>
                    </div>
                    <div class="form-group my-3">
                        <label for="confirm-password">Confirm Password</label>
                        <base-password-field 
                            placeholder="Confirm Password" 
                            id="confirm-password" 
                            v-model="credentials.confirmationPassword"/>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn_login bg-white w-100 elevate b_round mt-4 py-3">
                            Register
                        </button>
                    </div>
                </form>
            </template>
        </auth-layout>
    </div>
</template>

<script>
import validator from '@/services/validator.js';
import AuthLayout from '@/views/layouts/AuthLayout.vue';

export default {
    components: { AuthLayout },

    data(){
        return {
            credentials: {
                email: '',
                username: '',
                newPassword: '',
                confirmationPassword: ''
            }
        }
    },

    methods: {
        submit(){
            if(!validator.validUsername(this.credentials.username)){
                swal('Invalid Username', 'Username must have 6 or more characters ', 'error').then(() => {
                    this.$refs.usernameField.focus();
                });
                return;
            }

            if(!validator.validEmail(this.credentials.email)){
                swal('Invalid Email', 'Email provided is invalid', 'error').then(() => {
                    this.$refs.emailField.focus();
                });
                return;
            }

            if(!validator.passwordMatched(this.credentials.newPassword, this.credentials.confirmationPassword)){
                swal('Password Mismatch', 'New Password and confirmation password do not match', 'error');
                return;
            }

            this.$store.dispatch('registerUser', this.credentials);
        },
    }
};
</script>