
document.addEventListener('DOMContentLoaded', () => {
  const form   = document.getElementById('searchForm');
  const input  = document.getElementById('searchInput');
  const clear  = document.getElementById('clearBtn');
  const resultsContainer = document.getElementById('searchResults');

  // 1) Exibe/oculta o X e a lupa conforme o input
  input.addEventListener('input', () => {
    if (input.value.trim().length > 0) {
      clear.style.display = 'block';
      document.getElementById('searchIcon').style.display = 'none';
    } else {
      clear.style.display = 'none';
      document.getElementById('searchIcon').style.display = 'block';
      resultsContainer.innerHTML = ''; // Limpa resultados se apagar tudo
    }
  });

  // 2) Limpar o campo ao clicar no X
  clear.addEventListener('click', () => {
    input.value = '';
    clear.style.display = 'none';
    document.getElementById('searchIcon').style.display = 'block';
    resultsContainer.innerHTML = '';
    input.focus();
  });

  // 3) Captura o submit (Enter ou clique na lupa) e faz a busca
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const termo = input.value.trim();
    if (!termo) return;

    try {
      const res = await fetch(`/api/produtos/buscar?q=${encodeURIComponent(termo)}`);
      const produtos = await res.json();

      if (produtos.length === 0) {
        resultsContainer.innerHTML = '<p class="text-muted">Nenhum produto encontrado.</p>';
        return;
      }

      resultsContainer.innerHTML = produtos.map(p => `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card h-100">
            <img src="${p.imagem}" class="card-img-top" alt="${p.nome}">
            <div class="card-body">
              <h5 class="card-title">${p.nome}</h5>
              <p class="card-text">${p.descricao}</p>
              <p class="card-text"><strong>R$ ${p.preco.toFixed(2)}</strong></p>
            </div>
          </div>
        </div>
      `).join('');
    } catch (err) {
      console.error('Erro ao buscar produtos:', err);
      resultsContainer.innerHTML = '<p class="text-danger">Erro ao buscar produtos.</p>';
    }
  });
});

