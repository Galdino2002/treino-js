const numeros = [10, 25, 7, 30, 50, 12, 18];
let cont = 0
for(let pos in numeros){
if(numeros[pos] > 20){
    cont++
}
}
console.log(cont)
