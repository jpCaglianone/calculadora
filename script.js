
//let temSinal = false
//let temPonto = false
// let clear
let visor = document.getElementById("visor");
visor.innerText = 0;


let acumulador = ""; 


function botaoUm(){
  acumulador += "1";
  visor.innerText = acumulador;
}
function botaoDois(){
  acumulador += "2"; 
  visor.innerText = acumulador;
}
function botaoTres(){
  acumulador += "3"; 
  visor.innerText = acumulador;
}
function botaoQuatro(){
  acumulador += "4"; 
  visor.innerText = acumulador;
}
function botaoCinco(){
  acumulador += "5"; 
  visor.innerText = acumulador;
}
function botaoSeis(){
  acumulador += "6"; 
  visor.innerText = acumulador;
}
function botaoSete(){
  acumulador += "7"; 
  visor.innerText = acumulador;
}
function botaoOito(){
  acumulador += "8"; 
  visor.innerText = acumulador;
}
function botaoNove(){
  acumulador += "9"; 
  visor.innerText = acumulador;
}
function botaoZero(){

  if(acumulador!="" && acumulador[0]!="0"){
    acumulador += "0"; 
    visor.innerText = acumulador;
  }
}
function limpar(){
   acumulador = "";
   visor.innerText = "0";
}

// import - export