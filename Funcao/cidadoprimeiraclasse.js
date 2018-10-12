//criar de forma literal
function fun1(){ }


//armazenar em uma variavel
const fun2= function () {}

<<<<<<< HEAD
//Armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]

console.log(array[0](2, 3))


// Armazenar em um atrivuto de obj

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//passar função como parametro

function run(fun){
    fun()
}

run(function() {console.log('Executando...')})


// Uma função pode retorna/conter uma função

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const CincoMais = soma(2, 3)
CincoMais(4)
=======
//armazenar em um array
const array = [function(a, b){return a + b}]
>>>>>>> 786e62f654bd586519ec9804cb7e6141af84c0ca
