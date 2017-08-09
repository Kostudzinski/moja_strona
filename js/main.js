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
        function triggerTime1() {
        $('.omniehead').addClass('neon-light')
        };
        setTimeout(triggerTime1, 1000)
        function triggerRemove1() {
        $('.omniehead').removeClass('neon-light')
        };
        setTimeout(triggerRemove1, 4000)
    });
    $('.umiejetnosci').click(function () {
        function triggerTime2() {
        $('.skills').addClass('neon-light');
        };
        setTimeout(triggerTime2, 1000)   
        function removeTrigger2() {
        $('.skills').removeClass('neon-light');
        };
        setTimeout(removeTrigger2, 4000)
    });
    $('.portfolio').click(function () {
        function triggerTime3() {
        $('.my-portfolio').addClass('neon-light');
        }
        setTimeout(triggerTime3, 1000)
        function triggerRemove3() {
        $('.my-portfolio').removeClass('neon-light');
        }
        setTimeout(triggerRemove3, 4000)
    });
    $('.kontakt').click(function () {
        function triggerTime4() {
        $('.my-contact').addClass('neon-light');
        }
        setTimeout(triggerTime4, 1000)
        function triggerRemove4() {
        $('.my-contact').removeClass('neon-light');
        }
        setTimeout(triggerRemove4, 4000)
    });
}