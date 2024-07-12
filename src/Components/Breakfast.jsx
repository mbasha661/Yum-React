import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Breakfast() {
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3031/menuItems')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    },
   []);
  return (
    <>
    
   
 
  
   
    <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
      <div className="tab-pane fade active show" id="menu-starters">
        <div className="tab-header text-center">
          <p>Menu</p>
          <h3>Breakfast</h3>
        </div>
        <div className="row gy-5">
          {data.filter((data) =>{
            return data.category == "breakfast"
          }).map((d,i) =>{
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
 


   
    </>   

  );
}

