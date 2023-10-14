const header = document.querySelector("header");
const htmlHeight = document.querySelector("html");
const bottomDisplay = document.querySelector(".bottomDisplay");

window.addEventListener("scroll" , () => {

    let scrollY = window.scrollY;
    console.log(scrollY);


    if(scrollY > 10) {

       header.classList.add("changes");

    }else{

      header.classList.remove("changes");

    };
    if(scrollY >  1200){
  
      bottomDisplay.classList.add("more");
       
    }else{

      bottomDisplay.classList.remove("more");
    };
  
});


const accountWrap = document.querySelector(".accountWrap");
const clickProfil = document.querySelector(".clickProfil");
let accountList = document.querySelector(".accountList");

const accountOpen = () => {

accountWrap.addEventListener("mouseover" , () => {

    accountList.classList.add("open");

});

accountWrap.addEventListener("mouseleave" , () => {

    accountList.classList.remove("open");

});

};

accountOpen();


//mainSlider

const $main = document.getElementById("main");
const slideContainer = document.querySelector(".sliderWrap");
const sliderWrap = document.querySelector(".sliderWrap .mainSlide");
const mainBtnCont = document.querySelector(".mainBtn .mainClick");


let mainSlideList = document.querySelectorAll(".sliderWrap .mainSlide li");
console.log(mainSlideList);
let mainBtnList = document.querySelectorAll(".mainBtn .mainClick li");
console.log(mainBtnList);

const mainslideControll = () => {


  for(var i = 0; i <  mainSlideList.length; i++ ){

      mainSlideList[i].setAttribute("class" , `mainslides${i}`);

  };

};

mainslideControll();


function mainslideMoving(){

  const mainSlideFrist = document.querySelector(".mainSlide li:last-child");
  sliderWrap.prepend(mainSlideFrist);

 setInterval( function(){

      var $hover = $main.classList.contains("hover");

      if($hover == true){

        }else{

          const mainSlideLast = document.querySelector(".mainSlide li:first-child");
          sliderWrap.classList.add("next");

            setTimeout(function(){

              sliderWrap.append(mainSlideLast);
              console.log(mainSlideLast);
              sliderWrap.classList.remove("next");

            },800)

    };

 },1500);
};


mainslideMoving();


$main.addEventListener("mouseover" , function(){

  $main.classList.add("hover");

});

$main.addEventListener("mouseout" , function(){

  $main.classList.remove("hover");

});



const mainslidePrev = document.querySelector(".mainClick .mainslidePrev");
const mainslideNext = document.querySelector(".mainClick .mainslideNext");


const mainBtnmove = () => {

  mainslidePrev.addEventListener("click" , function(ev){

    var mainSlideFrist = document.querySelector(".mainSlide li:last-child");
    sliderWrap.classList.add("prev");
    console.log('prev동작');

    setTimeout(function(){

      sliderWrap.classList.remove("prev");
      console.log('prev중단');
      sliderWrap.prepend(mainSlideFrist);

    },800);

  });

  mainslideNext.addEventListener("click" , function(ev){

    var mainSlideLast = document.querySelector(".mainSlide li:first-child");
    sliderWrap.classList.add("next");
    console.log('next동작');

    setTimeout(function(){

      sliderWrap.classList.remove("next");
      console.log('next중단');
      sliderWrap.append(mainSlideLast);

    },800);

  });

};

mainBtnmove();


//dispalyWrap 

let display_slideList1 = [

   "./img/lineImg1.jpeg",
   "./img/lineImg2.jpeg",
   "./img/lineImg3.jpeg",
   "./img/lineImg4.jpeg",
   "./img/lineImg5.jpeg",
   "./img/lineImg6.jpeg",
   "./img/lineImg7.jpeg",
   "./img/lineImg8.jpeg",
   "./img/lineImg9.jpeg",
   "./img/lineImg10.jpeg",
   "./img/lineImg11.jpeg",

];
let display_slideList2 = [

   "./img/line2Img1.jpeg",
   "./img/line2Img2.jpeg",
   "./img/line2Img3.jpeg",
   "./img/line2Img4.jpeg",
   "./img/line2Img5.jpeg",
   "./img/line2Img6.jpeg",
   "./img/line2Img7.jpeg",
   "./img/line2Img8.jpeg",
   "./img/line2Img9.jpeg",
   "./img/line2Img10.jpeg",
   "./img/line2Img11.jpeg",

];

