$(document).ready(function () {
    // $('#pagepiling').pagepiling({
     //    verticalCentered: false,
     //    css3: false,
     //    navigation: false,
    	// anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    	// menu: '#myMenu',
    	// scrollingSpeed: 500,
    	// easing: 'swing'
    // });
    //
    // $('.step-button').click(function () {
    // $.fn.pagepiling.moveSectionDown();
	// });

    // $("#myMenu").hover(function() {
    	// $("#container").toggleClass('menu-push-toright');
    	// $("#myMenu").toggleClass('menu-open');
	// });
    var $accentTemplate = $(
        '<div class="accent-letter_item">' +
        '<input id="accent-letter_radio-1" type="radio" name="accent">' +
        '<label for="accent-letter_radio-1" class="accent-letter_radio"></label>' +
        '<input type="text" class="accent-letter_input">' +
        '</div>'
    );

    $(".accent-letter_add-letter").click(function(e){
        e.preventDefault();
        var listLenght= $('.accent-letter_list').length();
        var $accentTemplate;
        for(var i=5; i <= listLenght; i++) {
            $accentTemplate = $(
                '<div class="accent-letter_item">' +
                '<input id="accent-letter_radio- + i" type="radio" name="accent">' +
                '<label for="accent-letter_radio- + i" class="accent-letter_radio"></label>' +
                '<input type="text" class="accent-letter_input">' +
                '</div>'
            );
        };

        console.log($accentTemplate);
        $('.accent-letter_list').append($accentTemplate);
    });




});

$(document).ready(function () {
    $('#fullpage').fullpage({
        verticalCentered: true,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage', '7rdPage', '8rdPage', '9rdPage', '10rdPage', '11rdPage'],
        menu: '#vertical-nav',
        scrollOverflow: true,
        responsiveWidth: 1366,
        bigSectionsDestination: top,
        afterLoad: function (link, index) {
            if (index == 3) {

            } else if (index == 2) {
                $(".vertical-nav").css("transform", "translateX(0)");
                $(".horizontal-nav").css("transform", "translateY(0)");
            } else if (index == 1) {
                $(".vertical-nav").css("transform", "translateX(52px)");
                $(".horizontal-nav").css("transform", "translateY(-64px)");
            }
        },
        resetSliders: true,
        // normalScrollElements: '#section6'
        scrollOverflowReset: true
    });

    $('.c-arrow-down').click(function(){
        $.fn.fullpage.moveSectionDown();
    });

//      $(".accent-letter_input").mask("А");

    $(".accent-letter_input").keypress(function() {
        $(this).parent().next().find('.accent-letter_input').focus();

    });

//
    $('.accent-letter_input').mask('*', {'translation': {
        "*": {pattern: /[^]/}
//        Я: {pattern: /[А-Яа-я]/}
    }
    });



    // $(window).resize(function () {
    //     var width = $('body').innerWidth();
    //     if (width < 900) {
    //
    //         console.log("сработало");
    //         $.fn.fullpage.destroy('all');
    //     }
    // });

});