import Navbar from "./Navbar.jsx";
import ItemSection from "../pages/ItemSection/ItemSection.jsx";
import eCommereData from "../eCommereData.jsx";
import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import App from "../App.jsx";

export default function section({ item }) {
  return (
    <>
      <ItemSection item={item} />
    </>
  );
}
