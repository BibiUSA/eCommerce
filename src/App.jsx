import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import eCommereData from "./eCommereData.jsx";
import Section from "./components/Section.jsx";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import SingleItem from "./components/SingleItem.jsx";
import Navbar from "./components/Navbar.jsx";
import Cart from "./pages/Cart/Cart.jsx";

function App() {
  function getItem(item) {
    const itemArr = [];
    eCommereData.data.map((obj) => {
      if (obj.type === item) {
        itemArr.push(obj);
      }
    });
    return itemArr;
  }

  const pant = getItem("Pants");
  const shirt = getItem("Shirt");
  const shoes = getItem("Shoes");
  const accessories = getItem("Accessories");

  const params = useParams();
  const itemId = params.id;

  const fullData = eCommereData.data;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/eCommerce" element={<Home />} />
          <Route path="/pants" element={<Section item={pant} />} />
          <Route path="/shirts" element={<Section item={shirt} />} />
          <Route path="/shoes" element={<Section item={shoes} />} />
          <Route path="/accessories" element={<Section item={accessories} />} />
          <Route
            path="/singleitem/:itemId"
            element={<SingleItem fullData={fullData} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
