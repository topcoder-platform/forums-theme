/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@vanillaforums/theme-boilerplate/src/js/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vanillaforums/theme-boilerplate/src/js/index.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobileNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobileNavigation */ \"./node_modules/@vanillaforums/theme-boilerplate/src/js/mobileNavigation.js\");\n/*!\n * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>\n * @copyright 2009-2018 Vanilla Forums Inc.\n * @license GPL-2.0-only\n */\n\n\n\n$(function () {\n  if (!window.gdn.getMeta(\"featureFlags.DataDrivenTitleBar.Enabled\", false)) {\n    Object(_mobileNavigation__WEBPACK_IMPORTED_MODULE_0__[\"setupMobileNavigation\"])();\n  }\n\n  $(\"select\").wrap('<div class=\"SelectWrapper\"></div>');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhbmlsbGFmb3J1bXMvdGhlbWUtYm9pbGVycGxhdGUvc3JjL2pzL2luZGV4LmpzP2UzMWIiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsImdkbiIsImdldE1ldGEiLCJzZXR1cE1vYmlsZU5hdmlnYXRpb24iLCJ3cmFwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQTs7Ozs7QUFLQTs7QUFFQTtBQUVBQSxDQUFDLENBQUMsWUFBTTtBQUNKLE1BQUksQ0FBQ0MsTUFBTSxDQUFDQyxHQUFQLENBQVdDLE9BQVgsQ0FBbUIseUNBQW5CLEVBQThELEtBQTlELENBQUwsRUFBMkU7QUFDdkVDLElBQUEsK0VBQXFCO0FBQ3hCOztBQUNESixHQUFDLENBQUMsUUFBRCxDQUFELENBQVlLLElBQVosQ0FBaUIsbUNBQWpCO0FBQ0gsQ0FMQSxDQUFEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0B2YW5pbGxhZm9ydW1zL3RoZW1lLWJvaWxlcnBsYXRlL3NyYy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGF1dGhvciBJc2lzIChpZ3JhemlhdHRvKSBHcmF6aWF0dG8gPGlzaXMuZ0B2YW5pbGxhZm9ydW1zLmNvbT5cbiAqIEBjb3B5cmlnaHQgMjAwOS0yMDE4IFZhbmlsbGEgRm9ydW1zIEluYy5cbiAqIEBsaWNlbnNlIEdQTC0yLjAtb25seVxuICovXG5cInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgeyBzZXR1cE1vYmlsZU5hdmlnYXRpb24gfSBmcm9tIFwiLi9tb2JpbGVOYXZpZ2F0aW9uXCI7XG5cbiQoKCkgPT4ge1xuICAgIGlmICghd2luZG93Lmdkbi5nZXRNZXRhKFwiZmVhdHVyZUZsYWdzLkRhdGFEcml2ZW5UaXRsZUJhci5FbmFibGVkXCIsIGZhbHNlKSkge1xuICAgICAgICBzZXR1cE1vYmlsZU5hdmlnYXRpb24oKTtcbiAgICB9XG4gICAgJChcInNlbGVjdFwiKS53cmFwKCc8ZGl2IGNsYXNzPVwiU2VsZWN0V3JhcHBlclwiPjwvZGl2PicpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@vanillaforums/theme-boilerplate/src/js/index.js\n");

/***/ }),

/***/ "./node_modules/@vanillaforums/theme-boilerplate/src/js/mobileNavigation.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vanillaforums/theme-boilerplate/src/js/mobileNavigation.js ***!
  \**********************************************************************************/
