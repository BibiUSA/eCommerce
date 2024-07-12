import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import ItemSection from "./ItemSection.jsx"
import eCommereData from "../eCommereData.jsx"
import {Link} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import App from "../App.jsx";


export default function(props){

     
 



    return (
        <>
            <ItemSection item ={props.item}/>
            <Footer />
        </>
    )
}