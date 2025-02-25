//[if lt IE 9]>
    document.createElement("header" );
    document.createElement("footer" );
    document.createElement("section"); 
    document.createElement("aside"  );
    document.createElement("nav"    );
    document.createElement("article"); 
    document.createElement("hgroup" ); 
    document.createElement("time"   );
//  <noscript>
//     <strong>주의 !</strong>
//     귀하가 사용하고 계신 브라우저는 HTML5를 지원하고 있지 않아서, 할 수 없이 JScript를 써서 몇몇 요소가 제대로 보이도록 구현했습니다.
//     그런데 안타깝게도 귀하의 브라우저에선 스크리트 기능이 꺼져있습니다. 이 페이지가 제대로 표시되려면 스크립트 기능을 켜주셔야만 합니다.
//   </noscript>
//![endif]

function tabover(name, no) {
    var tabs = $('.tab_'+name+'').find('li');
    tabs.each(function(idx) {
        var detail = $('.tabcnt_'+name+idx);
        var link = $(this);
        if(no == idx) {
            detail.show();
            link.addClass('tab_on');
        } else {
            detail.hide();
            link.removeClass('tab_on');
        }
    })
}

jQuery(document).ready(function(){ 
    tabover('newbook',0);
    tabover('bestseller',0);
    tabover('event',0);
    tabover('eventV',0);
    tabover('cash',0);
    tabover('find',0);


    jQuery("div.select_box > span").click(function() {
        jQuery(this).next("ul").toggle();
        return false;
    });
    jQuery("div.select_box > ul > li").click(function() {   
        jQuery(this).parent().hide().parent("div.select_box").children("span").text(jQuery(this).text());
        jQuery(this).prependTo($(this).parent());
    });

    jQuery("div.familysite > span").click(function() {
        jQuery(this).next("ul").toggle();
        return false;
    });
    jQuery("div.familysite > ul > li").click(function() {               
        jQuery(this).parent().hide();   
    });        
    jQuery('.allcategory').on('click',function(){
        jQuery(this).toggleClass('category_on');
        jQuery(this).siblings('.allcategory_depth1').toggle();
        jQuery('.allcategory_box').mouseleave(function(){
            jQuery('.allcategory').removeClass('category_on');
            jQuery('.allcategory_depth1,.allcategory_depth2').hide();
            jQuery('.depth1_menu').removeClass('depth1_on');
        });
    });        
    jQuery('.depth1_menu').on("mouseenter", function(){
        jQuery('.depth1_menu').removeClass('depth1_on');
        jQuery('.allcategory_depth2').hide();
        jQuery(this).addClass('depth1_on');
        jQuery(this).siblings('.allcategory_depth2').show();
    });
    jQuery('.top_btn').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        },600);
        return false;
    }); 
    jQuery(".path_location").on("mouseenter", function(){
        jQuery(".path_location_box").hide();
        jQuery(this).siblings(".path_location_box").show();
        jQuery(".path_box").on("mouseleave", function(){
            jQuery(".path_location_box").hide();
        });
    });
});