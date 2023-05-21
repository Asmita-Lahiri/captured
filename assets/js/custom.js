
$('.banner').slick({
   dots: true,
});

$("#text_animation1").typewriter({
  cursor:true,
  delay: 150,
  waitingTime: 1000,
  hide: 0,
});

// $("#text_animation1").typewriter({
//   text: 'digital agency',
// });


Fancybox.bind("[data-fancybox]", {
  Toolbar : {
    display : ["zoom", "fullscreen", "close",],
  },
});



$('.client').slick({
   dots: true,
});

$('.process').slick({
   dots: true,
});


AOS.init();


jQuery(document).ready(function () {
  jQuery('.navigation').meanmenu();
});