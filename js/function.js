$(document).ready(function () {
	/*--------------Tooltip-------------------*/

	$(function () {
	    $('[data-toggle="tooltip"]').tooltip()
	})

	/*--------------Quick-cart-------------------*/

	$(".bag_top").click(function (e) {
		e.preventDefault();
		$(".shopping-cart").toggleClass('active');
	});

	/*--------------Delete-product-------------------*/

	$(document).on("click", ".xoa", function () {
		$(this).parents(".test").remove();
	});

	/*--------------mobile-menu-------------------*/

	$('ul li:has(ul)').addClass('has-submenu');
	$('ul li ul').addClass('sub-menu');
	$('ul.dropdown li').hover(function () {
		$(this).addClass('hover');
	}, function () {
		$(this).removeClass('hover');
	});
	var $menu = $('#menu'),
		$menulink = $('#spinner-form'),
		$search = $('#search'),
		$search_box = $('.search_box'),
		$menuTrigger = $('.has-submenu > a');
	$menulink.click(function (e) {
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		// if ($search.hasClass('active')) {
		//     $('.menu.active').css('padding-top', '50px');
		// }
	});
	$search.click(function (e) {
		e.preventDefault();
		$search_box.toggleClass('active');
	});
	$menuTrigger.click(function (e) {
		e.preventDefault();
		var t = $(this);
		t.toggleClass('active').next('ul').toggleClass('active');
	});

	/*--------------count-down-time-------------------*/

	window.jQuery(function ($) {
		"use strict";

		$('time').countDown({
			with_separators: false
		});
		$('.alt-1').countDown({
			css_class: 'countdown-alt-1'
		});
		$('.alt-2').countDown({
			css_class: 'countdown-alt-2'
		});
	});

	/*--------------owl-carousel-------------------*/

	$('.owl-carousel-one.featured-product').owlCarousel({
		loop: true,
		nav: true,
		margin: 24,
		dots: false,
		// autoplay:true,
		// autoplayTimeout:1000,
		slideBy: 1,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})
	$('.owl-carousel-one').owlCarousel({
		loop: true,
		nav: true,
		margin: 25,
		dots: false,
		// autoplay:true,
		// autoplayTimeout:1000,
		slideBy: 3,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	})

	$('.owl-carousel-two').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		// autoplay:true,
		// autoplayTimeout:1000,
		slideBy: 1,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 2
			},
			575: {
				items: 2
			},
			1000: {
				items: 2
			}
		}
	})

	$('.owl-carousel-three').owlCarousel({
		loop: false,
		nav: true,
		dotsEach: true,
		animateOut: 'fadeOut',
		slideBy: 1,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})

	/*-----------------slider-range-price------------------*/

	$('.slider-range-price').each(function () {
		var min = $(this).data('min');
		var max = $(this).data('max');
		var unit = $(this).data('unit');
		var value_min = $(this).data('value-min');
		var value_max = $(this).data('value-max');
		var label_reasult = $(this).data('label-reasult');
		var t = $(this);
		$(this).slider({
			range: true,
			min: min,
			max: max,
			values: [value_min, value_max],
			slide: function (event, ui) {
				var result = label_reasult + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
				t.closest('.price_slider_wrapper').find('.amount-range-price').html(result);
			}
		});
	})

	/*-----------------count------------------*/

	$(document).ready(function () {

		var counters = $(".number-counter");
		var countersQuantity = counters.length;
		var counter = [];

		for (i = 0; i < countersQuantity; i++) {
			counter[i] = parseFloat(counters[i].innerHTML);
		}

		var count = function (start, value, id) {
			var localStart = start;
			setInterval(function () {
				if (localStart < value) {
					localStart++;
					counters[id].innerHTML = localStart;
				}
			}, 1);
		}

		for (j = 0; j < countersQuantity; j++) {
			count(0, counter[j], j);
		}
	});

	/*---------------------zoom-image-----------------------*/

	$('.zoom__image img').each(function () {
		var $this = $(this);
		$this.trigger('zoom.destroy');
		var zoom_parent = $this.closest('.zoom__image')
		zoom_parent.zoom({
			url: $this.attr('data-bigimg'),
			touch: false
		});
	});

	/*---------------------slick-slider-----------------------*/

	if ($('.slider-for').length) {
		var $slider = $('.slider-for')
			.on('init', function (slick) {
				$('.slider-for').fadeIn(1000);
			})
			.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				lazyLoad: 'ondemand',
				autoplaySpeed: 3000,
				asNavFor: '.slider-nav'
			});

		var $slider2 = $('.slider-nav')
			.on('init', function (slick) {
				$('.slider-nav').fadeIn(1000);
			})
			.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				lazyLoad: 'ondemand',
				asNavFor: '.slider-for',
				dots: false,
				centerMode: false,
				focusOnSelect: true,
				arrows: true,
			});

	}

	/*-----------------scroll-top-wrapper------------------*/

	$(function () {

		$(document).on('scroll', function () {

			if ($(window).scrollTop() > 80) {
				$('.scroll-top-wrapper').addClass('show');
			} else {
				$('.scroll-top-wrapper').removeClass('show');
			}
		});

		$('.scroll-top-wrapper').on('click', scrollToTop);
	});

	function scrollToTop() {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	}

	/*--------------------------------------------------*/

	$(".more-less").click(function () {
		$(this).toggleClass("xoay");
	});
});


/*-----------------tab-pane------------------*/

function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();