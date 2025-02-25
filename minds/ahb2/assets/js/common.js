setTimeout(function() {
    setTimeout(function(){
        $(".bookathon").fadeOut(1500);
    }, 1000);
    setTimeout(function(){
        $(".intro").remove();
        $("#contents").fadeIn(2000);
    }, 2000);
}, 900);

function modalOpen(){
    $(".btn_modal_open").on("click", function () {
        var popupId = "." + $(this).attr("data-popup")+".modal_popup";
        
        $("body").css('overflow', 'hidden');
        $("body").find(popupId).wrap('<div class="modal_wrap"></div>');
        $("body").find(popupId).before('<div class="dim"></div>');

        //modal popup close
        $(".btn_md_close").off('click').on("click", function () {
            $("body").css("overflow","");
            $(".dim").fadeOut(800).remove();
            $("body").find(popupId).unwrap();
        });
    });
}

$(function(){
    $(".left img").animate({
        top:"50%",
        right:"-513px"
    }, 1200, "easeOutQuint");
    $(".right img").animate({
        bottom:"50%",
        left:"-513px"
    }, 1600, "easeOutQuint");
    
    $(".left").delay(1600).animate({
        right:"200%"
    }, 4000, "easeOutQuint");
    $(".right").delay(1600).animate({
        left:"200%"
    }, 4000, "easeOutQuint");

    modalOpen();
})