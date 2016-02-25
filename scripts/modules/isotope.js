(function() {
    'use strict';

    function setupIsotope() {

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
        });

        $grid.isotope({ filter: '.art' });
        $grid.isotope({ filter: '.video' });
        $grid.isotope({ filter: '.photo' });
        $grid.isotope({ filter: '*' });

        // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });


    }

    window.setupIsotope = setupIsotope;
}());
