import {createStore,combineReducers,applyMiddleware} from 'redux'
import shop from './reducer'
import thunk from 'redux-logger'
import logger from 'redux-thunk'
let reducer=combineReducers({
    shop
})
let store=createStore(reducer,applyMiddleware(thunk,logger))

export default store