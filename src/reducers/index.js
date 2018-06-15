import {combineReducers} from 'redux';
import loginReducer from './LoginReducer.js';


const rootReducer = combineReducers({
    loginData: loginReducer
})

export default rootReducer;