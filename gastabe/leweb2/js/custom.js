    $(function(){
      var $container = $('#container');
      $container.isotope({
        itemSelector : '.element'
      });
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');
      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        return false;
      });
      
      var $container = $('#container');
		$container.imagesLoaded( function(){
		  $container.isotope({
		    // options...
		  });
		});

      
    });
    
    
    $(function() {
				function setupSlide( $slide ) {
					$slide.find('.large').addClass( 'back' )
						.find('img').css({
							marginTop: 325,
							marginLeft: 50,
							width: 400
						});
					$slide.find('.small').addClass( 'back' )
						.find('img').css({
							marginTop: 325,
							marginRight: 50,
							width: 300
						});
				}
				function slideIn( $slide ) {
					$slide.find('.large img')
						.animate({
							width: 600,
							marginLeft: 0
						}, {
							queue: false,
							duration: _duration * 1.5
						})
						.animate({
							marginTop: -25
						}, {
							duration: _duration,
							complete: function() {
								$slide.find('.large').removeClass( 'back' );
							}
						})
						.animate({
							marginTop: 50
						}, {
							duration: _duration / 2
						});
					$slide.find('.small img')
						.delay( _duration )
						.animate({
							marginTop: 50
						}, {
							duration: _duration,
							complete: function() {
								$slide.find('.small').removeClass( 'back' );
							}
						})
						.animate({
							marginTop: 100
						}, {
							duration: _duration / 2
						});
					setTimeout(function() {
						$slide.find('.small img')
							.animate({
								width: 350,
								marginRight: 0
							}, {
								queue: false,
								duration: _duration
							});
					}, _duration * 1.5);
				}
				function slideOut( $slide ) {
					$slide.find('.small img')
						.animate({
							width: 300,
							marginRight: 50
						}, {
							queue: false,
							duration: _duration * 1.5
						})
						.animate({
							marginTop: 50
						}, {
							duration: _duration / 2,
							complete: function() {
								$slide.find('.small').addClass( 'back' );
							}
						})
						.animate({
							marginTop: 325
						}, {
							duration: _duration
						});
					$slide.find('.large img')
						.delay( _duration / 2 )
						.animate({
							marginTop: -25
						}, {
							duration: _duration / 2,
							complete: function() {
								$slide.find('.large').addClass( 'back' );
							}
						})
						.animate({
							marginTop: 325
						}, {
							duration: _duration
						});
					setTimeout(function() {
						$slide.find('.large img')
							.animate({
								width: 400,
								marginLeft: 50
							}, {
								queue: false,
								duration: _duration
							});
					}, _duration / 2);
				}
				var $carousel = $('#carousel');
				var _duration = 500;
				$carousel.carouFredSel({
					items: 1,
					pagination: '#pager',
					scroll: {
						fx: 'none',
						timeoutDuration: 4000,
						conditions: function( direction ) {
							if ( $carousel.hasClass( 'prepared' ) )
							{
								$carousel.removeClass( 'prepared' );
								return true;
							}
							if ( $carousel.hasClass( 'animating' ) )
							{
								return false;
							}
							$carousel.addClass( 'animating' );
							var $slide = $carousel.children().first();
							slideOut( $slide );
							setTimeout(
								function() {
									$carousel.addClass( 'prepared' );
									$carousel.trigger( direction );
								}, _duration * 2
							);
							return false;
						},
						onAfter: function( data ) {
							setupSlide( data.items.visible );
							slideIn( data.items.visible );
							setTimeout(
								function() {
									$carousel.removeClass( 'animating' );
								}, _duration * 2.5
							);
						}
					}
				});
			});
         

	$(function() {

				//	create carousel
				$('#carousel1').carouFredSel({
					responsive: true,
					items: {
						width: 200,
						height: '60%',
						visible: 5
					},
					auto: {
						items: 1
					},
					prev: '#prev1',
					next: '#next1'
				});

				//	re-position the carousel, vertically centered
				var $elems = $('#wrapper1, #prev1, #next1'),
					$image = $('#carousel1 img:first')

				$(window).bind( 'resize.example', function() {
					var height = $image.outerHeight( true );

					$elems
						.height( height )
						.css( 'marginTop', -( height/10 ) );

				}).trigger( 'resize.example' );

			});
            
    
    $(function() {
        var carousel2 = $('#carousel2');
        if ( carousel2.length ){
            carousel2.carouFredSel({
                width: 900,
                height: '100%',
                direction: 'up',
                items: 1,
                scroll: {
                    duration: 600,
                    onBefore: function( data ) {
                        data.items.visible.children().css( 'opacity', 0 ).delay( 200 ).fadeTo( 400, 1 );
                        data.items.old.children().fadeTo( 400, 0 );
                    }
                }
            });
        }
    });
            
     
    $(function() {
				$('#carousel3').carouFredSel({
					width: '100%',
					items: {
						visible: 3,
						start: -1
					},
					scroll: {
						items: 1,
						duration: 1000,
						timeoutDuration: 3000
					},
					prev: '#prev3',
					next: '#next3',
					pagination: {
						container: '#pager3',
						deviation: 1
					}
				});
			});
            
            
            
    
    $('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
    });
           
           
           
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


    function device_detection() {
        devices = new Array();
        devices[0] = new Array();

        devices[0]['min'] = 0;
        devices[0]['max'] = 649;
        devices[0]['device'] = 'phone';

        devices[1] = new Array();
        devices[1]['min'] = 650;
        devices[1]['max'] = 1154;
        devices[1]['device'] = 'tablet';

        devices[2] = new Array();
        devices[2]['min'] = 1155;
        devices[2]['max'] = 99999;
        devices[2]['device'] = 'desktop';

        found = false;
        for(i = 0; i < devices.length; i++) {
        device = devices[i];
        if ((screen.width >= device['min']) && (screen.width <= device['max'])) {
        found = device['device'];
        break;
        }
        }

        return found;
    }

