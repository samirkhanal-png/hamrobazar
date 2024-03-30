//Slider Controls written by Samir Khanal
const slider=document.querySelector(".slider");
const slides=document.querySelectorAll(".slide");
const prevBtn=document.querySelector(".prev-slider");
const nextBtn=document.querySelector(".next-slider");

let slideIndex=0;

slides[slideIndex].classList.add('.active');

prevBtn.addEventListener('click',prevSlide);
nextBtn.addEventListener('click',nextSlide);

function prevSlide(){
  slides[slideIndex].classList.remove('active');
  slideIndex=(slideIndex===0)?slides.length-1:slideIndex-1;
  slides[slideIndex].classList.add('active');
  slider.style.transform=`translateX(-${slideIndex*100}%)`;
}

function nextSlide(){
  slides[slideIndex].classList.remove('active');
  slideIndex=(slideIndex===slides.length-1)?0:slideIndex+1;
  slides[slideIndex].classList.add('active');
  slider.style.transform=`translateX(-${slideIndex*100}%)`;
}

//Countdown timer logic-written by Samir Khanal
const endDate="Sun May 18 2024 10:04:38 GMT+0530 (India Standard Time)";//Time to end the sales(Edit your date here)
var input_field=document.querySelectorAll("#end");
console.log(input_field);

function timer(){
  const end=new Date(endDate);
  console.log(end)
  const now=new Date();
  console.log(now);
  const diff=(end-now)/1000;
  console.log(diff);
  if(diff<=0){       //Stopping the timer when the time is ended
    return;  
  }
  input_field[0].value=Math.floor(diff/86400);
  rem_sec1=(diff%86400);
  rem_hours=rem_sec1/3600;
  input_field[1].value=Math.floor(rem_hours);
  rem_sec2=rem_sec1%3600;
  rem_min=rem_sec2/60;
  input_field[2].value=Math.floor(rem_min);
  rem_secf=rem_sec2%60;
  input_field[3].value=Math.floor(rem_secf);
}
//Calling Timer
timer();

//Calling Timer every 1sec 
setInterval(()=>{
  timer()
},1000);

//Script for product carousel written by Samir Khanal
const element = document.querySelector(".carousel-track");
const next=document.querySelector(".next");
next.addEventListener("click",function scrollEvent1(){
  element.scrollBy({ 
    left:200, 
    behavior: "smooth" 
  });
})

const prev=document.querySelector(".prev");
prev.addEventListener("click",function scrollEvent2(){
  element.scrollBy({ 
    left:-200, 
    behavior: "smooth" 
  });
})

//make heart red

//Code for Hamburger menu written by Samir Khanal
let ham_menu=document.querySelector(".hamburger_menu");
let ham_btn=document.querySelector(".hamburger_btn");
let body=document.querySelector("body");

