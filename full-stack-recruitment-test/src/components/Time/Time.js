import React from 'react';

import styles from '../../styles/Time.module.css';

const Time = props => {

  return (
    <div className={styles.time}>
      <p className={styles.flightTime}>
        {props.info.time.substr(props.info.time.length - 5)}
      </p>
      <p className={styles.airport}>
        {props.info.airport}
      </p>
    </div>
  )
};

export default Time;