const menu = document.getElementById("menu"); //pegando o elemento pelo id


//estamos pegando o elemento de forma genérica - pode ser classe (precisa trazer o ponto) ou pode ser ID precisa trazer a #
const navMenu = document.querySelector(".navegacao");

menu.addEventListener("click", function() {
    if(navMenu.className == "navegacao"){
        navMenu.className = "navegacao ativo"
    }

    else{
        navMenu.className = "navegacao";
    }
})