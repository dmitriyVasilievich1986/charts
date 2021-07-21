/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_app"] = self["webpackChunkreact_app"] || []).push([["src_layout_LineChart_js"],{

/***/ "./src/layout/LineChart.js":
/*!*********************************!*\
  !*** ./src/layout/LineChart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n\n\nfunction LineChart() {\n  const [data, updateData] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);\n  const [options, updateOptions] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);\n  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(_ => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get('/line_chart').then(data => {\n      // console.log(data.data)\n      updateData(data.data.data);\n      updateOptions(data.data.options);\n    }).catch(err => console.log(err.message));\n  }, []);\n\n  if (data === null) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"h1\", null, \"Wait\");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: \"chart\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_0__.Line, {\n    data: data,\n    options: options\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChart);\n\n//# sourceURL=webpack://react_app/./src/layout/LineChart.js?");

/***/ })

}]);