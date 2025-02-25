function openAvatarPreview(obj) {

    // find selected model
    let selected = $(obj).parent().children('.select_list').children('.select').find('img').attr('alt').toString().split('.')[0];
    console.log("selected model: " + selected);

    $('#preview_vid').attr('src', "/image/lipsyncAvatar/preview_"+ selected + ".mp4");
    $('#pop_show_avatar').show();

    $('#close_pop_show_avatar').unbind("click").bind('click', function() {
        $('#preview_vid')[0].pause(); // stop video while close popup
        $('#pop_show_avatar').css('display', 'none');
    });

    $('.ico_close').unbind("click").bind('click', function() {
        $('#preview_vid')[0].pause(); // stop video while close popup
        $('#pop_show_avatar').css('display', 'none');
    })

}
