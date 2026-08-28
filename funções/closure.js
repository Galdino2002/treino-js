function criarContador() {

    let contador = 0;

    function contar() {
        contador++;
        console.log(contador);
    }

    return contar;
}

const meuContador = criarContador();
function saudacao(nome) {

    function mensagem() {
        console.log("Olá " + nome);
    }

    return mensagem;
}

const olaJoao = saudacao("João");

olaJoao();

meuContador();
meuContador();
meuContador();