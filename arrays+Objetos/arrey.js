const funcionarios = [
  {
    nome: "João",
    idade: 25,
    cargo: "Vendedor"
  },
  {
    nome: "Maria",
    idade: 30,
    cargo: "Gerente"
  },
  {
    nome: "Carlos",
    idade: 22,
    cargo: "Estoquista"
  }
];

for (let pos in funcionarios){
    console.log(funcionarios[pos].nome)
    console.log(funcionarios[pos].cargo)
    console.log(funcionarios[pos].idade)
}