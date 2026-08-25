const botoes = [
    document.getElementById("um"),
    document.getElementById("dois"),
    document.getElementById("tres"),
    document.getElementById("quatro"),
    document.getElementById("cinco"),
    document.getElementById("seis"),
    document.getElementById("sete"),
    document.getElementById("oito"),
    document.getElementById("nove"),
    document.getElementById("zero")
];
const view = document.getElementById("display");
botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        view.value += botao.textContent;
    });
});
const clear = document.getElementById("limpar");

clear.addEventListener("click", function() {
    view.value = '';
});


const delet = document.getElementById("apagar");

delet.addEventListener("click", function() {
    view.value = view.value.slice(0, -1);   
});

let number1 = null
let number2 = null
let operador;

const operacao = [
    document.getElementById("soma"),
    document.getElementById("subtracao"),
    document.getElementById("multiplicacao"),
    document.getElementById("divisao")
]

operacao.forEach(function(botao){ 
    botao.addEventListener("click",function(){
    operador = botao.textContent;    
    number1 = view.value  
    view.value = '' 
    })
});