let display_slideList3 = [


  "./img/line3Img1.jpeg",
  "./img/line3Img2.jpeg",
  "./img/line3Img3.jpeg",
  "./img/line3Img4.jpeg",
  "./img/line3Img5.jpeg",
  "./img/line3Img6.jpeg",
  "./img/line3Img7.jpeg",
  "./img/line3Img8.jpeg",
  "./img/line3Img9.jpeg",
  "./img/line3Img10.jpeg",
  "./img/line3Img11.jpeg",

   
]

let display_slideList4 = [


  "./img/line4Img1.jpeg",
  "./img/line4Img2.jpeg",
  "./img/line4Img3.jpeg",
  "./img/line4Img4.jpeg",
  "./img/line4Img5.jpeg",
  "./img/line4Img6.jpeg",
  "./img/line4Img7.jpeg",
  "./img/line4Img8.jpeg",
  "./img/line4Img9.jpeg",
  "./img/line4Img10.jpeg",
  "./img/line4Img11.jpeg",

   
]

let display_slideList5 = [


  "./img/line5Img1.jpeg",
  "./img/line5Img2.jpeg",
  "./img/line5Img3.jpeg",
  "./img/line5Img4.jpeg",
  "./img/line5Img5.jpeg",
  "./img/line5Img6.jpeg",
  "./img/line5Img7.jpeg",
  "./img/line5Img8.jpeg",
  "./img/line5Img9.jpeg",
  "./img/line5Img10.jpeg",
  "./img/line5Img11.jpeg",

   
]
let display_slideList6 = [


  "./img/line6Img1.jpeg",
  "./img/line6Img2.jpeg",
  "./img/line6Img3.jpeg",
  "./img/line6Img4.jpeg",
  "./img/line6Img5.jpeg",
  "./img/line6Img6.jpeg",
  "./img/line6Img7.jpeg",
  "./img/line6Img8.jpeg",
  "./img/line6Img9.jpeg",
  "./img/line6Img10.jpeg",
  "./img/line6Img11.jpeg",

   
]

const movingScreen = document.querySelector(".moveX");
const movingScreen2 = document.querySelector(".move2X");
const movingScreen3 = document.querySelector(".move3X");
const movingScreen4 = document.querySelector(".move4X");
const movingScreen5 = document.querySelector(".move5X");
const movingScreen6 = document.querySelector(".move6X");


var display1Cont = "";

const display1 = () => {

  for(var i = 0; i < display_slideList1.length; i++){

     display1Cont += `<li class="borderLine"><a href="#"><img src="${display_slideList1[i]}" alt="display1_${[i]}"></a></li>`
  
  };

  movingScreen.innerHTML = display1Cont;

};

display1();

var display2Cont = "";

const display2 = () => {

  for(var i = 0; i < display_slideList2.length; i++){

     display2Cont += `<li class="borderLine"><a href="#"><img src="${display_slideList2[i]}" alt="display2_${[i]}"></a></li>`

  
  };

  movingScreen2.innerHTML = display2Cont;

};

display2();

var display3Cont = "";

const display3 = () => {

  for(var i = 0; i < display_slideList3.length; i++){

     display3Cont += `<li class="borderLine"><a href="#"><img src="${display_slideList3[i]}" alt="display3_${[i]}"></a></li>`

  
  };

  movingScreen3.innerHTML = display3Cont;

};

display3();

var display4Cont = "";

const display4 = () => {

  for(var i = 0; i < display_slideList4.length; i++){

     display4Cont += `<li class="borderLine"><a href="#"><img src="${display_slideList4[i]}" alt="display4_${[i]}"></a></li>`

  
  };

  movingScreen4.innerHTML = display4Cont;

};

display4();

var display5Cont = "";

const display5 = () => {

  for(var i = 0; i < display_slideList5.length; i++){

     display5Cont += `<li class="borderLine"><a href="#"><img src="${display_slideList5[i]}" alt="display5_${[i]}"></a></li>`

  
  };

  movingScreen5.innerHTML = display5Cont;

};

