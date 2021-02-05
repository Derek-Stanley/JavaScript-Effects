const root = document.querySelector(".bubble-style");

let  innerHeight=root.offsetTop, innerWidth=root.offsetLeft;

class Bubble {
  constructor() {
    
    this.bubbleSpan = undefined;
    this.handleNewBubble();
    this.color = this.randomColor();

    this.posY = 0;
    this.posX = 0;


    this.bubbleSpan.style.top = this.posY + "%";
    this.bubbleSpan.style.left =this.posX + "%";

    this.height = this.randomNumber(25, 5);
    this.width = this.height;

    this.bubbleEnd.call(this.bubbleSpan, this.randomNumber(10000, 3000));
  }
 fast()
  { speed=speed+10; } 

  handleNewBubble() {
    this.bubbleSpan = document.createElement("span");
    this.bubbleSpan.classList.add("bubble");
    root.append(this.bubbleSpan);
    this.handlePosition();
    this.bubbleSpan.addEventListener("click", this.bubbleEnd);
  }

  handlePosition() {
    
    this.bubbleSpan.style.backgroundColor = this.color;
    this.bubbleSpan.style.height = this.height + "px";
    this.bubbleSpan.style.width = this.height + "px";
    this.speed=4;
    if(this.posX<=95&&this.posY<=0)
    this.posX = this.posX+Math.floor(Math.random()*this.speed);
    else if(this.posX>=95&&this.posY<=95)
    this.posY=this.posY+Math.floor(Math.random()*this.speed);
    
    if(this.posY>=95&&this.posX>=0)
    this.posX = this.posx-Math.floor(Math.random()*this.speed);
    else if(this.posY>=0&&this.posX<=0)
    this.posY= this.posY-Math.floor(Math.random()*this.speed);

    this.bubbleSpan.style.top = this.posY + "%";
    this.bubbleSpan.style.left = this.posX + "%";

    const randomSec = this.randomNumber(2000, 200);
    setTimeout(this.handlePosition.bind(this), randomSec); 
  }

  randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randomColor() {
    return `rgba(
        ${this.randomNumber(0, 255)},
        ${this.randomNumber(0, 255)},
        ${this.randomNumber(0, 255)}, 
        ${this.randomNumber(0.1, 1)})`;
  }

 /* bubbleEnd(removingTime = 0) {
    setTimeout(
      () => {
        this.classList.add("bubble--bust");
      },
      removingTime === 0 ? removingTime : removingTime - 100
    );

    setTimeout(() => 
    {
        this.remove();
        new Bubble();
    }, removingTime);
  }*/
}
function BubblesGo(){
 
    new Bubble();
  
  return;
  }
