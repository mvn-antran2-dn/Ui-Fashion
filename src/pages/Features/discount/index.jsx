import { FullscreenOutlined, HeartOutlined, RetweetOutlined, StarFilled  } from "@ant-design/icons";
import { IMAGES } from "../../../asset/images";
import DateTimeDisplay from '../countdown/DateTimeDisplay';
import { useCountdown } from '../../../hooks/useCountDown';

const ExpiredNotice = () => {
  return (
    <section className="section-banner-countdown">
    <div className="container">
      <div className="banner-countdown">
      <h4>The promotion has ended by appointment with the customer on another date. Thank you for your interest.</h4>
      </div>
    </div>
  </section>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <section className="section-discount">
    <div className="container discount">
      <ul className="discount-list flex">
        <li className="discount-item flex">
          <div className="discount-img">
            <a href="/#" className="discount-img-default">
                <img src={IMAGES.deal2_1} alt="discount-1" />
            </a>
            <div className="discount-img-badge">
                <span className="discount-sale">-26%</span>
            </div>
            <div className="img-total-action flex justify-content-center">
                <button className="btn-to-action discount-btn btn-to-heart"><HeartOutlined /></button>
                <button className="btn-to-action discount-btn btn-to-fullscreen"><FullscreenOutlined /></button>
                <button className="btn-to-action discount-btn btn-to-retweet"><RetweetOutlined /></button>
            </div>
          </div>
          <div className="discount-info">
              <a href="/#" className="discount-name">Short Nylon-Effect Puffer Jacket</a>
              <p className="discount-price"><strong className="discount-price-strong">$29.90 - </strong><strong className="discount-price-strong">$39.90</strong></p>
              <div className="discount-review">
                <span><StarFilled  />  <StarFilled  />  <StarFilled  />  <StarFilled  />  <StarFilled  /></span> 
                2 reviews
              </div>
              <p className="discount-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="countdown-title">Offer end in: </p>
              <div className="countdown-banner flex" >
                <div className="count-item">
                  <DateTimeDisplay value={days}  isDanger={false} />
                </div>
                <span>:</span>
                <div className="count-item">
                  <DateTimeDisplay value={hours} isDanger={false} />
                </div>
                <span>:</span>
                <div className="count-item">
                  <DateTimeDisplay value={minutes} isDanger={false} />
                </div>
                <span>:</span>
                <div className="count-item">
                  <DateTimeDisplay value={seconds} isDanger={false} />
                </div>
              </div>
              <div className="discount-amount-sold flex">
                <p>Available: 32 - </p>
                <p> Sold: <strong>26</strong></p>
              </div>     
          </div>
        </li>
        <li className="discount-item flex">
          <div className="discount-img">
              <a href="/#" className="discount-img-default">
                  <img src={IMAGES.deal2_2} alt="discount-2" />
              </a>
              <div className="discount-img-badge">
                  <span className="discount-sale">-18%</span>
              </div>
              <div className="img-total-action flex justify-content-center">
                  <button className="btn-to-action discount-btn btn-to-heart"><HeartOutlined /></button>
                  <button className="btn-to-action discount-btn btn-to-fullscreen"><FullscreenOutlined /></button>
                  <button className="btn-to-action discount-btn btn-to-retweet"><RetweetOutlined /></button>
              </div>
          </div>
          <div className="discount-info">
              <a href="/#" className="discount-name">Blue Starter Logo T-shirt</a>
              <p className="discount-price"><span>$22.70</span> <strong>$18.70</strong></p>
              <div className="discount-review">
                <span><StarFilled  />  <StarFilled  />  <StarFilled  />  <StarFilled  />  <StarFilled  /></span> 
                1 review
              </div>
              <p className="discount-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="countdown-title">Offer end in: </p>
              <div className="countdown-banner flex" >
                <div className="count-item">
                  <DateTimeDisplay value={days}  isDanger={false} />
                </div>
                <span>:</span>
                <div className="count-item">
                  <DateTimeDisplay value={hours} isDanger={false} />
                </div>
                <span>:</span>
                <div className="count-item">
                  <DateTimeDisplay value={minutes} isDanger={false} />
                </div>
                <span>:</span>
                <div className="count-item">
                  <DateTimeDisplay value={seconds} isDanger={false} />
                </div>
              </div>
              <div className="discount-amount-sold flex">
                <p>Available: 25 - Sold: <strong>20</strong></p>
            </div>    
          </div>
        </li>
      </ul>
    </div>
  </section>
  );
};
const Discount = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default Discount;
