import { createStore, applyMiddleware, combineReducers } from 'redux'
import Immutable  from 'immutable'
import thunk from 'redux-thunk'
import { homeReducer } from './../components/Home'

const reducers = combineReducers({
    homeReducer,
})
export const getStore = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export const getClientStore = () => {
    const defaultState = window.context.state
    console.log('defaultState', defaultState)
    return createStore(reducers, defaultState, applyMiddleware(thunk))
}