const pics = document.querySelectorAll('.pic')
pics.forEach(pic => {
  pic.addEventListener('click', () => {
    pics.forEach(el => el.classList.toggle('fade-out'))
    pic.classList.remove('fade-out')
    pic.classList.toggle('active')
  })
})