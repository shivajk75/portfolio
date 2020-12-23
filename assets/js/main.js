var MYPROFILE = MYPROFILE || {};
MYPROFILE.mainFunction = (function(){
    var init = function(){
        bindEvents();
    };
    var bindEvents = function(){
        var brainAnimation = function(){            
            setTimeout(function(){
                $('.brain-6').removeClass('opacity');
                $('.brain-1').addClass('opacity');
            },500);
            setTimeout(function(){
                $('.brain-1').removeClass('opacity');
                $('.brain-5').addClass('opacity');
            },1000);
            setTimeout(function(){
                $('.brain-5').removeClass('opacity');
                $('.brain-3').addClass('opacity');
            },1500);
            setTimeout(function(){
                $('.brain-3').removeClass('opacity');
                $('.brain-7').addClass('opacity');
            },2000);
            setTimeout(function(){
                $('.brain-7').removeClass('opacity');
                $('.brain-2').addClass('opacity');
            },2500);
            setTimeout(function(){
                $('.brain-2').removeClass('opacity');
                $('.brain-4').addClass('opacity');                
            },3000);
            setTimeout(function(){
                $('.brain-4').removeClass('opacity');
                $('.brain-6').addClass('opacity');
                brainAnimation();
            },3500);
        }
        brainAnimation();         
        
    };
    return {
        init: init
    }
}());