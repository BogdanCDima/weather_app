import { createAction } from 'redux-actions';

export const ACTION_TYPES = {
    GET_HISTORICAL_DATA_LOADING: 'GET_HISTORICAL_DATA_LOADING',
    GET_HISTORICAL_DATA_SUCCESS: 'GET_HISTORICAL_DATA_SUCCESS',
    GET_HISTORICAL_DATA_ERROR: 'GET_HISTORICAL_DATA_ERROR',
};

export const getHistoricalDataLoading = createAction(ACTION_TYPES.GET_HISTORICAL_DATA_LOADING);
export const getHistoricalDataSuccess = createAction(ACTION_TYPES.GET_HISTORICAL_DATA_SUCCESS);
export const getHistoricalDataError = createAction(ACTION_TYPES.GET_HISTORICAL_DATA_ERROR);

