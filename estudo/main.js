// nullish coslescing orerator

const idade = 27;

document.body.innerText = 'Sua idade é: ' + (idade ?? 'não informado');

//objetos

const user = {
    name: ' Val',
    idade: 13,
    address: {
        street: 'Rua test',
        Number: 176,
    },
};

document.body.innerText = Object.keys(user)
//values  = valores
//JSON.stringify(Object.entries(user))

//desestruturação
const address = user.address
const { addres, idade: age} = user;
// {nickanem = 'fernandes'}
function mostraIdade({idade}){
    return idade;
}


//rest operator
const {name, idade, ...rest} = user;
const arrays = [1,2,3,4,5,6,7,8,9,10]
const [first, , third, ...rest] = arrays
document.body.innerText = json.stringify(rest);


//short syntex
const name = 'val';
const idade = 24;

const user = {
    name,
    idade,
};

document.body.innerText = JSON.stringify(user)



//optional chainig
const user = {
    nome: 'val',
    age:30,
//    addres:{
//        street:'AA',
//        number:176,
//        zip:{
//            code:'212313',
//            city:'Rio'
//        }
//    }
}
//funcao?.()
document.body.innerText = user.address?.zip?.code ?? 'Não infromado';

