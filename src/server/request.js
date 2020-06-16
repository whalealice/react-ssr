import axios from 'axios'

const creatInstance = (req) =>  axios.create({
    baseURL: 'http://route.showapi.com',
    headers: {
        cookie: req.get('cookie') ? req.get('cookie') : null
    }
})
export default creatInstance