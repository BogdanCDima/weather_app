import { handleActions } from 'redux-actions';

import {
    getWeatherDataLoading,
    getWeatherDataSuccess,
    getWeatherDataError
} from '../actions/creators';

export const INITIAL_STATE = {
    loading: false,
    serverError: false,
    data: {},
};

const weatherDataReducer = handleActions(
    new Map([
        [
            getWeatherDataLoading,
            (state) => ({
                ...state,
                loading: true,
            }),
        ],
        [
            getWeatherDataSuccess,
            (state, action) => ({
                ...state,
                loading: false,
                serverError: false,
                data: action.payload
            }),
        ],
        [
            getWeatherDataError,
            (state) => ({
                ...state,
                loading: false,
                serverError: true,
            }),
        ],
    ]),
    { ...INITIAL_STATE }
);

export default weatherDataReducer;
