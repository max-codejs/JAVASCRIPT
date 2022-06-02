
    /*
    SINGLE THREAD: ou seja o javascript processa linha por linha cima a baixo

    LINGUAGEM ASSINCRONA
    EX: BANCO DE DADOS PEGAR O CEP
    CEP -> CORREIOS 

    PROMISES 
    */

    console.log('Primeiro');

    // esse agendador de tempo de baixo é controlado pelo browser 
    // os que tiver no agendador irao pra uma fila onde so executar-se-ao apos os os consoles normais  
    // Lembrando que promises são objetos que serão executados primeiro do que esses acima pq entram numa fila preferencial 
    setTimeout(function() {console.log('time 1')}, 0);

    console.log('Terceiro');
    console.log('Quarto');
    console.log('Quinto');
    setTimeout(function() {console.log('time 2')}, 0);
    console.log('Sexto');

    /*
    PENDENTE
    REALIZADA
    REJEITADO
    ESTABELECIDA
    */

    // Obs: ou usamos new Promise, ou so Promise mesmo pra invocar
    // sempre quando for invocar promise chamara uma function que tera return promise

    function jaRealizada() {
        return Promise.resolve('parametro daqui')
    }

    function jaRejeitada() {
        return Promise.reject('esse parametro')
    }

    jaRealizada().then(function(eomesmodaqui) { // .then so sera chamado se for resolvida
        console.log('Promise resolvida', eomesmodaqui)
    })
    
    jaRejeitada().catch(function(mesmodesse) {console.log('Rejeitada', mesmodesse)});

    function maisUsual() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve('Olá, max')
            }, 2000);
        })
    }

    maisUsual().then(function (message) {console.log('god morning', message)}) // o motor do javascript so irá executar a function do .then quando o resolve acima for resolvido
