jQuery(document).ready(function(){
    
    jQuery(".faq_box").css('display','none');
    jQuery(".faqV_inner_content ul").on("click", function(){
      if(jQuery(this).siblings(".faq_box").css('display')=='none'){
			jQuery(".faq_box").slideUp('slow');
			jQuery(this).siblings(".faq_box").slideDown('slow');
		};
    });
    
});
