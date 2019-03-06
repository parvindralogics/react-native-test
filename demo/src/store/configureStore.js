import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducers';
import thunk from 'redux-thunk';

function newRootReducer(state = undefined, action) {
    switch (action.type) {
        case 'RESET':
            return rootReducer(undefined, action);
        default:
            return rootReducer(state, action);
    }
}


export default (initialState) => {
    return createStore(newRootReducer, initialState, applyMiddleware(thunk))
};
