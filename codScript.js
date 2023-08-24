window.onload=navvis();
function navvis(){
  
  document.getElementById("header").style.top="32.5px";
  window.addEventListener('wheel', function resettop(){
    document.getElementById("header").style.top="-100px";
    
  });
}

var scrollableElement = document.body; 

window.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    document.getElementById("header").style.opacity="1";
    document.getElementById("header").style.transform="translateY(132.5px)";
    
   
    
  } 
  if(window.scrollY < 320 || window.screenY == 0){
    bg0();
  }
 
  if(window.scrollY > 320 ){
    document.getElementById("header").style.transform="translateY(132.5px)";
    document.getElementById("header").style.opacity="1";
  }
 
  if(event.wheelDelta > 0 ){
    document.getElementById("header").style.transform="translateY(132.5px)";
    document.getElementById("header").style.opacity="1";
   
   
  }
  if(event.wheelDelta > 0 && window.screenY > 320 ){
    document.getElementById("header").style.transform="translateY(132.5px)";
    document.getElementById("header").style.opacity="1";

   
  }
  if(event.wheelDelta > 0 && window.screenY < 320 ){
    document.getElementById("header").style.transform="translateY(132.5px)";
    document.getElementById("header").style.opacity="1";
  
   
  }
  
  if(event.wheelDelta < 0){
    document.getElementById("header").style.transform="translateY(0px)";
    document.getElementById("header").style.top="-100px";
    document.getElementById("header").style.opacity="0";
   
   
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}



function vidplaybc(){
document.getElementById("videobc").style.display="block";
document.getElementById("videobc").style.zIndex="5";
document.getElementById("videobc").currentTime="0";
document.getElementById("videobc").muted="0";


 }
 
 function vidstopbc(){
    document.getElementById("videobc").style.display="none";

    document.getElementById("videobc").style.zIndex="1";
    

 }

 
 function displaygamesnav(){
   document.getElementById("gamesnav").style.display="block";
   
 }
 function hidegamesnav(){
   document.getElementById("gamesnav").style.display="none";
 }
 function displayesportsnav(){
   document.getElementById("esportsnav").style.display="block";
   
 }
 function hideesportsnav(){
   document.getElementById("esportsnav").style.display="none";
 }
 function displayshopnav(){
   document.getElementById("shopnav").style.display="block";
   
 }
 function hideshopnav(){
   document.getElementById("shopnav").style.display="none";
 }
 