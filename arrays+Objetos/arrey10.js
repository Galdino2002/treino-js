const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        preco: 3500,
        estoque: 5
    },
    {
        nome: "Mouse",
        categoria: "Eletrônico",
        preco: 120,
        estoque: 0
    },
    {
        nome: "Teclado",
        categoria: "Eletrônico",
        preco: 250,
        estoque: 10
    },
    {
        nome: "Cadeira",
        categoria: "Móveis",
        preco: 900,
        estoque: 2
    },
    {
        nome: "Mesa",
        categoria: "Móveis",
        preco: 1500,
        estoque: 0
    }
];
let contador = 0 
let quantEstoqueZero = 0
let somaProduto = 0
let somaProdutoEstoque =0 

let maisCaro = produtos[0]

for(let pos of produtos){
   contador++
   somaProduto+= pos.preco
   somaProdutoEstoque += pos.preco * pos.estoque
  

  if (pos.estoque === 0){
    quantEstoqueZero++
  }
  if(maisCaro.preco < pos.preco){
    maisCaro = pos
  }
 

}

console.log(`temos :${contador} produtos`)
console.log(`e ${quantEstoqueZero} estão sem estoque`)
console.log(`vamos total de todos os produtos são ${somaProduto}`)
console.log(`soma de produtos em estoque é ${somaProdutoEstoque}`)
console.log(`o produto mais caro é ${maisCaro.nome} no valor de ${maisCaro.preco}`)
