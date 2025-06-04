const num = document.querySelector('.num');
const minusBtn = document.querySelector('.btn-minus');
const plusBtn = document.querySelector('.btn-plus');

let count = 0;

const updateNum = (direction) => {
  count += direction;

  if(count <= 0) {
    minusBtn.classList.add('disabled');
  } else {
    minusBtn.classList.remove('disabled');
  }

  // 이전 애니메이션 중인 요소 제거
  num.querySelectorAll('.fade-out.minus, .fade-out.plus').forEach(el => el.remove());
  
  const currNum = num.querySelector('.fade-in');
  if(currNum) {
    currNum.classList.remove('fade-in');
    currNum.className = 'fade-out ' + (direction > 0 ? 'plus' : 'minus');
  }

  const nextNum = document.createElement('span');
  nextNum.className = 'fade-in ' + (direction > 0 ? 'plus' : 'minus');
  nextNum.textContent = count;
  num.appendChild(nextNum);
}

minusBtn.addEventListener('click', () => updateNum(-1));
plusBtn.addEventListener('click', () => updateNum(1));