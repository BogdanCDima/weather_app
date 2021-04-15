import { createAction } from 'redux-actions';

export const ACTION_TYPES = {
    GET_WEATHER_DATA_LOADING: 'GET_WEATHER_DATA_LOADING',
    GET_WEATHER_DATA_SUCCESS: 'GET_WEATHER_DATA_SUCCESS',
    GET_WEATHER_DATA_ERROR: 'GET_WEATHER_DATA_ERROR',
};

export const getWeatherDataLoading = createAction(ACTION_TYPES.GET_WEATHER_DATA_LOADING);
export const getWeatherDataSuccess = createAction(ACTION_TYPES.GET_WEATHER_DATA_SUCCESS);
export const getWeatherDataError = createAction(ACTION_TYPES.GET_WEATHER_DATA_ERROR);

