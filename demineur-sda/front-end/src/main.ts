import './style.css'

import { Sauron } from './features/game/models/enemy'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
  </div>
`
const sauron = new Sauron("Sauron", "sauron.png");
sauron.heal();

