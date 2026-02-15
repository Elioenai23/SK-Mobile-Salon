<template>
    <section class="first-section">
        <div class="front-page">
            <div class="address">123, Central Square, New York</div>
            <h2 class="heading">Sk Mobile Salon</h2>
            <p class="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque totam aliquid eaque, quaerat
                obcaecati enim placeat earum qui illum distinctio!</p>
        </div>

        <!--image section-->
        <section class="transform-img">
            <img src="/public/background180.svg" />
        </section>
    </section>
    
    <!-- second section -->
     <section class="second-section">
         <div class="four-img">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
        </div>


        <div class="text-info">
            <div class="greet">Welcome To</div>
            <h2 class="title">My Beauty Studio</h2>
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut odio vitae. Voluptatibus
                deleniti at ullam error, voluptates pariatur quibusdam! Corporis corrupti in molestias consequuntur
                dolorum eligendi vel animi suscipit!</p>
            <button class="btn" @click="goToPortfolio">Learn More</button>
        </div>
     </section>


     <!--Third section-->
         <section class="third-section">
        <h2>Services For Every Occasion</h2>
        <p>List down special Services you offer an occasions like weddings, etc</p>

        <div class="services-box">
            <div class="box">
                <h2>Weddings Makeup</h2>
                <p>A little detail about the services you've mentioned above. Tell them what you do</p>
            </div>
            <div class="box">
                <h2>Party Makeup</h2>
                <p>A little detail about the services you've mentioned above. Tell them what you do</p>
            </div>
            <div class="box">
                <h2>Fashion Makeup</h2>
                <p>A little detail about the services you've mentioned above. Tell them what you do</p>
            </div>
            <div class="box">
                <h2>Photo Makeup</h2>
                <p>A little detail about the services you've mentioned above. Tell them what you do</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPortfolio = () => {
    router.push('/portfolio');
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Philosopher&family=Poppins:wght@300&display=swap');
 

/*--First Section-- */
.first-section {
    padding: 9rem 0% 20rem;
    position: relative;
    color: var(--global-color-4);
}
.first-section::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--global-color-2);
    z-index: -1;
    opacity: .7;
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
.first-section .front-page {
    padding: 0 2%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-direction: column;
    gap: 2rem;
    max-width: 60%;
}

.first-section .front-page .address {
    color: var(--global-color-0);
    font-size: 25px;
    line-height: 1.2em;
    font-family: var(--font-02);
}

.first-section .front-page .heading {
    font-size: 3.24rem;
    font-weight: 400;
    font-family: var(--font-02);
}

.first-section .front-page .btn {
    margin-top: 3rem;
    display: flex;
    gap: 2rem;
    border-radius: 7px;
    padding: 17px 30px;
    text-decoration: none;
    border: 1px solid var(--global-color-0);
    background-color: var(--global-color-4);
    color: var(--global-color-0);
    transition: all .4s ease;
}

.first-section .front-page .btn:hover {
    border: 1px solid var(--global-color-1);
    background-color: var(--global-color-1);
}


/* --Second Section-- */
.second-section {
    padding: 0 2%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    align-items: center;
}
.second-section .four-img {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    height: 100%;
    gap: 1rem;
    padding: 4rem 1rem 12rem;
}

.second-section .four-img img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all .4s ease;
}

.second-section .four-img img:hover{
    transform: scale(1.1);
}

.second-section .four-img img:nth-child(2n+1){
    margin-top: 4rem;
}

.second-section .text-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
}

.second-section .text-info .greet {
    color: var(--global-color-0);
    font-family: var(--font-02);
    font-size: 1.5rem;
    line-height: 1.2em;
}

.second-section .text-info .title{
     font-size: 2.5rem;
    font-weight: 400;
    font-family: var(--font-02);
}

.second-section .text-info .btn {
    border: 1px solid var(--global-color-0);
    width: fit-content;
    border-radius: 7px;
    padding: 17px 60px;
    text-decoration: none;
    background-color: var(--global-color-1);
    color: var(--global-color-4);
    font-weight: 400;
    transition: all .4s ease;
}

.second-section .text-info .btn:hover{
    background-color: var(--global-color-0);
    border: 1px solid var(--global-color-0);
}

/* --Third Section-- */
.third-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem 2%;
    background-color: #8484840a;
}

.third-section>h2 {
     font-size: 2.5rem;
    font-family: var(--font-02);
    color: var(--global-color-0);
    text-align: center;
}
.third-section>p{
    text-align: center;
}

.third-section .services-box{
margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 280px));
    gap: 2rem;
    padding: 1rem;
    justify-content: center;
}

.third-section .services-box .box {
      padding: 3rem 1rem 1rem;
    box-shadow: 0 0 8px 3px #eeeeee;
    background-color: #fff;
    border-radius: 7px;
}

.third-section .services-box .box h2{
     font-family: var(--font-02);
    line-height: 1.2em;
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.third-section .services-box .box p{
    font-family: var(--font-02);
    line-height: 24px;
}
</style>