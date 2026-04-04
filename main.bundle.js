"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_webpack"] = self["webpackChunkrestaurant_webpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    font-family: 'Inter', sans-serif;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#content {\r\n    max-width: 1000px;\r\n    margin: 40px auto;\r\n}\r\n\r\nbody {\r\n    background-color: #F2F2F2;\r\n    color: #011140;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.navCont {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n    gap: 10px;\r\n    padding: 20px;\r\n}\r\n\r\n.navCont button {\r\n    border: none;\r\n    padding: 10px;\r\n    background-color: transparent;\r\n    color: #011140;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.navCont button:hover {\r\n    color: #0439D9;\r\n    transform: translateY(-1.5px);\r\n}\r\n\r\n.heroCont {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 40px;\r\n    min-height: 70vh;\r\n}\r\n\r\n.heroL {\r\n    flex: 1;\r\n}\r\n\r\n.titleHero {\r\n    animation: softAppear 1s ease-out both;\r\n    font-size: 64px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.description {\r\n    animation: softAppear 1s ease-out 0.4s both;\r\n    font-size: 20px;\r\n    margin-top: 0;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.heroR {\r\n    flex: 1;\r\n}\r\n\r\n.heroR img {\r\n    width: 100%;\r\n    height: 400px;\r\n    object-fit: cover;\r\n    border-radius: 12px;\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.btnHero {\r\n    opacity: 0;\r\n    padding: 15px 30px;\r\n    border: none;\r\n    background-color: #011140;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    border-radius: 12px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    transition: all 0.3s ease;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\r\n    animation: softAppear 1s ease-out 0.8s both;\r\n}\r\n\r\n.btnHero:hover {\r\n    transform: translateY(-1px);\r\n    box-shadow: 0 10px 20px rgba(1, 17, 64, 0.2);\r\n    background-color: #021f70;\r\n}\r\n\r\n@keyframes softAppear {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(30px);\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n.card-text-container {\r\n    padding: 24px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n}\r\n\r\n.menu-grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap: 40px;\r\n}\r\n\r\n.menu-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    background-color: #F4F7FB;\r\n    color: #011140;\r\n    border: none;\r\n    border-radius: 8px;\r\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\r\n    overflow: hidden;\r\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n\r\n.menu-card:hover {\r\n    transform: translateY(-5px);\r\n    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.menu-card img {\r\n    width: 100%;\r\n    height: 200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.menu-card h2 {\r\n    font-size: 16px;\r\n    min-height: 44px;\r\n}\r\n\r\n.menu-card p {\r\n    color: #64748B;\r\n    line-height: 1.5;\r\n    font-size: 14px;\r\n}\r\n\r\n.menu-card span {\r\n    margin-top: auto;\r\n    font-size: 14px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .menu-grid {\r\n        grid-template-columns: 1fr;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-webpack/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n    const contDiv = document.getElementById('content');\r\n    const contactTitle = document.createElement('h3');\r\n    const fakeNumber = document.createElement('p');\r\n    const direction = document.createElement('p');\r\n    contactTitle.className = 'titleCont';\r\n    contactTitle.textContent = 'Juan Alvear'\r\n    direction.className = 'directionCont';\r\n    direction.textContent = 'Avenida Siempre Viva 1992';\r\n    fakeNumber.className = 'numCont';\r\n    fakeNumber.textContent = '+54 9 11 6767-5330';\r\n    contDiv.appendChild(contactTitle);\r\n    contDiv.appendChild(fakeNumber);\r\n    contDiv.appendChild(direction);\r\n}\n\n//# sourceURL=webpack://restaurant-webpack/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _jason_leung_poI7DelFiVA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jason-leung-poI7DelFiVA-unsplash.jpg */ \"./src/jason-leung-poI7DelFiVA-unsplash.jpg\");\n\r\nfunction loadHome() {\r\n    const contDiv = document.getElementById('content');\r\n    const heroCont = document.createElement('div');\r\n    const heroL = document.createElement('div');\r\n    const heroR = document.createElement('div');\r\n    const title = document.createElement('h1');\r\n    const description = document.createElement('p');\r\n    const img = document.createElement('img');\r\n    const btnHero = document.createElement('button');\r\n    img.src = _jason_leung_poI7DelFiVA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    heroCont.classList.add('heroCont');\r\n    heroL.classList.add('heroL');\r\n    heroR.classList.add('heroR');\r\n    btnHero.classList.add('btnHero');\r\n    title.className = 'titleHero';\r\n    title.textContent = 'Proyect Restaurant';\r\n    description.className = 'description';\r\n    description.textContent = 'Descubre la mezcla perfecta entre la tradición gastronómica y el minimalismo moderno. Una experiencia culinaria diseñada para todos tus sentidos.';\r\n    btnHero.textContent = 'Ver Nuestro Menú';\r\n    heroL.appendChild(title);\r\n    heroL.appendChild(description);\r\n    heroL.appendChild(btnHero);\r\n    heroR.appendChild(img);\r\n    heroCont.appendChild(heroL);\r\n    heroCont.appendChild(heroR);\r\n    contDiv.appendChild(heroCont);\r\n}\n\n//# sourceURL=webpack://restaurant-webpack/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.js */ \"./src/nav.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction clearScreen() {\r\n    document.getElementById('content').innerHTML = '';\r\n};\r\n\r\nfunction init() {\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n    (0,_nav_js__WEBPACK_IMPORTED_MODULE_2__.loadNav)();\r\n    loadEvents();\r\n}\r\n\r\nfunction loadEvents() {\r\n    const menuBtn = document.querySelector('.menuBtn');\r\n    menuBtn.addEventListener('click', () => {\r\n        clearScreen();\r\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.loadMenu)();\r\n    });\r\n    const contactBtn = document.querySelector('.contactBtn');\r\n    contactBtn.addEventListener('click', () => {\r\n        clearScreen();\r\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContact)();\r\n    });\r\n    const homeBtn = document.querySelector('.homeBtn');\r\n    homeBtn.addEventListener('click', () => {\r\n        clearScreen();\r\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n    });\r\n    const btnHero = document.querySelector('.btnHero');\r\n    btnHero.addEventListener('click', () => {\r\n        clearScreen();\r\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.loadMenu)();\r\n    })\r\n};\r\n\r\ninit();\n\n//# sourceURL=webpack://restaurant-webpack/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza.jpg */ \"./src/pizza.jpg\");\n/* harmony import */ var _fish_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish.jpg */ \"./src/fish.jpg\");\n/* harmony import */ var _mila_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mila.jpg */ \"./src/mila.jpg\");\n\r\n\r\n\r\n\r\nfunction loadMenu() {\r\n    const contDiv = document.getElementById('content');\r\n    const menuTitle = document.createElement('h1');\r\n    const foods = document.createElement('div');\r\n    foods.classList.add('menu-grid');\r\n    let menuItems = [\r\n        { title: \"Pizza\", description: \"A pizza is a flat, round piece of dough covered with tomatoes, cheese, and other savoury food, and then baked in an oven.\", price: \"$12.000\", image: _pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ },\r\n        { title: \"Fish & Chips\", description: \"Fish and chips is a classic British dish featuring battered, deep-fried white fish (commonly cod or haddock) served with thick-cut fried potatoes (chips)\", price: \"$20.000\", image: _fish_jpg__WEBPACK_IMPORTED_MODULE_1__ },\r\n        { title: \"Milanesa Napolitana con Papas Fritas\", description: \"an iconic Argentine comfort food consisting of a thinly pounded, breaded, and fried steak (or chicken) topped with tomato sauce, ham, and melted mozzarella cheese with fried potatoes (chips)\", price: \"$24.000\", image: _mila_jpg__WEBPACK_IMPORTED_MODULE_2__ },\r\n    ];\r\n    menuItems.forEach((item) => {\r\n        let card = document.createElement('div');\r\n        card.classList.add('menu-card');\r\n\r\n        let cardH2 = document.createElement('h2');\r\n        cardH2.textContent = `${item.title}`;\r\n\r\n        let cardParaph = document.createElement('p');\r\n        cardParaph.textContent = `${item.description}`;\r\n\r\n        let cardSpan = document.createElement('span');\r\n        cardSpan.textContent = `${item.price}`;\r\n\r\n        let cardImage = document.createElement('img');\r\n        cardImage.src = `${item.image}`;\r\n\r\n        card.appendChild(cardImage);\r\n\r\n        let textCont = document.createElement('div');\r\n        textCont.classList.add('card-text-container');\r\n\r\n        textCont.appendChild(cardH2);\r\n        textCont.appendChild(cardParaph);\r\n        textCont.appendChild(cardSpan);\r\n        card.appendChild(textCont);\r\n        foods.appendChild(card);\r\n    });\r\n    menuTitle.className = 'titleMenu';\r\n    menuTitle.textContent = 'Our Menu';\r\n    contDiv.appendChild(menuTitle);\r\n    contDiv.appendChild(foods);\r\n}\n\n//# sourceURL=webpack://restaurant-webpack/./src/menu.js?\n}");

