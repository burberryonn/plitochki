import { Cell } from "/cell.js";

const GRID_SIZE = 4;
const CELLS_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid{
    constructor(gridElement){
        this.cell = [];

        for (let index = 0; index < CELLS_COUNT; index++) {
            this.cell.push (
                new Cell(gridElement, index % GRID_SIZE, Math.floor(index / GRID_SIZE))
            );

        }

        this.cellsGroupedByColumn = this.groupCellsByColumn()
        this.cellsGroupedByReverseColumn = this.cellsGroupedByColumn.map(column => [...column].reverse())
        this.cellsGroupedByRow = this.groupCellsByRow()
        this.cellsGroupedByReverseRow = this.cellsGroupedByRow.map(row => [...row].reverse())
    }

    getRandomEmptyCell() {
        const emptyCell = this.cell.filter(cell => cell.isEmpty());
        const randomIndex = Math.floor(Math.random() * emptyCell.length);
        return emptyCell[randomIndex];
    }

    groupCellsByColumn(){
        return this.cell.reduce((groupedCell, cell) => {
            groupedCell[cell.x] = groupedCell[cell.x] || []
            groupedCell[cell.x][cell.y] = cell
            return groupedCell
        }, [])
    }

    groupCellsByRow(){
        return this.cell.reduce((groupedCell, cell) => {
            groupedCell[cell.y] = groupedCell[cell.y] || []
            groupedCell[cell.y][cell.x] = cell
            return groupedCell
        }, [])
    }
}