import {
    GET_NAMES,
} from './action';


export const createInitialState = () => {
    return {
        name: 'baifan11',
    }
}
export default function nameReducer  (state= createInitialState(), action) {
    switch (action.type) {
        case GET_NAMES:
            let _state = JSON.parse(JSON.stringify(state))
            _state.name = action.payload
            return _state
        default:
            return state
    }
}