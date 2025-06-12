const frame = document.querySelector('.frame');
const logoWhite = document.querySelector('.logo.white');
const logoPurple = document.querySelector('.logo.purple');

frame.addEventListener('click', () => {
  logoWhite.classList.toggle('normal');
  logoWhite.classList.toggle('big');
  logoPurple.classList.toggle('small');
  logoPurple.classList.toggle('normal');
});