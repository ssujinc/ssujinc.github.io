function openMenu(evt, menuName) {
	var i, tabcontent, menu_tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	menu_tablinks = document.getElementsByClassName("menu_tablinks");
	for (i = 0; i < menu_tablinks.length; i++) {
		menu_tablinks[i].className = menu_tablinks[i].className.replace(" active", "");
	}
	
//	document.getElementById("All").style.display = "none";
//	document.getElementById("Vegetarian").style.display = "block";
	document.getElementById(menuName).style.display = "block";
	
	if(menuName == 'Vegetarian'){
		jQuery('.filtr-container2').filterizr();
		jQuery(".simplefilter2").find(".btnOn2").removeClass("btnOn2");
		jQuery(".btn1").addClass("btnOn2");
	} else {
		jQuery('.filtr-container').filterizr();
		jQuery(".simplefilter").find(".btnOn").removeClass("btnOn");
		jQuery(".btnAll").addClass("btnOn");
	}
	evt.currentTarget.className += " active";
}

jQuery(function(){
//	jQuery('.br_cont_materials li').hover(function(){
//			jQuery(this).find('.dimmed').css('display','block');
//		},function(){
//			jQuery(this).find('.dimmed').css('display','none');
//	});

	jQuery("#top").hide();            
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			jQuery('#top').fadeIn();
		} else {
			jQuery('#top').fadeOut();
		}
	});				
	jQuery('#top').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		},600);
		return false;
	}); 

	jQuery('.menu_tab .menu_tablinks').click(function(){
		jQuery('body,html').scrollTop(0);
		return false;
	})
});