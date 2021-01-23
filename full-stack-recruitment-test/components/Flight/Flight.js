import React from 'react';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// import Time from '../Time';

import styles from '../../styles/Flight.module.css';

const hours = mins => {
  return Math.floor(mins / 60).toString();
}

const minutes = mins => {
  if (mins % 60 === 0) {
    return '00';
  } else {
    return (mins % 60).toString();
  }
}

const Flight = props => {

  return (
    <div className={styles.flight}>
      <div className={styles.left}>
        {/* Airline Logo */}
        <img 
          src={`https://logos.skyscnr.com/images/airlines/favicon/${props.flight.airline_id}.png`} 
          alt="Airline Logo"
          className={styles.airlineLogo}
        />
        
        {/* Departure */}
        {/* <Time 
          info={{ 
            airport: props.flight.departure_airport, 
            time: props.flight.departure_time
          }}
        /> */}

        {/* Flight Icon  */}
        <div className={styles.flightIcon}>
          <ArrowForwardIcon />
        </div>

        {/* Arrival */}
        {/* <Time 
          info={{ 
            airport: props.flight.arrival_airport, 
            time: props.flight.arrival_time
          }}
        /> */}
      </div>
      <div className={styles.right}>
        {/* Flight Duration */}
        <p className={styles.durationHours}>
          {`${hours(props.flight.duration_mins)}h ${minutes(props.flight.duration_mins)}`}
        </p>
        
        {/* Potential Stops */}
        {
          props.flight.stops > 0 ? (
            <p className={styles.red}>
              {props.flight.stops} {
                props.flight.stops > 1 ? ('Stops') : ('Stop')
              }
            </p>
          ) : (
            <p className={styles.green}>
              Direct
            </p>
          )
        }
      </div>
    </div>
  );
}

export default Flight;