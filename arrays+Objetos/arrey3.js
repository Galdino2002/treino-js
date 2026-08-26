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
let maiorSalario = funcionarios[0].salario
let menorSalario = funcionarios[0].salario

let funcionarioMaiorSalario = funcionarios[0]
let funcionarioMenorSalario = funcionarios[0]
let cont = 0
let soma = 0
let media= 0

for(let pos in funcionarios){
    if(maiorSalario < funcionarios[pos].salario){
        maiorSalario = funcionarios[pos].salario
        funcionarioMaiorSalario = funcionarios[pos]}
    
    if(menorSalario > funcionarios[pos].salario ){
        menorSalario = funcionarios[pos].salario
        funcionarioMenorSalario = funcionarios[pos]
    
      

    }
      cont++
      soma += funcionarios[pos].salario 
    
}

media = soma / cont
const formatoMoeda = { style: "currency", currency: "BRL" };


console.log("-----relatorio da empresa-----")
console.log(`quantidade de funcionários: ${cont}`)
console.log(`total dos salarios : ${soma.toLocaleString("pt-BR",formatoMoeda)}`)
console.log(`media salarial : ${media.toLocaleString("pt-BR",formatoMoeda)}`)
console.log(`maior salario: `)
console.log(`${maiorSalario.toLocaleString("pt-BR",formatoMoeda)} - ${funcionarioMaiorSalario.nome}`)
console.log(`menor salario: `)
console.log(`${menorSalario.toLocaleString("pt-BR",formatoMoeda)} - ${funcionarioMenorSalario.nome}`)

              
