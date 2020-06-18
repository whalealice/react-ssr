import Immutable  from 'immutable'
import { 
    GET_NAME,
    GET_HOME_LIST_SUCCESS,
    GET_HOME_CHANGE_LOGIN,
} from './action'

const createInitialState = () => {
    return ({
        name: 'baifan',
        homeList: [],
        isLogin: true,
    })
}

export default function homeReducer(state = createInitialState(), action) {
    console.log('4444', action.type)
    switch (action.type) {
        case GET_NAME:
            const newState = Object.assign({}, state, { name: action.payload })
            return newState
        case GET_HOME_LIST_SUCCESS:
            let newList = Object.assign({}, state, { homeList: action.payload })
            return newList
        case GET_HOME_CHANGE_LOGIN:
            return  Object.assign({}, state, { isLogin: action.payload })
        default:
            return state
    }
}