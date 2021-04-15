import {
    getHistoricalDataLoading,
    getHistoricalDataSuccess,
    getHistoricalDataError
} from './creators';

import axios from 'axios';

export const getHistoricalData = (lat, lon, unit) => (dispatch) => {
    dispatch(getHistoricalDataLoading());
    const time = Math.round((new Date().getTime() / 1000) - 150);

    return axios({
        "method": "GET",
        "url": `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=fb441225d95c25cad088c4e878525ebe&units=${unit}`,
    })
        .then((response) => {
            dispatch(getHistoricalDataSuccess(response));
        })
        .catch(() => {
            dispatch(getHistoricalDataError());
        })
}
