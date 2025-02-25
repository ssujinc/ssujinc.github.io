function paymentInformationLayerPopup(){
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('.mask').css({'width':maskWidth,'height':maskHeight});
    $('.mask').fadeIn('500');
    var left = ( $(window).scrollLeft() + ( $(window).width() - $('.odl_payment_info_layer').width()) / 2 );
    var top = ( $(window).scrollTop() + ( $(window).height() - $('.odl_payment_info_layer').height()) / 2 );
    $('.odl_payment_info_layer').css({'left':left,'top':top, 'position':'absolute'});
    $('.odl_payment_info_layer').show();
}   


jQuery(document).ready(function(){
    jQuery('.payment_info_btn').click(function(e){
        e.preventDefault();
        paymentInformationLayerPopup();       
    });
    
    jQuery('.layer_close_btn').click(function (e) {
        e.preventDefault();
        jQuery('.mask, .odl_payment_info_layer').hide();
    });
    jQuery('.mask').click(function () {
        $(this).hide();
        jQuery('.odl_payment_info_layer').hide();
    });
    
});
