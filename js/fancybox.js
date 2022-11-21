Fancybox.bind('[data-fancybox="gallery"]', {
  animated: false,
  showClass: false,
  hideClass: false,

  dragToClose: false,

  closeButton: "top",

  Thumbs: false,
  Toolbar: false,

  Carousel: {
    // Enable dots
    Dots: true,

    // Disable touch guestures
    Panzoom: {
      touch: false,
    },

    // Disable sliding animation
    friction: 0,
  },

  Image: {
    zoom: false,
    click: false,
    wheel: false,
    fit: "contain-w",
  },

  on: {
    init: (fancybox) => (fancybox.prevScrollTop = 0),
    done: (fancybox, slide) => (slide.$el.scrollTop = fancybox.prevScrollTop),
    "Carousel.change": (fancybox, carousel, to, from) => {
      fancybox.prevScrollTop = carousel.slides[from].$el.scrollTop || 0;

      if (carousel.slides[to].$el) {
        carousel.slides[to].$el.scrollTop = fancybox.prevScrollTop;
      }
    },
  },
});