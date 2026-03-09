import Character from "./character";

export default class Hobbit extends Character {
    constructor(private piedPoilu: boolean) {
        super("Frodon", "frodon.png");

        console.log(`Je suis un hobbit et j'ai les pieds poilus : ${this.piedPoilu}`);
    }  
}