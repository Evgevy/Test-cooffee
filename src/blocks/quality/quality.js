$(document).ready(function(){
    $(".quality__titleblock").click(function(){
        if ($(this).siblings(".quality__text").hasClass("quality__text--open")){
            $(this).siblings(".quality__text").removeClass("quality__text--open")
            $(this).removeClass("quality__titleblock--open")
            
        } else {
            $(".quality__text").removeClass("quality__text--open")
            $(this).siblings(".quality__text").addClass("quality__text--open")
            $(".quality__titleblock").removeClass("quality__titleblock--open")
            $(this).addClass("quality__titleblock--open")
           
        }
        
    })
})