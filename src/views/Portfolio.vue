<template>
    <section class="first-section">
        <h1>Portfolio</h1>

        <section class="transform-img">
            <img src="/background180.svg" alt="">
        </section>
    </section>

    <section class="gallery-section">
    <div class="gallery">
        <img src="/portfolio-1.jpg" width="300" height="350" alt="">
        <img src="/portfolio-3.jpg" width="300" height="400">
        <video :src="videoSource" controls width="300" height="400"></video>
        <img src="/portfolio-4.jpg" width="300" height="350" alt="">
        <img src="/portfolio-7.jpg" width="300" height="400" alt="">
        <video :src="videoSource2" controls width="300" height="350"></video>
        <img src="/portfolio-9.jpg"  width="300" height="400" alt=" ">
        <video :src="videoSource3" controls width="300" height="350"></video>
    </div>
</section>
    <!--Discount section-->
    <section class="discount-section">
        <div class="img">
            <img >
        </div>

        <div class="text-info">
            <h2></h2>
            <p></p>
        </div>
    </section>

    <!--Before and After Section-->
    <section class="before-after">

        <div class="grid-box">
            <div class="box">
                <div class="img">
                    <img src="/placeholder.jpg" alt="">
                </div>
                <div class="text">Before</div>
            </div>

            <!---->
            <div class="box">
                <div class="img">
                    <img src="/placeholder.jpg">
                </div>
                <div class="text">After</div>
            </div>
            <!---->
        </div>

        <!---->  
        <div class="grid-box">
            <div class="box">
                <div class="img">
                    <img src="/placeholder.jpg" alt="">
                </div>
                <div class="text">Before</div>
            </div>

            <div class="box">
                <div class="img">
                    <img src="/placeholder.jpg">
                </div>
                <div class="text">After</div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import portfolioVideo from '/portfolio-5.mp4'
import portfolioVideo2 from '/portfolio-6.mp4'
import portfolioVideo3 from '/portfolio-8.mp4'


const videoSource = ref(portfolioVideo)
const videoSource2= ref(portfolioVideo2)
const videoSource3 = ref(portfolioVideo3)
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
    /* background-color: var(--global-color-2); */
    background-image: url("/placeholder.jpg"); 
    z-index: -1;
    opacity: .7;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.first-section h1 {
    text-align: center;
    font-size: 5rem;
    font-family: var(--font-02);
}

.gallery {
    margin: 5rem 2%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    
}

.gallery img {
    width: 100%;
    height: auto;
    display: block;
    box-shadow: 0 0 17px var(--global-color-2); 
}

/* .gallery img:hover{
      transform: scale(1.1);
}

.gallery video:hover {
      transform: scale(1.02);
} */

.gallery video{
    object-fit: cover;
    width: 100%;
    height: 400px;
    box-shadow: 0 0 17px var(--global-color-2);
}

.before-after {
    display: flex;
    grid-template-columns: repeat(auto-fit , minmax(200px , 600px));
    gap: 4rem  1rem;
    padding: 2rem 4rem 6rem; 
    justify-content: flex;
    overflow-y: auto;
}

.before-after .grid-box:hover{
      transform: scale(1.1);
      transition: ease .5s;
    
}

.before-after .grid-box {
    display: flex;
    gap: 1rem;
}

.before-after .grid-box .box{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.before-after .grid-box .box:nth-child(1){
    flex-direction: column-reverse;
}

.before-after .grid-box .box .img{
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    overflow-x:hidden ;
    box-shadow: 0 0 17px var(--global-color-2);
}

.before-after .grid-box .box .img img{
    height: 100%;
    width: 100%;
}

.before-after  .grid-box  .box .text {
    overflow-y: hidden;
    overflow-x: hidden;
    text-align: center;
    font-weight: 700;
    font-size: 1.4rem;
    font-family: var(--font-02);

}
</style>