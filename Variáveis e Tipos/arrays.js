let array = []; /* array vazio */;

array.push(3); /*adiciona elemento no array e coloca no final da lista*/
console.log(array);
array.push(2);
console.log(array);
array.pop(2); // retira elemento do array
console.log(array);
array.push(2); 
array.push(5);

console.log(array);

array.shift(); //retira o primeiro elemento
console.log(array);

array.unshift(1); //adiciona no início da lista

console.log(array);

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

console.log(array.every(item => item === 5)); // verifica se todos os íténs tem o mesmo valor
console.log(array.some(item => item === 5)); // verifica se há um item com o valor específico
console.log(array.reverse()); //inverte os valores na posição do array




