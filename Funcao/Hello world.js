
// n! = n * (n-1)!

function Fatorial(n){
    if(n == 0){
        return 1
    }else{
        return n * Fatorial(n-1)
    }
}

console.log(Fatorial(4))

