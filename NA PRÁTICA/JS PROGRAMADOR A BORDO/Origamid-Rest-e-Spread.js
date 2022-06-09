// REST: No exemplo abaixo veja que após eu colocar os três pontinhos eu tornei o parametro variável clientes em um array que se criou ao colocar ... REST quer dizer RESTO em portugues.


function showList(empresa, ...clientes) { 
    console.log(empresa);
    console.log(clientes);
}

showList('Viçosa Motos', 'Max', 'Madson', 2022);

function OficinaMotos(empresa, ...clientes) { // array.forEach();
    clientes.forEach(fulano => { // fulano recebe cada item do array clientes
    console.log(fulano, 'é cliente de:', empresa);
    });
  }
  
  OficinaMotos("Viçosa Motos", "André", "Pedro", "João");


// SPREAD: No português siginifica espalhar

// Objetos
const carro = {
  cor: "azul",
  portas: 4,
  ano: 2020,
  modelo: 'Gol g6'
};

const cloneCarro = { ...carro};
const carroEsportivo = { turbo: true, ...carro };

console.log(carro);
console.log(cloneCarro);
console.log(carroEsportivo);

const moto = {
    modelo: 'titan',
    cor: 'vermelha',
    ano: 2022,
    versao: 'ESDI',
    cilindrada: 160
};

let {...copia} = moto;

console.log('Moto', moto);
console.log('Fiz uma copia', copia);
copia.versao = 'KS'; // aqui eu modifico a versao somente da copia
console.log('Executando', moto); // veja q aqui não modificou nada
console.log('Veja como fica a copia agora', copia)
