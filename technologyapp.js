const vehicles=[
    {
        'name':"LAUNCH VEHICLE",
        'description':"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        'image':"./assets/technology/image-launch-vehicle-portrait.jpg"
    },
    {
        'name':"SPACEPORT",
        'description':"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        'image':"./assets/technology/image-spaceport-portrait.jpg"
    },
    {
        'name':"SPACE CAPSULE",
        'description':"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        'image':"./assets/technology/image-space-capsule-portrait.jpg"
    }
];


const numbers=document.querySelectorAll(".numbers button");
const vehicleName=document.querySelector(".vehicle-name");
const description=document.querySelector(".vehicle-description");
const image=document.querySelector(".vehicle-image");

for(let i=0;i<vehicles.length;i++){
    numbers[i].addEventListener('click',(e)=>{
vehicleName.textContent=vehicles[i].name;
description.textContent=vehicles[i].description;


if(media.matches){
image.src=vehicles[i].image.slice(0,-12)+"landscape.jpg";
    }
    else{
        image.src=vehicles[i].image;

    }

for(let j=0;j<vehicles.length;j++){
    if(j!=i){
        numbers[j].classList.remove("active-number");
    }
    else{
        numbers[j].classList.add("active-number");
    }
}

    });
}


let media=matchMedia('(max-width:900px)');

media.addEventListener('change',(e)=>{
    if(media.matches){
        image.src=image.src.slice(0,-12)+"landscape.jpg";
        image.style.width="100%";
    }
    else{
        image.src=image.src.slice(0,-13)+"portrait.jpg";
        image.style.width="25rem";
    }
});


let string="dudiiiii";
let newString=string.slice(0,-3);
console.log(newString);


const navbar=document.querySelectorAll(".blur-bg")[3];
const line=document.querySelector(".line");
const menu=document.querySelectorAll(".menu-icon");

const mobileMenu=document.querySelector(".mobile-menu");



const mediaMobile=matchMedia("(max-width:768px");



















if(mediaMobile.matches){
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


mediaMobile.addEventListener("change",(e)=>{
    if(mediaMobile.matches){
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
