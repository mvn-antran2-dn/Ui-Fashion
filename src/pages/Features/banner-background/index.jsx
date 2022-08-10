import { ArrowRightOutlined } from "@ant-design/icons";
import { IMAGES } from "../../../asset/images";

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
          <a href="/#">Shop Now <ArrowRightOutlined /></a>
        </div>
      </div>
    </div>
  </section>
  )
}
