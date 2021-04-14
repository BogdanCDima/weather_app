import React from 'react';

import { useSelector } from 'react-redux'
import moment from 'moment';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import StyledContainer from './style';

export default function CurrentWeather() {

    const loading = useSelector(state => state.currentWeather.loading);
    const forecastData = useSelector(state => state.weatherData.data.data);
    const locationData = useSelector(state => state.location.data.data);

    const renderCurrentWeather = () => {
        return (
            <div className="main-info-wrapper">
                <div className="main-info">
                    {locationData && <Typography className="location" variant="h5" component="h1" >{locationData[0].name}, {locationData[0].country} Weather</Typography>}

                    {forecastData && (
                        <React.Fragment>
                            <Typography className="current-temp" variant="h1" component="p" >{Math.round(forecastData.current.temp)}&deg;</Typography>
                            <Typography className="weather-description" variant="h4" >{forecastData.current.weather[0].description}</Typography>
                            <Typography variant="body1">Humidity: {forecastData.current.humidity}%</Typography>
                            <Typography variant="body1">Wind speed: {forecastData.current.wind_speed}km/h</Typography>
                            <Typography variant="body1">Sunset: {moment(forecastData.current.sunset * 1000).format('LT')}</Typography>
                            <Typography variant="body1">Sunrise: {moment(forecastData.current.sunrise * 1000).format('LT')}</Typography>
                        </React.Fragment>
                    )}
                </div>
                <div className="side-info">
                    <div className="weather-icon-wrapper"><img className="weather-icon" src={`http://openweathermap.org/img/wn/${forecastData.current.weather[0].icon}@2x.png`} alt={forecastData.current.weather[0].description} /></div>
                    <Typography className="min-max-temp" variant="h4" >{Math.round(forecastData.daily[0].temp.min)}&deg; / {Math.round(forecastData.daily[0].temp.max)}&deg;</Typography>
                </div>
            </div>
        )
    };

    return (
        <StyledContainer>
            {loading && <CircularProgress />}
            {forecastData && renderCurrentWeather()}
        </StyledContainer>
    );
}