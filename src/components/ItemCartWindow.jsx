import "./CartWindow.css"
import eCommereData from "../eCommereData.jsx"
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { updateCart } from '../redux/slice.js';
import { useSelector } from "react-redux";

export default function(props){

    let dispach = useDispatch();
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

    console.log(cartItem,"WOO HOO")
  
   function handleClick(){
    

   const deleteThis = cartArrayCopy.indexOf(cartArrayCopy.find((obj)=> obj.itemId == props.item)) //index of the item to delete
   if(deleteThis === 0)cartArrayCopy.shift()
   const dropped= cartArrayCopy.splice(deleteThis,deleteThis)

   dispach(updateCart(cartArrayCopy)) //TRYING TO REMOVE THE ITEM IF 
   //CLICKED DELETE BUT IT MIGHT HAVE UP TO BE ON THE HIGHER PAGE SINCE THAT IS WHAT PUSHES THE ITEM


   }

    return (
        <>
        <section className="each-item-cart">
            <img src={`../${theItem.img_src}`} alt="item-image" className="item-image"/>
            <div className="cart-item-desctiption">
            
                <p>{theItem.name}</p>
                <p>{theItem.color}</p>
                <p>{theItem.size}</p>
                <p>Quanitity: 1</p>
                </div>
                <p className="price"><strong>{theItem.price}</strong></p>
                <button onClick={handleClick}>DELETE</button>
            </section>
        </>
    )
}
