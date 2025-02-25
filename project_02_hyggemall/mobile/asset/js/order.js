jQuery(document).ready(function(){

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

});