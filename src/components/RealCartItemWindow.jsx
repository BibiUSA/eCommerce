import "./RealCartItemWindow.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCart } from "../redux/slice";

export default function(props){

    const dispatch= useDispatch();
    const cartArray = useSelector((state)=>state.cart.cartArray)
    const cartArrayCopy = [...cartArray]
    const fullItemData = props.fullData
    const cartItemObj= props.cartObj

    console.log("yo", cartItemObj)

    function handleClick(){
    const deleteThis = cartArrayCopy.indexOf(cartArrayCopy.find((obj)=> obj.itemId == cartItemObj.itemId && obj.size ==cartItemObj.size)) //index of the item to delete
    if(deleteThis === 0)cartArrayCopy.shift()
    const dropped= cartArrayCopy.splice(deleteThis,deleteThis)
 
    dispatch(updateCart(cartArrayCopy))
    }
    
return(
    <div className="cartitem">
        <div>
            <img src= {fullItemData.img_src} className="cartItemImage"/>
        </div>
        <div className="cartItemDescription">
            <p className="name">{fullItemData.name}</p>
            <p className="price">{fullItemData.price}</p>
            <p>Size: {cartItemObj.size}</p>
            <p>Quantity: {cartItemObj.quantity}</p>
        </div>
        <button className="delete" onClick={handleClick}>Delete</button>
    </div>
    )
}