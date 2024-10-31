import EachItem from "../../components/EachItem.jsx";
import eCommereData from "../../eCommereData.jsx";
import React, { useEffect, useState } from "react";
import "./ItemSection.css";
import { Link } from "react-router-dom";

export default function itemSection({ item }) {
  //   const [itemData, setItemData] = React.useState(props.item);

  return (
    <>
      <div className="item-page-section">
        {item?.map((obj) => (
          <EachItem
            {...obj}
            name={obj.name}
            price={obj.price}
            rating={obj.ratings}
            numberOfReviews={obj.number_of_reviews}
            src={obj.img_src}
            key={obj.id}
          />
        ))}
      </div>
    </>
  );
}
