import axios from 'axios'
import config from '../config'

const createInstance = (req) => {
    var instance = axios.create({
        baseURL: 'http://route.showapi.com',
        headers: {
            cookie: req.get('cookie') ? req.get('cookie') : null
        },
        params: {
            secret: config.secret
        }
    })
    return instance
}

export default createInstance