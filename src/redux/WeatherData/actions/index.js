import {
    getWeatherDataLoading,
    getWeatherDataSuccess,
    getWeatherDataError
} from './creators';

import axios from 'axios';

export const getWeatherData = (lat, lon, unit) => (dispatch) => {
    dispatch(getWeatherDataLoading());
    return axios({
        "method": "GET",
        "url": `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=fb441225d95c25cad088c4e878525ebe&units=${unit}`,
    })
        .then((response) => {
            dispatch(getWeatherDataSuccess(response));
        })
        .catch(() => {
            dispatch(getWeatherDataError());
        })
}
