//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}


imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 5, 6, 18)
imprimirSoma()

function soma(a = 0, b = 0){
    return a + b    
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
