import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Menu() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3031/menuItems')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },
 [])
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
          {data.map((d,i) =>{
            return  <div className="col-lg-4 menu-item" key={i}>
              <a href={d.img} className="glightbox">
              <img
                src={d.img}
                className="menu-img img-fluid"
                alt=""
              />
            </a>
            <h4>{d.id}</h4>
            <p className="ingredients">{d.description}</p>
            <p className="price">${d.price}</p>
            </div>
          })}
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

 