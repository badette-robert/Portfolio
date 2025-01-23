document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2, // 2 cartes pour les tablettes
      },
      1024: {
        slidesPerView: 3, // 3 cartes pour les grandes résolutions
      }
    },
  });
});
