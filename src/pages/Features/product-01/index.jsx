import {  FullscreenOutlined, HeartOutlined, RetweetOutlined, ShoppingOutlined, StarFilled } from "@ant-design/icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMAGES } from "../../../asset/images";


export default function Product1 () {
  return (
  <section className="section-product1">
    <div className="container ">
      <div className="product1 flex">
        <div className="product1-banner">
          <div  className="product1-banner-title">
            <img src={IMAGES.product1_3} alt="product1_3" />
            <div className="product1-img-text content-all">
              <div className="content-title-all">
                <h4 className="subtitle-all">WINTER 2022 COLLECTION</h4>
                <h3 className="title-all">Aenean id sapien sit amet urna laoreet</h3>
                <p className="text-all">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <a href="/#" className="btn-shopnow-all">Shop Collection <span><FontAwesomeIcon icon={faArrowRightLong}/></span></a>
              </div>
            </div>
          </div>
        </div>
        <ul className="product1-list flex">
          <li className="product1-item ">
            <div className="product1-img">
              <a href="/#" className="product1-img-default">
                  <img src={IMAGES.product1_1} alt="product1-1" />
              </a>
              <div className="product1-img-badge">
                  <span className="product1-sale">-26%</span>
              </div>
              <div className="img-total-action flex justify-content-center">
                  <button className="btn-to-action btn-to-heart"><HeartOutlined /></button>
                  <button className="btn-to-action btn-to-fullscreen"><FullscreenOutlined /></button>
                  <button className="btn-to-action btn-to-retweet"><RetweetOutlined /></button>
                  <button className="btn-to-action btn-to-shopping"><ShoppingOutlined /></button>
              </div>
            </div>
            <div className="product1-info">
                <a href="/#" className="product1-name">Sleeveless Ribbed Short Dress</a>
                <p className="product1-price"> <span className="product1-price-1">$19.99</span><strong>$14.99</strong></p>
                <div className="product1-review">               
                  <span><StarFilled /> </span> 
                  1 review   
                </div>
                <div className="product1-amount">
                  <div className="product1-amount-bar">
                    <span></span>
                  </div>
                  <div className="product1-amount-sold flex">
                    <p>Available: 89</p>
                    <p>Sold: <strong>53</strong></p>
                  </div>
                </div>    
            </div>
          </li>
          <li className="product1-item ">
            <div className="product1-img">
                <a href="/#" className="product1-img-default">
                    <img src={IMAGES.product1_2} alt="product1-2" />
                </a>
                <div className="product1-img-badge">
                    <span className="product1-sale">-17%</span>
                </div>
                <div className="img-total-action flex ">
                    <button className="btn-to-action btn-to-heart"><HeartOutlined /></button>
                    <button className="btn-to-action btn-to-fullscreen"><FullscreenOutlined /></button>
                    <button className="btn-to-action btn-to-retweet"><RetweetOutlined /></button>
                    <button className="btn-to-action btn-to-shopping"><ShoppingOutlined /></button>
                </div>
            </div>
            <div className="product1-info">
                <a href="/#" className="product1-name">Basic Relax Fit Leggings</a>
                <p className="product1-price"> <span>$29.90</span><strong>$24.90</strong></p>
                <div className="product1-review">
                  <span><StarFilled /> </span>
                  1 review
                </div>
                <div className="product1-amount">
                  <div className="product1-amount-bar">
                    <span></span>
                  </div>
                  <div className="product1-amount-sold flex">
                    <p>Available: 129</p>
                    <p>Sold: <strong>68</strong></p>
                  </div>
                </div>    
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  )
}
