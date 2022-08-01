import { IMAGES } from "../../../asset/images";

export default function Footer() {
  return (
  <footer className="page-footer ">
    <div className="footer-form">
      <div className="container  flex justify-content-between">
        <div className="form-subscribe">
          <form className="form-subscribe-content">
            <h3>Get our emails for info on new items, sales and more.</h3>
            <p className="title-text">We'll email you a voucher worth £10 off your first order over £50.</p>
            <input className="form-text" placeholder="Enter your email address..." type="text" />
            <button className="btn-sub" type="submit">Subscrite</button>
            <span className="text-bottom">By subscribing you agree to our <strong> Terms & Conditions and Privacy & Cookies Policy </strong>.</span>
          </form>
        </div>
        <div className="address">
          <h2>Need help? <br /> (+800) 1234 5678 90</h2>
          <p className="title-text">We are available 8:00am – 7:00pm</p>
          <a href="/#"> <img src={IMAGES.appstore} alt="appstore" /></a>
          <a href="/#"> <img className="ggplay" src={IMAGES.googleplay} alt="gg play" /></a>
          <span className="text-bottom"><strong>Shopping App: </strong>Try our View in Your Room feature, manage registries and save payment info.</span>
        </div>
      </div>
    </div>
    <div className="container ">
      <div className="footer-top flex justify-content-around">
        <div className="footer-logo  ">
          <a href="/#" className="footer-logo-img">
            <img src={IMAGES.logo} alt="logo" />
          </a>
          <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in termapol. </p>
          <p>(+800) 1234 5678 90 – info@example.com</p>
        </div>
        <div className="footer-middle-col">
          <h3 className="footer-middle-title">Information</h3>
          <ul className="footer-middle-list">
            <li className="footer-col-item">
              <a href="/#">About Us</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Privacy Policy</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Returns Policy</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Shipping Policy</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Dropshipping</a>
            </li>
          </ul>
        </div>
        <div className="footer-middle-col">
          <h3 className="footer-middle-title">Account</h3>
          <ul className="footer-middle-list">
            <li className="footer-col-item">
              <a href="/#">Dashboard</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">My Orders</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">My Wishlist</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Account details</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Track My Orders</a>
            </li>
          </ul>
        </div>
        <div className="footer-middle-col">
          <h3 className="footer-middle-title">Shop</h3>
          <ul className="footer-middle-list">
            <li className="footer-col-item">
              <a href="/#">Affiliate</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Bestsellers</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Discount</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Latest Products</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Sale Products</a>
            </li>
          </ul>
        </div>
        <div className="footer-middle-col">
          <h3 className="footer-middle-title">Categories</h3>
          <ul className="footer-middle-list">
            <li className="footer-col-item">
              <a href="/#">Men</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Women</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Bags</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Outerwear</a>
            </li>
            <li className="footer-col-item">
              <a href="/#">Shoes</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom flex">
        <p>Copyright 2022 © Clotya WordPress Theme. All right reserved. Powered by KLBTheme.</p>
        <a href="/#"><img src={IMAGES.cards} alt="cards" /></a>
        <ul className="footer-bot-list flex">
          <li className="bot-item"><a href="/#" className="bot-item1">Privacy Policy</a></li>
          <li className="bot-item"><a href="/#">Terms and Conditions</a></li>
          <li className="bot-item"><a href="/#">Returns Policy</a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}
