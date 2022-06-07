const numeros = [2, 3, 6, 5, 10];
    let novoArrayNumeros = []

    for (let i = 0; i < numeros.length; i++) { // sem usar o método .map()
      novoArrayNumeros.push(numeros[i] * 2); // criando um array com o dobro do valores do outro
    }

    console.log('Executando: ', novoArrayNumeros); // veja abaixo fazendo a mesma coisa , mas simplificadamente

    const novoArrayMap = numeros.map(function(qcoisa) { // usando o método .map()
      return qcoisa * 2; // aqui o map é como se eu tivesse usando o metodo de cima for[i]
    });
    // o parametro qcoisa recebeu cada valor do numeros

    console.log('usando map: ', novoArrayMap);

    console.log
    ('usando arrowFunction no map: deixando mais curto', numeros.map(cadaPropriedade => cadaPropriedade * 2));

    const nomes = ['Ayrton', 'Teshima', 'Max', 'Madson'];


    const nomesMinusculos = nomes.map(fulano => fulano.toLowerCase()) // tira-se o parentese do parametro quando só se tem um numa arrowFunction

    console.log('Objeto nomes', nomes);
    console.log('Tornando minúsculos os nomes ', nomesMinusculos);

    // AGORA VAMOS APRENDER O METODO .FILTER()
    // DIFERE DO .MAP() , PQ O .FILTER(REQUER UMA FUNÇÃO DE RETORNO DE RESULTADO SOMENTE BOOLEANO)
    let mult2 = [];

    for (let i = 0; i < numeros.length; i++) { // metodo for mais complicado
      if (numeros[i] % 2 === 0) { // se tal número módulo 2 for igual a 0, é multiplo de 2
        mult2.push(numeros[i]);
      }
    }

    console.log('multiplos de 2 dentro do array números', mult2);

    // método .filter() simplificado
    const numerosFiltrados = numeros.filter(épar => épar % 2 === 0); //arrow functions

    console.log('numerosFiltrados', numerosFiltrados); // aqui so aparecerão os true da condição acima e serão novos valores dos indices do array numerosFiltrados


    const arrayMapFilter = numeros
      .filter(number => number % 2 === 0) // o parametro/array number so recebeu multi de 2
      .map(number => number * 2); // os multiplos de dois serão multiplicados por 2

    console.log('arrayMapFilter', arrayMapFilter); 

    // agora vamos conhecer o mais complicado dos métodos que é o .reduce()

    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
      soma = soma + numeros[i]; // aqui tá somando todos os valores dos arrays numeros
    }

    console.log('for metodo', soma);

    // const numeros = [2, 3, 6, 5, 10];

    
    /*

    somaReduce = numeros.reduce(function(valorAcumulador, valorArray){ // valorArray é cada valor do numeros
      return valorAcumulador + valorArray; // na primeira iteração valorarray no caso aqui é 2
    }, 0) // aqui no caso o zero é o valor inicial do valorAcumulador que iniciará contando do 0
    
    console.log('somaReduce executando', somaReduce);


    */

    const somaReduce = numeros.reduce((valorAcumulador, valorArray) =>  valorAcumulador + valorArray, -1); // já aqui, somará todos os valores do array numeros ,e subtrairá por -1

    console.log('somaReduce arrow function', somaReduce);





    const pessoas = [ // array que tem como indice objetos
      {
        nome: 'Ayrton',
        idade: 27
      },
      {
        nome: 'João',
        idade: 14
      },
      {
        nome: 'Maria',
        idade: 23
      },
      {
        nome: 'Joana',
        idade: 21
      },
      {
        nome: 'Lucas',
        idade: 32
      },
      {
        nome: 'Mateus',
        idade: 15
      },
      {
        nome: 'Isa',
        idade: 23
      },
      {
        nome: 'Luiza',
        idade: 17
      }
    ];


    /*
      {
        maiores: [
          {
            nome: 'Ayrton',
            idade: 27
          },
          {
            nome: 'Maria',
            idade: 23
          },
          {
            nome: 'Joana',
            idade: 21
          },
          {
            nome: 'Lucas',
            idade: 32
          },
          {
            nome: 'Isa',
            idade: 23
          },
        ],
        menores: [
          {
            nome: 'João',
            idade: 14
          },
          {
            nome: 'Mateus',
            idade: 15
          },
          {
            nome: 'Luiza',
            idade: 17
          }
        ]
      }
     */

     const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray) {
      const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores'; // opera ternário

      valorAcumulador[propMaiorOuMenor].push(valorArray);

      return valorAcumulador;
     }, { maiores: [], menores: []}) // valorAcumulador = { maiores: [], menores: [] } quase iss

     console.log('pessoasAgrupadas', pessoasAgrupadas);