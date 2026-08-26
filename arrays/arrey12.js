const notas = [7.5, 8, 4.5, 9, 6, 3, 10];
let soma = 0
let media = 0
let aprovados = 0
let reprovados = 0 
let maiorNota = notas[0]
let menorNota = notas[0]
let contador = 0

for ( let pos in notas){
soma = soma + notas[pos]

if(maiorNota < notas[pos]){
    maiorNota = notas[pos]}

if(menorNota > notas[pos]){
    menorNota = notas[pos]}

if (notas[pos] >= 6){
    aprovados++
}else{reprovados++}

contador++


}
media = soma /contador

console.log(`a soma das notas é:  ${soma}  a media das notas é: ${media.toFixed(2)} 
             temos ${aprovados} aprovados e ${reprovados} reprovados
            a maior nota foi : ${maiorNota} e a menor nota é ${menorNota}   `)
