var itemImage = ["img/membershipEvent.jpg","img/pointEvent.jpg","img/pointEvent.jpg", "img/membershipEvent.jpg","img/membershipEvent.jpg","img/pointEvent.jpg","img/pointEvent.jpg", "img/membershipEvent.jpg","img/membershipEvent.jpg","img/pointEvent.jpg","img/pointEvent.jpg","img/membershipEvent.jpg"];
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


jQuery(document).ready(function(){ 
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