import "./Footer.css"

export default function(){
    return(
        <div className="footer">

        <div className="social-media">
           <a href="https://www.facebook.com/" target="_blank"><img src="src/assets/facebook.png" className="social-media-icon"/></a>
           <a href="https://www.instagram.com/" target="_blank"><img src="src/assets/instagram.svg" className="social-media-icon"/></a>
           <a href="https://x.com/" target="_blank"><img src="src/assets/x.svg" className="social-media-icon"/></a>
           <a href="https://www.tiktok.com/" target="_blank"><img src="src/assets/tiktok.svg" className="social-media-icon"/></a>
           
        </div>
        <div>
            <a href="https://www.linkedin.com/in/thebibimathew/" target="_blank" >Contact Us</a>
            <p>Store Location</p>
            <p>Careers</p>
        </div>

        </div>
    )
}