
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
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {/* Show the item count in the cart */}
        <button onClick={() => addToCart(product)}>
          Add to Cart {itemCount > 0 && `(${itemCount})`}
        </button>
      </div>
    </div>
  );
};

export default Product;
