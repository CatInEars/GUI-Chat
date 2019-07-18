$(document).ready(function() {
    $('#fullpage').fullpage();

    $('a[href^="#"]').click(function() {
        let anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 600);
    });
}); // end ready
