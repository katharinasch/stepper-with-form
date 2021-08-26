/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormContext\": function() { return /* binding */ FormContext; },\n/* harmony export */   \"FormProvider\": function() { return /* binding */ FormProvider; },\n/* harmony export */   \"useFormData\": function() { return /* binding */ useFormData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/katharinaschreiber/Desktop/stepper-with-form/context/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst FormContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction FormProvider({\n  children\n}) {\n  var _router$query$step;\n\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n  const {\n    0: formStep,\n    1: setFormStep\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((_router$query$step = router.query.step) !== null && _router$query$step !== void 0 ? _router$query$step : 0);\n  const {\n    0: steps,\n    1: setStepsData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{\n    name: 'Vertrag',\n    status: 'current'\n  }, {\n    name: 'Dateneingabe',\n    status: 'upcoming'\n  }, {\n    name: 'Bestätigung',\n    status: 'upcoming'\n  }]);\n\n  const setFormValues = values => {\n    setData(prevValues => _objectSpread(_objectSpread({}, prevValues), values));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    router.push(`/?step=${formStep}`), setFormStep(formStep);\n  }, [formStep]);\n  console.log(router.query.step);\n\n  const nextFormStep = (contract = '') => {\n    setStepsData(prevState => prevState.map(step => step.name === (prevState[formStep] ? prevState[formStep].name : \"\") ? _objectSpread(_objectSpread({}, step), {}, {\n      status: \"complete\"\n    }) : step.name === (prevState[formStep + 1] ? prevState[formStep + 1].name : \"\") ? _objectSpread(_objectSpread({}, step), {}, {\n      status: \"current\"\n    }) : step));\n    setFormStep(formStep => formStep + 1);\n    setFormValues({\n      contract\n    });\n  };\n\n  const prevFormStep = () => {\n    setStepsData(prevState => prevState.map(step => step.name === (prevState[formStep] ? prevState[formStep].name : \"\") ? _objectSpread(_objectSpread({}, step), {}, {\n      status: \"upcoming\"\n    }) : step.name === (prevState[formStep - 1] ? prevState[formStep - 1].name : \"\") ? _objectSpread(_objectSpread({}, step), {}, {\n      status: \"current\"\n    }) : step));\n    setFormStep(formStep => formStep - 1);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormContext.Provider, {\n    value: {\n      data,\n      setFormValues,\n      nextFormStep,\n      prevFormStep,\n      setFormStep,\n      steps,\n      formStep\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormContext);\nconst useFormData = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FormContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtbXVsdGktc3RlcC1mb3JtLWRlbW8tdGVtcGxhdGUvLi9jb250ZXh0L2luZGV4LmpzPzAyNjUiXSwibmFtZXMiOlsiRm9ybUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRm9ybVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwiZm9ybVN0ZXAiLCJzZXRGb3JtU3RlcCIsInF1ZXJ5Iiwic3RlcCIsInN0ZXBzIiwic2V0U3RlcHNEYXRhIiwibmFtZSIsInN0YXR1cyIsInNldEZvcm1WYWx1ZXMiLCJ2YWx1ZXMiLCJwcmV2VmFsdWVzIiwidXNlRWZmZWN0IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0Rm9ybVN0ZXAiLCJjb250cmFjdCIsInByZXZTdGF0ZSIsIm1hcCIsInByZXZGb3JtU3RlcCIsInVzZUZvcm1EYXRhIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLFdBQVcsZ0JBQUdDLG9EQUFhLEVBQWpDO0FBRUEsU0FBU0MsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQW9DO0FBQUE7O0FBQ3pDLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsK0NBQVEsdUJBQUNKLE1BQU0sQ0FBQ08sS0FBUCxDQUFhQyxJQUFkLG1FQUFzQixDQUF0QixDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUF3Qk4sK0NBQVEsQ0FBQyxDQUNyQztBQUFFTyxRQUFJLEVBQUUsU0FBUjtBQUFtQkMsVUFBTSxFQUFFO0FBQTNCLEdBRHFDLEVBRXJDO0FBQUVELFFBQUksRUFBRSxjQUFSO0FBQXdCQyxVQUFNLEVBQUU7QUFBaEMsR0FGcUMsRUFHckM7QUFBRUQsUUFBSSxFQUFFLGFBQVI7QUFBdUJDLFVBQU0sRUFBRTtBQUEvQixHQUhxQyxDQUFELENBQXRDOztBQU9BLFFBQU1DLGFBQWEsR0FBSUMsTUFBRCxJQUFZO0FBQ2hDWCxXQUFPLENBQUVZLFVBQUQsb0NBQ0hBLFVBREcsR0FFSEQsTUFGRyxDQUFELENBQVA7QUFJRCxHQUxEOztBQU9BRSxrREFBUyxDQUFDLE1BQU07QUFDZGhCLFVBQU0sQ0FBQ2lCLElBQVAsQ0FBYSxVQUFTWixRQUFTLEVBQS9CLEdBQW1DQyxXQUFXLENBQUNELFFBQUQsQ0FBOUM7QUFBMEQsR0FEbkQsRUFDcUQsQ0FBQ0EsUUFBRCxDQURyRCxDQUFUO0FBRUFhLFNBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsTUFBTSxDQUFDTyxLQUFQLENBQWFDLElBQXpCOztBQUVBLFFBQU1ZLFlBQVksR0FBRyxDQUFDQyxRQUFRLEdBQUMsRUFBVixLQUFpQjtBQUNwQ1gsZ0JBQVksQ0FBRVksU0FBRCxJQUNYQSxTQUFTLENBQUNDLEdBQVYsQ0FBZWYsSUFBRCxJQUNaQSxJQUFJLENBQUNHLElBQUwsTUFDQ1csU0FBUyxDQUFDakIsUUFBRCxDQUFULEdBQ0dpQixTQUFTLENBQUNqQixRQUFELENBQVQsQ0FBb0JNLElBRHZCLEdBRUcsRUFISixvQ0FJU0gsSUFKVDtBQUllSSxZQUFNLEVBQUU7QUFKdkIsU0FLSUosSUFBSSxDQUFDRyxJQUFMLE1BQWVXLFNBQVMsQ0FBQ2pCLFFBQVEsR0FBRyxDQUFaLENBQVQsR0FBMEJpQixTQUFTLENBQUNqQixRQUFRLEdBQUcsQ0FBWixDQUFULENBQXdCTSxJQUFsRCxHQUF5RCxFQUF4RSxvQ0FDS0gsSUFETDtBQUNXSSxZQUFNLEVBQUU7QUFEbkIsU0FFQUosSUFSTixDQURVLENBQVo7QUFhQUYsZUFBVyxDQUFFRCxRQUFELElBQWNBLFFBQVEsR0FBRyxDQUExQixDQUFYO0FBQ0FRLGlCQUFhLENBQUM7QUFBRVE7QUFBRixLQUFELENBQWI7QUFDRCxHQWhCRDs7QUFrQkEsUUFBTUcsWUFBWSxHQUFHLE1BQU07QUFDekJkLGdCQUFZLENBQUVZLFNBQUQsSUFDWEEsU0FBUyxDQUFDQyxHQUFWLENBQWVmLElBQUQsSUFDWkEsSUFBSSxDQUFDRyxJQUFMLE1BQ0NXLFNBQVMsQ0FBQ2pCLFFBQUQsQ0FBVCxHQUNHaUIsU0FBUyxDQUFDakIsUUFBRCxDQUFULENBQW9CTSxJQUR2QixHQUVHLEVBSEosb0NBSVNILElBSlQ7QUFJZUksWUFBTSxFQUFFO0FBSnZCLFNBS0lKLElBQUksQ0FBQ0csSUFBTCxNQUFlVyxTQUFTLENBQUNqQixRQUFRLEdBQUcsQ0FBWixDQUFULEdBQTBCaUIsU0FBUyxDQUFDakIsUUFBUSxHQUFHLENBQVosQ0FBVCxDQUF3Qk0sSUFBbEQsR0FBeUQsRUFBeEUsb0NBQ0tILElBREw7QUFDV0ksWUFBTSxFQUFFO0FBRG5CLFNBRUFKLElBUk4sQ0FEVSxDQUFaO0FBWUFGLGVBQVcsQ0FBRUQsUUFBRCxJQUFjQSxRQUFRLEdBQUcsQ0FBMUIsQ0FBWDtBQUNELEdBZEQ7O0FBaUJBLHNCQUNFLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFSCxVQUFGO0FBQVFXLG1CQUFSO0FBQXVCTyxrQkFBdkI7QUFBcUNJLGtCQUFyQztBQUFtRGxCLGlCQUFuRDtBQUFnRUcsV0FBaEU7QUFBdUVKO0FBQXZFLEtBQTdCO0FBQUEsY0FDR047QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtBQUVELCtEQUFlSCxXQUFmO0FBQ08sTUFBTTZCLFdBQVcsR0FBRyxNQUFNQyxpREFBVSxDQUFDOUIsV0FBRCxDQUFwQyIsImZpbGUiOiIuL2NvbnRleHQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBjb25zdCBGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1Qcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2Zvcm1TdGVwLCBzZXRGb3JtU3RlcF0gPSB1c2VTdGF0ZShyb3V0ZXIucXVlcnkuc3RlcCA/PyAwKTtcbiAgY29uc3QgW3N0ZXBzLCBzZXRTdGVwc0RhdGFdID0gdXNlU3RhdGUoW1xuICAgIHsgbmFtZTogJ1ZlcnRyYWcnLCBzdGF0dXM6ICdjdXJyZW50JyB9LFxuICAgIHsgbmFtZTogJ0RhdGVuZWluZ2FiZScsIHN0YXR1czogJ3VwY29taW5nJyB9LFxuICAgIHsgbmFtZTogJ0Jlc3TDpHRpZ3VuZycsIHN0YXR1czogJ3VwY29taW5nJyB9LFxuICBdKTtcblxuICBcbiAgY29uc3Qgc2V0Rm9ybVZhbHVlcyA9ICh2YWx1ZXMpID0+IHtcbiAgICBzZXREYXRhKChwcmV2VmFsdWVzKSA9PiAoe1xuICAgICAgLi4ucHJldlZhbHVlcyxcbiAgICAgIC4uLnZhbHVlcyxcbiAgICB9KSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHsgXG4gICAgcm91dGVyLnB1c2goYC8/c3RlcD0ke2Zvcm1TdGVwfWApLCBzZXRGb3JtU3RlcChmb3JtU3RlcCkgfSwgW2Zvcm1TdGVwXSk7XG4gIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5zdGVwKVxuXG4gIGNvbnN0IG5leHRGb3JtU3RlcCA9IChjb250cmFjdD0nJykgPT4ge1xuICAgIHNldFN0ZXBzRGF0YSgocHJldlN0YXRlKSA9PlxuICAgICAgcHJldlN0YXRlLm1hcCgoc3RlcCkgPT5cbiAgICAgICAgc3RlcC5uYW1lID09PVxuICAgICAgICAocHJldlN0YXRlW2Zvcm1TdGVwXVxuICAgICAgICAgID8gcHJldlN0YXRlW2Zvcm1TdGVwXS5uYW1lXG4gICAgICAgICAgOiBcIlwiKVxuICAgICAgICAgID8geyAuLi5zdGVwLCBzdGF0dXM6IFwiY29tcGxldGVcIiB9XG4gICAgICAgICAgOiBzdGVwLm5hbWUgPT09IChwcmV2U3RhdGVbZm9ybVN0ZXAgKyAxXSA/IHByZXZTdGF0ZVtmb3JtU3RlcCArIDFdLm5hbWUgOiBcIlwiKVxuICAgICAgICAgID8geyAuLi5zdGVwLCBzdGF0dXM6IFwiY3VycmVudFwiIH1cbiAgICAgICAgICA6IHN0ZXBcbiAgICAgIClcbiAgICApO1xuICAgIFxuICAgIHNldEZvcm1TdGVwKChmb3JtU3RlcCkgPT4gZm9ybVN0ZXAgKyAxKTtcbiAgICBzZXRGb3JtVmFsdWVzKHsgY29udHJhY3QgfSk7XG4gIH07XG5cbiAgY29uc3QgcHJldkZvcm1TdGVwID0gKCkgPT4ge1xuICAgIHNldFN0ZXBzRGF0YSgocHJldlN0YXRlKSA9PlxuICAgICAgcHJldlN0YXRlLm1hcCgoc3RlcCkgPT5cbiAgICAgICAgc3RlcC5uYW1lID09PVxuICAgICAgICAocHJldlN0YXRlW2Zvcm1TdGVwXVxuICAgICAgICAgID8gcHJldlN0YXRlW2Zvcm1TdGVwXS5uYW1lXG4gICAgICAgICAgOiBcIlwiKVxuICAgICAgICAgID8geyAuLi5zdGVwLCBzdGF0dXM6IFwidXBjb21pbmdcIiB9XG4gICAgICAgICAgOiBzdGVwLm5hbWUgPT09IChwcmV2U3RhdGVbZm9ybVN0ZXAgLSAxXSA/IHByZXZTdGF0ZVtmb3JtU3RlcCAtIDFdLm5hbWUgOiBcIlwiKVxuICAgICAgICAgID8geyAuLi5zdGVwLCBzdGF0dXM6IFwiY3VycmVudFwiIH1cbiAgICAgICAgICA6IHN0ZXBcbiAgICAgIClcbiAgICApO1xuICAgIHNldEZvcm1TdGVwKChmb3JtU3RlcCkgPT4gZm9ybVN0ZXAgLSAxKTtcbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGRhdGEsIHNldEZvcm1WYWx1ZXMsIG5leHRGb3JtU3RlcCwgcHJldkZvcm1TdGVwLCBzZXRGb3JtU3RlcCwgc3RlcHMsIGZvcm1TdGVwIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250ZXh0O1xuZXhwb3J0IGNvbnN0IHVzZUZvcm1EYXRhID0gKCkgPT4gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/katharinaschreiber/Desktop/stepper-with-form/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_1__.FormProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtbXVsdGktc3RlcC1mb3JtLWRlbW8tdGVtcGxhdGUvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLDhEQUFDLGtEQUFEO0FBQUEsMkJBQ0UsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBQ0QsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybVByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxGb3JtUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Gb3JtUHJvdmlkZXI+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();