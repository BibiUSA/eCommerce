import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateCart } from '../redux/slice'
import eCommereData from "../eCommereData.jsx"
import RealCartItemWindow from './RealCartItemWindow.jsx'
import "./Cart.css"


export default function(){
    
    const dispatch = useDispatch();
    const totalData = eCommereData.data
    const cartArray = useSelector((state)=>state.cart.cartArray)

    

   const cartSpread= cartArray.map((obj)=>{
        for(let i=0; i<totalData.length; i++){
            if(obj.itemId == totalData[i].id){
                return <RealCartItemWindow  cartObj= {obj} fullData = {totalData[i]} className="cartItem"/>
            }else{
            }
        }
    })

   

    return(
        <>
        <h1>CART</h1>
        <div className="cart">
            <div className="cartItems">
            {cartSpread}
            </div>
        <div className="checkOutSection">
            <p>TOTAL: $119.99</p>
            <button className='checkOutButton'>PROCEED TO CHECKOUT</button>
        </div>
        </div>
        </>
    )
}