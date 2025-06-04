const center = document.querySelector('.center')
const marker = document.querySelector('.marker')
const card = document.querySelector('.card')

marker.addEventListener('click', () => {
  center.classList.add('active')
})
card.addEventListener('click', () => {
  center.classList.remove('active')
})