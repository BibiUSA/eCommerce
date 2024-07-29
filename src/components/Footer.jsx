import "./Footer.css";

export default function () {
  return (
    <div className="footer">
      <div className="social-media">
        <a href="https://www.facebook.com/" target="_blank">
          <ion-icon
            name="logo-facebook"
            className="social-media-icon"
          ></ion-icon>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <ion-icon
            name="logo-instagram"
            className="social-media-icon"
          ></ion-icon>
        </a>
        <a href="https://x.com/" target="_blank">
          <ion-icon
            name="logo-twitter"
            className="social-media-icon"
          ></ion-icon>
        </a>
        <a href="https://www.tiktok.com/" target="_blank">
          <ion-icon name="logo-tiktok" className="social-media-icon"></ion-icon>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/thebibimathew/" target="_blank">
          Contact Us
        </a>
        <p>Store Location</p>
        <p>Careers</p>
      </div>
    </div>
  );
}
