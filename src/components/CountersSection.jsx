import { useEffect } from 'react';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const Counter = ({ iconClass, startValue, dataTo, label }) => {
  useEffect(() => {
    const counterElement = document.querySelector(`.counter-${label.split(' ').join('-')}`);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const counterOptions = {
            duration: 2.0, // seconds
            decimalPlaces: 0,
          };
          const counter = new CountUp(counterElement, dataTo, counterOptions);
          counter.start();
          observer.unobserve(counterElement);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(counterElement);

    return () => {
      observer.disconnect();
    };
  }, [dataTo, label]);

  return (
    <div className={`col-sm-2 col-xs-6`}>
      <div className="counter">
        <div className="rectangle medium-rectangle">
          <i className={`fa ${iconClass}`} aria-hidden="true"></i>
          <span className={`counter-start counter-${label.split(' ').join('-')}`} data-to={startValue} data-speed="2000"></span>
        </div>
        <p>{label}</p>
      </div>
    </div>
  );
};

Counter.propTypes = {
    iconClass: PropTypes.string.isRequired,
    startValue: PropTypes.number.isRequired,
    dataTo: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
};

const CountersSection = () => {
  return (
    <section className="site-section section-counters text-center">
      <div className="container">
        <div className="row">
          <Counter iconClass="fa-rocket" startValue={0} dataTo={167} label="Projects Launched" />
          <Counter iconClass="fa-trophy" startValue={0} dataTo={25} label="Awards won" />
          <Counter iconClass="fa-paper-plane" startValue={0} dataTo={98} label="Proposals Sent" />
          <Counter iconClass="fa-clock-o" startValue={0} dataTo={945} label="Hours of work" />
          <Counter iconClass="fa-coffee" startValue={0} dataTo={256} label="Cups of coffee" />
        </div>
      </div>
    </section>
  );
};

export default CountersSection;
