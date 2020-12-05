

/**
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
const initSmoothScroll = (
  btnName = "[anchor-js]",
  animateSpeed = 850
) => {

  $(btnName).on("click", (e) => {

    let linkHref = $(e.currentTarget).attr('href'),
      headerHeight = $(".header").outerHeight() || 0,
      topHeightOffset = $(linkHref).offset().top - headerHeight;
    
    if($(window).width() < 768) {
      document.querySelector("[hamburger-js]").classList.remove("is-active");
      document.querySelector("[mobile-block-js]").classList.remove("is-open");
  
      document.querySelectorAll("html, body").forEach((val, idx) => {
        val.classList.remove("is-hideScroll");
      });
    }

    $('body, html').animate({
      scrollTop: topHeightOffset
    }, animateSpeed);

  });

};
