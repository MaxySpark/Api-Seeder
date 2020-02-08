import { LoginService } from "./lib/LoginService";
import { BaseModel } from "./lib/BaseModel";
import { IApiModel } from "./interfaces/IApiModel.interface";


export class App {
    private loginService = new LoginService();
    model: IApiModel;
    
    constructor(model: IApiModel) {
        this.model = model;
    }

    public async login() {
        const data = await this.loginService.login();
        return data;
    }

    public async generate(total: number) {
        const startTime = Date.now();
        const login = await this.login();
        const items = await this.model.generate(total);
        const baseModel = new BaseModel(this.model.name, this.model.slug, login.token)
        for (let i = 0; i < items.length; i++) {
            await baseModel.insertData(items[i]);
        }
        const endTime = Date.now();

        return {
            success: true,
            time:  `${endTime - startTime}ms`,
            total: items.length
        }
    }
}