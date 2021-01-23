import React, { useState, useEffect } from 'react';

import Itinerary from '../Itinerary';

import styles from '../../styles/Flights.module.css';

const Flights = () => {
  const [flightsState, setFlightsState] = useState({
    itineraries: []
  });
  
  useEffect(() => {
    fetch('./flights.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(({ itineraries })=> {
        setFlightsState({ ...flightsState, itineraries });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      {
        flightsState.itineraries.map(itinerary => {
          return (
            <Itinerary 
              key={itinerary.id}
              itinerary={itinerary}
            />
          );
        })
      }
    </div>
  );
}

export default Flights;