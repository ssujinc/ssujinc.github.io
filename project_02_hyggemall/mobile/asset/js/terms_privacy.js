/*
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var jbOffset = $( '.terms_inner_content' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > '114' ) {
			$( '.terms_tab' ).addClass( 'tab_fixed' );
		}
		else {
			$( '.terms_tab' ).removeClass( 'tab_fixed' );
		}
	});

*/

function onScroll(){ 
    if ( $( document ).scrollTop() > '110' ) {
		$( '.terms_tab' ).addClass( 'tab_fixed' );
		$( '.terms_inner_content' ).addClass( 'tab_fixed' );
		$( '.privacy_tab' ).addClass( 'tab_fixed' );
		$( '.privacy_inner_content' ).addClass( 'tab_fixed' );
	}
	else {
		$( '.terms_tab' ).removeClass( 'tab_fixed' );
		$( '.terms_inner_content' ).removeClass( 'tab_fixed' );
		$( '.privacy_tab' ).removeClass( 'tab_fixed' );
		$( '.privacy_inner_content' ).removeClass( 'tab_fixed' );
	}
}


jQuery(document).ready(function(){     

	$(document.body).on('touchmove', onScroll); // for mobile
	$(window).on('scroll', onScroll);

});