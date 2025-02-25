$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 0
	});

    var swiper = new Swiper('.swiper-container_btn', {
		slidesPerView: 'auto',
		spaceBetween: 0,
//		slidesPerGroup: 3,
		loopedSlides:3,
//		loopAdditionalSlides: 'auto',
		slidesPerView: 'auto',
		centerSliders : true,
		loop: true,
		loopFillGroupWithBlank: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});
});
