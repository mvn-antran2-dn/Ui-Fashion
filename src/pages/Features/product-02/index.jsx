import { ArrowRightOutlined, FullscreenOutlined, HeartOutlined, RetweetOutlined, ShoppingOutlined, StarFilled } from "@ant-design/icons";
import { IMAGES } from "../../../asset/images";
import CustomProduct from "../custom-product";


export default function Product2 () {
  return (
  <section className="section-product2">
    <div className="container flex product1">
      <div className="product1-banner">
        <div className="product1-banner-title product2-banner-title">
          <img src={IMAGES.product2_9} alt="product1_3" />
          <div className="product2-img-text content-all">
            <div className="content-title-all">
              <h4 className="subtitle-all">WINTER 2022 COLLECTION</h4>
              <h3 className="title-all">Aenean id sapien sit amet urna laoreet</h3>
              <p className="text-all">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <a href="/#" className="btn-shopnow-all">Shop Collection <ArrowRightOutlined /></a>
            </div>
          </div>
        </div>
      </div>
      <ul className="product1-list flex">
        <li className="product1-item product2-item">
          <div className="product1-img product2-img">
              <CustomProduct
              prd1="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/pocketmen1-500x750.jpeg"
              prd2="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/pocketmen2-500x750.jpeg"
              prd3="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/pocketmen3-500x750.jpeg"
              prd4="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/pocketmen4-500x750.jpeg"
            />
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
          <div className="product1-info product2-info">
            <div className="product1-review ">               
              <span><StarFilled /> </span> 
              1 review   
            </div> 
            <a href="/#" className="product1-name ">Sleeveless Ribbed Short Dress</a>
            <p className="product1-price "> <span>$19.99</span><strong>$14.99</strong></p>  
          </div>
        </li>
        <li className="product1-item product2-item">
          <div className="product1-img product2-img">
              <CustomProduct
              prd1="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/knotted1-500x750.jpeg"
              prd2="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/knotted2-500x750.jpeg"
              prd3="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/knotted3-500x750.jpeg"
              prd4="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/knotted4-500x750.jpeg"
            />         
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
          <div className="product1-info product2-info">
            <div className="product1-review">               
              <span><StarFilled /> </span> 
              1 review   
            </div> 
            <a href="/#" className="product1-name">Sleeveless Ribbed Short Dress</a>
            <p className="product1-price"> <span>$19.99</span><strong>$14.99</strong></p>  
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}
