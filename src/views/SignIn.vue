<template>
    <h1>Sign In to an Account</h1>
    <p><input type="email" placeholder="email" v-model="email" /></p>
    <p><input type="password" placeholder="password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="signIn">Submit</button></p>
    <a>Forgot Password?</a>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';
import PasswordField from '../components/PasswordField.vue';

const email = ref('')
const password = ref('')
const errMsg = ref()
const router = useRouter()

const signIn = () => {

    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log("Signed In Successfully")

        console.log(auth.currentUser)
        router.push('/')
    })
    .catch((error) =>{
        console.log(error.code);
       switch (error.code){
        case 'auth/invalid-email':
            errMsg.value = "Invalid email";
            break;
        case 'auth/user-not-found':
            errMsg.value = "No account with that email was found";
            break;
        case 'auth/wrong-password':
            errMsg.value = 'Incorrect password';
            break;
        default:
            errMsg.value = 'Email or password was incorrect';
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
