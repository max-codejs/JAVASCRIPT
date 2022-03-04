var agora = new Date() // este comando complementar para o de baixo 
var hora = agora.getHours() // este comando vai me dar a hora atual do meu relógio
// var hora = 19 // caso eu queira mudar a hora manualmente 
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite')
}



