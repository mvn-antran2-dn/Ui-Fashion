import { ArrowRightOutlined } from "@ant-design/icons";
import { IMAGES } from "../../../asset/images";


export default function BannerSeason () {
  return (
  <section className="section-banner-season">
    <div className="container">
      <ul className="banner-season-list flex justify-content-around">
        <li>
          <a className="banner-season-item flex" href="/#">
            <img src={IMAGES.banner2_1} alt="banner-season" />
            <div className="banner-season-content content-all">
              <div className="content-title-all season-content">
                <h4 className="subtitle-all subtitle-season">NEW SEASON</h4>
                <h3 className="title-all title-season">How well do you know street fashion?</h3>
                <p className="text-all">Don't miss the opportunity.</p>
                <a href="/#" className="btn-shopnow-all">SHOP NOW <ArrowRightOutlined /></a>
              </div>     
            </div>
          </a>
        </li>
        <li>
          <a className="banner-season-item flex" href="/#">
            <img src={IMAGES.banner2_2} alt="banner-season" />
            <div className="banner-season-content content-all">
              <div className="content-title-all season-content">
                <h4 className="subtitle-all subtitle-season">NEW SEASON</h4>
                <h3 className="title-all title-season">How has street style influenced fashion?</h3>
                <p className="text-all">Don't miss the opportunity.</p>
                <a href="/#" className="btn-shopnow-all">SHOP NOW <ArrowRightOutlined /></a>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a className="banner-season-item flex" href="/#">
            <img src={IMAGES.banner2_3} alt="banner-season" />
            <div className="banner-season-content content-all">
            <div className="content-title-all season-content">
                <h4 className="subtitle-all subtitle-season">NEW SEASON</h4>
                <h3 className="title-all title-season">How has street style influenced fashion?</h3>
                <p className="text-all">Don't miss the opportunity.</p>
                <a href="/#" className="btn-shopnow-all">SHOP NOW <ArrowRightOutlined /></a>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
  )
}
