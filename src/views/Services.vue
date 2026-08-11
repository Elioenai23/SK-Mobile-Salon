<template>
    
    <section class="services-hero">
        <img src="/services-7.jpg" alt="" class="services-hero-img" />
        <div class="services-hero-scrim"></div>
        <div class="services-hero-content">
            <p class="eyebrow">What we offer</p>
            <h1>Services</h1>
        </div>
    </section>

    <svg class="braid-divider on-dark" viewBox="0 0 400 28" preserveAspectRatio="none">
        <path d="M0 14 Q 20 0, 40 14 T 80 14 T 120 14 T 160 14 T 200 14 T 240 14 T 280 14 T 320 14 T 360 14 T 400 14" />
        <path d="M0 14 Q 20 28, 40 14 T 80 14 T 120 14 T 160 14 T 200 14 T 240 14 T 280 14 T 320 14 T 360 14 T 400 14" />
    </svg>

    <section class="about-services">
        <p class="eyebrow" style="text-align:center;">Choose from our collection</p>
        <h2 class="lit-text">Every style, done by hand</h2>
        <p class="ser-text">Every style is done by hand, with the time taken to get parts, tension and finish right. Below is a starting point — get in touch for pricing and timing.</p>

        <div class="ser-box">
            <!--Service 1-->
            <div class="box">
                <div class="img">
                    <img src="/services-1.jpg" alt="Nails">
                </div>
                <div class="box-info">
                    <div class="ser-name">Nails</div>
                    <p class="ser-description">Tidy, long-lasting nail sets to finish any look.</p>
                </div>
            </div>
            <!--Service 2-->
            <div class="box">
                <div class="img">
                    <img src="/services-2.jpg" alt="Braids">
                </div>
                <div class="box-info">
                    <div class="ser-name">Braids</div>
                    <p class="ser-description">Classic box braids, sizes and lengths to suit you.</p>
                </div>
            </div>
            <!--Service 3-->
            <div class="box">
                <div class="img">
                    <img src="/services-3.jpg" alt="Locs">
                </div>
                <div class="box-info">
                    <div class="ser-name">Locs</div>
                    <p class="ser-description">Retwists, styling and maintenance for healthy locs.</p>
                </div>
            </div>
            <!--Service 4-->
            <div class="box">
                <div class="img">
                    <img src="/services-5.jpg" alt="French Curls">
                </div>
                <div class="box-info">
                    <div class="ser-name">French Curls</div>
                    <p class="ser-description">Soft, bouncy curl sets for everyday or special occasions.</p>
                </div>
            </div>
            <!--Service 5-->
            <div class="box">
                <div class="img">
                    <img src="/services-6.jpg" alt="Cornrows">
                </div>
                <div class="box-info">
                    <div class="ser-name">Cornrows</div>
                    <p class="ser-description">Clean, close-to-scalp braids in classic or custom patterns.</p>
                </div>
            </div>
            <!--Service 6-->
            <div class="box">
                <div class="img">
                    <img src="/services-7.jpg" alt="Knotless braids">
                </div>
                <div class="box-info">
                    <div class="ser-name">Knotless Braids</div>
                    <p class="ser-description">Lightweight, tension-free braids that lay flat from day one.</p>
                </div>
            </div>
            
        </div>      
    </section>
    
    <!--Discount section-->
    <!--<section class="discount-section">
        <div class="img">
            <img />
        </div>

        <div class="text-info">
            <h2></h2>
            <p></p>
        </div>
    </section> -->

    <!--Slider-->
   <!-- <section class="img-slider-text">
        <div class="img-slider">
           <img
                v-for="(image, index) in images"
                :key="index"
                :src="image"
                :alt="`Slide ${index + 1}`"
                :style="{transform: `translateX(-${currentSlide * 100}%)`}"
                class="slide"
            />
            
            <i class="fa-solid fa-chevron-left prev" @click="goPrev"></i>
            <i class="fa solid fa-chevron-right next" @click="goNext"></i>
        </div>
    </section> -->
    
    <section class="appointment-cta">
        <div class="btn-wrapper" v-if="!user">
            <p class="eyebrow">Ready to book</p>
            <h2>Make an appointment</h2>
            <p class="app-text">To book, please <router-link to="/sign-in">sign in</router-link> first.</p>
            <button @click="toggleForm" class="btn btn-outline" :disabled="!user">
                Make appointment
            </button>
        </div>

        <div v-else class="btn-wrapper">
            <p class="eyebrow">Ready to book</p>
            <h2>Make an appointment</h2>
            <button class="btn btn-solid" @click="toggleForm">
                {{ showForm ? "Close appointment form" : "Make appointment" }}
            </button>
        </div>
    </section>

    <section class="appointment-form-wrap" v-if="canShowForm && user">
        <AppointmentForm />
    </section>
</template>

<script setup>
import AppointmentForm from '../components/AppointmentForm.vue'
import { ref, computed} from 'vue';
import serviceVideo from '/services-4.mp4';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const sourceVideo = ref(serviceVideo)

const showForm = ref(false);
const user = ref(null)


const auth = getAuth();
onAuthStateChanged(auth, (u) => {
    user.value = u;
    if (!u) showForm.value = false
})

const canShowForm = computed(()=> user.value && showForm.value)


function toggleForm(){
    if (!user.value){
        alert("Please log in to make an appointment");
        return;
    } 
    showForm.value = !showForm.value 
}

