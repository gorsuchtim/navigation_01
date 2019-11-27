"use strict";

import "../Utilities/Utilities";
import "../Utilities/BuildElement";

const setCurrentSections = dataSections => {
  var currentButtons = [];
  dataSections.forEach(dataSectionToMatch => {
    var meganav = document.querySelector(".meganav");
    var navButtons = toArray(meganav.querySelectorAll("[data-section"));

    navButtons.forEach(navButton => {
      if (navButton.getAttribute("data-section") == dataSectionToMatch) {
        navButton.classList.add("current--section");
        elementFactory(navButton);
        currentButtons.push(navButton);
      }
    });
  });
};

const splicePage = pathSections => {
  var page;
  var updatedPathSections = pathSections.filter(pathSection => {
    if (pathSection.includes(".htm") == false) {
      return true; // filter out the index that contains.htm
    } else {
      page = pathSection;
      page = page.substring(0, page.lastIndexOf(".htm"));
    }
  });
  return [updatedPathSections, page];
};

const getUrlPath = () => {
  /* Use in development
  var currentURL = wondow.location.href;
  var paths = currentURL.substring(
    currentURL.lastIndexOf(".com") + 5,
    currentURL.length
  );

  var pathSections = paths.split("/")
  return pathSections;
  */

  /* Use in development/testing */
  var testPath = ["why-wells-fargo", "products-services", "investments.htm"];
  return testPath;
};

const SetActiveStates = () => {
  setCurrentPage(
    setCurrentSections(splicePage(getUrlPath())[0]),
    splicePage(getUrlPath())[1]
  );
};

export default SetActiveStates;
