export class Hobbit {
    private _isRingBearer = true;

    constructor(private name: string, private age: number, isRing: boolean) {
        this._isRingBearer = isRing;
    }

    get isRingBearer(): boolean {
        return this._isRingBearer;
    }
}

class Ring {}