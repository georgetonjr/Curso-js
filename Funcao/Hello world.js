
// n! = n * (n-1)!

function Fatorial(n){
    if(n == 0){
        return 1
    }else{
        return n * Fatorial(n-1)
    }
}

console.log(Fatorial(4))

function fact(n){
for(n == 0){
    n * (n-1)
}
}
console.log(fact(4))