import * as rp from 'request-promise';
import { AppConfig } from '../config/config';

export class BaseModel {
    public name: string;
    public slug: string;
    public token: string;
    constructor(name: string, slug: string,token: string) {
        this.name = name;
        this.slug = slug;
        this.token = token;
    }

    public async insertData(model: any) {
        const options = {
            uri: AppConfig.host + '/v1/' + this.slug + '/',
            headers: {
                'User-Agent': 'nodejs',
                'Content-Type': 'application/json',
                'Authorization': this.token
            },
            resolveWithFullResponse: true,
            body: model,
            json: true,
            method: 'POST'
        };

        const { body } = await rp(options);

        return body;
    }
}