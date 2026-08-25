const numeros = [10, 25, 30, 47, 50, 63, 80];
let maior =numeros[0]
let segMaior =numeros[0]

for(let i = 0 ; i < numeros.length ; i++){
if (numeros[i] > maior) {
    // antigo maior vira segundo 
   segMaior =  maior
   maior = numeros[i]
} else if (numeros[i] > segMaior) {
    maior = numeros[i]
}
}
console.log(`maior : ${maior} segundo maior:  ${segMaior}`)