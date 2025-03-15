var pessoas = {
    nome:'Valentina', 
    idade:60, 
    saudar: function(){
        console.log("Olá");
    }
};


const calculadora = {
    numero1: 10,
    numero2: 20,
    soma: function () {
        return this.numero1 + this.numero2
    }
};

const empregado = {
    salarioFixo: 5000,
    valorHoraExtra: 100,
    qthoras: 20,
    calculaSalario: function (){
        return this.salarioFixo + 
        (this.valorHoraExtra * this.qthoras);
    }
};

console.log (empregado.calculaSalario());

/*
Encapsulamento = Redução de complexidade e Proteção e dados
Abstração = Redução de complexidade e maior reuso
Herança = Eliminar redundância de códigos (mesma function para objetos que usam essa function)
Polimorfismo = Eliminar lógica desnecessária do código (eliminas if e switch)
*/
