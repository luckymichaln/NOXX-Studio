(function() {
    'use strict';

    var $menuLine;

    function installMenuLine($element) {
        setTimeout(function() {
            updateMenuLine($element);
            $menuLine.css('opacity', 1);
        }, 0);
    }

    function setupMenuLine() {
        $menuLine = $('#menu-line');

        var $list = $('#prod-list > li');
        var $activeElement = $list.filter('.active') || $list.first();

        $list.on('click', function() {
            $activeElement = $(this);
        });

        $list.hover(function() {
            updateMenuLine($(this));
        }, function() {
            updateMenuLine($activeElement);
        });

        installMenuLine($activeElement);
    }

    function updateMenuLine($element) {
        var width = $element.outerWidth();
        var left = $element.position().left;

        $menuLine.css('width', width);
        $menuLine.css('left', left);
    }

    window.setupMenuLine = setupMenuLine;
}());