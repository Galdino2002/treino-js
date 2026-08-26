const funcionarios = [
  { nome: "João", idade: 25, cargo: "Vendedor", salario: 2500 },
  { nome: "Maria", idade: 30, cargo: "Gerente", salario: 5000 },
  { nome: "Carlos", idade: 22, cargo: "Vendedor", salario: 2000 },
  { nome: "Ana", idade: 35, cargo: "Gerente", salario: 6000 },
  { nome: "Pedro", idade: 28, cargo: "Estoquista", salario: 2800 }
];

let contFuncionarios = 0;
let contFuncionariosVendedores = 0;
let contFuncionariosGerentes = 0;

let soma = 0;
let media = 0;

// Guardamos o objeto inteiro
let funcMenorSalario = funcionarios[0];
let funcMaisNovo = funcionarios[0];

for (let funcionario of funcionarios) {

    // Quantidade total
    contFuncionarios++;

    // Soma dos salários
    soma += funcionario.salario;

    // Quantidade de vendedores
    if (funcionario.cargo === "Vendedor") {
        contFuncionariosVendedores++;
    }

    // Quantidade de gerentes
    if (funcionario.cargo === "Gerente") {
        contFuncionariosGerentes++;
    }

    // Funcionário mais novo
    if (funcionario.idade < funcMaisNovo.idade) {
        funcMaisNovo = funcionario;
    }

    // Funcionário com menor salário
    if (funcionario.salario < funcMenorSalario.salario) {
        funcMenorSalario = funcionario;
    }

    // Funcionários que ganham mais de 3000
    if (funcionario.salario > 3000) {
        console.log(
            `${funcionario.nome} recebe: R$ ${funcionario.salario}`
        );
    }
}

// Média salarial
media = soma / contFuncionarios;

console.log("========== RESUMO ==========");

console.log(`Total de funcionários: ${contFuncionarios}`);

console.log(
    `Quantidade de vendedores: ${contFuncionariosVendedores}`
);

console.log(
    `Quantidade de gerentes: ${contFuncionariosGerentes}`
);

console.log(
    `Funcionário mais novo: ${funcMaisNovo.nome} - ${funcMaisNovo.idade} anos`
);

console.log(
    `Funcionário com menor salário: ${funcMenorSalario.nome} - R$ ${funcMenorSalario.salario}`
);

console.log(`Total dos salários: R$ ${soma}`);

console.log(`Média salarial: R$ ${media.toFixed(2)}`);