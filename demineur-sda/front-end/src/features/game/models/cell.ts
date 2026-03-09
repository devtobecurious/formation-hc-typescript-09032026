export class Cell {
    constructor(private _i: number, private _j: number) {
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