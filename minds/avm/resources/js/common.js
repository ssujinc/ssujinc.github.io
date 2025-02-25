function scr_motion(){
    if($(".scroll-motion").size() != 0 ) {
        $(".scroll-motion").each(function(q){
            if($(window).scrollTop() > $(".scroll-motion").eq(q).offset().top - 800) {
                TweenMax.to($(".scroll-motion").eq(q), 1.5, {opacity:1, top:0, ease:Power3.ease});
            }
        });
    }
};

function btnClick(){
    var link = $(".btn_blue");
    link.on("click",function(e){
        $("html, body").animate({
            scrollTop: $(".stn_form").offset().top-60
        },600);
        e.preventDefault();
    });
}

$(function(){
    btnClick();
})

$(window).on({
    "load":function(){
        // 헤더 모바일용 햄버거 버튼
        $(".btn_ham").on("click", function () {
            $(this).toggleClass("active");
            $("#header").toggleClass("menu_on");

            if ($("#header").hasClass("menu_on")) {
                $("body").css("overflow", "hidden");
                return;
            }
            $("body").css("overflow", "initial");
        });

        /* scroll motion */
        scr_motion();
    },
    "resize":function(){},
    "scroll":function(){
        /* scroll motion */
        scr_motion();
        $('#header').css({left: 0 - $(this).scrollLeft()});
    }
});