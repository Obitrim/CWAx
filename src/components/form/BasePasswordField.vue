<template>
     <div class="base-password-field">
        <input 
            type="password" 
            name="password"
            class="w-100 py-2 px-3"
            :id="id"
            :placeholder="placeholder"
            ref="passwordField"
            @input="onInput"
            autocomplete
            >
        <a href="#" 
            class="icon"
            v-if="passwordVisible"
            @click.prevent="togglePasswordVisibility"
            >
            <i class="fa fa-eye-slash"></i>
        </a>
        <a  href="#"
            class="icon" 
            v-else
            @click.prevent="togglePasswordVisibility"
            >
            <i class="fa fa-eye"></i>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'Password'
        },

        id: String
    },

    data(){
        return {
            value: '',
            passwordVisible: false
        }
    },

    methods: {
        togglePasswordVisibility(){
            let passwordField = this.$refs.passwordField;
            let isTypePassword = passwordField.getAttribute("type") === "password";
            passwordField.setAttribute("type", isTypePassword ? 'text': 'password');

            this.passwordVisible = isTypePassword;
        },

        onInput(evt){
            this.value = evt.target.value;
            this.$emit('input', this.value);
        }
    }
};
</script>