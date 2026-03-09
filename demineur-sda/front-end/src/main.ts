import './style.css'

import { Sauron, Urukhai } from './features/game/models/enemy'
import Character from './features/game/models/character';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
  </div>
`


let enemies: Character[] = [
    new Sauron("Sauron", "sauron.png"),
    new Urukhai("Urukhai", "urukhai.png")
];
enemies.forEach(enemy => enemy.move(5, 5));

// const sauron = new Sauron("Sauron", "sauron.png");
// sauron.heal();

