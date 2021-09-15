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


// paralax ==================================================

$(window).scroll(function() {
    let wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, '+ wScroll/3 +'%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, '+wScroll/3.9+'%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, '+wScroll/2+'%)'
    });
});