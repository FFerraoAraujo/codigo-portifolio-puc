console.log ("Hello World!!!")
console.log ("Fundamentos de computação e algoritmo")

for (var i=1; i < 9; i++) {
    console.log(i);
}

// inserindo um console log apra entender como funcioan o loop abaixo//
var result = '';
var i = 0;
do { i += 1; result += i + ' ';
    console.log(result);
    console.log(i); 
}
    while (i > 0 && i < 5);

    //

function avaliaparidade(limiteSuperior){
    for(let i = 0; i<limiteSuperior; i++){
        if(i%2==1)
            console.log(i +  " é um número impar")
        else
            console.log( i + " é um número par")
    }
}

avaliaparidade(9)

// Testando a modulação do parâmetro SET

var mySet = new Set()
mySet.add(0)
console.log(mySet)
console.log("*-*-*-")
mySet.add(1)
console.log(mySet)
console.log("*-*-*-")
mySet.add(1)
console.log(mySet)
console.log("*-*-*-")
mySet.add(1)
console.log(mySet)
console.log("*-*-*-")
mySet.add(2)
console.log(mySet)
console.log("*-*-*-")
mySet.add(1)
console.log(mySet)
console.log("*-*-*-")
mySet.add(3)
console.log(mySet)
console.log("*-*-*-")