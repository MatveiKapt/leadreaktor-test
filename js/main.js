const offersList = document.querySelector('.profit__offers-list');
const eventsList = document.querySelector('.events__list');
const offers = offersList.querySelectorAll('.offers-list__item');
const events = eventsList.querySelectorAll('.swiper-slide');

function setPreviewHeightInPixel() {
  const block = document.querySelector('.preview');
  const viewportHeight = window.innerHeight;
  
  if (block && window.innerWidth < 768) {
      const paddingTopInPixel = viewportHeight * 0.16;
      const minHeightInPixel = viewportHeight * 0.84;
      const heightInPixel = viewportHeight * 0.84;

      block.style.paddingTop = paddingTopInPixel + 'px';
      block.style.minHeight = minHeightInPixel + 'px';
      block.style.height = heightInPixel + 'px';
  }
}


setPreviewHeightInPixel(); 

const removeSlidesForMobile = (slidesArray, slidesList, needSlidesCount) => {
  const offersForMobile = Array.from(slidesArray).slice(0, needSlidesCount);
  slidesList.innerHTML = '';
  offersForMobile.forEach(offer => {
    slidesList.appendChild(offer);
  });
};

const removeSlidesForTablet = (slidesArray, slidesList) => {
  const offersForMobile = Array.from(slidesArray).slice(0, 8);
  slidesList.innerHTML = '';
  offersForMobile.forEach(offer => {
    slidesList.appendChild(offer);
  });
};


const createOffersSlider = () => {
  if (window.innerWidth < 768) {
    removeSlidesForMobile(offers, offersList, 4);
    return new Swiper('#offers-slider', {
      slidesPerView: 1.3,
      slidesPerGroup: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    removeSlidesForTablet(offers, offersList, 4);
    return new Swiper('#offers-slider', {
      slidesPerView: 4,
      spaceBetween: 20,
      initialSlide: 1,
      slidesPerGroup: 1,
      freeMode: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  if (window.innerWidth >= 1200 && window.innerWidth < 1920) {
    return new Swiper('#offers-slider', {
      slidesPerView: 4,
      spaceBetween: 12,
      slidesPerGroup: 4,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.profit .swiper-button-next',
        prevEl: '.profit .swiper-button-prev',
      },
    });
  }

  if (window.innerWidth >= 1920) {
    return new Swiper('#offers-slider', {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.profit .swiper-button-next',
        prevEl: '.profit .swiper-button-prev',
      },
    });
  }
};

const createEventsSlider = () => {
  if (window.innerWidth < 768) {
    return new Swiper('#events-slider', {
      slidesPerView: 1.4,
      slidesPerGroup: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".events .swiper-pagination",
        clickable: true,
      },
    });
  }

  if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    return new Swiper('#events-slider', {
      slidesPerView: 1.6,
      slidesPerGroup: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".events .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.events .swiper-button-next',
        prevEl: '.events .swiper-button-prev',
      },
    });
  }

  if (window.innerWidth >= 1200 && window.innerWidth < 1919) {
    return new Swiper('#events-slider', {
      slidesPerView: 3.9,
      slidesPerGroup: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".events .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.events .swiper-button-next',
        prevEl: '.events .swiper-button-prev',
      },
    });
  }

  if (window.innerWidth >= 1920) {
    return new Swiper('#events-slider', {
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: ".events .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.events .swiper-button-next',
        prevEl: '.events .swiper-button-prev',
      },
    })
  }
};

createOffersSlider();
createEventsSlider();

