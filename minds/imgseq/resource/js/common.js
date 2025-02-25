const wrap = document.getElementById("wrap");
const header = document.getElementById("header");
const btnMenu = document.querySelector(".btn_menu");
const bgWrap = document.querySelector(".bg_wrap");
const aiHumanWrap = document.querySelector(".ai_human_wrap");
const inputWrap = document.querySelector(".input_wrap");
const btnInput = document.querySelector(".btn_input");
const BUTTON = document.querySelector(".input_wrap .btn_submit");
const inputArea = document.querySelector(".input_area");
const bubbleWrapScroll = document.querySelector(".bubble_scroll");
const bubbleWrap = document.querySelector(".bubble_wrap");
const bubbleDiv = document.querySelector(".bubble_scroll");
const bubbleDivC = bubbleDiv.children;

// mobile device check
function checkDevice() {
  const isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  const userAgent = navigator.userAgent.toLowerCase();
  const isTablet = /(ipad|tablet|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);

  if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1){
    console.log(1);
    if( window.innerWidth > 1023 ){
      addClass(wrap, 'pc');
    }
    if( window.innerWidth < 1024 && window.innerWidth > 767 ){
      addClass(wrap, 'tablet');
    }
    if( window.innerWidth < 768 && window.innerWidth > 320 ){
      addClass(wrap, 'mobile');
    }
  } else {
    if( isTablet ){
      removeClass(wrap, 'pc');
      removeClass(wrap, 'mobile');
      addClass(wrap, 'tablet');
    } else if ( isMobile.any() ){
      removeClass(wrap, 'pc');
      removeClass(wrap, 'tablet');
      addClass(wrap, 'mobile');
    } else {
      removeClass(wrap, 'mobile');
      removeClass(wrap, 'tablet');
      addClass(wrap, 'pc');
    }
  }
  
  if (window.matchMedia("(orientation: portrait)").matches) {
    // alert("세로");
  }
  if (window.matchMedia("(orientation: landscape)").matches) {
    // alert("가로");
  }
}

// forEach for "IE"
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
} 

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
}
// removeClass
function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0 ) {
      newClass = newClass.replace( " " + className + " " , " " );
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  } else {
    elem.className += ' ' + className;
  }
}

function btnMenuFunction(){
  if(document.body.contains(btnMenu)) {
    btnMenu.addEventListener("click", function(){
      if( hasClass(wrap, 'menuOn') ){
        removeClass(wrap, 'menuOn');
      } else { 
        addClass(wrap,'menuOn');
        if( hasClass(wrap, 'aniNon') ){
          removeClass(wrap, 'aniNon');
        }
      }
    });
  }
}

function settingsSelectRadioBtn(){
  const selectListHuman = document.querySelectorAll(".select_human_wrap ul li");
  const selectListClothes = document.querySelectorAll(".select_clothes_wrap ul li");
  const selectListBg = document.querySelectorAll(".select_bg_wrap ul li");

  function selectEvent(ITEM){
    ITEM.forEach(function(item){
      item.addEventListener("click",function(){
        ITEM.forEach(function(i){
          removeClass(i, 'on');
        })
        addClass(item, 'on');
      })
    })
  }
  selectEvent(selectListHuman);
  selectEvent(selectListClothes);
  selectEvent(selectListBg);
}

const contentsWrap = document.querySelector("#contents");
function radioBgButton(){
  const radiosBg = document.querySelectorAll('input[type=radio][name="bg"]');
  const btnApply = document.querySelector(".btn_apply");
  const bgWrapImgBg = document.querySelector(".bg_wrap .bg_img");
  const bgWrapVideoBg = document.querySelector(".bg_wrap .bg_vid");
  const bgHd = document.querySelector(".bg_hd");
  const bgVid = document.querySelector(".bg_hd .bg_vid");
  let changeSrc;
  radiosBg.forEach(function(radio, i){
    radio.addEventListener("change", function(){
      btnApply.addEventListener('click', function(){
        if( radio.classList.contains('videoBg')){
          changeSrc = "./resource/images/bg_office_mov_0" + (i+2) + ".mp4";
          bgWrapVideoBg.src = changeSrc;
          bgVid.src = changeSrc;
          bgWrapVideoBg.style.display = "block";
          bgWrapImgBg.style.display = "none";
          bgHd.style.display = "block";
        } else {
          changeSrc = "./resource/images/bg_office_img_0" + (i+1) + ".png";
          bgWrapImgBg.src = changeSrc;
          bgWrapImgBg.style.display = "block";
          bgWrapVideoBg.style.display = "none";
          bgHd.style.display = "none";
        }
        const humanImg = document.querySelector(".img_human_body");
        if( i == 1 || i == 2 ){
          addClass(wrap, 'bg_bright');
          humanImg.src = "./resource/images/img_fhd_model_female_gr.png";
        } else {
          removeClass(wrap, 'bg_bright');
          humanImg.src = "./resource/images/img_fhd_model_female.png";
        }
        removeClass(wrap, 'menuOn');
      })
    })
  })
}

