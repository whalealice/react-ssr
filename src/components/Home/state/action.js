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
    // http://route.showapi.com/341-2
    // 浏览器运行
    // /api/341-2 = http://localhost:5000/api/341-2
    // 服务器运行
    // /api/341-2 = 服务器根目录下/api/341-2 没有这个文件，始终获取不到

    return (dispatch, getSate, axiosInstance) => {
        console.log('3233132334234', axiosInstance)
        return axiosInstance.get('/api/341-2').
            then((res) => {
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