const retornaNomes = function(){
    return this.nome;
};

let romildo = retornaNomes.bind({nome:'Romildo Alves'});

console.log(romildo());