const alunos = {nome: 'Bruno',sobrenome: 'Campos'};
    const notas = {n1=80,n2:75,n3:92,n4:85};
    const info = {...aluno,...notas};

    for(var p in alunos) {
        console.log(dado); // Aqui imprimirá somente as propriedades ou seja, nome: e sobrenome:
    }