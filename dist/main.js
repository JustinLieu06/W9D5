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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(htmlArr){\n    this.htmlArr = htmlArr;\n  }\n\n  \n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nWindow.prototype.$1 = function(arg) {\n  if (typeof arg === \"string\"){\n    return new DOMNodeCollection(Array.from(document.querySelectorAll(arg)));\n  }\n  else if (arg instanceof HTMLElement) {\n    return new DOMNodeCollection([arg]);\n  }\n  else {\n    return \"error\";\n  }\n};\n\nDOMNodeCollection.prototype.html = function(str){\n  if (str !== undefined) {\n    this.htmlArr.forEach( node => {\n      node.innerHTML = str;\n    });\n    return this.htmlArr;\n  } else {\n    return this.htmlArr[0].innerHTML;\n  }\n};\n\nDOMNodeCollection.prototype.empty = function(){\n  this.htmlArr.forEach( node => {\n    node.innerHTML = \"\";\n  });\n  return this.htmlArr;\n};\n\nDOMNodeCollection.prototype.append = function(arg){\n  let potentialHTML = (new DOMParser().parseFromString(arg, \"text/xml\")).firstChild;\n  if (arg instanceof DOMNodeCollection) {\n    this.htmlArr.forEach( node => {\n      arg.htmlArr.forEach( node2 => {\n        node.appendChild(node2);\n      });\n    });\n  } \n  \n  else if (!arg.includes(\"<\")) {\n    let domCSS = $1(arg);\n    this.htmlArr.forEach( node => {\n      domCSS.htmlArr.forEach( node2 => {\n        node.appendChild(node2);\n      });\n    });\n  }\n\n  else {\n    this.htmlArr.forEach( node => {\n      node.appendChild(potentialHTML);\n    });\n  }\n};\n\nDOMNodeCollection.prototype.attr = function(attribute, newVal){\n  if (newVal === undefined) {\n    return this.htmlArr[0].getAttribute(attribute);\n  }\n  else {\n    return this.htmlArr[0].setAttribute(attribute, newVal);\n  }\n};\n\n\nDOMNodeCollection.prototype.addClass = function(newClass) {\n  this.htmlArr.forEach( node => {\n    node.className += (\" \" + newClass);\n  });\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });