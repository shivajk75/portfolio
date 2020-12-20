var MYPROFILE = MYPROFILE || {};
MYPROFILE.mainFunction = (function(){
    var init = function(){
        bindEvents();
    };
    var bindEvents = function(){
        var eyeAnimation = function(){
            var $obj = $('.eye');
            setTimeout(function(){
                $obj.removeClass('m0').addClass('m1');
            },2000);
            setTimeout(function(){
                $obj.removeClass('m1').addClass('m2');
            },4000);
            setTimeout(function(){
                $obj.removeClass('m2').addClass('m3');
            },6000);
            setTimeout(function(){
                $obj.removeClass('m3').addClass('m0');
                eyeAnimation();
            },8000);            
        }
        eyeAnimation(); 
        
    };
    return {
        init: init
    }
}());