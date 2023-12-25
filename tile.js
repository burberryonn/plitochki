export class Title {
    constructor(gridElement){
        this.titleElement = document.createElement("div");
        this.titleElement.classList.add("title");
        this.value = Math.random() > 0.5 ? 2 : 4;
        this.titleElement.textContent = this.value;
        gridElement.append(this.titleElement);
    }

    setXY(x, y){
        this.x = x;
        this.y = y;
        this.titleElement.style.setProperty("--x", x);
        this.titleElement.style.setProperty("--y", y);
    }
}