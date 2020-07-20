/** @format */

var deeSwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  height: '450px',
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
});

const menuItems = ['Будущее уже рядом', 'Высокое качество', 'Непросто дома'];
const textSlides = [
  {
    title: 'Будущее уже рядом',
    content: `
      <h1>
      <span>Будущее</span><br />
        уже рядом
      </h1>
      В жилом квартале "Центральный" реализована концепция нового города
      будущего. Это следующий уровень астраханского девелопмента &mdash;
      комплекс <strong>повышенной комфортности</strong>
      `,
    slideNumber: 1,
  },
  {
    title: 'Высокое качество',
    content: `
      <h1>
      <span>Высокое</span><br />
        качество
      </h1>
      2-й слайд: В жилом квартале "Центральный" реализована концепция нового города
      будущего. Это следующий уровень астраханского девелопмента &mdash;
      комплекс <strong>повышенной комфортности</strong>
      `,
    slideNumber: 2,
  },
  {
    title: 'Не просто дома',
    content: `
      <h1>
      <span>Не просто</span> дома
      </h1>
      3-й слайд: В жилом квартале "Центральный" реализована концепция нового города
      будущего. Это следующий уровень астраханского девелопмента &mdash;
      комплекс <strong>повышенной комфортности</strong>
      `,
    slideNumber: 3,
  },
];

const blockBorder = `<div class="future__text-block"></div>`;
const deviceWidth = document.documentElement.clientWidth;

if (deviceWidth < 768) {
  document.querySelectorAll('#slide-img').forEach((el) => {
    el.style.height = '300px';
  });
}

function updateSlides(currentSlide) {
  document.querySelector('.future__text-block-wrapper').innerHTML =
    blockBorder +
    textSlides.find((el) => el.slideNumber === +currentSlide).content;
  document.querySelector('.future__additional').innerHTML =
    blockBorder +
    textSlides.find((el) => el.slideNumber === +currentSlide).content;
}

function updateLinks(currentSlide) {
    document.querySelectorAll('#link').forEach(el => {
      el.classList.remove('active');
      +el.getAttribute('slide') === currentSlide ? el.classList.add('active') : null;
    })
  }

document.querySelectorAll('#link').forEach((el) => {
  el.addEventListener('click', (event) => {
    document.querySelectorAll('#link').forEach((link) => {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
    updateSlides(event.target.getAttribute('slide'));
    deeSwiper.slideTo(event.target.getAttribute('slide'), 300, false);
  });
});


deeSwiper.on('slideChange', () => {
    const currentSlide = deeSwiper.realIndex + 1;
    updateSlides(currentSlide);
    updateLinks(currentSlide);
  })