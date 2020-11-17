

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {
	let slideshow1Swiper = null,
		slideshow2Swiper = null;

	slideshow1Swiper = new Swiper('.slideshow1Swiper', {
    loop: true,
    grabCursor: true,
    freeMode: true,
    effect: 'slide',
		speed: 1000,
    autoplay: {
      delay: 5000,
	    disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 35,
    on: {
      "init": function () {
        $(this.$el).css({opacity: 1});
      },
    }
  });

	slideshow2Swiper = new Swiper('.slideshow2Swiper', {
    loop: true,
    grabCursor: true,
    freeMode: true,
    effect: 'slide',
		speed: 1000,
    autoplay: {
      delay: 5000,
	    disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 35,
    on: {
      "init": function () {
        $(this.$el).css({opacity: 1});
      },
    }
  });

	new Swiper('.reviewsSwiper', {
		speed: 1000,
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 1,
		spaceBetween: 0,
		effect: 'cube',
		cubeEffect: {
			shadow: false,
			slideShadows: false,
			shadowOffset: 20,
			shadowScale: 0.94,
		},
		pagination: {
			el: '.reviews .swiper-pagination',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				const zeroPad = (num, places) => String(num).padStart(places, '0');

				let CUR = this.realIndex + 1,
					TOTAL = this.slides.length;

				return '<p class="' + currentClass + '">' + zeroPad(CUR, 2) + '</p>' +
					'/' +
					'<span class="' + totalClass + '">' + zeroPad(TOTAL, 2) + '</span>';
			}
		},
		navigation: {
			nextEl: '.reviews__btn--next',
			prevEl: '.reviews__btn--prev',
		},
	});
};
