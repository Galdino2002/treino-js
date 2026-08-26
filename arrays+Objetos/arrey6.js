const funcionarios = [
  { nome: "João", idade: 25, salario: 2500 },
  { nome: "Maria", idade: 30, salario: 5000 },
  { nome: "Carlos", idade: 22, salario: 2000 }
];

for(let pos of funcionarios){
    console.log(`nome do funcionairo : ${pos.nome + "-" + pos.idade +"-" +  pos.salario}`)
}
