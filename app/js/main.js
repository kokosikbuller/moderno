$(function () {

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });

  $(".product-slider__inner").slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });

  $(".icon-th-list").on('click', function(){
    $(".products__item").addClass('list');
    $(".icon-th-large ").removeClass('active');
    $(".icon-th-list ").addClass('active');
    $(".aside__product-item .products__item").removeClass('list');
  });

  $(".icon-th-large").on('click', function(){
    $(".products__item").removeClass('list');
    $(".icon-th-large ").addClass('active');
    $(".icon-th-list ").removeClass('active');
  });

  $(".menu__btn").on('click', function(){
    $(".menu__list").slideToggle();
  });
  
  $(".header__btn-menu").on('click', function(){
    $(".header__box").toggleClass('active');
  });

  $('input[type=file], select').styler();

  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

  var mixer = mixitup('.products__inner-box');
});