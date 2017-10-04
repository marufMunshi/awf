$('#owl-one').owlCarousel({
    loop:true,
    margin:10,
    items:2,
});

$('#owl-two').owlCarousel({
    loop:true,
    margin:10,
    items:1,
});

// var images=new Array('resources/css/img/DSC_0216.JPG','resources/css/img/DSC_0824.JPG');
// var nextimage=0;
// doSlideshow();

// function doSlideshow(){
//     if(nextimage>=images.length){nextimage=0;}
//     $('.global-header')
//     .css('background-image',
//     'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 0.5)), url("'+images[nextimage++]+'")')
//     .fadeIn('.10000',function(){
//         setTimeout(doSlideshow,7000);
//     });
// }

$(".global-header").vegas({
    slides: [
        { src: "resources/css/img/DSC_0216.JPG" },
        { src: "resources/css/img/DSC_0824.JPG" },
    ],
});
