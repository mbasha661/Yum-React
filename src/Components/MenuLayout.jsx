import React from 'react'
import { Link } from 'react-router-dom'

function MenuLayout({children}) {
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
           <Link to="/menu" >Starters</Link> 
         </a>  
       </li>
       {/* End tab nav item */}
       <li className="nav-item">
         <a
           className="nav-link"
           data-bs-toggle="tab"
           data-bs-target="#menu-breakfast"
         >
          <Link  to="/menuBreakfast">Breakfast</Link> 
         </a>
         {/* End tab nav item */}
       </li>
       {/* <li className="nav-item">
         <a
           className="nav-link"
           data-bs-toggle="tab"
           data-bs-target="#menu-lunch"
         >
          <Link to="/menuLunch">Lunch</Link> 
         </a>
       </li> */}
       {/* End tab nav item */}
       {/* <li className="nav-item">
         <a
           className="nav-link"
           data-bs-toggle="tab"
           data-bs-target="#menu-dinner"
         >
          <Link to="/menuDinner">Dinner</Link> 
         </a>
       </li> */}
       {/* End tab nav item */}
     </ul>
      
   </div>
   <main>
    {children}
  </main>
 </section>
 
 
    </>
  )
}

export default MenuLayout