const searchInput = document.querySelector('.search-ip')
const searchSuggestions = document.querySelector('.search-suggestions')

let currIdx = -1
let currSuggestions = []

const renderSuggestions = (val) => {
  currSuggestions = [
    `<strong>${val}</strong>`,
    `Veritatis et <strong>${val}</strong>`,
    `ut aliquid ex <strong>${val}</strong> vero eos`
  ]

  searchSuggestions.innerHTML = `<ul>
    ${currSuggestions.map((text, i) => `<li data-index="${i}">${text}</li>`).join('')}
  </ul>`
  searchSuggestions.classList.add('active')
  currIdx = -1
}

const clearSuggestions = () => {
  searchSuggestions.innerHTML = ''
  searchSuggestions.classList.remove('active')
  currIdx = -1
}

searchInput.addEventListener('input', () => {
  const value = searchInput.value
  if(value) renderSuggestions(value)
  else clearSuggestions()
})

searchInput.addEventListener('keydown', (e) => {
  const items = searchSuggestions.querySelectorAll('li')
  if(!items.length) return

  if(e.key === 'ArrowDown') {
    e.preventDefault()
    currIdx = (currIdx + 1) % items.length
  } else if(e.key === 'ArrowUp') {
    e.preventDefault()
    currIdx = (currIdx - 1 + items.length) % items.length
  } else if(e.key === 'Enter') {
    e.preventDefault()
    if(currIdx >= 0) {
      searchInput.value = items[currIdx].innerText
      clearSuggestions()
    }
    return
  }

  items.forEach((item, idx) => {
    if(idx === currIdx) item.classList.add('on')
    else item.classList.remove('on')
  })
})

searchSuggestions.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI') {
    searchInput.value = e.target.innerText
    clearSuggestions()
  }
})