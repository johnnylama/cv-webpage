(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);
  toggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
  });
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('[data-spy]');
  function onScroll() {
    let fromTop = window.scrollY + 100;
    sections.forEach(sec => {
      const id = sec.getAttribute('id');
      if (sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
      }
    });
  }
  window.addEventListener('scroll', onScroll); onScroll();
})();