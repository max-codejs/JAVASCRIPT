let colabJASON={colaboradores:[
    {   nome: 'mae',
        salario: 10000,
        idade: 40
    },
    {   
        nome: 'pai',
        salario: 20000,
        idade: 38
    },
    {   nome: 'marcelo',
        salario: 11000,
        idade: 41
    },
    {   
        nome: 'madson',
        salario: 9000,
        idade: 45
    },
    {   nome: 'max',
        salario: 20000,
        idade: 23
    }
    
]};

console.log('executando: ', colabJASON); 
console.log('parseando/passando para string/json: ',
     JSON.stringify(colabJASON));


let cicrano={"colaboradores":[
    {"nome":"mae","salario":10000,"idade":40},
    {"nome":"pai","salario":20000,"idade":38},
    {"nome":"marcelo","salario":11000,"idade":41},
    {"nome":"madson","salario":9000,"idade":45},
    {"nome":"max","salario":20000,"idade":23}]
};


console.log('passando esse json para objeto na sua forma real', JSON.parse(cicrano));

