const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json) //metodo utilizado
const apenasPreco = produto => produto.preco //metodo utilizado

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)