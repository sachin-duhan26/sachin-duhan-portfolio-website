(function($) {
    'use strict';

    var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
      Navbar 
    -------------------------------------------------------------------------------*/
    //* Navbar Fixed
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area').addClass('navbar_fixed');
                } else {
                    $('.header_area').removeClass('navbar_fixed');
                }
            });
        }
    }
    navbarFixed();

    /**
     * --------------------------------------------------------
     * submitted the form!
     * --------------------------------------------------------
     */
    let testForm = document.querySelector("#contactForm");

    testForm.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(testForm);
        fetch(testForm.getAttribute('action'), {
                method: 'POST',
                headers: {
                    'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: new URLSearchParams(formData).toString()
            })
            .then(res => {
                if (res) {
                    alert('Thank for your submission!');
                }
            });
    });
})(jQuery);