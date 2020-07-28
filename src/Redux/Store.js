import {createStore} from 'redux'
import CoinsReducer from './CoinsReducer' 

const store = createStore(CoinsReducer);

export default store