import React from 'react';

import { useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import CardContent from './components/CardContent';

import StyledContainer from './style';

export default function TodaysForecast({ locationData, data, historicalData }) {

    const weather = useSelector(state => state.weatherData.data.data);

    const renderTodaysForecast = () => {

        const daySections = {
            start: new Date().setHours(0, 0, 0, 0),
            morning: new Date().setHours(10, 0, 0, 0),
            afternoon: new Date().setHours(12, 0, 0, 0),
            evening: new Date().setHours(17, 0, 0, 0),
            night: new Date().setHours(23, 0, 0, 0),
            end: new Date().setHours(24, 0, 0, 0),
        };

        const currentTime = new Date().getTime();

        function getHourlyIndex(hour, arr) {
            return arr.findIndex(e => e.dt === hour / 1000);
        }

        function getIcon(daySections) {
            return (getHourlyIndex(daySections, data.hourly) !== -1)
                ? data.hourly[getHourlyIndex(daySections, data.hourly)].weather[0].icon
                : historicalData.hourly[getHourlyIndex(daySections, historicalData.hourly)].weather[0].icon
        }

        function getPop(daySections, active) {
            return ((getHourlyIndex(daySections, data.hourly) !== -1) || active)
                ? active
                    ? `${data.hourly[0].pop * 100}%`
                    : `${Number(data.hourly[getHourlyIndex(daySections, data.hourly)].pop) * 100}%`
                : "--"
        }

        function sectionIsActive(start, end) {
            return (currentTime > start && currentTime < end);
        }

        const todaysForecastData = [
            {
                title: 'Morning',
                active: sectionIsActive(daySections.start, daySections.afternoon),
                temp: data.daily[0].temp.morn,
                icon: getIcon(daySections.morning),
                pop: getPop(daySections.morning, sectionIsActive(daySections.start, daySections.afternoon)),
                hist: (getHourlyIndex(daySections.morning, data.hourly) !== -1),
            },
            {
                title: 'Afternoon',
                active: sectionIsActive(daySections.afternoon, daySections.evening),
                temp: data.daily[0].temp.day,
                icon: getIcon(daySections.afternoon),
                pop: getPop(daySections.evening, sectionIsActive(daySections.afternoon, daySections.evening)),
                hist: (getHourlyIndex(daySections.afternoon, data.hourly) !== -1) || !(currentTime > daySections.start && currentTime < daySections.afternoon),
            },
            {
                title: 'Evening',
                active: sectionIsActive(daySections.evening, daySections.night),
                temp: data.daily[0].temp.eve,
                icon: getIcon(daySections.evening),
                pop: getPop(daySections.evening, sectionIsActive(daySections.evening, daySections.night)),
                hist: (getHourlyIndex(daySections.evening, data.hourly) !== -1) || !(currentTime > daySections.start && currentTime < daySections.afternoon),
            },
            {
                title: 'Overnight',
                active: (currentTime > daySections.night),
                temp: data.daily[0].temp.night,
                icon: getIcon(daySections.night),
                pop: getPop(daySections.night, (currentTime > daySections.night)),
                hist: (getHourlyIndex(daySections.night, data.hourly) !== -1),
            },
        ]

        return (

            <StyledContainer>
                {locationData[0] && <Typography className="location" variant="h5" >{`Today's Forecast for ${locationData[0].name}, ${locationData[0].country}`}</Typography>}
                <Grid container spacing={3}>
                    {data.hourly && todaysForecastData.map((data, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid item xs={3}>
                                    <CardContent title={data.title} active={data.active} temp={data.temp} icon={data.icon} pop={data.pop} historicalData={data.hist} />
                                </Grid>
                                {index < 3 && <Divider orientation="vertical" component="div" flexItem />}
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </StyledContainer>
        );
    }

    return (
        <div>{weather && renderTodaysForecast()}</div>
    );
}