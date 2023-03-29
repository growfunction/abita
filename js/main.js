$( document ).ready(function() {
    var increment = document.querySelector(".increment");
    var decrement = document.querySelector(".decrement");
    var result = document.querySelector(".result");
    var counter = 0;
    increment.addEventListener('click', function(){
        counter++;
        result.innerHTML = `${counter}`;
    });
    decrement.addEventListener('click', function() {
        counter--;
        result.innerHTML = `${counter}`;
        if(counter === 0){
            result.innerHTML = `${counter}`;
            counter++;
        } 
    });
    $('.nav > li').on('click tap', function(){
        $('.nav > li').removeClass('active')
        $(this).addClass('active')
        $('.content-mobile').removeClass('content-mobile-active')
    })
    $('.category > .itm').on('click tap', function(){
        $('.category > .itm').removeClass('itm-active')
        $('.box-filter > .box-itm').removeClass('box-itm-active')
        $(this).addClass('itm-active')
        $('.box-filter > .box-itm').eq($(this).index()).addClass('box-itm-active')
    })
    $('.click-mobile-menu').on('click tap', function(){
        $('.content-mobile').addClass('content-mobile-active')
    })
    $('.close-menu').on('click tap', function(){
        $('.content-mobile').removeClass('content-mobile-active')
    })
    $('.check').on('click tap', function(){
        $(this).find('.itm-check').toggleClass('itm-check-active')
    })
    $('.hero-slider > .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        items:1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
    })
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }
    });
});
