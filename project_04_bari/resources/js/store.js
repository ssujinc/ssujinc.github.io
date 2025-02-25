jQuery(function(){
	jQuery(".gyeonglidan, .hyundai, .gyodae, .tradecenter").on("click", function(){
		StoreFunction.storeDetail(this);		
	});

	jQuery(".storeD_imglist").on("click", "div", function(){
		jQuery(".storeD_imgview img").removeClass("opaque");

		var newImage = $(this).index();

		jQuery(".storeD_imgview img").eq(newImage).addClass("opaque");

		jQuery(".storeD_imglist div").removeClass("selected");
		jQuery(this).addClass("selected");
	});

	var a = 0;
	jQuery(".storeD_prev, .storeD_next").on("click", function(){
		console.log("a = " + a);
		var b = a;
		console.log("b = " + b);
		if(jQuery(this).hasClass("storeD_prev")){
			if(a > 0){
				a--;
			} else {
				a = 3;
			}
		} else if(jQuery(this).hasClass("storeD_next")){
			if(a < 3){
				a++;
			} else {
				a = 0;
			}
		}
		console.log("a2 = " + a);
		jQuery(".storeD_imgview img").eq(a).addClass("opaque");
		jQuery(".storeD_imglist div").eq(a).addClass("selected");
		jQuery(".storeD_imgview img").eq(b).removeClass("opaque");
		jQuery(".storeD_imglist div").eq(b).removeClass("selected");
	});
});

var StoreFunction = {
		storeDetail : function(thisObj){
			if(jQuery(thisObj).hasClass("gyeonglidan")){
				location.href = "/store/1";
			} else if(jQuery(thisObj).hasClass("hyundai")){
				location.href = "/store/2";
			} else if(jQuery(thisObj).hasClass("gyodae")){
				location.href = "/store/3";
			} else if(jQuery(thisObj).hasClass("tradecenter")){
				location.href = "/store/4";
			}
		},
		
		storeDetailView : function(){
			var id = jQuery(".storeDetailId").val();
			var myaddr = '서울특별시 용산구 회나무로 56';
			
			if(id == 1){
				myaddr = '서울특별시 용산구 회나무로 56';
				jQuery(".storeTitle").html("#경리단길");
				jQuery(".storeLocation").html("서울특별시 용산구 회나무로 56 <br >(이태원 2동 공영주차장 맞은편)");
				jQuery(".storeTel").html("02-797-7090");
				jQuery(".storeTime").html("AM 09:00 - PM 09:00");
				jQuery(".storeInform").html('<span class="packable"><span class="storeicon2"></span>포장 가능</span>	<span class="internet"><span class="storeicon2"></span>무선인터넷</span><span class="animal"><span class="storeicon2"></span>반려동물 동반</span><span class="parking"><span class="storeicon2"></span>주차 가능</span>');
			} else if(id == 2){
				myaddr = '경기도 성남시 분당구 판교역로146번길 20';
				jQuery(".storeTitle").html("#현대백화점 판교점");
				jQuery(".storeLocation").html("경기도 성남시 분당구 판교역로<br >146번길 20 현대백화점 B1");
				jQuery(".storeTel").html("");
				jQuery(".storeTime").html("AM 10:30 - PM 08:00");
				jQuery(".storeInform").html('<span class="packable"><span class="storeicon2"></span>포장 가능</span>	<span class="internet"><span class="storeicon2"></span>주차</span>');
			} else if(id == 3){
				myaddr = '';
				jQuery(".storeTitle").html("#교대점 (오픈 예정)");
				jQuery(".storeLocation").html("");
				jQuery(".storeTel").html("");
				jQuery(".storeTime").html("AM 00:00 - PM 00:00");
			} else if(id == 4){
				myaddr = '';
				jQuery(".storeTitle").html("#무역센터점 (오픈 예정)");
				jQuery(".storeLocation").html("");
				jQuery(".storeTel").html("");
				jQuery(".storeTime").html("AM 00:00 - PM 00:00");
			}
			// StoreFunction.naverMap(myaddr);
			
		},
		
		// naverMap : function(myaddr){
		// 	var map = new naver.maps.Map('map',
		// 			  {zoom:11, minZoom:1,
		// 				zoomControl:true, 
		// 				zoomControlOptions: {position: naver.maps.Position.TOP_RIGHT}
		// 			  });
		// 	var myaddress = myaddr;// 도로명 주소나 지번 주소만 가능 (건물명 불가!!!!)
		// 	naver.maps.Service.geocode({address: myaddress}, function(status, response) {
		// 		if (status !== naver.maps.Service.Status.OK) {
		// 			return alert(myaddress + '의 검색 결과가 없거나 기타 네트워크 에러');
		// 		}
		// 		var result = response.result;
		// 		// 검색 결과 갯수: result.total
		// 		// 첫번째 결과 결과 주소: result.items[0].address
		// 		// 첫번째 검색 결과 좌표: result.items[0].point.y, result.items[0].point.x
		// 		var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
		// 		map.setCenter(myaddr); // 검색된 좌표로 지도 이동
		// 		// 마커 표시
		// 		var marker = new naver.maps.Marker({
		// 			position: myaddr,
		// 			map: map
		// 		});
		// 		// 마커 클릭 이벤트 처리
		// 		naver.maps.Event.addListener(marker, "click", function(e) {
		// 			if (infowindow.getMap()) {
		// 				infowindow.close();
		// 			} else {
		// 				infowindow.open(map, marker);
		// 			}
		// 		});
		// 			// 마크 클릭시 인포윈도우 오픈
		// 			var infowindow = new naver.maps.InfoWindow({
		// 			content: '<h4> [네이버 개발자센터]</h4><a href="https://developers.naver.com" target="_blank"><img src="https://developers.naver.com/inc/devcenter/images/nd_img.png"></a>'
		// 		});
		// 	});
		// },
		
};
