function cashReceiptLayerPopup(){
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('.mask').css({'width':maskWidth,'height':maskHeight});
    $('.mask').fadeIn('500');
    var left = ( $(window).scrollLeft() + ( $(window).width() - $('.cash_receipt_layer').width()) / 2 );
    var top = ( $(window).scrollTop() + ( $(window).height() - $('.cash_receipt_layer').height()) / 2 );
    $('.cash_receipt_layer').css({'left':left,'top':top, 'position':'absolute'});
    $('.cash_receipt_layer').show();
}   

// join 이용약관
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
// join 개인정보수집안내
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
 
// memberInfo 비밀번호변경
function passwordChangeLayerPopup(){
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('.mask').css({'width':maskWidth,'height':maskHeight});
    $('.mask').fadeIn('500');
    var left = ( $(window).scrollLeft() + ( $(window).width() - $('.memberInfo_password_change_layer').width()) / 2 );
    var top = ( $(window).scrollTop() + ( $(window).height() - $('.memberInfo_password_change_layer').height()) / 2 );
    $('.memberInfo_password_change_layer').css({'left':left,'top':top, 'position':'absolute'});
    $('.memberInfo_password_change_layer').show();
}   
// memberInfo 회원탈퇴신청
function leaveHyggeLayerPopup(){
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('.mask').css({'width':maskWidth,'height':maskHeight});
    $('.mask').fadeIn('500');
    var left = ( $(window).scrollLeft() + ( $(window).width() - $('.memberInfo_leave_hygge_layer').width()) / 2 );
    var top = ( $(window).scrollTop() + ( $(window).height() - $('.memberInfo_leave_hygge_layer').height()) / 2 );
    $('.memberInfo_leave_hygge_layer').css({'left':left,'top':top, 'position':'absolute'});
    $('.memberInfo_leave_hygge_layer').show();
}   

// order_list 결제정보보기
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


$(function(){
    // cash 영수증
    jQuery('.receipt_btn').click(function(e){
        e.preventDefault();
        cashReceiptLayerPopup();       
    });
    
    // join 이용안내
    jQuery('.terms').click(function(e){
        e.preventDefault();
        termLayerPopup();       
    });
    // join 개인정보수집안내
    jQuery('.privacy').click(function(e){
        e.preventDefault();
        privacyLayerPopup();       
    });

    // memberInfo 비밀번호변경
    jQuery('.password_change_btn').click(function(e){
        e.preventDefault();
        passwordChangeLayerPopup();       
    });
    
    // memberInfo 회원탈퇴신청
    jQuery('.leave_hygge_btn').click(function(e){
        e.preventDefault();
        leaveHyggeLayerPopup();       
    });

    // order_list 결제정보보기
    jQuery('.payment_info_btn').click(function(e){
        e.preventDefault();
        paymentInformationLayerPopup();       
    });
    
    jQuery('.layer_close_btn').click(function (e) {
        e.preventDefault();
        jQuery('.mask, .cash_receipt_layer').hide();
        jQuery('.mask, .terms_layer, .privacy_layer').hide();
        jQuery('.mask, .memberInfo_password_change_layer, .memberInfo_leave_hygge_layer').hide();
        jQuery('.mask, .odl_payment_info_layer').hide();
    });
    jQuery('.mask').click(function () {
        $(this).hide();
        jQuery('.cash_receipt_layer').hide();
        jQuery('.terms_layer, .privacy_layer').hide();
        jQuery('.memberInfo_password_change_layer, .memberInfo_leave_hygge_layer').hide();
        jQuery('.odl_payment_info_layer').hide();
    });
    
})