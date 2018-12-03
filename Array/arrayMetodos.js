const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//metodo remove o ultimo
console.log(pilotos)

pilotos.push('Verstappen') //adiciona ao final
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona no começo
console.log(pilotos)

// splice pode adicionar e remover elementos 
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunspilotos = pilotos.slice(2)//novo array
console.log(algunspilotos)