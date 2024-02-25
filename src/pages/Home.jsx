import React from "react";
import { Link } from 'react-router-dom';
import "./home.css";
 


export default function Home(){
    return (
        <>
          <section className="hero-bg">
            <div className="companyName">MINTMADE</div>
            <div className="hero-text">
              <h1>Quick and hassle-<br />free shopping</h1>
              <Link  className="hero-btn" to="/shop">SHOP NOW</Link> 
            </div>
          
          </section>
    
        
        </>
      );
}