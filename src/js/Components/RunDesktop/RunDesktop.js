"use strict";

import Utilities from "../Utilities/Utilities";
import handleDesktopEvents from "./handleDesktopEvents/handleDesktopEvents";
import handleDesktopHover from "./handleDesktopHover/handleDesktopHover";

const RunDesktop = (desktopNav, mobileNav) => {
  Utilities.modifyHiddenState(desktopNav, "hidden", "remove");
  Utilities.modifyHiddenState(mobileNav, "hidden", "add");
  handleDesktopEvents(desktopNav);
};

export default RunDesktop;
