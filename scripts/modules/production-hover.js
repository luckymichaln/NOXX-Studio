(function() {
    'use strict';

    function setupHoverBlocks() {

        var $list = $('.prod-box > .prod-hover');
        var $activeElement = $list.filter('show');

        $list.hover(function() {
            $(this).toggleClass('hide');
        });

        $list.on('click', function() {
            $(this).removeClass('hide');
            $(this).addClass('show');
        });
    }

    window.setupHoverBlocks = setupHoverBlocks;
}());