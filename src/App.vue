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
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}
:root {
    --font-01: 'Poppins', sans-serif;
    --font-02: 'Philosopher', sans-serif;

    /* color  */
    --global-color-0: #e41345;
    --global-color-1: #f70077;
    --global-color-2: #1a1a1a;
    --global-color-3: #3e4359;
    --global-color-4: #f7f7f7;
    --global-color-5: #fff;
    --global-color-6: #243673;
    --global-color-7: #BFD1FF;

}
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







</style>
