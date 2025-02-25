
            // ie detect
            function ieCheck() {
                var myNav = navigator.userAgent.toLowerCase();
                return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : ((navigator.appName == 'Netscape' && myNav.indexOf('trident') != -1) ? '11' : false);

            }
            var checkIE = ieCheck();
            if (checkIE && (ieCheck() < 9)) {
                location.href = 'caution.html';
            }

            $(document).ready(function(){
                $(".slider_counter").prepend('0<strong class="current-index"></strong>');
                $('.bxslider').bxSlider({
                    maxSliders:1,
                    // mode:'fade',
                    auto:true ,
                    speed: 1400,
                    pause: 4000,
                    infiniteLoop: true,
                    autoControls: false,
                    captions: true,
                    pager:true ,
                    controls:true,
                    touchEnabled: true,
                    swipeThreshold: 50,
                    // preventDefaultSwipeX: true,
                    // preventDefaultSwipeY: true,
                    // oneToOneTouch:false,
                    responsive :true,
                    nextSelector:'.slider_next',
                    prevSelector:'.slider_prev',
                    nextText: '<img src="img/next_btn.png" alt="next">',
                    prevText: '<img src="img/prev_btn.png" alt="prev">',
                    onSliderLoad: function (currentIndex){
                        $('.slider_counter .current-index').text(currentIndex + 1)
                        $(".slider_txt").text($('.nth1').find("img").attr("alt"));
                    },
                    onSlideBefore: function ($slideElement, oldIndex, newIndex){
                        $('.slider_counter .current-index').text(newIndex + 1)
                        $(".slider_txt").html($slideElement.find("img").attr("alt"));
                    }
                });

                $(".logo").on("click", function(){
                    $('html, body').animate({
                        scrollTop : 0
                    }, 500);
                    return false;
                });
                // var onTouchMove = function (e) {
                //     if (slider.settings.mode != 'fade') {
                //         var orig = e.originalEvent;
                //         var value = 0;
                //         // if horizontal, drag along x axis
                //         if (slider.settings.mode == 'horizontal')
                //         {
                //             var hchange = orig.changedTouches[0].pageX - slider.touch.start.x;
                //             var vchange = orig.changedTouches[0].pageY - slider.touch.start.y;

                //             if(Math.abs(hchange)>20 && Math.abs(hchange)>Math.abs(vchange))
                //             {
                //                 value = slider.touch.originalPos.left + hchange;
                //                 setPositionProperty(value, 'reset', 0);
                //                 e.preventDefault();
                //             }
                //             // if vertical, drag along y axis
                //         } else{
                //             e.preventDefault();
                //             var change = orig.changedTouches[0].pageY - slider.touch.start.y;
                //             value = slider.touch.originalPos.top + change;
                //             setPositionProperty(value, 'reset', 0);
                //         }

                //     }
                // }

                $('.scroll_down').click (function() {
                  $('html, body').animate({scrollTop: $('.s2').offset().top }, 'slow');
                  return false;
                });

                // logoChange();
            });

            window.onload = function () {
                var elm = ".box";
                var moveTop = $(window).scrollTop();
               $(elm).each(function (index) {
                   // 개별적으로 Wheel 이벤트 적용
                   $(this).on("mousewheel DOMMouseScroll", function (e) {
                        e.preventDefault();
                        var delta = 0;
                        if (!event) event = window.event;
                        if (event.wheelDelta) {
                            delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                        }
                        else if (event.detail)
                        delta = -event.detail / 3;
                        var moveTop = $(window).scrollTop();
                        var elmSelecter = $(elm).eq(index);

                        // 마우스휠을 위에서 아래로
                        if (delta < 0) {
                            if ($(elmSelecter).next() != undefined) {
                                try{
                                    moveTop = $(elmSelecter).next().offset().top;
                                }catch(e){}
                            }
                        // 마우스휠을 아래에서 위로
                        } else {
                            if ($(elmSelecter).prev() != undefined) {
                                try{
                                   moveTop = $(elmSelecter).prev().offset().top;
                                }catch(e){}
                            }
                        }

                        // 화면 이동 0.8초(800)
                        $("html,body").stop().animate({
                           scrollTop: moveTop + 'px'
                        },1600, "easeInOutExpo");
                    });
               });
                if($(window).width()>800){
                }
                // else {
                //     // $(".wrap").height("100%");
                //     $(".wrap").height($(window).height());
                //     $(".full").height($(window).height());
                //     $(".full .box").height($(window).height());

                //     var startTouchY = null;
                //     var moveTouchY = null;
                //     var startPositionY = null;

                //     $('.box').bind('touchstart',function(event){
                //         var e = event.originalEvent;
                //         // startTouchX = e.targetTouches[0].pageX;
                //         startTouchY = e.targetTouches[0].pageY;
                //         // startPositionX = $(this).css('left');
                //         // startPositionY = $(this).css('top');
                //     });
                //     $('.box').bind('touchmove', function(event){
                //         var e = event.originalEvent;
                //         // moveTouchX = e.targetTouches[0].pageX;
                //         moveTouchY = e.targetTouches[0].pageY;
                //         // $(this).css({top: (moveTouchY - 50), left: (moveTouchX - 5)});
                //     });
                //     $('.box').bind('touchend', function(event){
                //         var tt = moveTouchY - startTouchY;
                //         var elmSelecter = $(elm).eq();
                //         console.log(tt);

                //         var curWheel = 0;
                //         var curWheel2 = 0;
                //         var _isHasScroll = false, _isScrollEnd = false, _isScrollStart = false;
                //         var isWheelMove = false;

                //         if(_isHasScroll && _isScrollStart){
                //             setTimeout(function(){
                //                 if( tt < 0 ){

                //                     if( curWheel ===1 ){
                //                         isWheelMove = true;
                //                         TweenMax.to($(".s1"), 0, {'top' : '-100%', ease:Power3.easeOut});
                //                     TweenMax.to($(".s1"), 1, {'top' : '0', ease:Power3.easeOut});
                //                     TweenMax.to($(".s2"), 1, {'top' : '100%', ease:Power3.easeOut, onComplete:function(){
                //                         curWheel = 0;
                //                         curWheel2 = 0;
                //                         isWheelMove = false;
                //                     }});
                //                     }
                //                 }
                //                 if( tt > 0 ){
                //                     if ($(elmSelecter).prev() != undefined) {
                //                         try{
                //                            moveTop = $(elmSelecter).prev().offset().top;
                //                         }catch(e){}
                //                     }
                //                 }
                //             });
                //         }
                //         // 화면 이동 0.8초(800)
                //         $("html,body").stop().animate({
                //            scrollTop: moveTop + 'px'
                //         },800, "easeInOutExpo");
                //     });


                //     var lastY;
                //     $(document).bind('touchmove', function (e){

                //         var elmSelecter = $(elm).eq();
                //         var currentY = e.originalEvent.touches[0].clientY;
                //         if(currentY > lastY){// moved down
                //             console.log("아래");
                //             if ($(elmSelecter).next() != undefined) {
                //                 try{
                //                     moveTop = $(elmSelecter).next().offset().top;
                //                 }catch(e){}
                //             }
                //         }else if(currentY < lastY){// moved up
                //             console.log("위");
                //             if ($(elmSelecter).prev() != undefined) {
                //                 try{
                //                    moveTop = $(elmSelecter).prev().offset().top;
                //                 }catch(e){}
                //             }
                //         }
                //         // 화면 이동 0.8초(800)
                //             $("html,body").stop().animate({
                //                scrollTop: moveTop + 'px'
                //             },800, "easeInOutExpo");
                //          lastY = currentY;
                //     });


                //     /*console.log("얍");
                //     var bStartEvent = false; //touchstart 이벤트 발생 여부 플래그
                //     var nMoveType = -1; //현재 판단된 사용자 움직임의 방향
                //     var htTouchInfo = { //touchstart 시점의 좌표와 시간을 저장하기
                //         nStartX : -1,
                //         nStartY : -1,
                //         nStartTime : 0
                //     };
                //     //수직 방향을 판단하는 기준 기울기
                //     var nHSlope = ((window.innerHeight) / window.innerWidth / 2).toFixed(2) * 1;

                //     function initTouchInfo() { //터치 정보들의 값을 초기화하는 함수
                //         htTouchInfo.nStartX = -1;
                //         htTouchInfo.nStartY = -1;
                //         htTouchInfo.nStartTime = 0;
                //     }

                //     //touchstart 좌표값과 비교하여 현재 사용자의 움직임을 판단하는 함수
                //     function getMoveType(x, y) {
                //         //0은 수평방향, 1은 수직방향
                //         var nMoveType = -1;

                //         var nX = Math.abs(htTouchInfo.nStartX - x);
                //         var nY = Math.abs(htTouchInfo.nStartY - y);
                //         var nDis = nX + nY;
                //         //현재 움직인 거리가 기준 거리보다 작을 땐 방향을 판단하지 않는다.
                //         if(nDis < 25) { return nMoveType }

                //         var nSlope = parseFloat((nY / nX).toFixed(2), 10);

                //         if(nSlope > nHSlope) {
                //             nMoveType = 1;
                //         } else {
                //             nMoveType = 0;
                //         }

                //         return nMoveType;
                //     }

                //     function onStart(e) {
                //         initTouchInfo(); //터치 정보를 초기화한다.
                //         nMoveType = -1; //이전 터치에 대해 분석한 움직임의 방향도 초기화한다.
                //         //touchstart 이벤트 시점에 정보를 갱신한다.
                //         htTouchInfo.nStartX = e.$value().changedTouches[0].pageX;
                //         htTouchInfo.nStartY = e.$value().changedTouches[0].pageY;
                //         htTouchInfo.nStartTime = e.$value().timeStamp;
                //         bStartEvent = true;
                //     }

                //     function onMove(e) {
                //         if(!bStartEvent) {
                //             return
                //         }
                //         var nX = e.$value().changedTouches[0].pageX;
                //         var nY = e.$value().changedTouches[0].pageY;
                //             console.log(nY);

                //         //현재 touchmMove에서 사용자 터치에 대한 움직임을 판단한다.
                //         nMoveType = getMoveType(nX, nY);

                //         //현재 사용자 움직임을 수직으로 판단해 기본 브라우저의 스크롤 기능을 막고 싶으면 아래 코드를 사용한다.
                //         if(nMoveType === 1) {
                //             e.stop(jindo.$Event.CANCLE_DEFAULT);
                //         }

                //     }

                //     function onEnd(e) {
                //         if(!bStartEvent) {
                //             return
                //         }

                //         //touchmove에서 움직임을 판단하지 못했다면 touchend 이벤트에서 다시 판단한다.
                //         if(nMoveType < 0) {
                //             var nX = e.$value().changedTouches[0].pageX;
                //             var nY = e.$value().changedTouches[0].pageY;
                //             nMoveType = getMoveType(nX, nY);
                //         }
                //         bStartEvent = false;
                //         nMoveType = -1; //분석한 움직임의 방향도 초기화한다.
                //         initTouchInfo(); //터치 정보를 초기화한다.
                //     }*/
                // }

            //    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
            //     mapOption = {
            //         center: new daum.maps.LatLng(37.654342, 126.775856), // 지도의 중심좌표
            //         level: 3 // 지도의 확대 레벨
            //     };

            //     var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            //     var imageSrc = "http://ilsan.chamc.co.kr/img/marker.png", // 마커이미지의 주소입니다
            //         imageSize = new daum.maps.Size(54, 57), // 마커이미지의 크기입니다
            //         imageOption = {offset: new daum.maps.Point(25,35)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            //     // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
            //     var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption),
            //         markerPosition = new daum.maps.LatLng(37.654342, 126.775856); // 마커가 표시될 위치입니다

            //     // 마커가 표시될 위치입니다
            //     var markerPosition  = new daum.maps.LatLng(37.654342, 126.775856);

            //     // 마커를 생성합니다
            //     var marker = new daum.maps.Marker({
            //         position: markerPosition,
            //         image: markerImage // 마커이미지 설정
            //     });

            //     // 마커가 지도 위에 표시되도록 설정합니다
            //     marker.setMap(map);

            //     map.setZoomable(true);
            }

            // function logoChange() {
            //     var scroll = document.documentElement.scrollTop;
            //     var hei = document.documentElement.clientHeight;
            //     var img = $(".header_area a.pc img");
            //     var logo = "img/logo.png";
            //     var logoW = "img/logo_white.png";
            //     if( scroll < hei ){
            //         img.attr("src",logoW);
            //     } else {
            //         img.attr("src",logo);
            //     }
            // }
            $(window).scroll(function(){
                // logoChange();
            });

            // el = document.querySelector(".wrap");
            // var mc = new Hammer.Manager(el); //Hammer 이벤트 관리자 생성 및 이벤트 등록
            // mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
            // mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));
            // mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'));
            // mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')]);

            // mc.on("pinchstart pinchmove", onPinch); //핀치 이벤트- 핸들러 등록
            // function onPinch(ev) {
            //     if(ev.type == 'pinchstart') {
            //         initScale = transform.scale || 1;
            //     }
            //     // if(ev.type == 'pinchstart') {
            //     //     initScale = transform.scale || 1;
            //     // }

            //     alert("얍");
            // }
