import ItemCartWindow from "./ItemCartWindow";
import eCommereData from "../eCommereData.jsx";
import "./CartWindow.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../redux/slice.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartWindow({ show, setShow }) {
  let cartArray = useSelector((state) => state.cart.cartArray);
  let totalData = eCommereData.data;

  // let cartItems= JSON.parse(localStorage.getItem("cartArray")) //previous code with localStorage
  // console.log(cartItems )
  function quantityCalc() {
    //displays quanity of items in the cart
    let totalQuant = Number(0);
    cartArray.map((obj) => {
      totalQuant = Number(totalQuant) + Number(obj.quantity);
    });
    return totalQuant;
  }

  //calculates total price of all the items in the cart
  let totalPrice = 0;
  const totalPriceCalc = cartArray.map((obj) => {
    for (let i = 0; i < totalData.length; i++) {
      if (obj.itemId == totalData[i].id) {
        let eachGroupPrice =
          obj.quantity * Number(totalData[i].price.substring(1)); //price needs to have the dollar sign removed
        totalPrice = totalPrice + eachGroupPrice;
      }
    }
  });

  const itemCartWindows = cartArray.map((obj) => {
    for (let i = 0; i < totalData.length; i++) {
      //pushes each item to cart. check through each item in eCommerceData id data is also in redux
      if (obj.itemId == totalData[i].id) {
        return (
          <ItemCartWindow
            item={totalData[i].id}
            size={obj.size}
            quantity={obj.quantity}
            key={totalData[i].id}
          />
        ); //may be I should push totalData[i] so that the whole data is available
        //iteration on the next page
      }
    }
  });

  function closeWindow() {
    setShow(false);
  }

  return (
    <>
      {show && (
        <div className="cart-window" onMouseLeave={closeWindow}>
          <section className="items-price">
            <div className="cart-and-items">
              <p>{quantityCalc()} items</p>
            </div>
            <div className="total-price">
              <p className="tot-price">TOTAL:${totalPrice.toFixed(2)}</p>
            </div>
          </section>
          <button className="view-bag">
            <Link to="/cart" className="cartLink">
              VIEW BAG AND CHECKOUT
            </Link>
          </button>
          {itemCartWindows}
        </div>
      )}
    </>
  );
}
