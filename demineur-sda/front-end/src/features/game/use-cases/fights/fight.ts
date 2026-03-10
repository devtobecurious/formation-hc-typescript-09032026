import type Character from "../../models/character";

export default abstract class Fight {
    abstract run(char1: Character, char2: Character): void;
}

// enum FightType {
//     TURN_BASED = 'turn-based',
//     REAL_TIME = 'real-time'
// }

export type ArrayFight = Fight[];

export type FightType = 'turn-based' | 'real-time';

export function createFight(type: FightType): Fight {
    switch (type) {
        case 'turn-based':
            return new TurnBasedFight();
        default:
            throw new Error(`Unknown fight type: ${type}`);
    }
}

class TurnBasedFight extends Fight {
    run(char1: Character, char2: Character): void {
        throw new Error("Method not implemented.");
    }   
    
}