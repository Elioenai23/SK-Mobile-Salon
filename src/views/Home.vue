<template>
    <section class="hero">
        <img src="/home-1.jpg" alt="Braided hairstyle by SK Mobile Salon" class="hero-img" />
        <div class="hero-scrim"></div>
        <div class="hero-content">
            <p class="eyebrow">Stellenbosch, Western Cape</p>
            <h1>Braids, styled<br />with precision.</h1>
            <p class="hero-sub">
                <!--Placeholder text-->
            </p>
            <div class="hero-actions">
                <router-link to="/services" class="btn btn-solid">Book an appointment</router-link>
                <router-link to="/portfolio" class="btn btn-outline">View the portfolio</router-link>
            </div>
        </div>
    </section>

    <svg class="braid-divider on-dark" viewBox="0 0 400 28" preserveAspectRatio="none">
        <path d="M0 14 Q 20 0, 40 14 T 80 14 T 120 14 T 160 14 T 200 14 T 240 14 T 280 14 T 320 14 T 360 14 T 400 14" />
        <path d="M0 14 Q 20 28, 40 14 T 80 14 T 120 14 T 160 14 T 200 14 T 240 14 T 280 14 T 320 14 T 360 14 T 400 14" />
    </svg>

    <section class="studio">
        <div class="studio-copy">
            <p class="eyebrow">The studio</p>
            <h2>Every style tells a story</h2>
            <p>
                <!--Placeholder text-->
            </p>
            <router-link to="/about" class="text-link">More about the studio &rarr;</router-link>
        </div>
        <div class="studio-grid">
            <img src="/home-1.jpg" alt="" />
            <img src="/home-2.jpg" alt="" />
            <img src="/portfolio-1.jpg" alt="" />
            <img src="/portfolio-2.jpg" alt="" />
        </div>
    </section>

    <svg class="braid-divider" viewBox="0 0 400 28" preserveAspectRatio="none">
        <path d="M0 14 Q 20 0, 40 14 T 80 14 T 120 14 T 160 14 T 200 14 T 240 14 T 280 14 T 320 14 T 360 14 T 400 14" />
        <path d="M0 14 Q 20 28, 40 14 T 80 14 T 120 14 T 160 14 T 200 14 T 240 14 T 280 14 T 320 14 T 360 14 T 400 14" />
    </svg>

    <section class="services-teaser">
        <p class="eyebrow" style="text-align:center;">Signature services</p>
        <h2>Made for every occasion</h2>
        <p class="services-intro">Placeholder copy &mdash; swap in your real service categories and short descriptions.</p>

        <div class="services-grid">
            <div class="service-card" v-for="s in services" :key="s.title">
                <img :src="s.img" alt="" />
                <div class="service-card-body">
                    <h3>{{ s.title }}</h3>
                    <p>{{ s.desc }}</p>
                </div>
            </div>
        </div>

        <router-link to="/services" class="btn btn-solid" style="margin-top: 2.5rem;">See all services</router-link>
    </section>

    <section class="cta-band">
        <div>
            <p class="eyebrow">Ready when you are</p>
            <h2>Book your next appointment</h2>
        </div>
        <router-link to="/services" class="btn btn-outline">Get started</router-link>
    </section>
</template>

<script setup>
const services = [
    { title: 'Protective styles', desc: 'Placeholder copy about cornrows, box braids, and knotless styles.', img: '/portfolio-1.jpg' },
    { title: 'Wedding styling', desc: 'Placeholder copy about bridal and occasion hair.', img: '/services-1.jpg' },
    { title: 'Everyday braids', desc: 'Placeholder copy about low-maintenance, everyday looks.', img: '/portfolio-7.jpg' },
    { title: 'Kids styling', desc: 'Placeholder copy about gentle, patient styling for children.', img: '/services-2.jpg' },
];
</script>

<style scoped>
.hero {
    position: relative;
    min-height: 88vh;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
}

.hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

.hero-scrim {
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(27, 17, 20, 0.92) 0%, rgba(27, 17, 20, 0.35) 55%, rgba(27, 17, 20, 0.55) 100%);
}

.hero-content {
    position: relative;
    z-index: 2;
    color: var(--cream);
    padding: 4rem 4vw 5rem;
    max-width: 640px;
}

.hero-content h1 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(2.4rem, 5vw, 4rem);
    line-height: 1.08;
    margin: 0.6rem 0 1.2rem;
}

.hero-sub {
    font-size: 1rem;
    color: var(--cream-dim);
    max-width: 42ch;
    margin-bottom: 2rem;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.studio {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    align-items: center;
    padding: 5rem 4vw;
    max-width: 1300px;
    margin: 0 auto;
}

.studio-copy h2 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 2.2rem;
    margin: 0.5rem 0 1.2rem;
}

.studio-copy p {
    color: var(--ink);
    opacity: 0.75;
    line-height: 1.7;
    margin-bottom: 1.4rem;
}

.text-link {
    font-weight: 500;
    color: var(--burgundy);
    text-decoration: none;
    border-bottom: 1px solid var(--burgundy);
    padding-bottom: 2px;
}

.studio-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.studio-grid img {
    width: 100%;
    height: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 2px;
}

.studio-grid img:nth-child(2n) {
    margin-top: 2.5rem;
}

.services-teaser {
    background: var(--ink);
    color: var(--cream);
    text-align: center;
    padding: 5rem 4vw;
}

.services-teaser h2 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 2.2rem;
    margin: 0.5rem 0 0.8rem;
}

.services-intro {
    color: var(--cream-dim);
    max-width: 50ch;
    margin: 0 auto;
}

.services-grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    text-align: left;
}

.service-card {
    background: var(--ink-soft);
    border: 1px solid var(--line-on-dark);
    border-radius: 2px;
    overflow: hidden;
    transition: transform 0.35s ease, border-color 0.35s ease;
}

.service-card:hover {
    transform: translateY(-6px);
    border-color: var(--gold);
}

.service-card img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
}

.service-card-body {
    padding: 1.2rem 1.3rem 1.5rem;
}

.service-card-body h3 {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
}

.service-card-body p {
    font-size: 0.88rem;
    color: var(--cream-dim);
    line-height: 1.5;
}

.cta-band {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 4rem 4vw;
    background: var(--burgundy);
    color: var(--cream);
}

.cta-band h2 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 2rem;
    margin-top: 0.4rem;
}

.cta-band .btn-outline {
    border-color: var(--cream);
}

@media (max-width: 900px) {
    .studio {
        grid-template-columns: 1fr;
    }

    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 560px) {
    .services-grid {
        grid-template-columns: 1fr;
    }
}
</style>
