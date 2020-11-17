

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

	$('[popup-video-js]').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: function(url) {
						var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
						if ( !m || !m[1] ) return null;
						return m[1];
					},
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: function(url) {
						var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
						if ( !m || !m[5] ) return null;
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
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
	});

};
