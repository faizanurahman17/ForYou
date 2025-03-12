import { randomChange } from "./fn.js";
import { openBook } from "./fn.js";
import { nextContent } from "./fn.js";


const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const main = document.querySelector('.closed-wrapper');
const next = document.querySelector('.next');
const name = document.querySelector('.name');
const love = document.querySelector('.theLove');

btn.addEventListener('click', () => openBook(btn,main));
next.addEventListener('click', () => {
    let result = confirm("Are U Sure?");
    if(result){
        alert("Hope U'll Like It! (plz ignore my typoes)");
        nextContent(next,name,love);
    } else{
        location.reload();
    }
});
randomChange(body,next);