import { handleActions } from 'redux-actions';

import {
    getLocationLoading,
    getLocationSuccess,
    getLocationError
} from '../actions/creators';

export const INITIAL_STATE = {
    loading: false,
    serverError: false,
    data: {},
};

const locationReducer = handleActions(
    new Map([
        [
            getLocationLoading,
            (state) => ({
                ...state,
                loading: true,
            }),
        ],
        [
            getLocationSuccess,
            (state, action) => ({
                ...state,
                loading: false,
                serverError: false,
                data: action.payload
            }),
        ],
        [
            getLocationError,
            (state) => ({
                ...state,
                loading: false,
                serverError: true,
            }),
        ],
    ]),
    { ...INITIAL_STATE }
);

export default locationReducer;
