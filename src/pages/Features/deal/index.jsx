import DateTimeDisplay from '../countdown/DateTimeDisplay';
import { useCountdown } from '../../../hooks/useCountDown';

const ExpiredNotice = () => {
  return (
    <section className="section-deal">
    <div className="container-elementor ">
      <div className="deal-total flex">
        <div className="deal-content content-all flex">
          <div className="content-title-all deal-content-small">
            <h4 className="deal-subtitle subtitle-all">DEAL OF THE WEEK</h4>
            <h3 className="deal-title title-all">Roland Grand White short checkered T-shirt</h3>
            <p className="deal-text text-all">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
          <div className="countdown flex" data-date="2022-08-15" data-text="Expired">
            <h4>The promotion has ended by appointment with the customer on another date. Thank you for your interest.</h4>
          </div>
          <a href="/#" className="btn-shopnow">Shop Now</a>
          <div className="deal-text">
            <p>Limited time offer. The deal will expires on <span>July 15, 2022</span> <strong>HURRY UP!</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
  <section className="section-deal">
    <div className="container-elementor ">
      <div className="deal-total flex">
        <div className="deal-content content-all flex">
          <div className="content-title-all deal-content-small">
            <h4 className="deal-subtitle subtitle-all">DEAL OF THE WEEK</h4>
            <h3 className="deal-title title-all">Roland Grand White short checkered T-shirt</h3>
            <p className="deal-text text-all">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>
          <div className="countdown-total flex"  >
            <div className="count-item">
              <DateTimeDisplay value={days}  isDanger={days <= 365} />
              <div className="count-label">d</div>
            </div>
            <span>:</span>
            <div className="count-item">
              <DateTimeDisplay value={hours} isDanger={false} />
              <div className="count-label">h</div>
            </div>
            <span>:</span>
            <div className="count-item">
              <DateTimeDisplay value={minutes} isDanger={false} />
              <div className="count-label">m</div>
            </div>
            <span>:</span>
            <div className="count-item">
              <DateTimeDisplay value={seconds} isDanger={false} />
              <div className="count-label">s</div>
            </div>
          </div>
          <a href="/#" className="btn-shopnow">Shop Now</a>
          <div className="deal-text">
            <p>Limited time offer. The deal will expires on <span>July 15, 2022</span> <strong>HURRY UP!</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

const Deal = ({ targetDate }) => {
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

export default Deal;
