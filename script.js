// Aguarda o carregamento completo do documento HTML
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o elemento do contador de itens do carrinho
    const contadorCarrinho = document.getElementById("contador-carrinho");
    
    // Seleciona todos os botões de adicionar ao carrinho
    const botoesAdicionar = document.querySelectorAll(".btn-add");
    
    // Inicializa a variável de controle do estado do carrinho
    let quantidadeItens = 0;

    // Adiciona um evento de escuta para cada botão encontrado
    botoesAdicionar.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // Incrementa a quantidade de itens
            quantidadeItens++;
            
            // Atualiza a interface gráfica (DOM) em tempo real
            contadorCarrinho.textContent = quantidadeItens;
            
            // Feedback visual rápido mudando o texto do botão temporariamente
            const textoOriginal = botao.textContent;
            botao.textContent = "Adicionado! ✓";
            botao.style.backgroundColor = "#2ecc71";
            
            // Retorna o botão ao estado original após 1 segundo
            setTimeout(function() {
                botao.textContent = textoOriginal;
                botao.style.backgroundColor = "#3498db";
            }, 1000);
        });
    });
});