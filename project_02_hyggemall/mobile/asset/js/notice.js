jQuery(document).ready(function(){
    jQuery(".notice_box").css('display','none');
    jQuery("ul").on("click", function(){
      if(jQuery(this).siblings(".notice_box").css('display')=='none'){
			jQuery(".notice_box").slideUp('slow');
			jQuery(this).siblings(".notice_box").slideDown('slow');
		};
    });
});
