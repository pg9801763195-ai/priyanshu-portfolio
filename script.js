/* LOADER */
window.onload=()=>{
document.getElementById("loader").style.display="none";
};

/* CUSTOM CURSOR */
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

/* SCROLL PROGRESS */
window.onscroll=()=>{
let winScroll=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
document.getElementById("progress").style.width=(winScroll/height)*100+"%";
};

/* THEME SAVE */
const toggle=document.getElementById("themeToggle");

if(localStorage.theme==="light"){
document.body.classList.add("light");
}

toggle.onclick=()=>{
document.body.classList.toggle("light");
localStorage.theme=document.body.classList.contains("light")?"light":"dark";
};

/* SKILL ANIMATION */
const bars=document.querySelectorAll(".bar div");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.width=entry.target.dataset.width;
}
});
});

bars.forEach(bar=>observer.observe(bar));
