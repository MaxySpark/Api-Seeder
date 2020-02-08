import * as rp from 'request-promise';
import { AppConfig } from '../config/config';
import { App } from '../App';

export class LoginService {
    public async login() {
        const options = {
            uri: AppConfig.host + '/v1/auth/login',
            headers: {
                'User-Agent': 'nodejs',
                'Content-Type': 'application/json'
            },
            resolveWithFullResponse: true,
            body: {
                email: AppConfig.email,
                password: AppConfig.password
            },
            json: true,
            method: 'POST'
        };

        const { headers, body } = await rp(options);

        return { 'token': headers['authorization'], id: body.data.id}
    }
}