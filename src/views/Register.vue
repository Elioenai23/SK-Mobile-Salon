<template>
    <h1>Create an Account</h1>
    <p><input type="email" placeholder="email" v-model="email" /></p>
    <p><input type="password" placeholder="password" v-model="password" /></p>
    
    <!--Password validation component with Regex-->
    <PasswordValidation v-model="password" @valid="isPasswordValid = $event" />

    <p><button :disabled="!isPasswordValid" @click="register">Submit</button></p>

    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';
import PasswordValidation from '../components/PasswordValidation.vue'
import PasswordField from '../components/PasswordField.vue';

const email = ref('')
const password = ref('')
const router = useRouter()
const isPasswordValid = ref(false)


const register = () => {
    if(!isPasswordValid.value){
        console.log("Password is invalid");
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

</style>
