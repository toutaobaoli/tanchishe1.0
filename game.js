class Game{

  constructor(select){

  this.map=document.querySelector(select);

  this. food=new Food(select);

  this.snake=new Snake(select);

  this.timer=0;

  this.timer2=0;

  this.timer3=0;

  this.timer4=0;

  this.timer5=0;

  

  this.kongnandu2=true;

  this.kongnandu3=true;

  this.kongnandu4=true;

  this.kongnandu5=true;

  this.score();

  this.nandu();

   

 

  }

  start(){

 this.timer= setInterval(() => {

    this.snake.move();

    document.getElementById('nandu').innerHTML=`难度:简单<br>下一难度开启条件:10分`

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

start2(){



 this.timer2= setInterval(() => {



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

clearInterval(this.timer2)

  

}



}, 200);





  }

start3(){



 this.timer3= setInterval(() => {



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

clearInterval(this.timer3)

  

}



}, 150);





  }

  

  start4(){



 this.timer4= setInterval(() => {



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

clearInterval(this.timer4)

  

}



}, 100);





  }

  start5(){



 this.timer5= setInterval(() => {



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

clearInterval(this.timer5)

  

}



}, 50);





  }

  

 nandu(){

   setInterval(() => {

if (this.score==10&&this. kongnandu2){

  clearInterval(this.timer)

  document.getElementById('nandu').innerHTML=`难度:普通<br>下一难度开启条件:20分`

  this.start2();

  this.kongnandu2=false;

}

if (this.score==20&&this. kongnandu3){



  clearInterval(this.timer2)

document.getElementById('nandu').innerHTML=`难度:困难<br>下一难度开启条件:30分`

  this.start3();

  this.kongnandu3=false;

}

if (this.score==30&&this. kongnandu4){



  clearInterval(this.timer3)

  document.getElementById('nandu').innerHTML=`难度:地狱<br>无尽冲刺开启条件:40分`

  this.start4();

  this.kongnandu4=false;

}

if (this.score==40&&this. kongnandu5){



  clearInterval(this.timer4)

document.getElementById('nandu').innerHTML=`无尽冲刺,冲击更高的分数`

  this.start5();

  this.kongnandu5=false;

}

   



}, 10);

   

   

 }

















 }
