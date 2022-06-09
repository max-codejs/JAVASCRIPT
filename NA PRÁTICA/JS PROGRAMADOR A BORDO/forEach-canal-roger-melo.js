// uma tradução literal para forEach seria para cada. 
// forEach É em método de array que funfa quase igual o for

const midiaSocial = ['youtube', 'twitter', 'instagram', 'facebook'];

midiaSocial.forEach(() => {

    console.log('Olá')
    
}) // para cada item desse array a gente vai executar alguma ação

const maisInteligentes = ['max', 'madson', 'marcelo', 'pai'];

maisInteligentes.forEach((fulano) => {

    console.log(fulano); // essa variável armazenará o valor de cada item 

});

const melhoresBandas = ['AliceinChains', 'Nirvana', 'Slipknot', 'Linkin Park'];

// o método forEach() aceita outros dois argumentos ou parametros onde o segundo é o index e o terceiro é o array completo

melhoresBandas.forEach((melhoresBandas, index, array) => {

    console.log('melhoresBandas', index, melhoresBandas, array);

}) // atenção: posso tbm colocar essa arrow function numa variavel separada .forEacha(variavelseparada)