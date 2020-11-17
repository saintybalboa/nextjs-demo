
import { apiRequest } from '../api';
import axios from 'axios';
import config from '../../config/config';

jest.mock('axios');

describe('api', () => {
    it('should make api request with the correct params when a valid route is provided', async () => {
        const httpMethod = config.api.routes.login.method.toLowerCase();
        const url = process.env.NEXT_PUBLIC_API_BASE_URL + config.api.routes.login.path;
        const params = { email: 'test@test.com', password: 'test' };

        axios.post.mockResolvedValue('success');

        await apiRequest({
            route: 'login',
            params
        });

        expect(axios[httpMethod]).toBeCalledTimes(1);
        expect(axios[httpMethod]).toBeCalledWith(url, params);
    });
});
