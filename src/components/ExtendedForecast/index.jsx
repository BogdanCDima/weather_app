import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { Sunrise, Sunset, CloudRain, Wind } from 'react-feather';

import moment from 'moment';

import StyledContainer from './style';

export function ExtendedForecast({ forecastData, locationData }) {

    const [expanded, setExpanded] = React.useState(false);



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <StyledContainer>
            <div className="extended-forecast">
                {locationData && <Typography className="title" variant="h5" component="h1" >7 Day Weather <span className="location">- {locationData[0].name}, {locationData[0].country} </span></Typography>}
                {forecastData && (<div>
                    {forecastData.daily.map((day, index) => (
                        <Accordion expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)} key={day.dt}>

                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <div className="acc-summary">
                                    <div className="date">
                                        <Typography>
                                            {index === 0 ? "Today" : moment(day.dt * 1000).format("ddd DD")}
                                        </Typography>
                                    </div>
                                    {expanded !== `panel${index + 1}` && (
                                        <React.Fragment>

                                            <Typography className="temp"><span>{parseInt(day.temp.max)}&deg;</span>/{parseInt(day.temp.min)}&deg;</Typography>
                                            <div className="status">

                                                <img className="weather-icon" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].main} />
                                                <span>{day.weather[0].description}</span>
                                            </div>
                                            <div className="pop" align="right"><div className="pop-data" align="left"><CloudRain className="rain-icon" /><span>{day.pop * 100}%</span></div></div>
                                        </React.Fragment>
                                    )}
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>

                                <List className="list-row">
                                    <ListItem className="main-info">
                                        <div>
                                            <Typography className="temp-main"><span>{parseInt(day.temp.max)}&deg;</span>/{parseInt(day.temp.min)}&deg;</Typography>
                                            <span>{day.weather[0].description}</span>
                                        </div>
                                        <div className="condition-icon-main">
                                            <img className="weather-icon-main" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].main} />
                                        </div>
                                    </ListItem>
                                    <ListItem className="main-info pop-and-wind">
                                        <div className="pop">
                                            <div className="pop-data" align="left">
                                                <CloudRain className="rain-icon" />
                                                <span>{parseInt(day.pop * 100)}%</span>
                                            </div>
                                            <div className="pop-data" align="left">
                                                <Wind className="rain-icon" />
                                                <span>{parseInt(day.wind_speed)}Km/h</span>
                                            </div>
                                        </div>
                                    </ListItem>
                                </List>
                                <Paper className="secondary-info">
                                    <List className="list-row">
                                        <ListItem>
                                            <div className="condition-icon">
                                                <InvertColorsIcon />
                                            </div>
                                            <ListItemText primary="Humidity" secondary={`${parseInt(day.pop * 100)}%`} />
                                        </ListItem>
                                        <ListItem>
                                            <div className="condition-icon">
                                                <WbSunnyIcon />
                                            </div>
                                            <ListItemText primary="UV Index" secondary={`${parseInt(day.uvi)} of 10`} />
                                        </ListItem>
                                    </List>
                                    <Divider variant="middle" component="div" flexItem />
                                    <List className="list-row">
                                        <ListItem>
                                            <div className="condition-icon sunrise">
                                                <Sunrise />
                                            </div>
                                            <ListItemText primary="Sunrise" secondary={moment(day.sunrise * 1000).format('HH:MM a')} />
                                        </ListItem>
                                        <ListItem>
                                            <div className="condition-icon sunset">
                                                <Sunset />
                                            </div>
                                            <ListItemText primary="Sunset" secondary={moment(day.sunset * 1000).format('HH:MM a')} />
                                        </ListItem>
                                    </List>
                                </Paper>
                            </AccordionDetails>
                            <Divider component="div" flexItem />
                        </Accordion>
                    ))}

                </div>)}
            </div>
        </StyledContainer>
    )
}

export default ExtendedForecast;
