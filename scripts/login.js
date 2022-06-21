const $inpEmail = document.getElementById('inputEmail');
const $inpSenha = document.getElementById('inputPassword');
const $btnAccess = document.getElementById('btn');



function fetchAPI() {
    fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', {
        method: 'POST',
        headers: {
            'Accept': '*/* , application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
                "email": `${$inpEmail.value}`,
                "password": `${$inpSenha.value}`
            })
    })
    .then((response) => response.json())
    .then((data) => {
        localStorage.setItem("token", JSON.stringify(data));
        window.location.href = 'tarefas.html';

        console.log(data);
    })
    .then(preventDefault);
};
