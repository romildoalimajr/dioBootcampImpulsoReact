function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

function getUsers(map){
    let users = [];
    for([key,value] of map){
        if(value === "User"){
            users.push(key);
        }
    }
    return users;
}
const usuarios = new Map();

usuarios.set('Flora', 'Admin');
usuarios.set('Romildo', 'Admin');
usuarios.set('Junior', 'User');
usuarios.set('Nathalia', 'User');
usuarios.set('Zezinho', 'User');
usuarios.set('Ninja', 'User');
usuarios.set('Chapolin', 'Admin');
usuarios.set('Seu Madruga', 'Admin');

console.log(getAdmins(usuarios));
console.log(getUsers(usuarios));