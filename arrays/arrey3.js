const numeros = [10, 25, 30, 47, 50, 63, 80];
let maior = numeros[0]
let menor = numeros[0]
for(let i = 0 ; i < numeros.length; i++){
    if(maior < numeros[i]){
        maior = numeros[i]
    }
    if(menor > numeros[i]){
        menor = numeros[i]
    }
}
console.log(maior)
console.log(menor)