import $ from 'jquery';

export default function animationButton(){

    $(window).bind('scroll',function(){
        parallaxScroll()
    })

    function parallaxScroll(){
        let scrolled = $(window).scrollTop();
        alert(scrolled)
        $('#parallax-lvl-3').css('top',(0-(scrolled*.5))+'px');
    }

}