const stripeContainer = document.querySelector('.stripes')
for(let i = 0; i < 29; i++) {
  const div = document.createElement('div')
  div.className = 'stripe'
  stripeContainer.appendChild(div)
}