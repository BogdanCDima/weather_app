import React from 'react';

import { useSelector } from 'react-redux'

import ExtendedForecast from '../../components/ExtendedForecast'

export default function Extended() {

    const forecastData = useSelector(state => state.weatherData.data.data);
    const locationData = useSelector(state => state.location.data.data);
    return (
        <ExtendedForecast forecastData={forecastData} locationData={locationData} />
    )
}