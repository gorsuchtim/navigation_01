"use strict";

// Import Satellite

const handleAdobeTrackZipCode = () => {
  var zipCodeValue = document.querySelector(".meganav__input--searchAdvisor")
    .value;

  var isValidZip = /^\d{5}(-\d{4})?$/.test(zipCodeValue);

  isValidZip
    ? (digitalData.page.pageInfo.zipEntry = zipCodeValue)
    : (digitalData.page.pageInfo.zipEntry = "");

  satellite.track("content:FindByZip");
};