function setVh(){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
}

function keyboardFunction(){
  const FORM = document.querySelector(".input_wrap form");
  const textareaTxt = document.querySelector(".textareaTxt");
  const isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  if(isMobile.Android()){
    textareaTxt.onfocus = function () {
      document.querySelector(".ai_human_body").style.cssText = 'width:54vh; height:80vh;';
    };
    textareaTxt.onblur = function () {
      document.querySelector(".ai_human_body").style.cssText = '';
      if( textareaTxt.value === "" ){
        removeClass(inputArea,"on");
        removeClass(btnInput, "on");
      }
    };
  };

  if(isMobile.iOS()){
    textareaTxt.onfocus = function () {
      let keyboardException;
      setTimeout(function() { 
        keyboardException = window.visualViewport.height;
        wrap.style.height = (keyboardException + 20) + "px";
        bgWrap.style.height = (keyboardException + 20) + "px";
        document.querySelector(".ai_human_body").style.cssText = `width:32vh; height:52vh;`;
        window.scrollTo(0,0);
      }, 200); 
      wrap.addEventListener("touchmove", preventEvent);
    };

    aiHumanWrap.addEventListener("touchstart",function(){
      textareaTxt.blur();
      wrap.addEventListener("touchmove", preventEvent);
    })
  
    textareaTxt.onblur = function () {
      wrap.style.height = "calc(var(--vh, 1vh) * 100)";
      bgWrap.style.height = "calc(var(--vh, 1vh) * 100)";
      wrap.removeEventListener("touchmove", preventEvent);
      document.querySelector(".ai_human_body").style.cssText = '';
      if( textareaTxt.value === "" ){
        removeClass(inputArea,"on");
        removeClass(btnInput, "on");
      }
    };

    var preventEvent = function(e){
      e.preventDefault();
      e.stopPropagation();
    }
  }

  if ("VisualViewport" in window) {
    const debouncedHandleResize = debounce(handleResize, 100);
    visualViewport.addEventListener("resize", debouncedHandleResize);

    function handleResize(event) {
      const th = {
        height: visualViewportHeight
      } = event.target;
      const eventName = Math.ceil(th.height) < window.innerHeight ? "keyboardopen" : "keyboardclose";
      emitEvent.call(event, eventName);
    }

    function emitEvent(name) {
      window.dispatchEvent(new CustomEvent(name, {
        detail: {
          originalEvent: this,
        },
      }));
    }

    function debounce(fn, wait) {
      let cancelId = null;
      return function debounced(arguments) {
        clearTimeout(cancelId);
        cancelId = setTimeout(fn.bind(this, arguments), wait);
      }
    }
  }

  const classUpOn = {
    remove : function(){
      return Array.prototype.slice.call(bubbleDivC).map(function(a) {
        removeClass(a,"on");
      });
    },
    add : function(){
      return Array.prototype.slice.call(bubbleDivC).map(function(a) {
        if( !(hasClass(a,"on")) ){
          addClass(a,"up");
        }
      });
    }
  }

  btnInput.addEventListener("click", function(){
    addClass(this, "on");
    addClass(inputArea,"on");
    textareaTxt.focus();
  })

  FORM.addEventListener("submit",function(e){
    e.preventDefault();
    textareaTxt.value = '';
  });

  BUTTON.addEventListener("touchstart",function(){
    if( textareaTxt.value !== "" ) {
      classUpOn.remove();
    }
  })
  BUTTON.addEventListener("touchend",function(e){
    if( textareaTxt.value !== "" ) {
      e.preventDefault();
      // console.log(textareaTxt.value);
      classUpOn.add();
      bubbleWrapScroll.innerHTML += "<div class='bubble_text on'><p>" + textareaTxt.value + "</p></div>";
      textareaTxt.value = "";
    }
    console.log("BUTTON");
    // if ( wrap.classList.contains("pc") || wrap.classList.contains("tablet") ) {
    //   // inputWrap.style.height = 45 + "px";
    // }
    // else if (wrap.classList.contains("mobile")) {
    //   // inputWrap.style.height = 31 + "px";
    // }
    textareaTxt.focus();
    textareaTxt.style.height = "auto";
  })

  BUTTON.addEventListener("mousedown",function(){
    if( textareaTxt.value !== "" ) {
      classUpOn.remove();
    }
  })
  BUTTON.addEventListener("mouseup",function(){
    if( textareaTxt.value !== "" ) {
      classUpOn.add();
      bubbleWrapScroll.innerHTML += "<div class='bubble_text on'><p>" + textareaTxt.value + "</p></div>";
      // console.log(textareaTxt.value);
      textareaTxt.value = "";
    }
    // if ( wrap.classList.contains("pc") || wrap.classList.contains("tablet") ) {
    //   inputWrap.style.height = 45 + "px";
    // }
    // else if (wrap.classList.contains("mobile")) {
    //   inputWrap.style.height = 31 + "px";
    // }
    textareaTxt.focus();
    textareaTxt.style.height = "auto";
  })

  textareaTxt.addEventListener("keydown",function(event){
    let KEY = event.key || event.KeyboardEvent.keyCode;
    if( KEY === "Enter" || KEY === 13 ){
      // event.preventDefault();
      textareaTxt.style.height = "auto";
      classUpOn.remove();
      if ( wrap.classList.contains("pc") || wrap.classList.contains("tablet") ) {
        // inputWrap.style.height = 45 + "px";
      }
      else if (wrap.classList.contains("mobile")) {
        // inputWrap.style.height = 31 + "px";
      }
    };
  });
  textareaTxt.addEventListener("keypress",function(event){
    let KEY = event.key || event.KeyboardEvent.keyCode;
    if( KEY === "Enter" || KEY === 13 ){
      if(event.shiftKey){
        event.stopPropagation();
      } else {
        event.preventDefault();
        classUpOn.add();
        console.log(textareaTxt.value);
        if( textareaTxt.value !== "" ) {
          bubbleWrapScroll.innerHTML += "<div class='bubble_text on'><p>" + textareaTxt.value + "</p></div>";
        }
        textareaTxt.value = '';
        textareaTxt.style.height = "auto";
      }
      // if ( wrap.classList.contains("pc") || wrap.classList.contains("tablet") ) {
      //   // inputWrap.style.height = 45 + "px";
      // }
      // else if (wrap.classList.contains("mobile")) {
      //   // inputWrap.style.height = 31 + "px";
      // }
    };
  });


  // textarea changing height
  let offset = textareaTxt.offsetHeight - textareaTxt.clientHeight;
  const resizeTextarea = function(){
    const textareaResize = textareaTxt.scrollHeight + offset;
    if ( wrap.classList.contains("pc") || wrap.classList.contains("tablet") ) {
      if( textareaResize < 120 ){
        if(navigator.userAgent.match(/Firefox/i)){
          textareaTxt.style.height = "24px";
          textareaTxt.style.height = textareaTxt.scrollHeight + offset +"px";
        } else {
          textareaTxt.style.height = "auto";
          textareaTxt.style.height = textareaTxt.scrollHeight + offset +"px";
          // inputWrap.style.height = "auto";
          // inputWrap.style.height = textareaTxt.scrollHeight + offset + 21 + "px";
        }
        bubbleWrap.style.bottom = textareaTxt.scrollHeight + offset +120 +"px";
      } else if(textareaResize > 120) {
        textareaTxt.style.height = 120 + "px";
        // inputWrap.style.height = 141 + "px";
        bubbleWrap.style.bottom = 120 + 120 +"px";
      } else {
        textareaTxt.style.height = "auto";
        textareaTxt.style.height = textareaTxt.scrollHeight + offset +"px";
        bubbleWrap.style.bottom = textareaTxt.scrollHeight + offset +120 +"px";
        // inputWrap.style.height = "auto";
        // inputWrap.style.height = textareaTxt.scrollHeight + offset + 21 + "px";
      }
    }
    
    if (wrap.classList.contains("mobile")) {
      if( textareaResize < 95 ){
        if(navigator.userAgent.match(/Firefox/i)){
          textareaTxt.style.height = "17px";
          textareaTxt.style.height = textareaTxt.scrollHeight + offset +"px";
        } else {
          textareaTxt.style.height = "auto";
          textareaTxt.style.height = (textareaTxt.scrollHeight + offset)/10 + 0.05 + "rem";
          // inputWrap.style.height = "auto";
          // inputWrap.style.height = textareaTxt.scrollHeight + offset + 12 + "px";
          if(isMobile.iOS()){
            textareaTxt.addEventListener("touchstart",function(){
              wrap.addEventListener("touchmove", preventEvent);
            })
          }
        }
        bubbleWrap.style.bottom = textareaTxt.scrollHeight + offset +80 +"px";
      } else if( textareaResize > 95 ) {
        if(isMobile.iOS()){
          textareaTxt.addEventListener("touchstart",function(){
            textareaTxt.focus();
            wrap.removeEventListener("touchmove", preventEvent);
          })
        }
        textareaTxt.style.height = 95 + "px";
        bubbleWrap.style.bottom = 80 + 95 +"px";
        // inputWrap.style.height = 107 + "px";
      } else {
        textareaTxt.style.height = "auto";
        textareaTxt.style.height = textareaTxt.scrollHeight + offset +"px";
        bubbleWrap.style.bottom = textareaTxt.scrollHeight + offset +80 +"px";
        // inputWrap.style.height = "auto";
        // inputWrap.style.height = textareaTxt.scrollHeight + offset + 12 + "px";
      }
    }
    
  }
  textareaTxt.addEventListener("keyup", function(){
    resizeTextarea(textareaTxt);
    if(textareaTxt.value == ""){
      textareaTxt.style.height = "auto";
      if ( wrap.classList.contains("pc") || wrap.classList.contains("tablet") ) {
        // inputWrap.style.height = 45 + "px";
      }
      else if (wrap.classList.contains("mobile")) {
        // inputWrap.style.height = 31 + "px";
      }
    }
  });
  textareaTxt.addEventListener("input", function(){
    resizeTextarea(textareaTxt); 
  });
  resizeTextarea(textareaTxt);
};

