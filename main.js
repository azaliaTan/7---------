'use strict';

//1

let btn=document.querySelector('.btn');
btn.onclick=function(){
  this.style.display='none';
}


//2

let btn2 = document.querySelectorAll('.btn')[1];
let text = document.getElementById('text');

btn2.onclick=function (){
  text.style.display='none';
}


//3

let btn3 = document.querySelectorAll('.btn')[2];
let text_2 = document.getElementById('text_2');

btn3.onclick=function (){
 if(text_2.style.display=='none'){
    text_2.style.display='block';
    btn3.innerHTML='cкрой текст';
    
 }else{
    text_2.style.display='none';
    btn3.innerHTML='открой текст';
 }
}


//4


document.getElementById('obl').addEventListener('click', (event) => {
    const ball = document.getElementById('ball');
    ball.style.left = `${event.offsetX - 30}px`;
    ball.style.top = `${event.offsetY - 30}px`;
})


