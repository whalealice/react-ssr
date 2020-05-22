import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const GET_NAME = 'index => change from';

const createInitialState = () => {
    return {
        name: 'baifan',
    }
}
const reducer = (state= createInitialState(), action) =>{
    switch (action.type) {
        case GET_NAME:
            let _state = JSON.parse(JSON.stringify(state))
            _state.name = action.payload
            return _state
        default:
            return state
    }
}
export function exchange() {
    return (dispatch, getState) => {
        dispatch({
            type: GET_NAME,
            payload: '这是修改后的名字',
        })
    };
}
const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export default getStore