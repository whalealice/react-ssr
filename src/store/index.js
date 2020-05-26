import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import homeReducer from './../components/Home/state/reducer'
const reducers = combineReducers({
    homeReducer,
})
const getStore = () => {
    return createStore(reducers, applyMiddleware(thunk))
}

export default getStore