import { combineReducers } from 'redux'
import userinfo from './userinfo'
import time from './time'

export default combineReducers({
    userinfo,
    time
})