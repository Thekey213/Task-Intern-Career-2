import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useProductContext } from "../context/ProductsContext";

const CartButton = () => {
  const { cart } = useProductContext();

  // Calculate the total count of items in the cart
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link style={{
             textDecoration: "none",
             fontWeight: "bold",
             color: "black"
                 }} to="/cart">
      {totalCount > 0 && <span>{totalCount}</span>} <br/>
      <FontAwesomeIcon icon={faShoppingCart} />
    
    </Link>
  );
};

export default CartButton;
