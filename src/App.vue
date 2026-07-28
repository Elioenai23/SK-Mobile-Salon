<template>
    <header class = "site-header">
      <router-link to ="/">SK <span>Mobile Salon</span></router-link>

      <button class="hamburger" @click="isOpen = !isOpen" :aria-expanded="isOpen" aria-label="Toggle menu">
          <span :class="{open: isOpen}"></span>
      </button>
    
    <nav class="nav" :class="{open: isOpen}">
     
        <router-link to="/" class="item" @click="isOpen = false">Home</router-link>
        <router-link to="/about" class="item" @click="isOpen = false">About</router-link>
        <router-link to="/portfolio" class="item" @click="isOpen = false">Portfolio</router-link>
        <router-link to="/services" class="item" @click="isOpen = false">Services</router-link>
         <router-link to="/register" class="item" v-if="!isLoggedIn" @click="isOpen = false">Register</router-link>
        <router-link to="/sign-in" class="item" v-if="!isLoggedIn" @click="isOpen = false">Sign In</router-link>
        <button @click="handleSignOut" v-if="isLoggedIn" class="item signout-btn">Sign Out</button>
        <router-link to="/services" class="item book-btn" @click="isOpen = false">Book now</router-link>

        
    </nav>
</header>

 <router-view />

  <footer class="site-footer">
        <div class="footer-col">
            <p class="footer-brand">SK Mobile Salon</p>
            <p>121 Andringa St, Stellenbosch Central, Stellenbosch</p>
        </div>
        <div class="footer-col">
            <p><FontAwesomeIcon :icon="['fas', 'phone']" /> 000 000 0000</p>
            <p><FontAwesomeIcon :icon="['fas', 'envelope']" /> hello@skmobilesalon.co.za</p>
            <p><FontAwesomeIcon :icon="['fab', 'instagram']" /> @skmobilesalon</p>
        </div>
        <div class="footer-col footer-copy">
            <p>&copy; 2026 SK Mobile Salon</p>
        </div>
    </footer>

</template>

<script setup>

//Allows the user to sign out
import { onMounted, ref , onBeforeUnmount} from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from './router';
import { FontAwesomeIcon } from './icons';

//const AUTO_HIDE_DELAY = 2500;

//const startAutoHide = () => {
 // clearTimeout(timeoutId)
//  timeoutId = setTimeout(()=>{
  //  isRetracted.value = true
  //}, AUTO_HIDE_DELAY)
//}

const isLoggedIn = ref(false);
const isOpen = ref(false);

let auth;
onMounted(() =>{
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
       isLoggedIn.value = !!user;
    });
});


const handleSignOut = () =>{
    signOut(auth).then(() =>{
      isOpen.value = false;
        router.push('/');
    });
}
const handleResize = () => {
  if (window.innerHeight > 860) isOpen.value = false;
};
onMounted(()=> window.addEventListener('resize', handleResize));
onBeforeUnmount(()=> window.removeEventListener('resize', handleResize));

//Functions for the transitioning of the navbar
//let showTimeout;

//const isRetracted = ref(false);
//let timeoutId;

//const showNav = () => {
  //if (isMobile.value) return  //modified handlers for mobile view
  //isRetracted.value = false
  //clearTimeout(timeoutId)
//};

//const scheduleHide = () => {
  //if(isMobile.value) return
  //clearTimeout(timeoutId);
  //timeoutId = setTimeout(() => {
    //isRetracted.value = true;
  //}, 3000);
//};
//onBeforeUnmount(() => {
  //clearTimeout(timeoutId);
//});



//onMounted(() => {
  //scheduleHide();
//});

//This entire block of code is for the mobile view of the app
//const isMobile = ref(window.innerWidth <= 1200)

//const handleResize = () => {
  //isMobile.value = window.innerWidth <= 1200

  //if (isMobile.value) {
    //isRetracted.value = true
    //clearTimeout(timeoutId)
  //} else {
    //scheduleHide()
  //}
//}

/* onMounted(()=> {
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
} */

</script>

<style>
.site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1rem 2.5rem;
    background: var(--ink);
    border-bottom: 1px solid var(--line-on-dark);
}

.brand {
    font-family: var(--font-display);
    font-size: 1.4rem;
    color: var(--cream);
    text-decoration: none;
    letter-spacing: 0.02em;
}

.brand span {
    color: var(--gold-soft);
    font-weight: 300;
    font-style: italic;
}

.nav {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav .item {
    font-family: var(--font-body);
    font-size: 0.92rem;
    letter-spacing: 0.03em;
    text-decoration: none;
    color: var(--cream);
    text-transform: uppercase;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    position: relative;
}

.nav .item::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0;
    height: 1px;
    background: var(--gold);
    transition: width 0.3s ease;
}

.nav .item:hover::after,
.nav .item.router-link-active::after {
    width: 100%;
}

.nav .book-btn {
    text-transform: none;
    background: var(--gold);
    color: var(--ink);
    padding: 0.6rem 1.3rem;
    border-radius: 2px;
    font-weight: 500;
}

.nav .book-btn::after {
    display: none;
}

.hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 28px;
    height: 22px;
    position: relative;
}

.hamburger span,
.hamburger span::before,
.hamburger span::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--cream);
    transition: transform 0.3s ease, opacity 0.3s ease, top 0.3s ease;
}

.hamburger span { top: 10px; }
.hamburger span::before { top: -8px; }
.hamburger span::after { top: 8px; }

.hamburger span.open { background: transparent; }
.hamburger span.open::before { top: 0; transform: rotate(45deg); }
.hamburger span.open::after { top: 0; transform: rotate(-45deg); }

@media (max-width: 860px) {
    .hamburger { display: block; }

    .nav {
        position: fixed;
        inset: 65px 0 0 0;
        background: var(--ink);
        flex-direction: column;
        align-items: flex-start;
        gap: 1.6rem;
        padding: 2.5rem;
        transform: translateX(100%);
        transition: transform 0.35s ease;
    }

    .nav.open {
        transform: translateX(0);
    }
}

.site-footer {
    background: var(--ink);
    color: var(--cream);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    padding: 3rem 2.5rem;
    font-size: 0.9rem;
}

.footer-brand {
    font-family: var(--font-display);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--gold-soft);
}

.footer-col p {
    margin-bottom: 0.4rem;
    color: var(--cream-dim);
}

.footer-copy {
    align-self: flex-end;
}



</style>