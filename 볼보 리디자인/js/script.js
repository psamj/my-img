$(document).ready(function(){
    $(".top-bar>div>ul>li").click(function(){
        var $this=$(this);
        var index=$this.index();

        if($this.siblings().hasClass("active")){
            $this.siblings().removeClass("active")  
            $(".nav-dep-wrap>div").removeClass("active");
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

})