// Função do botão de voltar ao topo
document.addEventListener('DOMContentLoaded', function() {
  // cria o botão de voltar ao topo
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
  backToTopBtn.setAttribute('title', 'Voltar ao topo');
  
  // adiciona o botão ao corpo da página
  document.body.appendChild(backToTopBtn);
  
  // mostra/esconde o botão com base na posição de rolagem
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // rolagem suave para o topo quando o botão é clicado
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}); 