/*! exports provided: setupMobileNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setupMobileNavigation\", function() { return setupMobileNavigation; });\n/*!\n * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>\n * @copyright 2009-2018 Vanilla Forums Inc.\n * @license GPL-2.0-only\n */\n\n\nvar INIT_CLASS = \"needsInitialization\";\nvar CALC_HEIGHT_ATTR = \"data-height\";\nvar COLLAPSED_HEIGHT = \"0px\";\n/**\n * @param {HTMLElement} element\n */\n\nfunction collapseElement(element) {\n  element.style.height = COLLAPSED_HEIGHT;\n}\n/**\n *\n * @param {HTMLElement} element\n */\n\n\nfunction expandElement(element) {\n  element.style.height = element.getAttribute(CALC_HEIGHT_ATTR) + \"px\";\n}\n/**\n * Get the calculated height of an element and\n *\n * @param {HTMLElement} element\n */\n\n\nfunction prepareElement(element) {\n  if (!!element && element.classList) {\n    element.classList.add(INIT_CLASS);\n    element.style.height = \"auto\";\n    var calcedHeight = element.getBoundingClientRect().height; // Visual hide the element.`\n\n    element.setAttribute(CALC_HEIGHT_ATTR, calcedHeight.toString());\n    collapseElement(element);\n    element.classList.remove(INIT_CLASS);\n  }\n}\n\nfunction setupMobileNavigation() {\n  var menuButton = document.querySelector(\"#menu-button\");\n  /** @type {HTMLElement} */\n\n  var navdrawer = document.querySelector(\".js-nav\");\n  /** @type {HTMLElement} */\n\n  var mobileMebox = document.querySelector(\".js-mobileMebox\");\n  var mobileMeBoxBtn = document.querySelector(\".mobileMeBox-button\");\n  var mobileMeboxBtnClose = document.querySelector(\".mobileMebox-buttonClose\");\n  var mainHeader = document.querySelector(\"#MainHeader\");\n  /**\n   * @param {HTMLElement} element\n   */\n\n  function toggleElement(element) {\n    if (element.style.height === COLLAPSED_HEIGHT) {\n      expandElement(element);\n    } else {\n      collapseElement(element);\n    }\n  } // Calculate the values initially.\n\n\n  prepareElement(mobileMebox);\n  prepareElement(navdrawer); // Update the calculated values on resize.\n\n  window.addEventListener(\"resize\", function () {\n    requestAnimationFrame(function () {\n      prepareElement(mobileMebox);\n      prepareElement(navdrawer);\n    });\n  });\n\n  if (menuButton) {\n    menuButton.addEventListener(\"click\", function () {\n      menuButton.classList.toggle(\"isToggled\");\n      mainHeader.classList.toggle(\"hasOpenNavigation\");\n      collapseElement(mobileMebox);\n      toggleElement(navdrawer);\n    });\n  }\n\n  mobileMeBoxBtn && mobileMeBoxBtn.addEventListener(\"click\", function () {\n    mobileMeBoxBtn.classList.toggle(\"isToggled\");\n    mainHeader.classList.remove(\"hasOpenNavigation\");\n    menuButton.classList.remove(\"isToggled\");\n    collapseElement(navdrawer);\n    toggleElement(mobileMebox);\n  });\n  mobileMeboxBtnClose && mobileMeboxBtnClose.addEventListener(\"click\", function () {\n    collapseElement(mobileMebox);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhbmlsbGFmb3J1bXMvdGhlbWUtYm9pbGVycGxhdGUvc3JjL2pzL21vYmlsZU5hdmlnYXRpb24uanM/ZDk1YiJdLCJuYW1lcyI6WyJJTklUX0NMQVNTIiwiQ0FMQ19IRUlHSFRfQVRUUiIsIkNPTExBUFNFRF9IRUlHSFQiLCJjb2xsYXBzZUVsZW1lbnQiLCJlbGVtZW50Iiwic3R5bGUiLCJoZWlnaHQiLCJleHBhbmRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwicHJlcGFyZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYWxjZWRIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsInJlbW92ZSIsInNldHVwTW9iaWxlTmF2aWdhdGlvbiIsIm1lbnVCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZkcmF3ZXIiLCJtb2JpbGVNZWJveCIsIm1vYmlsZU1lQm94QnRuIiwibW9iaWxlTWVib3hCdG5DbG9zZSIsIm1haW5IZWFkZXIiLCJ0b2dnbGVFbGVtZW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQUE7Ozs7O0FBTUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLHFCQUFuQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGFBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsS0FBekI7QUFDQTs7OztBQUdBLFNBQVNDLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQWtDO0FBQzlCQSxTQUFPLENBQUNDLEtBQVIsQ0FBY0MsTUFBZCxHQUF1QkosZ0JBQXZCO0FBQ0g7QUFFRDs7Ozs7O0FBSUEsU0FBU0ssYUFBVCxDQUF1QkgsT0FBdkIsRUFBZ0M7QUFDNUJBLFNBQU8sQ0FBQ0MsS0FBUixDQUFjQyxNQUFkLEdBQXVCRixPQUFPLENBQUNJLFlBQVIs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SSxnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOEMsWUFBTTtBQUN2RXpCLG1CQUFlLENBQUNtQixXQUFELENBQWY7QUFDSCxHQUZzQixDQUF2QjtBQUdIIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0B2YW5pbGxhZm9ydW1zL3RoZW1lLWJvaWxlcnBsYXRlL3NyYy9qcy9tb2JpbGVOYXZpZ2F0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAYXV0aG9yIElzaXMgKGlncmF6aWF0dG8pIEdyYXppYXR0byA8aXNpcy5nQHZhbmlsbGFmb3J1bXMuY29tPlxuICogQGNvcHlyaWdodCAyMDA5LTIwMTggVmFuaWxsYSBGb3J1bXMgSW5jLlxuICogQGxpY2Vuc2UgR1BMLTIuMC1vbmx5XG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCJcbmNvbnN0IElOSVRfQ0xBU1MgPSBcIm5lZWRzSW5pdGlhbGl6YXRpb25cIjtcbmNvbnN0IENBTENfSEVJR0hUX0FUVFIgPSBcImRhdGEtaGVpZ2h0XCI7XG5jb25zdCBDT0xMQVBTRURfSEVJR0hUID0gXCIwcHhcIjtcbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiBjb2xsYXBzZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gQ09MTEFQU0VEX0hFSUdIVDtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiBleHBhbmRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKENBTENfSEVJR0hUX0FUVFIpICsgXCJweFwiO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY2FsY3VsYXRlZCBoZWlnaHQgb2YgYW4gZWxlbWVudCBhbmRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHByZXBhcmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoISFlbGVtZW50ICYmIGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChJTklUX0NMQVNTKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgY29uc3QgY2FsY2VkSGVpZ2h0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAgICAgLy8gVmlzdWFsIGhpZGUgdGhlIGVsZW1lbnQuYFxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShDQUxDX0hFSUdIVF9BVFRSLCBjYWxjZWRIZWlnaHQudG9TdHJpbmcoKSk7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKElOSVRfQ0xBU1MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTW9iaWxlTmF2aWdhdGlvbigpIHtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgIGNvbnN0IG5hdmRyYXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbmF2XCIpO1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgY29uc3QgbW9iaWxlTWVib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vYmlsZU1lYm94XCIpO1xuICAgIGNvbnN0IG1vYmlsZU1lQm94QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGVNZUJveC1idXR0b25cIik7XG4gICAgY29uc3QgbW9iaWxlTWVib3hCdG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlTWVib3gtYnV0dG9uQ2xvc2VcIik7XG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTWFpbkhlYWRlclwiKTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0b2dnbGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID09PSBDT0xMQVBTRURfSEVJR0hUKSB7XG4gICAgICAgICAgICBleHBhbmRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGFwc2VFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSB2YWx1ZXMgaW5pdGlhbGx5LlxuICAgIHByZXBhcmVFbGVtZW50KG1vYmlsZU1lYm94KTtcbiAgICBwcmVwYXJlRWxlbWVudChuYXZkcmF3ZXIpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjYWxjdWxhdGVkIHZhbHVlcyBvbiByZXNpemUuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgcHJlcGFyZUVsZW1lbnQobW9iaWxlTWVib3gpO1xuICAgICAgICAgICAgcHJlcGFyZUVsZW1lbnQobmF2ZHJhd2VyKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIGlmIChtZW51QnV0dG9uKSB7XG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImlzVG9nZ2xlZFwiKTtcbiAgICAgICAgICAgIG1haW5IZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhhc09wZW5OYXZpZ2F0aW9uXCIpO1xuICAgICAgICAgICAgY29sbGFwc2VFbGVtZW50KG1vYmlsZU1lYm94KTtcbiAgICAgICAgICAgIHRvZ2dsZUVsZW1lbnQobmF2ZHJhd2VyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW9iaWxlTWVCb3hCdG4gJiYgbW9iaWxlTWVCb3hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbW9iaWxlTWVCb3hCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImlzVG9nZ2xlZFwiKTtcbiAgICAgICAgbWFpbkhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzT3Blbk5hdmlnYXRpb25cIik7XG4gICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImlzVG9nZ2xlZFwiKTtcbiAgICAgICAgY29sbGFwc2VFbGVtZW50KG5hdmRyYXdlcik7XG4gICAgICAgIHRvZ2dsZUVsZW1lbnQobW9iaWxlTWVib3gpO1xuICAgIH0pO1xuXG4gICAgbW9iaWxlTWVib3hCdG5DbG9zZSAmJiBtb2JpbGVNZWJveEJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbGxhcHNlRWxlbWVudChtb2JpbGVNZWJveCk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@vanillaforums/theme-boilerplate/src/js/mobileNavigation.js\n");

