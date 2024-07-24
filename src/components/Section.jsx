import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ItemSection from "./ItemSection.jsx";
import eCommereData from "../eCommereData.jsx";
import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import App from "../App.jsx";

export default function ({ item }) {
  return (
    <>
      <ItemSection item={item} />
      <Footer />
    </>
  );
}
