import { createAction } from 'redux-actions';

export const ACTION_TYPES = {
    GET_LOCATION_LOADING: 'GET_LOCATION_LOADING',
    GET_LOCATION_SUCCESS: 'GET_LOCATION_SUCCESS',
    GET_LOCATION_ERROR: 'GET_LOCATION_ERROR',
};

export const getLocationLoading = createAction(ACTION_TYPES.GET_LOCATION_LOADING);
export const getLocationSuccess = createAction(ACTION_TYPES.GET_LOCATION_SUCCESS);
export const getLocationError = createAction(ACTION_TYPES.GET_LOCATION_ERROR);

