import React from 'react';

import { useSelector } from 'react-redux'
import moment from 'moment';

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import StyledContainer from './style';

export default function CurrentWeather() {

    const current = useSelector(state => state.currentWeather.currentWeather.data)
    const loading = useSelector(state => state.currentWeather.loading)

    const renderCurrentWeather = () => {
        return (
            <div className="main-info-wrapper">
                <div className="main-info">
                    <Typography className="location" variant="h5" component="h1" >{current.name}, {current.sys.country} Weather</Typography>

                    <Typography className="current-temp" variant="h1" component="p" >{Math.round(current.main.temp)}&deg;</Typography>
                    <Typography className="weather-description" variant="h4" >{current.weather[0].description}</Typography>
                    <Typography variant="body1">Humidity: {current.main.humidity}%</Typography>
                    <Typography variant="body1">Wind speed: {current.wind.speed}km/h</Typography>
                    <Typography variant="body1">Sunset: {moment(current.sys.sunset).format('LT')}</Typography>
                    <Typography variant="body1">Sunrise: {moment(current.sys.sunrise).format('LT')}</Typography>
                </div>
                <div className="side-info">
                    <div className="weather-icon-wrapper"><img className="weather-icon" src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt={current.weather[0].main} /></div>
                    <Typography className="min-max-temp" variant="h4" >{Math.round(current.main.temp_max)}&deg; / {Math.round(current.main.temp_min)}&deg;</Typography>
                </div>
            </div>
        )
    }

    return (
        <StyledContainer>
            {loading && <CircularProgress />}
            {current && renderCurrentWeather()}
        </StyledContainer>
    );
}