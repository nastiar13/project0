// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    // ambil isi href
    var href = $(this).attr('href');
    var elementHref = $(href);
    
    $('html,body').animate({
        scrollTop: elementHref.offset().top-50,
    },1250,'easeInOutExpo')

    e.preventDefault();
});