import "./CartWindow.css"
import eCommereData from "../eCommereData.jsx"
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { updateCart } from '../redux/slice.js';
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

export default function(props){

    let dispatch = useDispatch();
    // let itemObj = eCommereData.data.map((obj)=>{
    //    if (obj.id== props.item) {
    //         return JSON.stringify(obj)
    //    }
    // })

    // console.log(itemObj)

    let theItem= eCommereData.data.find((obj)=>
        obj.id==props.item
    )
    // let theItem =props.theItem;
    const cartArray = useSelector((state)=>state.cart.cartArray)
    let cartArrayCopy = [...cartArray] //copy for it to be mutated

    let [cartItem, setcartItem] = useState(eCommereData.data.find((obj)=>
    obj.id==props.item))

  
   function handleClick(){
    

   const deleteThis = cartArrayCopy.indexOf(cartArrayCopy.find((obj)=> obj.itemId == props.item && obj.size ==props.size)) //index of the item to delete
   if(deleteThis === 0)cartArrayCopy.shift()
   const dropped= cartArrayCopy.splice(deleteThis,deleteThis)

   dispatch(updateCart(cartArrayCopy))


   }


    return (
        <>
        <section className="each-item-cart">
            <Link to={`/singleItem/${props.item}`} ><img src={`../${theItem.img_src}`} alt="item-image" className="item-image"/></Link>
            <div className="cart-item-desctiption">
            
                <p>{theItem.name}</p>
                <p>{theItem.color}</p>
                <p>{props.size}</p>
                <p>Quanitity: {props.quantity}</p>
                </div>
                <p className="price"><strong>{theItem.price}</strong></p>
                <button className="deleteButton" onClick={handleClick}>DELETE</button>
            </section>
        </>
    )
}
