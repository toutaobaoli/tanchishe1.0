class Snake{
constructor(celomata){
this.map=document.querySelector(celomata)
this.direction='down'
this.snake_list=[]
this.createSnake();

}
createHead(){
  const head=this.snake_list[0];
  const pos={x:0,y:0}
  if (head) {
    switch (this.direction) {
      case "left":
        pos.x=head.offsetLeft-20
        pos.y=head.offsetTop;
        break;
        case "right":
          pos.x=head.offsetLeft+20
          pos.y=head.offsetTop;
          
        break;
        case "up":
        pos.x=head.offsetLeft
        pos.y=head.offsetTop-20;
        break;
        case "down":
        pos.x=head.offsetLeft
        pos.y=head.offsetTop+20;
        break;
    
      default:
        break;
    }
    head.className="body"
  }
  
const div=document.createElement("div")
div.className="head"

this.snake_list.unshift(div)
div.style.left=pos.x+"px"
div.style.top=pos.y+"px"
this.map.appendChild(div)
}

createSnake(){
for (let i = 0; i < 3; i++) {
  
  this.createHead()
  
}

}
move(){
 const body=this.snake_list.pop(); 

body.remove();
this.createHead()
}
eat(foodX,foodY){
const head=this.snake_list[0];
const headX=head.offsetLeft;
const headY=head.offsetTop;
if (foodX===headX&&foodY===headY) {
  return true;
}
return false;
}
die(){
  const head=this.snake_list[0];
  const headX=head.offsetLeft;
const headY=head.offsetTop;
if (headX<0||headY<0||headX>=this.map.clientWidth||headY>=this.map.clientHeight) {
  return true;
}
return false;
}



}

