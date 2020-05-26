import { GET_NAME } from './action'

const createInitialState = () => {
    return {
        name: 'baifan',
    }
}

export default function homeReducer(state = createInitialState(), action) {
    switch (action.type) {
        case GET_NAME:
            let _state = JSON.parse(JSON.stringify(state))
            _state.name = action.payload
            console.log('_state', _state)
            return _state
        default:
            return state
    }
}