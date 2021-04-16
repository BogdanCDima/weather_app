import React from 'react';

import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';

import ExtendedForecast from '../../components/ExtendedForecast'

export default function Extended() {

    const loading = useSelector(state => state.weatherData.loading);
    const forecastData = useSelector(state => state.weatherData.data.data);
    const locationData = useSelector(state => state.location.data.data);
    return (
        loading ? <CircularProgress className="circular-progress" /> : <ExtendedForecast forecastData={forecastData} locationData={locationData} />
    )
}