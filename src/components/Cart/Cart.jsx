import React from "react";
import "./cart.scss";
import { useNavigate } from "react-router";

const CartButton = ({ cartCount }) => {
  const navigate = useNavigate();

  const handleRedirectCart = () => {
    navigate("/login");
  };

  return (
    <div className="cart" onClick={handleRedirectCart}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="ri-shopping-cart-2-fill"></i>
    </div>
  );
};

export default CartButton;
