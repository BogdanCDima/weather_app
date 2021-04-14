import { handleActions } from 'redux-actions';

import {
    getHistoricalDataLoading,
    getHistoricalDataSuccess,
    getHistoricalDataError
} from '../actions/creators';

export const INITIAL_STATE = {
    loading: false,
    serverError: false,
    data: [],
};

const historicalDataReducer = handleActions(
    new Map([
        [
            getHistoricalDataLoading,
            (state) => ({
                ...state,
                loading: true,
            }),
        ],
        [
            getHistoricalDataSuccess,
            (state, action) => ({
                ...state,
                loading: false,
                serverError: false,
                data: action.payload
            }),
        ],
        [
            getHistoricalDataError,
            (state) => ({
                ...state,
                loading: false,
                serverError: true,
            }),
        ],
    ]),
    { ...INITIAL_STATE }
);

export default historicalDataReducer;
