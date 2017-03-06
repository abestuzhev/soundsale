// $(document).ready(function () {
//     $('#pagepiling').pagepiling({
//         verticalCentered: false,
//         css3: false,
//         navigation: false,
//     	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
//     	menu: '#myMenu',
//     	scrollingSpeed: 500,
//     	easing: 'swing'
//     });
//
//     $('.step-button').click(function () {
//     $.fn.pagepiling.moveSectionDown();
// 	});
//
//     $("#myMenu").hover(function() {
//     	$("#container").toggleClass('menu-push-toright');
//     	$("#myMenu").toggleClass('menu-open');
// 	});
// });


$(document).ready(function () {
  $('#fullpage').fullpage({
       verticalCentered: false,
       anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage', '7rdPage', '8rdPage', '9rdPage', '10rdPage', '11rdPage'],
       menu: '#vertical-nav',
       scrollOverflow: true,
       responsiveWidth: 900,
       afterLoad: function (link, index) {
         if (index == 2) {
           $(".vertical-nav").css("transform", "translateX(0)");
           $(".horizontal-nav").css("transform", "translateY(0)");
         }else if (index == 1) {
           $(".vertical-nav").css("transform", "translateX(52px)");
           $(".horizontal-nav").css("transform", "translateY(-64px)");
         }
       },
     resetSliders: true,
     scrollOverflowReset: true,
     paddingTop: "7vh",
     paddingBottom: "10vh"
     });

  $('.c-arrow-down').click(function(){
    $.fn.fullpage.moveSectionDown();
  });

  function uploadFile(target) {
    document.getElementById("file-name").innerHTML = target.files[0].name;
  }
});

//words
//http://jsfiddle.net/RokoCB/5nfay7d1/206/

