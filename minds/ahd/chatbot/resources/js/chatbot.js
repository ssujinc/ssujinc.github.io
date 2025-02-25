/* MINDsLab. UX/UI Team CSJ 2021.04.15 */

function hasScrolled() {
    var wS = scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
        divStn = document.getElementsByClassName("mAB_accP"),
        viewportHeight = document.documentElement.clientHeight,
        scrollH = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var iframefloating = document.getElementById("iframe_chatbotAvatar").contentWindow.document.getElementById("btn_chatbotAvatar"),
        iframefloating = iframefloating.getElementsByTagName("em")[0];

    for(var i = 0; i < divStn.length; i++){
        var elm = divStn[i],
            elmParents = elm.parentNode,
            pos        = elmParents.getBoundingClientRect(),
            topPerc    = pos.top / viewportHeight * 100,
            bottomPerc = pos.bottom / viewportHeight * 100,
            middle     = (topPerc + bottomPerc)/2,
            inViewport = middle > 3 && middle < (100-3),
            inViewport2 = middle > 25 && middle < (100-25);

        if(inViewport){
            if ( elm.className.indexOf("mAB_accP_acc") == -1 ){
                elm.classList.add("mAB_accP_acc"); 
            }
            
            if(inViewport2){
                if ( elm.className.indexOf("mAB_accP_access") == -1 ){
                    elm.classList.add("mAB_accP_access"); 
                    var childs = elmParents.querySelectorAll(".btn_mAB_accPOn").length > 0;
                    if(!childs) {
                        var stnName = elm.textContent;
                    } else {
                        var stnName = elmParents.querySelectorAll(".btn_mAB_accPOn")[0].textContent;
                    }
                    if ( iframefloating.textContent != stnName ){
                        iframefloating.textContent = stnName;   
                        console.log(stnName); // Check
                    }
                }
            } else {
                elm.classList.remove("mAB_accP_access");
                var accL = document.querySelectorAll(".mAB_accP_acc").length;
                var accessL = document.querySelectorAll(".mAB_accP_access").length;
                if( (accL == 2 || accL ==1 || accL == 0) && accessL==0 ){
                    if( accL > 1 ){
                        for(var v=0; v<document.querySelectorAll(".mAB_accP_acc").length; v++){
                            var accs = document.querySelectorAll(".mAB_accP_acc");
                            var acc = accs[v];
                            var accTop = acc.offsetTop;
                            accTop = Math.max(accTop);
                            return;
                        }
                        var stnName = acc.textContent;
                    } else {
                        var stnName = elm.textContent;
                    }
                    if ( iframefloating.textContent != stnName ){
                        iframefloating.textContent = stnName;   
                        console.log(stnName); // Check
                    }
                }
            }
        }else {
            elm.classList.remove("mAB_accP_acc", "mAB_accP_access"); 
        }
    }
   
    if (wS === 0) { 
        divStn[1].classList.remove("mAB_accP_acc","mAB_accP_access");
        divStn[0].classList.add("mAB_accP_acc");
        var stnName = divStn[0].textContent;
        iframefloating.textContent = stnName;
    }
            
    if(wS === scrollH) {
        if( divStn[divStn.length - 1].className.indexOf('mAB_accP_access') == -1 ){ 
            var stnName = divStn[divStn.length - 1].textContent;
            iframefloating.textContent = stnName;
        } 
    }
}
    
document.getElementById("iframe_chatbotAvatar").onload = function() {
    var wS = scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
          scrollH = document.documentElement.scrollHeight - document.documentElement.clientHeight,
          divStn = document.getElementsByClassName("mAB_accP");

    var iframefloating = document.getElementById("iframe_chatbotAvatar").contentWindow.document.getElementById("btn_chatbotAvatar"),
          iframefloating = iframefloating.getElementsByTagName("em")[0];

    if (wS === 0) { 
        divStn[0].classList.add("mAB_accP_acc");
        var stnName = divStn[0].textContent;
        iframefloating.textContent = stnName;
    }

    if(wS === scrollH) {
        divStn[divStn.length - 1].classList.add("mAB_accP_acc");  
        var stnName = divStn[divStn.length - 1].textContent; 
    }

    var btnClass = document.getElementsByClassName("btn_mAB_accP");
    for (var i = 0; i < btnClass.length; i++) {
        btnClass[i].addEventListener("click", function() {
            var stnName = this.textContent;
            iframefloating.textContent = stnName; 
        });
    }
}

document.addEventListener("DOMContentLoaded", function(){
    var didScroll;
    var Timer;
   
    document.addEventListener('scroll', function() {
        didScroll = true;
        if ( Timer ) window.clearTimeout(Timer);
        Timer = window.setTimeout(function() {
            if (didScroll) { 
                hasScrolled(); 
                didScroll = false; 
            } 
        }, 350);
        
        /* // 서비스 기한 // [D] 서비스기한 만료에 관하여 연결된 script 이기 때문에 현재는 삭제
        var expires; 
        expires = false; 
        
        if( !expires ){
            didScroll = true;
            clearTimeout(Timer);
            Timer = setTimeout(function()
            {
                if (didScroll) { 
                    hasScrolled(); 
                    didScroll = false; 
                } 
            },300);
        } */
    });
});    

$(function() {
    $(".mAB_accP").each(function() { 
        var div = $(this).parent(); 
        div.find(".btn_mAB_accP").on("click", function(){ 
            div.find(".btn_mAB_accP").removeClass("btn_mAB_accPOn");
            $(this).addClass("btn_mAB_accPOn");
        })
    })
})