export class Cell{
    constructor(gridElement, x, y){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridElement.append(cell);
        this.x = x;
        this.y = y;
    }

    linkTitle(title){
        title.setXY(this.x, this.y);
        this.linkedTitle = title;
    }

    unLinkTitle(){
        this.linkedTitle = null;
    }

    isEmpty() {
        return !this.linkedTitle;
    }

    linkTitleForMerge(title){
        title.setXY(this.x, this.y);
        this.linkedTitleForMerge = title;
    }

    unlinkTitleForMerge(){
        this.linkedTitleForMerge = null;
    }

    hasTitleForMerge(){
        return !!this.linkedTitleForMerge
    }

    canAccept(newTitle){
        return this.isEmpty() || (!this.hasTitleForMerge() && this.linkedTitle.value === newTitle.value) 
    }

    mergeTitles(){
        this.linkedTitle.setValue(this.linkedTitle.value + this.linkedTitleForMerge.value)
        this.linkedTitleForMerge.removeFromDOM()
        this.unlinkTitleForMerge()
    }
}