const text="Welcome to my Portfolio 💜";

const typing=document.querySelector(".typing");

if(typing){

let i=0;

function type(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(type,80);

}

}

type();

}
