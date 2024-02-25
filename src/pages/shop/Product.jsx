import React, { useContext } from "react";
import { MyContext } from "../../context/mycontext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(MyContext);

  const cartItemCount = cartItems[id];

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="product">
      <img src={productImage} alt={productName} className="product-image" />
      <div className="description">
        <p className="product-name">
          <b>{productName}</b>
        </p>
        <p className="product-price"> ${price}</p>
      </div>
      <button className="addToCartButton" onClick={handleAddToCart}>
        Add To Cart {cartItemCount > 0 && `(${cartItemCount})`}
      </button>
    </div>
  );
};

export default Product;
