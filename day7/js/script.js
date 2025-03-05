const btnMenu = document.querySelector('.btn-menu');
const panel = document.querySelector('.panel');

btnMenu.addEventListener('click', () => {
  panel.classList.toggle('open');
});

const btnSearch = document.querySelector('.search-wrap__btn');

btnSearch.addEventListener('click', () => {
  const input = btnSearch.previousElementSibling;
  input.classList.toggle('active');
});
