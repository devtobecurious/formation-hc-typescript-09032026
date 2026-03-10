//import hobbit = require("./hobbit");

// import { Hobbit } from "./hobbit";


// const frodo = new Hobbit('Frodo', 50, true);
// console.info(frodo.isRingBearer);

console.info('coucou');


type DisplayItem = (item: string) => void;

function displayInUpperCase(obj: string): void {
    console.info(obj.toUpperCase());
}

const maFunctionUpperCase: DisplayItem = displayInUpperCase;
maFunctionUpperCase('Hello World!');

function displayInLowerCase(obj: string): void {
    console.info(obj.toLowerCase());
}

displayInUpperCase('Hello World!');
displayInLowerCase('Hello World!');


class Character {
    constructor(public name: string, public image: string) {}

    // display(): void {
    //     console.info(`Character: ${this.name}, Image: ${this.image}`);
    // }

    display(itemDisplayer: DisplayItem): void {
        itemDisplayer(`Character: ${this.name}, Image: ${this.image}`);
    }
}

const bilbo = new Character('Bilbo', 'bilbo.png');
bilbo.display(displayInUpperCase);
bilbo.display(displayInLowerCase);