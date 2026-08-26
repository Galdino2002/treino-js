const funcionarios = [
  { nome: "João", idade: 25, cargo: "Vendedor", salario: 2500 },
  { nome: "Maria", idade: 30, cargo: "Gerente", salario: 5000 },
  { nome: "Carlos", idade: 22, cargo: "Estoquista", salario: 2000 },
  { nome: "Ana", idade: 28, cargo: "Vendedor", salario: 2800 }
];

// 1. Loop por Posição (Índice/Chave)
for (let pos in funcionarios) {
    console.log(funcionarios[pos].nome); 
}

console.log("----------------");

// 2. Loop por Valor (Objeto direto) - CORRIGIDO
for (let funcionario of funcionarios) { // Use "funcionario" no singular
    console.log(funcionario.nome +"-"+ funcionario.cargo); 
    
}
