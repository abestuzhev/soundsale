$(document).ready(function () {
    $('#pagepiling').pagepiling({
        verticalCentered: false,
        css3: false,
        navigation: false,
    	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    	menu: '#myMenu'
    });

    $('.step-button').click(function () {
    $.fn.pagepiling.moveSectionDown();
	});

});