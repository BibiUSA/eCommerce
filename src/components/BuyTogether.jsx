import "./BuyTogether.css";
import { Link } from "react-router-dom";

//covers styling ideas component of each item. parent component being SingleItemInfo
export default function (props) {
  const thisItem = props.thisItem;
  const fullData = props.fullData;

  const types = ["Shirt", "Pants", "Shoes", "Accessories"];
  const thisItemIndex = types.indexOf(thisItem.type);
  const thisItemType = types.splice(thisItemIndex, 1);

  //seperates items into categories based on types
  function getItem(item) {
    const itemArr = [];
    fullData.map((obj) => {
      if (obj.type === item) {
        itemArr.push(obj);
      }
    });
    return itemArr;
  }
  const pantsData = getItem("Pants");
  const shirtsData = getItem("Shirt");
  const shoesData = getItem("Shoes");
  const accessoriesData = getItem("Accessories");

  const compliment = types.map((type) => {
    let randomNumber = Math.floor(Math.random() * getItem(type).length);
    let currentCompliment = getItem(type)[randomNumber];
    return (
      <Link
        to={`/singleitem/${currentCompliment.id}`}
        className="complimentLink"
      >
        <div className="eachCompliment">
          <img
            src={`${currentCompliment.img_src}`}
            className="complimentImage"
          />
          <p>
            <strong>{currentCompliment.name}</strong>
          </p>
          <p>{currentCompliment.short_description}</p>
          <p>
            {`rating: ${currentCompliment.ratings} `}
            <ion-icon name="star"></ion-icon>
          </p>
          <p className="complimentPrice">{currentCompliment.price}</p>
        </div>
      </Link>
    );
  });

  return (
    <div id="BuyTogether">
      <h2>Styling Ideas</h2>
      <div id="stylingIdea">
        <img src={`${thisItem.img_src}`} id="thisItemImage" />
        {compliment}
      </div>
    </div>
  );
}