/***/ }),

/***/ "./src/js/body.js":
/*!************************!*\
  !*** ./src/js/body.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(document).ready(function () {\n  var pathname = window.location.pathname;\n\n  if (pathname !== '/') {\n    $('body').removeClass('index');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYm9keS5qcz81MzY4Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFHQUEsQ0FBQyxDQUFFQyxRQUFGLENBQUQsQ0FBY0MsS0FBZCxDQUFvQixZQUFXO0FBQzdCLE1BQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCRixRQUEvQjs7QUFDQSxNQUFJQSxRQUFRLEtBQUssR0FBakIsRUFBc0I7QUFDcEJILEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVU0sV0FBVixDQUFzQixPQUF0QjtBQUNEO0FBQ0YsQ0FMRCIsImZpbGUiOiIuL3NyYy9qcy9ib2R5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIGlmIChwYXRobmFtZSAhPT0gJy8nKSB7XG4gICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpbmRleCcpO1xuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/body.js\n");

/***/ }),

/***/ "./src/js/categories.js":
/*!******************************!*\
  !*** ./src/js/categories.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(document).ready(function () {\n  $(\"ul.DataList.CategoryList li.Item:not(.CategoryHeading) .ItemContent.Category\").each(function (index) {\n    var originalMeta = $(this).find('.Meta');\n    $(this).append(originalMeta.clone().addClass('view-comment-container hide-desktop'));\n    originalMeta.addClass('status-container');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY2F0ZWdvcmllcy5qcz9hNzZlIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiZWFjaCIsImluZGV4Iiwib3JpZ2luYWxNZXRhIiwiZmluZCIsImFwcGVuZCIsImNsb25lIiwiYWRkQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBOztBQUdBQSxDQUFDLENBQUVDLFFBQUYsQ0FBRCxDQUFjQyxLQUFkLENBQW9CLFlBQVc7QUFDN0JGLEdBQUMsQ0FBRSw4RUFBRixDQUFELENBQW9GRyxJQUFwRixDQUF5RixVQUFVQyxLQUFWLEVBQWtCO0FBQ3pHLFFBQUlDLFlBQVksR0FBR0wsQ0FBQyxDQUFFLElBQUYsQ0FBRCxDQUFVTSxJQUFWLENBQWUsT0FBZixDQUFuQjtBQUNBTixLQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLE1BQVIsQ0FBZUYsWUFBWSxDQUFDRyxLQUFiLEdBQXFCQyxRQUFyQixDQUE4QixxQ0FBOUIsQ0FBZjtBQUNBSixnQkFBWSxDQUFDSSxRQUFiLENBQXNCLGtCQUF0QjtBQUNELEdBSkQ7QUFLRCxDQU5EIiwiZmlsZSI6Ii4vc3JjL2pzL2NhdGVnb3JpZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5cbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICQoIFwidWwuRGF0YUxpc3QuQ2F0ZWdvcnlMaXN0IGxpLkl0ZW06bm90KC5DYXRlZ29yeUhlYWRpbmcpIC5JdGVtQ29udGVudC5DYXRlZ29yeVwiICkuZWFjaChmdW5jdGlvbiggaW5kZXggKSB7XG4gICAgdmFyIG9yaWdpbmFsTWV0YSA9ICQoIHRoaXMgKS5maW5kKCcuTWV0YScpO1xuICAgICQodGhpcykuYXBwZW5kKG9yaWdpbmFsTWV0YS5jbG9uZSgpLmFkZENsYXNzKCd2aWV3LWNvbW1lbnQtY29udGFpbmVyIGhpZGUtZGVza3RvcCcpKTtcbiAgICBvcmlnaW5hbE1ldGEuYWRkQ2xhc3MoJ3N0YXR1cy1jb250YWluZXInKTtcbiAgfSk7XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/categories.js\n");

/***/ }),

