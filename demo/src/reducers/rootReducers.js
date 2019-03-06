import {combineReducers} from 'redux'
import loginUserReducer from './reducer/loginUser/loginUserReducer'


const rootReducer = combineReducers({
    loginUserReducer
});

export default rootReducer;

