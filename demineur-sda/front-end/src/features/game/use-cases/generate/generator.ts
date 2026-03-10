import type { Grid } from "../../models/grid";

// export interface GridGenerator {
//     generate(width: number, height: number): Grid;
// }

export type FixSize = 10 | 20 | 50 | 100;

export type GridGenerator = {
    generate(width: FixSize, height: FixSize): Grid;
}