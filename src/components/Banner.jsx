import eCommereData from "../eCommereData";
import "./Banner.css";
import { Link } from "react-router-dom";

export default function () {
  const image = eCommereData.data[1].img_src;
  console.log(image);

  const backgroundImage = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
      <Link to="/singleitem/2" className="linkToItem">
        <div
          className="banner"
          style={{
            backgroundImage: `url("eCommerce/assets/comfort-t-shirt.jpg")`,
          }}
        >
          <div className="banner-words">
            <h2>Enjoy Comfort in Style</h2>
            <p>
              Our Him shirts are comfortable and stylish so you can stay cool in
              the summer.
            </p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </Link>
    </>
  );
}
