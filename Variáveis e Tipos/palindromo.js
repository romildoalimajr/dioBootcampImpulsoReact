// solução numero 01
function verificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("arara"));

/* solução número 02 */

function verifica02(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i]) {return false};
    }
    return true;
}

console.log(verifica02("biscoito"));