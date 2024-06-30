import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import eCommereData from "../eCommereData.jsx"
import {Link} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import App from "../App.jsx";
import "./SingleItem.css"
import SingleItemInfo from "./SingleItemInfo.jsx";



export default function(props){

    return (
    <>
        <SingleItemInfo fullData = {props.fullData}/>
        <Footer />
    </>
    )
}