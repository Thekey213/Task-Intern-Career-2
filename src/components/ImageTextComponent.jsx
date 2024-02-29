import React from "react";
import './style.css';
import Milada from '../assets/img/milada.jpg'
import { Link } from 'react-router-dom';

const ImageTextComponent = () => {
    return (
        <div className="rowImage">
           
            <img src={Milada} alt="Image" className="full-width" />
            
            <div className="col">
                <div className="text-content">
                    <h2>Clothes <br/> for Her</h2>
                    <div class="container">
                    <Link  className="shop-btn" to="/shop">SHOP NOW</Link> 
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageTextComponent;
