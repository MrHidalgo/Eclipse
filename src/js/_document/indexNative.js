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
	const initNative = () => {
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
