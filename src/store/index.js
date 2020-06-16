import { createStore, applyMiddleware, combineReducers } from 'redux'
import Immutable  from 'immutable'
import thunk from 'redux-thunk'
import { homeReducer } from './../components/Home'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducers = combineReducers({
    homeReducer,
})
export const getStore = (req) => {
    return createStore(reducers, applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
}

export const getClientStore = () => {
    const defaultState = window.context.state
    console.log('defaultState', defaultState)
    return createStore(reducers, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}