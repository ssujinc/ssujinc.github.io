jQuery(document).ready(function(){     
    
    jQuery(".find_id_next_btn").on("click",function(){
        jQuery(this).parents(".find_id").hide();
        jQuery(".find_id_complete_box").show();
    });
    
    jQuery(".find_pw_next_btn").on("click",function(){
        jQuery(this).parents(".first_pw").hide();
        jQuery(".find_re_pw_box").show();
    });
    
    jQuery(".find_re_pw_complete_btn").on("click",function(){
        jQuery(this).parents(".find_re_pw_box").hide();
        jQuery(".find_pw_complete_box").show();
    });
});