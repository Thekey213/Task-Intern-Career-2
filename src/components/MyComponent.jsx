import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './style.css'; // Import custom CSS file

const MyComponent = () => {
 

  return (
    <>
      <section className="hero-bg">
        <div className="companyName">MintMADE</div>
        <div className="hero-text">
          <h1>Quick and hassle-<br />free shopping</h1>
          <a href="gallery.html" className="hero-btn">SHOP NOW</a>
        </div>
      
      </section>

    
    </>
  );
};

export default MyComponent;
