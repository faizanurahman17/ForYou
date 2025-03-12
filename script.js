import { randomChange } from "./fn.js";
import { openBook } from "./fn.js";
import { nextContent } from "./fn.js";
import { createRoses } from "./fn.js";


const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const main = document.querySelector('.closed-wrapper');
const next = document.querySelector('.next');
const name = document.querySelector('.name');
const love = document.querySelector('.theLove');
const tune = new Audio('./tune.mp3');

btn.addEventListener('click', () => openBook(btn,main));
next.addEventListener('click', () => {
    let result = confirm("Are U Sure?");
    if(result){
        alert("Hope U'll Like It! (plz ignore my typoes)");
        tune.loop = true;
        tune.autoplay = true;
        tune.play();
        nextContent(next,name,love);
    } else{
        location.reload();
        // tune.pause();
    }
});
randomChange(body,next);
createRoses();