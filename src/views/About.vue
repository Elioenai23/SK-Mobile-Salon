<template>
    <section class="about-hero">
        <img src="/portfolio-9.jpg" alt="" class="about-hero-img" />
        <div class="about-hero-scrim"></div>
        <div class="about-hero-content">
            <p class="eyebrow">A small introduction</p>
            <h1>About</h1>
        </div>
    </section>

  <!-- Second section -->
  <section class="about-me">
    <!-- Profile Image -->
    <span class="img">
      <img src="/snoza.jpg" alt="Snoza Khoza">
    </span>

    <div class="info">
      <h1>It's All About My Story</h1>
      <div class="p-text">I Have Been A Passionate Make Up Artist.</div>
      <p class="para">
       I am a passionate, L'Oreal Professional-trained hairstylist, beauty expert, and entrepreneur dedicated to transforming confidence through hair and nail artistry.
       As the founder of SnozaMobileSalon, I bring a premium, professional salon experience directly to clients across the Somerset-West and Stellenbosch regions.
       With a dive creative background - including classical training as a pastry chef - I approach beauty with absolute precision, artistic flair, and a deep understanding of my craft.
       Whether I am crafting flawless knotless braids, executing intricate Sisterlocks maintenance, maximizing the beauty of 4C natural hair, or designing custom gel nail overlays, my mission is to deliver excellence.
       Beyond the chair, I am deeply rooted in my community, frequently serving as a local pageant adjudicator, mentor, and trusted professional. 
       I believe beauty is a powerful tool for empowerment and I am proud to connect with a divest global clientele every single day.
        <br><br>My Salon is conveniently located Near Stellenbosch University and I also offer for those who prefer the convenience of having me to come to them.
      </p>

      <h2>Snoza Khoza</h2>

      <!-- Contact Info -->
      <div class="contact-info">
        <!-- Phone -->
        <div class="contact-item">
          <font-awesome-icon icon="phone" />
          <span>+27 78 727 6711</span>
        </div>

        <!-- Email -->
        <div class="contact-item">
          <font-awesome-icon icon="envelope" />
          <a href="mailto:snozakhozasno@gmail.com">snozakhozasno@gmail.com</a>
        </div>

        <!-- Instagram -->
        <div class="contact-item">
          <font-awesome-icon :icon="['fab', 'instagram']" />
          <a href="https://www.instagram.com/snozamobilesalon/" target="_blank">snozamobilesalon</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Third section: Team -->
  <section class="team-info">
    <div class="team-text">
      <div class="t-team">Our Awesome Team</div>
      <div class="t-heading">We Have Solutions</div>
      <div class="t-lines">This is where you can introduce the experts in your team.</div>
    </div>

    <div class="team-img-info">
      <div class="box">
        <div class="img">
          <img src="/snoza-3.jpg" alt="Snoza Khoza">
        </div>
        <div class="t-name">Snoza Khoza</div>
        <div class="t-position">Owner</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Philosopher&family=Poppins:wght@300&display=swap');

/* First Section */
.about-hero {
    position: relative;
    min-height: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.about-hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.about-hero-scrim {
    position: absolute;
    inset: 0;
    background: rgba(27, 17, 20, 0.72);
}

.about-hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: var(--cream);
}

.about-hero-content h1 {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(2.6rem, 6vw, 4rem);
    margin-top: 0.5rem;
}

/* About Me Section */
.about-me {
  padding: 2.5rem 5%;
  display: flex;
  gap: 2rem;
}

.about-me .img {
  max-width: 400px;
}

.about-me .img img {
  width: 100%;
  border-radius: 10px;
}

.about-me .info {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.about-me .info h1,
.about-me .info h2 {
  color: var(--global-color-1);
  font-family: var(--font-02);
}

.about-me .info .p-text,
.about-me .info .para {
  font-family: var(--font-02);
}

.about-me .contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-01);
}

.contact-item font-awesome-icon {
  color: var(--global-color-1);
  width: 24px;
  height: 24px;
}

.contact-item a {
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: var(--global-color-1);
}

/* Team Section */
.team-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 2rem 4rem 6rem;
  text-align: center;
  overflow-y: auto;
}

.team-info .team-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.team-info .t-heading {
  font-size: 2rem;
  font-weight: 400;
  font-family: var(--font-02);
  color: var(--global-color-1);
}

.team-info .team-img-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
  gap: 2rem;
  justify-content: flex-start;
  width: 20%;
  border-radius: 20px;
  box-shadow: 0 0 17px var(--global-color-2);
  overflow-y: hidden;
}

.team-info .team-img-info .box {
  border-radius: 2%;
  box-shadow: 0 0 18px 2px #d1d1d1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.team-info .team-img-info .box .img img {
  width: 100%;
  height: 100;
  border-radius: 2%;
  
}

.team-info .team-img-info .box .t-name {
  margin-top: 2rem;
  letter-spacing: 2px;
}

.team-info .team-img-info .box .t-position {
  margin-top: 0.7rem;
}
</style>