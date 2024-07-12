import ItemCartWindow from "./ItemCartWindow";
import eCommereData from "../eCommereData.jsx"
import "./CartWindow.css"
import React, {useEffect,useState} from "react";
import { useDispatch } from 'react-redux';
import { updateCart } from '../redux/slice.js';
import { useSelector } from "react-redux"



export default function(props){

    let cartArray = useSelector((state)=>state.cart.cartArray)
    console.log("We got cartArray here", cartArray)

    // let cartItems= JSON.parse(localStorage.getItem("cartArray")) //previous code with localStorage
    // console.log(cartItems )

    let totalData= eCommereData.data
  
    const itemCartWindows = cartArray.map((obj)=>{ 
        for(let i=0; i <totalData.length; i++){  //pushes each item to cart. check through each item in eCommerceData id data is also in redux
       if(obj.itemId== totalData[i].id){
          return  <ItemCartWindow item = {totalData[i].id} key= {totalData[i].id}/> //may be I should push totalData[i] so that the whole data is available
          //iteration on the next page
       } 
    }
      
    })


    


   


    return(
        <>
       {props.show && <div className="cart-window" >
            <div className="cart-and-items">
            <h3>CART</h3>
            <p>{cartArray.length} items</p>
            </div>
            {itemCartWindows}
            
            <section className="price-and-bag">
                <div className="total-price">
                <p className="total">TOTAL</p>
                <p className="tot-price">$129.99</p>
                </div>
                <button className="view-bag">VIEW BAG AND CHECKOUT</button>
            </section>
        </div>}
        </>
    )
}