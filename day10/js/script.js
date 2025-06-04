// 초 자리에 점 찍기
const points = document.querySelector('.points');
for(let i = 0; i < 60; i++) {
  const point = document.createElement('div');
  point.classList.add('point');
  points.appendChild(point);
}

// 실시간 시계
let timeRafId;

const day = document.querySelector('.day');
const date = document.querySelector('.date');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');

const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

let now = new Date();
day.textContent = dayList[now.getDay()];
date.textContent = now.getDate().toString().padStart(2, '0');
month.textContent = monthList[now.getMonth()];
year.textContent = now.getFullYear();

const updateTime = () => {
  now = new Date();
  hour.textContent = now.getHours().toString().padStart(2, '0');
  minute.textContent = now.getMinutes().toString().padStart(2, '0');

  timeRafId = requestAnimationFrame(updateTime);
}
updateTime();

// 타임 프로그레스 바 실제 시간 기준으로 시작점 리셋
const progressCircle = document.querySelector('.progress circle');
const seconds = now.getSeconds();
const animationDelay = -(seconds / 60) * 60; // 현재 초를 기준으로 애니메이션을 앞당김

progressCircle.style.animationDelay = `${animationDelay}s`