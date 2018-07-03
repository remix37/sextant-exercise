// This is where it all goes :)

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText :[
      "<img align='middle' alt='' src='/images/arrow-left-carousel.svg' style='margin-bottom: 1px;' width='25'>",
      "<img align='middle' alt='' src='/images/arrow-right-carousel.svg' style='margin-bottom: 1px;' width='25'>"
    ],
    navContainerClass : "owl-nav visible-xs visible-sm",
    dotClass: "owl-dot hidden-xs hidden-sm",
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
