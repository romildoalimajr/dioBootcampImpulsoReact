const pessoa = {
    firstName: "Romildo",
    lastName: "Alves",
    id: 1,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
}
console.log(pessoa.fullName());

console.log(pessoa.getId());