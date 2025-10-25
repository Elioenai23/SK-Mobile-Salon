<template>
    
    <section class="first-section">
        <h1>Services</h1>
        
        <!--The Image-->
        <section class="first-img">
            <img>
        </section>
    </section>

    <section class="about-section">
        <div class="lit-text">Choose From our Collection</div>
        <p class="ser-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro magnam impedit ipsum optio commodi, deserunt nam accusamus molestiae unde, dolore maiores a deleniti dicta nesciunt placeat quaerat quos veniam assumenda?</p>

        <div class="ser-box">
            <!--Service 1-->
            <div class="box">
                <div class="img">
                    <img >
                </div>
                <div class="box-info">
                    <div class="ser-name">Service Name</div>
                    <p class="ser-description">Description of Service</p>
                </div>
            </div>
            <!--Service 2-->
            <div class="box">
                <div class="img">
                    <img >
                </div>
                <div class="box-info">
                    <div class="ser-name">Service Name</div>
                    <p class="ser-description">Description of Service</p>
                </div>
            </div>
            <!--Service 3-->
            <div class="box">
                <div class="img">
                    <img >
                </div>
                <div class="box-info">
                    <div class="ser-name">Service Name</div>
                    <p class="ser-description">Description of Service</p>
                </div>
            </div>
            <!--Service 4-->
            <div class="box">
                <div class="img">
                    <img >
                </div>
                <div class="box-info">
                    <div class="ser-name">Service Name</div>
                    <p class="ser-description">Description of Service</p>
                </div>
            </div>
            <!--Service 5-->
            <div class="box">
                <div class="img">
                    <img >
                </div>
                <div class="box-info">
                    <div class="ser-name">Service Name</div>
                    <p class="ser-description">Description of Service</p>
                </div>
            </div>
            <!--Service 6-->
            <div class="box">
                <div class="img">
                    <img >
                </div>
                <div class="box-info">
                    <div class="ser-name">Service Name</div>
                    <p class="ser-description">Description of Service</p>
                </div>
            </div>
            
        </div>      
    </section>

    <!--Discount section-->
    <section class="Discount-section">
        <div class="img">
            <img />
        </div>

        <div class="text-info">
            <h2></h2>
            <p></p>
        </div>
    </section>

    <!--Slider-->
    <section class="img-slider-text">
        <div class="img-slider">
           <img
                v-for="(image, index) in images"
                :key="index"
                :src="image"
                :alt="`Slide ${index + 1}`"
                :style="{transform: `translateX(-${currentSlide * 100}%)`}"
            />
            
            <i class="fa-solid fa-chevron-left prev" @click="goPrev"></i>
            <i class="fa solid fa-chevron-right next" @click="goNext"></i>
        </div>
    </section> 
   <AppointmentForm /> 
</template>

<script setup>
import AppointmentForm from '../components/AppointmentForm.vue'
import { ref } from 'vue';

const images = ref([
    
]);

const currentSlide = ref(0);

const goPrev = () => {
    currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length
}

const goNext = () => {
    currentSlide.value = (currentSlide.value + 1) % images.value.length
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Philosopher&family=Poppins:wght@300&display=swap');


.first-section {
    padding: 12rem 0% 15rem;
}

.first-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url();
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

.about-section {
    padding: 5rem 5%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about-section .lit-text {
    font-size: 2rem;
    font-weight: 400;
    font-family: var(--font-02);
    text-align: center;
    color: var(--global-color-1)
}

.about-section .ser-text{
    text-align: center;
    margin-bottom: 2rem;
}
.about-section .ser-box{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    color: #fff;
}

.about-section .ser-box .box{
    position: relative;
    top: 0;
}

.about-section .ser-box .box::after{
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

.about-section .ser-box .box:hover::after{
    width: 0;
}

.about-section .ser-box .box .img {
     width: 100%;
    height: 100%;
    overflow-y: hidden;
}

.about-section .ser-box .box .img img{
     width: 100%;
    border-radius: 2%;
    height: 100%;
}

.aboutServices .ser-box .box .box-info {
    position: absolute;
    bottom: 5%;
    left: 3%;
    z-index: 2;

}

.about-section .ser-box .box .ser-name {
    padding-bottom: .8rem;
    font-size: 1.4rem;
    font-weight: 700;
    font-family: var(--font-02);
}

.about-section .ser-box .box .ser-description {
    font-family: var(--font-02);
}

.Discount-section {
    padding: 7rem 5%;
    margin-bottom: 4rem;
}

.img-slider-text {
    /* height: 100vh; */
    display: flex;
    /* align-items: center; */
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
</style>