jQuery(document).ready(function(){
    var device = device_detection();

    if ( device != 'phone' && device != 'tablet' ){
   
   			   // --
   			   
   $("[data-animation='animation']").each( function(){
    var _this       = $( this),
        animUp      = _this.data('anup'),
        animDown    = _this.data('andown'),
        animTrigger = _this.data('trigger')
    ;
        _this.waypoint( function( direction ) {
        if( direction === 'down' ) {
            _this.addClass(animDown);
            if ( _this.hasClass( animUp ) ){
                _this.removeClass(animUp);
            }
        }   else if( direction === 'up' ){
            _this.addClass(animUp);
            if ( _this.hasClass( animDown ) ){
                _this.removeClass(animDown);
            }
        }
        }, {
        //triggerOnce: animTrigger ? true : false,
        offset: '100%'
        });
    });
   
   
    $( '[class^="knob-"]' ).each( function(i) {
        var $el = $( this ),
            $rel= $el.data('rel')
        ;
    $el.knob().waypoint( function( direction ) {
            if( $el.val() == 0 ){
                $({value: 0}).animate({value: $rel }, {
                    duration: 2000,
                    easing:'swing',
                    step: function () {
                        $el.val(Math.ceil(this.value)).trigger('change');
                    },
                    complete: function() {
                        $el.val($rel);
                    }
                });
            }
        },
        {
            offset: '100%',
            triggerOnce: true
        }
    );
    });

   	var $head = $( '#ha-header' );
			   $( '.ha-waypoint' ).each( function(i) {
			    var $el = $( this ),
			     animClassDown = $el.data( 'animateDown' ),
			     animid = $el.attr( 'id' ),
			     animClassUp = $el.data( 'animateUp'),
			                    activeItem = $('[data-number='+ animid +']'),
			                    animSectionDown = $el.data( 'animservicesdown'),
			                    animSectionUp = $el.data( 'animservicesup')
			                ;
			    $el.waypoint( function( direction ) {
			     if( direction === 'down' && animClassDown ) {
			                        $('[data-number^=section_]').removeClass('active');
			                        $('[data-number='+ animid +']').addClass('active');
			                        //dropdown_menu
			                        $('.dropdown_menu > a').text( activeItem.text() );
			      $head.attr('class', 'ha-header ' + animClassDown);
			                        $el.addClass(animSectionDown);
			                        $el.removeClass(animSectionUp);
			     }
			     else if( direction === 'up' && animClassUp ){
			                        $('[data-number^=section_]').removeClass('active');
			                        $('[data-number='+ animid +']').addClass('active');
			                        //dropdown_menu
			                        $('.dropdown_menu > a').text( activeItem.text() );
			      $head.attr('class', 'ha-header ' + animClassUp);
			                        $el.removeClass(animSectionDown);
			                        $el.addClass(animSectionUp);
			     }
			    }, { offset: '20%' } );
			                activeItem.click(function(){
			                    $.scrollTo('#'+animid, 1000);
			                    return false;
			                });
			   } );
			   
  }



     function resizeYT(){
         var wh = $(window).height();
         $('#yt').find('iframe').css({
             'height':  wh
         });
     }
     resizeYT();

     $( window ).resize(function() {
         resizeYT();
     });


 });
 function validateEmail(email) {
  var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
  var valid = emailRegex.test(email);
  if (!valid) {
    return false;
  } else
    return true;
}
 $(".send_mail").on('click', function() {
	var data = $(this).parents('form').serialize();
    $(this).parents('form').find('.form-control').each(function() {
    	if($(this).val().length==0){
        	$(this).css({'border-color':'#f00'});
            if($(this).parent().find('p').length==0){
            	$(this).before( "<p class='alert alert-warning'>This field can't be empty</p>" );
                return;
            } 
        }else{
        	$(this).css({'border-color':'#66afe9'});
        	$(this).parent().find('p').each(function(){
            	$(this).remove();    
            });   
        }
  
    });
	
    if(validateEmail($('#InputEmail').val()) == false){
            	console.log('false');
    			$('#InputEmail').css({'border-color':'#f00'});
                if($('#error_email').length==0){
                	$('#InputEmail').before( "<p id='error_email' class='alert alert-warning'>Please enter valid email.</p>" );
                }
    		} else {
            	console.log('true');
    			$('#InputEmail').css({'border-color':'#66afe9'}); 
                if($('#error_email').length>0){
                	$('#error_email').remove();
                }
			    $.ajax({
	    				type: "POST",
	    				url: 'send_mail.php',
	    				data: data,
	    				success: function(){
	      					$('#mail_form').before("<p class='alert alert-success'> Mail was successfully sent.</p>");
                            $('#mail_form').remove();
	    				},
	    				error: function(){
	      					$('#mail_form').before("<p class='alert alert-warning'>Sorry. Something went wrong.</p>");
	    				}
					});            
    		}

	return false;	
 });







