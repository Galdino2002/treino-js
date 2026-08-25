const numeros = [10, 25, 30, 47, 50, 63, 80];
let contPar = 0
let contImpar = 0
let soma = 0
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0 ){
        contPar++
    }else{contImpar++}
    soma = soma + numeros[i]
}
console.log(` tem numeros pares: ${contPar}  
              tem nueros impares: ${contImpar}
              a soma dos numeros são : ${soma}`)
              