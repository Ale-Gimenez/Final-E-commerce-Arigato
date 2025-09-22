// Função para adicionar produto ao carrinho
function addToCart(card) {
    let adicionado = window.confirm("Você deseja adicionar ao carrinho?");
    if (adicionado) {
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        let produto = {
            id: card.id,
            nome: card.querySelector("h2").textContent,
            descricao: card.querySelector("p").textContent,
            preco: card.querySelector("h3").textContent.replace("R$ ", "").trim(),
            imagem: card.querySelector("img").getAttribute("src")
        };

        // Adiciona no carrinho
        carrinho.push(produto);

        // Salva no localStorage
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        alert("✅ Item adicionado ao carrinho!");
    } else {
        alert("❌ Item não adicionado.");
    }
}

document.querySelectorAll(".carrinhobtn").forEach(botao => {
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        
        let card = botao.closest("div[id]");
        addToCart(card);
    });
});
