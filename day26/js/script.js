let activeIdx = 0
const btns = document.querySelectorAll('.card-btn')
const cards = document.querySelectorAll('.card')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    cards[activeIdx].classList.remove('active')
    cards[activeIdx].classList.add('inactive')

    activeIdx = (activeIdx + 1) % cards.length

    cards[activeIdx].classList.remove('inactive')
    cards[activeIdx].classList.add('active')
  })
})