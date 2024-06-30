import Navbar from "./Navbar.jsx"
import Banner from "./Banner.jsx"
import WindowShop from "./WindowShop.jsx"
import FeaturedSection from "./FeaturedSection.jsx"
import Footer from "./Footer.jsx"
import eCommereData from "../eCommereData.jsx"
import CartWindow from "./CartWindow.jsx"





export default function(){


    
    
    function getItem(item){
        const itemArr =[];
        eCommereData.data.map((obj)=>{
        
       if (obj.type===item){
        itemArr.push(obj)
       }

        })
        return itemArr
    }

const pant = getItem("Pants")
const shirt = getItem("Shirt")
const shoes = getItem("Shoes")
const accessories = getItem("Accessories")




    


    return(
        <>
        <Navbar />
        <Banner />
        <WindowShop window= {shirt}/>
        <FeaturedSection PantData = {pant}/>
        <WindowShop window = {shoes} />
        <WindowShop window = {accessories} />
        <Footer />
        </>
    )
}