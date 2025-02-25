/*
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
*/

function scrolling(pos) {
    var desiredHeight = $(window).height();    
    desiredHeight = desiredHeight*(0.15) ;
    var offset = jQuery('.detail_section02 article' + pos).offset().top - desiredHeight;
    jQuery('html, body').stop().animate({'scrollTop':offset}, 1500);
}


jQuery(document).ready(function(){     
    jQuery('.detail_order_plus_btn').on('click', function(){
        var count = jQuery(".detail_order_plus_btn").index(this);
        var countNum = jQuery(".detail_order_count:eq("+count+")").val();
        if(jQuery(".detail_order_count").val() < 999 ){ 
            countNum = jQuery(".detail_order_count:eq("+count+")").val(countNum*1+1);
        };
    })
    jQuery('.detail_order_minus_btn').on('click', function(){
        var count = jQuery(".detail_order_minus_btn").index(this);
        var countNum = jQuery(".detail_order_count:eq("+count+")").val();
        if(jQuery(".detail_order_count").val() > 1 ){ 
            countNum = jQuery(".detail_order_count:eq("+count+")").val(countNum*1-1);
        };
    })
    
    jQuery(".detail_order_count_btn").on("click",function(){
        var price = jQuery(".detail_selling_price .detail_sale_price span").text();
        
        price = price.replace(/[^0-9\.]+/g, "");
        var totalPrice = (price * jQuery(".detail_order_count").val());
        var pattern = /(-?[0-9]+)([0-9]{3})/;
        while(pattern.test(totalPrice)) {
            totalPrice = totalPrice.toString().replace(pattern,"$1,$2");
        }
        jQuery(".detail_order_total .detail_sale_price span").text(totalPrice);
    });
    
    jQuery(".detail_order_count").on("keyup", function(){
        var regNum = /[^0-9\.]+/g;
        var count = jQuery(".detail_order_count").val();
                
        count = count.replace(/[^0-9]/g, '');
        count = count.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if(count.length < 3){
            jQuery(".detail_order_count").val(count);
        }
        
        if(count == '0'){
            jQuery(".detail_order_count").val(1);
            count = 1;
        }
        
        var price = jQuery(".detail_selling_price .detail_sale_price span").text();
        price = price.replace(/[^0-9\.]+/g, "");
        var totalPrice = (parseInt(price * count));
        var pattern = /(-?[0-9]+)([0-9]{3})/;
        while(pattern.test(totalPrice)) {
            totalPrice = totalPrice.toString().replace(pattern,"$1,$2");
        }
        jQuery(".detail_order_total .detail_sale_price span").text(totalPrice);
    });
    
    jQuery(".article_more_btn").on("click",function(){
        jQuery(this).parents(".detail_article").find(".article_more").show(600);
        jQuery(this).parents(".detail_article").find(".article_close_btn").css("display","block");
        jQuery(this).parents(".detail_article").find(".article_more_btn").css("display","none");
    });
    jQuery(".article_close_btn").on("click",function(){
        jQuery(this).parents(".detail_article").find(".article_more").hide(600);
        jQuery(this).parents(".detail_article").find(".article_close_btn").css("display","none");
        jQuery(this).parents(".detail_article").find(".article_more_btn").css("display","block");
        var desiredHeight1 = $(window).height();    
        desiredHeight1 = desiredHeight1*(0.15) ;
        var offset1 = jQuery(this).parents(".detail_article").offset().top-desiredHeight1;
        jQuery('html, body').stop().animate({'scrollTop':offset1}, 600);
    });
    
    jQuery("#rating1, #rating2, #rating3, #rating4, #rating5").on("click", function(){
        jQuery(".detail_review_star .star_num span").text(jQuery(this).val());
        if(jQuery(this).val() == 1) jQuery(".star_rating_p").css('color','#a9b0bb').text("별로에요");
        else if(jQuery(this).val() == 2) jQuery(".star_rating_p").css('color','#9579da').text("그저그래요");
        else if(jQuery(this).val() == 3) jQuery(".star_rating_p").css('color','#4a88da').text("보통이에요");
        else if(jQuery(this).val() == 4) jQuery(".star_rating_p").css('color','#d56fac').text("좋아요");
        else jQuery(".star_rating_p").css('color','#d94452').text("최고에요");
    });
    
    var count = 5;
    jQuery(".review_more_btn").on("click",function(){
        var length = jQuery(this).parents(".detail_articel_review").find(".detail_review_list_box p").length;
        var height = jQuery(this).parents(".detail_articel_review").find(".detail_review_list_box").height();
        if((length - count) < 5){
            var mod = length - count;
            if(length > count){
                jQuery(this).parents(".detail_articel_review").find(".detail_review_list_box").animate({"height": height+(36*mod)}).slideDown();

                count += mod;
            }
        } else {
            if(length > count){
                jQuery(this).parents(".detail_articel_review").find(".detail_review_list_box").animate({"height": height+180}).slideDown();

                count += 5;
            }
        }
        if( jQuery(this).text() == "닫기" ){
            jQuery(this).parents(".detail_articel_review").find(".detail_review_list_box").animate({"height": "180px"});
            jQuery(this).text("더보기");
            count = 5;
        }
        if((length - count) == 0){
            jQuery(this).text("닫기");
        }
    });
    var length = jQuery(".detail_articel_review").find(".detail_review_list_box p").length;
    if(length < 6){
        jQuery(".review_more_btn").hide();
    } else {
        jQuery(".review_more_btn").show();
    }
});