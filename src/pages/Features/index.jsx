import BannerBackground from "./banner-background";
import BannerCountdown from "./banner-countdown";
import BannerLogo from "./banner-logo";
import BannerSeason from "./banner-season";
import BannerSummer from "./banner-summer";
import Blog from "./blog";
import Categories from "./categories";
import Deal from "./deal";
import Discount from "./discount";
import FeaturedProduct from "./featured-product";
import LastDeal from "./last-deal";
import Product1 from "./product-01";

export default function Main(){
  const DayCount1 = 17 * 24 * 60 * 60 * 1000;
  const DayCount2 = 16 * 24 * 60 * 60 * 1000;
  const Now = new Date().getTime();

  const Dealine1 = Now + DayCount1;
  const Dealine2 = Now + DayCount2;
  return(
  <div className="page-home">
    <BannerBackground />
    <Categories />
    <FeaturedProduct />
    <Product1 />
    <BannerCountdown targetDate= {Dealine1}/>
    <BannerSeason />
    <FeaturedProduct />
    <Deal targetDate= {Dealine2}/>
    <FeaturedProduct />
    <BannerSummer />
    <LastDeal />
    <Discount targetDate= {Dealine2}/>
    <BannerLogo />
    <Blog />
  </div>
  )
}
