
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if ((path === '' && href === 'index.html') || href === path) {
      a.classList.add('active');
    }
  });

  // Simple client-side search on publications page
  const search = document.querySelector('#pub-search');
  if (search){
    const rows = Array.from(document.querySelectorAll('#pub-table tbody tr'));
    search.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      rows.forEach(r => {
        r.style.display = r.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }
});
