import { useState, useEffect } from 'react';
import { BrowserRouter,Routes, Route, useParams } from 'react-router-dom'


export default function(props){

    const {itemId} = useParams()

    const thisItemId= itemId

    
    

    let currentItem ;

    
       
            props.fullData.map((obj)=>{
                if(obj.id == thisItemId){
                    currentItem = props.fullData.indexOf(obj)
                    return currentItem
                } 
            })

            


    const thisItem= (props.fullData[currentItem])
    

    const[cart,setCart]= useState([])
    
    // useEffect(()=>{


    // let obj_serialized = JSON.stringify({itemId})
    // console.log(obj_serialized);
    
  
    //trying to get items in the cart and add to it. If its empty, add a new item in an array

  

 let oldArr =[]  
    if(localStorage.length>0){
        
        
        oldArr= JSON.parse(localStorage.getItem("cartArray"))
    }
    
   
    
    
    
   
    function handleSubmit(){
    
        if(oldArr.find((obj)=> obj.itemId == thisItemId)== undefined){ //checks to see if the current item is in the cart
            oldArr.push(newArr) //if not addd
        } else{
            console.log("Already in cart")
        }  
      localStorage.setItem("cartArray",JSON.stringify(oldArr))
      
       
    }

    console.log(localStorage.getItem("cartArray"))

    let newArr= {};
    newArr.itemId = thisItemId;

    function quantity(){        //iterates the quantity option
        return Array.from({length:10},(_,i)=>(
            <option key ={i+1} value= {i+1}>{i+1}</option>
        ))
             
        }
   


 
    return(
        <div className="single-item-info">
            <section className="single-item-group">
                <img src=  {`../${thisItem.img_src}` } alt="picture of the item" className="single-item-image"/>
                <div className="single-item-details">
                    <div className='more-details'>
                        <h3>{thisItem.name}</h3>
                        <p>Rating: {thisItem.ratings}</p>
                        <p>Number of Reviews: {thisItem.number_of_reviews}</p>
                        <p>Color: {thisItem.color}</p>
                        <p>Product ID: {itemId}</p>
                        <form className="size-choice">
                            <input type="radio" value="S" name="size" id="size-s" className='sizes'></input>
                            <label htmlFor="size-s" className='sizes-label' >S</label>
                            <input type="radio" value="M" name="size" id="size-m" className='sizes'></input>
                            <label htmlFor="size-m" className='sizes-label' >M</label>
                            <input type="radio" value="L" name="size" id="size-l" className='sizes'></input>
                            <label htmlFor="size-l" className='sizes-label' >L</label>
                            <input type="radio" value="XL" name="size" id="size-xl" className='sizes'></input>
                            <label htmlFor="size-xl" className='sizes-label' >XL</label>
                            <input type="radio" value="XXL" name="size" id="size-xxl" className='sizes'></input>
                            <label htmlFor="size-xxl" className='sizes-label' >XXL</label>
                        </form>
                        <p className='single-item-description'>{thisItem.description}</p>
                    </div>
                    
                    <div className="checkout">
                    <p className='price-large'>{thisItem.price}</p>
                        <form className='checkout-form'>
                            <label htmlFor="quantity" >Quantity</label>
                            <select id="quantity" name ="quantity">
                                {quantity()}
                            </select>
                            <br></br>
                            <button type='submit' className="add-to-bag" onClick={event=>{event.preventDefault(),handleSubmit(event)}} >ADD TO BAG</button>
                            <br></br>
                            <button type='submit' className="buy-it-now">BUY IT NOW</button>
                        </form>
                    </div>

                    
                </div>
            </section>
        </div>
    )
}