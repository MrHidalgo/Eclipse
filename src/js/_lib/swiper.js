

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {
	let slideshow1Swiper = null,
		slideshow2Swiper = null;

	slideshow1Swiper = new Swiper('.slideshow1Swiper', {
    // loop: true,
    freeMode: true,
    effect: 'slide',
		speed: 1000,
    autoplay: {
      delay: 4500,
	    disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 30,
		breakpoints: {
			280: {
				spaceBetween: 5
			},
			768: {
				spaceBetween: 30
			},
		},
    on: {
      "init": function () {
        $(this.$el).css({opacity: 1});
      },
    }
  });

	slideshow2Swiper = new Swiper('.slideshow2Swiper', {
    // loop: true,
    freeMode: true,
    effect: 'slide',
		speed: 1000,
    autoplay: {
      delay: 4500,
	    disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 30,
		breakpoints: {
			280: {
				spaceBetween: 5
			},
			768: {
				spaceBetween: 30
			},
		},
    on: {
      "init": function () {
        $(this.$el).css({opacity: 1});
      },
    }
  });

	new Swiper('.reviewsSwiper', {
		centeredSlides: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 850,
		effect: 'slide',
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
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

	new Swiper('.bestSwiper', {
		speed: 850,
		slidesPerView: 'auto',
		spaceBetween: 50,
		effect: 'slide',
		pagination: {
			el: '.best .swiper-pagination',
			clickable: true
		},
		breakpoints: {
			280: {
				spaceBetween: 10
			},
			768: {
				spaceBetween: 20
			},
			1024: {
				spaceBetween: 30
			},
		},
	});
};
