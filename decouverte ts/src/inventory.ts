class Item {
    id = 0;
}

class Inventory<T extends {id: number}> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    getIds(): number[] {
        return this.items.map(item => item.id);
    }

    get list(): T[] {
        return this.items;
    }
}

type InventoryOrUndefined<T extends {id: number}> = Inventory<T> | undefined;

const inventory = new Inventory<Item>();
const ids = inventory.getIds();
//const inventoryString = new Inventory<string | number>();
