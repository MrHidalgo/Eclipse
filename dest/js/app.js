"use strict";

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
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	if (btn) {
		btn.addEventListener("click", function (ev) {
			var elem = ev.currentTarget;

			elem.classList.toggle("is-active");
			mobileContainer.classList.toggle("is-open");

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.toggle("is-hideScroll");
			});
		});
	}
};

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

	var countScroll = $(window).scrollTop(),
	    headerElement = $('.header');

	if (countScroll > 10) {
		headerElement.addClass("header--fixed");
	} else {
		headerElement.removeClass("header--fixed");
	}
};

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
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
var initSmoothScroll = function initSmoothScroll() {
	var btnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anchor-js]";
	var animateSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 850;


	$(btnName).on("click", function (e) {

		var linkHref = $(e.currentTarget).attr('href'),
		    headerHeight = $(".header").outerHeight() || 0,
		    topHeightOffset = $(linkHref).offset().top - headerHeight;

		if ($(window).width() < 768) {
			document.querySelector("[hamburger-js]").classList.remove("is-active");
			document.querySelector("[mobile-block-js]").classList.remove("is-open");

			document.querySelectorAll("html, body").forEach(function (val, idx) {
				val.classList.remove("is-hideScroll");
			});
		}

		$('body, html').animate({
			scrollTop: topHeightOffset
		}, animateSpeed);
	});
};

/**
 * @name initStellar
 * @description Stellar.js is a jQuery plugin that provides parallax scrolling effects to any scrolling element.
 *
 * Parallax Elements
 * - data-stellar-ratio="1"
 *
 * Parallax Backgrounds
 * - data-stellar-background-ratio="1"
 */
var initStellar = function initStellar() {
	if ($("[parallax-js]").length) {
		$(function () {
			$.stellar({
				// Set scrolling to be in either one or both directions
				horizontalScrolling: false,
				verticalScrolling: true,

				// Set the global alignment offsets
				horizontalOffset: 0,
				verticalOffset: 0,

				// Refreshes parallax content on window load and resize
				responsive: false,

				// Select which property is used to calculate scroll.
				// Choose 'scroll', 'position', 'margin' or 'transform',
				// or write your own 'scrollProperty' plugin.
				scrollProperty: 'scroll',

				// Select which property is used to position elements.
				// Choose between 'position' or 'transform',
				// or write your own 'positionProperty' plugin.
				positionProperty: 'transform',

				// Enable or disable the two types of parallax
				parallaxBackgrounds: true,
				parallaxElements: true,

				// Hide parallax elements that move outside the viewport
				hideDistantElements: false,

				// Customise how elements are shown and hidden
				hideElement: function hideElement($elem) {
					$elem.hide();
				},
				showElement: function showElement($elem) {
					$elem.show();
				}
			});
		});
	}
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
		// loop: true,
		freeMode: true,
		effect: 'slide',
		speed: 1000,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false
		},
		slidesPerView: 'auto',
		spaceBetween: 30,
		breakpoints: {
			280: {
				spaceBetween: 5
			},
			768: {
				spaceBetween: 30
			}
		},
		on: {
			"init": function init() {
				$(this.$el).css({ opacity: 1 });
			}
		}
	});

	slideshow2Swiper = new Swiper('.slideshow2Swiper', {
		// loop: true,
		freeMode: true,
		effect: 'slide',
		speed: 1000,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false
		},
		slidesPerView: 'auto',
		spaceBetween: 30,
		breakpoints: {
			280: {
				spaceBetween: 5
			},
			768: {
				spaceBetween: 30
			}
		},
		on: {
			"init": function init() {
				$(this.$el).css({ opacity: 1 });
			}
		}
	});

	new Swiper('.reviewsSwiper', {
		centeredSlides: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 850,
		effect: 'slide',
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
			}
		}
	});
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {
	initHeaderFixed();
});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {
	initHeaderFixed();
});

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
			$('[popup-gallery-js]').find('.slideshow__gallery a').eq(0).trigger('click');
		});
	};

	var headerNav = function headerNav() {
		$('.header__nav a').on('click', function (ev) {
			$('.header__nav a').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};

	var footerCollapse = function footerCollapse() {
		$('.footer__collapse-head').on('click', function (ev) {
			if ($(window).width() < 1024) {
				if ($(ev.currentTarget).hasClass('is-active')) {
					$(ev.currentTarget).removeClass('is-active');
					$(ev.currentTarget).siblings('.footer__collapse-body').slideUp(300);
				} else {
					$(ev.currentTarget).addClass('is-active');
					$('.footer__collapse-body').slideUp(300);
					$(ev.currentTarget).siblings('.footer__collapse-body').slideDown(300);
				}
			}
		});
	};

	var pathFloatingAnimation = function pathFloatingAnimation() {
		var xMin = -25,
		    xMax = 25,
		    yMin = -5,
		    yMax = 5,
		    positionsPerElement = 5,
		    secondsPerIteration = 5,
		    elements = $("[floating-node-js]");

		for (var i = 0; i < elements.length; i++) {
			randomFloat(elements[i], positionsPerElement, secondsPerIteration);
		}

		function random(min, max) {
			return min + Math.random() * (max - min);
		}

		function randomFloat(element, positions, duration) {
			var tl = new TimelineMax({
				repeat: -1,
				yoyo: true,
				delay: Math.random() * duration
			});

			for (var _i = 0; _i < positions; _i++) {
				tl.to(element, duration, {
					x: random(xMin, xMax),
					y: random(yMin, yMax),
					ease: Sine.easeInOut
				});
			}

			return tl;
		}
	};

	var viewportAnimation = function viewportAnimation() {
		AOS.init({
			offset: 120,
			delay: 50,
			duration: 800,
			easing: 'ease-in-out-cubic',
			mirror: false,
			once: true
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
		initSmoothScroll();
		initHamburger();
		initStellar();
		// ==========================================

		// callback
		slideShowPreview();
		headerNav();
		footerCollapse();
		pathFloatingAnimation();
		viewportAnimation();
		// ==========================================
	};
	initNative();
})();