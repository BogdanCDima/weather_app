import React from 'react';

import { useSelector } from 'react-redux'
import CurrentWeather from '../../components/CurrentWeather'
import TodaysForecast from '../../components/TodaysForecast'
import CircularProgress from '@material-ui/core/CircularProgress';

import StyledContainer from './style';

export default function Today() {

    const locationData = useSelector(state => state.location.data.data);

    const data = useSelector(state => state.weatherData);
    const historicalData = useSelector(state => state.historicalData);

    return (
        <StyledContainer>
            {(data.loading && historicalData.loading)
                ? <CircularProgress className="circular-progress" />
                : (
                    <React.Fragment>
                        <CurrentWeather />
                        <TodaysForecast locationData={locationData} data={data.data.data} historicalData={historicalData.data.data} />
                    </React.Fragment>
                )}
        </StyledContainer>
    )
}
