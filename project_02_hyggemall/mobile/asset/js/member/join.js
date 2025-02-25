function termLayerPopup(){
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('.mask').css({'width':maskWidth,'height':maskHeight});
    $('.mask').fadeIn('500');
    var left = ( $(window).scrollLeft() + ( $(window).width() - $('.terms_layer').width()) / 2 );
    var top = 219;
    $('.terms_layer').css({'left':left,'top':top, 'position':'absolute'});
    $('.terms_layer').show();
}   

function privacyLayerPopup(){
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('.mask').css({'width':maskWidth,'height':maskHeight});
    $('.mask').fadeIn('500');
    var left = ( $(window).scrollLeft() + ( $(window).width() - $('.privacy_layer').width()) / 2 );
    var top = 219;
    $('.privacy_layer').css({'left':left,'top':top, 'position':'absolute'});
    $('.privacy_layer').show();
}   
 
jQuery(document).ready(function(){
    
    jQuery('.terms').click(function(e){
        e.preventDefault();
        termLayerPopup();       
    });
    jQuery('.privacy').click(function(e){
        e.preventDefault();
        privacyLayerPopup();       
    });

    jQuery('.layer_close_btn').click(function (e) {
        e.preventDefault();
        jQuery('.mask, .terms_layer, .privacy_layer').hide();
    });
    jQuery('.mask').click(function () {
        $(this).hide();
        jQuery('.terms_layer, .privacy_layer').hide();
    });
    
});