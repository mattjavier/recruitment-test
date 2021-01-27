import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Time from '../Time';

// import styles from '../../styles/Leg.module.css';


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

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2.5)
  },
  logo: {
    height: theme.spacing(8),
    paddingRight: theme.spacing(5)
  },
  icon: {
    paddingRight: theme.spacing(5)
  },
  right: {
    marginRight: theme.spacing(2.5)
  }
}));

const Leg = props => {
  const classes = useStyles();

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
    <Grid
      container
      justify="space-between"
      alignItems="flex-start"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid
        container
        alignItems="center"
        justify="space-between"
      >
        {/* Airline Logo */}
        <img 
          src={`https://logos.skyscnr.com/images/airlines/favicon/${legState.leg.airline_id}.png`} 
          alt="Airline Logo"
          className={classes.logo}
        />
        
        {/* Departure */}
        <Time 
          info={{ 
            airport: legState.leg.departure_airport, 
            time: legState.leg.departure_time
          }}
        />

        {/* Flight Icon  */}
        <div className={classes.icon}>
          <ArrowForwardIcon color="primary" />
        </div>

        {/* Arrival */}
        <Time 
          info={{ 
            airport: legState.leg.arrival_airport, 
            time: legState.leg.arrival_time
          }}
        />
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="flex-end"
        direction="column" 
        className={classes.right}
      >
        {/* Flight Duration */}
        <Typography
          color="textSecondary" 
        >
          {`${hours(legState.leg.duration_mins)}h ${minutes(legState.leg.duration_mins)}`}
        </Typography>
        
        {/* Potential Stops */}
        {
          legState.leg.stops > 0 ? (
            <Typography
              color="error"
            >
              {legState.leg.stops} {
                legState.leg.stops > 1 ? ('Stops') : ('Stop')
              }
            </Typography>
          ) : (
            <Typography 
              color="success"
            >
              Direct
            </Typography>
          )
        }
      </Grid>
    </Grid>
  );
}

export default Leg;