// Criação de objetos

//CONSTRUTORES - Também são funções que criam objetos, mas estão mais alinhadas com POO. O tipo é criado com a primeira letra maiúscula.
// O ':' é substituído por '=', visto que não estamos criando o objeto, mas já usando os atributos como se eles existissem. DA mesma forma não é ",", mas sim ";"

function ConstrutorPessoa ()  {
    this.nome = "Joao";
    this.anoDeNascimento = 1986;
    this.profissao = "Administrador";
    this.calculaidade = function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa = new ConstrutorPessoa();
console.log(pessoa);

//melhorando o objeto, recebendo os valores por parâmetro e ir colocando 1 a 1

function ConstrutorPessoa (nome, anoDeNascimento, profissao)  { //essa info que aparecerá nas "dicas"
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaidade = function() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa2 = new ConstrutorPessoa("maria", 2002, "estudante")

// a palavra new é a chave para acionar o crintrutor que está dentro da função. Compare com o contrutor Fábrica"
// quando precisamos acessa um objeto membro dentro do próprio código, usamos o THIS para deixar claro

