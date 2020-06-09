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
            return state.set('name',  action.payload)
        case GET_HOME_LIST_SUCCESS: 
                return state.set('homeList',  Immutable.List(action.payload))
        default:
            return state
    }
}