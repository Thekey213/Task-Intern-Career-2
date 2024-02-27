import React from "react";
import "./cart.css";
import { useProductContext } from "../../context/ProductsContext";


const Cart = () => {
  const { cart, removeCartItem } = useProductContext();

  return (
    <div className="cart-container">
    <div style={{ textAlign: "center" }}>
     <h2>Cart</h2>
     </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                {/* Display the count of the item in the cart */}
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeCartItem(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;



