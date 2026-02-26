<template>
    <section class="signin-section">
    <h1>Sign In to an Account</h1>
    <!-- Email -->
    <p><input type="email" placeholder="email" v-model="email" /></p>
    
    <!--Password Field Component-->
    <PasswordField v-model="password" placeholder="Enter your password" />

    <!--Error Message-->
    <p v-if="errMsg" style="color:red;">{{ errMsg }}</p>
    <!--Submit button-->
    <p><button @click="signIn" class="submit-btn">Submit</button></p>
    <!--Link to create an account-->
   <p> Don't have an account?
    <router-link to="/register" class="create-account">Click here</router-link>
   </p>
    <!--Link to password reset page-->
    <p><router-link to="/resetpassword" class="forgot">Forgot password?</router-link></p>
    <!--Google Sign In-->
    <p><button @click="signInWithGoogle" class="google-btn">Sign In With Google</button></p>
    </section>
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
const isPasswordValid = ref(false)

const signIn = () => {
      //  if(!isPasswordValid.value){
       // console.log("Password is invalid.");
       // return;
  //  }

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
        console.error("Sorry, there was an error signing in your account")
    }) 

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Philosopher&family=Poppins:wght@300&display=swap');

.create-account, .forgot{
    font-family: 'Poppins', sans-serif;
    text-decoration: underline;
    
    
}
.signin-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    padding: 2rem;
}

.signin-section > * {
    width: 100%;
    max-width: 400px;
}


.signin-section input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.signin-section h1 {
 text-align: center;
    font-size: 5rem;
    font-family: var(--font-02);  
    margin: 1em; 
}


.signin-section p {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
}


.submit-btn {
    width: 100%;
    padding: 0.8rem;
    margin-top: 0.8rem;
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

a{
    text-decoration: underline;
    color: black;
}
</style>
