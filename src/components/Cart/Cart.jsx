import React from "react";
import "./cart.scss";
import { useNavigate } from "react-router";
import Card from "./Card"
import Total from "./Total"

const CartButton = ({ cartCount }) => {
  const navigate = useNavigate();

  const handleRedirectCart = () => {
    navigate("/cart");
  };

  return (
    <>
    <div className="cart" onClick={handleRedirectCart}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="ri-shopping-cart-2-fill"></i>
    </div>
    <div className="headerdiv">
    <h1> My orders </h1>
    </div>
    <div className="card-wrapper">
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
      
        <Total />


    </>
  );
};

export default CartButton;
