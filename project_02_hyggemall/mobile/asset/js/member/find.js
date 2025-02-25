function findMember(evt, membership) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("find_tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("find_tab_btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" find_active", "");
    }
    document.getElementById(membership).style.display = "block";
    evt.currentTarget.className += " find_active";
}

jQuery(document).ready(function(){     
    document.getElementById("find_defaultOpen").click();
    
    jQuery(".find_id_next_btn").on("click",function(){
        jQuery(this).parent(".find_id").hide();
        jQuery(".find_id_complete_box").show();
    });
    
    jQuery(".find_pw_next_btn").on("click",function(){
        jQuery(this).parent(".first_pw").hide();
        jQuery(".find_re_pw_box").show();
    });
    
    jQuery(".find_re_pw_complete_btn").on("click",function(){
        jQuery(this).parent(".find_re_pw_box").hide();
        jQuery(".find_pw_complete_box").show();
    });
});