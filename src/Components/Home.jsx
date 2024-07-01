import React from 'react'

export default function Home() {
  return (
    <>  <section id="hero" class="hero section light-background">

    <div class="container">
      <div class="row gy-4 justify-content-center justify-content-lg-between">
        <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">Enjoy Your Healthy Delicious Food</h1>
          <p data-aos="fade-up" data-aos-delay="100">We are team of talented designers making websites with Bootstrap</p>
          <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href="#book-a-table" class="btn-get-started">Booka a Table</a>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
          <img src="src/img/hero-img.png"  alt=""/>
        </div>
      </div>
    </div>

  </section>
  </>
  )
}
