
import React from "react";
import { useProductContext } from "../../context/ProductsContext";

const Product = ({ product }) => {
  const { cart, addToCart } = useProductContext();

  // Find the item in the cart
  const itemInCart = cart.find((item) => item.id === product.id);

  // Get the count of the item in the cart
  const itemCount = itemInCart ? itemInCart.quantity : 0;

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button onClick={() => addToCart(product)}>
          Add to Cart {itemCount > 0 && `(${itemCount})`}
        </button>
      </div>
    </div>
  );
};

export default Product;
