export class Cell{
    constructor(gridElement, x, y){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridElement.append(cell);
        this.x = x;
        this.y = y;
    }

    linkTitle(tile){
        title.setXY(this.x, this.y);
        this.linkedTitle = title;
    }

    isEmpty() {
        return !this.linkedTitle;
    }
}