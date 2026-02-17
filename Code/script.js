let startDate = new Date("November 21, 2025");
let today = new Date();
let diff = Math.floor((today - startDate) / (1000*60*60*24));

document.getElementById("daysTogether").innerText =
"We have been together for " + diff + " days 💖";

function nextPage(num){
document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});
document.getElementById("page"+num).classList.add("active");
}

function moveNo(btn){
btn.style.position="absolute";
btn.style.top=Math.random()*70+"%";
btn.style.left=Math.random()*70+"%";
}

/* AUTO SWAP MEMORY */
let index=0;
setInterval(()=>{
const photos=document.querySelectorAll(".photo");
photos.forEach(p=>p.style.opacity="0.4");
photos[index].style.opacity="1";
index=(index+1)%photos.length;
},2000);
