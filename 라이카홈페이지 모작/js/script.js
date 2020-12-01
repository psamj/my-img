$(document).ready(function () {
    $(".header-right>.SEARCH").click(function(){
        $(".inp-box").addClass("active");
    })
    $(".close-but").click(function(){
        $(".inp-box").removeClass("active");
    })
    
    $(".slider-wrap").slick({
        dots: true,
        autoplay:true,
        autoplaySpeed: 2000,
        infinite: true,        
        
        customPaging: function(slider, i) {
      var target_txt = $(slider.$slides[i]).find(".con").attr("data-nav-txt");
      console.log(target_txt);
      
      var thumb = "<span>"+ target_txt + "</span>";
      return thumb;
    }
    });
    
        $(".mid-slider").slick({
        autoplay:true,
        autoplaySpeed: 2000,
        infinite: true,      // 무한반복
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        slidesToScroll: 1
    });   
    
    $(".class-list").scroll();
    
    $(".menu-nav>li").mouseover(function(){
        var thisIndex = $(this).index();
        $(".inner-menu").addClass("active");
        $(".inner-menu>ul").removeClass("active");
        $(".inner-menu>ul").eq(thisIndex).addClass("active");
        if(thisIndex == 3){
        $(".inner-menu").removeClass("active");
        }
        console.log(thisIndex);
    })
//                mouseleave => 마우스올린곳에서 벗어났을때
    $(".menu-nav>li").mouseleave(function(){
        $(".inner-menu").removeClass("active");
    })
});



// $(document).ready(function(){
//   $('.test-slider').slick({    
//     infinite: true ,      // 무한반복
//      slidesToShow: 1,     // 보여지는 슬라이드 개수
//      slidesToScroll: 1,   // 넘어가는 슬라이드 개수
//      dots: true           // 점 네비게이션 표시
//     // arrows: false,        화살표 표시
//     // fade:true             페이드 효과
//     // autoplay: true,       자동스크롤
//     // autoplaySpeed: 4000   자동스크롤 속도
//     /* 반응형
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//     */
//   });
// });