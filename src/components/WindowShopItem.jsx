import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import App from "../App.jsx";

export default function (props) {
  function handleClick() {
    console.log(props.item.name);
    console.log(props.item.id);
  }

  console.log(props.item.img_src); // to be removed later

  return (
    <div className="windowShopItem">
      <Link to={`/singleitem/${props.item.id}`} className="item-link">
        <div className="item" onClick={handleClick}>
          <img src={props.item?.img_src} className="product-image" />
          <h4>{props.item?.name}</h4>
          <p className="description">{props.item?.short_description}</p>
          <p className="price">
            <strong>{props.item.price}</strong>
          </p>
        </div>
      </Link>
    </div>
  );
}
