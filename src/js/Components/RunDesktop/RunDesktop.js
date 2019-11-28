"use strict";

import Utilities from "../Utilities/Utilities";
import handleDesktopEvents from "./handleDesktopEvents/handleDesktopEvents";
import setShowOnFocusHref from "./setShowOnFocusHref/setShowOnFocusHref";

const RunDesktop = (desktopNav, mobileNav) => {
  Utilities.modifyHiddenState(desktopNav, "hidden", "remove");
  Utilities.modifyHiddenState(mobileNav, "hidden", "add");
  handleDesktopEvents(desktopNav);
  setShowOnFocusHref(document.querySelector(".showOnFocus"));

  document.querySelector(".meganav__input--searchAdvisor").value = "";
};

export default RunDesktop;
