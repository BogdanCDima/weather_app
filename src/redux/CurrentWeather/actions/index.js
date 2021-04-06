import {
    getCurrentWeatherLoading,
    getCurrentWeatherSuccess,
    getCurrentWeatherError
} from './creators';

import axios from 'axios';

export const getCurrentWeather = (location, unit) => (dispatch) => {
    dispatch(getCurrentWeatherLoading());

    return axios({
        "method": "GET",
        "url": `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fb441225d95c25cad088c4e878525ebe&units=${unit}`,
    })
        .then((response) => {
            console.log(response);
            dispatch(getCurrentWeatherSuccess(response));
        })
        .catch(() => {
            dispatch(getCurrentWeatherError());
        })
};
