$(function() {

	//Smartmenu
	$('.sm').smartmenus( {
		subMenusMinWidth: '100%',
		mainMenuSubOffsetX: '0px'
		
	});

	//Lang-list
	$('.lang__main').click(function(e) {
		e.preventDefault();
		$(this).next().slideToggle();
	});

	//Input-visible
	$('.search-btn').click(function(e) {
		
		$(this).prev().addClass('search-input--visible');
	});

	//Memu-fixed
	$(window).scroll(function() {
		var $win = $(this),
				$nav = $('.top-nav'),
				$logo = $('.top-logo'),
				$logoMini = $('.top-logo-mini'); 
		if($win.scrollTop() > 100){
			$nav.css({'position': 'fixed',
								'width': '100%',
								'top': '0'
			});
			$logo.css('bottom', '0');
			$logoMini.removeClass('top-logo-mini--hidden');
		}else{
			$nav.css({'position': 'fixed',
						'top': 'auto'
			});
			$logoMini.addClass('top-logo-mini--hidden');
			$logo.css('bottom', '-54px');
		}
		
	});

	//owl-carousel
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		animateOut: 'fadeOut',
		mouseDrag: false,
		autoplay: true,
		nav: true,
		navText: ''

	});

	//Featured Tours - TABS
	var $toursIcons = $('.featured-tours__icons-link');
			//

			$toursIcons.mouseenter(function() {
				var $this = $(this),
				$iconParent = $this.closest('.featured-tours__item'),
				$dataTab = $iconParent.attr('data-tab');
				$dataTab = '#' + $dataTab;
				
				$iconParent.addClass('featured-tours__item--active')
				.siblings().removeClass('featured-tours__item--active');

				var $currentTab = $($dataTab),
						$currenttoursItems = $currentTab.find('.top-offers__item');
				$currentTab.removeClass('hidden')
				.siblings().addClass('hidden');

				$currenttoursItems.each(function(index, elem) {
					var $thisItem = $(elem),
							delay = index * 200,
						  timer = setTimeout(function() {
						  	$thisItem.removeClass('op-transp');
						  }, delay);

				});

				var $toursItems = $currentTab.siblings().find('.top-offers__item');
				$toursItems.each(function(index, elem) {
					var $thisElem = $(elem);
					$thisElem.addClass('op-transp');
				});

			//console.log(toursItems);
		});

	//Animate CSS
	$('.section-title').waypoint(function() {
		this.element.classList.add('fadeInUp');
		this.element.classList.remove('op-transp--translate');
	}, {offset: '80%'});

	$('.customize-trip .section-title__descr').waypoint(function() {
		this.element.classList.add('fadeIn');
		this.element.classList.remove('op-transp--scale');
	}, {offset: '90%'});

	$('.customize-trip .button').waypoint(function() {
		this.element.classList.add('fadeIn');
		this.element.classList.remove('op-transp--scale');
	}, {offset: '90%'});
	
	$('.featured-tours__icons-link').waypoint(function() {
			this.element.classList.add('fadeIn');
			this.element.classList.remove('op-transp--translate');
		}, {offset: '90%'});

	$('.why-choose__item-left').waypoint(function() {
			//this.element.classList.add('fadeInLeft');
			this.element.classList.remove('item-left-anim');
		}, {offset: '90%'});
	$('.why-choose__item-right').waypoint(function() {
			//this.element.classList.add('fadeInLeft');
			this.element.classList.remove('item-right-anim');
		}, {offset: '90%'});



	//Forms
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

 $(function() {
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function(e) {
      var $menu = $('.sm');
      if (this.checked) {
        $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
      } else {
        $menu.show().slideUp(250, function() { $menu.css('display', ''); });
      }
    });
    // hide mobile menu beforeunload
    $(window).bind('beforeunload unload', function() {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
});