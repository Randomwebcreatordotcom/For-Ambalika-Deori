// ===============================
// TYPEWRITER EFFECT
// ===============================

const message = `Dear Ambalika ❤️,

From the day you came into my life,
everything became brighter.

Your smile makes my day,
your laugh is my favorite sound,
and every moment with you becomes
a beautiful memory.

Thank you for being such an amazing person.

I hope this little website reminds you
how special you are to me.

I Love You ❤️

Forever Yours ❤️`;

const typing = document.getElementById("typing");

let index = 0;

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

window.onload = typeWriter;


// ===============================
// GIFT POPUP
// ===============================

const gift = document.getElementById("giftBox");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

gift.onclick = ()=>{

    popup.style.display="flex";

}

closeBtn.onclick = ()=>{

    popup.style.display="none";

}

window.onclick = function(e){

    if(e.target==popup){

        popup.style.display="none";

    }

}


// ===============================
// MUSIC
// ===============================

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=function(){

if(!playing){

music.play();

musicBtn.innerHTML="⏸️";

playing=true;

}

else{

music.pause();

musicBtn.innerHTML="🎵";

playing=false;

}

}


// ===============================
// FLOATING HEARTS
// ===============================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-50px";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.transition="8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="110vh";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,600);


// ===============================
// FLOWERS
// ===============================

const flowers=["🌸","🌹","🌺","🌷","💐"];

function createFlower(){

const flower=document.createElement("div");

flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

flower.style.position="fixed";

flower.style.left=Math.random()*100+"vw";

flower.style.top="-50px";

flower.style.fontSize=(22+Math.random()*25)+"px";

flower.style.pointerEvents="none";

flower.style.transition="10s linear";

flower.style.zIndex="999";

document.body.appendChild(flower);

setTimeout(()=>{

flower.style.top="110vh";

flower.style.transform="rotate(360deg)";

flower.style.opacity="0";

},100);

setTimeout(()=>{

flower.remove();

},10000);

}

setInterval(createFlower,900);


// ===============================
// SPARKLES
// ===============================

function sparkle(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(10+Math.random()*20)+"px";

star.style.opacity=Math.random();

star.style.pointerEvents="none";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1500);

}

setInterval(sparkle,250);


// ===============================
// HERO BUTTON ANIMATION
// ===============================

const btn=document.querySelector("button");

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});


// ===============================
// IMAGE HOVER GLOW
// ===============================

document.querySelectorAll(".images img").forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.boxShadow="0 0 40px pink";

});

img.addEventListener("mouseout",()=>{

img.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";

});

});


// ===============================
// SIMPLE CONFETTI
// ===============================

gift.addEventListener("click",()=>{

for(let i=0;i<80;i++){

const confetti=document.createElement("div");

confetti.innerHTML="🎉";

confetti.style.position="fixed";

confetti.style.left=(window.innerWidth/2)+"px";

confetti.style.top=(window.innerHeight/2)+"px";

confetti.style.fontSize=(10+Math.random()*25)+"px";

confetti.style.pointerEvents="none";

document.body.appendChild(confetti);

const x=(Math.random()-0.5)*700;

const y=(Math.random()-0.5)*700;

confetti.animate([

{

transform:"translate(0,0)",

opacity:1

},

{

transform:`translate(${x}px,${y}px)`,

opacity:0

}

],{

duration:1800,

easing:"ease-out"

});

setTimeout(()=>{

confetti.remove();

},1800);

}

});