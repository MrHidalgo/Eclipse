

/**
 * @name initPopups
 *
 * @description
 */
const initPopups = () => {

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
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      close: function() {}
    }
  });

	$('[popup-gallery-js]').magnificPopup({
		delegate: 'a.swiper-slide-link',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Eclipse LTD, Mathew Monk</small>';
			}
		},
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		removalDelay: 300,
		mainClass: 'is-show',
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
	});

};
