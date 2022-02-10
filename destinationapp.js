
const planets=[{
    'name':"MOON",
    'image':"./assets/destination/image-moon.png",
    'description':"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    'avgDistance':"384,400 KM",
'travelTime':"3 DAYS"
},
{
    'name':"MARS",
    'image':"./assets/destination/image-mars.png",
    'description':"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    'avgDistance':"225 MIL. KM",
'travelTime':"9 MONTHS"
},
{
    'name':"EUROPA",
    'image':"./assets/destination/image-europa.png",
    'description':"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    'avgDistance':"628 MIL. KM",
'travelTime':"3 YEARS"
},
{
    'name':"TITAN",
    'image':"./assets/destination/image-titan.png",
    'description':"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    'avgDistance':"1.6 BIL. KM",
'travelTime':"7 YEARS"
}];



const image=document.querySelector(".planet-image");
const planetName=document.querySelector(".planet-name");
const description=document.querySelector(".planet-description");
const avgDistance=document.querySelector(".est-avg-distance");
const travelTime=document.querySelector(".est-travel-time");
const buttons=document.querySelectorAll('.planet-item button');
const textbox=document.querySelector(".text-box");
const mobileImage=document.querySelector(".mobile-planet-image");



for(let i=0;i<planets.length;i++){
    buttons[i].addEventListener('click',(e)=>{
image.src=planets[i].image;
mobileImage.src=planets[i].image;
planetName.textContent=planets[i].name;
description.textContent=planets[i].description;
avgDistance.textContent=planets[i].avgDistance;
travelTime.textContent=planets[i].travelTime;

    });
}




let media=matchMedia("(max-width:900px)");

media.addEventListener('change',(e)=>{
        mobileImage.classList.toggle("hidden")
        image.classList.toggle("hidden");
    });



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