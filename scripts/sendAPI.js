const $name = document.getElementById('nome');
const $lastname = document.getElementById('sobrenome');
const $inpemail = document.getElementById('email');
const $inpsenha = document.getElementById('senha');
const $for = document.getElementById('form');


const $user = {
    "firstName": `${$name.value}`,
    "lastName": `${$lastname.value}`,
    "email": `${$inpemail.value}`,
    "password": `${$inpsenha.value}`
}

import {ArrayAcerto} from './register.js'

console.log(ArrayAcerto)

for( let i = 0; i <= ArrayAcerto.length; i++){

    console.log('entrou no for')
    let cont = 0;

    if(ArrayAcerto[i] === 'ok'){
        cont+1;
        console.log('entrou no if do for e somou 1')
    }

    if(cont == 4){
        console.log('deu certo')
    }
    else{
        console.log('deu ruim')
    }


}
// if(ArrayAcerto.length = 4){
//     console.log('export feito com sucesso')
//     console.log(ArrayAcerto)
// }
// else{
//     console.log('export feito, mas com defeito')
// }


    

// fetchAPI();
function fetchAPI(){
        fetch('https://ctd-todo-api.herokuapp.com/v1/users', {
            method: 'POST',
            headers: {
                'Accept': '*/*, application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  $user  })
        })
        .then((response) => response.json())
        .then(response => console.log(response))
    }




