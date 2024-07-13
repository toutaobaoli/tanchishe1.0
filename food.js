
class Food{
  
constructor(select){
  this.map=document.querySelector(select);
  this.food=document.createElement("div")
  this.food.className="food";
  this.map.appendChild(this.food)
  this.x=0
  this.y=0
  this.foodpos();
}
foodpos(){
const w_num=this.map.clientWidth/20
const h_num=this.map.clientHeight/20
let redom_numx=Math.floor (Math.random()*11)*20
let redom_numy=Math.floor (Math.random()*11)*20

this.x=redom_numx;
this.y=redom_numy;
this.food.style.left=this.x+"px"
this.food.style.top=this.y+"px"
}

}