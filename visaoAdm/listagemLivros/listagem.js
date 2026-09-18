const livros = document.querySelectorAll('.livro');
const botaoAnterior = document.getElementById('pagina-anterior');
const botaoProxima = document.getElementById('proxima-pagina');
const numeroPagina = document.querySelector('.pagina-atual');
const quantidadeLivros = document.querySelector('.quantidade-livros');



// CONFIGURAÇÃO PAGINAÇÃO



// Defini quantos livros serão mostrados em cada página
const livrosPorPagina = 4;

// Guarda qual página está sendo exibida, começando da página 1
let paginaAtual = 1;


// Calculando o total de páginas

//Divide a quantidade total de livros pela quantidade de livros por página
// Math.cell() -> arredonda o resultado para cima

// Ex: 10 livros / 4 por página = 2,5 páginas
//  Math.cell() = 2,5 arredonda para cima -> 3 páginas
const totalPaginas = Math.ceil(livros.length / livrosPorPagina);


// Função responsavel por mostra a página (atualizar os elementos)
function mostrarPagina() {
    //Decobre o indice do primeiro livro que dev aparecer

    //Página 1:
    // inicio = (1 - 1) * 4 = 0

    // Página 2:
    // (2-1) * 4 = 4

    // livros = [1,2,3,4,5,6,7,8]
    // Página 1 = 1,2,3,4
    // Página 2 = 5,6,7,8
    const inicio = (paginaAtual - 1) * livrosPorPagina;

    // Descobre até onde os livros devem ser exibidos

    // Página 1: inicip 0 -> fim = 0 + 4 = 4
    // Página 2: inicio 4 -> fim = 4 + 4 = 8
    const fim = inicio + livrosPorPagina;

    // Percorre toda a lista de livros encontrados no HTML
    // "livro" representa o elemento atual
    // "posicao" representa a ´posição desse livro na lista
    livros.forEach((livro, posicao) => {

        // inicio na pagina 1 = 0
        // fim = 4

        // verifica se o indice/posicao do livro está dentro do intervalo da página atual.
        if(posicao >= inicio && posicao < fim) {
            // se não estiver dentro do intervalo, mostra o livro
            livro.style.display = "grid";
        }
        else{
            // se não estiver, esconde o livro
            livro.style.display = "none"
        }
    });

    // Atualiza no HTML o número da página atual
    numeroPagina.textContent = paginaAtual;

    // Inicialmente consideramos o "fim" como a posição do último livro mostrado
    let ultimoLivro = fim;

    //Se o valor ultrapassar a quantidade real de livros, usamos a quantidade total
    if(ultimoLivro > livros.length){
        ultimoLivro = livros.length;
    };

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros.`;
};



// EVENTO DE CLICK NO BOTÃO DE PRÓXIMA PÁGINA

botaoProxima.addEventListener("click", () => {
    // Só permite avançar se ainda existir uma próxima página
    if(paginaAtual < totalPaginas){
        // Avança uma página
        // páginaAtual = paginaAtual + 1
        paginaAtual++;
        
        // Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})



// EVENTO DE CLICK NO BOTÃO DE ANTERIOR PÁGINA

botaoAnterior.addEventListener("click", () => {
    // Só permite voltar se não estivermos na primeira página
    if(paginaAtual > 1){
        // Voltamos uma página
        paginaAtual--;

        // Atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

// Quando a página carreagar precisamos executar a função de mostrar página para esconder os livros que não pertencem a primeira página
mostrarPagina();