/***/ "./src/js/discussions.js":
/*!*******************************!*\
  !*** ./src/js/discussions.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(document).ready(function () {\n  $(\"ul.DataList.Discussions li.Item .ItemContent.Discussion\").each(function (index) {\n    var originalMeta = $(this).find('.Meta.Meta-Discussion');\n    $(this).append(originalMeta.clone().addClass('view-comment-container hide-desktop'));\n    $(this).prepend(originalMeta.clone().addClass('tag-container hide-desktop'));\n    originalMeta.addClass('status-container');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZGlzY3Vzc2lvbnMuanM/YmE0OCJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVhY2giLCJpbmRleCIsIm9yaWdpbmFsTWV0YSIsImZpbmQiLCJhcHBlbmQiLCJjbG9uZSIsImFkZENsYXNzIiwicHJlcGVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBR0FBLENBQUMsQ0FBRUMsUUFBRixDQUFELENBQWNDLEtBQWQsQ0FBb0IsWUFBVztBQUM3QkYsR0FBQyxDQUFFLHlEQUFGLENBQUQsQ0FBK0RHLElBQS9ELENBQW9FLFVBQVVDLEtBQVYsRUFBa0I7QUFDcEYsUUFBSUMsWUFBWSxHQUFHTCxDQUFDLENBQUUsSUFBRixDQUFELENBQVVNLElBQVYsQ0FBZSx1QkFBZixDQUFuQjtBQUNBTixLQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLE1BQVIsQ0FBZUYsWUFBWSxDQUFDRyxLQUFiLEdBQXFCQyxRQUFyQixDQUE4QixxQ0FBOUIsQ0FBZjtBQUNBVCxLQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLE9BQVIsQ0FBZ0JMLFlBQVksQ0FBQ0csS0FBYixHQUFxQkMsUUFBckIsQ0FBOEIsNEJBQTlCLENBQWhCO0FBQ0FKLGdCQUFZLENBQUNJLFFBQWIsQ0FBc0Isa0JBQXRCO0FBQ0QsR0FMRDtBQU1ELENBUEQiLCJmaWxlIjoiLi9zcmMvanMvZGlzY3Vzc2lvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5cbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICQoIFwidWwuRGF0YUxpc3QuRGlzY3Vzc2lvbnMgbGkuSXRlbSAuSXRlbUNvbnRlbnQuRGlzY3Vzc2lvblwiICkuZWFjaChmdW5jdGlvbiggaW5kZXggKSB7XG4gICAgdmFyIG9yaWdpbmFsTWV0YSA9ICQoIHRoaXMgKS5maW5kKCcuTWV0YS5NZXRhLURpc2N1c3Npb24nKTtcbiAgICAkKHRoaXMpLmFwcGVuZChvcmlnaW5hbE1ldGEuY2xvbmUoKS5hZGRDbGFzcygndmlldy1jb21tZW50LWNvbnRhaW5lciBoaWRlLWRlc2t0b3AnKSk7XG4gICAgJCh0aGlzKS5wcmVwZW5kKG9yaWdpbmFsTWV0YS5jbG9uZSgpLmFkZENsYXNzKCd0YWctY29udGFpbmVyIGhpZGUtZGVza3RvcCcpKTtcbiAgICBvcmlnaW5hbE1ldGEuYWRkQ2xhc3MoJ3N0YXR1cy1jb250YWluZXInKTtcbiAgfSk7XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/discussions.js\n");

/***/ }),

