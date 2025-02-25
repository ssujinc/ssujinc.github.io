// modal 배경 눌렀을때 끄기
document.querySelectorAll('.modal_bg').forEach((modal_bg) => {
    modal_bg.addEventListener('click', () => {
        document.querySelectorAll('.active').forEach((active_list) => {
            active_list.classList.remove('active');
        });
        document.querySelectorAll('.modal').forEach((open_modals) => {
            open_modals.style.display = 'none';
        });
    });
});

// modal close icon 눌렀을때 끄기
document.querySelectorAll('.modal_close').forEach((modal_close) => {
    modal_close.addEventListener('click', () => {
        document.querySelectorAll('.active').forEach((active_list) => {
            active_list.classList.remove('active');
        });
        document.querySelectorAll('.modal').forEach((open_modals) => {
            open_modals.style.display = 'none';
        });
    });
});

// all nav
document.querySelectorAll('.my_info ul li a')[0].addEventListener('click', function () {
    document.querySelectorAll('.active').forEach((active_list) => {
        active_list.classList.remove('active');
    });
    document.querySelectorAll('.modal').forEach((open_modals) => {
        open_modals.style.display = 'none';
    });
    document.querySelectorAll('.my_info ul li a')[0].classList.add('active');
    document.getElementById('personal_info_modify').style.display = 'block';
});

document.querySelectorAll('.my_info ul li a')[1].addEventListener('click', function () {
    document.querySelectorAll('.active').forEach((active_list) => {
        active_list.classList.remove('active');
    });
    document.querySelectorAll('.modal').forEach((open_modals) => {
        open_modals.style.display = 'none';
    });
    document.querySelectorAll('.my_info ul li a')[1].classList.add('active');
    document.getElementById('password_modify').style.display = 'block';
});

document.querySelectorAll('.my_info ul li a')[2].addEventListener('click', function () {
    document.querySelectorAll('.active').forEach((active_list) => {
        active_list.classList.remove('active');
    });
    document.querySelectorAll('.modal').forEach((open_modals) => {
        open_modals.style.display = 'none';
    });
    document.querySelectorAll('.my_info ul li a')[2].classList.add('active');
    document.getElementById('logout').style.display = 'block';
});

/* 사용팁 모달 클릭 - 개발시 삭제 */
var target = document.querySelectorAll(".using_tips");
var tartgetLength = target.length;
for(var i=0; i < tartgetLength; i++){
    target[i].addEventListener("click",function(){
        document.getElementById("nav").classList.remove('active');
        $(".tips_modal").parents(".modal").css("display","block");
    });
}

// test -> 개발시 삭제
var music = new Audio();
function playAudio(file) {
    music.pause();
    music = new Audio(file);
    music.play();
}

// mobile nav open
function mobileNav() {
    $('.nav_mobile_header .menu_box').click(function(){
        if(!$('#nav').hasClass('active')){
            $('#nav').addClass('active');
            $('.container').css('overflow','hidden');
        }else{
            $('#nav').removeClass('active');
            $('body').css('overflow','');
            $('.container').css('overflow','');
        }
    })
    $('.nav_inner').find('.close_btn_con').on('click',function(){
        if($('#nav').hasClass('active')){
            $('#nav').removeClass('active');
            $('body').css('overflow','');
            $('.container').css('overflow','');
        }
    })
}

// includes는 IE에서 동작하지 않아서 indexOf를 사용
var userAgent = window.navigator.userAgent;
var isChrome = userAgent.indexOf('Chrome');
var isChromeMobile = userAgent.indexOf('CriOS');
var isSamsungBrowser = userAgent.indexOf('SamsungBrowser');
var isWindows = userAgent.indexOf('Windows NT');
var isEdge = userAgent.indexOf('Edge');
var isIE = userAgent.indexOf('Trident');

// 크롬 브라우저 체크
if(isChrome > -1 || isChromeMobile > -1){
	if(isSamsungBrowser < 0 && isEdge < 0){
        $("#nav .footer").css("padding-bottom","100px");
	}
}

