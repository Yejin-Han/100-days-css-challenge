const btnMenu = document.querySelector('.btn-menu')
const nav = document.querySelector('.nav')

btnMenu.addEventListener('click', () => {
  if(btnMenu.classList.contains('paused')) btnMenu.classList.remove('paused')
  btnMenu.classList.add('active')
  nav.classList.add('active')
})

nav.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    nav.classList.remove('active')
    btnMenu.classList.remove('active')
  })
})