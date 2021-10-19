//retorne uma array com os nomes dos alunos aprovados

const alunos = [
    {
        nome: 'Romildo',
        nota: 10,
        turma: '1A',
    },
    {
        nome: 'Flora',
        nota: 7,
        turma: '1B',
    },
    {
        nome: 'Ninja',
        nota: 5,
        turma: '1C',
    },
    {
        nome: 'Biscoito',
        nota: 0,
        turma: '1D',
    },
];

function alunosAprovados (arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota <= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 6));