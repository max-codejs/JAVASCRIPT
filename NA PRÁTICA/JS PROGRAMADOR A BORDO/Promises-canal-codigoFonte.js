let p = new Promise((resolve, reject) => {
    let a = 1 + 1 
    if (a == 2) {
        resolve('Sucess') // criou se um parametro para o parametro resolve: Sucess
    } else {
        reject('Failed') // criou se um parametro para o parametro resolve: Failed
    }
})


p.then((message) => { // o parametro de then vai ser o parametro de resolve: sucess
    console.log('This is in the then ' + message)
}).catch((err) => { // o parametro de catch vai ser o parametro de reject: sucess
    console.log('This is the catch ' + err)
})

// resolve e reject são dois parametros de uma função arrow .
// 