<template>
    
    <section class="first-section">
        <h1>Services</h1>
        
        <!--The Image-->
        <section class="transform-img">
            <img src="/background180.svg" alt="">
        </section>
    </section>

    <section class="about-services">
        <div class="lit-text">Choose From our Collection</div>
        <p class="ser-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro magnam impedit ipsum optio commodi, deserunt nam accusamus molestiae unde, dolore maiores a deleniti dicta nesciunt placeat quaerat quos veniam assumenda?</p>

        <div class="ser-box">
            <!--Service 1-->
            <div class="box">
                <div class="img">
                    <img src="/services-1.jpg" >
                </div>
                <div class="box-info">
                    <div class="ser-name">Nails</div>
                    <p class="ser-description">Description of Service</p>
                </div>
            </div>
            <!--Service 2-->
            <div class="box">
                <div class="img">
                    <img src="/services-2.jpg" >
                </div>
                <div class="box-info">
                    <div class="ser-name">Braids</div>
                    <p class="ser-description">Description of Service</p>
                </div>
            </div>
            <!--Service 3-->
            <div class="box">
                <div class="img">
                    <img src="/services-3.jpg" >
                </div>
                <div class="box-info">
                    <div class="ser-name">Locs</div>
                    <p class="ser-description">Description of Service</p>
                </div>
            </div>
            <!--Service 4-->
            <div class="box">
                <div class="img">
                    <!--<video :src="sourceVideo" controls width="450" height="400"></video>-->
                    <img src="/services-5.jpg">
                </div>
                <div class="box-info">
                    <div class="ser-name">French Curls</div>
                    <p class="ser-description">Description of Service</p>
                </div>
            </div>
            <!--Service 5-->
            <div class="box">
                <div class="img">
                    <img src="/services-6.jpg">
                </div>
                <div class="box-info">
                    <div class="ser-name">Corn rows</div>
                    <p class="ser-description">Description of Service</p>
                </div>
            </div>
            <!--Service 6-->
            <div class="box">
                <div class="img">
                    <img src="/services-7.jpg" >
                </div>
                <div class="box-info">
                    <div class="ser-name">Knotless braids</div>
                    <p class="ser-description">Description of Service</p>
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
    
    <section class="appointment-section">
        <button @click="toggleForm">
            {{ showForm ? "Close Appointment Form" : "Make Appointment" }}
        </button>
   <AppointmentForm v-if="canShowForm" /> 
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


.first-section {
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
    padding: 5rem 5%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

.appointment-section {
  padding: 6rem 5%;
  margin-top: 4rem;
  position: relative;
  z-index: 10;
  background: #fff;
}

</style>