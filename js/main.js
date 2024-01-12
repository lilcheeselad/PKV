const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});

const gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const reviewsSwiper = new Swiper('.reviews-swiper', {
  slidesPerView: 2,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("bgForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("bgForm").style.display = "none";
}

