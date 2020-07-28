import {createStore,applyMiddleware} from 'redux'
import CoinsReducer from './CoinsReducer' 
import thunk from 'redux-thunk';

const store = createStore(CoinsReducer, applyMiddleware(thunk));

export default store