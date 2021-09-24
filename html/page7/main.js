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