import {
    GET_AGE,
} from './action';


export const createOtherInitialState = () => {
    return {
        age: 18,
    }
}
export default function ageReducer  (state= createInitialState(), action) {
    switch (action.type) {
        case GET_AGE:
            let _state = JSON.parse(JSON.stringify(state))
            _state.age = action.payload
            return _state
        default:
            return state
    }
}