import "./Banner.css"
import { Link } from "react-router-dom"

export default function(){


    return (
        <>
            <Link to= "/singleitem/2" className="linkToItem"><div className="banner">
                <div className="banner-words">
                <h2>Enjoy Comfort in Style</h2>
                <p>Our Him shirts are comfortable and stylish so you can stay cool in the summer.</p>
                <button>SHOP NOW</button>
                </div>
            </div></Link>
        
        </>
    )
}