
jQuery(document).ready(function(){     
    jQuery(".cash_table").on("click", function(){  
        jQuery(this).parents(".cash_table_box").find(".cash_table").removeClass("table_tr_on").addClass("table_tr");
        jQuery(this).removeClass("table_tr").addClass("table_tr_on");
    });
    
    
   jQuery(".pay_method_btn").on("click", function(){
		jQuery(".pay_method_btn").removeClass("pay_method_on");
		jQuery(this).addClass("pay_method_on");

		if(jQuery(this).val() == 'credit_card'){
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
		
});