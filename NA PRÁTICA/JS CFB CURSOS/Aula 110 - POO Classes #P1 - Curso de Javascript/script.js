class Usuario {
    constructor(nome, nacionalidade = 'brasileira') {
        this.name = nome
        this.nationality = nacionalidade
    }
};

let us = new Usuario('Max', 'americana')
let us2 = new Usuario('madson') // aqui assumiu o valor default na nacionalidade

console.log(us);
console.log(us2);