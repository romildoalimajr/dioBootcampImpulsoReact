function getAnimal(id){
    switch (id) {
        case 1:
            return "cão";
            break;
        case 2:
            return "gato";
            break;
        case 3:
            return "pássaro";
            break;
        case 4:
            return "leão";
            break;
        default:
            return "peixe"
            break;
    }
}

console.log(getAnimal(4));