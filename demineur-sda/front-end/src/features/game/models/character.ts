import { Life } from "./life";

class Character {
    private _life = new Life(100);

    constructor(private _name: string, private _avatar: string) {}

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