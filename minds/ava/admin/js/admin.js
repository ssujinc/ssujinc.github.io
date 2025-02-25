// 공통 select box
var x, i, j, l, ll, selElmnt, a, b, c;
var bank = document.getElementById("bank");
var bankNumber = document.getElementById("bank_number");

x = document.getElementsByClassName("admin-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;

  a = document.createElement("DIV");
  a.setAttribute("class", "admin-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "admin-items select-hide");
  for (j = 0; j < ll; j++) {

    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {

        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
 
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
 
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("admin-items");
  y = document.getElementsByClassName("admin-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

// 수정 버튼 눌렀을 때
document.querySelectorAll('button.button_modify').forEach(comment_button => {
  comment_button.addEventListener('click', () => {
    document.getElementById('detail_information_modify').style.display = 'block';
  })
})

// 비고:보기 버튼 눌렀을 때
document.querySelectorAll('.comment>a').forEach(comment_button => {
  comment_button.addEventListener('click', () => {
    document.getElementById('comment_detail').style.display = 'block';
  })
})

// 결제취소 버튼 눌렀을 때
document.querySelectorAll('.pay_cancel_date>a').forEach(cancel_button => {
  cancel_button.addEventListener('click', () => {
    document.getElementById('payment_cancel').style.display = 'block';
  })
})

// modal 배경 눌렀을때 끄기
document.querySelectorAll('.modal_bg').forEach(modal_bg => {
  modal_bg.addEventListener('click', () => {
    document.querySelectorAll('.active').forEach(active_list => {
      active_list.classList.remove('active');
    })
    document.querySelectorAll('.modal').forEach(open_modals => {
      open_modals.style.display = 'none';
    })
  })
})

// modal close icon 눌렀을때 끄기
document.querySelectorAll('.modal_close').forEach(modal_close => {
  modal_close.addEventListener('click', () => {
    document.querySelectorAll('.active').forEach(active_list => {
      active_list.classList.remove('active');
    })
    document.querySelectorAll('.modal').forEach(open_modals => {
      open_modals.style.display = 'none';
    })
  })
})

