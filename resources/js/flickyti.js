// banner
$('.main-carousel').flickity({
    cellAlign: 'left',
    freeScroll: true,
    draggable: false,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 1500,
});

//news
$('.news-board-carousel').flickity({
    cellAlign: 'center',
    freeScroll: false,
    prevNextButtons: false,
    draggable: false,
    pageDots: false,
    wrapAround: true,
    autoPlay: false,
});
var $newsBoardCarousel = $('.news-board-carousel').flickity();
$('.news-button-group').on( 'click', '.board-button', function() {
    var index = $(this).index();
    console.log(index);
    $newsBoardCarousel.flickity( 'select', index );
});

//news-mobi
$('.news-carousel').flickity({
    cellAlign: 'left',
    freeScroll: true,
    prevNextButtons: false,
    draggable: false,
    wrapAround: true,
    autoPlay: 1500,
});

//sect
$('.carousel').flickity({
    cellAlign: 'center',
    freeScroll: true,
    prevNextButtons: true,
    draggable: false,
    pageDots: true,
    wrapAround: true,
    autoPlay: 1500,
});
var $carousel = $('.carousel').flickity();
$('.sect-button-group').on( 'click', '.sect-button', function() {
    var index = $(this).index();
    $carousel.flickity( 'select', index );
});

