<template>
   <section class="register-section">
   <h1>Create an Account</h1>

    <!--Email input for the user-->
      <p> <input type="email" placeholder="Enter your email" v-model="email" required/> </p>

    <!--Password Field logic-->
    <PasswordField v-model="password" placeholder="Enter password" class="pw-field" />
    <PasswordField v-model="confirmPassword" placeholder="Confirm password" class="pw-field" />
    
    <!--Password validation component with Regex-->
    <PasswordValidation :password="password" :confirmPassword="confirmPassword" @valid="isPasswordValid = $event" />

    <p><button :disabled="!isPasswordValid" @click="register" class="submit-btn">Submit</button></p>

    <!--Google sign in-->
    <p><button @click="signInWithGoogle" class="google-btn">Sign In With Google</button></p>
    <p>Already have an account? <router-link to="/sign-in">Login</router-link></p>
   </section>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';

//Components
import PasswordValidation from '../components/PasswordValidation.vue'
import PasswordField from '../components/PasswordField.vue';


const email = ref('')
const password = ref('')
const router = useRouter()
const isPasswordValid = ref(false)
const confirmPassword = ref('')

//Register function
const register = () => {
    if(!isPasswordValid.value){
        console.log("Password is invalid or does not match.");
        return;
    }

    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log("Successfully registered")
        router.push('/')
    })
    .catch((error) =>{
        console.log(error.code);
        switch(error.code){

        }
    })
}

const signInWithGoogle = () => {
   const provider = new GoogleAuthProvider();
   signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user);
        router.push('/')
    })
    .catch((error) =>{
        console.error("Sorry, there was trouble creating your account")
    }) 

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Philosopher&family=Poppins:wght@300&display=swap');

.register-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    padding: 2rem;
}

.register-section > * {
    width: 100%;
    max-width: 400px;
}


.register-section input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.register-section h1 {
 text-align: center;
    font-size: 5rem;
    font-family: var(--font-02);  
    margin: 1em; 
}


.register-section p {
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

/* Google button */
.google-btn {
    width: 100%;
    padding: 0.8rem;
    border-radius: 25px;
    border: none;
    background-color: #4285F4;
    color: white;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
}

</style>
