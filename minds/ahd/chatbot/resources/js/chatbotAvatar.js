/* MINDsLab. UX/UI Team CSJ 2021.04.20 */

function setMedia(){
    if( window.parent.innerWidth > 768 ){
        $("#btn_chatbotAvatar").addClass("pc").removeClass("mo");
        $("#chatbotAvatar_wrap").addClass("pc").removeClass("mo");
        $(top.document).find("#chatbotAvatar").addClass("pc").removeClass("mo");
    }
    if( window.parent.innerWidth < 769 ){
        $("#btn_chatbotAvatar").addClass("mo").removeClass("pc");
        $("#chatbotAvatar_wrap").addClass("mo").removeClass("pc");
        $(top.document).find("#chatbotAvatar").addClass("mo").removeClass("pc");
    }
}

// 아바타/히스토리 탭 버튼
function midBtn(){
    $(".mid_btn_area button").on("click", function(){
        $(".mid_btn_area button").removeClass("active");
        $(this).addClass("active");
        if( $(this).hasClass("btn_history") ){
            $(".scrollBox").addClass("history");
            $(".info_txt").css("display","table");
            $(".videoBox").css("display","none");
        } else {
            $(".scrollBox").removeClass("history");
            $(".info_txt").css("display","none");
            $(".videoBox").css("display","block");
        }
    })
}
  
function expire(){
    $(top.document).find('#chatbotAvatar').addClass("expires");
    $("#chatbotAvatar_wrap .contBox > div").remove();
    $("#chatbotAvatar_wrap").addClass("chatbot_expire");

    $("#chatbotAvatar_wrap .contBox").append(' \
        <h1 class="logo"></h1> \
        <button type="button" class="btn_minimize"><i class="far fa-times"></i>닫기</button> \
        <div class="cnt"> \
            <img src="resources/images/img_ghost.svg" class="img_ghost" alt="고스트"> \
            <img src="resources/images/img_ooops.svg" class="ooops" alt="ooops!"> \
            <p>서비스 이용이 만료되었습니다.<br>관리자에게 문의하세요.</p> \
            <a href="mailto:hello@mindslab.ai" class="btn_inquire">문의하기</a> \
        </div> '
    );  
}

