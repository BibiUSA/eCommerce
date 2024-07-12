import "./CartWindow.css"
import eCommereData from "../eCommereData.jsx"
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { updateCart } from '../redux/slice.js';
import { useSelector } from "react-redux";

export default function(props){


    // let itemObj = eCommereData.data.map((obj)=>{
    //    if (obj.id== props.item) {
    //         return JSON.stringify(obj)
    //    }
    // })

    // console.log(itemObj)

    let theItem= eCommereData.data.find((obj)=>
        obj.id==props.item
    )


    let [cartItem, setcartItem] = useState(eCommereData.data.find((obj)=>
    obj.id==props.item))

    console.log(cartItem)
  
   function handleClick(){
    
   let oldArr=  JSON.parse(localStorage.getItem("cartArray"))

   const deleteThis = oldArr.indexOf(oldArr.find((obj)=> obj.itemId == props.item)) //index of the item to delete
   if(deleteThis === 0)oldArr.shift()
   const dropped= oldArr.splice(deleteThis,deleteThis)

   localStorage.setItem("cartArray",JSON.stringify(oldArr)) //TRYING TO REMOVE THE ITEM IF 
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