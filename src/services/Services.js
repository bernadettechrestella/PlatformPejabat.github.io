import axios from 'axios';
import {API_URL_AUTH} from '../configs/GlobalURL'

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
        console.log(data)
        return data
    }
}
