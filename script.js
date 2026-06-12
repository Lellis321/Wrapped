function nextSlide(){

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

}

const inicio = new Date("2023-08-01");

function atualizar(){

const hoje = new Date();

const dias =
Math.floor(
(hoje-inicio)/
(1000*60*60*24)
);

document.getElementById("contador")
.innerHTML =
dias + "<br><span style='font-size:25px'>dias</span>";

}

atualizar();

for(let i=0;i<40;i++){

let heart =
document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=
Math.random()*100+"vw";

heart.style.top=
Math.random()*100+"vh";

heart.style.opacity=".15";

heart.style.pointerEvents="none";

heart.style.fontSize=
(Math.random()*20+10)+"px";

document.body.appendChild(heart);

}
