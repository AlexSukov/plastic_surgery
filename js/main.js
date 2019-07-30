jQuery(document).ready(function($) {
  $("#fullpage").fullpage({
    sectionsColor:['#C63D0F','#1BBC9B','#7E8F7C']
  });

  $('.about-slider').slick({
    prevArrow: $('.as-prev'),
    nextArrow: $('.as-next'),
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.testimonials-slider').slick({
    prevArrow: $('.ts-prev'),
    nextArrow: $('.ts-next'),
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
})
