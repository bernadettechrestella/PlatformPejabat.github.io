import axios from 'axios';
import {API_URL_AUTH, API_URL_NEWS_REPUBLIKA} from '../configs/GlobalURL'
import {API_URL_NEWS} from '../configs/GlobalURL'
import {API_URL_NEWS_ANTARA} from '../configs/GlobalURL'

const options = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

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
    async news(param) {
        const url = `${API_URL_NEWS}everything?domains=viva.co.id&q=${param.filter}&from=${param.from}&to=${param.to}&sortBy=popularity&apiKey=f6b37ebf032b442cb81d45842aaac861`
        const data = axios.get(url).then(response => response.data)
        // console.log(data)
        return data
    }
    async newsRepublika(param) {
        const url = `${API_URL_NEWS_REPUBLIKA}`+param
        const data = axios.get(url).then(response => response.data)
        // console.log(data)
        return data
    }
    async newsAntara() {
        const url = `${API_URL_NEWS_ANTARA}`
        const data = axios.get(url).then(response => response.data)
        // console.log(data)
        return data
    }
}
