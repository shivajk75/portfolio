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
        
        $('.think').hover(
            function () {
                $('.js-think').addClass('active');
            },
            function () {
                $('.js-think').removeClass('active');
            }
        );
        $('.create').hover(
            function () {
                $('.js-create').addClass('active');
            },
            function () {
                $('.js-create').removeClass('active');
            }
        );
        $('.code').hover(
            function () {
                $('.js-code').addClass('active');
            },
            function () {
                $('.js-code').removeClass('active');
            }
        );
        $('.deliver').hover(
            function () {
                $('.js-deliver').addClass('active');
            },
            function () {
                $('.js-deliver').removeClass('active');
            }
        );
    };
    return {
        init: init
    }
}());