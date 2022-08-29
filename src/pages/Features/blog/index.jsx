import { IMAGES } from "../../../asset/images";

export default function Blog(){
  return (
  <section className="section-blog">
    <div className="container">
      <div className="blog-title">
        <h2>Our Latest News</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices gravida. Risus commodo viverra vel facilisis.</p>
      </div>
      <ul className="blog-list flex justify-content-between">
        <li className="li-blog-item"> 
          <div className="blog-item left">
            <a href="/#" className="blog-item-img">
              <img src={IMAGES.blog1} alt="blog 1" />
            </a>
            <div className="blog-item-content ">
              <h3 className="blog-subtitle"> <a href="/#">COLLECTION <span>25 Apr 2022</span></a> </h3>
              <h2 className="blog-title"><a href="/#">The Best Products That Shape Fashion</a>  </h2>
              <p className="blog-text">Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros</p>
            </div>
          </div>
        </li>
        <li className="li-blog-item"> 
          <div className="blog-item mid">
            <a href="/#" className="blog-item-img">
              <img src={IMAGES.blog2} alt="blog 2" />
            </a>
            <div className="blog-item-content ">
              <h3 className="blog-subtitle"> <a href="/#">FASHION <span>25 Apr 2022</span></a> </h3>
              <h2 className="blog-title"><a href="/#">New Finds From Tuckernuck</a>  </h2>
              <p className="blog-text">Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros</p>
            </div>
          </div>
        </li>
        <li className="li-blog-item">
          <div className="blog-item right">
            <a href="/#" className="blog-item-img">
              <img src={IMAGES.blog3} alt="blog 3" />
            </a>
            <div className="blog-item-content ">
              <h3 className="blog-subtitle"> <a href="/#">CLOTHING <span>25 Apr 2022</span></a> </h3>
              <h2 className="blog-title"><a href="/#">Sunset Sets From Saks</a>  </h2>
              <p className="blog-text">Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}
