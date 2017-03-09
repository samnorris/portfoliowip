//==========================================================================
//
//JS CONTENTS
//
//	Responsive Menu
//	Jquery appear
//	Header / Glitch Animations
//  Window Loader
//  Contact Form
//  Services Slider
//  Work Slider
//	Work Isotope
//	Open Portfolio
//	Close Portfolio
//	Google Maps
//	IE Fix
//	Blog Isotope + Masonry
//	Scroll Functions
//	Main menu scroll to
//	Calculate position Menu
//	Element is on screen
//	Transition check functions
//	Google analytics

(function($) { "use strict";


$(document).ready(function() {


	///////////////////////////////////////////////////////////////////////////
	// Responsive Menu
	///////////////////////////////////////////////////////////////////////////


	$('.open').on('click',function(e){
		e.preventDefault();
		$(this).addClass('hidden');
		$('.close').removeClass('hidden');
		$('.mobile-menu').addClass('slide');
	});

	$('.close').on('click',function(e){
		e.preventDefault();
		$(this).addClass('hidden');
		$('.open').removeClass('hidden');
		$('.mobile-menu').removeClass('slide');
	});

	$(".mobile-menu a").click(function() {

		var s = $(this).attr('href');
		$('html,body').animate({scrollTop: $(s).offset().top}, 200, "swing");
		return false;
	});


    $(function(){
        var topbar = $('.topbar').height()+20;
        var height = $(window).innerHeight();
        var width = $(window).innerWidth();
        if(580 >= width){
            $('.fa-2x').removeClass('fa-2x').addClass('fa-lg');
        }
        else {
            $('.project').css({'min-height':height-topbar, 'height':'auto'});
        }

        $('.title').fitText(0.9,{ maxFontSize: '28px' });

        if ( window.location.hash ) {
            $(window.location.hash).click();
        }
    });

    if(screen && screen.width > 580) {
        $(window).resize(function(){
            var height = $(window).innerHeight();
            var topbar = $('.topbar').height()+20;
            $('.project').css({'min-height':height-topbar});
        });
    }

    $('body').on('click', '.project', function(){

        $(this).addClass('selected').siblings().addClass('deselected');
        window.location.hash = $(this).attr('id');
        $(this).siblings().children('.title').hide();
        $('.close').fadeIn();
        setTimeout(function(){
            $('.selected').children('.content').fadeIn();
        },500);
    });

    $('body').on('click', '.close', function(){
        $(this).fadeOut();
        window.location.hash = '';
        $('.selected').children('.content').fadeOut();
        setTimeout(function(){
            $('.selected').siblings().removeClass('deselected');
            $('.selected').removeClass('selected');

            setTimeout(function(){
                $('.title').fadeIn();
                $('.title').fitText(0.9,{ maxFontSize: '28px' });
            },500);
        },500);
    });


	///////////////////////////////////////////////////////////////////////////
	// Jquery appear
	///////////////////////////////////////////////////////////////////////////

	$('.appear').appear();

	$(document.body).on('appear', '.appear', function(e, $affected) {
		// this code is executed for each appeared element
		var animation = $(this).data('animation');
		if(animation!=undefined){
			$(this).addClass($(this).data('animation'));
		}else{
			$(this).addClass('fadein');
		}

	});

	$(document.body).on('disappear', '.appear', function(e, $affected) {
		// this code is executed for each disappeared element
		var animation = $(this).data('animation');
		if(animation!=undefined){
			//$(this).removeClass($(this).data('animation'));
		}else{
			//$(this).removeClass('fadein');
		}
	});


	///////////////////////////////////////////////////////////////////////////
	// Header / Glitch Animations
	///////////////////////////////////////////////////////////////////////////


	setInterval(function(){
		$('.glitch-text').toggleClass('glitch-text--v1');
		setTimeout(function(){
			$('.glitch-text').toggleClass('glitch-text--v2');
		},100);
	},5000);



	///////////////////////////////////////////////////////////////////////////
	// Window Loader
	///////////////////////////////////////////////////////////////////////////


    $("#windowloader").transitioncss("transitionEndOpen","loaded",{duration:2000, easing:"loader 1.2s infinite ease-in-out)",delay:1000});

    $("#windowloader").off("transitionEndOpen").on( "transitionEndOpen", function(){
        $("body").removeClass('nonscroll');
        $("#windowloader").fadeOut({duration:2000});
        $("#portfoliogrid").isotope('layout');
        $("#isotopeMembers").isotope('layout');
        $(".isotopeBlog").isotope('layout');
    });


	///////////////////////////////////////////////////////////////////////////
	// Contact Form
	///////////////////////////////////////////////////////////////////////////

    // FORM SEND
	function validate_signup(frm) {
		$(".contact-form").submit(function (e) {
			$.post('../sendEmail.php', $(".contact-form").serialize(), function (data) {
				e.preventDefault();
				if (data.status == 200) {
					console.log("OK FORM");
					$("<div id='formMsg'><span class='fa fa-check-circle'></span><p>Message sent successfully</p></div>").insertBefore($(".contact-form"));
					$("#formMsg").slideDown("fast");
					$(".contact-form").fadeTo("fast", 0.2);
					var timer = setInterval(function () {
						console.log("OKAY")
						clearInterval(timer);
						$("#formMsg").slideUp("fast");
						$(".contact-form").fadeTo("fast", 1);
					}, 7000);
				} else {
					console.log("OKAY")
					$("<div id='formMsg'><span class='fa fa-exclamation-triangle'></span><p>There was an error. Please try again later.</p></div>").insertBefore($(".contact-form"));
					$("#formMsg").slideDown("fast");
					$(".contact-form").fadeTo("fast", 0.2);
				}

			}, 'json');
			return false;
		});
	}

	// FORM BUDGET SLIDER

	$("#slider-range-min").slider({
		range: "min",
		step: 100,
		value: 1200,
		min: 0,
		max: 10000,
		slide: function(event, ui) {
			$("#amount").val("$" + ui.value);
		},
		change: function(event, ui) {
			if (ui.value === 0) {
				$("#amount").val("To be determined");
			} else if (ui.value === 10000) {
				$("#amount").val("$" + "10000 or more");
			} else {
				$("#amount").val("$" + $("#slider-range-min").slider("value"));
			}
		}
	});
	$("#amount").val("$" + $("#slider-range-min").slider("value"));



	///////////////////////////////////////////////////////////////////////////
	// Services slider
	///////////////////////////////////////////////////////////////////////////

/*
	var $serviceSlider = $("#serviceSlider");

	if($serviceSlider.length){
		$serviceSlider.owlCarousel({
			// Most important owl features
			items : 3,
			itemElement : "li",
			stageElement : "ul",
			nav : true,
			navText : [""],
			dots : true,
		    responsive:{
		        1199:{
		            items:3,
		        },
		        958:{
		            items:2,
		        },
		        768:{
		            items:1,
		        },
		        0:{
		            items:1,
		        }
		    }
		});
	};
*/


	///////////////////////////////////////////////////////////////////////////
	// Work slider
	///////////////////////////////////////////////////////////////////////////

	var $workslider = $("#workslider");

	if($workslider.length){
		$workslider.owlCarousel({
			loop : true,
			autoplay: true,
			autoplayTimeout: 4000,
			nav : false,
			dots : false,
			items : 11,
			transitionStyle : "fade"
		});
	}

	///////////////////////////////////////////////////////////////////////////
	// Work Isotope
	///////////////////////////////////////////////////////////////////////////


	$( function() {
	  // init Isotope
	  var $container = $('#portfoliogrid').isotope({
		itemSelector: '.item',
		columnWidth:'.item',
		layoutMode: 'fitRows',
		sortBy : 'original-order'

	  });
	  // bind filter button click
	  $('#portfolionav a').on( 'click', function(e) {
		var filterValue = $( this ).attr('data-filter-value');
		$container.isotope({ filter: filterValue });
		e.preventDefault();
	  });
	  //change is-checked class on buttons
	  $('#portfolionav a').each( function( i, buttonGroup ) {
		$('#portfolionav a').on( 'click', function() {
		  $('#portfolionav').find('.is-checked').removeClass('is-checked');
		  $(this).addClass('is-checked');
		});
	  });
	});

	///////////////////////////////////////////////////////////////////////////
	// Open Portfolio
	///////////////////////////////////////////////////////////////////////////


	$('html.desktop #portfoliogrid .item').on('click',function(){

		var $itemActive = $(this);
		$itemActive.addClass("portfolioActive");
		var img = $itemActive.find('img').attr('src');
		$("#workLoader").remove();
		$("body").prepend("<div id='workLoader'><span class='iconloader'></span><div class='front'><img src='"+img+"'/></div><div class='back'><div id='workdetailcontainer' class='centerContainer'></div><div id='wrkclosebtn'><span class='fa fa-times'></span></div></div></div>");


		var $loader = $("#workLoader");

		$loader.on("customdestroy",function(){
			$(this).remove();
		});

		//Reset Anims
		$("#workLoader .iconloader").css({"display":"block"});
		$("#workLoader").css({"opacity":"0"});

		//Position
		$loader.offset($itemActive.offset());
		//Size
		$loader.css({"height": $itemActive.css("height"),"width":$itemActive.css("width")});


		if($itemActive.hasClass("width2")){
			$loader.addClass("width2");
		}else{
			$loader.removeClass("width2");
		}


		// Animation
		$loader.animate({
			opacity: 1
		  }, 300, function() {
			setTimeout(function() {
				showWork();
			}, 1000);
		});


		var animReady = false;
		var url = $itemActive.find(".title").attr('href');

		$.ajax({
		  url: url + " #workdetail"
		}).done(function(data) {
			var $parsed = $('<div/>').append(data);
			var section = $parsed.find('#workdetail');
			var scripts = $parsed.find('*[data-scriptdetail]');

			console.log(section);
			console.log(scripts);

			$("#workLoader .back #workdetailcontainer").html(section);
			$("#workLoader .back #workdetailcontainer").append(scripts);


		  showWork();
		});


		function showWork(){

			if(animReady == false){
				animReady = true;
			}else{

				$("#workLoader").off("transitionEndOpen").on( "transitionEndOpen", function(){
					$("body").css({"pointer-events":"none"});
					$("#workLoader").css({"pointer-events":"auto"});

					$itemActive.removeClass("portfolioActive");

					//HIDE GENERAL SCROLL
					$("body").css({"overflow":"hidden"});
					$("#workLoader .back").css({"overflow":"auto"});

				});

				if($('body').hasClass('IE9')){
					$("#workLoader").css("opacity", 0).animate({opacity: 1},800);
					//$loader.transitioncss("transitionEndOpen","scale100",{duration:1});
					$("#workLoader").addClass("scale100").trigger("transitionEndOpen");
				}else{
					$loader.transitioncss("transitionEndOpen","scale100",{duration:800, easing:"cubic-bezier(0.86, 0, 0.07, 1)"});
				}


				$loader.css({"top": getscrollTop()})
				$("#workLoader .iconloader").css({"display":"none"});

			};
		};

		///////////////////////////////////////////////////////////////////////////
		// Close Portfolio
		///////////////////////////////////////////////////////////////////////////

		$('#workLoader .back .fa-times').on('click',function(){
			$("body").css({"pointer-events":"auto"});

			$("#workLoader .back").css({"overflow":"hidden"});

			$loader.transitioncss("transitionEndClose","scale100",{duration:800, easing:"cubic-bezier(0.86, 0, 0.07, 1)"});


			$("#workLoader").offset($itemActive.offset());
			$("#workLoader").css({"height": $itemActive.css("height"),"width":$itemActive.css("width")});

			$("#workLoader .front").css({"background": "transparent"})
			$("#workLoader .front img").css({"opacity": "1"});


			//SHOW GENERAL SCROLL
			$("body").css({"overflow":"auto"});

			$("#workLoader").off("transitionEndClose").on("transitionEndClose", function(){
				$("#workLoader").trigger("customdestroy");
			});
		});
	});


	//portfolio for mobile & tablet
	$('html.tablet #portfoliogrid .item, html.mobile #portfoliogrid .item').on('click',function(){
		window.location=$(this).find(".title").attr("href");
	});

	$('html.desktop #portfoliogrid .item a').on('click',function(e){e.preventDefault();});


	function getscrollTop(){
		return $(document).scrollTop();
	}



   	///////////////////////////////////////////////////////////////////////////
	// Google Maps
	///////////////////////////////////////////////////////////////////////////

/*	var MyLat = -41.280630;
	var MyLong = 174.766991;
	var MyMarkerImage = 'img/map-marker.png';




    function loadScript(src,callback){
	    var script = document.createElement("script");
	    script.type = "text/javascript";
	    if(callback)script.onload=callback;
	    document.getElementsByTagName("head")[0].appendChild(script);
	    script.src = src;
  	}


	if($('#gmap').length){
			loadScript('http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=initGoogle',function(){});
	}


	window.initGoogle= function() {
		 // The latitude and longitude to center the map (always required)
		var myLatlng = new google.maps.LatLng(MyLat, MyLong); // New York

		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 15,

			// Disable map UI
			disableDefaultUI:false,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL
			},

			//Disable mouse wheel
			scrollwheel:false,

			// The latitude and longitude to center the map (always required)
			center: myLatlng,

			// How you would like to style the map.
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{"featureType":"all","elementType":"all","stylers":[ { "invert_lightness": true },{ "saturation": -100 },{ "visibility": "on" },{ "lightness": -20 }]}]
		};

		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('gmap');

		// Create the Google Map using out element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);


		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: MyMarkerImage
		});
	}*/



	///////////////////////////////////////////////////////////////////////////
	// IE Fix
	///////////////////////////////////////////////////////////////////////////

	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer'){
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
	}else if (navigator.appName == 'Netscape'){
		var ua = navigator.userAgent;
		var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)rv = parseFloat( RegExp.$1 );
	}if(rv>0){
		if(rv==9){$('body').addClass('IE'+rv);}
		$('body').addClass('IE');
	}


	///////////////////////////////////////////////////////////////////////////
	// Blog Isotope + Masonry
	///////////////////////////////////////////////////////////////////////////

	$( function() {
	  // init Isotope
	  var $container = $('.isotopeBlog').isotope({
		itemSelector: '.article'

	  });
	  // bind filter button click
	  $('#blogfilter a').on( 'click', function(e) {
		var filterValue = $(this).attr('data-filter-value');
		$container.isotope({ filter: filterValue });
		e.preventDefault();
	  });
	  //change is-checked class on buttons
	  $('#blogfilter a').each( function( i, buttonGroup ) {
		$('#blogfilter a').on( 'click', function() {
		  $('#blogfilter').find('.is-checked').removeClass('is-checked');
		  $(this).addClass('is-checked');
		});
	  });

	});

});



    ///////////////////////////////////////////////////////////////////////////
    // Scroll Functions
    ///////////////////////////////////////////////////////////////////////////


	if($(window).scrollTop()!=0){
		calculatepositionmenu();
	};

	$(window).on('scroll',function(){

		//Top menu
		calculatepositionmenu();

		//select menu section
		$("body section").each(function (index) {
			if($(this).isOnScreen()){
				$('#mainMenu a').removeClass('select');
				$('#mainMenu a[href="#'+$(this).attr('id')+'"]').addClass('select');
			}
		});
	});


    ///////////////////////////////////////////////////////////////////////////
    // Main menu scroll to
    ///////////////////////////////////////////////////////////////////////////

	$("#mainMenu a,#mainheader a, .mobile-menu a").click(function() {
		$("#menu-container").removeClass('open');
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});


    ///////////////////////////////////////////////////////////////////////////
    // Calculate position Menu
    ///////////////////////////////////////////////////////////////////////////

    function calculatepositionmenu(){
        if($('body.desktop')){
            var positionmenu = $('#menu-container').position();
            if($(window).scrollTop() >= $('#menuWrapper').position().top && $(window).scrollTop()>0){
                $('#menu-container').addClass('sticky');
            }else{
                $('#menu-container').removeClass('sticky');
            }
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Element is on screen function
    ///////////////////////////////////////////////////////////////////////////

    $.fn.isOnScreen = function(){

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };


    $('.open').on('click',function(e){
        e.preventDefault();
        $(this).addClass('hidden');
        $('.close').removeClass('hidden');
        $('.mobile-menu').addClass('slide');
    });

    $('.close').on('click',function(e){
        e.preventDefault();
        $(this).addClass('hidden');
        $('.open').removeClass('hidden');
        $('.mobile-menu').removeClass('slide');
    });

    $(".mobile-menu").click(function() {

        var s = $(this).attr('href');
        $('html,body').animate({scrollTop: $(s).offset().top}, 200, "swing");
        return false;
    });


    ///////////////////////////////////////////////////////////////////////////
    // Transition check functions
    ///////////////////////////////////////////////////////////////////////////


    $.fn.emulateTransitionEnd = function(transitionEnd,duration,delay) {

      var called = false, $el = this;
      $(this).one(transitionEnd, function() {called = true; });
      var callback = function() {
        if (!called) $($el).trigger(transitionEnd)
      };

       setTimeout(callback, duration+delay);
    };

    //add css propertys and emulate transitionend
    $.fn.transition = function (transitionEnd, properties, options) {
      var defaults = {delay:0 , easing :''};
      options = $.extend({}, defaults, options);
      properties['transition'] = 'all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ' ;
      properties['-webkit-transition'] = 'all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ' ;
      properties['-ms-transition'] = 'all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ' ;

      $(this).emulateTransitionEnd(transitionEnd, options.duration, options.delay );
      $(this).css(properties);
    };

    //add class and emulate transitionend
    $.fn.transitioncss = function (transitionEnd, cssname, options) {
      var defaults = {delay:0 , easing :''};
      options = $.extend({}, defaults, options);

      $(this).css('transition','all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ')
      $(this).css('-webkit-transition','all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ')
      $(this).css('-ms-transition','all ' + options.duration + 'ms ' + options.easing + ' ' + options.delay + 'ms ')

      $(this).emulateTransitionEnd(transitionEnd, options.duration, options.delay );

      if($(this).hasClass(cssname)){
        $(this).removeClass(cssname);
      }else{
        $(this).addClass(cssname);
      }
    };



	///////////////////////////////////////////////////////////////////////////
	// Social Share Buttons
	///////////////////////////////////////////////////////////////////////////

	/*! Social Likes v3.1.2 by Artem Sapegin - http://sapegin.github.com/social-likes - Licensed MIT */

	!function (a) {
		"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
	}(function (a, b) {
		"use strict";
		function c(a, b) {
			this.container = a, this.options = b, this.init()
		}

		function d(b, c) {
			this.widget = b, this.options = a.extend({}, c), this.detectService(), this.service && this.init()
		}

		function e(a) {
			function b(a, b) {
				return b.toUpper()
			}

			var c = {}, d = a.data();
			for (var e in d) {
				var f = d[e];
				"yes" === f ? f = !0 : "no" === f && (f = !1), c[e.replace(/-(\w)/g, b)] = f
			}
			return c
		}

		function f(a, b) {
			return g(a, b, encodeURIComponent)
		}

		function g(a, b, c) {
			return a.replace(/\{([^}]+)\}/g, function (a, d) {
				return d in b ? c ? c(b[d]) : b[d] : a
			})
		}

		function h(a, b) {
			var c = l + a;
			return c + " " + c + "_" + b
		}

		function i(b, c) {
			function d(g) {
				"keydown" === g.type && 27 !== g.which || a(g.target).closest(b).length || (b.removeClass(m), e.off(f, d), a.isFunction(c) && c())
			}

			var e = a(document), f = "click touchstart keydown";
			e.on(f, d)
		}

		function j(a) {
			var b = 10;
			if (document.documentElement.getBoundingClientRect) {
				var c = parseInt(a.css("left"), 10), d = parseInt(a.css("top"), 10), e = a[0].getBoundingClientRect();
				e.left < b ? a.css("left", b - e.left + c) : e.right > window.innerWidth - b && a.css("left", window.innerWidth - e.right - b + c), e.top < b ? a.css("top", b - e.top + d) : e.bottom > window.innerHeight - b && a.css("top", window.innerHeight - e.bottom - b + d)
			}
			a.addClass(m)
		}

		var k = "social-likes", l = k + "__", m = k + "_opened", n = "https:" === location.protocol ? "https:" : "http:", o = {
			facebook: {
				counterUrl: "https://graph.facebook.com/?id={url}",
				convertNumber: function (a) {
					return a.share.share_count
				},
				popupUrl: "https://www.facebook.com/sharer/sharer.php?u={url}",
				popupWidth: 600,
				popupHeight: 359
			},
			twitter: {
				counters: !1,
				popupUrl: "https://twitter.com/intent/tweet?url={url}&text={title}",
				popupWidth: 600,
				popupHeight: 250,
				click: function () {
					return /[.?:\-–—]\s*$/.test(this.options.title) || (this.options.title += ":"), !0
				}
			},
			plusone: {
				counterUrl: n + "//share.yandex.ru/gpp.xml?url={url}&callback=?", convertNumber: function (a) {
					return parseInt(a.replace(/\D/g, ""), 10)
				}, popupUrl: "https://plus.google.com/share?url={url}", popupWidth: 500, popupHeight: 550
			},

		}, p = {
			promises: {}, fetch: function (b, c, d) {
				p.promises[b] || (p.promises[b] = {});
				var e = p.promises[b];
				if (!d.forceUpdate && e[c])return e[c];
				var g = a.extend({}, o[b], d), h = a.Deferred(), i = g.counterUrl && f(g.counterUrl, {url: c});
				return i && a.isFunction(g.counter) ? g.counter(i, h) : g.counterUrl ? a.getJSON(i).done(function (b) {
					try {
						var c = b;
						a.isFunction(g.convertNumber) && (c = g.convertNumber(b)), h.resolve(c)
					} catch (a) {
						h.reject()
					}
				}).fail(h.reject) : h.reject(), e[c] = h.promise(), e[c]
			}
		};
		a.fn.socialLikes = function (b) {
			return this.each(function () {
				var d = a(this), f = d.data(k);
				f ? a.isPlainObject(b) && f.update(b) : (f = new c(d, a.extend({}, a.fn.socialLikes.defaults, b, e(d))), d.data(k, f))
			})
		}, a.fn.socialLikes.defaults = {
			url: window.location.href.replace(window.location.hash, ""),
			title: document.title,
			counters: !0,
			zeroes: !1,
			wait: 500,
			timeout: 1e4,
			popupCheckInterval: 500,
			singleTitle: "Share"
		}, c.prototype = {
			init: function () {
				this.container.addClass(k), this.single = this.container.hasClass(k + "_single"), this.initUserButtons(), this.countersLeft = 0, this.number = 0, this.container.on("counter." + k, a.proxy(this.updateCounter, this));
				var b = this.container.children();
				this.makeSingleButton(), this.buttons = [], b.each(a.proxy(function (b, c) {
					var e = new d(a(c), this.options);
					this.buttons.push(e), e.options.counterUrl && this.countersLeft++
				}, this)), this.options.counters ? (this.timer = setTimeout(a.proxy(this.appear, this), this.options.wait), this.timeout = setTimeout(a.proxy(this.ready, this, !0), this.options.timeout)) : this.appear()
			}, initUserButtons: function () {
				!this.userButtonInited && window.socialLikesButtons && a.extend(!0, o, socialLikesButtons), this.userButtonInited = !0
			}, makeSingleButton: function () {
				if (this.single) {
					var b = this.container;
					b.addClass(k + "_vertical"), b.wrap(a("<div>", {class: k + "_single-w"})), b.wrapInner(a("<div>", {class: k + "__single-container"}));
					var c = b.parent(), d = a("<div>", {class: h("widget", "single")}), e = a(g('<div class="{buttonCls}"><span class="{iconCls}"></span>{title}</div>', {
						buttonCls: h("button", "single"),
						iconCls: h("icon", "single"),
						title: this.options.singleTitle
					}));
					d.append(e), c.append(d), d.on("click", function () {
						var a = k + "__widget_active";
						return d.toggleClass(a), d.hasClass(a) ? (b.css({
							left: -(b.width() - d.width()) / 2,
							top: -b.height()
						}), j(b), i(b, function () {
							d.removeClass(a)
						})) : b.removeClass(m), !1
					}), this.widget = d
				}
			}, update: function (b) {
				if (b.forceUpdate || b.url !== this.options.url) {
					this.number = 0, this.countersLeft = this.buttons.length, this.widget && this.widget.find("." + k + "__counter").remove(), a.extend(this.options, b);
					for (var c = 0; c < this.buttons.length; c++)this.buttons[c].update(b)
				}
			}, updateCounter: function (a, b, c) {
				c = c || 0, (c || this.options.zeroes) && (this.number += c, this.single && this.getCounterElem().text(this.number)), this.countersLeft--, 0 === this.countersLeft && (this.appear(), this.ready())
			}, appear: function () {
				this.container.addClass(k + "_visible")
			}, ready: function (a) {
				this.timeout && clearTimeout(this.timeout), this.container.addClass(k + "_ready"), a || this.container.trigger("ready." + k, this.number)
			}, getCounterElem: function () {
				var b = this.widget.find("." + l + "counter_single");
				return b.length || (b = a("<span>", {class: h("counter", "single")}), this.widget.append(b)), b
			}
		}, d.prototype = {
			init: function () {
				this.detectParams(), this.initHtml(), setTimeout(a.proxy(this.initCounter, this), 0)
			}, update: function (b) {
				a.extend(this.options, {forceUpdate: !1}, b), this.widget.find("." + k + "__counter").remove(), this.initCounter()
			}, detectService: function () {
				var b = this.widget.data("service");
				if (!b) {
					for (var c = this.widget[0], d = c.classList || c.className.split(" "), e = 0; e < d.length; e++) {
						var f = d[e];
						if (o[f]) {
							b = f;
							break
						}
					}
					if (!b)return
				}
				this.service = b, a.extend(this.options, o[b])
			}, detectParams: function () {
				var a = this.widget.data();
				if (a.counter) {
					var b = parseInt(a.counter, 10);
					isNaN(b) ? this.options.counterUrl = a.counter : this.options.counterNumber = b
				}
				a.title && (this.options.title = a.title), a.url && (this.options.url = a.url)
			}, initHtml: function () {
				var b = this.options, c = this.widget, d = c.find("a");
				d.length && this.cloneDataAttrs(d, c);
				var e = a("<span>", {class: this.getElementClassNames("button"), html: c.html()});
				if (b.clickUrl) {
					var g = f(b.clickUrl, {url: b.url, title: b.title}), h = a("<a>", {href: g});
					this.cloneDataAttrs(c, h), c.replaceWith(h), this.widget = c = h
				} else c.on("click", a.proxy(this.click, this));
				c.removeClass(this.service), c.addClass(this.getElementClassNames("widget")), e.prepend(a("<span>", {class: this.getElementClassNames("icon")})), c.empty().append(e), this.button = e
			}, initCounter: function () {
				if (this.options.counters)if (this.options.counterNumber)this.updateCounter(this.options.counterNumber); else {
					var b = {counterUrl: this.options.counterUrl, forceUpdate: this.options.forceUpdate};
					p.fetch(this.service, this.options.url, b).always(a.proxy(this.updateCounter, this))
				}
			}, cloneDataAttrs: function (a, b) {
				var c = a.data();
				for (var d in c)c.hasOwnProperty(d) && b.data(d, c[d])
			}, getElementClassNames: function (a) {
				return h(a, this.service)
			}, updateCounter: function (b) {
				b = parseInt(b, 10) || 0;
				var c = {class: this.getElementClassNames("counter"), text: b};
				b || this.options.zeroes || (c.class += " " + k + "__counter_empty", c.text = "");
				var d = a("<span>", c);
				this.widget.append(d), this.widget.trigger("counter." + k, [this.service, b])
			}, click: function (b) {
				var c = this.options, d = !0;
				if (a.isFunction(c.click) && (d = c.click.call(this, b)), d) {
					var e = f(c.popupUrl, {url: c.url, title: c.title});
					e = this.addAdditionalParamsToUrl(e), this.openPopup(e, {width: c.popupWidth, height: c.popupHeight})
				}
				return !1
			}, addAdditionalParamsToUrl: function (b) {
				var c = a.param(a.extend(this.widget.data(), this.options.data));
				if (a.isEmptyObject(c))return b;
				var d = b.indexOf("?") === -1 ? "?" : "&";
				return b + d + c
			}, openPopup: function (c, d) {
				var e = window.screenLeft !== b ? window.screenLeft : screen.left, f = window.screenTop !== b ? window.screenTop : screen.top, g = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, h = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height, i = Math.round(g / 2 - d.width / 2) + e, j = 0;
				h > d.height && (j = Math.round(h / 3 - d.height / 2) + f);
				var l = window.open(c, "sl_" + this.service, "left=" + i + ",top=" + j + ",width=" + d.width + ",height=" + d.height + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
				if (l) {
					l.focus(), this.widget.trigger("popup_opened." + k, [this.service, l]);
					var m = setInterval(a.proxy(function () {
						l.closed && (clearInterval(m), this.widget.trigger("popup_closed." + k, this.service))
					}, this), this.options.popupCheckInterval)
				} else location.href = c
			}
		}, a(function () {
			a("." + k).socialLikes()
		})
	});



    })(jQuery);



    $(document).ready(function() {

        // -- autosize init --

        autosize($('textarea'));

    });

