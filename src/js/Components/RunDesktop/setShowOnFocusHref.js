"use strict";

const setShowOnFocusHref = element =>
  document.querySelector("#j_username") != null
    ? (element.href = "#j_username")
    : (element.href = "#heading");

export default setShowOnFocusHref;
