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

// landing page
$(window).on('load',function(){
    setTimeout(function(){
        $('.about').addClass('muncul');
    },500)
});
// paralax ==================================================

$(window).scroll(function() {
    let wScroll = $(this).scrollTop();
    // about
    $('.about .container').css({
        'transform': 'translate(0px, '+wScroll/6+'%)'
    })
    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, '+ wScroll/7 +'%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, '+wScroll/3.9+'%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, '+wScroll/2.5+'%)'
    });


    // portfolio
    let portfolio = $('.portfolio').offset().top;
    let arrThumbnail = $('.portfolio .thumbnail');
    if(wScroll> portfolio-470) {
        arrThumbnail.each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('appear');
            },300*(i+1))
        })
        // 
    }
    else if(wScroll<portfolio-600) {
        $('.portfolio .thumbnail').removeClass('appear');
    }
    
});