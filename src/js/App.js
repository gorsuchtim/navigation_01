// Import styles
import "../scss/shared.scss";

import "./Components/SetActiveStates/SetActiveStates";
import "./Components/MenuToRun/MenuToRun";
import "./Components/RunMobile/RunMobile";
import "./Components/RunDesktop/RunDesktop";

// Resize event to change between mobile and desktop menus based on screen width when resize ends
var resizeDone;
window.addEventListener("resize", function() {
  this.clearTimeout(resizeDone);
  resizeDone = setTimeout(menuToRun(), 350);
});

if (SetActiveStates()) {
  var desktop = document.querySelector(".meganav--desktop");
  var mobile = document.querySelector(".meganav--mobile");
  if (MenuToRun()) {
    // if true its mobile - RunMobile(desktop, mobile)
  } else {
    // if false its desktop - RunDesktop(desktop, mobile)
  }
}
