const tabInputs = document.querySelectorAll('.dashboard__tab__ip');
const boards = document.querySelectorAll('.dashboard__board');

tabInputs.forEach((ip, idx) => {
  ip.addEventListener('change', () => {
    boards.forEach(board => board.classList.remove('show'));
    document.querySelector(`.dashboard__board[data-tab='${idx}']`).classList.add('show');
  });
});

const searchBtn = document.querySelector('.dashboard__search__btn');

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('show');
});