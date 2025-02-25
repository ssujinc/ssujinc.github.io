$(document).ready(function () {
    setPopupCallback_InputText();
    // setPopupCallback_InputAudio();

    $('#api_input').on('input keyup paste change', function () {
        let $inputCompleteBtn = $('#text_input_box .blue_btn');
        if ($(this).val() !== "") {
            disableBtn($inputCompleteBtn, false);
            // $inputCompleteBtn.prop('disabled', false).css({'background':'#2877f9', 'cursor':'pointer'});
        } else {
            disableBtn($inputCompleteBtn, true);
            // $inputCompleteBtn.prop('disabled', true).css({'background':'#c8c8c8', 'cursor':'default'});
        }
    });


    $('#text_input_box .ico_close').on('click', function () {
        $('#text_input_box').fadeOut(300);

        $('body').css({
            'overflow': '',
        });

        $('#api_input').val("");

        if (callback_InputText != null) callback_InputText(null, null);
    });

    //[P] 200703 YMJ 추가
    //Layer popup open

    $('.btn_lyr_open').on('click', function () {
        if (currentProjectIndex == -1 || !workingFlowStatus.flowUpdated) {
            showLyrBoxPopup($(this))
        } else {
            showPopup_SaveFlow(messages.mvp_popup.save_flow, $(this).attr("class").split(' ')[0])
        }

    });

});


/* ===================================================================================================================== */
// 텍스트 입력 팝업
/* ===================================================================================================================== */

var callback_InputText = null;


function showLyrBoxPopup(thisObj){
    $this=thisObj;
    var winHeight = $(window).height() * 0.7,
        hrefId =  $this.attr('href');

    $('body').css('overflow', 'hidden');
    $('body').find(hrefId).wrap('<div class="lyrWrap"></div>');
    $('body').find(hrefId).before('<div class="lyr_bg"></div>');

    //mid max-height
    $('.lyrBox .lyr_mid').each(function () {
        $this.css('max-height', Math.floor(winHeight) + 'px');
    });

    //Layer popup close
    $('.btn_lyr_close, .lyr_bg').on('click', function () {
        $('body').css('overflow', '');
        $('body').find(hrefId).unwrap('<div class="lyrWrap"></div>');
        $('.lyr_bg').remove();
    });
}


function setPopupCallback_InputText() {
    $('#text_input_box .btn button').on('click', function () {

        if ($('#api_input').val().trim() === "") {
            disableBtn($(this), true);
            // $(this).prop('disabled', true).css({'background':'#c8c8c8', 'cursor':'default'});
            $('#api_input').val('').focus();
        } else {
            if (callback_InputText != null) {
                callback_InputText('text', $('#api_input').val());
            }
            $('#api_input').val("");
            $('#text_input_box').fadeOut(200);
        }
    });
}

function showPopup_InputText(title, hint, callback) {
    if (title != null) ;

    if (hint != null) $('#api_input').attr('placeholder', hint);
    else $('#api_input').attr('placeholder', messages.mvp_popup.api_input_placeholder);

    callback_InputText = callback;
    $('#text_input_box').show();
    $('#api_input').change();
}

/* ===================================================================================================================== */
// 메세지 팝업
/* ===================================================================================================================== */

function showPopup_Message(content) {
    $('#Popup_Message').fadeIn();
    $('#Popup_Message_Content').text(content);
    $('#Button_Ok').on('click', function () {
        $('#Popup_Message').fadeOut();
    })
}

function showPopup_SaveFlow(content, source, obj, index) {
    $('#save_flow_req').fadeIn();
    $('#save_flow_req .pop_bd').text(content);

    // 업데이트 Flow 저장시 그전 클릭 이벤트 진행
    $("#save_flow_req .popWrap .btn #btn_save").off('click').one("click", function () {
        $('#saveFlow_btn').trigger('click');

        $('#Button_Ok, #Popup_Message .ico_close').one('click', function () {
            $('#save_flow_req').fadeOut();
            // 프로젝트 목록 선택
            if (source == "selPrj") {
                $('.projectBox .dlBox dd ul.lst li').eq(index).find('a').trigger('click')
                // 프로젝트 등록
            } else if (source == "btn_project_add") {
                $('.btn_project_add').trigger('click');
                // 프로젝트 관리
            } else if (source == "btn_pjt_setup")
                $('.btn_pjt_setup').trigger('click');
        })
        workingFlowStatus.flowUpdated = false;
    })

    $("#save_flow_req .popWrap .btn #btn_cancel").off('click').one("click", function () {
        $('#save_flow_req').fadeOut();
    })
}


/* ===================================================================================================================== */
// 팝업 공통 function
/* ===================================================================================================================== */

function disableBtn($Btn, disable) {
    if (disable) { // disable 시키기
        $Btn.addClass('disable');
        $Btn.attr('disabled', true);
    } else {
        $Btn.removeClass('disable');
        $Btn.attr('disabled', false);
    }
}


