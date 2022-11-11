let botao1 = document.getElementById("um");
let botao2 = document.getElementById("dois");
let visor = document.getElementById("visor");
visor.innerText = 0;
let acumulador = ""; 

function botaoUm(){
  acumulador += "1"; // acumulador = acumulador + "1";
  visor.innerText = acumulador;
}

function botaoDois(){
  acumulador += "2"; 
  visor.innerText = acumulador;
}

