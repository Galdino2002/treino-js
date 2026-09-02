const MEDIA_DIVISOR = 3; // const para valores fixos (padrão em maiúsculo para constantes globais)

const calcularMedia = (a, b, c) => {
    return ((a + b + c) / MEDIA_DIVISOR);
};

const mediaDoAluno = calcularMedia(5, 6, 7); 
console.log(mediaDoAluno); 

// Mudamos o nome do parâmetro para 'nota' para evitar confusão de escopo
const verificacaoMedia = (nota) => {
    if (nota >= 6) {
        console.log("nota boa");
    } else {
        console.log("nota ruim"); // Corrigido: agora aceita notas entre 1 e 5
    }
};

verificacaoMedia(mediaDoAluno); 
