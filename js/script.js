"use strict";

/**
 * add even on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggel
 */

const navbar = document.querySelector("[data-navbar]");
const navtogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navtogglers, "click", toggleNavbar);

/**
 * active header & back to top when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const BackToTop = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    BackToTop.classList.add("active");
  } else {
    header.classList.remove("active");
    BackToTop.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElemOnScroll);

/**
 * filter functionality
 */

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItem = document.querySelectorAll("[data-filter]");

let lastClikedBtn = filterBtn[0];

const filter = function () {
  lastClikedBtn.classList.remove("active");
  this.classList.add("active");
  lastClikedBtn = this;

  for (let i = 0; i < filterItem.length; i++) {
    if (filterItem[i].dataset.filter === this.dataset.filterBtn) {
      filterItem[i].style.display = "block";
    } else {
      filterItem[i].style.display = "none";
    }
  }
};

addEventOnElem(filterBtn, "click", filter);
