function Hobbit(name, age, isShort) { 
    this.name = name;
    console.info(this); 
}

Hobbit('frodo');

const frodo = new Hobbit('frodo');
frodo.name = 'sam';

function Urukhai(name, weapon) {
    this.name = name;
    this.weapon = weapon;

    console.info(this)
}
const uru = new Urukhai('hi', 'fork');
uru.weapon = 'spoon';

const futurExecution = Urukhai.bind(frodo);
futurExecution('frodo', 'dard');





// class Character {
//     #maVar = 0

//     constructor(name, age) {
//         if(arguments.length !== 2) {
//             throw new Error('Il faut au moins un nom et un âge pour créer un personnage');
//         }

//         this._name = name;
//         this._age = age;
//     }

//     set name(name) {
//         this._name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     get age() {
//         return this._age;
//     }
// }

// class Hobbit extends Character {
//     constructor(name, age, isShort) {
//         super(name, age);
//         this._isShort = isShort;
//     }
// }

// const sam = new Hobbit('Sam', 38, true, 1);
// const frodo = new Hobbit(); // valeur par défaut : undefined