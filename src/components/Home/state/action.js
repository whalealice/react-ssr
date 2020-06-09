import axios from 'axios'
export const GET_NAME = 'index => change from';
export const GET_HOME_LIST_SUCCESS = 'index => get home list success';

export function exchange(opts) {
    return (dispatch, getState) => {
        dispatch({
            type: GET_NAME,
            payload: opts,
        })
    };
}

export const getHomeList = () => {
    return (dispatch)=>{
        return axios.get('http://route.showapi.com/341-2').
        then((res)=>{
            const data = [
                { 
                    key: '1',
                    value: '极限挑战'
                },
                { 
                    key: '2',
                    value: '向往的生活'
                }
            ]
            console.log('yyyyyyyyyy', data)
            dispatch({
                type: GET_HOME_LIST_SUCCESS,
                payload: data,
            })
        })
    }
}