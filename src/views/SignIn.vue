<template>
    <h1>Sign In to an Account</h1>
    <!-- Email -->
    <p><input type="email" placeholder="email" v-model="email" /></p>
    
    <!--Password Field Component-->
    <PasswordField v-model="password" placeholder="Enter your password" />

    <!--Error Message-->
    <p v-if="errMsg" style="color:red;">{{ errMsg }}</p>
    <!--Submit button-->
    <p><button @click="signIn">Submit</button></p>
    <!--Link to create an account-->
   <p> Don't have an account?
    <router-link to="/register" class="create-account">Click here</router-link>
   </p>
    <!--Link to password reset page-->
    <p><router-link to="/resetpassword" class="forgot">Forgot password?</router-link></p>
    <!--Google Sign In-->
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Philosopher&family=Poppins:wght@300&display=swap');

.create-account, .forgot{
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    color: #000000;
}


</style>
