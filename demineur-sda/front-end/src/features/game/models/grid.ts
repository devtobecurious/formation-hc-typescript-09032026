import { Cell } from "./cell";

/**
 * Represents the grid of the game, which is a 2D array of cells.
 */
export class Grid {
    private cells: Cell[][] = [];

    constructor(width: number, height: number) {
        this.prepareCells(width, height);
    }

    private prepareCells(width: number, height: number): void {
        for (let y = 0; y < height; y++) {            
            const row: Cell[] = [];

            for (let x = 0; x < width; x++) {
                row.push(new Cell(y, x));
            }
            this.cells.push(row);
        }

    }
}