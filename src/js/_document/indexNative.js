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
		// ==========================================

		// callback
		slideShowPreview();
		headerNav();
		footerCollapse();
		// ==========================================
	};
	initNative();
})();
