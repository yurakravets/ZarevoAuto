
(function ($) {
	"use strict";

  // Declare Carousel jquery object
  var owl = $('.bs_slider_wrapper .owl-carousel');

  // Carousel initialization
  owl.owlCarousel({
      loop:true,
      margin:0,
      navSpeed:1000,
      autoplay:true,
      nav:true,
      navText: [ '<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>' ],
      items:1
  });


  // add animate.css class(es) to the elements to be animated
  function setAnimation ( _elem, _InOut ) {
    // Store all animationend event name in a string.
    // cf animate.css documentation
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    _elem.each ( function () {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }

// Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");
      setAnimation ($elemsToanim, 'out');
  });

// Fired after current slide has been changed
  owl.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
      setAnimation ($elemsToanim, 'in');
  })



	var landingpage = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- Carina Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.TestimonialSlider();
			this.ClientSlider();
			this.MagnificPopup();
			
			
			
			},
		
		/*-------------- Carina Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
			//client slider
			ClientSlider: function(){
				if($('.bs_clientslider .owl-carousel').length > 0){		
					$('.bs_clientslider .owl-carousel').owlCarousel({
						loop:true,
						margin:10,
						nav:false,
						dots:false,
						autoplay:true,
						autoplayTimeout:2000,
						loop:true,
						responsive:{
							0:{
								items:1 								
							},
							600:{
								items:2
							},
							768:{
								items:4
							},
							1000:{
								items:6
							}
						}
					});
				}
					
			},
			//testimonial slider
			TestimonialSlider: function(){
				if($('.bs_testimonialslider .owl-carousel').length > 0){		
					$('.bs_testimonialslider .owl-carousel').owlCarousel({
						loop:true,
						margin:30,
						nav:true,
						navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
						dots:false,
						autoplay:false,
						loop:true,
						responsive:{
							0:{
								items:1 								
							},
							600:{
								items:1
							},
							768:{
								items:2
							},
							1000:{
								items:2
							}
						}
					});
				}
					
			},
			MagnificPopup: function(){
				if($('.popup-youtube').length > 0){	
					$('.popup-youtube').magnificPopup({
						disableOn: 700,
						type: 'iframe',
						mainClass: 'video_container',
						removalDelay: 160,
						preloader: false,
						fixedContentPos: false
					  });
				}
			}
		};

		landingpage.init();

		// Load Event
		// Loader js
		$(window).on('load', function() {
			
			
			
		});

		// Scroll Event
		//fixed main menu
		$(window).on('scroll', function () {

	});

//ajax
 $("#submit").click(function(){
      var name = $('#name').val();
      var phone = $('#phone').val();
      var email = $('#email').val();
      var subject = $('#subject').val();
      var message = $('#message').val();
      var mail_letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    
      if (name != "" && phone != "" && email != ""  && subject != ""  && message != "") {
          if(name != "") {
              if(phone != "" && phone.length <= 10) {
                  if(email.match(mail_letters)){
                      $.ajax({
                      method : 'post',
                      url : 'ajax.php',
                      data :  {'first_name' : name ,
                                'phone_number' : phone,
                                'email' : email,
                                'message' : message,
                                'subject' : subject,
                                },
                     }).done(function(resp){
                         if( resp == 1){
                              document.getElementById("error").style.color = "green";
                             document.getElementById("error").innerHTML = "Mail Send Successfully";
                              $('#uname').val('');
                             $('#phone').val('');
                             $('#email').val('');
                             $('#subject').val();
                             $('#message').val('');
                         }else{
                              document.getElementById("error").style.color = "red";
                              document.getElementById("error").innerHTML = "Mail not Send";
                         }
                     console.log(resp); });
                
                  }else{
                      document.getElementById("error").style.color = "red";
                      document.getElementById("error").innerHTML = "Please Fill The  Correct Mail Id";
                  }
              }else{
                  document.getElementById("error").style.color = "red";
                  document.getElementById("error").innerHTML = "Please Fill The  Correct Number";
              }
          }else
          {   document.getElementById("error").style.color = "red";
              document.getElementById("error").innerHTML = "Please Fill The Correct Name";
          }   
      }else{
          document.getElementById("error").style.color = "red";
          document.getElementById("error").innerHTML = "Please Fill All Detail";
      }
  });

// for counter 
		$('.timer').appear(function() {
			$(this).countTo();
		});



      // Menu js for Position fixed
    $(window).scroll(function(){
      var window_top = $(window).scrollTop() + 2; 
        if (window_top > 1000) {
          $('.bs_navigation').addClass('menu_fixed animated fadeInDown');
        } else {
          $('.bs_navigation').removeClass('menu_fixed animated fadeInDown');
        }
    });


// Single page scroll menu
  var pluginName = 'ScrollIt',
    pluginVersion = '1.0.3';

  /*
   * OPTIONS
   */
  var defaults = {
    upKey: 38,
    downKey: 40,
    easing: 'linear',
    scrollTime: 600,
    activeClass: 'active',
    onPageChange: null,
    topOffset : -70
  };

  $.scrollIt = function(options) {

    /*
     * DECLARATIONS
     */
    var settings = $.extend(defaults, options),
      active = 0,
      lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

    /*
     * METHODS
     */

    /**
     * navigate
     *
     * sets up navigation animation
     */
    var navigate = function(ndx) {
      if(ndx < 0 || ndx > lastIndex){ return; }

      var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
      $('html,body').animate({
        scrollTop: targetTop,
        easing: settings.easing
      }, settings.scrollTime);
    };

    /**
     * doScroll
     *
     * runs navigation() when criteria are met
     */
    var doScroll = function (e) {
      var target = $(e.target).closest("[href]").attr('href') ||
      $(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
      navigate(parseInt(target,10));
    };

    /**
     * keyNavigation
     *
     * sets up keyboard navigation behavior
     */
    var keyNavigation = function (e) {
      var key = e.which;
      if($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
        return false;
      }
      if(key == settings.upKey && active > 0) {
        navigate(parseInt(active,10) - 1);
        return false;
      } else if(key == settings.downKey && active < lastIndex) {
        navigate(parseInt(active,10) + 1);
        return false;
      }
      return true;
    };

    /**
     * updateActive
     *
     * sets the currently active item
     */
    var updateActive = function(ndx) {
      if(settings.onPageChange && ndx && (active != ndx)) {settings.onPageChange(ndx); }

      active = ndx;
      $('[href]').removeClass(settings.activeClass);
      $('[href=' + ndx + ']').addClass(settings.activeClass);
    };

    /**
     * watchActive
     *
     * watches currently active item and updates accordingly
     */
    var watchActive = function() {
      var winTop = $(window).scrollTop();

      var visible = $('[data-scroll-index]').filter(function(ndx, div) {
        return winTop >= $(div).offset().top + settings.topOffset &&
        winTop < $(div).offset().top + (settings.topOffset) + $(div).outerHeight();
      });
      var newActive = visible.first().attr('data-scroll-index');
      updateActive(newActive);
    };

    /*
     * runs methods
     */
    $(window).on('scroll',watchActive).scroll();

    $(window).on('keydown', keyNavigation);

    $('.bs_scroll_menu').on('click','[href], [data-scroll-goto]', function(e){
      e.preventDefault();
      doScroll(e);
    });

  };

})(jQuery);