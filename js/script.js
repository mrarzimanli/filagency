$(function () {
    $('.lang-list button').click(function () {
        $(this).stop(true, false, true).toggleClass('active');
        $('.lang-dropdown').stop(true, false, true).toggleClass('active');
    });
    $('.menu-filter-btn').click(function () {
        $('.menu-filter-btn').removeClass('active');
        $(this).addClass('active')
    });
    // Protfolio slider
    const portfolioSwiper = new Swiper(".portfolioSwiper", {
        lazy: true,
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 3000,
        },
        speed: 600,
        pauseOnMouseEnter: true
    });
    // News slider
    const newsSwiper = new Swiper(".newsSwiper", {
        lazy: true,
        loop: false,
        spaceBetween: 30,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });
    // Partner slider
    const partnerSwiper = new Swiper(".partnerSwiper", {
        lazy: true,
        loop: true,
        spaceBetween: 30,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 2000,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            }
        }
    });
    // Portfolio Fancybox
    Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            autoStart: false,
        },
        Toolbar: {
            display: [
                { id: "prev", position: "center" },
                { id: "counter", position: "center" },
                { id: "next", position: "center" },
                "zoom",
                "slideshow",
                "fullscreen",
                "download",
                "close",
            ],
        },
        infinite: false,

    });
    // CounterUp
    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach(entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 2000,
                    delay: 16,
                })
                el.classList.add('is-visible')
            }
        })
    }

    const IO = new IntersectionObserver(callback, { threshold: 1 })
    $('.counter').each(function () {
        IO.observe(this);
    })

    // Contact
    $('#contactForm .form-control').on('input', function () {
        if ($(this).val()) {
            $(this).next('.form-label').fadeOut(0);
        } else {
            console.log($(this).next(), '-');
            $(this).next('.form-label').fadeIn(0);
        }
    });

    $('.contact-box a').hover(function () {
        $(this).parent().find('ion-icon').toggleClass('active');
    });

    // Search Form
    $('.secondary-header #search-toggle-btn').click(function () {
        $('.secondary-header #search-toggle-btn ion-icon').toggle();
        $('.secondary-header #searchForm .input-group').toggleClass('show');
    });

    $('.mobile-secondary-header #search-toggle-btn').click(function () {
        $('.mobile-secondary-header #search-toggle-btn ion-icon').toggle();
        $('.mobile-secondary-header #searchForm .input-group').toggleClass('show');
    });

    // Image gallery
    const imgGallerySwiper = new Swiper(".gallerySwiper.image", {
        lazy: true,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 1500,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    //  Video gallery
    const videoGallerySwiper = new Swiper(".gallerySwiper.video", {
        lazy: true,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            delay: 1500,
            reverseDirection: true,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    // Mobile menu
    $("#main-header .menu-toggle").click(function () {
        $(".mobile-menu").toggleClass("active");
    });

    $(".mobile-menu").click(function (event) {
        if ($(event.target).is(this)) {
            $(this).removeClass("active")
        }
    });
})

$(window).on('load', function () {
    $('.preloader img').fadeOut(250);
    $('.preloader').delay(250).fadeOut(400);

    if ($(window).width() <= 991) {
        $('.gx-5').addClass('gx-4 temp-gx-4').removeClass('gx-5');
        $('.gy-5').addClass('gy-4 temp-gy-4').removeClass('gy-5');
    }

    $(window).resize(function () {
        if ($(window).width() <= 991) {
            $('.gx-5').addClass('gx-4 temp-gx-4').removeClass('gx-5');
            $('.gy-5').addClass('gy-4 temp-gy-4').removeClass('gy-5');
        } else {
            $('.temp-gx-4').addClass('gx-5').removeClass('gx-4 temp-gx-4');
            $('.temp-gy-4').addClass('gy-5').removeClass('gy-4 temp-gy-4');
        }
    });

    $windowTop = $(window).scrollTop();
    $offset = $("#main-header").height();

    if ($windowTop > $offset) {
        $('#main-header').addClass('fixed');
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > $offset) {
            $('#main-header').addClass('fixed');
        } else {
            $('#main-header').removeClass('fixed');
        }
    });
})