$(document).ready(function() {

    // start body animation

    $(window).on("load", function() {

        $(".loading").fadeIn(function() {

            $(".loading").css({
                transition: "all 10s ease-in-out"
            })

            $(".loading").fadeOut(2000)
        })

    })


    // 

    // start navbar links

    $(".links li ").click(function(event) {
        event.preventDefault();

        $(this).addClass("active").siblings().removeClass("active")
    })

    // 
    $(".links li a").click(function(event) {
        event.preventDefault();

        $("html,body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1000)
    })

    // 
    $(window).scroll(function() {

        $(".block").each(function() {

            if ($(window).scrollTop() > $(this).offset().top) {

                var blockID = $(this).attr('id');

                $(".links a").removeClass("active");

                $('.links li a[data-value="' + blockID + '"]').addClass("active");
            }
        })
    })





    // 
    //  34an asabt el nav bar fo2

    var navBar = $(".nav-bar")

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            navBar.css({
                position: "fixed",
                top: "0",
                right: "0",
                left: "0",
                padding: "20px 0",
            })

        } else {
            navBar.css({
                position: "relative",
                padding: "60px 0"
            })

        }

    })

    // 


    // start scroll-to-top

    var scrollToTop = $(".scroll-to-top i")

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {
            scrollToTop.fadeIn(500)
        } else {
            scrollToTop.fadeOut(500)
        }

    })

    // 

    $(".scroll-to-top i").click(function(event) {
        event.preventDefault();

        $("html,body").animate({
            scrollTop: 0,

        }, 1000)
    })


    // 



    // 
    // start slick (1)
    $('.bola').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });
    // 

    // start counter up
    $('.num').counterUp({
        delay: 10,
        time: 2000
    });

    // 

    // start slick (2)


    // $('.slick2').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // });


    $('.slick2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });




    // 
    // start slick (3)


    $('.slick3').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // 


    // start slick (4)
    $('.slick4').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //   



    // start nice scroll


    // $("body").niceScroll({
    //     cursorcolor: "#5177e6", // change cursor color in hex
    //     cursorwidth: "12px", // cursor width in pixel (you can also write "5px")
    //     cursorborder: "0px solid #5177e6", // css definition for cursor border
    //     zindex: "999999999999",
    //     background: "#fff", // change css for rail background
    // });




    // 


})