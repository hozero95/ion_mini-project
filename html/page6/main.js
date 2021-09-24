//AJAX
$(document).ready(function(){
  $("button").click(function(){
    $(".introduce__description").load("japan.txt")
  });
});

// navbar 누르면 설정 구역으로 이동
const navbarMeun = document.querySelector(".navbar__meun");
navbarMeun.addEventListener("click", (event) => {

  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  // console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView();
});

// 아래로 내려왔을때 위로 올라가는 버튼

// document.body.scrollTop = 0;
var timeOut;
function scrollToTop() {
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
        window.scrollBy(0,-50);
        timeOut=setTimeout('scrollToTop()',10);
    }
    else clearTimeout(timeOut);
}
