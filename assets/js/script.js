function carousel(){
    $('#banner').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    }),
    $('#shelf').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    })
    if ($(window).innerWidth() <= 720 ) {
        $('.benefits-box').slick({
            dots: false,
            infinite: false,
            arrows: false,
            slidesToShow: 1.2,
            slidesToScroll: 1,
        })
    }
    if ($(window).innerWidth() <= 720 ) {
        $('.brands-box').slick({
            dots: false,
            infinite: false,
            arrows: false,
            slidesToShow: 1.2,
            slidesToScroll: 1,
        })
    }
    
}
function closePopup() {
    $('#popup').hide()
}
$(document).ready( function(){
    carousel();
});