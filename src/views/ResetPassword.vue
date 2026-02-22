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
         <button class="submit-btn" @click="resetPassword" :disabled="loading">
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

/*.reset-password{
    font-family: 'Poppins', sans-serif;
    text-decoration: underline;
    
    
} */
.reset-password {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    padding: 2rem;
}

.reset-password > * {
    width: 100%;
    max-width: 400px;
}


.reset-password input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.reset-password h1 {
 text-align: center;
    font-size: 5rem;
    font-family: var(--font-02);  
    margin: 1em; 
}


.reset-password p {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
}


.submit-btn {
    width: 100%;
    padding: 0.8rem;
    border-radius: 25px;
    border: none;
    background-color: pink;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s ease;
}

.submit-btn:hover {
    opacity: 0.85;
}

.submit-btn:disabled {
    background-color: #ddd;
    cursor: not-allowed;
}

</style>