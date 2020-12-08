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
    


})