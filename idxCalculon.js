//calculatron 1.1 
//objetivos:
// Diseño
//variables
var bigNumber1 = []
var bigNumber2 = []
var numeroDos = false
var resultado = 0
var numero1 = document.getElementById("numero1-el")
var simbolo = document.getElementById("simbolo-el")
var numero2 = document.getElementById("numero2-el")
var result = document.getElementById("result-el")
var operacion = 0
 
// numeros 
function numero(a){
  if (numeroDos === false) {
    bigNumber1.unshift(a);
    numero1.textContent += a;
  } else {
    bigNumber2.unshift(a);
    numero2.textContent += a;
  }
}

//operaciones 
function symbol(a, b){
  if(numeroDos === false){
  operacion = a
  numeroDos = true
  simbolo.innerText = b
  }else{
    igual();
    numero1.innerText =  resultado;
    bigNumber1[0] = resultado;
    bigNumber2 = [] ;
    numero2.innerText = "";
    operacion = a;
    result.innerText = "";
    resultado = 0;
   simbolo.innerText = b;
  }
}

function igual(){
  var num1 = 0
  var num2 = 0
  for(i = 0; i < bigNumber1.length; i++){
    num1 += Math.pow(10, i)*bigNumber1[i]
  }
  for(i = 0; i < bigNumber2.length; i++){
    num2 += Math.pow(10, i)*bigNumber2[i]
  }
  if (operacion === 1){
    result.innerText = num1 + num2
    resultado = num1 + num2
  } else if (operacion === 2){
    result.innerText = num1 - num2
    resultado = num1 - num2
  }else if (operacion === 3){
    result.innerText = num1 * num2
    resultado = num1 * num2
  }else if (operacion === 4){
    result.innerText = num1 / num2
    resultado = num1 / num2
  }
}

function reset(){
  num1 = 0
  bigNumber1 = []
  num2 = 0
  bigNumber2 = []
  numeroDos = false
  resultado = 0
  operacion = 0
  numero1.textContent = ""
  simbolo.textContent = ""
  numero2.textContent = ""
  result.textContent = ""
}

function del(){
  if(bigNumber1.length === 0){

  } else if( numeroDos === false ){
    bigNumber1.shift();
    var num1= 0;
    for(i = 0; i < bigNumber1.length; i++){
      num1 += Math.pow(10, i)*bigNumber1[i]
    }
    numero1.textContent = num1;
  } else if (bigNumber2.length === 0){
    operacion = 0;
    simbolo.innerText= "";
    numeroDos === false;
  } else{
    bigNumber2.shift();
    var num2= 0
    for(i = 0; i < bigNumber2.length; i++){
      num2 += Math.pow(10, i)*bigNumber2[i]
    }
    numero2.textContent = num2;
  }
}

