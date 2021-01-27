import React from 'react';

import Leg from '../Leg';

import styles from '../../styles/Itinerary.module.css';

const formatString = numStr => {
  let num = parseFloat(numStr).toFixed(1);
  return num.toString();
}

const Itinerary = props => {

  return (
    <div className={styles.itinerary}>
      <div className={styles.top}>
        {/* Leg 1 */}
        <Leg 
          leg={props.itinerary.legs[0]}
        />

        {/* Leg 2 */}
        <Leg
          leg={props.itinerary.legs[1]}
        />
      </div>
      <div className={styles.bottom}>

        {/* Flight Price */}
        <p className={styles.price}>
          {props.itinerary.price}
        </p>

        {/* Flight Agent and Rating */}
        <p className={styles.agent}>
          {props.itinerary.agent}
          <span className={styles.agentRating}>
            &nbsp;({formatString(props.itinerary.agent_rating)})
          </span>
        </p>
      </div>
    </div>
  );
}

export default Itinerary;