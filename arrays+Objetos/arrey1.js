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
  },
  {
  nome: "Ana",
  idade: 28,
  cargo: "Vendedor"
  }
];

let encontrado = false
let quantidade = 0

for (let pos in funcionarios){

    if(funcionarios[pos].cargo === "Vendedor"){
      encontrado = true
        console.log(funcionarios[pos].nome)
        console.log(funcionarios[pos].cargo)
        console.log(funcionarios[pos].idade)
        console.log("-------------")
      quantidade++  
    }
    
}
console.log(`encontrados: ${quantidade}`)
if (encontrado === false)
  console.log("usuario não foi encontrado")