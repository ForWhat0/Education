import $ from 'jquery';

export default function animationButton(){

    $(window).bind('scroll',function(){
        parallaxScroll()
    })
    let scrolled = $(window).scrollTop();
    function parallaxScroll(){

        $('#parallax-lvl-3').css('top',(0-(scrolled*.5))+'px');
    }

    return (
        <h1>
            {scrolled}
        </h1>
    )

}