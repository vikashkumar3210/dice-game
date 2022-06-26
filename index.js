
var x=Math.random()*6;
x= Math.floor(x)+1;
if(x===1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(x===2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(x===3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(x===4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(x===5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
// 2nd Player
var y=Math.random()*6;
y= Math.floor(y)+1;
if(y===1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}

else if(y===2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(y===3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(y===4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(y===5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else{
    document.querySelector("img2").setAttribute("src","images/dice6.png");
}

// winner decision annoucement
if(x > y){
document.querySelector(".winner").textContent=("winner is player-1");}
else if(y>x){
  document.querySelector(".winner").textContent=("winner is player-2");
}
else{
  document.querySelector(".winner").textContent=("both player are winner");
}
