import ItemCartWindow from "./ItemCartWindow";
import eCommereData from "../eCommereData.jsx";
import "./CartWindow.css";
import React, { useEffect, useState } from "react";

export default function ({ show, setShow }) {
  // let cartItems= JSON.parse(localStorage.getItem("cartArray"))
  let cartItems = JSON.parse(localStorage.getItem("cartArray"));

  console.log(cartItems);

  let totalData = eCommereData.data;

  const itemCartWindows = cartItems.map((obj) => {
    for (let i = 0; i < totalData.length; i++) {
      //pushes each item to cart
      if (obj.itemId == totalData[i].id) {
        return <ItemCartWindow item={totalData[i].id} key={totalData[i].id} />;
      }
    }
  });

  const handleLeave = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="cart-window" onMouseLeave={handleLeave}>
          <div className="cart-and-items">
            <h3>CART</h3>
            <p>{cartItems.length} items</p>
          </div>
          {itemCartWindows}

          <section className="price-and-bag">
            <div className="total-price">
              <p className="total">TOTAL</p>
              <p className="tot-price">$129.99</p>
            </div>
            <button className="view-bag">VIEW BAG AND CHECKOUT</button>
          </section>
        </div>
      )}
    </>
  );
}
