import "./Navbar.css";
import CartWindow from "./CartWindow";
import React, { useEffect, useState } from "react";
import App from "../App.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function navbar() {
  const [show, setShow] = React.useState(false);

  function handleMouse() {
    console.log("cart show: " + show);
    setShow(true);
  }

  function handleMouseClick() {
    setShow(false);
  }

  const cartArray = useSelector((state) => state.cart.cartArray);

  function quantityCalc() {
    //displays quanity of items in the cart
    let totalQuant = Number(0);
    cartArray.map((obj) => {
      totalQuant = Number(totalQuant) + Number(obj.quantity);
    });
    return totalQuant;
  }
  console.log(quantityCalc());
  const itemsInCart = () => {
    if (cartArray.length > 0) {
      return `(${quantityCalc()})`;
    }
  };

  return (
    <>
      <div className="navbar">
        <h1 className="logo">
          <Link to="/home" className="logo">
            BREEZE
          </Link>
        </h1>
        <ul className="pages">
          <li className="page">
            <Link to="/pants" className="page">
              PANTS{" "}
            </Link>
          </li>
          <li>
            <Link to="/shirts" className="page">
              SHIRTS{" "}
            </Link>
          </li>
          <li className="page">
            <Link to="/shoes" className="page">
              SHOES{" "}
            </Link>
          </li>
          <li className="page">
            <Link to="/accessories" className="page">
              ACCESSORIES
            </Link>
          </li>
        </ul>
        <button
          onMouseOver={handleMouse}
          onClick={handleMouseClick}
          className="cart-button"
        >
          <Link to="/cart" className="cartPage">
            CART{itemsInCart()}
          </Link>
        </button>
      </div>
      {show && <CartWindow show={show} setShow={setShow} />}
    </>
  );
}
