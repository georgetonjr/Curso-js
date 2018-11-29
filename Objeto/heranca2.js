Object.prototype.atrr0 = '0' //não faça isso
const avo = {atrr1: 'a'}
const pai = {__proto__:avo, atrr2: 'B', atrr3: '3'}
const filho = {__proto__: pai, atrr3: 'C'}
console.log(filho.atrr0, filho.atrr1, filho.atrr2, filho.atrr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/H de ${this.velMax}KM/H`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())