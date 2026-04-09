// script.js
const text = "Cloud Engineer | AWS | Linux | Networking...";
let i = 0;
function typing(){ if(i<text.length){document.getElementById('typing').innerHTML+=text[i];i++;setTimeout(typing,50)}}
window.onload = typing;
