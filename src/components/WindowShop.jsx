import WindowShopItem from "./WindowShopItem";
import "./WindowShop.css";
import eCommereData from "../eCommereData.jsx";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function (props) {
  const [info, setInfo] = React.useState(props.window);

  const [type, setType] = React.useState(props.window[0].type.toUpperCase());

  let pageLink = "";
  if (info[0].type === "Shirt") {
    pageLink = "/shirts";
  } else if (info[0].type === "Shoes") {
    pageLink = "/shoes";
  } else if (info[0].type === "Accessories") {
    pageLink = "/accessories";
  }

  useEffect(() => {
    setType((prevType) => {
      //just adding S to the shirt type

      if (prevType === "SHIRT") {
        return prevType + "S";
      } else {
        return prevType;
      }
    });
  }, []);

  return (
    <>
      <div className="windowshop">
        <div className="items">
          {/* <WindowShopItem item= {props.window[0]}/>
                <WindowShopItem item= {props.window[1]} />
                <WindowShopItem item= {props.window[2]}/>
                <WindowShopItem item= {props.window[3]}/>
                <WindowShopItem item= {props.window[4]} />
                <WindowShopItem item= {props.window[5]} />
                <WindowShopItem item= {props.window[6]} />
                <WindowShopItem item= {props.window[7]} />
                <WindowShopItem item= {props.window[8]} />
                <WindowShopItem item= {props.window[9]} /> */}

          {props.window.slice(0, 10).map((item) => {
            return <WindowShopItem item={item} />;
          })}
        </div>

        <Link to={pageLink} className="button-link">
          <button>SHOP {type}</button>
        </Link>
      </div>
    </>
  );
}
