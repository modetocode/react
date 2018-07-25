import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import loggerMv from '../middleware/logger';

const store = createStore(rootReducer, {}, applyMiddleware(thunk, loggerMv));
export default store;