/***/ "./src/js/formsFields.js":
/*!*******************************!*\
  !*** ./src/js/formsFields.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(document).ready(function () {\n  $('label.radio-inline').each(function (index) {\n    var checkmark = $('<span class=\"checkmark\"></span>');\n    $(this).append(checkmark);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZm9ybXNGaWVsZHMuanM/YjgxOSJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVhY2giLCJpbmRleCIsImNoZWNrbWFyayIsImFwcGVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUM1QkYsR0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JHLElBQXhCLENBQTZCLFVBQVVDLEtBQVYsRUFBaUI7QUFDNUMsUUFBSUMsU0FBUyxHQUFHTCxDQUFDLENBQUMsaUNBQUQsQ0FBakI7QUFDQUEsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxNQUFSLENBQWVELFNBQWY7QUFDRCxHQUhEO0FBSUQsQ0FMRCIsImZpbGUiOiIuL3NyYy9qcy9mb3Jtc0ZpZWxkcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCdsYWJlbC5yYWRpby1pbmxpbmUnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciBjaGVja21hcmsgPSAkKCc8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj4nKTtcbiAgICAkKHRoaXMpLmFwcGVuZChjaGVja21hcmspO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/formsFields.js\n");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>\n * @copyright 2009-2018 Vanilla Forums Inc.\n * @license GPL-2.0-only\n */\n\n\n$(document).ready(function () {\n  var frameHeader = $('.Frame-header');\n\n  var resetSelectedMenu = function resetSelectedMenu() {\n    $(\".Header-primary-item, .Header-secondary-item, .Header-Primary-Sub-Mobile a\").removeClass('selected');\n    $(\".Header-Second-Menu, .Header-Second-Menu-mobile\").addClass('hide').removeClass('open');\n    frameHeader.toggleClass('toggle-mobile-expand');\n    frameHeader.toggleClass('toggle-mobile-close');\n    $(\".Header-Primary-more-content-container\").removeClass('open');\n  };\n\n  $(\".primary-item-explore\").click(function () {\n    resetSelectedMenu();\n    $(\".primary-item-explore\").addClass('selected');\n    $(\".Header-Second-Menu.Explore-Menu, .Header-Second-Menu-mobile.Explore-Menu\").removeClass('hide');\n  });\n  $(\".primary-item-tracks\").click(function () {\n    resetSelectedMenu();\n    $(\".primary-item-tracks\").addClass('selected');\n    $(\".Header-Second-Menu.Tracks-Menu, .Header-Second-Menu-mobile.Tracks-Menu\").removeClass('hide');\n  });\n  $(\".primary-item-compete\").click(function () {\n    resetSelectedMenu();\n    $(\".primary-item-compete\").addClass('selected');\n    $(\".Header-Second-Menu.Compete-Menu, .Header-Second-Menu-mobile.Compete-Menu\").removeClass('hide');\n  });\n  $(\".primary-item-community\").click(function () {\n    resetSelectedMenu();\n    $(this).addClass('selected');\n    $(\".Header-Second-Menu.Community-Menu\").removeClass('hide');\n  });\n  $(\".menu-icon-mobile\").click(function () {\n    frameHeader.toggleClass('toggle-mobile-expand');\n    frameHeader.toggleClass('toggle-mobile-close');\n  });\n  $(\".Second-Menu-Toggle-Button, .primary-item-more\").click(function () {\n    $(this).parent().toggleClass('open');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaGVhZGVyLmpzP2NhNzUiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJmcmFtZUhlYWRlciIsInJlc2V0U2VsZWN0ZWRNZW51IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInRvZ2dsZUNsYXNzIiwiY2xpY2siLCJwYXJlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOztBQUdBQSxDQUFDLENBQUVDLFFBQUYsQ0FBRCxDQUFjQyxLQUFkLENBQW9CLFlBQVc7QUFDN0IsTUFBSUMsV0FBVyxHQUFHSCxDQUFDLENBQUMsZUFBRCxDQUFuQjs7QUFFQSxNQUFJSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVc7QUFDakNKLEtBQUMsQ0FBQyw0RUFBRCxDQUFELENBQWdGSyxXQUFoRixDQUE0RixVQUE1RjtBQUNBTCxLQUFDLENBQUMsaURBQUQsQ0FBRCxDQUFxRE0sUUFBckQsQ0FBOEQsTUFBOUQsRUFBc0VELFdBQXRFLENBQWtGLE1BQWxGO0FBQ0FGLGVBQVcsQ0FBQ0ksV0FBWixDQUF3QixzQkFBeEI7QUFDQUosZUFBVyxDQUFDSSxXQUFaLENBQXdCLHFCQUF4QjtBQUNBUCxLQUFDLENBQUMsd0NBQUQsQ0FBRCxDQUE0Q0ssV0FBNUMsQ0FBd0QsTUFBeEQ7QUFFRCxHQVBEOztBQVNBTCxHQUFDLENBQUUsdUJBQUYsQ0FBRCxDQUE2QlEsS0FBN0IsQ0FBbUMsWUFBVztBQUM1Q0oscUJBQWlCO0FBQ2pCSixLQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQk0sUUFBM0IsQ0FBb0MsVUFBcEM7QUFDQU4sS0FBQyxDQUFDLDJFQUFELENBQUQsQ0FBK0VLLFdBQS9FLENBQTJGLE1BQTNGO0FBQ0QsR0FKRDtBQU1BTCxHQUFDLENBQUUsc0JBQUYsQ0FBRCxDQUE0QlEsS0FBNUIsQ0FBa0MsWUFBVztBQUMzQ0oscUJBQWlCO0FBQ2pCSixLQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQk0sUUFBMUIsQ0FBbUMsVUFBbkM7QUFDQU4sS0FBQyxDQUFDLHlFQUFELENBQUQsQ0FBNkVLLFdBQTdFLENBQXlGLE1BQXpGO0FBQ0QsR0FKRDtBQU1BTCxHQUFDLENBQUUsdUJBQUYsQ0FBRCxDQUE2QlEsS0FBN0IsQ0FBbUMsWUFBVztBQUM1Q0oscUJBQWlCO0FBQ2pCSixLQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQk0sUUFBM0IsQ0FBb0MsVUFBcEM7QUFDQU4sS0FBQyxDQUFDLDJFQUFELENBQUQsQ0FBK0VLLFdBQS9FLENBQTJGLE1BQTNGO0FBQ0QsR0FKRDtBQU1BTCxHQUFDLENBQUUseUJBQUYsQ0FBRCxDQUErQlEsS0FBL0IsQ0FBcUMsWUFBVztBQUM5Q0oscUJBQWlCO0FBQ2pCSixLQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLFFBQVIsQ0FBaUIsVUFBakI7QUFDQU4sS0FBQyxDQUFDLG9DQUFELENBQUQsQ0FBd0NLLFdBQXhDLENBQW9ELE1BQXBEO0FBQ0QsR0FKRDtBQU9BTCxHQUFDLENBQUUsbUJBQUYsQ0FBRCxDQUF5QlEsS0FBekIsQ0FBK0IsWUFBVztBQUN4Q0wsZUFBVyxDQUFDSSxXQUFaLENBQXdCLHNCQUF4QjtBQUNBSixlQUFXLENBQUNJLFdBQVosQ0FBd0IscUJBQXhCO0FBQ0QsR0FIRDtBQUlBUCxHQUFDLENBQUUsZ0RBQUYsQ0FBRCxDQUFzRFEsS0FBdEQsQ0FBNEQsWUFBVztBQUNyRVIsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxNQUFSLEdBQWlCRixXQUFqQixDQUE2QixNQUE3QjtBQUNELEdBRkQ7QUFHRCxDQTVDRCIsImZpbGUiOiIuL3NyYy9qcy9oZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEBhdXRob3IgSXNpcyAoaWdyYXppYXR0bykgR3JhemlhdHRvIDxpc2lzLmdAdmFuaWxsYWZvcnVtcy5jb20+XG4gKiBAY29weXJpZ2h0IDIwMDktMjAxOCBWYW5pbGxhIEZvcnVtcyBJbmMuXG4gKiBAbGljZW5zZSBHUEwtMi4wLW9ubHlcbiAqL1xuXCJ1c2Ugc3RyaWN0XCJcblxuXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuICB2YXIgZnJhbWVIZWFkZXIgPSAkKCcuRnJhbWUtaGVhZGVyJyk7XG5cbiAgdmFyIHJlc2V0U2VsZWN0ZWRNZW51ID0gZnVuY3Rpb24oKSB7XG4gICAgJChcIi5IZWFkZXItcHJpbWFyeS1pdGVtLCAuSGVhZGVyLXNlY29uZGFyeS1pdGVtLCAuSGVhZGVyLVByaW1hcnktU3ViLU1vYmlsZSBhXCIpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICQoXCIuSGVhZGVyLVNlY29uZC1NZW51LCAuSGVhZGVyLVNlY29uZC1NZW51LW1vYmlsZVwiKS5hZGRDbGFzcygnaGlkZScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgZnJhbWVIZWFkZXIudG9nZ2xlQ2xhc3MoJ3RvZ2dsZS1tb2JpbGUtZXhwYW5kJyk7XG4gICAgZnJhbWVIZWFkZXIudG9nZ2xlQ2xhc3MoJ3RvZ2dsZS1tb2JpbGUtY2xvc2UnKTtcbiAgICAkKFwiLkhlYWRlci1QcmltYXJ5LW1vcmUtY29udGVudC1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICB9O1xuXG4gICQoIFwiLnByaW1hcnktaXRlbS1leHBsb3JlXCIgKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICByZXNldFNlbGVjdGVkTWVudSgpO1xuICAgICQoXCIucHJpbWFyeS1pdGVtLWV4cGxvcmVcIikuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgJChcIi5IZWFkZXItU2Vjb25kLU1lbnUuRXhwbG9yZS1NZW51LCAuSGVhZGVyLVNlY29uZC1NZW51LW1vYmlsZS5FeHBsb3JlLU1lbnVcIikucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgfSk7XG5cbiAgJCggXCIucHJpbWFyeS1pdGVtLXRyYWNrc1wiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgcmVzZXRTZWxlY3RlZE1lbnUoKTtcbiAgICAkKFwiLnByaW1hcnktaXRlbS10cmFja3NcIikuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgJChcIi5IZWFkZXItU2Vjb25kLU1lbnUuVHJhY2tzLU1lbnUsIC5IZWFkZXItU2Vjb25kLU1lbnUtbW9iaWxlLlRyYWNrcy1NZW51XCIpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gIH0pO1xuXG4gICQoIFwiLnByaW1hcnktaXRlbS1jb21wZXRlXCIgKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICByZXNldFNlbGVjdGVkTWVudSgpO1xuICAgICQoXCIucHJpbWFyeS1pdGVtLWNvbXBldGVcIikuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgJChcIi5IZWFkZXItU2Vjb25kLU1lbnUuQ29tcGV0ZS1NZW51LCAuSGVhZGVyLVNlY29uZC1NZW51LW1vYmlsZS5Db21wZXRlLU1lbnVcIikucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgfSk7XG5cbiAgJCggXCIucHJpbWFyeS1pdGVtLWNvbW11bml0eVwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgcmVzZXRTZWxlY3RlZE1lbnUoKTtcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdzZWxlY3RlZCcpO1xuICAgICQoXCIuSGVhZGVyLVNlY29uZC1NZW51LkNvbW11bml0eS1NZW51XCIpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gIH0pO1xuXG5cbiAgJCggXCIubWVudS1pY29uLW1vYmlsZVwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZnJhbWVIZWFkZXIudG9nZ2xlQ2xhc3MoJ3RvZ2dsZS1tb2JpbGUtZXhwYW5kJyk7XG4gICAgZnJhbWVIZWFkZXIudG9nZ2xlQ2xhc3MoJ3RvZ2dsZS1tb2JpbGUtY2xvc2UnKTtcbiAgfSk7XG4gICQoIFwiLlNlY29uZC1NZW51LVRvZ2dsZS1CdXR0b24sIC5wcmltYXJ5LWl0ZW0tbW9yZVwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/header.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vanillaforums_theme_boilerplate_src_js_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@vanillaforums/theme-boilerplate/src/js/index */ \"./node_modules/@vanillaforums/theme-boilerplate/src/js/index.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/js/header.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body */ \"./src/js/body.js\");\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_body__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _discussions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discussions */ \"./src/js/discussions.js\");\n/* harmony import */ var _discussions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_discussions__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pageControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageControls */ \"./src/js/pageControls.js\");\n/* harmony import */ var _pageControls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pageControls__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories */ \"./src/js/categories.js\");\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_categories__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _formsFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formsFields */ \"./src/js/formsFields.js\");\n/* harmony import */ var _formsFields__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_formsFields__WEBPACK_IMPORTED_MODULE_6__);\n/*!\n * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>\n * @copyright 2009-2018 Vanilla Forums Inc.\n * @license GPL-2.0-only\n */\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAYXV0aG9yIElzaXMgKGlncmF6aWF0dG8pIEdyYXppYXR0byA8aXNpcy5nQHZhbmlsbGFmb3J1bXMuY29tPlxuICogQGNvcHlyaWdodCAyMDA5LTIwMTggVmFuaWxsYSBGb3J1bXMgSW5jLlxuICogQGxpY2Vuc2UgR1BMLTIuMC1vbmx5XG4gKi9cblxuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL0B2YW5pbGxhZm9ydW1zL3RoZW1lLWJvaWxlcnBsYXRlL3NyYy9qcy9pbmRleFwiO1xuaW1wb3J0IFwiLi9oZWFkZXJcIjtcbmltcG9ydCBcIi4vYm9keVwiO1xuaW1wb3J0IFwiLi9kaXNjdXNzaW9uc1wiO1xuaW1wb3J0IFwiLi9wYWdlQ29udHJvbHNcIjtcbmltcG9ydCBcIi4vY2F0ZWdvcmllc1wiO1xuaW1wb3J0IFwiLi9mb3Jtc0ZpZWxkc1wiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/js/pageControls.js":
/*!********************************!*\
  !*** ./src/js/pageControls.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(document).ready(function () {\n  $(\".Pager.NumberedPager .Next\").html('NEXT');\n  $(\".Pager.NumberedPager .Previous\").html('PREVIOUS');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZUNvbnRyb2xzLmpzPzhjMWIiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJodG1sIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFHQUEsQ0FBQyxDQUFFQyxRQUFGLENBQUQsQ0FBY0MsS0FBZCxDQUFvQixZQUFXO0FBQzdCRixHQUFDLENBQUUsNEJBQUYsQ0FBRCxDQUFrQ0csSUFBbEMsQ0FBdUMsTUFBdkM7QUFDQUgsR0FBQyxDQUFFLGdDQUFGLENBQUQsQ0FBc0NHLElBQXRDLENBQTJDLFVBQTNDO0FBQ0QsQ0FIRCIsImZpbGUiOiIuL3NyYy9qcy9wYWdlQ29udHJvbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5cbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICQoIFwiLlBhZ2VyLk51bWJlcmVkUGFnZXIgLk5leHRcIiApLmh0bWwoJ05FWFQnKTtcbiAgJCggXCIuUGFnZXIuTnVtYmVyZWRQYWdlciAuUHJldmlvdXNcIiApLmh0bWwoJ1BSRVZJT1VTJyk7XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/pageControls.js\n");

/***/ })

/******/ });