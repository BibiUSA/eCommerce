import "./FeaturedSection.css"
import {Link} from 'react-router-dom'

export default function featured(props){




    return(
        <>  
            <Link to ={`/singleitem/${props.featured.id}` } className="featured">
            <div  >
                <img src= {props.featured.img_src} />
                <section className="item-details">
                    <div className="item-info">
                        <h4>{props.featured.name}</h4>
                        <p className="description">{props.featured.short_description}</p>
                        <p className="price"><strong>{props.featured.price}</strong></p>
                    </div>
                    <button>SHOP NOW</button>
                </section>
            </div>
            </Link>
        </>
    )
}