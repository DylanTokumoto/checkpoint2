const $form = document.getElementById('form');
const $input = document.querySelectorAll('input');
const $nome = document.getElementById('nome');
const $sobrenome = document.getElementById('sobrenome');
const $email = document.getElementById('email');
const $senha = document.getElementById('senha');
const $confirm = document.getElementById('confirmSenha');
export const ArrayAcerto = [];

console.log(ArrayAcerto);

$form.addEventListener('submit', (e) => {

    checkName();
    checkLastName();
    checkEmail();
    checkSenha();

    function checkName () {
        
        if ($nome.value === '' || $nome.value == null){
            e.preventDefault()
            console.log('nao inseriu o nome')
            console.log(ArrayAcerto)
            ArrayAcerto.shift();
            console.log(ArrayAcerto)
        }

        else{
            console.log('inseriu o nome corretamente')
            ArrayAcerto.unshift('ok')
            console.log(ArrayAcerto)
        }
    }

    function checkLastName(){

        if($sobrenome.value === '' || $sobrenome.value == null){
            e.preventDefault()
            console.log('nao inseriu o sobrenome')
        }

        else{
            console.log('inseriu o sobrenome corretamente')
            ArrayAcerto.push('ok')
        }
    }

    function checkEmail(){

        if($email.value === '' || $email.value == null){
            e.preventDefault()
            console.log('nao inseriu email')
        }

        else if(!isEmail($email.value)){
            e.preventDefault()
            console.log('nao inseriu o email corretamente')
        }

        else {
            console.log('email inserido corretamente')
            ArrayAcerto.push('ok')
        }

        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }
    }

    function checkSenha(){

        if($senha.value === '' || $senha.value == null){
            e.preventDefault()
            console.log('nao inseriu a senha')
        }

        else if($senha.value.length < 8){
            e.preventDefault()
            console.log('inseriu a senha com menos de 8 digitos')
        }

        else if ($senha.value.length > 15 ){
            e.preventDefault();
            console.log('inseriu senha maior que 15 digitos');
        }

        else if(!/[A-Z]/.test($senha.value)){
            e.preventDefault()
            console.log('não colocou letra MAISCULA')
        }

        else if(!/[0-9]/.test($senha.value)){
            e.preventDefault()
            console.log('nao colocou numeros')
        }

        else if(!/[^A-Za-z0-9]/.test($senha.value)){
            e.preventDefault()
            console.log('nao colocou caracteres especiais')
        }

        else{
            console.log('tudo OK')
        }

        if($senha.value != $confirm.value){
            e.preventDefault();
            console.log('As senhas não são iguais')
        }

        else{
            console.log('senhas iguais, tudo certo')
            ArrayAcerto.push('ok')
        }

    }
})





