// Programação procedural - exemplo básico
let numero1 = 10;
let numero2 = 20;

function add(n1, n2){
    return n1 + n2;
}

let z = add(numero1, numero2);
console.log(z);

//exemplo um pouco maior, trocando let por var e testando entradas manuais nas linhas 25 e 26

let horaExtra = 100;
let qtHoras = 20;
let salarioFixo = 5000;

function calculaSalario(horaExtra, qtHoras) {
    return salarioFixo + (horaExtra * qtHoras);
}

var total = calculaSalario(horaExtra,qtHoras);
console.log(total)

var total = calculaSalario(0,0);
console.log(total)

/*
POO
Atributo, variável ou propriedade = está 
falando de dados ( de forma genérica)
método = está falando de função, trcho de código
*/


