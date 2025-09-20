const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-popup');

// Abrir popup
document.querySelectorAll('.orgao').forEach(orgao => {
  orgao.addEventListener('click', () => {
    document.getElementById('popup-title').textContent = orgao.dataset.nome;
    document.getElementById('popup-desc').textContent = orgao.dataset.desc;

    popup.style.display = 'block';
    overlay.style.display = 'block';
  });
});

// Fechar popup com botão
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});

// Fechar popup clicando no overlay
overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
});

// Fechar popup clicando fora do popup (opcional)
document.addEventListener('click', (e) => {
  if (popup.style.display === 'block' &&
      !popup.contains(e.target) &&
      !e.target.classList.contains('orgao') &&
      e.target !== overlay) {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  }
});
