"use strict";

import Utilities from "../Utilities/Utilities";
import handleDesktopHover from "./handleDesktopHover/handleDesktopHover";

const handleDesktopEvents = desktopNav => {
  var navButtons = Utilities.toArray(
    desktopNav.querySelectorAll(".js-meganav__desktop--main")
  );

  navButtons.forEach(navButton => {
    navButton.addEventListener("mouseenter", handleDesktopHover);
    navButton.addEventListener("mouseleave", handleDesktopHover);
    navButton.addEventListener("keydown", handleDesktopKeydown);
  });

  var navLinks = Utilities.toArray(
    desktopNav.querySelectorAll(".meganav__link")
  );

  navLinks.forEach(navLink => {
    navLink.addEventListener("keydown", handleDesktopKeydown);
  });
};

const RunDesktop = (desktopNav, mobileNav) => {
  Utilities.modifyHiddenState(desktopNav, "hidden", "remove");
  Utilities.modifyHiddenState(mobileNav, "hidden", "add");
  handleDesktopEvents(desktopNav);
};

export default RunDesktop;
