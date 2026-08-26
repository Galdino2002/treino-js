const funcionarios = [
  {
    nome: "João",
    idade: 25,
    cargo: "Vendedor",
    salario: 2500
  },
  {
    nome: "Maria",
    idade: 30,
    cargo: "Gerente",
    salario: 5000
  },
  {
    nome: "Carlos",
    idade: 22,
    cargo: "Estoquista",
    salario: 2000
  },
  {
    nome: "Ana",
    idade: 28,
    cargo: "Vendedor",
    salario: 2800
  }
];
let somaSalario = 0


for(let pos in funcionarios){
    somaSalario = somaSalario + funcionarios[pos].salario
}

console.log(somaSalario.toLocaleString(
    "pt-BR",{
        style:"currency",
        currency:"BRL"
    })
)