import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMAGES } from "../../../asset/images";


export default function BannerSeason () {
  return (
  <section className="section-banner-season">
    <div className="container">
      <ul className="banner-season-list flex justify-content-around">
        <li>
          <div className="banner-season-item flex" >
            <img src={IMAGES.banner2_1} alt="banner-season" />
            <div className="banner-season-content content-all one">
              <div className="content-title-all season-content">
                <h4 className="subtitle-all subtitle-season">NEW SEASON</h4>
                <h3 className="title-all title-season">How well do you know street fashion?</h3>
                <p className="text-all text-season">Don't miss the opportunity.</p>
                <a href="/#" className="btn-shopnow-all btn-shopnow-season">Shop Now <span><FontAwesomeIcon icon={faArrowRightLong}/></span></a>
              </div>     
            </div>
          </div>
        </li>
        <li>
          <div className="banner-season-item flex">
            <img src={IMAGES.banner2_2} alt="banner-season" />
            <div className="banner-season-content content-all two">
              <div className="content-title-all season-content two">
                <h4 className="subtitle-all subtitle-season">NEW SEASON</h4>
                <h3 className="title-all title-season">How has street style influenced fashion?</h3>
                <p className="text-all text-season">Don't miss the opportunity.</p>
                <a href="/#" className="btn-shopnow-all btn-shopnow-season">Shop Now <span><FontAwesomeIcon icon={faArrowRightLong}/></span></a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="banner-season-item flex">
            <img src={IMAGES.banner2_3} alt="banner-season" />
            <div className="banner-season-content content-all tree">
              <div className="content-title-all season-content tree">
                <h4 className="subtitle-all subtitle-season">NEW SEASON</h4>
                <h3 className="title-all title-season">How well do you know street fashion?</h3>
                <p className="text-all text-season">Don't miss the opportunity.</p>
                <a href="/#" className="btn-shopnow-all btn-shopnow-season">Shop Now <span><FontAwesomeIcon icon={faArrowRightLong}/></span></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}
