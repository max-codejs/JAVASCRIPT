function bestRockBand(band) {
    return new Promise((resolve, reject) => {
        if (band == 'Slipknot') {
            resolve({ // função cujo parametro é um objeto 
                success: true,
                bandName: band,
                msg: band + 'is the best rock band ever!'

            });
        } else {
            reject({ // função cujo parametro é um objeto 
                seccess: false,
                msg: 'I am not so sure!'
            });
        }
    });
}

function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if (response.success) {
            resolve('Bohemian Rhapsody by ' + response.bandName);
        } else {
            reject('Do you know Queen?');
        }
    });
};

/*
bestRockBand('Slipknot')
.then(response => { // função anonima sem parenteses no parametro 
    console.log('Checking the answer...')
    return bestRockSong(response)

})
.then(response => {
    
    console.log('Finding the best song...')
    console.log(response)
    
})
.catch(err => {
    console.log(err.msg);
});
*/

async function doTheJob() {
    try {
        const bestRockBandResponse = await bestRockBand('Slipknot');
        console.log(bestRockBandResponse);
        const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
        console.log(bestRockSongResponse);
    } catch (err){
        console.log(err.msg)
    }
};

doTheJob();


// Outro exemplo da aula de um outro canal ABAIXO :

function primeiraFuncao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Esperou isso aqui!')
            resolve()
        }, 1000)
    })
}

async function segundaFuncao() {
    console.log('Iniciou ');

    await primeiraFuncao(); // await=esperou tal função , pra poder pular para baixo 

    console.log('Terminou!')
}

segundaFuncao();