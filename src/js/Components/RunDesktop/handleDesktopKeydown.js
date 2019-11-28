"use strict";

import handleTab from "./DesktopKeydowns/handleTab";
import handleMenu from "./DesktopKeydowns/handleMenu";
import handleLeft from "./DesktopKeydowns/handleLeft";
import handleRight from "./DesktopKeydowns/handleRight";
import handleDown from "./DesktopKeydowns/handleDown";
import handleUp from "./DesktopKeydowns/handleUp";

const handleDesktopKeydown = () => {
  var key = event.which;
  var toFocus = handleFocus(this);

  toFocus ? toFocus.focus() : false;

  const handleFocus = () => {
    var goTo;
    switch (key) {
      case 9:
        handleTab(this);
        break;
      case 13:
      case 32:
        handleMenu("toggle");
        break;
      case 37:
      case 39:
        event.preventDefault();
        handleMenu("close");
        key == 37 ? (goTo = handleLeft(this)) : (goTo = handleRight(this));
        break;
      case 38:
      case 40:
        event.preventDefault();
        key == 38 ? (goTo = handleUp(this)) : (goTo = handleDown(this));
        break;
    }
    return goTo;
  };
};

export default handleDesktopKeydown;
