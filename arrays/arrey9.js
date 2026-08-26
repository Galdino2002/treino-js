const numeros = [10, 55, 23, 89, 12, 42];
let maior = 0
for(let pos in numeros){
    if (maior < numeros[pos]){
        maior = numeros[pos]
    }
}
console.log(maior)