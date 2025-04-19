document.getElementById('searchInput').addEventListener('input', function() {
    var searchInput = this;
    var clearBtn = document.getElementById('clearBtn');
    var searchIcon = document.getElementById('searchIcon');
  
    if (searchInput.value.length > 0) {
      searchIcon.style.display = 'none';  // Oculta o ícone de lupa
      clearBtn.style.display = 'block';  // Exibe o ícone de "X"
    } else {
      searchIcon.style.display = 'block';  // Exibe o ícone de lupa
      clearBtn.style.display = 'none';    // Oculta o ícone de "X"
    }
  });
  
  // Limpa o campo quando o "X" é clicado
  document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchIcon').style.display = 'block'; // Exibe o ícone de lupa
    document.getElementById('clearBtn').style.display = 'none'; // Oculta o "X"
  });
  