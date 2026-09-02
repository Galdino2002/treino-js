let nota =(nota1,nota2,nota3)=>{
    return((nota1+nota2+nota3) / 3)
}

const mediaCalculada = nota(10,10,10)
console.log(mediaCalculada.toFixed(2))

let avaliacao = mediaCalculada =>{
    if ( mediaCalculada <=10 && mediaCalculada >= 7)
        console.log("aprovado")
    else if(mediaCalculada < 7 && mediaCalculada >= 5)
        console.log("recuperação")
    else if(mediaCalculada < 5)
        console.log("reprovado")
}
avaliacao(mediaCalculada)

