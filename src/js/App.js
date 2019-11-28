// ******* Import styles
import "../scss/shared.scss";

// ******* Import Components
import "./Components/SetActiveStates/SetActiveStates";
import "./Components/IsMobileView/IsMobileView";
import "./Components/RunMobile/RunMobile";
import "./Components/RunDesktop/RunDesktop";

var desktopNav = document.querySelector(".meganav--desktop");
var mobileNav = document.querySelector(".meganav--mobile");

// Resize event to change between mobile and desktop menus based on screen width when resize ends
var resizeDone;
window.addEventListener("resize", function() {
  this.clearTimeout(resizeDone);
  resizeDone = setTimeout(meganav(), 350);
});

// Instead of returning false we could run an error check here
SetActiveStates() ? meganav() : false;

const meganav = () =>
  IsMobileView()
    ? RunMobile(desktopNav, mobileNav)
    : RunDesktop(desktopNav, mobileNav);

/*
// IE needs tabindex value assigned in oder to throw actual focus to element when page is scrolled to it
const setHeadingTabIndex = () =>
  document.getElementById("heading--main")
    ? document.getElementById("heading--main").setAttribute("tabindex", "-1")
    : false;
    */
