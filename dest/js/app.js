'use strict';

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPopups
 *
 * @description
 */
var initPopups = function initPopups() {

	$('[popup-js]').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'is-show',
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			close: function close() {}
		}
	});

	$('[popup-gallery-js]').magnificPopup({
		delegate: 'a.swiper-slide-link',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function titleSrc(item) {
				return item.el.attr('title') + '<small>by Eclipse LTD, Mathew Monk</small>';
			}
		},
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		removalDelay: 300,
		mainClass: 'is-show',
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
	});

	$('[popup-video-js]').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: function id(url) {
						var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
						if (!m || !m[1]) return null;
						return m[1];
					},
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: function id(url) {
						var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
						if (!m || !m[5]) return null;
						return m[5];
					},
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				}
			}
		},
		mainClass: 'is-show',
		removalDelay: 300,
		preloader: false,
		fixedContentPos: false,
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
	});
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {
	var slideshow1Swiper = null,
	    slideshow2Swiper = null;

	slideshow1Swiper = new Swiper('.slideshow1Swiper', {
		loop: true,
		freeMode: true,
		effect: 'slide',
		speed: 1000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		slidesPerView: 'auto',
		spaceBetween: 35,
		on: {
			"init": function init() {
				$(this.$el).css({ opacity: 1 });
			}
		}
	});

	slideshow2Swiper = new Swiper('.slideshow2Swiper', {
		loop: true,
		freeMode: true,
		effect: 'slide',
		speed: 1000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		slidesPerView: 'auto',
		spaceBetween: 35,
		on: {
			"init": function init() {
				$(this.$el).css({ opacity: 1 });
			}
		}
	});

	new Swiper('.reviewsSwiper', {
		centeredSlides: true,
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 1000,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false
		},
		effect: 'cube',
		cubeEffect: {
			shadow: false,
			slideShadows: false,
			shadowOffset: 20,
			shadowScale: 0.94
		},
		pagination: {
			el: '.reviews .swiper-pagination',
			type: 'fraction',
			renderFraction: function renderFraction(currentClass, totalClass) {
				var zeroPad = function zeroPad(num, places) {
					return String(num).padStart(places, '0');
				};

				var CUR = this.realIndex + 1,
				    TOTAL = this.slides.length;

				return '<p class="' + currentClass + '">' + zeroPad(CUR, 2) + '</p>' + '/' + '<span class="' + totalClass + '">' + zeroPad(TOTAL, 2) + '</span>';
			}
		},
		navigation: {
			nextEl: '.reviews__btn--next',
			prevEl: '.reviews__btn--prev'
		}
	});

	new Swiper('.bestSwiper', {
		speed: 1000,
		autoplay: {
			delay: 7500,
			disableOnInteraction: false
		},
		slidesPerView: 'auto',
		spaceBetween: 30,
		slidesOffsetAfter: 30,
		effect: 'slide',
		pagination: {
			el: '.best .swiper-pagination',
			clickable: true
		}
	});
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var slideShowPreview = function slideShowPreview() {
		$('[slideshow-preview-js]').on('click', function (ev) {
			$('[popup-gallery-js]').find('a.swiper-slide-link').eq(0).trigger('click');
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initSwiper();
		initPopups();
		// ==========================================

		// callback
		slideShowPreview();
		// ==========================================
	};
	initNative();
})();