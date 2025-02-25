jQuery(document).ready(function(){
    jQuery("#checkall").on("click", function(){
		if(jQuery("#checkall").prop("checked")){
			jQuery("input[name='chk']").prop("checked",true);
			jQuery(".checkboximg").css({"background":"url('asset/img/m_checkBox.png') -12px top no-repeat","background-size":"cover"});
		}else{
			jQuery("input[name='chk']").prop("checked",false);
			jQuery(".checkboximg").css({"background":"url('asset/img/m_checkBox.png') left top no-repeat","background-size":"cover"});
		}
	});
    
	jQuery(".checkbox").on("click",function(){
		var chkimg = jQuery(this).parents("tr").find(".checkboximg");

		if(jQuery(this).prop("checked")){
			jQuery(chkimg).css({"background":"url('asset/img/m_checkBox.png') -12px top no-repeat","background-size":"cover"});
		} else {
			jQuery(chkimg).css({"background":"url('asset/img/m_checkBox.png') left top no-repeat","background-size":"cover"});
		}
	});

	 jQuery(".checkChild").on("click", function(){
		var chkimg = jQuery(this).parents("tr").find(".checkboximg");

		if(jQuery("input[name='chk']").prop("checked")){
			jQuery(chkimg).css({"background":"url('asset/img/m_checkBox.png') -12px top no-repeat","background-size":"cover"});
		} else {
			jQuery(chkimg).css({"background":"url('asset/img/m_checkBox.png') left top no-repeat","background-size":"cover"});
			jQuery(".checkboximg").css({"background":"url('asset/img/m_checkBox.png') left top no-repeat","background-size":"cover"});
			jQuery("#checkall").prop("checked", false);
		}
   });

    jQuery('.cart_order_plus_btn').on('click', function(){
        var count = jQuery(this).index(this);
        var countNum = jQuery(this).parents("tr").find(".cart_order_count:eq("+count+")").val();
        if(jQuery(this).parents("tr").find(".cart_order_count").val() < 999 ){ 
            countNum = jQuery(this).parents("tr").find(".cart_order_count:eq("+count+")").val(countNum*1+1);
        };
    })
    jQuery('.cart_order_minus_btn').on('click', function(){
        var count = jQuery(this).index(this);
        var countNum = jQuery(this).parents("tr").find(".cart_order_count:eq("+count+")").val();
        if(jQuery(this).parents("tr").find(".cart_order_count").val() > 1 ){ 
            countNum = jQuery(this).parents("tr").find(".cart_order_count:eq("+count+")").val(countNum*1-1);
        };
    })
    
    jQuery(".cart_order_count_btn").on("click",function(){
        var price = jQuery(this).parents("tr").find(".cart_selling_price span").text();
        var finalPrice = 0;
        
        price = price.replace(/[^0-9\.]+/g, "");
        var totalPrice = (price * jQuery(this).parents("tr").find(".cart_order_count").val());
        
        var pattern = /(-?[0-9]+)([0-9]{3})/;
        while(pattern.test(totalPrice)) {
            totalPrice = totalPrice.toString().replace(pattern,"$1,$2");
        }
        jQuery(this).parents("tr").find(".cart_total_price span").text(totalPrice);
        
        for(var a=0; a < jQuery(".cart_total_price").length; a++){
            var price = jQuery(".cart_total_price:eq("+a+") span").text().replace(/[^0-9\.]+/g, "");
            finalPrice += parseInt(price);
        }
        while(pattern.test(finalPrice)) {
            finalPrice = finalPrice.toString().replace(pattern,"$1,$2");
        }
        jQuery(".cart_total_payment span").text(finalPrice);
    });
    
    jQuery(".cart_order_count").on("keyup", function(){
        var regNum = /[^0-9\.]+/g;
        var count = jQuery(this).val();
        var finalPrice = 0;
                
        count = count.replace(/[^0-9]/g, '');
        count = count.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if(count.length < 3){
            jQuery(this).val(count);
        }
        
        if(count == '0'){
            jQuery(this).val(1);
            count = 1;
        }
        
        var price = jQuery(this).parents("tr").find(".cart_selling_price span").text();
         price = price.replace(/[^0-9\.]+/g, "");
        var totalPrice = (parseInt(price * count));
        var pattern = /(-?[0-9]+)([0-9]{3})/;
        while(pattern.test(totalPrice)) {
            totalPrice = totalPrice.toString().replace(pattern,"$1,$2");
        }
        jQuery(this).parents("tr").find(".cart_total_price span").text(totalPrice);
        
        for(var a=0; a < jQuery(".cart_total_price").length; a++){
            var price = jQuery(".cart_total_price:eq("+a+") span").text().replace(/[^0-9\.]+/g, "");
            finalPrice += parseInt(price);
        }
        while(pattern.test(finalPrice)) {
            finalPrice = finalPrice.toString().replace(pattern,"$1,$2");
        }
        jQuery(".cart_total_payment span").text(finalPrice);
    });
    
});