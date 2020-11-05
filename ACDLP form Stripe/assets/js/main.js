/*----------------------------------------------
*
* [Main Scripts]
*
* Theme    : Leverage
* Version  : 2.0
* Author   : Codings
* Support  : codings.dev
* 
----------------------------------------------*/

/*----------------------------------------------

[ALL CONTENTS]

1. Preloader
2. Responsive Menu
3. Navigation 
4. Slides 
5. Particles
6. Progress Bar
7. Shuffle
8. Sign and Register Form
9. Multi-Step Form 
10. Simple Form
11. Recaptcha
12. Cookie Notice

----------------------------------------------*/

var step1Form = document.getElementById("leverage-form-1");
var step2Form = document.getElementById("leverage-form-2");
document.getElementById("leverage-form-2").style.display="none";
$('.multi-step-form .progressbar li').first().addClass('active');

/*----------------------------------------------
1. Preloader
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    let preloader = $('.preloader');

    setTimeout(function() {
        preloader.addClass('ready');
        
    }, preloader.data('timeout'))
})


/*----------------------------------------------
6. Progress Bar
----------------------------------------------*/

jQuery(function($) {

    'use strict';

    function initCounter(section, item, duration) {

        $(document).one('inview', item, function(event, inview) {

            if (inview) {            
    
                $(item).each(function() {
    
                    var percent = $(this).data('percent');
                    var pcolor  = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
                    var scolor  = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    
                    if ( $(section).hasClass('odd')) {
                        var tmode = 'rgba(255, 255, 255, 0.075)';
                    } else {
                        var tmode = 'rgba(0, 0, 0, 0.075)';
                    }

                    if ( $(this).data('symbol') ) {                        
                        var custom_symbol = $(this).data('symbol');
                    } else {
                        var custom_symbol = '%';
                    }
    
                    if ( $(section).hasClass('preloader') || $(section).hasClass('skills')) {
                        var symbol = '<i>'+custom_symbol+'</i>';
                    } else {
                        var symbol = '';
                    }

                    if(section == '.counter.funfacts') {
                        var height = 70;
                    } else {
                        var height = 120;
                    }
    
                    $(this).radialProgress({
                        value: (percent / 100),
                        size: height,
                        thickness: 10,
                        lineCap: 'butt',
                        emptyFill: tmode,
                        animation: { 
                            duration: duration, 
                            easing: "radialProgressEasing" 
                        },
                        fill: {
                            gradient: [[pcolor, 0.1], [scolor, 1]], 
                            gradientAngle: Math.PI / 4
                        }
                    }).on('radial-animation-progress', function(event, progress) {
                        $(this).find('span').html(Math.round(percent * progress) + symbol);
                    })
                })
            }
        })
    }
    
    let preloader = $('.preloader');
    let preloader_timeout = ( preloader.data('timeout') - 300);

    initCounter('.counter.preloader', '.counter.preloader .radial', preloader_timeout);
    initCounter('.counter.funfacts', '.counter.funfacts .radial', 5000);
    initCounter('.counter.skills', '.counter.skills .radial', 5000);
})

jQuery(function ($) {
	step1Form.addEventListener("submit", function(evt) {
    evt.preventDefault();
	document.getElementById("leverage-form-2").style.display="initial";
	document.getElementById("leverage-form-1").style.display="none";
	$('.multi-step-form .progressbar li').addClass('active');

  });
})

