let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; //MOSTRA TAMANHO DOS CARACTERES

slider.oninput = function(){
    sizePassword.innerHTML = this.value; //ATUALIZA O TAMANHO DOS CARACTERES CONFORME ALTERA NA HORA
}

function generatePassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n)); //GERA NÚMERO ALEATÓRIO COM TAMANHO DE CARACTERES DO CHARSET
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    //alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
