import Character from "./character";
import { Life } from "./life";

export default class Enemy extends Character {
}

export class Sauron extends Enemy {

    heal(): void {
        this.life = new Life(this.life.value + 10);
    }
}

//  const sauron = new Sauron("Sauron", "sauron.png");


export class Urukhai extends Enemy {

}
