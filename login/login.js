// var nome = "Maria" --> Não utilizar
// const nome = "Maria"; --> não troca de valor
// let nome = "Maria";
// console.log(nome) = print

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");

console.log(btnSenha.type)

btnSenha.addEventListener("click", function () {

    // if(campoSenha.type == "password"){
    //     campoSenha.type = "text";
    // }
    // else{
    //     campoSenha.type = "password";
    // }

    //Ternario
    campoSenha.type = campoSenha.type == "password" ? "text" : "password";
})