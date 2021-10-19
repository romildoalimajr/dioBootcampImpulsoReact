function forInExemplo(obj) {
    for (prop in obj) {
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "Romildo",
    idade: "28",
    cidade: "Jaboatão dos Guararapes"
}

forInExemplo(meuObjeto);

function forInExemplo02(obj) {
    for (prop in obj) {
        console.log(obj[prop]);
    }
}
const meuObjeto2 = {
    nome: "Romildo Alves",
    idade: "28",
    cidade: "Jaboatão dos Guararapes = PE"
}
forInExemplo02(meuObjeto2);
