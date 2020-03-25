$(document).ready(function(){
    $('.scrollspy').scrollSpy({
        scrollOfffset: 0
    });
});

var fixmeTop = $('nav').offset().top;       

$(window).scroll(function() {

    var currentScroll = $(window).scrollTop();

    if (currentScroll >= fixmeTop) {
        $('#scroll-panel ul').css({                      
            position: 'fixed',
            top: '60px'
        });
        $('nav').css({
            position: 'fixed',
            top: '0'
        });
        $('#no-margin').css({
            display: 'block'
        });
    } else {
        $('#scroll-panel ul').css({
            position: 'static'
        });
        $('nav').css({
            position: 'static'
        });
        $('#no-margin').css({
            display: 'none'
        });
    }
});
$(window).on('resize', function() {
    var fixmeTop = $('#scroll-panel ul').offset().top;
}
);