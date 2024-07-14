import "./CartItemWindow.css";

export default function(props){


    const fullItemData = props.fullData
    const cartItemObj= props.cartObj

    console.log(fullItemData.img_src)
    
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
        <button className="delete">Delete</button>
    </div>
    )
}