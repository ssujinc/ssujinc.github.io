window.onload = function () {
    
    var ww = $(window).width();
    var elm = ".full_section";
    if( ww > 1024){
        $(elm).each(function (index) {
            // 개별적으로 Wheel 이벤트 적용
            $(this).on("mousewheel DOMMouseScroll", function (e) {
                 e.preventDefault();
                 var delta = 0;
                 if (!event) event = window.event;
                 if (event.wheelDelta) {
                     delta = event.wheelDelta / 120;
                 if (window.opera) delta = -delta;
                 }
                 else if (event.detail)
                 delta = -event.detail / 3;
                 var moveTop = $(window).scrollTop();
                 var elmSelecter = $(elm).eq(index);
     
                 // 마우스휠을 위에서 아래로
                 if (delta < 0) {
                     if ($(elmSelecter).next() != undefined) {
                         try{
                             moveTop = $(elmSelecter).next().offset().top;
                         }catch(e){}
                     }
                     /* if ($(elm).eq(2).next() == undefined) {
                         try{
                             moveTop = $(".footer").offset().top;
                         }catch(e){}
                     } */
                 // 마우스휠을 아래에서 위로
                 } else {
                     if ($(elmSelecter).prev() != undefined) {
                         var scroll = document.documentElement.scrollTop;
                         var bottom = scroll + $(window).height() == $(document).height();
                         var lastChild = $('.full_section:nth-last-child(2)');
                         var lastChildTop = lastChild.offset().top;
                         if ( bottom ) {
                             moveTop = lastChildTop;
                         } else { 
                              try{
                                 moveTop = $(elmSelecter).prev().offset().top;
                             }catch(e){}
                         }
                     }
                 }
                 
                 // 화면 이동 1.4초(1400)
                 $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                 },1400, "easeInOutCubic");
             });
        });
    }
    
};

$(function(){
    var $root = $('html, body');
    $(".logo a").click(function(){
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: (target.offset().top)
            }, 1000, "easeInOutCubic");
            return false;
        }
        }
    })

});