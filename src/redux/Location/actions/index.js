import {
    getLocationLoading,
    getLocationSuccess,
    getLocationError
} from './creators';

import axios from 'axios';

const getData = (url, dispatch) => {
    return axios({
        "method": "GET",
        "url": url,
    })
        .then((response) => {
            dispatch(getLocationSuccess(response));
        })
        .catch(() => {
            dispatch(getLocationError());
        })
}


export const getLocation = (location) => (dispatch) => {
    dispatch(getLocationLoading());
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=fb441225d95c25cad088c4e878525ebe`;
    getData(url, dispatch);
};

export const getCurrentLocation = (location) => (dispatch) => {
    dispatch(getLocationLoading());
    let url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.lat}&lon=${location.lon}&limit=1&appid=fb441225d95c25cad088c4e878525ebe`

    getData(url, dispatch);
};
