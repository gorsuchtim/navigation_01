"use strict";

// IE needs tabindex value assigned in oder to throw actual focus to element when page is scrolled to it
const setHeadingTabIndex = () =>
  document.getElementById("heading--main")
    ? document.getElementById("heading--main").setAttribute("tabindex", "-1")
    : false;

const isMobileView = () => (window.innerWidth < 768 ? true : false);

const MenuToRun = () => (isMobileView() ? true : false);

export default MenuToRun;
