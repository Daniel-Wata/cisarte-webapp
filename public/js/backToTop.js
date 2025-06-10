// Back to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create the back to top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
  backToTopBtn.setAttribute('title', 'Voltar ao topo');
  
  // Add button to the page
  document.body.appendChild(backToTopBtn);
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Smooth scroll to top when button is clicked
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}); 