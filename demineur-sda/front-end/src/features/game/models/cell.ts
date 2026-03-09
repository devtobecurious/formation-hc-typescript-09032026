import type Character from "./character";

export class Cell {
    private _character : Character | undefined;

    constructor(private _i: number, private _j: number) {
    }

    move(): void {
        if(this.character) {

        }
    }

    set character(value: Character) {
        this._character = value;
    }

    get character(): Character | undefined {
        return this._character;
    }

    get position(): [number, number] {
        return [this._i, this._j];
    }

    get i (): number {
        return this._i;
    }

    get j (): number {
        return this._j;
    }
}

//export class CellType {}
//export default Cell;