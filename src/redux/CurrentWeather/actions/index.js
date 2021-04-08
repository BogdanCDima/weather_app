import {
    getCurrentWeatherLoading,
    getCurrentWeatherSuccess,
    getCurrentWeatherError
} from './creators';

import axios from 'axios';

const getData = (url, dispatch) => {
    return axios({
        "method": "GET",
        "url": url,
    })
        .then((response) => {
            console.log(response);
            dispatch(getCurrentWeatherSuccess(response));
        })
        .catch(() => {
            dispatch(getCurrentWeatherError());
        })
}

export const getCurrentWeather = (location, unit) => (dispatch) => {
    dispatch(getCurrentWeatherLoading());
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fb441225d95c25cad088c4e878525ebe&units=${unit}`;
    getData(url, dispatch);
};

export const getCurrentWeatherOnCurrentLocation = (location, unit) => (dispatch) => {
    dispatch(getCurrentWeatherLoading());

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=fb441225d95c25cad088c4e878525ebe&units=${unit}`

    getData(url, dispatch);
};
