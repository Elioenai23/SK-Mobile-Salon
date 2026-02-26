<template>
    <!--First section-->
    <section class="first-section"> 
        <h1>About</h1>

        <!--Image-->
        <section class="transform-img">
            <img src="/background180.svg" alt="" >
        </section>
    </section>

    <!--second section-->
    <section class="about-me">
        <span class="img">
            <img src="/snoza.jpg" alt="" >
        </span>

        <div class="info">
            <h1>It's All About My Story</h1>
            <div class="p-text">I Have Been A Passionate Make Up Artists.</div>
            <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, fuga. Quos obcaecati modi
                cupiditate tempora provident officiis ratione! Cupiditate facere quis blanditiis eius dolorum
                accusantium neque, cum quam minima iste consectetur nobis assumenda,

                <br> <br>voluptatibus error recusandae
                soluta similique amet dolore odit aspernatur. Similique, aperiam numquam laborum sed consectetur
                praesentium quis ipsam, odio cum quibusdam non laudantium explicabo, est cumque? Nihil corrupti nesciunt
                impedit similique eligendi qui dolorem. Facere assumenda cumque labore doloribus nemo voluptatibus, non
                necessitatibus architecto quo, accusantium dolor?
            </p>

            <h2>Snoza Khoza</h2>

            
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

    <!--Third section-->
    <section class="team-info">
        <div class="team-text">
            <div class="t-team">Our Awesome Team</div>
            <div class="t-heading">We Have Solutions</div>
            <div class="t-lines">This is where you can introduce the experts in your team.</div>
        </div>

        <div class="team-img-info">
            <div class="box">
                <div class="img">
                    <img src="/snoza-3.jpg" alt="">
                </div>
                <div class="t-name">Snoza Khoza</div>
                <div class="t-position">Owner</div>
            </div>      
        </div>
    </section>

</template>

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

/* second section */
.about-me{
    padding: 2.5rem 5%;
    display: flex;
    gap: 2rem;
}

.about-me .img {
    max-width: 400px;
}

.about-me .img img{
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

.about-me .info h1 {
    color: var(--global-color-1);
    font-family: var(--font-02);
}

.about-me .info .p-text {
    font-family: var(--font-02);
}


.about-me .info h2 {
    font-family: var(--font-02);
    color: var(--global-color-1);
}

.about-me .info{
    display: flex;
    gap: 2rem;
}

.about-me .info {
    color: var(--global-color-1);
    overflow-y: hidden;
}

.about-me .info {
    padding-left: 10px;
    text-decoration: none;
    color: black;
    font-family: var(--font-01);
    transition: all .4s ease;
}


.about-me .info:hover {
    color: var(--global-color-1);
}

.team-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 3rem 2%;
    text-align: center;
}

.team-info .team-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.team-info .team-text .t-team {
    font-family: var(--font-02);
    font-weight: 400;
    justify-content: center;
}

.t-team{
    justify-content: center;
}

.team-info .team-text .t-heading {
    font-size: 2rem;
    font-weight: 400;
    font-family: var(--font-02);
    color: var(--global-color-1);
}



.team-info .team-img-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
    gap: 2rem;
    justify-content: center;
    width: 100%;
    padding: 2rem;
}

.team-info .team-img-info .box {
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 0 0 18px 2px #d1d1d1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

}



.team-info .team-img-info .box .img {
    width: 100%;
    height: 100%;
    overflow-y: hidden;
}

.team-info .team-img-info .box .img img {
    width: 100%;
    height: 100%;
    border-radius: 2%;
}

.team-info .team-img-info .box .t-name {
    overflow-y: hidden;
    margin-top: 2rem;
    letter-spacing: 2px;
    padding: .2rem 0;
}

.team-info .team-img-info .box .t-position {
    overflow-y: hidden;
    margin-top: .7rem;
    padding: .2rem 0;
    text-align: center;

}


.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
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
</style>