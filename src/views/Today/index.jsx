import React from 'react';

import { useSelector } from 'react-redux'
import CurrentWeather from '../../components/CurrentWeather'
import TodaysForecast from '../../components/TodaysForecast'

import StyledContainer from './style';

export default function Today() {

    const locationData = useSelector(state => state.location.data.data);
    const data = useSelector(state => state.weatherData.data.data);
    const historicalData = useSelector(state => state.historicalData.data.data);

    return (
        <StyledContainer>
            <CurrentWeather />
            {(data) && <TodaysForecast locationData={locationData} data={data} historicalData={historicalData} />}
        </StyledContainer>
    )
}
