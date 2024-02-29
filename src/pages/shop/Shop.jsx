import React from "react";
import Product from "./Product";
import products from "../../products";
import "./product.css";
import CartButton from "../../components/CartButton";
import HomeButton from "../../components/HomeButton";


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
      <div className="home-icon">
      <HomeButton/>
      </div>
      <div className="product-container">
        {productsData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