/***/ },

/***/ "./src/nav.js"
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadNav: () => (/* binding */ loadNav)\n/* harmony export */ });\nfunction loadNav() {\r\n    const contDiv = document.getElementById('nav');\r\n    const nav = document.createElement('nav');\r\n    const home = document.createElement('button');\r\n    const menu = document.createElement('button');\r\n    const contact = document.createElement('button');\r\n    nav.classList.add('navCont');\r\n    home.classList.add('homeBtn');\r\n    home.textContent = 'Home';\r\n    menu.classList.add('menuBtn');\r\n    menu.textContent = 'Menu';\r\n    contact.classList.add('contactBtn');\r\n    contact.textContent = 'Contact';\r\n    nav.appendChild(home);\r\n    nav.appendChild(menu);\r\n    nav.appendChild(contact);\r\n    contDiv.appendChild(nav);\r\n};\n\n//# sourceURL=webpack://restaurant-webpack/./src/nav.js?\n}");

/***/ },

/***/ "./src/fish.jpg"
/*!**********************!*\
  !*** ./src/fish.jpg ***!
  \**********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b910ff088e6cd2554d1d.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/fish.jpg?\n}");

/***/ },

/***/ "./src/jason-leung-poI7DelFiVA-unsplash.jpg"
/*!**************************************************!*\
  !*** ./src/jason-leung-poI7DelFiVA-unsplash.jpg ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"45f31b1d441baf7074ec.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/jason-leung-poI7DelFiVA-unsplash.jpg?\n}");

/***/ },

/***/ "./src/mila.jpg"
/*!**********************!*\
  !*** ./src/mila.jpg ***!
  \**********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"855dd7c8914d76df6472.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/mila.jpg?\n}");

/***/ },

/***/ "./src/pizza.jpg"
/*!***********************!*\
  !*** ./src/pizza.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"d3e04f61cd010a300ad8.jpg\";\n\n//# sourceURL=webpack://restaurant-webpack/./src/pizza.jpg?\n}");

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);