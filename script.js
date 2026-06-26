const menu = document.querySelector('.menu');
const navLinks = document.querySelector('#navLinks');
if (menu && navLinks) {
  menu.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}
