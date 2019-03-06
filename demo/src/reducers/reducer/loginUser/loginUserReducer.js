import * as types from './actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SENDING_DATA:
            return {
                ...state,
                data: {},
                isLoading: true
            };
        case types.DATA_SUCCESS:
        case types.DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                data: action.data,
                message: action.message,
                status: action.status,
            };
        case types.DATA_CLEAR:
            return {
                ...state,
                isLoading: false,
                data: {},
                message: "",
                status: false,
            };
        default:
            return state;
    }
}