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


  var mixer = mixitup('.products__inner-box');
});