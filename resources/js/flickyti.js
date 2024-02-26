$('.main-carousel').flickity({
    cellAlign: 'left',
    freeScroll: true,
    draggable: false,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 1500,
});

//
$('.news-carousel').flickity({
    cellAlign: 'left',
    freeScroll: true,
    prevNextButtons: false,
    draggable: false,
    wrapAround: true,
    autoPlay: 1500,
});
//
$('.carousel').flickity({
    cellAlign: 'center',
    freeScroll: true,
    prevNextButtons: false,
    draggable: true,
    pageDots: false,
    wrapAround: true,
    autoPlay: 1500,
});
var $carousel = $('.carousel').flickity();
$('.sect-button-group').on( 'click', '.sect-button', function() {
    var index = $(this).index();
    $carousel.flickity( 'select', index );
});

//
$('.carousel-main').flickity({
    cellAlign: 'center',
    freeScroll: true,
    prevNextButtons: false,
    draggable: false,
    pageDots: false,
    wrapAround: true,
});
var $carouselBtn = $('.carousel-main').flickity();
$('.board-btn-group').on('click', '.board-button', function() {
    var index = $(this).index();
    $carouselBtn.flickity( 'select', index );
});