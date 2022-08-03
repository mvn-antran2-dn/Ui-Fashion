import Slider from "react-slick";
import { IMAGES } from "../../../asset/images";

export default function Categories () {
  const settings_categories = {
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    arrows: false,
    speed: 500,
  };
  const categories = [
    {
      src: IMAGES.categories1,
      text: 'Men',
    },
    {
      src: IMAGES.categories2,
      text: 'Women',
    },
    {
      src: IMAGES.categories3,
      text: 'Bags',
    },
    {
      src: IMAGES.categories4,
      text: 'Belts',
    },
    {
      src: IMAGES.categories5,
      text: 'Shoes',
    },
    {
      src: IMAGES.categories6,
      text: 'Outerwear',
    },
    {

      src: IMAGES.categories7,
      text: 'Cargo Trousers',
    },
    {
      src: IMAGES.categories8,
      text: 'Accessories',
    },
  ];
  return (
  <section className="section-categories">
    <div className="container">
      <div className="categories-title flex">
        <h4>Best for your categories</h4>
        <p> <strong>23 categories </strong>belonging to a total of <strong>34,592 products</strong></p>
      </div>
      <div className="categories-img">
        <Slider className="img-slider categories-list flex" {...settings_categories}>
          {categories.map((categories) => (
            <div key={Math.random()} className="categories-item ">
              <div className="categories-img">
                <img className="categories-item-img"  src={categories.src} alt="categories" />
              </div>
              <div className="categories-title">
              <h3>{categories.text}</h3>
              </div>       
            </div>            
          ))}
        </Slider>
      </div>
    </div>
  </section>
  )
}
