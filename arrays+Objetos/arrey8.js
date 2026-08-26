const funcionarios = [
  { nome: "João", idade: 25, salario: 2500 },
  { nome: "Maria", idade: 30, salario: 5000 },
  { nome: "Carlos", idade: 22, salario: 2000 }
];
let cont = funcionarios[0].salario
for (let pos of funcionarios){

    if( pos.salario > cont.salario)
        cont.salario = pos.salario
    
    

}
console.log(`${cont}`)