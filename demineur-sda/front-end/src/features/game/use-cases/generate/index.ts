import { Grid } from "../../models/grid";
import type { GridGenerator } from "./Generator";

export const defaultGridGenerator: GridGenerator = {
    generate(width: number, height: number): Grid {
        if (width <= 0 || height <= 0) {
            throw new Error("Width and height must be greater than 0.");
        }

        return new Grid(width, height);
    }
}