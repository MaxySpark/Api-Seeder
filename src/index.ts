import 'dotenv/config';
import { App } from './App';
import { InventoryItem } from './models/Inventory';

(async () => {
    try {
        const model = new InventoryItem();
        const app = new App(model);
        const insertData = await app.generate(99);
        console.log(insertData);
    } catch(e) {
        console.log(e.message);
    }
})();