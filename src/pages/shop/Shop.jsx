import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Product from "./Product";
import products from "../../products";
import "./product.css";
import CartButton from "../../components/CartButton";

const productsData = products;

export default function Shop() {
  return (
    <>
    
     <div style={{ textAlign: "center"}}>
     <h2 style={{ color: "#49444B"}} >Shop</h2>
     </div>

      {/* <Link to="/mintmade/">Back to Home</Link> */}
      <div className="cart-icon">
      <CartButton />
      </div>
      <div className="product-container">
        {productsData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
