(function($) { "use strict";


    $(document).ready(function() {

///////////////////////////////////////////////////////////////////////////
// Responsive Menu
///////////////////////////////////////////////////////////////////////////

$('.open').on('click',function(e){
    e.preventDefault();
    $(this).addClass('hidden');
    $('.close').removeClass('hidden');
    $('.mobile-menu').addClass('slide');
});

$('.close').on('click',function(e){
    e.preventDefault();
    $(this).addClass('hidden');
    $('.open').removeClass('hidden');
    $('.mobile-menu').removeClass('slide');
});

$(".mobile-menu a").click(function() {

    var s = $(this).attr('href');
    $('html,body').animate({scrollTop: $(s).offset().top}, 200, "swing");
    return false;
});

})(jQuery);  })