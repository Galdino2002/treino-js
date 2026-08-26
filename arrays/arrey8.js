const numeros = [12, 7, 25, 10, 8, 31, 4];

for(let pos in numeros){
    if (numeros[pos] % 2 == 0){
        console.log(numeros[pos] + " são pares")
    }
}