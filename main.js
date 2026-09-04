const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {

    botoes[i].onclick = function () {

        // Remove o ativo de todos os botões
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
        }

        // Ativa o botão clicado
        botoes[i].classList.add("ativo");


        // Esconde todos os conteúdos
        for (let j = 0; j < abas.length; j++) {
            abas[j].classList.remove("ativo");
        }


        // Pega o conteúdo correspondente
        const conteudo = botoes[i].getAttribute("data-conteudo");

        // Mostra o conteúdo
        document.getElementById(conteudo).classList.add("ativo");
    };
}