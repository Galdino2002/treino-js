const alunos = [
    {
        nome: "João",
        idade: 20,
        nota: 7.5,
        curso: "Sistemas de Informação"
    },
    {
        nome: "Maria",
        idade: 22,
        nota: 9,
        curso: "Administração"
    },
    {
        nome: "Carlos",
        idade: 19,
        nota: 6,
        curso: "Sistemas de Informação"
    },
    {
        nome: "Ana",
        idade: 21,
        nota: 8.5,
        curso: "Sistemas de Informação"
    },
    {
        nome: "Pedro",
        idade: 23,
        nota: 5,
        curso: "Administração"
    }
];

let contAluno = 0 
let contAlunoAprovado = 0 
let contAlunoReprovado = 0
let soma = 0 
let mediaTurma =0

let maiorNota = alunos[0]

for( let aluno of alunos){
    contAluno++
    soma += aluno.nota

    if(aluno.nota >= 7){
        contAlunoAprovado++}

    if(aluno.nota < 7){
        contAlunoReprovado++}

    if(maiorNota.nota < aluno.nota){
        maiorNota = aluno
    }
    

    
}
mediaTurma = soma / contAluno
console.log(contAluno)
console.log(contAlunoAprovado)
console.log(contAlunoReprovado)
console.log(soma)
console.log(mediaTurma.toFixed(2))
console.log(`${maiorNota.nome} tirou a maior nota de ${maiorNota.nota}`)