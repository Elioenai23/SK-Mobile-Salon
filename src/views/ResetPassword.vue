<template>
    <div class="reset-password">
        <h1>Reset Password</h1>
        <p>Enter your email to receive a password reset link.</p>

        <input class="form-input"
            type="email"
            v-model="email"
            placeholder="Email"
            required
         />
         <button @click="resetPassword" :disabled="loading">
            {{ loading ? 'Sending...' : 'Send Reset Email' }}
         </button>
         <p v-if="message" class="success">{{ message }}</p>
         <p v-if="error" class="errors">{{ error }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import PasswordField from '../components/PasswordField.vue';
import PasswordValidation from '../components/PasswordValidation.vue';

//variables
const email = ref('');
const loading = ref(false);
const message = ref('');
const error = ref('');

//Reset password function
const resetPassword = async () => {
    loading.value = true;
    message.value = '';
    error.value = '';


    const auth = getAuth();
    
    try {
        await sendPasswordResetEmail(auth, email.value);
        message.value = 'Password reset email sent. Please check your inbox.';
    } catch (err) {
        error.value = err.code === 'auth.user-not-found' ? 'No account found with that email' : 'Something went wrong. Please try again.';
    } finally{
        loading.value = false;
    }

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Philosopher&family=Poppins:wght@300&display=swap');

h1{
    align-items: center;
}
.reset-password{
    display: flex;
    position: relative;
}

</style>