import Immutable  from 'immutable'
import { 
    GET_NAME,
    GET_HOME_LIST_SUCCESS,
} from './action'

const createInitialState = () => {
    return Immutable.fromJS({
        name: 'baifan',
        count: 0,
        homeList: []
    })
}

export default function homeReducer(state = createInitialState(), action) {
    switch (action.type) {
        case GET_NAME:
            const newState = Object.assign({}, state, { name: action.payload })
            return newState
        case GET_HOME_LIST_SUCCESS:
            let newList = Object.assign({}, state, { homeList: action.payload })
            return newList
        default:
            return state
    }
}