$(document).ready(function(){
  $('.carousel').slick({
    arrows: false ,
    autoplay: true ,
    autoplaySpeed: 4000 ,
    draggable: false ,
    pauseOnFocus: false ,
    pauseOnHover: false ,
  });
  var userScroll = 0;
  $(window).scroll(function(){
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance - userScroll > 50) {
      var navbarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      userScroll=scrollDistance;
    }else if (userScroll - scrollDistance >= 50){
      $('.navbar').animate({top: 0}, 150);
      userScroll=scrollDistance;

    }
  })
});
