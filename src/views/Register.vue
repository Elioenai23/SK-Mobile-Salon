<template>
    <h1>Create an Account</h1>

    <!--Email input for the user-->
    <p>
        <input type="email" placeholder="Enter your email" v-model="email" required/>
    </p>

    <!--Password Field logic-->
    <PasswordField v-model="password" placeholder="Enter password" />
    <PasswordField v-model="confirmPassword" placeholder="Confirm password" />
    
    <!--Password validation component with Regex-->
    <PasswordValidation :password="password" :confirmPassword="confirmPassword" @valid="isPasswordValid = $event" />

    <p><button :disabled="!isPasswordValid" @click="register">Submit</button></p>

    <!--Google sign in-->
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
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

    }) 

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Philosopher&family=Poppins:wght@300&display=swap');

</style>
