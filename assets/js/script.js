// Alternância de seções
function mostrarSecao(secaoId) {
    document.querySelectorAll('.container-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(secaoId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Fecha Pix se sair de produtos
    if (secaoId !== 'produtos') fecharPagamentoPix();
}

// Carrinho melhorado
let carrinho = [];

function adicionarAoCarrinhoMelhorado(produto) {
    const opcoes = document.querySelectorAll(`.opcao-produto[data-produto="${produto}"]:checked`);
    const quantidadeInput = document.querySelector(`.produto-quantidade[data-produto="${produto}"]`);
    const quantidade = parseInt(quantidadeInput.value) || 1;

    if (opcoes.length === 0) {
        alert('Selecione pelo menos uma opção para adicionar.');
        return;
    }

    opcoes.forEach(opcao => {
        const item = {
            produto,
            servico: opcao.value,
            quantidade
        };
        // Verifica se já existe igual
        const idx = carrinho.findIndex(i => i.produto === item.produto && i.servico === item.servico);
        if (idx >= 0) {
            carrinho[idx].quantidade += quantidade;
        } else {
            carrinho.push(item);
        }
    });

    atualizarCarrinhoUI();
    salvarCarrinhoNoLocalStorage();
    // Desmarca opções após adicionar
    opcoes.forEach(opcao => opcao.checked = false);
}

function atualizarCarrinhoUI() {
    const lista = document.getElementById("lista-carrinho");
    lista.innerHTML = "";
    carrinho.forEach((item, idx) => {
        const li = document.createElement("li");
        li.innerHTML = `<b>${item.produto}</b> - ${item.servico} <span class="quantidade">x${item.quantidade}</span> <button class="btn btn-sm btn-outline-danger ms-2" onclick="removerItemCarrinho(${idx})">Remover</button>`;
        lista.appendChild(li);
    });
}

function removerItemCarrinho(idx) {
    carrinho.splice(idx, 1);
    atualizarCarrinhoUI();
    salvarCarrinhoNoLocalStorage();
}

function limparCarrinho() {
    if (confirm("Você tem certeza que deseja limpar o carrinho?")) {
        carrinho = [];
        atualizarCarrinhoUI();
        salvarCarrinhoNoLocalStorage();
    }
}

function salvarCarrinhoNoLocalStorage() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function carregarCarrinhoDoLocalStorage() {
    const dados = localStorage.getItem("carrinho");
    if (dados) {
        carrinho = JSON.parse(dados);
        atualizarCarrinhoUI();
    }
}

// Pagamento WhatsApp
function finalizarPagamento() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }
    let itens = carrinho.map(item => `${item.produto} - ${item.servico} (x${item.quantidade})`).join('\n');
    const mensagem = encodeURIComponent(`Olá! Gostaria de contratar os seguintes serviços:\n${itens}\n\nComo posso realizar o pagamento?`);
    const numero = "5579996268137";
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
}

// Pagamento Pix
function abrirPagamentoPix() {
    if (carrinho.length === 0) {
        alert("Adicione itens ao carrinho antes de prosseguir com o pagamento.");
        // Impede a abertura do modal
        var modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('pixModal'));
        modal.hide();
        return false;
    }
    // Modal será aberto automaticamente pelo Bootstrap via data-bs-toggle
    return true;
}
function fecharPagamentoPix() {
    // Não é mais necessário, modal fecha pelo Bootstrap
}
function copiarCodigoPix() {
    const input = document.getElementById("codigoPix");
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Código Pix copiado para a área de transferência.");
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    carregarCarrinhoDoLocalStorage();
    mostrarSecao('home');
});