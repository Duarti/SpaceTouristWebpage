const crew=[
    {
        'name':"DOUGLAS HURLEY",
        'job':"COMMANDER",
        'description':"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        'image':"./assets/crew/image-douglas-hurley.png"
    },
    {
        'name':"MARK SHUTTLEWORTH",
        'job':"MISSION SPECIALIST",
        'description':"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        'image':"./assets/crew/image-mark-shuttleworth.png"
    },
    {
        'name':"VICTOR GLOVER",
        'job':"PILOT",
        'description':"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        'image':"./assets/crew/image-victor-glover.png"
    },
    {
        'name':"ANOUSHEH ANSAR",
        'job':"FLIGHT ENGINEER",
        'description':"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        'image':"./assets/crew/image-anousheh-ansari.png"
    }
];

const dots=document.querySelectorAll(".dot");
const crewName=document.querySelector(".crew-name");
const job=document.querySelector(".crew-job");
const description=document.querySelector(".crew-description");
const image=document.querySelector(".crew-image");


for(let i=0;i<crew.length;i++){
    dots[i].addEventListener('click',(e)=>{
crewName.textContent=crew[i].name;
job.textContent=crew[i].job;
description.textContent=crew[i].description;
image.src=crew[i].image;

for(let j=0;j<dots.length;j++){
if(i!=j){
    dots[j].classList.remove("active");
}
else{
    dots[j].classList.add("active");
}
}



    });
}

console.log(dots);
setTimeout(()=>console.log(dots),5000);


const navbar=document.querySelectorAll(".blur-bg")[3];
const line=document.querySelector(".line");
const menu=document.querySelectorAll(".menu-icon");

const mobileMenu=document.querySelector(".mobile-menu");



const media=matchMedia("(max-width:768px");



















if(media.matches){
    navbar.style.display="none";
    menu[0].style.display="flex";
    line.style.marginRight="2rem";
  
    }
    else{
        navbar.style.display="flex";
        menu[0].style.display="none";
        line.style.marginRight="-3rem";
        mobileMenu.classList.remove("menu-on");
        mobileMenu.classList.add("menu-off");
    
 
    }


media.addEventListener("change",(e)=>{
    if(media.matches){
    navbar.style.display="none";
    menu[0].style.display="flex";
    line.style.marginRight="2rem";
 
    }
    else{
        navbar.style.display="flex";
        menu[0].style.display="none";
        line.style.marginRight="-3rem";
        mobileMenu.classList.remove("menu-on");
        mobileMenu.classList.add("menu-off");
 
    }
});

menu[0].addEventListener("click",(e)=>{
if(mobileMenu.classList.contains("menu-off")){
    mobileMenu.classList.remove("menu-off");
    mobileMenu.classList.add("menu-on");
}
else{
    mobileMenu.classList.remove("menu-on");
    mobileMenu.classList.add("menu-off");
}
});

menu[1].addEventListener("click",(e)=>{
    if(mobileMenu.classList.contains("menu-off")){
        mobileMenu.classList.remove("menu-off");
        mobileMenu.classList.add("menu-on");
    }
    else{
        mobileMenu.classList.remove("menu-on");
        mobileMenu.classList.add("menu-off");
    }
    });