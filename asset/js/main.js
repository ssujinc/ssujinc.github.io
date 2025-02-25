function checkPosition() {
    var w_h = $(window).height();
    var ww = $(window).width();
    var w_70 = w_h - 70;
    var wi = $(".mv_list > img").width()/2;
    var he = $(".mv_list > img").height()/2;
    if($(window).width() <= 1024 ){
        $(".full_section").css("height","auto");
        $(".mv_wrap").css("height","44rem");
        $(".footer").css("height","auto");
        $(".s1_slider").css("height","auto");
        $(".s1_wrap").css("width","auto");
        $(".s1_list").css({"width":"auto","height":"auto"});
    } else {
        $(".full_section").css("height",w_h);
        $(".mv_wrap").css({"width":ww,"height":"100%"});
        $(".footer").css("height","auto");
        $(".s1_slider").css("height",w_h);
        $(".s1_wrap").css("width",ww);
        $(".s1_list").css({"width":ww,"height":w_h});
    }
}

function mainVisualSlider(){
    $mainslider = $('.mv_slider');
    $mainslider.on('init', function(event, slick){
        $(".mv_desc").append("<div class='mv_slider_arrow'><p class='mv_prev'></p><p class='paingInfo'></p><p class='mv_next'></p>");
        $(".paingInfo").append('<span class="current">1</span> / <span>'+slick.slideCount+'</span>');
    }).slick({
        draggable: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed:6000,
        arrows: false,
        pauseOnHover:false,
        mobileFirst: true,
        dots:false,
        fade: true,
    });

    $(".main_visual .mv_prev").on("click", function(){
        $mainslider.slick("slickPrev");
    })
    $(".main_visual .mv_next").on("click", function(){
        $mainslider.slick("slickNext");
    })

    $mainslider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.current').text(nextSlide + 1);
    });
    $mainslider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        // $('.pagingInfo .current').html(currentSlide+1);
    }); 
}

function rndHover(){
    $(".rnd_area .rnd_list").each(function(){
        var thisImg = $(this).find("img");
        $(this).find("a").hover( function(){
            thisImg.attr("src", thisImg.attr("src").replace("_w.png","_b.png"));
        },function(){
            thisImg.attr("src", thisImg.attr("src").replace("_b.png", "_w.png"));
        });
        // if($(window).width() <= 750 ){
        //     $(this).find("a").hover( function(){},function(){});
        // } else {
        // }
    });
}

function managementSlider(){            
    $mngslider = $('.mng_slider');
    
    $mngslider.slick({
        unslick:true,
        responsive: [{
            breakpoint: 9999,
            settings: "unslick"
        },{
            breakpoint: 1200,
            settings: {
                centerPadding: '0',
                infinite: true,
                draggable: true,
                autoplay: true,
                speed: 1000,
                autoplaySpeed:6000,
                pauseOnHover:false,
                arrows: false,
                mobileFirst: true,
                slidesToShow:3,
                slidesToScroll:1,
                dots:false,
            }
        },{
            breakpoint: 980,
            settings: {
                centerPadding: '0',
                infinite: true,
                draggable: true,
                autoplay: true,
                speed: 1000,
                autoplaySpeed:6000,
                pauseOnHover:false,
                arrows: false,
                slidesToShow:2,
                slidesToScroll:2,
                dots:true,
            }
        }] 
    });
    
    $('.mng_prev').click(function(){
        $mngslider.slick('slickPrev');
    })

    $('.mng_next').click(function(){
        $mngslider.slick('slickNext');
    })
}

function rndSlider(){            
    $rndslider = $('.rnd_area');
    
    $rndslider.slick({
        dots:true,
        centerPadding: '0',
        infinite: true,
        draggable: true,
        autoplay: false,
        // autoplaySpeed:6000,
        speed: 1000,
        arrows:true,
        pauseOnHover:false,
        mobileFirst: true,
        // variableWidth: true,
        slidesPerRow:2,
        rows:3,
        slidesToShow:1,
        slidesToScroll:1,
        responsive: [{
            breakpoint: 9999,
            settings: {
                slidesPerRow:2,
                rows:3,
                slidesToShow:1,
                slidesToScroll:1,
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesPerRow:4,
                rows:2,
                slidesToShow:1,
                slidesToScroll:1,
            }
        }] 
    });

    /* if( $(window).width() < 750 ){
        var wWidth =$(window).width();
        $(".rnd_area .slick-slide").css({"width":"calc("+wWidth+"- 5%)"})
    } */
}


$(document).ready(function(){
    checkPosition();
    managementSlider();
    rndSlider();
    $(document).load($(window).bind("resize", checkPosition));
    // $(document).load($(window).bind("resize", managementSlider));
    $(window).on('resize orientationchange', function() {
        $('.mng_slider').slick('resize');
    });
    mainVisualSlider();
    rndHover();
    

    var link = $('.nav a');
    link.on('click',function(e){
        
        //href 속성을 통해, section id 타겟을 잡음
        var target = $($(this).attr('data-parent')); 
        
        //target section의 좌표를 통해 꼭대기로 이동
        $('html, body').animate({
            scrollTop: target.offset().top
        },600);
        
        //active 클래스 부여
        $(this).addClass('active');

        //앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
        e.preventDefault();
    });
    
    $(window).on('scroll',function(){
        findPosition();
    });

    function findPosition(){
        $(".full_section").each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 20){
                link.removeClass('active');
                $('.nav').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('active');
            }
        });
    }

    findPosition();
    
});