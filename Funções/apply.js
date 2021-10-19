const pessoa = {
    nome: 'Romildo Alves de Lima Junior',
};
const empresa = {
    nome: "Kalango's Tecnologia",
}

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(pessoa);
getSomething.apply(empresa);

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.apply(myObj, [1,5]);