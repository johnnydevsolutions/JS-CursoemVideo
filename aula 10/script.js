var num = [5, 8, 2, 9, 3]
num.push(1) // força a entrada do número um
num.sort() //vetor colocado em ordem
console.log(num)
console.log (`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[1]}`)

var pos = num.indexOf(2)
if(pos == -1) {
    console.log(' O valor não foi encontrado!')

} else {
    console.log(`O valor que procura está na posição ${pos}`)
}

/*
//var pos = num.indexOf(2) irá procurar a posição do número 2 ou qualquer número
Se não achar o JS irá colocar o valor -1 para dizer que não foi encontrado
*/