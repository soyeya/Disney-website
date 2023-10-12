
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

const display1 = document.querySelector(".display1");
const movingScreen = document.querySelector(".moveX");

document.ondragstart = function() {

    return false;

  };



const mouseEvt = (event) => {

    var currentX = event.pageX;
    movingScreen.style.left = '-' + currentX + 'px';

  }

  movingScreen.onmousedown = function(ev){

    console.log('down');
    movingScreen.addEventListener("mousemove" ,  mouseEvt);

  }


  movingScreen.onmouseup = function(){

    console.log('up');
    movingScreen.removeEventListener("mousemove" ,  mouseEvt);
 
  }


