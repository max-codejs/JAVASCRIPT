class Usuario {
    constructor(nome, nacionalidade = 'brasileira',cidade) {
        this.name = nome
        this.nationality = nacionalidade
        this.city = cidade
    }
};

let us = new Usuario('Max', 'americana', 'maceio')
let us2 = new Usuario('madson') // aqui assumiu o valor default na nacionalidade

console.log(us);
console.log(us2);