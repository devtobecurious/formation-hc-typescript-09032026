import './style.css';

import d3 from 'd3';

import { defaultGridGenerator } from './features/game/use-cases/generate';
import type { Cell } from './features/game/models/cell';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
  </div>
`

//declare const d3: any;
//d3.


// function display(obj: unknown): void {
//      //console.info(obj.toLowerCase()); 
//      if(typeof obj === 'string') {
//         console.info(obj.toLowerCase());
//      }
//      else if(typeof obj === 'number') {
//         console.info(obj.toFixed(2));
//      }
// }

function display(obj: string | number): void {
     //console.info(obj.toLowerCase()); 
     if(typeof obj === 'string') {
        console.info(obj.toLowerCase());
     }
     else if(typeof obj === 'number') {
        console.info(obj.toFixed(2));
     }
}

display('Hello World!');
display(42); // Erreur d'exécution : Argument of type 'number' is not assignable to parameter of type 'string'.
//display(true);

class DivGenerator {
  generate(cell: Cell): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.textContent = `(${cell.i}, ${cell.j})`;
    return div;
  }
}


defaultGridGenerator.generate(10, 10);


// let enemies: Character[] = [
//     new Sauron("Sauron", "sauron.png"),
//     new Urukhai("Urukhai", "urukhai.png")
// ];
// enemies.forEach(enemy => enemy.move(5, 5));

// const fight = createFight('real-time');
// fight.run(enemies[0], enemies[1]);

// const sauron = new Sauron("Sauron", "sauron.png");
// sauron.heal();

