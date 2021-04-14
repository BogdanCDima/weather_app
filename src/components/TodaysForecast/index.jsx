import React from 'react';

import { useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import CardContent from './components/CardContent';

import StyledContainer from './style';

export default function TodaysForecast({ locationData, data, historicalData }) {

    const current = useSelector(state => state.currentWeather.currentWeather.data);

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

        function sectionIsActive(start, end) {
            return (currentTime > start && currentTime < end);
        }

        const todaysForecastData = [
            {
                title: 'Morning',
                active: sectionIsActive(daySections.start, daySections.afternoon),
                temp: data.daily[0].temp.morn,
                icon: (getHourlyIndex(daySections.morning, data.hourly) !== -1)
                    ? data.hourly[getHourlyIndex(daySections.morning, data.hourly)].weather[0].icon
                    : historicalData.hourly[getHourlyIndex(daySections.morning, historicalData.hourly)].weather[0].icon,
                pop: (getHourlyIndex(daySections.morning, data.hourly) !== -1) || sectionIsActive(daySections.start, daySections.afternoon)
                    ? sectionIsActive(daySections.start, daySections.afternoon) ? data.hourly[0].pop * 100 : `${Number(data.hourly[getHourlyIndex(daySections.morning, data.hourly)].pop) * 100}%`
                    : "--",
                hist: (getHourlyIndex(daySections.morning, data.hourly) !== -1),
            },
            {
                title: 'Afternoon',
                active: sectionIsActive(daySections.afternoon, daySections.evening),
                temp: data.daily[0].temp.day,
                icon: (getHourlyIndex(daySections.afternoon, data.hourly) !== -1)
                    ? data.hourly[getHourlyIndex(daySections.afternoon, data.hourly)].weather[0].icon
                    : historicalData.hourly[getHourlyIndex(daySections.afternoon, historicalData.hourly)].weather[0].icon,
                pop: (getHourlyIndex(daySections.afternoon, data.hourly) !== -1) || sectionIsActive(daySections.afternoon, daySections.evening)
                    ? sectionIsActive(daySections.afternoon, daySections.evening) ? data.hourly[0].pop * 100 : `${Number(data.hourly[getHourlyIndex(daySections.afternoon, data.hourly)].pop) * 100}%`
                    : "--",
                hist: (getHourlyIndex(daySections.afternoon, data.hourly) !== -1) || !(currentTime > daySections.start && currentTime < daySections.afternoon),
            },
            {
                title: 'Evening',
                active: sectionIsActive(daySections.evening, daySections.night),
                temp: data.daily[0].temp.eve,
                icon: (getHourlyIndex(daySections.evening, data.hourly) !== -1)
                    ? data.hourly[getHourlyIndex(daySections.evening, data.hourly)].weather[0].icon
                    : historicalData.hourly[getHourlyIndex(daySections.evening, historicalData.hourly)].weather[0].icon,
                pop: (getHourlyIndex(daySections.evening, data.hourly) !== -1) || sectionIsActive(daySections.evening, daySections.night)
                    ? sectionIsActive(daySections.evening, daySections.night) ? data.hourly[0].pop * 100 : `${Number(data.hourly[getHourlyIndex(daySections.evening, data.hourly)].pop) * 100}%`
                    : "--",
                hist: (getHourlyIndex(daySections.evening, data.hourly) !== -1),
            },
            {
                title: 'Overnight',
                active: (currentTime > daySections.night),
                temp: data.daily[0].temp.night,
                icon: (getHourlyIndex(daySections.night, data.hourly) !== -1)
                    ? data.hourly[getHourlyIndex(daySections.night, data.hourly)].weather[0].icon
                    : historicalData.hourly[getHourlyIndex(daySections.night, historicalData.hourly)].weather[0].icon,
                pop: (getHourlyIndex(daySections.night, data.hourly) !== -1) || (currentTime > daySections.night)
                    ? (currentTime > daySections.night) ? data.hourly[0].pop * 100 : `${Number(data.hourly[getHourlyIndex(daySections.night, data.hourly)].pop) * 100}%`
                    : "--",
                hist: (getHourlyIndex(daySections.night, data.hourly) !== -1),
            },
        ]

        return (

            <StyledContainer>
                <Typography className="location" variant="h5" >{`Today's Forecast for ${locationData[0].name}, ${locationData[0].country}`}</Typography>
                <Grid container spacing={3}>
                    {todaysForecastData.map((data, index) => {
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
        <div>{current && renderTodaysForecast()}</div>
    );
}