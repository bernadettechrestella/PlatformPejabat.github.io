import axios from 'axios';
import {API_URL_AUTH} from '../configs/GlobalURL'
import {API_URL_NEWS} from '../configs/GlobalURL'
import {API_URL_NEWS2} from '../configs/GlobalURL'

const options = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}
// const optionsGet = {
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': 'GET'
//     }
// }

export class Services {
    async register(param) {
        const url = `${API_URL_AUTH}register`
        const data = axios.post(url, param, options).then(response => response.data)
        // console.log(data)
        return data
    }
    async login(param) {
        const url = `${API_URL_AUTH}login`
        const data = axios.post(url, param, options).then(response => response.data)
        console.log(data)
        return data
    }
    async news() {
        const url = `${API_URL_NEWS}`
        const data = axios.get(url).then(response => response.data)
        // console.log(data)
        return data
    }
    async news2() {
        const url = `${API_URL_NEWS2}`
        const data = axios.get(url).then(response => response.data)
        // console.log(data)
        return data
    }
}
