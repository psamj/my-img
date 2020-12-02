$(document).ready(function(){
    $(".top-bar>div>ul>li").click(function(){
        var $this=$(this);
        var index=$this.index();

        if($this.hasClass("active")){
            $this.removeClass("active");
             $(".top-bar>div>ul>li").removeClass("active");
             $(".top-bar").removeClass("active");
             $(".nav-2dep").eq(index).removeClass("active");
          }else{
            $this.addClass("active");
             $(".top-bar>div>ul>li").addClass("active");
             $(".top-bar").addClass("active");
             $(".nav-2dep").eq(index).addClass("active");
          }

    })

})