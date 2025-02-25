jQuery(window).scroll(function(){
	var gnbOffset = $( '.gnb1' ).offset();
	if ( $( document ).scrollTop() > 120 ) {
		jQuery('.gnb1').css('display','none');
		jQuery('.gnb2').css({'display':'block','top':'0'});
		jQuery('.gnb2').css({'background':'rgba(0,0,0,0)'});
		jQuery('#login').css('display','none');
	}else { 
		jQuery( '.gnb1' ).css('display','block');
		jQuery( '.gnb2' ).css({'display':'none'});
		jQuery('#login').css('display','block');
	};
//			if( jQuery(document).scrollTop() < 100 ){
//				jQuery( '.gnb1' ).fadeIn(500);
//				jQuery( '.gnb2' ).fadeOut(500);				
//			};
	if( jQuery(document).scrollTop()>650) {
		jQuery('#header').css({'background':'rgba(0,0,0,0.2)','height':'90px','position':'fixed'});
	}else{
		jQuery('.gnb2').css({'background':'rgba(0,0,0,0)'});
		jQuery('#header').css({'background':'rgba(0,0,0,0)','position':'absolute'});
		
	}
});