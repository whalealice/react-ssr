export const GET_NAME = 'index => change from';

export function exchange(opts) {
    return (dispatch, getState) => {
        dispatch({
            type: GET_NAME,
            payload: opts,
        })
    };
}