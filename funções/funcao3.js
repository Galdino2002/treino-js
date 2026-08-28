let consoleTeste= () => {
    console.log("olá mundo")
}
consoleTeste()
let soma = (a,b)=>{
    return a+b
}
console.log(soma(2,3))

let multiplicar = x => x * 2 //apenas um apametro podemos substituir 

console.log(multiplicar(2))

let potencia =(Base,exp=2)=>{
    return Math.pow(Base,exp)
}
console.log(potencia(2,3))
console.log(potencia(2))

