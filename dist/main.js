/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./index.scss?");

/***/ }),

/***/ "./components/examples/examples.js":
/*!*****************************************!*\
  !*** ./components/examples/examples.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider */ \"../node_modules/tiny-slider/dist/tiny-slider.js\");\n\r\n\r\nconst leftButton = document.querySelector('.left')\r\nconst rightButton = document.querySelector('.right')\r\nconst slider = (0,tiny_slider__WEBPACK_IMPORTED_MODULE_0__.tns)({\r\n    container: '.slider-auto',\r\n    items: 5,\r\n    slideBy: 'page',\r\n    autoplay: false,\r\n    gutter: 20,\r\n    fixedWidth: 400,\r\n    center: true,\r\n    controls: false,\r\n    navPosition: 'bottom',\r\n    autoplayButtonOutput: false,\r\n    autoplayButton: false,\r\n    autoplayHoverPause: true,\r\n    speed: 1000,\r\n    autoplayTimeout: 7000\r\n  });\r\n\r\nleftButton.addEventListener('click', function leftSlide() {\r\n    slider.goTo(\"prev\")\r\n})\r\n\r\nrightButton.addEventListener('click', function rightSlide() {\r\n    slider.goTo(\"next\")\r\n})\r\n\r\nconsole.log(leftButton);\r\n\r\n\n\n//# sourceURL=webpack:///./components/examples/examples.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./index.scss\");\n/* harmony import */ var _components_examples_examples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/examples/examples */ \"./components/examples/examples.js\");\n/* harmony import */ var _scripts_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/header */ \"./scripts/header.js\");\n/* harmony import */ var _scripts_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_header__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./scripts/header.js":
/*!***************************!*\
  !*** ./scripts/header.js ***!
  \***************************/
/***/ (() => {

eval("const burger = document.querySelector('.container-burger')\r\nconst passive = document.querySelector('.navigation')\r\n\r\nburger.addEventListener('click', function () {\r\n    passive.classList.toggle('navigation-active')\r\n    burger.classList.toggle('change')\r\n})\r\n\r\nconst border = document.querySelectorAll('.border')\r\n\r\nborder.forEach(function (border) {\r\n    burger.addEventListener('click', function () {\r\n        border.classList.remove('border')\r\n    })\r\n})\r\n\r\nconst link = document.querySelectorAll('.class-link')\r\n\r\nlink.forEach(function(link){\r\n    link.addEventListener('click',function(){\r\n        passive.classList.remove('navigation-active')\r\n        burger.classList.remove('change')\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack:///./scripts/header.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_tiny-slider_dist_tiny-slider_js"], () => (__webpack_exec__("./index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);