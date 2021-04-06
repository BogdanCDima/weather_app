import { createAction } from 'redux-actions';

export const ACTION_TYPES = {
    GET_CURRENT_WEATHER_LOADING: 'GET_CURRENT_WEATHER_LOADING',
    GET_CURRENT_WEATHER_SUCCESS: 'GET_CURRENT_WEATHER_SUCCESS',
    GET_CURRENT_WEATHER_ERROR: 'GET_CURRENT_WEATHER_ERROR',
};

export const getCurrentWeatherLoading = createAction(ACTION_TYPES.GET_CURRENT_WEATHER_LOADING);
export const getCurrentWeatherSuccess = createAction(ACTION_TYPES.GET_CURRENT_WEATHER_SUCCESS);
export const getCurrentWeatherError = createAction(ACTION_TYPES.GET_CURRENT_WEATHER_ERROR);

