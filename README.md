<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Yan Cell Assistec</title>
  <link rel="icon" href="logofinal.png" type="image/png" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Yan Cell Assistec</title>
  <link rel="icon" href="logofinal.png" type="image/png" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/qrcode@1.4.4/build/qrcode.min.js"></script>
  <style>
    :root {
      --primary-color: #d2e0dc;
      --secondary-color: #1c1c1c;
      --accent-color: #181e1c;
      --text-color: #ffffff;
      --background-color: #121212;
      --card-bg-color: #1e1e1e;
      --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      --border-radius: 12px;
      --transition: all 0.3s ease;
      --font-family: 'Inter', sans-serif;
    }

    body {
      margin: 0;
      font-family: var(--font-family);
      background-color: var(--background-color);
      color: var(--text-color);
      line-height: 1.6;
      padding-top: 80px;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: var(--card-bg-color);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      z-index: 999;
      padding: 20px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header h1 {
      font-size: 1.5rem;
      color: var(--primary-color);
    }

    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
      margin: 0;
      padding: 0;
    }

    nav ul li a {
      text-decoration: none;
      color: var(--text-color);
      font-weight: 600;
      transition: var(--transition);
    }

    nav ul li a:hover {
      color: var(--primary-color);
    }

    main {
      padding: 20px;
    }

    h2 {
      color: var(--primary-color);
      border-bottom: 2px solid var(--primary-color);
      padding-bottom: 8px;
      margin-bottom: 25px;
      font-size: 1.8rem;
      animation: fadeInUp 0.6s ease-out;
    }

    section {
      margin-bottom: 50px;
      padding: 0 20px;
      animation: fadeInUp 0.6s ease-out;
    }

    .produto {
      background: var(--card-bg-color);
      border-radius: var(--border-radius);
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: var(--card-shadow);
    }

    .carrinho {
      margin-top: 20px;
    }

    button {
      background-color: var(--primary-color);
      color: #fff;
      border: none;
      padding: 12px 20px;
      font-size: 1rem;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: transform 0.2s ease, background-color 0.3s ease;
      font-weight: 600;
      box-shadow: 0 4px 10px rgba(0, 200, 150, 0.3);
    }

    button:hover {
      background-color: #00e6ac;
      transform: scale(1.03);
      box-shadow: 0 6px 14px rgba(0, 200, 150, 0.5);
    }

    button:active {
      transform: scale(0.97);
    }

    #pixModal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0,0,0,0.8);
      z-index: 9999;
      justify-content: center;
      align-items: center;
    }

    #pixModalContent {
      background: #fff;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      max-width: 400px;
      width: 100%;
      color: #000;
    }

    #pixModalContent button {
      margin-top: 20px;
    }

    #pixCodeText {
      word-break: break-word;
      font-size: 0.9rem;
      background: #f0f0f0;
      padding: 10px;
      border-radius: 8px;
      margin-top: 10px;
    }
  
  </style>
</head>
<body>
  <header>
    <h1>Yan Cell Assistec</h1>
    <nav>
      <ul>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#produtos">Produtos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="servicos">
      <h2>Serviços</h2>
      <div class="produto">
        <h3>Smartphone Android</h3>
        <label><input type="checkbox" value="Diagnóstico Android"> Diagnóstico</label>
        <label><input type="checkbox" value="Atualização de Software Android"> Atualização de Software</label>
        <label><input type="checkbox" value="Troca de Peças Android"> Troca de Peças</label>
        <label><input type="checkbox" value="Orçamento Android"> Orçamento</label>
        <button onclick="adicionarAoCarrinho('android')">Adicionar ao Carrinho</button>
      </div>
      <div class="produto">
        <h3>Aparelhos Apple</h3>
        <label><input type="checkbox" value="Diagnóstico Apple"> Diagnóstico</label>
        <label><input type="checkbox" value="Atualização de iOS"> Atualização de iOS</label>
        <label><input type="checkbox" value="Troca de Peças Apple"> Troca de Peças</label>
        <label><input type="checkbox" value="Orçamento Apple"> Orçamento</label>
        <button onclick="adicionarAoCarrinho('apple')">Adicionar ao Carrinho</button>
      </div>
      <h3>Notebook</h3>
      <label><input type="checkbox" value="Diagnóstico Apple"> Diagnóstico</label>
      <label><input type="checkbox" value="Atualização de iOS"> Instalação de Windows</label>
      <label><input type="checkbox" value="Troca de Peças Apple"> Troca de peças</label>
      <label><input type="checkbox" value="Orçamento Apple"> Orçamento</label>
      <button onclick="adicionarAoCarrinho('apple')">Adicionar ao Carrinho</button>
      <div>

      </div>
    </section>

    <section id="produtos">
      <h2>Produtos</h2>
      <div class="produtos-grid">
        <div class="produto-card">
          <img src="pelicula.jpg" alt="Película de Vidro">
          <h4>Película de Vidro</h4>
          <p>R$ 20,00</p>
        </div>
        <div class="produto-card">
          <img src="capinha.jpg" alt="Capinha para celular">
          <h4>Capinha para Celular</h4>
          <p>R$ 35,00</p>
        </div>
      </div>
      <div class="carrinho">
        <h3>Itens no Carrinho:</h3>
        <ul id="lista-carrinho"></ul>
        <button onclick="limparCarrinho()">Limpar Tudo</button>
        <button onclick="finalizarPagamento()">Finalizar Pedido via WhatsApp</button>
      </div>
    </section>

    <section id="contato">
      <h2>Contato</h2>
      <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone">

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>

  <script>
    function adicionarAoCarrinho(grupo) {
      const checkboxes = document.querySelectorAll(`.produto input[type='checkbox']`);
      const lista = document.getElementById("lista-carrinho");

      checkboxes.forEach(cb => {
        if (cb.checked) {
          const valor = cb.value;
          const existe = [...lista.children].some(item => item.textContent === valor);
          if (!existe) {
            const item = document.createElement("li");
            item.textContent = valor;
            item.onclick = () => item.remove();
            lista.appendChild(item);
          }
        }
      });
    }

    function limparCarrinho() {
      if (confirm("Deseja realmente limpar o carrinho?")) {
        document.getElementById("lista-carrinho").innerHTML = "";
      }
    }

    function finalizarPagamento() {
      const lista = document.getElementById("lista-carrinho");
      const itens = [...lista.children].map(li => li.textContent).join("\n");
      if (!itens) {
        alert("Seu carrinho está vazio.");
        return;
      }
      const msg = encodeURIComponent(`Olá! Gostaria dos seguintes serviços:\n${itens}`);
      const numero = "5579996268137";
      window.open(`https://wa.me/${numero}?text=${msg}`, '_blank');
    }
  </script>
</body>
</html>
