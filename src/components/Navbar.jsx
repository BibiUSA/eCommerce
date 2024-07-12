import "./Navbar.css"
import CartWindow from "./CartWindow";
import React, {useEffect, useState} from 'react';
import App from "../App.jsx";
import {Link} from 'react-router-dom'

export default function(){

const [show,setShow] = React.useState(false);


    function handleMouse(){
        console.log("cart show: "+ show)
        setShow(prevShow=> !prevShow)
    }

    
    

  

    return(
        <>
            <div className= "navbar">
                <h1  className="logo">
                    <Link to = "/home" className="logo">BREEZE</Link>
                </h1>
                <ul className="pages">
                    <li className="page">
                        <Link to ="/pants" className="page">PANTS </Link>
                        </li>
                    <li >
                        <Link to ="/shirts" className="page" >SHIRTS </Link>
                    </li>
                    <li className="page">
                        <Link to ="/shoes" className="page" >SHOES </Link>
                    </li>
                    <li className="page">
                    <Link to ="/accessories" className="page" >ACCESSORIES</Link>
                    </li>
                </ul>
                <button onClick ={handleMouse}  className="cart-button">CART</button>
            </div>
            {<CartWindow  show = {show}/>}
        </>
    )
}