// ios check
function checkMobile(){
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
 
    if ( varUA.indexOf('android') > -1) {
        //안드로이드
        return "android";
    } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
        //IOS
        $("#nav .footer").css("padding-bottom","100px");
        return "ios";
    } else {
        //아이폰, 안드로이드 외
        return "other";
    }
}

// main script_list 화자변경
function mainSpeakerModal() {
    if($(window).width() < 1080) {
        document.querySelectorAll('#script_list .conversation .cnv_avator').forEach((select_character) => {
            select_character.addEventListener('click', function () {
                document.querySelectorAll('.active').forEach((active_list) => {
                    active_list.classList.remove('active');
                });
                document.querySelectorAll('.modal').forEach((open_modals) => {
                    open_modals.style.display = 'none';
                });
                document.querySelector('#character_list ul li a').classList.add('active');
                document.getElementById('speaker_change').style.display = 'block';
            });
        });
    } else {
        document.querySelectorAll('#script_list .conversation button').forEach((select_character) => {
            select_character.addEventListener('click', function () {
                document.querySelectorAll('.active').forEach((active_list) => {
                    active_list.classList.remove('active');
                });
                document.querySelectorAll('.modal').forEach((open_modals) => {
                    open_modals.style.display = 'none';
                });
                document.querySelector('#character_list ul li a').classList.add('active');
                document.getElementById('speaker_change').style.display = 'block';
            });
        });
    }
}

// main character_list 캐릭터변경
function mainChangeCharacterModal() {
    if($(window).width() < 1080) { 
        var touchtime = 0;
        $(".charL_list").on("click", function() {
            if (touchtime == 0) {
                // set first click
                touchtime = new Date().getTime();
            } else {
                // compare first click to this click and see if they occurred within double click threshold
                if (((new Date().getTime()) - touchtime) < 800) {
                    // double click occurred
                    document.querySelectorAll('.active').forEach((active_list) => {
                        active_list.classList.remove('active');
                    });
                    document.querySelectorAll('.modal').forEach((open_modals) => {
                        open_modals.style.display = 'none';
                    });
                    document.querySelector('#character_list ul li a').classList.add('active');
                    document.getElementById('character_change').style.display = 'block';
                    touchtime = 0;
                } else {
                    // not a double click so set as a new first click
                    touchtime = new Date().getTime();
                }
            }
        });
    } else {
        document.querySelectorAll('#character_list ul li a').forEach((select_character) => {
            select_character.addEventListener('click', function () {
                document.querySelectorAll('.active').forEach((active_list) => {
                    active_list.classList.remove('active');
                });
                document.querySelectorAll('.modal').forEach((open_modals) => {
                    open_modals.style.display = 'none';
                });
                document.querySelector('#character_list ul li a').classList.add('active');
                document.getElementById('character_change').style.display = 'block';
            });
        });
    }
}

function mainCharacterAllListModal() {
    if( window.innerWidth < 1080) {
        document.querySelectorAll('.char_all_btn').forEach((select_character) => {
            select_character.addEventListener('click', function () {
                document.querySelectorAll('.active').forEach((active_list) => {
                    active_list.classList.remove('active');
                });
                document.querySelectorAll('.modal').forEach((open_modals) => {
                    open_modals.style.display = 'none';
                });
                document.querySelector('.char_all_btn').classList.add('active');
                document.getElementById('all_character').style.display = 'block';
            });
        }); 
    }
}

function myInfoListUl() {
    $(".my_info_ul .list").bind("mouseover click", function(e){
        if(  window.innerWidth >= "1080" && e.type == "mouseover"){
            $(".my_info_list_ul").attr("style","");
        }else if(  window.innerWidth < "1080" && e.type == "click"){
            $(".my_info_list_ul").slideToggle(300);
        }
    });
}

