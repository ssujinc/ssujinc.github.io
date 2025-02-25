var itemImage = ["asset/img/membershipEvent.jpg","asset/img/pointEvent.jpg","asset/img/pointEvent.jpg", "asset/img/membershipEvent.jpg","asset/img/membershipEvent.jpg","asset/img/pointEvent.jpg","asset/img/pointEvent.jpg", "asset/img/membershipEvent.jpg","asset/img/membershipEvent.jpg","asset/img/pointEvent.jpg","asset/img/pointEvent.jpg","asset/img/membershipEvent.jpg"];
var itemNum = 1;
var itemSum = 1;
function changeItem(){
        jQuery(".event_img1").prop("src", itemImage[itemSum-1]);
        jQuery(".event_img2").prop("src", itemImage[itemSum]);
        jQuery(".event_page_num").html(itemNum);   
}
function nextItem(){
    itemNum = itemNum+1;//1....6
    itemSum = itemSum+2;
    if(itemNum>itemImage.length / 2){
        itemNum = 1;
        itemSum = 1;
    }
    changeItem();
}
function prevItem(){
    itemNum = itemNum-1;//5....0
    itemSum = itemSum+2;
    if(itemNum==0){
        itemNum = itemImage.length / 2;
        itemSum = itemImage.length / 2;
    }
    changeItem();
}
function init(){
    jQuery(".event_total_num").html(itemImage.length/2);
}
window.onload = init; 
    
function prev(){
    if(jQuery(".best_weekly").is(":animated") == false){
        jQuery(".best_weekly").prepend(jQuery(".best_weekly li:last"));
        jQuery(".best_weekly").css("left","-178px");
        jQuery(".section04_best .best_weekly").animate(
            {
                left:"0px"
            },
            500
        );
    }
}
function next(){
    if(jQuery(".best_weekly").is(":animated") == false){
        jQuery(".section04_best .best_weekly").animate(
            {
                left:"-178px"
            },
            500,
            function(){
                jQuery(".best_weekly").append(jQuery(".best_weekly li:first"));
                jQuery(".best_weekly").css("left","0px");
            }
        );
    }
}  
    
function prev2(){
    if(jQuery(".best_monthly").is(":animated") == false){
        jQuery(".best_monthly").prepend(jQuery(".best_monthly li:last"));
        jQuery(".best_monthly").css("left","-178px");
        jQuery(".section04_best .best_monthly").animate(
            {
                left:"0px"
            },
            500
        );
    }
}
function next2(){
    if(jQuery(".best_monthly").is(":animated") == false){
        jQuery(".section04_best .best_monthly").animate(
            {
                left:"-178px"
            },
            500,
            function(){
                jQuery(".best_monthly").append(jQuery(".best_monthly li:first"));
                jQuery(".best_monthly").css("left","0px");
            }
        );
    }
}  

// search page
function search(){
    jQuery(document).ready(function(){     
        jQuery(".again_search_btn_box").on("click", function(){
            jQuery(".again_search_box2").slideToggle(50, function(){
                if(jQuery(".again_search_box2").is(":visible")){
                    jQuery(".again_search_btn").hide();
                    jQuery(".again_search_btn2").show();
                } else {
                    jQuery(".again_search_btn").show();
                    jQuery(".again_search_btn2").hide();
                }
            });
            jQuery(".again_search_window_btn").text(jQuery(".again_search_window_btn").text() =='상세조건 닫기'?'상세조건 열기':'상세조건 닫기').css(jQuery(".again_search_window_btn").text() =='상세조건 닫기'?{"background":"url('img/again_search_btn.png') right top no-repeat"}:{"background":"url('img/again_search_btn.png') right -12px no-repeat"});
            jQuery()
        });
    });
}

// faq toggle
function faqToggle(){
    jQuery(".faq_box").css('display','none');
    jQuery(".faq_inner_section ul").on("click", function(){
      if(jQuery(this).siblings(".faq_box").css('display')=='none'){
			jQuery(".faq_box").slideUp('slow');
			jQuery(this).siblings(".faq_box").slideDown('slow');
		};
    });
}

// notice toggle
function noticeToggle(){
    jQuery(".notice_box").css('display','none');
    jQuery(".notice_inner_section ul").on("click", function(){
      if(jQuery(this).siblings(".notice_box").css('display')=='none'){
			jQuery(".notice_box").slideUp('slow');
			jQuery(this).siblings(".notice_box").slideDown('slow');
		};
    });
}

// order
function order(){
    jQuery(".order_cash_question").on("click",function(){
        jQuery(".cash_tooltip").toggle();
    });
    jQuery(".tooltip_close_btn").on("click",function(){
        jQuery(".cash_tooltip").hide();
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
}

// cart 
function cart(){
    jQuery("#checkall").on('click', function(){
		if(jQuery("#checkall").prop("checked")){
			jQuery('input[name=chk').prop("checked",true);
		}else{
			jQuery('input[name=chk]').prop("checked",false);
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
}

jQuery(document).ready(function(){ 
    // search page
    search();
    // faq toggle
    faqToggle();
    // notice toggle
    noticeToggle();
    // order
    order();
    // cart
    cart();

    jQuery('.issue_btn .btn').on("click", function(){
        jQuery(".issue_btn .btn").removeClass("issue_btn_on");
        jQuery(this).addClass("issue_btn_on");
        
        if(jQuery(this).hasClass("i_w")){
            jQuery(".issue_weekly").show();
            jQuery(".issue_monthly").hide();
        } else {
            jQuery(".issue_weekly").hide();
            jQuery(".issue_monthly").show();
        }
    }); 
    
    jQuery('.section04_btn .btn').on("click", function(){
        jQuery(".section04_btn .btn").removeClass("best_btn_on");
        jQuery(this).addClass("best_btn_on");
        if(jQuery(this).hasClass("b_w")){
            jQuery(".best_weekly").show();
            jQuery(".best_monthly").hide();
        } else {
            jQuery(".best_weekly").hide();
            jQuery(".best_monthly").show();                
        }
    });
    
    jQuery(".section04_prev").on("click", function(){
        if(jQuery(".b_w").hasClass("best_btn_on")) prev();
        else prev2();
    });
    
    jQuery(".section04_next").on("click", function(){
        if(jQuery(".b_w").hasClass("best_btn_on")) next();
        else next2();
    });
    
    jQuery(".down_btn").on("click", function(){
        var index = jQuery(".section06_notice_ul li.rollup").index();
        var last = jQuery(".section06_notice_ul li").last().index();
        
        jQuery(".section06_notice_ul li:eq("+index+")").prop("class", "hidden");
        
        if(index < last) jQuery(".section06_notice_ul li:eq("+(index+1)+")").prop("class", "rollup");
        else jQuery(".section06_notice_ul li:eq(0)").prop("class", "rollup");
    });
    
    jQuery(".up_btn").on("click", function(){
        var index = jQuery(".section06_notice_ul li.rollup").index();
        
        jQuery(".section06_notice_ul li:eq("+index+")").prop("class", "hidden");
        jQuery(".section06_notice_ul li:eq("+(index-1)+")").prop("class", "rollup");
    });
}); 