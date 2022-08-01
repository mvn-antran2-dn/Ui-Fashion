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
  <section className="section-banner-countdown">
    <div className="container">
      <div className="banner-countdown flex">
        <p>10% discount on your dream clothes:</p>
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
        <span className="bannercountdown-text">Vivamus finibus, est condimentum feugiat aliquet, felis sem euismod risus</span>
      </div>
    </div>
  </section>
  );
};

const BannerCountdown = ({ targetDate }) => {
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

export default BannerCountdown;
