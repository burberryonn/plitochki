import { Cell } from "./cell.js"

const GRID_SIZE = 4
const CELLS_COUNT = GRID_SIZE*GRID_SIZE

export class Grid{
    constructor(gridElement){
        this.cell = []

        for (let index = 0; index < CELLS_COUNT; index++) {
            this.cell.push(new Cell(gridElement, index % GRID_SIZE, Math.floor(index / GRID_SIZE)))
        }
    }
}