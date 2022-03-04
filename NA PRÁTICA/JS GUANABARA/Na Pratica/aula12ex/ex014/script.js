var nome=window.prompt('Digite seu nome ','Nome aqui');
window.alert('Olá, ' + nome + '!');
window.confirm('Seu nome é ' + nome + '?');


function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `<strong>Agora são ${hora} horas. </strong>`
    if (hora >= 0 && hora < 12) {
        // BOM DIA! 
        img.src = 'fotomanha.jpg'
        window.document.body.style.background = '#fbb805'
    } else if ( hora >= 12 && hora < 18) {
        // BOA TARDE! 
        img.src = 'fototarde.jpg'
        window.document.body.style.background = '#984218'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.jpg'
        window.document.body.style.background = '#09041A'
    } 
}