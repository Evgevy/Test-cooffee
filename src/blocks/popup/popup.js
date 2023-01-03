$(document).ready(function (){
    $(".popup__close").click(function(){
        $(".popup").toggleClass("popup--hide")
        
    })
    $(".header__buttonlink").click(function(){
        $(".popup").removeClass("popup--hide")
    })

    $(".popup__background").click(function(){
        $(".popup").addClass("popup--hide")
    })

    $(".header__mail").click(function(){
        $(".popup").removeClass("popup--hide")
    })

    $(".leave__get").click(function(){
        $(".popup").removeClass("popup--hide")
    })


})