function emotionBtnEvent(){
  const btnEmoWrap = document.querySelector(".btn_emo_wrap");
  const btnEmo = document.querySelectorAll(".btn_emo_wrap button");
  const btnEmoSelected = document.querySelector(".btn_emotion");
  btnEmo.forEach(function(v){
    v.addEventListener("click",function(){
      if( v.dataset.emo == "normal" ){
        addClass(btnEmoSelected,"emo_normal");
        removeClass(btnEmoSelected,"emo_happy");
        removeClass(btnEmoSelected,"emo_sad");
      }
      if( v.dataset.emo == "happy" ){
        addClass(btnEmoSelected,"emo_happy");
        removeClass(btnEmoSelected,"emo_normal");
        removeClass(btnEmoSelected,"emo_sad");
      }
      if( v.dataset.emo == "sad" ){
        addClass(btnEmoSelected,"emo_sad");
        removeClass(btnEmoSelected,"emo_normal");
        removeClass(btnEmoSelected,"emo_happy");
      }
      removeClass(btnEmoWrap,"on");
    })
  })
  
  btnEmoSelected.addEventListener("click",function(){
    toggleClass(btnEmoWrap,"on");
  })

  btnEmo.forEach(function(v){
    v.addEventListener("touchstart",function(){
      if( v.dataset.emo == "normal" ){
        addClass(btnEmoSelected,"emo_normal");
        removeClass(btnEmoSelected,"emo_happy");
        removeClass(btnEmoSelected,"emo_sad");
      }
      if( v.dataset.emo == "happy" ){
        addClass(btnEmoSelected,"emo_happy");
        removeClass(btnEmoSelected,"emo_normal");
        removeClass(btnEmoSelected,"emo_sad");
      }
      if( v.dataset.emo == "sad" ){
        addClass(btnEmoSelected,"emo_sad");
        removeClass(btnEmoSelected,"emo_normal");
        removeClass(btnEmoSelected,"emo_happy");
      }
    })
  })
}


window.addEventListener("load", function(){
  checkDevice();
  btnMenuFunction();
  settingsSelectRadioBtn();
  radioBgButton();
  setVh();
  keyboardFunction();
  emotionBtnEvent();
});

window.addEventListener("resize", function(){
  checkDevice();
  setVh();
  addClass(wrap, 'aniNon');
});