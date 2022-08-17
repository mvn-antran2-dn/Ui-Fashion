import { IMAGES } from "../../../asset/images";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BannerBackground () {
  return (
  <section className="section-bannerbg">
    <div className="bannerbg-content flex">
      <img src={IMAGES.bg1} alt="background" />
      <div className="bannerbg-content-text">
        <div className="content-bg">
          <h4>SUMMER COLLECTION</h4>
          <h2>Risus commodo viverra maecenas accumsan.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore magna aliqua.</p>
          <a href="/#" className="btn-shopnow-all">Shop Now <span><FontAwesomeIcon icon={faArrowRightLong}/></span></a>
        </div>
      </div>
    </div>
  </section>
  )
}
