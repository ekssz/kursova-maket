window.onscroll = function () {
  myFunction();
};
const navmenu = document.querySelector(".header");
const burgerlinks = document.querySelector(".preheader");
const sticky = navmenu.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navmenu.classList.add("sticky");
    document.body.style.paddingTop = navmenu.offsetHeight + "px";
  } else {
    navmenu.classList.remove("sticky");
    document.body.style.paddingTop = 0;
  }
}

ScrollReveal({ delay: 1 }).reveal(".scrollreveal");
ScrollReveal({ delay: 1 }).reveal(".scrollreveal-noreturn");
