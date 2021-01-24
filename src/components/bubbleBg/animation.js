import $ from 'jquery';

export default function animationButton(){

    $(window).bind('scroll',function(){
        parallaxScroll()
    })

    function parallaxScroll(){
        let scrolled = $('body').scrollTop();
        $('#parallax-lvl-3').css('margin-top',(0-(scrolled*.5))+'px');
    }

}