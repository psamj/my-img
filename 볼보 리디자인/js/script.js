$(document).ready(function(){
    $(".top-bar>div>ul>li").click(function(){
        var $this=$(this);
        var index=$this.index();

        if($this.siblings().hasClass("active")){
            $this.siblings().removeClass("active")  
            $(".nav-dep-wrap>div").removeClass("active");
         }

        if($this.hasClass("active")){
            $this.removeClass("active");
             $(".top-bar>div>ul>li>a").removeClass("active");
             $(".top-bar").removeClass("active");             
             $(".nav-dep-wrap>div").eq(index).removeClass("active");
          }else{
            $this.addClass("active");
             $(".top-bar>div>ul>li>a").addClass("active");
             $(".top-bar").addClass("active");             
             $(".nav-dep-wrap>div").eq(index).addClass("active");
          }

    })
// 스크롤시 이미지 나타남



//  volvo model 메뉴 하단 바 이동

    function Box1__init() {
        var $itemBottomLine = $('.content3>.car-menu>div>span');
      
        $('.car-menu >div > a').click(function() {
          var $this = $(this);
          var left = $this.position().left;
          var width = $this.width();
          $itemBottomLine.css('left', left);
          $itemBottomLine.css('width', width);
        });
      
        $('.car-menu >div > a').eq(0).click();
      }
      
      Box1__init();


//  volvo model 이미지 변경

      $(".car-menu >div > a").click(function(){
        var $this=$(this);
        var index=$this.index();

        if($this.siblings().hasClass("active")){
            $this.siblings().removeClass("active")  
            $(".car-img>.inner-cars>div").removeClass("active");
         }

        if($this.hasClass("active")){
            $(".car-img>.inner-cars>.suv").css({"opacity": "1"})

          }else{
            $this.addClass("active");
            $(".car-img>.inner-cars>.suv").css({"opacity": "1"})
             $(".car-img>.inner-cars>div").eq(index).addClass("active");
          }
        
      })


      // 스크롤 시 탑바 메뉴 배경 흰색 
      
      $(window).scroll(function () {
        $(this).scrollTop();
        console.log($(this).scrollTop());
        
        if($(this).scrollTop()>700){
          $(".top-bar").css({background:"rgba(255,255,255,255)"})
          $(".top-bar>div>ul>li>a").css({color:"black"})
        }else if($(this).scrollTop()<700){
          $(".top-bar").css({background:"none"})
          $(".top-bar>div>ul>li>a").css({color:"white"})
        }
        
    })

      // 스크롤 시 탑바 없어짐 

      console.clear();
      var $window = $(window);
      
      var windowScrollTop = 0;
      var windowHeight = 0;
      
      $window.scroll(function() {
          windowScrollTop = $window.scrollTop();
      }).scroll();
      
      $window.resize(function() {
          windowHeight = $window.height();
      }).resize();
      
      function TopBar__show() {
          $('html').addClass('top-bar-actived');
      }
      
      function TopBar__init() {
          $(window).on('wheel', function(event) {
              var scrollTop = $window.scrollTop();
      
              if ( event.originalEvent.deltaY < 0 ) {
                  TopBar__show();
              }
              else {
                  TopBar__hide();
              }
          });
      
          function TopBar__hide() {
              $('html').removeClass('top-bar-actived');
          }
      
          TopBar__show();
      
          $(window).on('keyup', function(event) {
              if ( event.keyCode == 38 || event.keyCode == 36 || event.keyCode == 33 ) {
                  TopBar__show();
              }
              else if ( event.keyCode == 40 || event.keyCode == 35 || event.keyCode == 34 ) {
                  TopBar__hide();
              }
          });
      
          $window.scroll(function() {
              console.log(windowHeight);
              if ( windowScrollTop == 0 ) {
                  TopBar__show();
              }
          });
      }
      
      TopBar__init();


})