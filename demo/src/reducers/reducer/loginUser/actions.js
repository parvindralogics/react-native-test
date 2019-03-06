import * as types from './actionTypes';
import Strings from "../../../../assets/values/Strings";
import LocalStorage from "../../../store/LocalStorage";

export function getData() {
    return {
        type: types.SENDING_DATA
    }
}

export function getDataSuccess(res) {
    return {
        type: types.DATA_SUCCESS,
        data: res.data,
        status: true,
        message: Strings.message_success,
    }
}

export function getDataFailure(status, message) {
    return {
        type: types.DATA_FAILURE,
        status: status,
        message: message,
        data: {}
    }
}

export function clearData() {
    return (dispatch) => {
        dispatch({
            type: types.DATA_CLEAR
        })
    }
}

export function loginUser(data) {
    return async (dispatch) => {
        dispatch(getData());
        try {
            await LocalStorage.setUser(JSON.stringify(data));
            await LocalStorage.setLoggedIn("1");
            dispatch(getDataSuccess({
                data
            }));
        } catch (err) {
            dispatch(getDataFailure(false, "Failed"));
        }

    }
}