import "./FeaturedSection.css"
import {Link} from 'react-router-dom'

export default function(props){



    return(
        <div className="mini-featured">
            <Link to = {`/singleitem/${props.mini.id}`} className="mini-featured-link" >
            <div >
                <img src={props.mini.img_src}/>
                <section className="item-details">
                    <div className="item-info">
                        <h4>{props.mini.name}</h4>
                        <p className="description">{props.mini.short_description}</p>
                        <p className="price"><strong>{props.mini.price}</strong></p>
                    </div>
                    <button>SHOP NOW</button>
                </section>
            </div>
            </Link>

        </div>
    )
}