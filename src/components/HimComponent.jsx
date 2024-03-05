import React from "react";
import './style.css';
import Shirt from '../assets/img/shirt1.jpeg';
import { Link } from 'react-router-dom';

const HimComponent = () => {
    return (
        <div className="rowImage">
            <div className="col">
                <div className="text-content">
                    <h2>Clothes <br/> for Him</h2>
                    <div> {/* Corrected here */}
                        <Link className="shop-btn" to="/shop">SHOP NOW</Link> 
                    </div>
                </div>
            </div>

            <img src={Shirt} alt="Image" className="full-width" />
        </div>
    );
}

export default HimComponent;
