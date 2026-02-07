<template>
    <header>
       <button
        class="hamburger"
        v-if="isMobile"
        @click="toggleNav"
        >
        ☰
      </button>
       <div
    class="nav-hotspot"
    @mouseenter="showNav"
  ></div>

    <div class="nav-container">
    <nav class="nav" :class="{retracted: isRetracted}" @mouseenter="!isMobile && showNav()" @mouseleave="!isMobile && scheduleHide()">
     
        <router-link to="/" class="item">Home</router-link>
        <router-link to="/register" class="item" v-if="!isLoggedIn">Register</router-link>
        <router-link to="/sign-in" class="item" v-if="!isLoggedIn">Sign In/Log In</router-link>
        <router-link to="/about" class="item">About</router-link>
        <router-link to="/portfolio" class="item">Portfolio</router-link>
        <router-link to="/services" class="item">Services</router-link>

        <button @click="handleSignOut" v-if="isLoggedIn" class="signout-btn">Sign Out</button>
    </nav>
    </div>
</header>
 <router-view />

 <footer class="footer">
    <div class="f-box">Copyright &copy; 2025</div>
    <div>Powered by <a href="https://vuejs.org"></a> Vue.js</div>
 </footer>

</template>

<script setup>

//Allows the user to sign out
import { onMounted, ref , onBeforeUnmount} from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from './router';
import { db } from './firebase';

const AUTO_HIDE_DELAY = 2500;

const startAutoHide = () => {
  clearTimeout(timeoutId)
  timeoutId = setTimeout(()=>{
    isRetracted.value = true
  }, AUTO_HIDE_DELAY)
}

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

//Functions for the transitioning of the navbar
let showTimeout;

const isRetracted = ref(false);
let timeoutId;

const showNav = () => {
  if (isMobile.value) return  //modified handlers for mobile view
  isRetracted.value = false
  clearTimeout(timeoutId)
};

const scheduleHide = () => {
  if(isMobile.value) return
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    isRetracted.value = true;
  }, 3000);
};
onBeforeUnmount(() => {
  clearTimeout(timeoutId);
});

onMounted(() => {
  scheduleHide();
});

//This entire block of code is for the mobile view of the app
const isMobile = ref(window.innerWidth <= 768)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768

  if (isMobile.value) {
    isRetracted.value = true
    clearTimeout(timeoutId)
  } else {
    scheduleHide()
  }
}

onMounted(()=> {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(()=>{
  window.removeEventListener('resize', handleResize)
})

onMounted(()=>{
  if (!isMobile.value){
    scheduleHide()
  } else {
    isRetracted.value = true
  }
});

const toggleNav = () =>{
  isRetracted.value = !isRetracted.value

  if(!isRetracted.value){
    startAutoHide()
  } else {
    clearTimeout(timeoutId)
  }
}

</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

header{
  height: 0;
}
a {
  text-decoration: none;
  text-shadow: 4px 4px 4px #000;
  color: #fff;
  letter-spacing: 2px;
  transition: 400ms cubic-bezier(0.7, -0.6, 0.3, 1.2) text-shadow,
    400ms cubic-bezier(0.7, -0.6, 0.3, 1.2) letter-spacing;
}

.nav-container {
  width: auto;
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;

}

nav {
    top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 80px;
  background: #eec0c8;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 15px;
}

.nav {
  width: 50%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  padding: 10 2em;
   background: #f70077;
   z-index: 1000;  
   transition:transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms ease-out;
   
    

}
.nav.retracted {
  transform: translate(-50%, -120%);
   opacity: 0;
  pointer-events: none;
   transition: transform 500ms cubic-bezier(0.7, 0, 0.84, 0), opacity 300ms ease-in;
    
    
}
.nav-hotspot {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 25px;
  z-index: 999;
  transition: transform 0.3s ease-in-out ;
}

.item a {
  position: relative;
  user-select: none;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 20px;
}

.item a:before {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: #fff;
  box-shadow: 1px 1px 1px #000;
  transform: scaleX(0);
  transition: 400ms cubic-bezier(0.7, -0.6, 0.3, 1.2) transform;
}

.item a:hover {
  text-shadow: 1px 1px 1px #000;
  letter-spacing: 5px;
}

.item a:hover:before {
  transform: scaleX(1);
}
.signout-btn {
    
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    margin-left: 20px;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  color: white;
  cursor: pointer;
  position: fixed;
  top: 12px;
  left: 16px;
  z-index: 1100;
}

/* Mobile screen  */
@media (max-width: 768px) {
  .nav {
    width: 90%;
    flex-direction: column;
    height: auto;
    padding: 1em 0;
    top: 60px;
    width: 90%;
  }

  .hamburger {
    display: block;
    margin-bottom: 1em;
  }

  .item {
    margin: 10px 0;
  }

  .nav.retracted {
    transform: translate(-50%, -200%);
    opacity: 0;
  }
}

@media (max-width: 768px){
  .nav-hotspot {
    display: none;
  }
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