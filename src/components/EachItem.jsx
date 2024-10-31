import "./EachItem.css";
import { Link } from "react-router-dom";

export default function eachItem(props) {
  return (
    <>
      <Link to={`/singleitem/${props.id}`} className="item-link">
        <div className="each-item">
          <img src={props.src} alt="item image" className="each-item-image" />
          <h4>{props.name}</h4>
          <p>{props.price}</p>
          <div>
            <p>
              {`rating: ${props.rating} `}
              <ion-icon name="star"></ion-icon>
            </p>
            <p>No of reviews: {props.numberOfReviews}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
