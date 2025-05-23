// Script para desplazamiento suave (Smooth Scroll) - USANDO jQuery
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - $('.navbar').outerHeight() // Ajusta para el navbar fijo
            }, 1000); // Duración de la animación en milisegundos
        }
    });
});      
      // Comentado: Script JS para ajuste de mini-mosaico (CSS es preferible)
      
        function adjustMiniMosaicHeights() {
            if ($(window).width() >= 768) { // Solo en pantallas md y más grandes
                $('.mini-mosaic').each(function() {
                    var $mosaic = $(this);
                    var $horizontalItem = $mosaic.find('.horizontal-image, .horizontal-video').first();
                    var $verticalItems = $mosaic.find('.vertical-image, .vertical-video');

                    if ($horizontalItem.length && $verticalItems.length >= 2) {
                        var horizontalHeight = $horizontalItem.outerHeight();
                        var gap = 5; // Ajusta este valor al gap que usas (g-1 = 0.25rem * 16 = 4px; g-2 = 0.5rem * 16 = 8px)
                        var desiredVerticalHeight = (horizontalHeight - gap) / 2;
                        $verticalItems.css('height', desiredVerticalHeight + 'px');
                        $verticalItems.css('min-height', desiredVerticalHeight + 'px'); // Asegura que no sea menor
                    }
                });
            } else {
                 // Eliminar la altura fija en mobile para que se comporten de forma normal
                $('.mini-mosaic-item.vertical-image, .mini-mosaic-item.vertical-video').css({
                     'height': '',
                     'min-height': '100px' // Volver a la altura mínima de mobile si la definiste
                 });
            }
        }

        // Ejecutar al cargar y al redimensionar
        adjustMiniMosaicHeights();
        $(window).on('resize', adjustMiniMosaicHeights);
         // Descomenta este bloque si prefieres el ajuste por JS (menos recomendado que CSS)

         // Script para desplazamiento suave (Smooth Scroll) - USANDO jQuery
    $(document).ready(function() {
        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if( target.length ) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - $('.navbar').outerHeight() // Ajusta para el navbar fijo
                }, 1000); // Duración de la animación en milisegundos
            }
        });

        // Cierra el dropdown después de hacer clic en un enlace interno
        $('.dropdown-menu a').on('click', function() {
             $('.dropdown-menu').removeClass('show');
             $('.navbar-toggler').attr('aria-expanded', 'false');
             $('.navbar-collapse').removeClass('show');
        });


    });



    