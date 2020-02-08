import { IApiModel } from "../interfaces/IApiModel.interface";
import * as faker from 'faker';

export interface IInventoryItem {
    name: string;
    barcode?: string;
    category?: string;
    dimension?: string;
    model?: string;
    saleable?: boolean;
  }

export class InventoryItem implements IApiModel {
    name = 'InventoryItem';
    slug = 'invitem';
    items: IInventoryItem[] = [];
    public generate(total: number = 10) {
        for (let i = 0; i < total; i++) {
            const fakeContact: IInventoryItem = {
                name: faker.commerce.productName(),
                barcode: faker.random.number().toString(),
                category: 'dcf1fc07-9819-40ae-8a46-4a97c4632081',
                dimension: faker.random.arrayElement(['Box', 'Cylinder']),
                model: faker.commerce.productAdjective(),
                saleable: faker.random.boolean(),
            };
            this.items.push(fakeContact);
          }
          return this.items;
    }
}
  
  