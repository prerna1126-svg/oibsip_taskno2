console.log("Scirpt running..")
document.querySelector('.menu').scrollTo.display= 'none';
document.querySelector('.menu').addEventListener("click", ()=>{document.querySelector('.up').classList.toggle('upGo');

if(document.querySelector('.up').classList.contains('upGo')){
    document.querySelector('.menu').style.display='inline'
}
else
{
    document.querySelector('.menu').style.display='none'
}
})

var i = 0;
var txt = 'Welcome to my Portfolio :)'
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();