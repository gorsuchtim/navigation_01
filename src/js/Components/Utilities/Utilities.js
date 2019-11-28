"use strict";

const Utilities = {
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
