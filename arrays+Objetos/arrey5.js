const funcionarios = [
  { nome: "João", idade: 25, cargo: "Vendedor", salario: 2500 },
  { nome: "Maria", idade: 32, cargo: "Gerente", salario: 5000 },
  { nome: "Carlos", idade: 22, cargo: "Vendedor", salario: 2800 },
  { nome: "Ana", idade: 35, cargo: "Estoquista", salario: 3200 },
  { nome: "Pedro", idade: 29, cargo: "Vendedor", salario: 2600 }
];

let cont = 0;
let soma = 0;
let media = 0;
let qtVendedores = 0;

let funcMaisVelho = funcionarios[0];
let funcMaiorSalario = funcionarios[0];

for(let funcionario of funcionarios){

    cont++;

    if(funcionario.idade > funcMaisVelho.idade){
        funcMaisVelho = funcionario;
    }

    if(funcionario.salario > funcMaiorSalario.salario){
        funcMaiorSalario = funcionario;
    }

    if(funcionario.cargo === "Vendedor"){
        qtVendedores++;
    }

    if(funcionario.salario > 3000){
        console.log("---- RECEBE MAIS DE 3000 ----");
        console.log(funcionario.nome);
        console.log("-----------------------------");
    }

    soma += funcionario.salario;
}

media = soma / cont;

const formato = {
    style: "currency",
    currency: "BRL"
};

console.log("RESUMO GERAL DA EMPRESA");
console.log("-----------------------");

console.log(`Total de funcionários: ${cont}`);

console.log(
    `Funcionário mais velho: ${funcMaisVelho.nome} - ${funcMaisVelho.idade} anos`
);

console.log(
    `Maior salário: ${funcMaiorSalario.nome} - ${funcMaiorSalario.salario.toLocaleString("pt-BR", formato)}`
);

console.log(
    `Total pago em salários: ${soma.toLocaleString("pt-BR", formato)}`
);

console.log(
    `Média salarial: ${media.toLocaleString("pt-BR", formato)}`
);

console.log(`Quantidade de vendedores: ${qtVendedores}`);