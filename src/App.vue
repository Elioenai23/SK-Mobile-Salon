<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/sign-in">Sign In/Log In</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/services">Services</router-link>

        <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
    </nav>

 <router-view />

</template>

<script setup>
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

</style>
