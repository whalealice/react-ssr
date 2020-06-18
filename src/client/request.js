import axios from 'axios'
import config from '../config'

var instance = axios.create({
    baseURL: '/',
    params: {
        secret: config.secret
    }
})
export default instance