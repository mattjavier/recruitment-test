import React, { useState, useEffect } from 'react';

// import Flight from '../Flight';

import styles from '../../styles/Leg.module.css';

const Leg = props => {
  const [legState, setLegState] = useState({
    leg: {
      id: '',
      departure_airport: '',
      arrival_airport: '',
      departure_time: '',
      arrival_time: '',
      stops: '',
      airline_name: '',
      airline_id: '',
      duration_mins: ''
    }
  });

  useEffect(() => {
    fetch('./flights.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(({ legs }) => {
        setLegState({ 
          ...legState, 
          leg: legs.find(item => item.id === props.leg)
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    // <Flight
    //   flight={legState.leg}
    //   className={getClassName('Leg')} 
    // />
    <>
    </>
  );
}

export default Leg;