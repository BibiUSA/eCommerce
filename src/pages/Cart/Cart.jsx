import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCart } from "../../redux/slice.js";
import eCommereData from "../../eCommereData.jsx";
import RealCartItemWindow from "../../components/RealCartItemWindow.jsx";
import "./Cart.css";
import Footer from "../../components/Footer.jsx";

export default function () {
  const dispatch = useDispatch();
  const totalData = eCommereData.data;
  const cartArray = useSelector((state) => state.cart.cartArray);

  const cartSpread = cartArray.map((obj) => {
    for (let i = 0; i < totalData.length; i++) {
      if (obj.itemId == totalData[i].id) {
        return (
          <RealCartItemWindow
            cartObj={obj}
            fullData={totalData[i]}
            className="cartItem"
          />
        );
      } else {
      }
    }
  });

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

  return (
    <>
      <h1>CART</h1>
      <div className="cart">
        <div className="cartItems">{cartSpread}</div>
        <div className="checkOutSection">
          <p>TOTAL: ${totalPrice.toFixed(2)}</p>
          <button className="checkOutButton">PROCEED TO CHECKOUT</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