/*const images = ref([
    '/services-1.jpg'
]);

const currentSlide = ref(0);

const goPrev = () => {
    currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length
}

const goNext = () => {
    currentSlide.value = (currentSlide.value + 1) % images.value.length
} */

console.log(AppointmentForm)

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Philosopher&family=Poppins:wght@300&display=swap');


/*.first-section {
    padding: 12rem 0% 15rem;
    position: relative;
}

.first-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/placeholder.jpg);
    z-index: -1;
    opacity: .7;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.first-section h1{
    text-align: center;
    font-size: 5rem;
    font-family: var(--font-02);
}

.about-services {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.about-services .lit-text {
    font-size: 2rem;
    font-weight: 400;
    font-family: var(--font-02);
    text-align: center;
    color: var(--global-color-1)
}

.about-services .ser-text{
    text-align: center;
    margin-bottom: 2rem;
}
.about-services .ser-box{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    color: #fff;
}

.about-services .ser-box .box{
    position: relative;
    top: 0;
}

.about-services .ser-box .box::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--global-color-1);
    z-index: 1;
    opacity: .1;
    transition: all .4s ease;
    border-radius: 2%;
}

.about-services .ser-box .box:hover::after{
    width: 0;
}

.about-services .ser-box .box .img {
     width: 100%;
    height: 100%;
    overflow-y: hidden;
}

.about-services .ser-box .box .img img{
     width: 100%;
    border-radius: 2%;
    height: 100%;
}

.about-services .ser-box .box .box-info {
    position: absolute;
    bottom: 5%;
    left: 3%;
    z-index: 2;

}

.about-services .ser-box .box .ser-name {
    padding-bottom: .8rem;
    font-size: 1.4rem;
    font-weight: 700;
    font-family: var(--font-02);
}

.about-services .ser-box .box .ser-description {
    font-family: var(--font-02);
}

.discount-section {
    padding: 7rem 5%;
    margin-bottom: 4rem;
}
.about-services .ser-box .box .img video {
    width: 100%;
    height: 100%;
    border-radius: 2%;
    object-fit: cover;
}

/*
.img-slider-text {
     height: 100vh; 
    display: flex;
    align-items: center; 
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;
}

.img-slider-text .img-slider {
    width: 400px;
    box-shadow: 0 0 18px #1a1a1a;
    position: relative;
    overflow: hidden;
    height: 100%;
    border-radius: 10px;
    padding: 18rem 0;
    margin: 1rem;
}

.img-slider-text .img-slider .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    height: 100%;
    z-index: -1;
    transition: all .5s ease;
    top: 0;
    left: 0;
} */
/*
.appointment-section {
  padding: 2rem 4rem 6rem;
  margin-top: 1rem;
  position: relative;
  z-index: 10;
  background: #fff;
  overflow-y: auto;
}

.btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.show-btn{
    border: none;
    background: pink;
    padding: 1rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.8rem;
    margin-bottom: 2em;
}

a {
    text-decoration: underline;
    color: black;
}
.app-text {
    margin-top: 2px;
    margin-bottom: 2em;
     
} */

.services-hero {
    position: relative;
    min-height: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    ;
}

.services-hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 15%
}

.services-hero-scrim {
    position: absolute;
    inset: 0;
    background: rgba(27, 17, 20, 0.72);
}

.services-hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: var(--cream);
}

.services-hero-content h1 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(2.6rem, 6vw, 4rem);
    margin-top: 0.5rem;
}

.about-services {
    padding: 5rem 4vw 3rem;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
}

.about-services .lit-text {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 2.1rem;
    text-align: center;
    color: var(--ink);
}

.about-services .ser-text {
    text-align: center;
    max-width: 55ch;
    color: var(--ink);
    opacity: 0.75;
    margin-bottom: 2.5rem;
}

.about-services .ser-box {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    color: #fff;
}

.about-services .ser-box .box {
    position: relative;
    top: 0;
    border-radius: 2px;
    overflow: hidden;
    transition: transform 0.35s ease;
}

.about-services .ser-box .box:hover {
    transform: translateY(-6px);
}

.about-services .ser-box .box::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(27, 17, 20, 0.85) 0%, rgba(27, 17, 20, 0.05) 55%);
    z-index: 1;
}

.about-services .ser-box .box .img {
    width: 100%;
    aspect-ratio: 3/4;
    overflow: hidden;
}

.about-services .ser-box .box .img img,
.about-services .ser-box .box .img video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.about-services .ser-box .box .box-info {
    position: absolute;
    bottom: 1.2rem;
    left: 1.2rem;
    right: 1.2rem;
    z-index: 2;
}

.about-services .ser-box .box .ser-name {
    padding-bottom: 0.4rem;
    font-size: 1.25rem;
    font-family: var(--font-display);
    font-weight: 500;
}

.about-services .ser-box .box .ser-description {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--cream-dim);
}

.appointment-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.6rem;
    padding: 5rem 4vw;
    margin-top: 3rem;
    background: var(--burgundy);
    color: var(--cream);
}

.appointment-cta h2 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 0.8rem;
}

.appointment-cta .btn-outline {
    border-color: var(--cream);
}

.btn-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.appointment-cta a {
    color: var(--gold-soft);
    text-decoration: underline;
}

.app-text {
    margin-bottom: 1.4rem;
    color: var(--cream-dim);
}

.appointment-form-wrap {
    padding: 3rem 4vw 5rem;
    max-width: 700px;
    margin: 0 auto;
}
</style>