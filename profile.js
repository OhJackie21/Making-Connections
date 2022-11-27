var ohj = document.getElementById('ohJ');
function change(){
    if(ohj.innerText == "JackieMay"){
        ohj.innerText = "Jackie Oh";
    }else{
        ohj.innerText = "JackieMay";
        
    }
};

var todd = document.querySelector(".todd");
var num = document.getElementById("num2");
var num2 = document.querySelector(".five");
var phil2 = document.getElementById("phil");
var count = 2;
var count2 = 500;

 function accept(){
    todd.remove();
    count--;
    count2++;
    num.innerText = count;
    num2.innerText = count2;
    phil2.style.marginTop = "0px";
};

function deny(){
    todd.remove();
    count--;
    num.innerText = count;
    phil2.style.marginTop = "0px";
};


var phil = document.getElementById("phil");
var num = document.getElementById("num2");
var num2 = document.querySelector(".five");
var count = 2;
var count2 = 500;

 function accept2(){
    phil.remove();
    count--;
    count2++;
    num.innerText = count;
    num2.innerText = count2;
};

function deny2(){
    phil.remove();
    count--;
    num.innerText = count;
};