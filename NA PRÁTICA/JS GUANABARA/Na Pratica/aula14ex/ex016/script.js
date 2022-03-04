 window.alert('Olá, Max! ')
function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.querySelector('#txtf')
    let passo = window.document.querySelector('#txtp')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'IMPOSSÍVEL CONTAR! '
        //window.alert ('[ERRO] Faltam Dados! ')

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert ('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem Crescente
            for(let c = i; c <= f; c += p) {    
            res.innerHTML += ` ${c} \u{1f449}` // Se eu não deixar o espacim antes da crase, contará desajeitadamente.
            }
        } else {
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}` // Se eu não deixar o espacim antes da crase, contará desajeitadamente.
            }

        }

        res.innerHTML += ` \u{1f3c1} ` // Todos esses emojis o caba encontra no site unicode.org. Lembrar dos espaçamentos entre as crases ...

    }

}