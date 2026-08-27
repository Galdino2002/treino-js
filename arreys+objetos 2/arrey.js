const funcionarios = [
    {
        nome: "João",
        cargo: "Vendedor",
        vendas: [1200, 800, 500]
    },
    {
        nome: "Maria",
        cargo: "Vendedora",
        vendas: [3000, 1500, 2000]
    },
    {
        nome: "Carlos",
        cargo: "Vendedor",
        vendas: [700, 900, 1100]
    },
    {
        nome: "Ana",
        cargo: "Vendedora",
        vendas: [2500, 1800, 2200]
    }
];

let contFuncionarios = 0;
let contVendas = 0;
let totalVendas = 0;

for (let funcionario of funcionarios) {

    contFuncionarios++;

    for (let venda of funcionario.vendas) {

        contVendas++;

        totalVendas += venda;

    }

}

console.log(contFuncionarios);
console.log(contVendas);
console.log(totalVendas);