function bookmark() {
    var bookmarkURL = window.location.href; 
    var bookmarkTitle = document.title;
    var triggerDefault = false; 

    if (window.sidebar && window.sidebar.addPanel) { 
        // Firefox version < 23 
        window.sidebar.addPanel(bookmarkTitle, bookmarkURL, ''); 

    } else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) { 
        // Firefox version >= 23 and Opera Hotlist 
        var $this = $(this); 
        $this.attr('href', bookmarkURL); 
        $this.attr('title', bookmarkTitle); 
        $this.attr('rel', 'sidebar'); 
        $this.off(e); 
        triggerDefault = true; 

    } else if (window.external && ('AddFavorite' in window.external)) { 
        // IE Favorite 
        window.external.AddFavorite(bookmarkURL, bookmarkTitle); 
    } else { 
        // WebKit - Safari/Chrome 
        alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.'); 
    } 
    return triggerDefault; 
}

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

$(document).ready(function(){ 
    $('.gnb>li>a').on('mouseover focusin', function(){
       jQuery(this).parents('li').addClass('on').siblings('li').removeClass('on'); 
    }); 
    
    jQuery("div.select_box > span").click(function() {
        jQuery(this).next("ul").toggle();
        return false;
    });
    jQuery("div.select_box > ul > li").click(function() {   
        jQuery(this).parent().hide().parent("div.select_box").children("span").text($(this).text());
        jQuery(this).prependTo($(this).parent());
    });


    tabover('login',0);
});