function faq_fn(){
    if( $(".faq_list").hasClass("toggle") ){
        $(".faq_list > li > a").click(function(){
            if($(this).next(".faq_con").css("display") == "block"){
                $(this).parent("li").removeClass("on");
                $(this).next(".faq_con").slideUp();
            }else{
                $(this).parent().parent().find("> li").removeClass("on");
                $(this).parent("li").addClass("on");
                $(this).parent().parent().find("> li > .faq_con").slideUp();
                $(this).next(".faq_con").slideDown();
            }
        });
    } else {
        $(".faq_list > li > a").click(function(){
            if($(this).next(".faq_con").css("display") == "block"){
                $(this).parent("li").removeClass("on");
                $(this).next(".faq_con").slideUp();
            }else{
                if ($(".faq_list").hasClass("pop")) {
                    $('.faq_list > li').removeClass('on');
                    $(".faq_con").slideUp();
                }
                $(this).parent("li").addClass("on");
                $(this).next(".faq_con").slideDown();
            }
        });
    }
};

/* prev&next btn Class add/remove */
function tipsBtn() {
    if($(".cnt-active").is(":visible") ) {
        $('.next_btn').addClass("on");
        $('.prev_btn').addClass("on");
    }
    if( $('.cnt-first').is(':visible') ) {
        $('.prev_btn').removeClass("on");
        $('.next_btn').addClass("on");
    } 
    if( $('.cnt-last').is(':visible') ) {
        $('.next_btn').removeClass("on");
        $('.prev_btn').addClass("on");
    } 
}

/* tab btn & related prev&next btn */
function tipsBtnv2(){
    $(".tab_cnts_area").hide();
    var tabCnt = $(".tab_cnt");
    var tabCntsArea = tabCnt.find(".tab_cnts_area");
    var tabCntsAreaFirst = tabCnt.find(".tab_cnts_area:first");
    var tabCntsAreaLast = tabCnt.find(".tab_cnts_area:last");
    tabCntsAreaFirst.addClass('cnt-active cnt-first').show();
    tabCntsAreaLast.addClass('cnt-last');
    tabCntsAreaFirst.addClass('cnt-first');

    $('.prev_btn').click(function(){
        $('.tab_cnts_area:visible').prev().show().next().hide();
        tabCntsArea.removeClass("cnt-active");
        $('.tab_cnts_area:visible').addClass("cnt-active");
        tipsBtn();
    });
    $('.next_btn').click(function(){
        $('.tab_cnts_area:visible').next().show().prev().hide();
        tabCntsArea.removeClass("cnt-active");
        $('.tab_cnts_area:visible').addClass("cnt-active");
        tipsBtn();
    });
    
    $(".tab_slider_area li").click(function() {
        $(".tab_cnt").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();
            if($(this).attr("rel") == "tab2"){
                $('.tab_btn_area').addClass('slide');
                $('.prev_btn').removeClass("on");
                $('.next_btn').addClass("on");
                $(".tab_cnts_area").css("display","none");
                $(".cnt-active").removeClass("cnt-active");
                $(".cnt-first").css("display","block").addClass("cnt-active");
            }else{
                $('.tab_btn_area').removeClass('slide');
                $('.prev_btn').removeClass("on");
                $('.next_btn').addClass("on");
                $(".tab_cnts_area").css("display","none");
                $(".cnt-active").removeClass("cnt-active");
                $(".cnt-first").css("display","block").addClass("cnt-active");
            }
        $(".tab_slider_area li").removeClass("on");
        $(this).addClass("on");
    })
}


$(document).ready(function(){
    tipsBtn(); 
    tipsBtnv2();
});

$(window).on({
    "load":function(){
        mainSpeakerModal();   // 화자변경
        mainChangeCharacterModal();    // main character_list 캐릭터변경
        mainCharacterAllListModal();     // mobile 전체보기
        mobileNav();   // nav open
        myInfoListUl();    // ".my_info" click & hover 
        checkMobile();    // ios check
        faq_fn();   //faq 아코디언
    }, 
    "resize":function(){ 
        mainSpeakerModal();   // 화자변경
        mainChangeCharacterModal();    // main character_list 캐릭터변경
    },
    "scroll":function(){}
});