$(document).ready(function(){
    midBtn();      // 아바타/히스토리 탭 버튼

    // 챗봇 아바타 열기
    var chatbotAvatar = $(top.document).find('#chatbotAvatar'),
        chatbotAvatarOpenBtn = $("#btn_chatbotAvatar"),
        chatbotAvatarUI = $('#chatbotAvatar_wrap');

    chatbotAvatarOpenBtn.on('click', function(){
        chatbotAvatar.addClass('open');
        chatbotAvatarOpenBtn.addClass('hide');       
        chatbotAvatarUI.addClass('open');
        
        //로드시 video 동영상 재생
        // $(".video video").get(0).play();
        // $(".video video").get(0).muted = false;

        // if( window.parent.innerWidth < 768 ){
        //     $(top.document).find("#wrap").css("overflow","hidden");
        // } else {
        //     $(top.document).find("#wrap").css("overflow","");
        // }
    });

    var expires;
    expires = false;
    if( expires ){
        expire();
        chatbotAvatarOpenBtn.off("click").on("click", function(){
            chatbotAvatar.addClass('open');
            chatbotAvatarOpenBtn.addClass('hide');       
            chatbotAvatarUI.addClass('open');
        });
    }

    // 컨트롤러 버튼 스와이퍼
    var btnSwiper = new Swiper(".recogBoxBtn", {        
        slidesPerView: "auto",
        spaceBetween: 10,
        observer:true,
        observeSlideChildren:true,
        observeParents:true,
        pagination: {
            clickable: true,
        },
        freeMode: true,
        freeModeSticky: true,
        grabCursor: true,
        // resizeObserver:true,
    })

    $("#btn_chatbotAvatar .txt em").on("DOMSubtreeModified propertychange", function() {
        // $(".swiper-slide, .swiper-notification").remove();
        btnSwiper.removeAllSlides();
        var stnName =  $("#btn_chatbotAvatar .txt em").text();
        function btn(){
            return '<button>' + stnName + '</button>';
        }
        var toAdd = document.createDocumentFragment();
        for(var i = 0; i < stnName.length; i++){
            var div = document.createElement("div");
            div.setAttribute("class","swiper-slide");
            div.innerHTML = btn(i);
            toAdd.appendChild(div);
        }
        // btnSwiper.updateSlides();
        // btnSwiper.updateSize();
        // btnSwiper.params.loop = true;
        btnSwiper.appendSlide(toAdd);
        btnSwiper.update();
        btnSwiper.slideTo(0);
    });
    
    // 최대화 버튼
    $(".btn_full").on("click", function(){
        if( $("#chatbotAvatar_wrap").hasClass("pc")){
            if( $(chatbotAvatar).hasClass("full") ){
                chatbotAvatar.removeAttr("style");
                chatbotAvatar.removeClass("full") ;
                chatbotAvatarUI.removeClass("full");
                $(top.document).find("body").css("overflow","");
                var btnSwiper = new Swiper(".recogBoxBtn", {
                    slidesPerView: "auto",
                    spaceBetween: 10,
                    pagination: {
                        clickable: true,
                    },
                })
            } else {
                chatbotAvatar.css({"width":"100%", "height":"100%"});
                chatbotAvatar.addClass("full") ;
                chatbotAvatarUI.addClass("full");
                $(top.document).find("body").css("overflow","hidden");
                var btnSwiper = new Swiper(".recogBoxBtn", {
                    slidesPerView: "auto",
                    spaceBetween: 12,
                    pagination: {
                        clickable: true,
                    },
                })
            }
        }
    })

    // 컨트롤러 기능 - 음소거
    $('.btn_mute').on('click', function(){
        if( $(this).hasClass("on") ){
            $(".video_vid").get(0).muted = false;
            $(this).removeClass("on") ;
        } else {
            $(".video_vid").get(0).muted = true;
            $(this).addClass("on") ;
        }
    }); 

    // 컨트롤러 기능 - 정지
    $('.btn_pause').on('click', function(){
        if( $(this).hasClass("btn_vid_play") ){
            $(".video_vid").get(0).play();
            $(this).removeClass("btn_vid_play") ;
        } else {
            $(".video_vid").get(0).pause();
            $(this).addClass("btn_vid_play") ;
        }
    }); 

    // 컨트롤러 기능 - 최소화
    $('.btn_minimize').on('click', function(){
        chatbotAvatar.removeClass('open full');
        chatbotAvatar.removeAttr("style");
        chatbotAvatarUI.removeClass("open full");
        chatbotAvatarOpenBtn.removeClass('hide');
        $(top.document).find("body").css("overflow","");

        // video 멈춤, 음소거 버튼 on 삭제
        $(".video video").get(0).muted = true;
        $(".btn_mute").removeClass("on");

        $(".chat_lst .avatar").removeAttr("style");

        var btnSwiper = new Swiper(".swiper-container", {
            slidesPerView: "auto",
            spaceBetween: 10,
            pagination: {
                clickable: true,
            },
        })
    }); 

    // 로딩중 textarea, button 비활성화   // [D] 개발시 삭제
    if( $(".avatar.loading").css("display") === "block"){
        $(".conversationRecogBox textarea, .conversationRecogBox button").attr('disabled', true);
    }

    // 컨트롤러 하단 버튼
    $(".controller_btn").on("click", function(){
        var tab_id = $(this).attr("data-btn");
        $(this).siblings(".controller_btn").removeClass("active");
        $(this).parents(".btm_btn_area").siblings(".conversationRecogBox").removeClass("active");
        $(this).addClass("active");
        $("."+tab_id).addClass("active");
    });

    // 컨트롤러 기능 - 텍스트대화
    $(".conversationRecogBox.text textarea").on("keydown", function(){
        $(".conversationRecogBox.text").addClass("on");
    })
    $(".conversationRecogBox.text textarea").on("keyup", function(){
        if( !$(".conversationRecogBox.text textarea").val() ) {
            $(".conversationRecogBox.text").removeClass("on");
        }
    });

    // 컨트롤러 기능 - 음성지원
    $(".enter_voice_area .btn_send").on("click", function(){
        $(this).parents(".enter_voice_area").css({"display":"none"});
        $(this).parents(".enter_voice_area").siblings(".reEnter_voice").css({"display":"block"});
    })
    $(".btn_reQuestion").on("click", function(){
        $(this).parent().css({"display":"none"});
        $(this).parent().siblings(".voice_no_streaming").css({"display":"block"});
    })
});

window.onload = function(){
    var chatbotLinks = document.querySelectorAll(".chatbot_parent_link");
    Array.prototype.forEach.call(chatbotLinks, function(target){
        target.addEventListener("click", function(){
            var link = target.getAttribute("href");
            parent.document.location=link;
        });
    });

    setMedia();
    window.addEventListener('resize', function(event){
        setMedia();
    });
};