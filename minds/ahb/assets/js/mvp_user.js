
$(document).ready(function() {
    /*
    ** logout 버튼 클릭
    */
    $('.btn_logout').on('click', function () {
        $('#api_logout').fadeIn();
    });



    /*
    ** logout 취소
    */
    $('#Button_LogoutCancel').on('click', function () {
        $('#api_logout').fadeOut();
    });



    /*
    ** 로그아웃 실행
    */
    $('#Button_LogoutOk').on('click', function () {
        $('#api_logout').fadeOut();
        $('.etcmenu').hide();
        window.location.href = "/security/logout";
    });


});