display5();

var display6Cont = "";

const display6 = () => {

  for(var i = 0; i < display_slideList6.length; i++){

     display6Cont += `<li class="borderLine"><a href="#"><img src="${display_slideList6[i]}" alt="display6_${[i]}"></a></li>`

  
  };

  movingScreen6.innerHTML = display6Cont;

};

display6();





//displayWrap scroll


document.ondragstart = function() {

    return false;

  };


const mouseEvt = (event) => {

    var currentX = event.pageX;
    console.log(currentX);
    movingScreen.style.left = '-' + currentX + 'px';

  };

  const display1Moving = () => {

    movingScreen.onmousedown = function(){
  
      movingScreen.addEventListener("mousemove" , mouseEvt);
  
        
    };
  
    movingScreen.onmouseup = function(){
  
      movingScreen.removeEventListener("mousemove" ,  mouseEvt);
   
    };

  };

  display1Moving();



  const mouseEvt2 = (e) => {

    var currentX = e.pageX;
    movingScreen2.style.left = '-' + currentX + 'px';
  
  };

  const display2Moving = () => {

  movingScreen2.onmousedown = function(){

    movingScreen2.addEventListener("mousemove" , mouseEvt2)
  };

  movingScreen2.onmouseup = function(){

    movingScreen2.removeEventListener("mousemove" , mouseEvt2)
  };
  
};

display2Moving();


  const mouseEvt3 = (e) => {

    var currentX = e.pageX;
    movingScreen3.style.left = '-' + currentX + 'px';
  
  };

  const display3Moving = () => {

  movingScreen3.onmousedown = function(){

    movingScreen3.addEventListener("mousemove" , mouseEvt3)
  };

  movingScreen3.onmouseup = function(){

    movingScreen3.removeEventListener("mousemove" , mouseEvt3)
  };
  
};

display3Moving();



  const mouseEvt4 = (e) => {

    var currentX = e.pageX;
    movingScreen4.style.left = '-' + currentX + 'px';
  
  };

  const display4Moving = () => {

  movingScreen4.onmousedown = function(){

    movingScreen4.addEventListener("mousemove" , mouseEvt4)

  };

  movingScreen4.onmouseup = function(){

    movingScreen4.removeEventListener("mousemove" , mouseEvt4)
  };
  
};

display4Moving();

  const mouseEvt5 = (e) => {

    var currentX = e.pageX;
    movingScreen5.style.left = '-' + currentX + 'px';
  
  };

  const display5Moving = () => {

  movingScreen5.onmousedown = function(){

    movingScreen5.addEventListener("mousemove" , mouseEvt5)

  };

  movingScreen5.onmouseup = function(){

    movingScreen5.removeEventListener("mousemove" , mouseEvt5)
  };
  
};

display5Moving();

  const mouseEvt6 = (e) => {

    var currentX = e.pageX;
    movingScreen6.style.left = '-' + currentX + 'px';
  
  };

  const display6Moving = () => {

  movingScreen6.onmousedown = function(){

    movingScreen6.addEventListener("mousemove" , mouseEvt6)

  };

  movingScreen6.onmouseup = function(){

    movingScreen6.removeEventListener("mousemove" , mouseEvt6)
  };
  
};

display6Moving();




  //BannerSlider

  const BannerSlider = document.querySelector(".bannerSlider");
  const BannerSlides = document.querySelectorAll(".bannerSlider li");
  const BannerBtn = document.getElementById("next");

  const BannerControll = () => {

  BannerBtn.addEventListener("click" , () => {

    let last = document.querySelector(".bannerSlider li:first-child");

  for(var i = 0; i < BannerSlides.length; i++){

     BannerSlides[i].setAttribute('class' , `Bannerslides${i}`);
      
     if(BannerSlides[i].classList.contains(`Bannerslides${i}`)){

         BannerSlides[i].classList.add("move");

      } else{};

    };
            
    setTimeout(() => {

      for(var i = 0; i < BannerSlides.length; i++){

      BannerSlides[i].setAttribute('class' , `Bannerslides${i}`);
      BannerSlides[i].classList.remove("move");
      BannerSlider.append(last);

      };

    },800);


  });

};


BannerControll();
