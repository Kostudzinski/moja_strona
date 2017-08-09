'use strict';

$(document).ready(function () {
    scrollSlow();
    triggerNeon();

})

//FUNKCJA SCLOWSCROLL

function scrollSlow() {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        console.log(this.hash);
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                    scrollTop: $(hash).offset().top - 70
                }, 500,
                //                              function(){
                //   
                //        // Add hash (#) to URL when done scrolling (default click behavior)
                //        window.location.hash = hash;
                //      }
            );
        } // End if
    });
};

function triggerNeon() {
    $('.omnie').click(function () {
        $('.omniehead').addClass('neon-light');
    });
    $('.umiejetnosci').click(function () {
        $('.skills').addClass('neon-light');
    });
    $('.portfolio').click(function () {
        $('.my-portfolio').addClass('neon-light');
    });
    $('.kontakt').click(function () {
        $('.my-contact').addClass('neon-light');
    });
}