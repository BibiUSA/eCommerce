import "./RealCartItemWindow.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCart } from "../redux/slice";
import { Link } from "react-router-dom";

export default function (props) {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cart.cartArray);
  const cartArrayCopy = [...cartArray];
  const fullItemData = props.fullData;
  const cartItemObj = props.cartObj;

  console.log("yo", cartItemObj);
  console.log(cartArray);

  function adjustQuantity() {
    let thisObj = cartArray.find(
      (obj) => obj.size == cartItemObj.size && obj.itemId == cartItemObj.itemId
    );
    let thisObjIndex = cartArray.findIndex(
      (obj) => obj.size == cartItemObj.size && obj.itemId == cartItemObj.itemId
    );
    let thisObjCopy = { ...thisObj };
    console.log(thisObjCopy);
    if (event.target.value === "-") {
      thisObjCopy.quantity--;
    } else if (event.target.value === "+") {
      thisObjCopy.quantity++;
    }
    cartArrayCopy.splice(thisObjIndex, 1, thisObjCopy);
    dispatch(updateCart(cartArrayCopy));
  }

  function handleClick() {
    const deleteThis = cartArrayCopy.indexOf(
      cartArrayCopy.find(
        (obj) =>
          obj.itemId == cartItemObj.itemId && obj.size == cartItemObj.size
      )
    ); //index of the item to delete
    if (deleteThis === 0) {
      cartArrayCopy.shift();
    } else {
      const dropped = cartArrayCopy.splice(deleteThis, 1);
    }
    dispatch(updateCart(cartArrayCopy));
  }

  return (
    <>
      <hr></hr>
      <div className="cartitem">
        <div>
          <Link to={`../singleItem/${fullItemData.id}`}>
            <img src={fullItemData.img_src} className="cartItemImage" />
          </Link>
        </div>
        <div className="cartItemDescription">
          <Link to={`../singleItem/${fullItemData.id}`} className="nameLink">
            <p className="name">{fullItemData.name}</p>
          </Link>
          <p className="price">{fullItemData.price}</p>
          <p>Size: {cartItemObj.size}</p>
          <div className="quantityAdjust">
            <p className="quantity-item">Qty: {cartItemObj.quantity}</p>
            <label htmlFor="+"></label>
            <input
              type="button"
              value="+"
              id="plus"
              onClick={adjustQuantity}
            ></input>
            {cartItemObj.quantity > 1 && (
              <label htmlFor="-">
                <input
                  type="button"
                  value="-"
                  id="minus"
                  onClick={adjustQuantity}
                ></input>
              </label>
            )}
          </div>
        </div>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </>
  );
}
