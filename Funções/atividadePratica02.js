function calculeIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} 
    terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
}

const pessoa2 = {
    nome: 'Karla',
    idade: 36,
}
const animal = {
    nome: 'Fiona',
    idade: 5,
    raça: 'Pastor Belga',
}

console.log(calculeIdade.call(animal, 7));
console.log(calculeIdade.apply(pessoa1, [78]));
