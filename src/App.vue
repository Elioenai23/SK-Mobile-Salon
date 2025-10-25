<template>
    <header>
    <div class="nav">
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/sign-in">Sign In/Log In</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/services">Services</router-link>

        <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
    </nav>
    </div>
</header>
 <router-view />

 <footer class="footer">
    <div class="f-box">Copyright &copy; 2025</div>
    <div>Powered by Vue.js</div>
 </footer>

</template>

<script setup>

//Allows the user to sign out
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from './router';
import { db } from './firebase';

const isLoggedIn = ref(false);

let auth;
onMounted(() =>{
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    });
})


const handleSignOut = () =>{
    signOut(auth).then(() =>{
        router.push('/');
    });
}
</script>

<style scoped>

.nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--global-color-2);
    padding: 15px 0;    
}
.nav a {
   text-decoration: none;
    color: var(#fff);
    margin: 0 15px;
    font-weight: 500;
    font-size: 18px;
    /*justify-content: space-between;*/
    /*display: flex; */
    transition: all .4s ease;
    
}

.nav a:hover {
    color: var(--global-color-0);
}

footer {
    background-color: var(--global-color-2);
    color: var(--global-color-5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    position: fixed;
    bottom: 0;
    width: 100%;
}





</style>
