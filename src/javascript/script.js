// menu de hamburguer das telas mobile//

$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-xmark');
    });

    // box-shadow da navbar e mudar a barrinha das sessões do menu//
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        
        let activeSectionIndex = 0;

        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

    navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // animações de aparecer os itens da tela //

            // animação frase inicial //
    ScrollReveal().reveal('#cta', {
        origin: 'left', 
        duration: 2000,
        distance: '20%' 
    });

            // animação produtos //
    ScrollReveal().reveal('.dish', {
        origin: 'left', 
        duration: 2000,
        distance: '20%' 
    });

            // animação produtos //
    ScrollReveal().reveal('.dish', {
        origin: 'left', 
        duration: 2000,
        distance: '20%' 
    });

            // animação produtos //
    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left', 
        duration: 1000,
        distance: '20%' 
    });

    ScrollReveal().reveal('.feedbacks', {
        origin: 'right', 
        duration: 1000,
        distance: '20%' 
    });

});