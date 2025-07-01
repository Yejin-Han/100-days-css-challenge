const sky = document.querySelector('.sky')

for(let i = 0; i < 306; i++) {
  const div = document.createElement('div')
  if(i < 300) {
    div.classList.add('star', `star-${i + 1}`)
  } else {
    div.classList.add('shooting-star', `shooting-star-${i + 1 - 300}`)
  }
  sky.appendChild(div)
}