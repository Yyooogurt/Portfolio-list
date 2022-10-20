$(function () {
//Preloader
var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    	$spinner.fadeOut();
    	$preloader.delay(350).fadeOut('slow');
//Modal windows
 $('.phone__btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });
	// Menu opener hamburger
    $('.menu-open').click(function () {
        $('.menu-collapse').toggleClass('d-none menu-order');
        $('.menu').toggleClass('menu-opened');
        
    });
});