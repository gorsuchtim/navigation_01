"use strict";

const modifyAttribute = (element, attribute, directive) => {
  if (directive == "true") {
    element.setAttribute(attribute, "true");
  } else if (directive == "false") {
    element.setAttribute(attribute, "false");
  } else if (directive == "toggle") {
    element.getAttribute(attribute) == "true"
      ? element.setAttribute(attribute, "false")
      : element.setAttribute(attribute, "true");
  } else {
    return false;
  }
};

const handleDesktopHover = () => {
  var activeSubmenu = this.parentElement.querySelector(".meganav__submenu");
  var activeSubmenuArrow = this.globalThis.querySelector(
    ".meganav__arrow--submenu"
  );
  modifyAttribute(this, "aria-expanded", "toggle");
  modifyAttribute(activeSubmenu, "aria-hidden", "toggle");
  modifyAttribute(activeSubmenuArrow, "aria-hidden", "toggle");
};

export default handleDesktopHover;
