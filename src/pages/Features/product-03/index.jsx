import Slider from "react-slick";
import {  FullscreenOutlined, HeartOutlined, RetweetOutlined, ShoppingOutlined, StarFilled } from "@ant-design/icons";
import CustomProduct from "../custom-product";

export default function Product3 () {
  const settings_product = {
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: true,
    speed: 500,
  };
  return (
    <section className="section-product1">
      <div className="container flex product1">
        <ul className="product1-list flex">
          <Slider className="product1-list flex" {...settings_product}>
          <li className="product1-item ">
            <div className="product1-img">
              <CustomProduct 
               prd1="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/pants1-500x750.jpeg"
               prd2="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/pants2-500x750.jpeg"
               prd3="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/pants3-500x750.jpeg"
               prd4="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/pants4-500x750.jpeg"
              />
              <div className="product1-img-badge">
                  <span className="product1-sale">-24%</span>
              </div>
              <div className="img-total-action flex justify-content-center">
                  <button className="btn-to-action btn-to-heart"><HeartOutlined /></button>
                  <button className="btn-to-action btn-to-fullscreen"><FullscreenOutlined /></button>
                  <button className="btn-to-action btn-to-retweet"><RetweetOutlined /></button>
                  <button className="btn-to-action btn-to-shopping"><ShoppingOutlined /></button>
              </div>
            </div>
            <div className="product1-info">
              <div className="product1-review">               
                <span><StarFilled /> </span> 
                2 review 
              </div> 
              <a href="/#" className="product1-name">Basic Colored Sweatpants With Elastic Hems</a>
              <p className="product1-price"> <span>$25.90</span><strong>$19.90</strong></p>  
            </div>
          </li>
          <li className="product1-item ">
            <div className="product1-img">
            <CustomProduct 
                 prd1="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic1-500x750.jpeg"
                 prd2="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic2-500x750.jpeg"
                 prd3="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic3-500x750.jpeg"
                 prd4="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/basic4-500x750.jpeg"
              />         
                <div className="img-total-action flex ">
                    <button className="btn-to-action btn-to-heart"><HeartOutlined /></button>
                    <button className="btn-to-action btn-to-fullscreen"><FullscreenOutlined /></button>
                    <button className="btn-to-action btn-to-retweet"><RetweetOutlined /></button>
                    <button className="btn-to-action btn-to-shopping"><ShoppingOutlined /></button>
                </div>
            </div>
            <div className="product1-info">
              <div className="product1-review">               
                <span><StarFilled /> </span> 
                1 review   
              </div> 
              <a href="/#" className="product1-name">Basic High-Neck Puff Jacket</a>
              <p className="product1-price"> <strong>$89.00</strong></p>  
            </div>
          </li>
          <li className="product1-item ">
            <div className="product1-img">
            <CustomProduct 
                prd1="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/leggings1-500x750.jpeg"
                prd2="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/leggings2-500x750.jpeg"
                prd3="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/leggings3-500x750.jpeg"
                prd4="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/leggings4-500x750.jpeg"
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
            <div className="product1-info">
              <div className="product1-review">               
                <span><StarFilled /> </span> 
                1 review   
              </div> 
              <a href="/#" className="product1-name">Basic Relax Fit Leggings</a>
              <p className="product1-price"> <span>$29.90</span><strong>$24.90</strong></p>  
            </div>
          </li>
          <li className="product1-item ">
            <div className="product1-img">
            <CustomProduct 
                 prd1="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/overshirt1-500x750.jpg"
                 prd2="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/overshirt2-500x750.jpg"
                 prd3="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/overshirt3-500x750.jpg"
                 prd4="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/overshirt4-500x750.jpg"
              />         
                <div className="product1-img-badge">
                    <span className="product1-sale">-14%</span>
                </div>
                <div className="img-total-action flex ">
                    <button className="btn-to-action btn-to-heart"><HeartOutlined /></button>
                    <button className="btn-to-action btn-to-fullscreen"><FullscreenOutlined /></button>
                    <button className="btn-to-action btn-to-retweet"><RetweetOutlined /></button>
                    <button className="btn-to-action btn-to-shopping"><ShoppingOutlined /></button>
                </div>
            </div>
            <div className="product1-info">
              <div className="product1-review">               
                <span><StarFilled /> </span> 
                1 review   
              </div> 
              <a href="/#" className="product1-name">Check Overshirt With Pocket Detail</a>
              <p className="product1-price"> <span>$129.00</span><strong>$112.00</strong></p>  
            </div>
          </li>
          <li className="product1-item ">
            <div className="product1-img">
            <CustomProduct 
                prd1="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/printedh1-500x750.jpg"
                prd2="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/printedh2-500x750.jpg"
                prd3="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/printedh3-500x750.jpg"
                prd4="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/printedh4-500x750.jpg"
              />         
                <div className="img-total-action flex ">
                    <button className="btn-to-action btn-to-heart"><HeartOutlined /></button>
                    <button className="btn-to-action btn-to-fullscreen"><FullscreenOutlined /></button>
                    <button className="btn-to-action btn-to-retweet"><RetweetOutlined /></button>
                    <button className="btn-to-action btn-to-shopping"><ShoppingOutlined /></button>
                </div>
            </div>
            <div className="product1-info">
              <div className="product1-review">               
                <span><StarFilled /> </span> 
                1 review   
              </div> 
              <a href="/#" className="product1-name">Rose Printed Hoodie</a>
              <p className="product1-price"> <strong>$110.99</strong></p>  
            </div>
          </li>
          <li className="product1-item ">
            <div className="product1-img">
            <CustomProduct 
                prd1="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/cup1-500x750.jpeg"
                prd2="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/cup2-500x750.jpeg"
                prd3="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/cup3-500x750.jpeg"
                prd4="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/cup4-500x750.jpeg"
              />         
                <div className="product1-img-badge">
                    <span className="product1-sale">-21%</span>
                </div>
                <div className="img-total-action flex ">
                    <button className="btn-to-action btn-to-heart"><HeartOutlined /></button>
                    <button className="btn-to-action btn-to-fullscreen"><FullscreenOutlined /></button>
                    <button className="btn-to-action btn-to-retweet"><RetweetOutlined /></button>
                    <button className="btn-to-action btn-to-shopping"><ShoppingOutlined /></button>
                </div>
            </div>
            <div className="product1-info">
              <div className="product1-review">               
                <span><StarFilled /> </span> 
                1 review   
              </div> 
              <a href="/#" className="product1-name">World Wide Cup Print T-Shirt</a>
              <p className="product1-price"> <span>$29.99</span><strong>$23.99</strong></p>  
            </div>
          </li>
          <li className="product1-item ">
            <div className="product1-img">
            <CustomProduct 
                prd1="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/dressblack1-1-500x750.jpeg"
                prd2="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/dressblack2-500x750.jpeg"
                prd3="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/dressblack3-500x750.jpeg"
                prd4="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/dressblack4-500x750.jpeg"
              />         
                <div className="product1-img-badge">
                    <span className="product1-sale">-26%</span>
                </div>
                <div className="img-total-action flex ">
                    <button className="btn-to-action btn-to-heart"><HeartOutlined /></button>
                    <button className="btn-to-action btn-to-fullscreen"><FullscreenOutlined /></button>
                    <button className="btn-to-action btn-to-retweet"><RetweetOutlined /></button>
                    <button className="btn-to-action btn-to-shopping"><ShoppingOutlined /></button>
                </div>
            </div>
            <div className="product1-info">
              <div className="product1-review">               
                <span><StarFilled /> </span> 
                1 review   
              </div> 
              <a href="/#" className="product1-name">Sleeveless Ribbed Short Dress Black</a>
              <p className="product1-price"> <span>$19.99</span><strong>$14.99</strong></p>  
            </div>
          </li>
          <li className="product1-item ">
            <div className="product1-img">
            <CustomProduct 
                 prd1="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/slogan1-500x750.jpg"
                 prd2="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/slogan2-500x750.jpg"
                 prd3="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/slogan3-500x750.jpg"
                 prd4="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/04/slogan4-500x750.jpg"
              />         
                <div className="product1-img-badge">
                    <span className="product1-sale">-37%</span>
                </div>
                <div className="img-total-action flex ">
                    <button className="btn-to-action btn-to-heart"><HeartOutlined /></button>
                    <button className="btn-to-action btn-to-fullscreen"><FullscreenOutlined /></button>
                    <button className="btn-to-action btn-to-retweet"><RetweetOutlined /></button>
                    <button className="btn-to-action btn-to-shopping"><ShoppingOutlined /></button>
                </div>
            </div>
            <div className="product1-info">
              <div className="product1-review">               
                <span><StarFilled /> </span> 
                1 review   
              </div> 
              <a href="/#" className="product1-name">Slogan Hoodie With Label Detail</a>
              <p className="product1-price"> <span>$18.99</span><strong>$11.99</strong></p>  
            </div>
          </li>
          </Slider>   
        </ul>
      </div>
    </section>
  )
}
