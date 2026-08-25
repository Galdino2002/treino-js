const numeros = [10, 20, 30];
numeros.push(40)
numeros.unshift(5)
numeros.pop()
numeros.push(100)
numeros.shift()

for(let i = 0; i < numeros.length; i++)
{
    console.log(numeros[i])
}