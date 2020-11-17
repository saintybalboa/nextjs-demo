import axios from 'axios';
import config from '../config/config';

export const apiRequest = async ({ route, params = {}}) => {
    const url = config.api.baseUrl + config.api.routes[route].path;
    const method = config.api.routes[route].method.toLowerCase();

    const response = await axios[method](url, params);

    return response;
}
