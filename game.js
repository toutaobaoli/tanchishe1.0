class Game{
  constructor(select){
  this.map=document.querySelector(select);
  this. food=new Food(select);
  this.snake=new Snake(select);
  this.timer=0;
  this.score();
  
   
 
  }
  start(){
 this.timer= setInterval(() => {
    this.snake.move();
    if (this.snake.eat(this.food.x,this.food.y)) {
      this.snake.createHead();
      this.food.foodpos();
    }
if (this.snake.die()) {
  const div=document.createElement("div")
 const die = document.querySelector('#die');
  die.autoplay=true;
 this.map.appendChild(div);
 div.className="die"
  div.innerHTML=`GAME<br>OVER`
clearInterval(this.timer)
  
}

}, 250);


  }
  //暂停
  pause(){
    clearInterval(this.timer)
  }
  //重开
  restart(){
window.location.reload();

  }
  //控制
  changeShang(){if (this.snake.direction!="down") {
    
  
this.snake.direction="up"}

  }
  changeXia(){
    if (this.snake.direction!="up") {
      
    
    this.snake.direction="down"}
      }
      changeZuo(){if (this.snake.direction!="right") {
        
      
        this.snake.direction="left"}
          }
          changeYou(){if (this.snake.direction!="left") {
          
          
            this.snake.direction="right"}
              }
score(){
  setInterval(() => {
    const score=document.querySelector("#score")
this.score=this.snake.snake_list.length-3;
this.lScore=0;
if (this.score>this.lScore) {
  localStorage.setItem("lScore", this.score);
}
this.lScore=localStorage.getItem("lScore");
score.innerHTML=`得分<br>${this.score}`
const lScore=document.querySelector("#lScore")
lScore.innerHTML=`历史最高<br>${this.lScore}`
  }, 10);
}


}