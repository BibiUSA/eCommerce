import Navbar from "../../components/Navbar.jsx";
import Banner from "../../components/Banner.jsx";
import WindowShop from "../../components/WindowShop.jsx";
import FeaturedSection from "../../components/FeaturedSection.jsx";
import eCommereData from "../../eCommereData.jsx";
import CartWindow from "../../components/CartWindow.jsx";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function home() {
  const cartArray = useSelector((state) => state.cart.cartArray);
  const [shirts, setShirts] = useState(getItem("Shirt"));

  console.log(cartArray);

  function getItem(item) {
    const itemArr = [];
    eCommereData.data.map((obj) => {
      if (obj.type === item) {
        itemArr.push(obj);
      }
    });
    return itemArr;
  }

  console.log(getItem("Shirt")); // THIS WAS FOR DEPLOYEMNT CHECK - REMOVE ANYITME LATER

  const pant = getItem("Pants");
  const shirt = getItem("Shirt");
  const shoes = getItem("Shoes");
  const accessories = getItem("Accessories");

  return (
    <div className="homepage">
      <Banner />
      <WindowShop window={shirts} />
      <FeaturedSection PantData={pant} />
      <WindowShop window={shoes} />
      <WindowShop window={accessories} />
      <Outlet />
    </div>
  );
}
