"use strict";

const Utilities = {
  modifyHiddenState(element, className, directive) {
    if (directive == "add") {
      element.classLIst.add(className);
      element.setAttribute("aria-hidden", "true");
    } else {
      element.classList.remove(className);
      element.setAttribute("aria-hidden", "false");
    }
  },
  toArray(values) {
    if (Array.from) {
      return Array.from(values);
    } else {
      var newArray = [];
      for (var i = 0; i < values.length; i++) {
        newArray.push(values[i]);
      }
      return newArray;
    }
  }
};

export default Utilities;
