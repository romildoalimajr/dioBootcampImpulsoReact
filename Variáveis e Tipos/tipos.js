let um = "um";
console.log(typeof um);

let um1 = 1;
console.log(typeof um1);

/* Strings */

let nome = "Romildo";
let sobreNome = "Junior";

console.log(typeof nome);
let concatenado = nome.concat(sobreNome);

console.log(concatenado.length);

let exemplo = new String("blablablabla");

console.log(typeof(exemplo));

let vazio = "";
console.log(typeof vazio);

console.log(nome[1]);

console.log(nome.length);

concatenado = nome + " " + sobreNome;

console.log(concatenado);

concatenado = nome + "\n" + sobreNome;

console.log(concatenado);
concatenado = nome + "\n\n" + sobreNome;

console.log(concatenado);

concatenado = `${nome} ${sobreNome}`;

console.log(concatenado);

let frase = "Olá, tudo bem?";

console.log(frase.split(""));

console.log(frase.split(" "));

console.log(frase.includes("tudo"));

console.log(frase.startsWith('O'))
console.log(frase.startsWith('R'))

console.log(frase.endsWith('R'))

let stringModificada = frase.replace(",","!");

console.log(stringModificada);
