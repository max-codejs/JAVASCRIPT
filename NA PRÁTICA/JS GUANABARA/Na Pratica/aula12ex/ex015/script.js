
function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var r1 = window.document.querySelector('#retangulo1')
    var res = window.document.getElementById('res')
    if (r1.value.length == 0 || r1.value > ano) {
        window.alert ('[ERRO] Por favor verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('bolinha')
        var idade = ano - Number(r1.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // é tipo inserir no HTML o IMG e colocar id = 'foto'
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso 
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem 
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png') 
            }
        }
        res.style.textAlign = 'center'
        img.style.padding = '24px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos! ` 
        res.appendChild(img) // Comando para adicionar Elementos ou  TAGS
    }
    



}