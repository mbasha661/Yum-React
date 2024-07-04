import React from 'react'


export default function Menu() {
  return (
   <>
   <section id="menu" className="menu section">
  {/* Section Title */}
  <div className="container section-title" data-aos="fade-up">
    <h2>Our Menu</h2>
    <p>
      <span>Check Our</span>{" "}
      <span className="description-title">Yummy Menu</span>
    </p>
  </div>
  {/* End Section Title */}
  <div className="container">
    <ul
      className="nav nav-tabs d-flex justify-content-center"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <li className="nav-item">
        <a
          className="nav-link active show"
          data-bs-toggle="tab"
          data-bs-target="#menu-starters"
        >
          <h4>Starters</h4>
        </a>
      </li>
      {/* End tab nav item */}
      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#menu-breakfast"
        >
          <h4>Breakfast</h4>
        </a>
        {/* End tab nav item */}
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#menu-lunch"
        >
          <h4>Lunch</h4>
        </a>
      </li>
      {/* End tab nav item */}
      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#menu-dinner"
        >
          <h4>Dinner</h4>
        </a>
      </li>
      {/* End tab nav item */}
    </ul>
    <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
      <div className="tab-pane fade active show" id="menu-starters">
        <div className="tab-header text-center">
          <p>Menu</p>
          <h3>Starters</h3>
        </div>
        <div className="row gy-5">
          <div className="col-lg-4 menu-item">
            <a href="assets/img/menu/menu-item-1.png" className="glightbox">
              <img
                src="assets/img/menu/menu-item-1.png"
                className="menu-img img-fluid"
                alt=""
              />
            </a>
            <h4>Magnam Tiste</h4>
            <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
            <p className="price">$5.95</p>
          </div>
          {/* Menu Item */}
          <div className="col-lg-4 menu-item">
            <a href="assets/img/menu/menu-item-2.png" className="glightbox">
              <img
                src="assets/img/menu/menu-item-2.png"
                className="menu-img img-fluid"
                alt=""
              />
            </a>
            <h4>Aut Luia</h4>
            <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
            <p className="price">$14.95</p>
          </div>
          {/* Menu Item */}
          <div className="col-lg-4 menu-item">
            <a href="assets/img/menu/menu-item-3.png" className="glightbox">
              <img
                src="assets/img/menu/menu-item-3.png"
                className="menu-img img-fluid"
                alt=""
              />
            </a>
            <h4>Est Eligendi</h4>
            <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
            <p className="price">$8.95</p>
          </div>
          {/* Menu Item */}
          <div className="col-lg-4 menu-item">
            <a href="assets/img/menu/menu-item-4.png" className="glightbox">
              <img
                src="assets/img/menu/menu-item-4.png"
                className="menu-img img-fluid"
                alt=""
              />
            </a>
            <h4>Eos Luibusdam</h4>
            <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
            <p className="price">$12.95</p>
          </div>
          {/* Menu Item */}
          <div className="col-lg-4 menu-item">
            <a href="assets/img/menu/menu-item-5.png" className="glightbox">
              <img
                src="assets/img/menu/menu-item-5.png"
                className="menu-img img-fluid"
                alt=""
              />
            </a>
            <h4>Eos Luibusdam</h4>
            <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
            <p className="price">$12.95</p>
          </div>
          {/* Menu Item */}
          <div className="col-lg-4 menu-item">
            <a href="assets/img/menu/menu-item-6.png" className="glightbox">
              <img
                src="assets/img/menu/menu-item-6.png"
                className="menu-img img-fluid"
                alt=""
              />
            </a>
            <h4>Laboriosam Direva</h4>
            <p className="ingredients">Lorem, deren, trataro, filede, nerada</p>
            <p className="price">$9.95</p>
          </div>
          {/* Menu Item */}
        </div>
      </div>
      {/* End Starter Menu Content */}
    </div>
  </div>
</section>

   </>
  );
}

 