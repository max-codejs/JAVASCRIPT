let num = [5, 8, 2, 9, 3]

num.sort() // Deixa os valores em ordem crescente
num.push(1) // Acrescente o valor de dentro do parentese no fim .ex: após o 3
console.log(num)
console.log(`O vetor tem ${num.length} posições. `)
console.log(`O primeiro elemento do vetor tem valor ${num[0]}`)


var n = 9
let pos = num.indexOf(n)
if (pos == -1) {
    console.log(`Valor não foi encontrado! `)
} else {
    console.log(`O valor ${n} está na posição ${pos} `)
}


