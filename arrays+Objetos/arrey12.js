const vendas = [
    {
        produto: "Notebook",
        categoria: "Eletrônico",
        preco: 3500,
        quantidade: 2
    },
    {
        produto: "Mouse",
        categoria: "Eletrônico",
        preco: 100,
        quantidade: 10
    },
    {
        produto: "Cadeira",
        categoria: "Móveis",
        preco: 800,
        quantidade: 3
    },
    {
        produto: "Teclado",
        categoria: "Eletrônico",
        preco: 250,
        quantidade: 5
    },
    {
        produto: "Mesa",
        categoria: "Móveis",
        preco: 1200,
        quantidade: 1
    },
    {
        produto: "Monitor",
        categoria: "Eletrônico",
        preco: 1500,
        quantidade: 4
    }
];
//quantidade de tipos de produtos
//quantiade de itens vendidos
//valor total das vendas
//produto mais caro
//produto mais barato
//quantos são da categoria eletronico
//qual categoria gerou mais dinheiro
let quantTipoProduto = 0
let quantVendido = 0
let velTotal =0 
let quantEletronicos = 0 
let totalEletronicos = 0;
let totalMoveis = 0;

let maiorLucro = vendas[0]
let produtoMaisCaro = vendas[0]
let produtoMaisBarato = vendas[0]


for(let venda of vendas){

    quantVendido+= venda.quantidade
    velTotal += venda.preco * venda.quantidade
    quantTipoProduto++

    if(produtoMaisCaro.preco < venda.preco)
        produtoMaisCaro = venda

    if(produtoMaisBarato.preco > venda.preco)
        produtoMaisBarato = venda
    
    if(venda.categoria === "Eletrônico")
        quantEletronicos++

    if(maiorLucro.quantidade < venda.quantidade)
        maiorLucro = venda

    if (venda.categoria === "Eletrônico") 
        totalEletronicos += venda.preco * venda.quantidade;

    if (venda.categoria === "Móveis") 
        totalMoveis += venda.preco * venda.quantidade;



}

console.log(quantTipoProduto)
console.log(quantVendido)
console.log(velTotal.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}))
console.log(produtoMaisCaro.produto +"  " +produtoMaisCaro.preco)
console.log(produtoMaisBarato.produto +"  "+ produtoMaisBarato.preco)
console.log(quantEletronicos)
console.log(`item que vendeu mais foi ${maiorLucro.produto} da categoria ${maiorLucro.categoria}`)
if (totalEletronicos > totalMoveis) {
    console.log("Eletrônicos geraram mais dinheiro");
} else {
    console.log("Móveis geraram mais dinheiro");
}