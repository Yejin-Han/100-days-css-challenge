const profiles = document.querySelectorAll('.profile');
const detailWrap = document.querySelector('.detail-wrap');
const btnClose = document.querySelector('.btn-close');

const profileImg = document.querySelector('.detail-header .img-wrap img');
const name = document.querySelector('.name');
const nameList = ['Julia Toth', 'Ethan Parker', 'Lily Bennett', 'Sophia Collins'];

profiles.forEach((profile, idx) => {
  profile.addEventListener('click', () => {
    detailWrap.classList.add('active');

    // 이름/이미지 클릭한 profile에 따라 바꾸기
    name.textContent = nameList[idx];
    profileImg.src = `https://100dayscss.com/codepen/13-${idx + 1}.jpg`;
  });
});

btnClose.addEventListener('click', () => {
  detailWrap.classList.remove('active');
});