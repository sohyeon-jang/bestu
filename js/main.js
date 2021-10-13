const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', function () {
  searchInputEl.focus(); /* 돋보기 아이콘 누르면 검색창 */
});


searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused'); /* 포커스가 된 상태 */
  searchInputEl.setAttribute('placeholder', '내용을 입력하세요');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused'); /* 포커스가 안된 상태 */
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간)





// 사진 하나씩 에니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});




// 공지사항 슬라이드
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  // autoplay: true, //자동재생
  // loop: true
});




new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal',

  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드 가운데 보이기
  // loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});






// 'BestU 프로모션' 슬라이드
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
})


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021