import { Cell } from "./cell";

export type DisplayCell = (cell: Cell) => void;

/**
 * Represents the grid of the game, which is a 2D array of cells.
 */
export class Grid {
    private cells: Cell[][] = [];

    constructor(width: number, height: number) {
        this.prepareCells(width, height);
    }

    display(cellDisplay: DisplayCell): void {
        for(const row of this.cells) {
            for(const cell of row) {
                cellDisplay(cell);
            }
        }

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