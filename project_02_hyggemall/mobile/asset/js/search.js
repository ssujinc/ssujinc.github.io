function openWM(evt, division) {
    var i, newbook_tabcontent, tab_btn;
    tabcontent = document.getElementsByClassName("search_tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab_btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" tab_on", "");
    }
    document.getElementById(division).style.display = "block";
    evt.currentTarget.className += " tab_on";
}



jQuery(document).ready(function(){     
   
    document.getElementById("default_open").click();
       
});