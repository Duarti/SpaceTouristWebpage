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

    const logo=document.querySelector(".logo");
    const tl=new TimelineMax();
    tl.fromTo(logo,0.5,{opacity:0,x:30},{opacity:1,x:0});

    console.log(logo);