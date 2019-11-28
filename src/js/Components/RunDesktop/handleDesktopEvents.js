"use strict";

import handleDesktopHover from "./handleDesktopHover/handleDesktopHover";
import handleDesktopKeydown from "./handleDesktopKeydown/handleDesktopKeydown";
import handleAdobeTrackZipCode from "./handleAdobeTrackZipCode/handleAdobeTrackZipCode";

const handleDesktopEvents = desktopNav => {
  // Set Nav Button Events
  var navButtons = Utilities.toArray(
    desktopNav.querySelectorAll(".js-meganav__desktop--main")
  );
  navButtons.forEach(navButton => {
    navButton.addEventListener("mouseenter", handleDesktopHover);
    navButton.addEventListener("mouseleave", handleDesktopHover);
    navButton.addEventListener("keydown", handleDesktopKeydown);
  });

  // Set Link Events
  var navLinks = Utilities.toArray(
    desktopNav.querySelectorAll(".meganav__link")
  );
  navLinks.forEach(navLink => {
    navLink.addEventListener("keydown", handleDesktopKeydown);
  });

  // Set Masthead Form Events
  var searchAdvisorSubmit = document.querySelector(
    ".meganav__button--searchAdvisor"
  );
  searchAdvisorSubmit.addEventListener("click", handleAdobeTrackZipCode);
};

export default handleDesktopEvents;
