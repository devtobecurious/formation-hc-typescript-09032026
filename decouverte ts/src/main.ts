class Hobbit {
    private _isRingBearer: boolean = true;

    constructor(private name: string, private age: number, isRing: boolean) {
        this._isRingBearer = isRing;
    }

    get isRingBearer(): boolean {
        return this._isRingBearer;
    }
}

const frodo = new Hobbit('Frodo', 50, true);
console.info(frodo.isRingBearer);