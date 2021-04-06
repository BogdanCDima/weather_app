import { handleActions } from 'redux-actions';

import {
    getCurrentWeatherLoading,
    getCurrentWeatherSuccess,
    getCurrentWeatherError
} from '../actions/creators';

export const INITIAL_STATE = {
    loading: false,
    serverError: false,
    currentWeather: [],
};

const currentWeatherReducer = handleActions(
    new Map([
        [
            getCurrentWeatherLoading,
            (state) => ({
                ...state,
                loading: true,
            }),
        ],
        [
            getCurrentWeatherSuccess,
            (state, action) => ({
                ...state,
                loading: false,
                serverError: false,
                currentWeather: action.payload
            }),
        ],
        [
            getCurrentWeatherError,
            (state) => ({
                ...state,
                loading: false,
                serverError: true,
            }),
        ],
    ]),
    { ...INITIAL_STATE }
);

export default currentWeatherReducer;
