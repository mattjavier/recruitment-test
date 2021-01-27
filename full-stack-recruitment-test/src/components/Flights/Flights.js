import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Itinerary from '../Itinerary';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    width: '100%'
  }
}));

const Flights = () => {

  const classes = useStyles();

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
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center" 
      className={classes.container}
    >
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
    </Grid>
  );
}

export default Flights;