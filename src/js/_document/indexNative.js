/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const slideShowPreview = () => {
		$('[slideshow-preview-js]').on('click', (ev) => {
			$('[popup-gallery-js]').find('.slideshow__gallery a').eq(0).trigger('click');
		});
	};
	
	
	const headerNav = () => {
		$('.header__nav a').on('click', (ev) => {
			$('.header__nav a').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};
	
	
	const footerCollapse = () => {
		$('.footer__collapse-head').on('click', (ev) => {
			if($(window).width() < 1024) {
				if($(ev.currentTarget).hasClass('is-active')) {
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
	
	
	const pathFloatingAnimation = () => {
		let xMin = -25,
			xMax = 25,
			yMin = -5,
			yMax = 5,
			positionsPerElement = 5,
			secondsPerIteration = 5,
			elements = $("[floating-node-js]");
		
		for (let i = 0; i < elements.length; i++) {
			randomFloat(elements[i], positionsPerElement, secondsPerIteration);
		}
		
		function random(min, max) {
			return min + Math.random() * (max - min);
		}
		
		function randomFloat(element, positions, duration) {
			let tl = new TimelineMax({
				repeat: -1,
				yoyo: true,
				delay: Math.random() * duration
			});
			
			for (let _i = 0; _i < positions; _i++) {
				tl.to(element, duration, {
					x: random(xMin, xMax),
					y: random(yMin, yMax),
					ease: Sine.easeInOut
				});
			}
			
			return tl;
		}
	};
	
	
	const viewportAnimation = () => {
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
	const initNative = () => {
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
