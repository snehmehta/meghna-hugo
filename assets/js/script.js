/* ========================================================================= */
/*	Page Preloader
/* ========================================================================= */

$(window).on('load', function () {
	$('.preloader').fadeOut(100);
});

jQuery(function ($) {
	"use strict";

	/* ========================================================================= */
	/*	lazy load initialize
	/* ========================================================================= */

	const observer = lozad(); // lazy loads elements with default selector as ".lozad"
	observer.observe();

	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});

	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
		var Shuffle = window.Shuffle;
		var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
			itemSelector: '.shuffle-item',
			buffer: 1
		});

		jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
			var input = evt.currentTarget;
			if (input.checked) {
				myShuffle.filter(input.value);
			}
		});
	}

	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */

	$("#testimonials").slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000
	});

	/* ========================================================================= */
	/*	animation scroll js
	/* ========================================================================= */



	function myFunction(x) {
		if (x.matches) {
			var topOf = 50
		} else {
			var topOf = 350
		}
	}

	var html_body = $('html, body');
	$('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 50
				}, 1500, 'easeInOutExpo');
				return false;
			}
		}
	});

	// easeInOutExpo Declaration
	jQuery.extend(jQuery.easing, {
		easeInOutExpo: function (x, t, b, c, d) {
			if (t === 0) {
				return b;
			}
			if (t === d) {
				return b + c;
			}
			if ((t /= d / 2) < 1) {
				return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			}
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	});

	/* ========================================================================= */
	/*	counter up
	/* ========================================================================= */
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});
	
    $('.navbar-nav .nav-item .dropdown-item').on("click", function (e) {
        $('.navbar-collapse').removeClass('show');
    });
    $('.navbar-nav .nav-item a').on("click", function (e) {
        $('.navbar-collapse').removeClass('show');
    });
    $('.navbar-toggler').on("click", function (e) {
        $('.header-area').addClass('sticky');
    });
    // :: Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    });

    /*======================================
     ScrollIT
     ======================================*/
    $.scrollIt({
        upKey: 60, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    }
    );

    /*======================================
     WOW Animation
     ======================================*/
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
        }
        , scrollContainer: true // optional scroll container selector, otherwise use window
    }
    );
    wow.init();

    /*======================================
     OwlCarousel Screenshots
     ======================================*/
    $('.list_screen_slide').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });

    /*======================================
     OwlCarousel Blog Slider
     ======================================*/
    $('.blog-slider').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        dots: false,
        margin: 20,
        smartSpeed: 500,
        navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1200: {
                items: 3
            }
        }
    });

    /*======================================
     OwlCarousel Clients
     ======================================*/
    $('.list-clients').owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: false,
        margin: 25,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1200: {
                items: 5
            }
        }
    });

    /*======================================
     OwlCarousel Testimonials
     ======================================*/
    var review_photo2 = $('#review_details-1');
    review_photo2.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        dots: false,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    var review_photo = $('#review_photo-1');
    review_photo.owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        mouseDrag: false,
        touchDrag: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });
    $('.review_nav .button_next').on('click', function () {
        review_photo.trigger('next.owl.carousel');
    });
    $('.review_nav .button_prev').on('click', function () {
        review_photo.trigger('prev.owl.carousel');
    });
    $('.review_nav .button_next').on('click', function () {
        review_photo2.trigger('next.owl.carousel');
    });
    $('.review_nav .button_prev').on('click', function () {
        review_photo2.trigger('prev.owl.carousel');
    });

    /*======================================
     OwlCarousel Login & Signup
     ======================================*/
    var review_photo3 = $('#review_details-2');
    review_photo3.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: false,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    var review_photo4 = $('#review_photo-2');
    review_photo4.owlCarousel({
        loop: false,
        margin: 30,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        mouseDrag: false,
        touchDrag: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 3
            }
        }
    });

    /*======================================
     LightBox
     ======================================*/
    $('[data-rel^=lightcase]').lightcase({
        maxWidth: 1100,
        maxHeight: 800
    });

    /*======================================
     Google Map
     ======================================*/
    if ($('#google-map').length > 0) {
        //set your google maps parameters
        var latitude = 51.5255069,
                longitude = -0.0836207,
                map_zoom = 14;

        //google map custom marker icon 
        var marker_url = 'images/map-marker.png';

        //we define here the style of the map
        var style = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

        //set google map options
        var map_options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: map_zoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style,
        }
        //inizialize the map
        var map = new google.maps.Map(document.getElementById('google-map'), map_options);
        //add a custom marker to the map				
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            visible: true,
            icon: marker_url,
        });
    }

    /*======================================
     Tooltip
     ======================================*/
    $('[data-toggle="tooltip"]').tooltip();

    /*======================================
     Countdown
     ======================================*/
    if ($('.defaultCountdown').length > 0) {
        $('.defaultCountdown').countdown('2021/01/01', function (event) {
            $(this).html(event.strftime(''
                    + '<div class="col-3 col-md-3 counter-item"><span>%D</span> Day%!d</div>'
                    + '<div class="col-3 col-md-3 counter-item"><span>%H</span> Hours</div>'
                    + '<div class="col-3 col-md-3 counter-item"><span>%M</span> Mins</div>'
                    + '<div class="col-3 col-md-3 counter-item"><span>%S</span> Secs</div>'));
        });
    }

    /* =====================================
     Back To Top
     =====================================*/

    $('#back-to-top').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1500);
        } else {
            $('#back-to-top').fadeOut(500);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function () {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    /*======================================
     Preloader
     ======================================*/
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });

});