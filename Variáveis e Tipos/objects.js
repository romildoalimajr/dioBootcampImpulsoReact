let obj = {}; // criação de um objeto

console.log(typeof obj);

obj.name = "Romildo";

console.log(obj);

obj.age = 28;

console.log(obj);

console.log(Object.values(obj)); //valores do objeto
console.log(Object.keys(obj)); //chaves do objeto

let person = {
    name: "Romildo Alves de Lima Junior",
    age: "28",
    address: "Jaboatão dos Guararapes - PE"
}

console.log(person);
console.log(person.name);

person["numberOfSiblings"] = 4;

console.log(person);

let mom = "nameOfMom";

person[mom] = "Vandira";

console.log(person);