import Character from "./character";
import { Life } from "./life";

export default class Enemy extends Character {
}

export class Sauron extends Enemy {

    heal(): void {
        this.life = new Life(this.life.value + 10);
    }

    move(x: number, y: number): void {
        super.move(x, y);
        console.log(`${this.name} se déplace en (${x}, ${y}) avec une démarche lourde et menaçante`);
    }
}

//  const sauron = new Sauron("Sauron", "sauron.png");


export class Urukhai extends Enemy {

}
