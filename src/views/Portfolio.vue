<template>
    <section class="first-section">
        <h1>Portfolio</h1>

        <section class="transform-img">
            <img src="" alt="">
        </section>
    </section>

    <div class="gallery">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
    </div>

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
                    <img src="" alt="">
                </div>
                <div class="text">Before</div>
            </div>
            <div class="box">
                <div class="img">
                    <img src="">
                </div>
                <div class="text">After</div>
            </div>
        </div>

        <!---->  
        <div class="grid-box">
            <div class="box">
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="text">Before</div>
            </div>
            <div class="box">
                <div class="img">
                    <img src="">
                </div>
                <div class="text">After</div>
            </div>
        </div>
        
        <!---->
        <div class="grid-box">
            <div class="box">
                <div class="img">
                    <img src="" alt="">
                </div>
                <div class="text">Before</div>
            </div>
            <div class="box">
                <div class="img">
                    <img src="">
                </div>
                <div class="text">After</div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Philosopher&family=Poppins:wght@300&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins' sans-serif;
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
    /* background-color: var(--global-color-2); */
    background-image: url("../img/serviceBackGround.jpg");
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

.discount-section {
    padding: 5rem 5%;
}

.before-after {
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(200px , 600px));
    gap: 4rem  1rem;
    padding: 5rem 2rem; 
    justify-content: center;
}

.before-after .grid-box {
    display: flex;
    gap: 1rem;
}

.before-after .grid-box .box:nth-child(1){
    flex-direction: column-reverse;
}

.before-after .grid-box .box .img{
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    box-shadow: 0 0 17px var(--global-color-2);
}

.before-after .grid-box .box .img img{
    height: 100%;
    width: 100%;
}

.before-after  .grid-box  .box .text {
    overflow-y: hidden;
    text-align: center;
    font-weight: 700;
    font-size: 1.4rem;
    font-family: var(--font-02);

}
</style>