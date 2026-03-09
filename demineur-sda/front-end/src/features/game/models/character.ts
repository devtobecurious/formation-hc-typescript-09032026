import { Life } from "./life";

abstract class Character {
    private _life = new Life(100);

    constructor(private _name: string, private _avatar: string) {}

    move(x: number, y: number): void {
        console.log(`${this.name} se déplace en (${x}, ${y})`);
    }

    protected get life(): Life {
        return this._life;
    }

    protected set life(value: Life) {
        this._life = value;
    }

    get name(): string {
        return this._name;
    }

    get avatar(): string {
        return this._avatar;
    }
}

export default Character;