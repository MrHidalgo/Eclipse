

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
};
