$(document).ready(function () {
    $(".slick_wrap").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        arrows: false,
        draggable: true
    });

    $(".menu_left2>ul>li").mouseover(function () {
        $(".menu_left2>ul>li>ul>li").css("display", "block");
    });
    $(".menu_left2>ul>li").mouseleave(function () {
        $(".menu_left2>ul>li>ul>li").css("display", "none");
    });

      
$(window).scroll(function () {
    $(this).scrollTop();
    console.log($(this).scrollTop());
    
    if($(this).scrollTop()>700){
      $(".top-menu").css({background:"rgba(0,0,0,0.5)"})
    }else if($(this).scrollTop()<700){
      $(".top-menu").css({background:"none"})
    }
    
  });
})
