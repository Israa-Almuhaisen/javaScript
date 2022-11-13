// function thisIsCallbackFunction (name){ 
//     return `Hello ${name}`  
// } 

// function thisIsMainFunction ( callBackFun , ourClass ) { 
//     return `${callBackFun} , Wellcome in ${ourClass}`
// } 

// console.log(thisIsMainFunction( thisIsCallbackFunction("Walaa") , "JavaScript"));

// --------------------------task1--------------------------------------------------------------------------------


let box1 = document.getElementById('hcolor');

  box1.addEventListener('mouseover', bluee)
function bluee(){
     box1.style.background = 'blue';
     box1.innerHTML=('hello');
 }
 box1.addEventListener('mouseout', red)
 function red(){
    box1.style.background = 'yellow';
    box1.innerHTML=('hello world2');
 }


// // ------------------task2---------------------------------

 

 let box2 = document.getElementById('boxdiv');

 myInterval = setInterval(changeColor2, 2000);

 function changeColor2(){
    
        box2.style.background = 'red';
    }


let box3 = document.getElementById('boxdiv2');
setInterval(changeColor3,1000);


function changeColor3(){
  box3.style.backgroundColor= Randomcolor();
}

function Randomcolor() {
    var letters = '0123456789';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
}




   
// // --------------------task3--------------------------------


function load2(){
    var flagurl = document.getElementById("selectcountry").value;
    document.getElementById('imgflag').src=flagurl;
  }
  
  // ------------------- task4---------------------------------

  
function funshow(showbtn,par,hidebtn){
  document.getElementById(showbtn).style.display = 'none';
  document.getElementById(par).style.display = 'block';
  document.getElementById(hidebtn).style.display = 'block';

}

function funhide(showbtn,par,hidebtn){
  document.getElementById(showbtn).style.display = 'inline';
  document.getElementById(par).style.display = 'none';
  document.getElementById(hidebtn).style.display = 'none';
}

// ___________________________________________________________________________








    


  

