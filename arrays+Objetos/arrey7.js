const funcionarios = [
  { nome: "João", idade: 25, salario: 2500 },
  { nome: "Maria", idade: 30, salario: 5000 },
  { nome: "Carlos", idade: 22, salario: 2000 }
];


for(let pos of funcionarios){
    if(pos.idade > 25)
        console.log(`${pos.nome}`)
}
