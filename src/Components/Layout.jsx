import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Footer from './Footer'


function Layout({children}) 
   {
    const mobileNavToggleBtn = useRef(null);
    const navMenu = useRef(null);
  
    useEffect(() => {
      const mobileNavToggle = () => {
        document.body.classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.current.classList.toggle('bi-list');
        mobileNavToggleBtn.current.classList.toggle('bi-x');
      };
  
      const handleNavLinkClick = () => {
        if (document.body.classList.contains('mobile-nav-active')) {
          mobileNavToggle();
        }
      };
  
      const btn = mobileNavToggleBtn.current;
      const links = navMenu.current.querySelectorAll('a');
  
      btn.addEventListener('click', mobileNavToggle);
      links.forEach(link => link.addEventListener('click', handleNavLinkClick));
  
      // Cleanup event listeners on component unmount
      return () => {
        btn.removeEventListener('click', mobileNavToggle);
        links.forEach(link => link.removeEventListener('click', handleNavLinkClick));
      };
    }, []);
  
  return (
    <div>
         <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
         {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt="">  */}
        <h1 className="sitename">Yummy</h1>
    
      </a>

      <nav id="navmenu" className="navmenu" ref={navMenu}>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          {/* <li><Link href="#about">About</Link></li> */}
          <li><Link to="/menu" >Menu</Link></li>
          {/* <li><a href="#events">Events</a></li> */}
          {/* <li><a href="#chefs">Chefs</a></li>
          <li><a href="#gallery">Gallery</a></li> */}
          {/* <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li> */}
          {/* <li><Link href="#contact">Contact</Link></li> */}
          {/* <li><a href="https://externalwebsite.com" target="_blank" rel="noopener noreferrer">External Site</a></li> */}
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" ref={mobileNavToggleBtn}></i>
        
      </nav>

      <a className="btn-getstarted" href="index.html#book-a-table">Log in</a>

    </div>
  </header> 
  <main>
    {children}
  </main>
  <Footer/>
    </div>
  )
}

export default Layout;