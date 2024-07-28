import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCart } from "../../redux/slice.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BuyTogether from "../../components/BuyTogether.jsx";
import Similaritems from "../../components/SimilarItems.jsx";

export default function (props) {
  const { itemId } = useParams();

  const thisItemId = itemId;

  const dispatch = useDispatch();

  let currentItem;

  props.fullData.map((obj) => {
    if (obj.id == thisItemId) {
      currentItem = props.fullData.indexOf(obj);
      return currentItem;
    }
  });

  const thisItem = props.fullData[currentItem];

  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  function handleSize() {
    //checks to see see is size is chosen
    setSize(document.querySelector("input:checked").value);
    return;
  }

  function handleQuantity() {
    let quantityLabel = document.querySelector("#quantity");
    let quantityValue =
      quantityLabel.options[quantityLabel.selectedIndex].value;
    console.log("QUANTITY", quantityValue);
    setQuantity(quantityValue);
  }

  //trying to get items in the cart and add to it. If its empty, add a new item in an array

  const cartArray = useSelector((state) => state.cart.cartArray);
  const cartArrayCopy = [...cartArray]; //creates a copy to add new items before it's used to updateCart

  function handleSubmit() {
    //when you click add to the bag

    if (cartArray.find((obj) => obj.itemId == thisItemId) == undefined) {
      //checks to see if the current item is in the cart
      newArr.quantity = quantity;
      console.log(newArr);
      cartArrayCopy.push(newArr); //if not addds
    } else if (
      cartArray.find((obj) => obj.size == size && obj.itemId == thisItemId)
    ) {
      //THIS PART NEEDS FIXING
      let thisObj = cartArray.find(
        (obj) => obj.size == size && obj.itemId == thisItemId
      );
      let thisObjIndex = cartArray.findIndex(
        (obj) => obj.size == size && obj.itemId == thisItemId
      );
      let thisObjCopy = { ...thisObj };
      thisObjCopy.quantity = Number(thisObjCopy.quantity) + Number(quantity);
      cartArrayCopy.splice(thisObjIndex, 1, thisObjCopy);
    } else {
      console.log("this ran");
      newArr.quantity = quantity;
      cartArrayCopy.push(newArr);
    }
    dispatch(updateCart(cartArrayCopy)); // sends info to the redux persist storage
  }

  let newArr = {};
  newArr.itemId = thisItemId;
  newArr.size = size; //purpose is to make default size M if none is chosen or if another is chosen, change it something else.
  newArr.key = cartArray.length;

  function quantityOption() {
    //iterates the quantity option
    return Array.from({ length: 10 }, (_, i) => (
      <option key={i + 1} value={i + 1} className="quantities">
        {i + 1}
      </option>
    ));
  }

  return (
    <div className="single-item-info">
      <section className="single-item-group">
        <img
          src={`../${thisItem.img_src}`}
          alt="picture of the item"
          className="single-item-image"
        />
        <div className="single-item-details">
          <div className="more-details">
            <h3>{thisItem.name}</h3>
            <p>
              {`Rating: ${thisItem.ratings} `}
              <ion-icon name="star"></ion-icon>
            </p>
            <p>Number of Reviews: {thisItem.number_of_reviews}</p>
            <p>Color: {thisItem.color}</p>
            <p>Product ID: {itemId}</p>
            <form className="size-choice">
              <input
                type="radio"
                value="S"
                name="size"
                id="size-s"
                className="sizes"
                onClick={handleSize}
              ></input>
              <label htmlFor="size-s" className="sizes-label">
                S
              </label>
              <input
                type="radio"
                value="M"
                name="size"
                id="size-m"
                className="sizes"
                onClick={handleSize}
              ></input>
              <label htmlFor="size-m" className="sizes-label">
                M
              </label>
              <input
                type="radio"
                value="L"
                name="size"
                id="size-l"
                className="sizes"
                onClick={handleSize}
              ></input>
              <label htmlFor="size-l" className="sizes-label">
                L
              </label>
              <input
                type="radio"
                value="XL"
                name="size"
                id="size-xl"
                className="sizes"
                onClick={handleSize}
              ></input>
              <label htmlFor="size-xl" className="sizes-label">
                XL
              </label>
              <input
                type="radio"
                value="XXL"
                name="size"
                id="size-xxl"
                className="sizes"
                onClick={handleSize}
              ></input>
              <label htmlFor="size-xxl" className="sizes-label">
                XXL
              </label>
            </form>
            <p className="single-item-description">{thisItem.description}</p>
          </div>

          <div className="checkout">
            <p className="price-large">{thisItem.price}</p>
            <form className="checkout-form">
              <label htmlFor="quantity">Quantity</label>
              <select id="quantity" name="quantity" onChange={handleQuantity}>
                {quantityOption()}
              </select>
              <br></br>
              <button
                type="submit"
                className="add-to-bag"
                onClick={(event) => {
                  event.preventDefault(), handleSubmit(event);
                }}
              >
                ADD TO BAG
              </button>
              <br></br>
              <button
                type="submit"
                className="buy-it-now"
                onClick={(event) => {
                  event.preventDefault(), handleSubmit(event);
                }}
              >
                <Link to="/cart" className="cartLink">
                  BUY IT NOW
                </Link>
              </button>
            </form>
          </div>
        </div>
      </section>
      <BuyTogether thisItem={thisItem} fullData={props.fullData} />
      <Similaritems thisItem={thisItem} fullData={props.fullData} />
    </div>
  );
}
