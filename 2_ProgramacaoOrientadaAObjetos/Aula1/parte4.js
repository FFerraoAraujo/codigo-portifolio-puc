// Criação de objetos

//LITERAIS

var pessoa = {
    nome: ["Fulano", "de tal"],
    anoDeNacimento: 1986,
    profissao: "Administrador",
    calculaidade: function() {
        return new Date().getFullYear() - this.anoDeNacimento;
    }
}

const pessoa = criar

/*
console.log(pessoa)
--imprime v--
{nome: Array(2), anoDeNacimento: 1986, profissao: 'Administrador', calculaidade: ƒ}

console.log(pessoa.calculaidade)
--imprime v--
ƒ () {
        return new Date().getFullYear() - this.anoDeNacimento;
    }

console.log(pessoa.calculaidade())
--imprime v--
39
*/

// FÁBRICA

function criarPessoa () {
    return {
        nome: ["Fulano", "de tal"],
        anoDeNacimento: 1986,
        profissao: "Administrador",
        calculaidade: function() {
            return new Date().getFullYear() - this.anoDeNacimento;
        }
    }
}

const pessoa = criarPessoa ();
console.log(pessoa);
 
//FABRICA FUNCIONAL com SYNTAX SUGAR

function criarPessoa(nome,anoDeNascimento,profissao) {
    return {
        nome,
        anoDeNacimento,
        profissao,
        calculaidade: function() {
            return new Date().getFullYear() - this.anoDeNacimento;
        }
    }
}

const pessoa = criarPessoa ("Fulano", 1990, "estudante");
console.log(pessoa);

//FABRICA FUNCIONAL com usabilidade - testar no console

function criarEmpregado (salarioBase, valorHoraExtra, qtHorasExtras) {
    return {
        salarioBase,
        valorHoraExtra,
        qtHorasExtras,
        calculaSalario: function(){
            return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras); }
    }
}

const empregado1 = criarEmpregado(5000,100,10)
const empregado2 = criarEmpregado(7000,100,10)
empregado2.calculaSalario()