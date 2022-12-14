import { IMAGES } from "../../../asset/images";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BannerSummer(){
  return (
  <section className="section-banner-summer">
    <div className="container ">
      <div className="banner-summer flex">
        <div className="banner-summer-img">
          <div className="summer-img">
            <img src={IMAGES.banner4} alt="banner 4" />
            <div className="summer-img-text content-all">
              <div className="content-title-all">
                <h4 className="summer-text-subtitle subtitle-all">SUMMER COLLECTION</h4>
                <h3 className="summer-text-title title-all">Show your best sweatshirt of your life </h3>
                <p className="text-all">Don't miss the opportunity</p>
                <a href="/#" className="summer-btn btn-shopnow-all">Shop Collection <span><FontAwesomeIcon icon={faArrowRightLong}/></span></a>
              </div>    
            </div>
          </div>
        </div>
        <div className="season-sale">
          <div className="sale-img">
            <img src={IMAGES.sale} alt="sale 4" />
            <div className="sale-img-text content-all">
              <div className="content-title-all">
                <h4 className="sale-text-subtitle subtitle-all">NEW SEASON SALE</h4>
                <h3 className=" sale-text-title title-all">Up to 70% Off </h3>
                <p className="text-all sale-text-all">Don't miss the opportunity</p>
                <a href="/#" className="sale-btn btn-shopnow-all">Shop Collection <span><FontAwesomeIcon icon={faArrowRightLong}/></span></a>
              </div>        
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
