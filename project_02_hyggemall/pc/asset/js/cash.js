
/*function appendYear($selectFirstYear){
 
    var date = new Date();
    var month = date.getFullMonth();
    var idx = 0;
    for(var i=1; i<=month; i++){
        $selectFirstYear.prepend("<option value='"+i+"'>"+i+"월"+"</option>");
        idx++;
    }
    $selectFirstYear.find("option:eq(0)").prop("selected", true); // 현재년도 선택
}*/


jQuery(document).ready(function(){     
//    appendYear(jQuery(".first_select_year"));
   
    jQuery(".cash_table").on("click", function(){  
        jQuery(this).parents(".cs2_left").find(".cash_table").removeClass("table_tr_on").addClass("table_tr");
        jQuery(this).find("input[type='radio']").prop("checked",true);
        jQuery(this).removeClass("table_tr").addClass("table_tr_on");
    });
    
    
    jQuery("input:radio[name='pay_method_radio']").on("change", function(){
		if(jQuery("input:radio[name='pay_method_radio']:checked").val()=='creditCard'){
			jQuery(".pay_creditcard").show();
            jQuery(".pay_cellphone").hide();	
		} else {
			jQuery(".pay_cellphone").show();	
            jQuery(".pay_creditcard").hide();				
		}
	});
    
    jQuery("input:radio[name='charge_usage_radio']").on("change", function(){
		if(jQuery("input:radio[name='charge_usage_radio']:checked").val()=='chargeReserve'){
			jQuery(".cash_charging_table").show();
            jQuery(".cash_using_table").hide();	
		} else {
			jQuery(".cash_using_table").show();	
            jQuery(".cash_charging_table").hide();				
		}
	});
    
    jQuery(window).scroll(function() {
        var cs2Right = jQuery('.cs2_right');
        var desiredHeight = jQuery(window).height();  
        if( jQuery(this).scrollTop() >= 400 ) {
            cs2Right.css({"position":"fixed","top":"48px","padding-left":"676px","right":"","bottom":""});
            if( desiredHeight < 600 && jQuery(this).scrollTop() >= 1000 ){
                cs2Right.css({"position":"absolute","right":"0","bottom":"0","top":""}); 
            };
        } else {
          cs2Right.css({"position":"static","padding":"0"});
        }
    });
    
});