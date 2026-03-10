// abstract class Fighter {
//     constructor(public name: string, public health: number) {

import hobbit = require("./hobbit");

//     }

//     abstract attack(fighter: Fighter): void 

// }

interface Fighter {
    name: string;
    health: number;
    attack(fighter: Fighter): void;
}

interface Healer {
    heal(fighter: Fighter): void;
}

type FighterHealer = Fighter & Healer;

const healer: FighterHealer = {
    heal(fighter: Fighter): void {
        console.log(`${fighter.name} est soigné !`);
        fighter.health += 20;
    },
    name: "Gandalf",
    health: 100,
    attack(fighter: Fighter): void {
        console.log(`${this.name} attaque ${fighter.name} avec un bâton magique !`);
    }
}
healer.name = "Gandalf le Blanc";
healer.health = 120;


class HobbitPlus implements Healer, Fighter {
    name: string;
    health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }
    heal(fighter: Fighter): void {
        throw new Error("Method not implemented.");
    }

    attack(fighter: Fighter): void {
        console.log(`${this.name} attaque ${fighter.name} avec une épée en bois !`);
        fighter.health -= 10;
    }
}

type Team = {
    healer: Healer,
    fighters: Fighter[]
}

const myTeam: Team = {
    healer: new HobbitPlus("Frodon", 100),
    fighters: []
}

type Obj = {
    name: string;
}

const obj: Obj = { 
    name: "Gandalf",
}