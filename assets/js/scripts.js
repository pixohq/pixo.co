(function(){
	/*--------------------------- HEIGHT ----------------------------*/
	var wHeight,
	herovElements = $('.product-main, .s-about-main');

	if( herovElements[0] ){
		$(window).on( 'resize.mySite', function( e ){
			wHeight =  $(this).height();
			herovElements.height( wHeight );
		}).trigger( 'resize.mySite' );
	}

	$(window).on('load', function(){
		$('body').removeClass('animated-home');
		/*--------------------------- WOW ----------------------------*/
		if( $( '.wow' )[0] ){
			function wowWidth() {
				new WOW({
					mobile: true,
				}).init();
			}
			wowWidth();
		}

		/* ---------------------- SLIDER-HOME --------------------- */
		if( $( '.slider-home' )[0] ){
			$('.slider-home').slick({
				infinite: true,
				autoplay: true,
				autoplaySpeed: 6000,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 800,
				arrows: true,
				dots: true,
				fade: true,
				lazyLoad: 'progressive',
				pauseOnHover: true,
				nextArrow: '<div class="slick-nav arrow-next"><img class="angle-right" src="assets/img/arrow-black-right.svg" alt="img"></div>',
				prevArrow: '<div class="slick-nav arrow-prev"><img class="angle-left" src="assets/img/arrow-black-left.svg" alt="img"></div>',
				responsive: [
				{
					breakpoint: 768,
					settings: {
						dots: false,
					}
				}
				]
			});
		}
	});


	/*--------------------------- VIDEO ----------------------------*/
	// var videoBg = $('.video-bg'),
	// dataSrc;

	// if( videoBg[0] ){
	// 	$(window).on( 'load', function(){
	// 		dataSrc = videoBg.data('src');
	// 		videoBg.attr( 'src', dataSrc );
	// 	});
	// }
	/* ----------------------- MENU ---------------------- */
	$('.nav-btn, .nav-list>li>a').on('click', function(){
		$('.nav-menu').toggleClass('active');
		$('.nav-btn').toggleClass('active');
		$('body').toggleClass('no-scroll');
	});

	/* ---------------------- SCROLL HEADER  --------------------- */
	var $window = $(window),
	lastScrollTop = 0,
	st;
	$( window ).on( 'scroll.mySite', function(){
		st = $(this).scrollTop();

		if( 20 < st ){
			$('header').removeClass('wow fadeInDown');
		}
		$('header')[ 0 < st ? 'addClass' : 'removeClass' ]('header-top');

		if ( st < lastScrollTop || $window.width() < 768){
			$('header')[ 0 === st ? 'removeClass' : 'addClass' ]('header-scroll');
		} else {
			$('header').removeClass('header-scroll');
		}
		lastScrollTop = st;
	}).trigger('scroll.mySite');

	/* ---------------------- SLIDER-REVIEWS --------------------- */
	if( $( '.reviews-slider' )[0] ){
		$('.reviews-slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 1000,
			arrows: false,
			dots: false,
			responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '9%',
				}
			}
			]
		});
	}

	/* ---------------------- OFFICE-SLIDER --------------------- */
	if( $( '.office-slider' )[0] ){
		$('.office-slider').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 800,
			arrows: true,
			dots: true,
			centerMode: true,
			centerPadding: '26%',
			cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
			nextArrow: '<div class="slick-nav arrow-next"><img class="angle-right" src="assets/img/arrow-gallery-next.svg" alt="img"></div>',
			prevArrow: '<div class="slick-nav arrow-prev"><img class="angle-left" src="assets/img/arrow-gallery-prev.svg" alt="img"></div>',
			responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					arrows: false,
					centerPadding: '0%',
				}
			}
			]
		});
	}

	/* ---------------------- FANCYBOX 3 --------------------- */
	if( $( '[data-fancybox]' )[0] ){
		$( '[data-fancybox]' ).fancybox({
			loop: true,
			infobar: false,
			transitionEffect: 'slide',
			transitionDuration: 800,
			btnTpl: {
				close:
				'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
				'<svg width="64" version="1.1" xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64"><g><path fill="#1D1D1B" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/></g></svg>' +
				"</button>",
				arrowLeft:
				'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
				'<div><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/></g></svg></div>' +
				"</button>",

				arrowRight:
				'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
				'<div><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/></g></svg></div>' +
				"</button>",
			},
			buttons: [
			'close'
			],
		});
	}
	/*-------------------- SCROLL SECTION	--------------------*/
	if( $( '.arrow-scroll' )[0] ){
		$('.arrow-scroll').on('click', function(){
			var scroll_el = $(this).attr('href');
			if ($(scroll_el).length != 0) {
				$('html, body').animate({
					scrollTop: $(scroll_el).offset().top
				}, 500);
			}
			return false;
		});
	}

	/*-------------------- PARALLAX	--------------------*/
	if( $( '#animateOval' )[0] ){
		var controller = new ScrollMagic.Controller(),
		scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500})
		.addTo(controller)
		.setTween( TweenMax.to( "#animateOval", 0.8, {scale: 1, translateX:'-50%'} ) )
	}

}());
