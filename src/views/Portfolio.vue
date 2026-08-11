<template>
    <section class="portfolio-hero">
        <img src="/services-1.jpg" alt="" class="portfolio-hero-img" />
        <div class="portfolio-hero-scrim"></div>
        <div class="portfolio-hero-content">
            <p class="eyebrow">Recent work</p>
            <h1>Portfolio</h1>
        </div>
    </section>

    <svg class="braid-divider on-dark" viewBox="0 0 400 28" preserveAspectRatio="none">
        <path d="M0 14 Q 20 0, 40 14 T 80 14 T 120 14 T 160 14 T 200 14 T 240 14 T 280 14 T 320 14 T 360 14 T 400 14" />
        <path d="M0 14 Q 20 28, 40 14 T 80 14 T 120 14 T 160 14 T 200 14 T 240 14 T 280 14 T 320 14 T 360 14 T 400 14" />
    </svg>

    <section class="gallery-section">
        <div class="gallery box">
            <img src="/portfolio-1.jpg" alt="">
            <img src="/portfolio-3.jpg" alt="">
            <video :src="videoSource" controls></video>
            <img src="/portfolio-4.jpg" alt="">
            <img src="/portfolio-7.jpg" alt="">
            <video :src="videoSource2" controls></video>
            <img src="/portfolio-9.jpg" alt="">
            <video :src="videoSource3" controls></video>
        </div>
    </section>

    <!--Before and After Section-->
    <section class="before-after">
        <p class="eyebrow" style="text-align:center;">Transformations</p>
        <h2>Before and after</h2>
        <p class="ba-intro">Placeholder copy &mdash; swap these placeholder photos for real before/after pairs once you have them.</p>

        <div class="ba-grid">
            <div class="ba-pair">
                <div class="ba-box">
                    <img src="/placeholder.jpg" alt="">
                    <span class="ba-label">Before</span>
                </div>
                <div class="ba-box">
                    <img src="/placeholder.jpg" alt="">
                    <span class="ba-label">After</span>
                </div>
            </div>

            <div class="ba-pair">
                <div class="ba-box">
                    <img src="/placeholder.jpg" alt="">
                    <span class="ba-label">Before</span>
                </div>
                <div class="ba-box">
                    <img src="/placeholder.jpg" alt="">
                    <span class="ba-label">After</span>
                </div>
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
.portfolio-hero {
    position: relative;
    min-height: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.portfolio-hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.portfolio-hero-scrim {
    position: absolute;
    inset: 0;
    background: rgba(27, 17, 20, 0.72);
}

.portfolio-hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: var(--cream);
}

.portfolio-hero-content h1 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(2.6rem, 6vw, 4rem);
    margin-top: 0.5rem;
}

.gallery-section {
    padding: 4rem 4vw;
    max-width: 1300px;
    margin: 0 auto;
}

.gallery {
    columns: 4 240px;
    column-gap: 1rem;
}

.gallery img,
.gallery video {
    width: 100%;
    display: block;
    margin-bottom: 1rem;
    border-radius: 2px;
    break-inside: avoid;
    transition: opacity 0.3s ease;
    box-shadow: 0 0 18px 2px ;
}

.gallery img:hover {
    opacity: 0.9;
}

.gallery video {
    background: var(--ink);
    aspect-ratio: 3/4;
    object-fit: cover;
}

.before-after {
    padding: 4rem 4vw 6rem;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0 0 18px ;
}

.before-after h2 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 2.1rem;
    margin: 0.5rem 0 0.8rem;
}

.ba-intro {
    color: var(--ink);
    opacity: 0.65;
    max-width: 55ch;
    margin: 0 auto 2.5rem;
    font-size: 0.9rem;
}

.ba-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
}

.ba-pair {
    display: flex;
    gap: 0.75rem;
}

.ba-box {
    position: relative;
    flex: 1;
    aspect-ratio: 3/4;
    overflow: hidden;
    border-radius: 2px;
}

.ba-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ba-label {
    position: absolute;
    bottom: 0.7rem;
    left: 0.7rem;
    background: var(--ink);
    color: var(--gold-soft);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
}



@media (max-width: 900px) {
    .ba-grid {
        grid-template-columns: 1fr;
    }
}
</style>