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
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: visible;
}
.register-section input {
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;
}

.register-section h1 {
 text-align: center;
    font-size: 5rem;
    font-family: var(--font-02);  
    margin: 1em; 
}
.register-section input[type="email"] {
  position: relative;
  margin-left: -1em;
  margin-bottom: 0.8em;
}

.register-section p {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
}


.google-btn{
    margin: 1em;
    border-radius: 2em;
    padding: 0.3em 1em;
    font-size: 0.9em;
    box-sizing: border-box;
}

.submit-btn{
    margin: 0.5em;
    border-radius: 2em;
    padding: 0.4em 1em;
    box-sizing: border-box;
    font-size: 0.8em;
}

.pw-field {
    margin: 0.2em 0.2em;
}
</style>
