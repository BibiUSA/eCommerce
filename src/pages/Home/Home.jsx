import Navbar from "../../components/Navbar.jsx";
import Banner from "../../components/Banner.jsx";
import WindowShop from "../../components/WindowShop.jsx";
import FeaturedSection from "../../components/FeaturedSection.jsx";
import Footer from "../../components/Footer.jsx";
import eCommereData from "../../eCommereData.jsx";
import CartWindow from "../../components/CartWindow.jsx";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function () {
  const cartArray = useSelector((state) => state.cart.cartArray);

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

  const pant = getItem("Pants");
  const shirt = getItem("Shirt");
  const shoes = getItem("Shoes");
  const accessories = getItem("Accessories");

  return (
    <>
      <Banner />
      <WindowShop window={shirt} />
      <FeaturedSection PantData={pant} />
      <WindowShop window={shoes} />
      <WindowShop window={accessories} />
      <Footer />
      <Outlet />
    </>
  );
}
