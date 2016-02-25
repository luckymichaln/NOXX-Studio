(function() {
    'use strict';

    function setupMenuShow() {
        $('#hamburger').on('click', function() {
            $(this).toggleClass('is-active');
            setTimeout(function() {
                $('.navigation').toggleClass('slide-menu-show');
            }, 100);
            setTimeout(function() {
                $('.navigation .menu-list li, .navigation .contact-list').toggleClass('list-show');
            }, 500);
            setTimeout(function() {
                $('.navigation .social-list').toggleClass('list-fade-show');
            }, 700);
        });
    }

    window.setupMenuShow = setupMenuShow;
}());
