export class Title {
    constructor(gridElement){
        this.titleElement = document.createElement("div");
        this.titleElement.classList.add("title");
        this.setValue(Math.random() > 0.5 ? 2 : 4);
        gridElement.append(this.titleElement);
    }

    setXY(x, y){
        this.x = x;
        this.y = y;
        this.titleElement.style.setProperty("--x", x);
        this.titleElement.style.setProperty("--y", y);
    }

    setValue(value){
        this.value = value
        this.titleElement.textContent = value;
        const bgLightNess = 100 - Math.log2(value) * 9
        this.titleElement.style.setProperty("--bg-lightness", `${bgLightNess}%`);
        this.titleElement.style.setProperty("--text-lightness", `${bgLightNess < 50 ? 90 : 10}%`);
    }

    removeFromDOM(){
        this.titleElement.remove()
    }

    waitForTransitionEnd(){
        return new Promise(resolve => {
            this.titleElement.addEventListener('transitionend', resolve, {once: true})
        })
    }

    waitForAnimationEnd(){
        return new Promise(resolve => {
            this.titleElement.addEventListener('animationend', resolve, {once: true})
        })
    }
}