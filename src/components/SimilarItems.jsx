import { Link } from "react-router-dom";
import "./SimilarItems.css";

export default function similarItems(props) {
  const thisItem = props.thisItem;
  const fullData = props.fullData;

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
  const thisData = getItem(thisItem.type);

  const similarItemsArr = [];

  //pushes index of items to array if they are similar items
  while (similarItemsArr.length < 5) {
    let randomSimilar = Math.floor(Math.random() * thisData.length);
    if (
      !similarItemsArr.includes(randomSimilar) &&
      thisData[randomSimilar].id != thisItem.id
    ) {
      similarItemsArr.push(randomSimilar);
    }
  }

  const similarSuggestion = similarItemsArr.map((num) => {
    return (
      <div className="similarItemBox">
        <Link
          to={`/singleitem/${thisData[num].id}`}
          className="similarItemLink"
        >
          <img
            src={`${thisData[num].img_src}`}
            className="similarSuggestionImg"
          />
          <p>
            <strong>{thisData[num].name}</strong>
          </p>
          <p>{thisData[num].short_description}</p>
          <p>
            {`rating: ${thisData[num].ratings} `}
            <ion-icon name="star"></ion-icon>
          </p>
          <p>{thisData[num].price}</p>
        </Link>
      </div>
    );
  });

  return (
    <section id="similarItems">
      <h2>Other Items To Consider</h2>
      <div id="similarItemsBoxes">{similarSuggestion}</div>
    </section>
  );
}
