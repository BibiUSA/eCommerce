import Featured from "./Featured.jsx"
import MiniFeatured from "./MiniFeatured.jsx"
import "./FeaturedSection.css"
import eCommereData from "../eCommereData.jsx"



export default function(props){



    return(
        <div className="featured-section">
            <Featured featured = {props.PantData[0]} />
            <div className="mini-features">
            <MiniFeatured mini= {props.PantData[1]} />
            <MiniFeatured mini= {props.PantData[2]}/>
            </div>
           

        </div>
    )
}