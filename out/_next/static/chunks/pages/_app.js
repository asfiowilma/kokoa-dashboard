(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_contexts_KokoaProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/contexts/KokoaProvider */ "./services/contexts/KokoaProvider.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Asfiolitha Wilmarani\\Desktop\\Espresso Castle\\Projects\\kokoa-dashboard\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_services_contexts_KokoaProvider__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./services/api/skelefire.js":
/*!***********************************!*\
  !*** ./services/api/skelefire.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSkeleFire": function() { return /* binding */ getSkeleFire; },
/* harmony export */   "getActiveCourses": function() { return /* binding */ getActiveCourses; },
/* harmony export */   "getUnreadActivities": function() { return /* binding */ getUnreadActivities; },
/* harmony export */   "markAsRead": function() { return /* binding */ markAsRead; },
/* harmony export */   "markSelectedAsRead": function() { return /* binding */ markSelectedAsRead; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./services/constants/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function getSkeleFire() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_URL, "/skelefire/"));
}
function getActiveCourses() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_URL, "/skelefire/courses/"));
}
function getUnreadActivities() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_URL, "/skelefire/activities/"));
}
function markAsRead(moduleID) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_URL, "/skelefire/activities/").concat(moduleID, "/mark_as_read/"));
}
function markSelectedAsRead(moduleIDs) {
  var ids = {
    ids: moduleIDs
  };
  return axios__WEBPACK_IMPORTED_MODULE_0___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__.API_URL, "/skelefire/activities/mark_selected_as_read/"), ids);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./services/api/strawberry.js":
/*!************************************!*\
  !*** ./services/api/strawberry.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quickAddLog": function() { return /* binding */ quickAddLog; },
/* harmony export */   "fetchMonthlyLogs": function() { return /* binding */ fetchMonthlyLogs; },
/* harmony export */   "fetchMonthlyEarnings": function() { return /* binding */ fetchMonthlyEarnings; },
/* harmony export */   "fetchYearlyEarnings": function() { return /* binding */ fetchYearlyEarnings; },
/* harmony export */   "fetchAllListings": function() { return /* binding */ fetchAllListings; },
/* harmony export */   "resetActivePeriod": function() { return /* binding */ resetActivePeriod; },
/* harmony export */   "scrapeListings": function() { return /* binding */ scrapeListings; },
/* harmony export */   "scrapeOlderLogs": function() { return /* binding */ scrapeOlderLogs; },
/* harmony export */   "scrapeLogs": function() { return /* binding */ scrapeLogs; },
/* harmony export */   "setPayday": function() { return /* binding */ setPayday; },
/* harmony export */   "scrapeAndFetch": function() { return /* binding */ scrapeAndFetch; }
/* harmony export */ });
/* harmony import */ var C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./services/constants/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




function quickAddLog(rawLog) {
  var dateObj = new Date(rawLog.date);
  var sTime = rawLog.startTime.split(':');
  var eTime = rawLog.endTime.split(':');
  var log = {
    id: rawLog.id,
    category: rawLog.category,
    desc: rawLog.description,
    day: dateObj.getDate().toString(),
    month: (dateObj.getMonth() + 1).toString(),
    start_hour: sTime[0],
    start_min: sTime[1],
    end_hour: eTime[0],
    end_min: eTime[1]
  };
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.API_URL, "/strawberry/quicklog/"), log);
}
function fetchMonthlyLogs(month, year) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.API_URL, "/strawberry/logs/").concat(year, "/").concat(month));
}
function fetchMonthlyEarnings(month, year) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.API_URL, "/strawberry/earnings/").concat(year, "/").concat(month));
}
function fetchYearlyEarnings(year) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.API_URL, "/strawberry/earnings/").concat(year));
}
function fetchAllListings() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.API_URL, "/strawberry/listings/"));
}
function resetActivePeriod() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.API_URL, "/strawberry/listings/bulk_set_listing_inactive/"));
}
function scrapeListings() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.API_URL, "/strawberry/get-listings"));
}
function scrapeOlderLogs() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.API_URL, "/strawberry/get-old-logs"));
}
function scrapeLogs() {
  var courseId = localStorage.getItem('strawberry_course_siasisten');
  return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.API_URL, "/strawberry/get-logs/").concat(courseId));
}
function setPayday(id, payload) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__.API_URL, "/strawberry/report/").concat(id, "/"), payload);
}
function scrapeAndFetch() {
  return _scrapeAndFetch.apply(this, arguments);
}

function _scrapeAndFetch() {
  _scrapeAndFetch = (0,C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var preferred_order, _yield$fetchAllListin, listings;

    return C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            preferred_order = ['diterima', 'direkomendasikan', 'melamar', '-------'];
            _context.next = 3;
            return scrapeListings();

          case 3:
            _context.next = 5;
            return fetchAllListings();

          case 5:
            _yield$fetchAllListin = _context.sent;
            listings = _yield$fetchAllListin.data;
            listings.sort(function (a, b) {
              return a.state < b.state ? 1 : -1;
            }).sort(function (a, b) {
              return preferred_order.indexOf(a.status) > preferred_order.indexOf(b.status) ? 1 : -1;
            });
            console.log(listings);
            return _context.abrupt("return", listings);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _scrapeAndFetch.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./services/constants/index.js":
/*!*************************************!*\
  !*** ./services/constants/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "CURRENT_MONTH": function() { return /* binding */ CURRENT_MONTH; },
/* harmony export */   "CURRENT_YEAR": function() { return /* binding */ CURRENT_YEAR; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var API_URL = "http://localhost:8000";
var CURRENT_MONTH = new Date().getMonth() + 1;
var CURRENT_YEAR = new Date().getFullYear();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./services/contexts/KokoaProvider.js":
/*!********************************************!*\
  !*** ./services/contexts/KokoaProvider.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ KokoaProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SidebarContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarContext */ "./services/contexts/SidebarContext.js");
/* harmony import */ var _SkelefireContext_SkelefireProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SkelefireContext/SkelefireProvider */ "./services/contexts/SkelefireContext/SkelefireProvider.js");
/* harmony import */ var _StrawberryContext_StrawberryProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrawberryContext/StrawberryProvider */ "./services/contexts/StrawberryContext/StrawberryProvider.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Asfiolitha Wilmarani\\Desktop\\Espresso Castle\\Projects\\kokoa-dashboard\\services\\contexts\\KokoaProvider.js";




function KokoaProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarContext__WEBPACK_IMPORTED_MODULE_2__.SidebarProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SkelefireContext_SkelefireProvider__WEBPACK_IMPORTED_MODULE_3__.SkelefireProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StrawberryContext_StrawberryProvider__WEBPACK_IMPORTED_MODULE_4__.StrawberryProvider, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = KokoaProvider;

var _c;

$RefreshReg$(_c, "KokoaProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./services/contexts/SidebarContext.js":
/*!*********************************************!*\
  !*** ./services/contexts/SidebarContext.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarProvider": function() { return /* binding */ SidebarProvider; },
/* harmony export */   "SidebarReducer": function() { return /* binding */ SidebarReducer; },
/* harmony export */   "useSidebar": function() { return /* binding */ useSidebar; }
/* harmony export */ });
/* harmony import */ var C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Asfiolitha Wilmarani\\Desktop\\Espresso Castle\\Projects\\kokoa-dashboard\\services\\contexts\\SidebarContext.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var INITIAL_STATE = {
  isExpanded: true
};
var SidebarContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(INITIAL_STATE);
_c = SidebarContext;
var SidebarProvider = function SidebarProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(SidebarReducer, INITIAL_STATE),
      sidebar = _useReducer[0],
      dispatch = _useReducer[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SidebarContext.Provider, {
    value: {
      sidebar: sidebar,
      dispatch: dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_s(SidebarProvider, "wrSHhOLOWFLjtfDFhBuBV3+O5UI=");

_c2 = SidebarProvider;
function SidebarReducer(state, action) {
  switch (action.type) {
    case 'set_expanded':
      return _objectSpread(_objectSpread({}, state), {}, {
        isExpanded: action.payload
      });

    default:
      return state;
  }
}
_c3 = SidebarReducer;
function useSidebar() {
  _s2();

  var context = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(SidebarContext);

  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }

  return context;
}

_s2(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

var _c, _c2, _c3;

$RefreshReg$(_c, "SidebarContext");
$RefreshReg$(_c2, "SidebarProvider");
$RefreshReg$(_c3, "SidebarReducer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./services/contexts/SkelefireContext/SkelefireProvider.js":
/*!*****************************************************************!*\
  !*** ./services/contexts/SkelefireContext/SkelefireProvider.js ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkelefireContext": function() { return /* binding */ SkelefireContext; },
/* harmony export */   "SkelefireProvider": function() { return /* binding */ SkelefireProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SkelefireReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SkelefireReducer */ "./services/contexts/SkelefireContext/SkelefireReducer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Asfiolitha Wilmarani\\Desktop\\Espresso Castle\\Projects\\kokoa-dashboard\\services\\contexts\\SkelefireContext\\SkelefireProvider.js",
    _this = undefined,
    _s = $RefreshSig$();



var INITIAL_STATE = {
  courses: [],
  activities: [],
  isActive: false
};
var SkelefireContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(INITIAL_STATE);
_c = SkelefireContext;

var SkelefireProvider = function SkelefireProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_SkelefireReducer__WEBPACK_IMPORTED_MODULE_2__.default, INITIAL_STATE),
      skelefire = _useReducer[0],
      dispatch = _useReducer[1];

  var togglePower = function togglePower() {
    dispatch({
      type: 'TOGGLE_POWER'
    });
  };

  var setCourses = function setCourses(courses) {
    dispatch({
      type: 'SET_COURSES',
      payload: courses
    });
  };

  var setActivities = function setActivities(activities) {
    dispatch({
      type: 'SET_ACTIVITIES',
      payload: activities
    });
  };

  var countUnreadActivities = function countUnreadActivities() {
    dispatch({
      type: 'COUNT_UNREAD_ACTIVITIES'
    });
  };

  var markAsRead = function markAsRead(moduleID) {
    dispatch({
      type: 'MARK_READ',
      payload: moduleID
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkelefireContext.Provider, {
    value: {
      skelefire: skelefire,
      togglePower: togglePower,
      setCourses: setCourses,
      setActivities: setActivities,
      countUnreadActivities: countUnreadActivities,
      markAsRead: markAsRead
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_s(SkelefireProvider, "h8C65KYz/bKX9htfaeTU5G4Wfrk=");

_c2 = SkelefireProvider;


var _c, _c2;

$RefreshReg$(_c, "SkelefireContext");
$RefreshReg$(_c2, "SkelefireProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./services/contexts/SkelefireContext/SkelefireReducer.js":
/*!****************************************************************!*\
  !*** ./services/contexts/SkelefireContext/SkelefireReducer.js ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SkelefireReducer; }
/* harmony export */ });
/* harmony import */ var C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _api_skelefire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/skelefire */ "./services/api/skelefire.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function SkelefireReducer(state, action) {
  var activities = state.activities,
      courses = state.courses,
      isActive = state.isActive;

  switch (action.type) {
    case 'TOGGLE_POWER':
      return _objectSpread(_objectSpread({}, state), {}, {
        isActive: !isActive
      });

    case 'SET_COURSES':
      return _objectSpread(_objectSpread({}, state), {}, {
        courses: action.payload
      });

    case 'SET_ACTIVITIES':
      return _objectSpread(_objectSpread({}, state), {}, {
        activities: action.payload
      });

    case 'COUNT_UNREAD_ACTIVITIES':
      return _objectSpread(_objectSpread({}, state), {}, {
        courses: courses.map(function (course) {
          return _objectSpread(_objectSpread({}, course), {}, {
            unread: activities.filter(function (activity) {
              return activity.course === course.courseID;
            }).length
          });
        })
      });

    case 'MARK_READ':
      if (action.payload.length == 1) {
        (0,_api_skelefire__WEBPACK_IMPORTED_MODULE_1__.markAsRead)(action.payload[0]);
      } else {
        (0,_api_skelefire__WEBPACK_IMPORTED_MODULE_1__.markSelectedAsRead)(action.payload);
      }

      react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success("".concat(action.payload.length, " activity(s) marked as read!"));
      return _objectSpread(_objectSpread({}, state), {}, {
        activities: activities.filter(function (activity) {
          return !action.payload.includes(activity.moduleID);
        })
      });

    default:
      return state;
  }
}
_c = SkelefireReducer;

var _c;

$RefreshReg$(_c, "SkelefireReducer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./services/contexts/StrawberryContext/StrawberryProvider.js":
/*!*******************************************************************!*\
  !*** ./services/contexts/StrawberryContext/StrawberryProvider.js ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrawberryContext": function() { return /* binding */ StrawberryContext; },
/* harmony export */   "StrawberryProvider": function() { return /* binding */ StrawberryProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StrawberryReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StrawberryReducer */ "./services/contexts/StrawberryContext/StrawberryReducer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Asfiolitha Wilmarani\\Desktop\\Espresso Castle\\Projects\\kokoa-dashboard\\services\\contexts\\StrawberryContext\\StrawberryProvider.js",
    _this = undefined,
    _s = $RefreshSig$();



var INITIAL_STATE = {
  listings: [],
  reports: [],
  logs: []
};
var StrawberryContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(INITIAL_STATE);
_c = StrawberryContext;

var StrawberryProvider = function StrawberryProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_StrawberryReducer__WEBPACK_IMPORTED_MODULE_2__.default, INITIAL_STATE),
      strawberry = _useReducer[0],
      dispatch = _useReducer[1];

  var value = {
    strawberry: strawberry,
    dispatch: dispatch
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StrawberryContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_s(StrawberryProvider, "TNo9EwEGM1/e4Uay0zaJcGoyBg4=");

_c2 = StrawberryProvider;


var _c, _c2;

$RefreshReg$(_c, "StrawberryContext");
$RefreshReg$(_c2, "StrawberryProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./services/contexts/StrawberryContext/StrawberryReducer.js":
/*!******************************************************************!*\
  !*** ./services/contexts/StrawberryContext/StrawberryReducer.js ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StrawberryReducer; }
/* harmony export */ });
/* harmony import */ var C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _api_strawberry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/strawberry */ "./services/api/strawberry.js");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function StrawberryReducer(state, action) {
  switch (action.type) {
    case 'set_reports':
      return _objectSpread(_objectSpread({}, state), {}, {
        reports: action.payload
      });

    case 'set_payday':
      var _action$payload = action.payload,
          id = _action$payload.id,
          date = _action$payload.date;

      var reportUpdated = (0,C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.reports);

      var paid = reportUpdated.findIndex(function (x) {
        return x.report_id === id;
      });
      reportUpdated[paid] = _objectSpread(_objectSpread({}, reportUpdated[paid]), {}, {
        is_paid: true,
        paid_on: date
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        reports: reportUpdated
      });

    case 'set_listings':
      react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success('TA Listings updated!');
      return _objectSpread(_objectSpread({}, state), {}, {
        listings: action.payload
      });

    case 'sort_by_course_name':
      var sorted_listings = (0,C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.listings);

      sorted_listings.sort(function (a, b) {
        return a.title > b.title ? 1 : -1;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        listings: sorted_listings
      });

    case 'sort_by_needed':
      var sorted_listings = (0,C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.listings);

      sorted_listings.sort(function (a, b) {
        return a.needed < b.needed ? 1 : -1;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        listings: sorted_listings
      });

    case 'sort_by_applied':
      var sorted_listings = (0,C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.listings);

      sorted_listings.sort(function (a, b) {
        return a.applied < b.applied ? 1 : -1;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        listings: sorted_listings
      });

    case 'sort_by_accepted':
      var sorted_listings = (0,C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.listings);

      sorted_listings.sort(function (a, b) {
        return a.accepted < b.accepted ? 1 : -1;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        listings: sorted_listings
      });

    case 'sort_by_status':
      var sorted_listings = (0,C_Users_Asfiolitha_Wilmarani_Desktop_Espresso_Castle_Projects_kokoa_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.listings);

      var preferred_order = ['diterima', 'direkomendasikan', 'melamar', '-------'];
      sorted_listings.sort(function (a, b) {
        return preferred_order.indexOf(a.status) > preferred_order.indexOf(b.status) ? 1 : -1;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        listings: sorted_listings
      });

    case 'set_logs':
      return _objectSpread(_objectSpread({}, state), {}, {
        logs: action.payload
      });

    default:
      return state;
  }
}
_c = StrawberryReducer;

var _c;

$RefreshReg$(_c, "StrawberryReducer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ (function(module) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ (function(module) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ (function(module) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ (function(module) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ (function(module) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/goober/dist/goober.modern.js":
/*!***************************************************!*\
  !*** ./node_modules/goober/dist/goober.modern.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": function() { return /* binding */ p; },
/* harmony export */   "extractCss": function() { return /* binding */ r; },
/* harmony export */   "glob": function() { return /* binding */ g; },
/* harmony export */   "keyframes": function() { return /* binding */ b; },
/* harmony export */   "setup": function() { return /* binding */ h; },
/* harmony export */   "styled": function() { return /* binding */ j; }
/* harmony export */ });
let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,r=e=>{let r=t(e),l=r.data;return r.data="",l},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/g,a=/\/\*[^]*?\*\/|\s\s+|\n/g,o=(e,t)=>{let r,l="",a="",n="";for(let c in e){let s=e[c];"object"==typeof s?(r=t?t.replace(/([^,])+/g,e=>c.replace(/([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):c,a+="@"==c[0]?"f"==c[1]?o(s,c):c+"{"+o(s,"k"==c[1]?"":t)+"}":o(s,r)):"@"==c[0]&&"i"==c[1]?l=c+" "+s+";":(c=c.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=o.p?o.p(c,s):c+":"+s+";")}return n[0]?(r=t?t+"{"+n+"}":n,l+r+a):l+a},n={},c=e=>{let t="";for(let r in e)t+=r+("object"==typeof e[r]?c(e[r]):e[r]);return t},s=(e,t,r,s,i)=>{let p="object"==typeof e?c(e):e,u=n[p]||(n[p]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(p));if(!n[u]){let t="object"==typeof e?e:(e=>{let t,r=[{}];for(;t=l.exec(e.replace(a,""));)t[4]&&r.shift(),t[3]?r.unshift(r[0][t[3]]=r[0][t[3]]||{}):t[4]||(r[0][t[1]]=t[2]);return r[0]})(e);n[u]=o(i?{["@keyframes "+u]:t}:t,r?"":"."+u)}return((e,t,r)=>{-1==t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(n[u],t,s),u},i=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):e}return e+l+(null==n?"":n)},"");function p(e){let r=this||{},l=e.call?e(r.p):e;return s(l.unshift?l.raw?i(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>t?Object.assign(e,t.call?t(r.p):t):e,{}):l,t(r.target),r.g,r.o,r.k)}let u,f,d,g=p.bind({g:1}),b=p.bind({k:1});function h(e,t,r,l){o.p=t,u=e,f=r,d=l}function j(e,t){let r=this||{};return function(){let l=arguments;function a(o,n){let c=Object.assign({},o),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=p.apply(r,l)+(s?" "+s:""),t&&(c.ref=n);let i=c.as||e;return d&&i[0]&&d(c),u(i,c)}return t?t(a):a}}


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css",
      function () {
        content = __webpack_require__(/*! !!../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./tailwind.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/tailwindcss/tailwind.css ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.12 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n:root {\n  background-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\nhtml {\n  -webkit-tap-highlight-color: transparent;\n}\n\n:root {\n  --p: 0 0% 100%;\n  --pf: 0 0% 90.2%;\n  --pc: 0 0% 0%;\n  --s: 218 54.3% 18%;\n  --sf: 219 56.1% 8%;\n  --sc: 0 0% 100%;\n  --a: 319 21.8% 26.1%;\n  --af: 320 22% 16.1%;\n  --ac: 0 0% 100%;\n  --n: 270 4.3% 9%;\n  --nf: 270 2.2% 18%;\n  --nc: 37 67.3% 58%;\n  --b1: 240 10% 3.9%;\n  --b2: 270 4.3% 9%;\n  --b3: 270 2.2% 18%;\n  --bc: 37 67.3% 58%;\n  --in: 202 100% 70%;\n  --su: 89 61.6% 52%;\n  --wa: 54 68.8% 63.5%;\n  --er: 0 100% 71.8%;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.alert>:not([hidden])~:not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem*(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem*var(--tw-space-y-reverse));\n}\n\n.alert {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2)/var(--tw-bg-opacity,1));\n  padding: 1rem;\n  border-radius: var(--rounded-box,1rem);\n}\n\n@media (min-width:768px) {\n\n  .alert>:not([hidden])~:not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px*(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px*var(--tw-space-y-reverse));\n  }\n\n  .alert {\n    flex-direction: row;\n  }\n}\n\n.alert>* {\n  display: flex;\n}\n\n.avatar {\n  display: inline-flex;\n  position: relative;\n}\n\n.avatar>div {\n  display: block;\n  overflow: hidden;\n}\n\n.avatar img {\n  height: 100%;\n  object-fit: cover;\n  width: 100%;\n}\n\n.avatar.placeholder>div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4,0,.2,1);\n  height: 1.25rem;\n  font-size: .875rem;\n  line-height: 1.25rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-left: .563rem;\n  padding-right: .563rem;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--n)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--n)/var(--tw-border-opacity,1));\n  border-width: 1px;\n  --tw-text-opacity: 1;\n  color: hsla(var(--nc)/var(--tw-text-opacity,1));\n  border-radius: var(--rounded-badge,1.9rem);\n}\n\n.btn {\n  border-color: transparent;\n  border-color: hsla(var(--n)/var(--tw-border-opacity,1));\n  cursor: pointer;\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4,0,.2,1);\n  border-radius: var(--rounded-btn,.5rem);\n  height: 3rem;\n  font-size: .875rem;\n  line-height: 1.25rem;\n  line-height: 2;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  min-height: 3rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-transform: var(--btn-text-case,uppercase);\n  border-width: var(--border-btn,1px);\n  animation: button-pop var(--animation-btn,.25s) ease-out;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--n)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  --tw-text-opacity: 1;\n  color: hsla(var(--nc)/var(--tw-text-opacity,1));\n}\n\n.btn:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.btn-disabled,.btn[disabled] {\n  pointer-events: none;\n  --tw-bg-opacity: 0.2;\n  background-color: hsla(var(--n)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 0;\n  --tw-text-opacity: 0.2;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.btn-square {\n  height: 3rem;\n  padding: 0;\n  width: 3rem;\n}\n\n.btn.loading,.btn.loading:hover {\n  pointer-events: none;\n}\n\n.btn.loading:before {\n  border-radius: 9999px;\n  border-width: 2px;\n  height: 1rem;\n  margin-right: .5rem;\n  width: 1rem;\n  animation: spin 2s linear infinite;\n  content: \"\";\n  border-color: transparent currentColor currentColor transparent;\n}\n\n@media (prefers-reduced-motion:reduce) {\n\n  .btn.loading:before {\n    animation: spin 10s linear infinite;\n  }\n}\n\n@keyframes spin {\n\n  0% {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(1turn);\n  }\n}\n\n.btn-group {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.btn-group>input[type=radio].btn {\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.btn-group>input[type=radio].btn:before {\n  content: attr(data-title);\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n  border-radius: var(--rounded-box,1rem);\n}\n\n.card:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.card-body {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  padding: var(--padding-card,2rem);\n}\n\n.card figure,.card figure>* {\n  width: 100%;\n}\n\n.card.image-full {\n  display: grid;\n}\n\n.card.image-full:before {\n  position: relative;\n  content: \"\";\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--n)/var(--tw-bg-opacity,1));\n  opacity: .75;\n  z-index: 10;\n  border-radius: var(--rounded-box,1rem);\n}\n\n.card.image-full:before,.card.image-full>* {\n  grid-column-start: 1;\n  grid-row-start: 1;\n}\n\n.card.image-full>figure img {\n  height: 100%;\n  object-fit: cover;\n}\n\n.card.image-full>.card-body {\n  position: relative;\n  --tw-text-opacity: 1;\n  color: hsla(var(--nc)/var(--tw-text-opacity,1));\n  z-index: 20;\n}\n\n.checkbox:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.collapse {\n  display: grid;\n  overflow: hidden;\n  position: relative;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.collapse-content,.collapse-title,.collapse>input[type=checkbox] {\n  grid-column-start: 1;\n  grid-row-start: 1;\n}\n\n.collapse>input[type=checkbox] {\n  -webkit-appearance: none;\n  appearance: none;\n  opacity: 0;\n}\n\n.collapse-open .collapse-content,.collapse:focus:not(.collapse-close) .collapse-content,.collapse:not(.collapse-close) input[type=checkbox]:checked~.collapse-content {\n  max-height: 9000px;\n  --tw-bg-opacity: 0.1;\n  background-color: hsla(var(--bc)/var(--tw-bg-opacity,1));\n  opacity: 1;\n  padding-bottom: 1rem;\n  transition: padding .2s ease-in-out,background-color .2s ease-in-out;\n}\n\n.divider {\n  display: flex;\n  align-items: center;\n  height: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.divider:after,.divider:before {\n  content: \"\";\n  flex-grow: 1;\n  --tw-bg-opacity: 1;\n  --tw-bg-opacity: var(--tw-border-opacity,0.1);\n  background-color: hsla(var(--bc)/var(--tw-bg-opacity,1));\n  height: .125rem;\n}\n\n.dropdown {\n  display: inline-block;\n  position: relative;\n}\n\n.dropdown>:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.dropdown .dropdown-content {\n  opacity: 0;\n  position: absolute;\n  visibility: hidden;\n  z-index: 50;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform-origin: top;\n  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4,0,.2,1);\n}\n\n.dropdown-end .dropdown-content {\n  right: 0;\n}\n\n.dropdown-left .dropdown-content {\n  top: 0;\n  bottom: auto;\n  right: 100%;\n  transform-origin: right;\n}\n\n.dropdown-right .dropdown-content {\n  top: 0;\n  bottom: auto;\n  left: 100%;\n  transform-origin: left;\n}\n\n.dropdown-top .dropdown-content {\n  top: auto;\n  bottom: 100%;\n  transform-origin: bottom;\n}\n\n.dropdown-end.dropdown-right .dropdown-content {\n  bottom: 0;\n  top: auto;\n}\n\n.dropdown-end.dropdown-left .dropdown-content {\n  bottom: 0;\n  top: auto;\n}\n\n.dropdown.dropdown-hover:hover .dropdown-content,.dropdown.dropdown-open .dropdown-content,.dropdown:not(.dropdown-hover):focus-within .dropdown-content,.dropdown:not(.dropdown-hover):focus .dropdown-content {\n  opacity: 1;\n  visibility: visible;\n}\n\n.form-control {\n  display: flex;\n  flex-direction: column;\n}\n\n.label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  -webkit-user-select: none;\n  user-select: none;\n  padding: .5rem .25rem;\n}\n\n.indicator {\n  display: inline-flex;\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.indicator .indicator-item {\n  z-index: 1;\n  position: absolute;\n  --tw-translate-x: 0;\n  --tw-translate-x: 50%;\n  --tw-translate-y: 0;\n  --tw-translate-y: -50%;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n}\n\n.indicator .indicator-item.indicator-start {\n  left: 0;\n  right: auto;\n  --tw-translate-x: -50%;\n}\n\n.indicator .indicator-item.indicator-center {\n  right: 50%;\n  left: 50%;\n  --tw-translate-x: -50%;\n}\n\n.indicator .indicator-item.indicator-end {\n  right: 0;\n  left: auto;\n  --tw-translate-x: 50%;\n}\n\n.indicator .indicator-item.indicator-bottom {\n  bottom: 0;\n  top: auto;\n  --tw-translate-y: 50%;\n}\n\n.indicator .indicator-item.indicator-middle {\n  top: 50%;\n  bottom: 50%;\n  --tw-translate-y: -50%;\n}\n\n.indicator .indicator-item.indicator-top {\n  top: 0;\n  bottom: auto;\n  --tw-translate-y: -50%;\n}\n\n.input {\n  flex-shrink: 1;\n  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4,0,.2,1);\n  height: 3rem;\n  font-size: .875rem;\n  line-height: 1.25rem;\n  line-height: 2;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 0;\n  border-color: hsla(var(--bc)/var(--tw-border-opacity,1));\n  border-width: 1px;\n  border-radius: var(--rounded-btn,.5rem);\n}\n\n.input:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsla(var(--bc)/.2);\n}\n\n.link {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.menu.horizontal {\n  display: inline-flex;\n  flex-direction: row;\n}\n\n.menu.horizontal li {\n  flex-direction: row;\n}\n\n.menu li {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.menu li>a,.menu li>span {\n  display: flex;\n  align-items: center;\n  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4,0,.2,1);\n  padding: .75rem 1.25rem;\n  color: currentColor;\n}\n\n.menu li>a {\n  cursor: pointer;\n}\n\n.menu li>a:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.menu li.disabled>a,.menu li.disabled>span {\n  cursor: auto;\n  --tw-text-opacity: 0.2;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  padding: var(--navbar-padding,.5rem);\n  min-height: 4rem;\n}\n\n.navbar>* {\n  display: flex;\n  align-items: center;\n}\n\n.navbar-center {\n  flex-shrink: 0;\n}\n\n.select {\n  -webkit-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  -webkit-user-select: none;\n  user-select: none;\n  height: 3rem;\n  font-size: .875rem;\n  line-height: 1.25rem;\n  line-height: 2;\n  padding-left: 1rem;\n  padding-right: 2.5rem;\n  min-height: 3rem;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 0;\n  border-color: hsla(var(--bc)/var(--tw-border-opacity,1));\n  border-width: 1px;\n  font-weight: 600;\n  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4,0,.2,1);\n  border-radius: var(--rounded-btn,.5rem);\n  background-image: linear-gradient(45deg,transparent 50%,currentColor 0),linear-gradient(135deg,currentColor 50%,transparent 0);\n  background-position: calc(100% - 20px) calc(1px + 50%),calc(100% - 16px) calc(1px + 50%);\n  background-size: 4px 4px,4px 4px;\n  background-repeat: no-repeat;\n}\n\n.select:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsla(var(--bc)/.2);\n}\n\n.select-disabled,.select[disabled] {\n  pointer-events: none;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n  cursor: not-allowed;\n  --tw-text-opacity: 0.2;\n}\n\n.stats {\n  display: inline-grid;\n  overflow: hidden;\n  overflow-x: auto;\n  grid-auto-flow: column;\n  border-radius: var(--rounded-box,1rem);\n}\n\n.stat {\n  display: inline-grid;\n  width: 100%;\n  column-gap: 1.5rem;\n  grid-template-columns: 1fr auto;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n  padding: 1rem 1.5rem;\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.stat-title {\n  white-space: nowrap;\n  grid-column-start: 1;\n  opacity: .5;\n}\n\n.stat-value {\n  white-space: nowrap;\n  grid-column-start: 1;\n  font-weight: 800;\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n\n.stat-desc {\n  white-space: nowrap;\n  grid-column-start: 1;\n  font-size: .875rem;\n  line-height: 1.25rem;\n  opacity: .5;\n}\n\n.stats.grid-flow-row {\n  grid-auto-rows: minmax(0,1fr);\n}\n\n.tabs {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n\n.tab {\n  cursor: pointer;\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n  height: 2rem;\n  font-size: .875rem;\n  line-height: 1.25rem;\n  line-height: 2;\n  --tab-padding: 1rem;\n  --tw-text-opacity: 0.5;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n  padding-left: var(--tab-padding,1rem);\n  padding-right: var(--tab-padding,1rem);\n}\n\n.\\!tab {\n  cursor: pointer !important;\n  display: inline-flex !important;\n  flex-wrap: wrap !important;\n  align-items: center !important;\n  justify-content: center !important;\n  position: relative !important;\n  text-align: center !important;\n  -webkit-user-select: none !important;\n  user-select: none !important;\n  height: 2rem !important;\n  font-size: .875rem !important;\n  line-height: 1.25rem !important;\n  line-height: 2 !important;\n  --tab-padding: 1rem !important;\n  --tw-text-opacity: 0.5 !important;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1)) !important;\n  padding-left: var(--tab-padding,1rem) !important;\n  padding-right: var(--tab-padding,1rem) !important;\n}\n\n.table {\n  position: relative;\n  text-align: left;\n}\n\n.table th:first-child {\n  position: sticky;\n  position: -webkit-sticky;\n  left: 0;\n  z-index: 10;\n}\n\n.textarea {\n  flex-shrink: 1;\n  transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;\n  transition-duration: .2s;\n  transition-timing-function: cubic-bezier(.4,0,.2,1);\n  font-size: .875rem;\n  line-height: 1.25rem;\n  line-height: 2;\n  padding: .5rem 1rem;\n  min-height: 3rem;\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 0;\n  border-color: hsla(var(--bc)/var(--tw-border-opacity,1));\n  border-width: 1px;\n  border-radius: var(--rounded-btn,.5rem);\n}\n\n.textarea:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsla(var(--bc)/.2);\n}\n\n.toggle:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.avatar-group .avatar {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b1)/var(--tw-border-opacity,1));\n  border-radius: 9999px;\n  border-width: 4px;\n  overflow: hidden;\n}\n\n.btn .badge {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n  border-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.btn .badge-outline {\n  background-color: transparent;\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--b2)/var(--tw-text-opacity,1));\n}\n\n.btn-outline .badge {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--nf)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--nc)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary .badge {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-secondary .badge {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--s)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--s)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--sc)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-accent .badge {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--a)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--a)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--ac)/var(--tw-text-opacity,1));\n}\n\n.btn-outline .badge.outline {\n  background-color: transparent;\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--nf)/var(--tw-border-opacity,1));\n}\n\n.btn-outline.btn-primary .badge-outline {\n  background-color: transparent;\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--p)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-secondary .badge-outline {\n  background-color: transparent;\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--s)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--s)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-accent .badge-outline {\n  background-color: transparent;\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--a)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--a)/var(--tw-text-opacity,1));\n}\n\n.btn-outline:hover .badge {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.btn-outline:hover .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--nc)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary:hover .badge {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--pc)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--pc)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--p)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary:hover .badge.outline {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--pf)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--pc)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-secondary:hover .badge {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--sc)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--sc)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--s)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-secondary:hover .badge.outline {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--sf)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--sc)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--sc)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-accent:hover .badge {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--ac)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--ac)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--a)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-accent:hover .badge.outline {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--af)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--ac)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--ac)/var(--tw-text-opacity,1));\n}\n\n.btn:active:focus,.btn:active:hover {\n  animation: none;\n  transform: scale(var(--btn-focus-scale,.95));\n}\n\n.btn-active,.btn:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--nf)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--nf)/var(--tw-border-opacity,1));\n}\n\n.btn:focus-visible {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--nf));\n}\n\n.btn-primary {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn-primary.btn-active,.btn-primary:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--pf)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--pf)/var(--tw-border-opacity,1));\n}\n\n.btn-primary:focus-visible {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p));\n}\n\n.btn-secondary {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--s)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--s)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--sc)/var(--tw-text-opacity,1));\n}\n\n.btn-secondary.btn-active,.btn-secondary:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--sf)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--sf)/var(--tw-border-opacity,1));\n}\n\n.btn-secondary:focus-visible {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--s));\n}\n\n.btn-accent {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--a)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--a)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--ac)/var(--tw-text-opacity,1));\n}\n\n.btn-accent.btn-active,.btn-accent:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--af)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--af)/var(--tw-border-opacity,1));\n}\n\n.btn-accent:focus-visible {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--a));\n}\n\n.btn.glass.btn-active,.btn.glass:hover {\n  --glass-opacity: 25%;\n  --glass-border-opacity: 15%;\n}\n\n.btn.glass:focus-visible {\n  box-shadow: 0 0 0 2px currentColor;\n}\n\n.btn-ghost {\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 1px;\n  color: currentColor;\n}\n\n.btn-ghost.btn-active,.btn-ghost:hover {\n  --tw-bg-opacity: 0.2;\n  background-color: hsla(var(--bc)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 0;\n}\n\n.btn-ghost:focus-visible {\n  box-shadow: 0 0 0 2px currentColor;\n}\n\n.btn-outline.btn-primary {\n  --tw-text-opacity: 1;\n  color: hsla(var(--p)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-primary:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--pf)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--pf)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-secondary {\n  --tw-text-opacity: 1;\n  color: hsla(var(--s)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-secondary:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--sf)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--sf)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--sc)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-accent {\n  --tw-text-opacity: 1;\n  color: hsla(var(--a)/var(--tw-text-opacity,1));\n}\n\n.btn-outline.btn-accent:hover {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--af)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--af)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--ac)/var(--tw-text-opacity,1));\n}\n\n.btn.loading.btn-circle:before,.btn.loading.btn-square:before {\n  margin-right: 0;\n}\n\n.btn.loading.btn-lg:before,.btn.loading.btn-xl:before {\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n.btn.loading.btn-sm:before,.btn.loading.btn-xs:before {\n  height: .75rem;\n  width: .75rem;\n}\n\n.btn-group>.btn-active,.btn-group>input[type=radio]:checked.btn {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.btn-group>.btn-active:focus-visible,.btn-group>input[type=radio]:checked.btn:focus-visible {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p));\n}\n\n.btn-group>.btn:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.btn-group>.btn:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n@keyframes button-pop {\n\n  0% {\n    transform: scale(var(--btn-focus-scale,.95));\n  }\n\n  40% {\n    transform: scale(1.02);\n  }\n\n  to {\n    transform: scale(1);\n  }\n}\n\n.card:focus-visible {\n  box-shadow: 0 0 0 2px currentColor;\n}\n\n.card.bordered {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n  border-width: 1px;\n}\n\n.card.compact .card-body {\n  font-size: .875rem;\n  line-height: 1.25rem;\n  padding: 1rem;\n}\n\n.card.compact .card-title {\n  margin-bottom: .25rem;\n}\n\n.card-title {\n  font-weight: 600;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  margin-bottom: .75rem;\n}\n\n.checkbox {\n  --chkbg: var(--bc);\n  --chkfg: var(--b1);\n  -webkit-appearance: none;\n  appearance: none;\n  --tw-border-opacity: 0.2;\n  border-color: hsla(var(--bc)/var(--tw-border-opacity,1));\n  border-width: 1px;\n  cursor: pointer;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: var(--rounded-btn,.5rem);\n}\n\n.checkbox:focus-visible {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--bc));\n}\n\n.checkbox:checked {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--bc)/var(--tw-bg-opacity,1));\n  background-repeat: no-repeat;\n  animation: checkmark var(--animation-input,.2s) ease-in-out;\n  background-image: linear-gradient(-45deg,transparent 65%,hsl(var(--chkbg)) 0),linear-gradient(45deg,transparent 75%,hsl(var(--chkbg)) 0),linear-gradient(-45deg,hsl(var(--chkbg)) 40%,transparent 0),linear-gradient(45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 0,hsl(var(--chkfg)) 40%,transparent 0),linear-gradient(-45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 0);\n}\n\n.checkbox:disabled {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--bc)/var(--tw-bg-opacity,1));\n  border-color: transparent;\n  cursor: not-allowed;\n  opacity: .2;\n}\n\n@keyframes checkmark {\n\n  0% {\n    background-position-y: 5px;\n  }\n\n  50% {\n    background-position-y: -2px;\n  }\n\n  to {\n    background-position-y: 0;\n  }\n}\n\n.collapse:not(.collapse-open):not(.collapse-close) .collapse-title,.collapse:not(.collapse-open):not(.collapse-close) input[type=checkbox] {\n  cursor: pointer;\n}\n\n.collapse:focus:not(.collapse-open):not(.collapse-close) .collapse-title {\n  cursor: unset;\n}\n\n.collapse-title,.collapse>input[type=checkbox] {\n  padding: 1rem;\n  width: 100%;\n  min-height: 3.75rem;\n  transition: background-color .2s ease-in-out;\n}\n\n.collapse:not(.collapse-close) input[type=checkbox]:focus~.collapse-title {\n  --tw-bg-opacity: 0.1;\n  background-color: hsla(var(--bc)/var(--tw-bg-opacity,1));\n}\n\n.collapse-open .collapse-title,.collapse:focus:not(.collapse-close) .collapse-title,.collapse:not(.collapse-close) input[type=checkbox]:checked~.collapse-title {\n  --tw-bg-opacity: 0.1;\n  background-color: hsla(var(--bc)/var(--tw-bg-opacity,1));\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.divider:not(:empty):before {\n  margin-right: 1rem;\n}\n\n.divider:not(:empty):after {\n  margin-left: 1rem;\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--nf));\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-primary {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p));\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-secondary {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--s));\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-accent {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--a));\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-info {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--in));\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-success {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--su));\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-warning {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--wa));\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-error {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--er));\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.glass {\n  box-shadow: 0 0 0 2px currentColor;\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-ghost {\n  box-shadow: 0 0 0 2px currentColor;\n}\n\n.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-link {\n  box-shadow: 0 0 0 2px currentColor;\n}\n\n.dropdown.dropdown-hover:hover .dropdown-content,.dropdown.dropdown-open .dropdown-content,.dropdown:focus-within .dropdown-content,.dropdown:focus .dropdown-content {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n}\n\n.label-text {\n  font-size: .875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.label a:hover {\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.input-bordered {\n  --tw-border-opacity: 0.2;\n}\n\n.input-primary {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p)/var(--tw-border-opacity,1));\n}\n\n.input-primary:focus {\n  box-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p));\n}\n\n.input-disabled,.input[disabled] {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n  cursor: not-allowed;\n  --tw-text-opacity: 0.2;\n}\n\n.input-disabled::placeholder,.input[disabled]::placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc)/var(--tw-placeholder-opacity,1));\n}\n\n.link:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.link:focus-visible {\n  box-shadow: 0 0 0 2px currentColor;\n}\n\n.menu.horizontal li.bordered>a,.menu.horizontal li.bordered>span {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p)/var(--tw-border-opacity,1));\n  border-left-width: 0;\n  border-bottom-width: 4px;\n}\n\n.menu[class*=p-] li a {\n  border-radius: var(--rounded-btn,.5rem);\n}\n\n.menu li>a:focus,.menu li>a:hover {\n  --tw-bg-opacity: 0.1;\n  background-color: hsla(var(--bc)/var(--tw-bg-opacity,1));\n}\n\n.menu li>a.active {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.menu li>a:active {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--pf)/var(--tw-bg-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.menu li.disabled>a:hover,.menu li.disabled>span:hover {\n  background-color: transparent;\n}\n\n.menu li.bordered a,.menu li.bordered span {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p)/var(--tw-border-opacity,1));\n  border-left-width: 4px;\n}\n\n.menu li.hover-bordered a {\n  border-color: transparent;\n  border-left-width: 4px;\n}\n\n.menu li.hover-bordered a:hover {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p)/var(--tw-border-opacity,1));\n}\n\n.menu ul {\n  padding-left: 1.5rem;\n}\n\n.menu.compact li>a,.menu.compact li>span {\n  font-size: .875rem;\n  line-height: 1.25rem;\n  padding-top: .5rem;\n  padding-bottom: .5rem;\n}\n\n.menu .menu-title>a,.menu .menu-title>span {\n  font-weight: 700;\n  font-size: .75rem;\n  line-height: 1rem;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  --tw-text-opacity: 0.4;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.mockup-phone .display {\n  overflow: hidden;\n  border-radius: 40px;\n  margin-top: -25px;\n}\n\n@keyframes radiomark {\n\n  0% {\n    box-shadow: 0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset,var(--focus-shadow);\n  }\n\n  50% {\n    box-shadow: 0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset,var(--focus-shadow);\n  }\n\n  to {\n    box-shadow: 0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset,var(--focus-shadow);\n  }\n}\n\n.select-disabled::placeholder,.select[disabled]::placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc)/var(--tw-placeholder-opacity,1));\n}\n\n.stat+.stat {\n  --tw-border-opacity: 0.1;\n  border-color: hsla(var(--bc)/var(--tw-border-opacity,1));\n  border-left-width: 1px;\n}\n\n.stats.grid-flow-row .stat+.stat {\n  border-left-width: 0;\n  border-top-width: 1px;\n}\n\n.tab:hover {\n  --tw-text-opacity: 1;\n}\n\n.\\!tab:hover {\n  --tw-text-opacity: 1 !important;\n}\n\n.tab.tab-active {\n  border-color: hsla(var(--bc)/var(--tw-border-opacity,1));\n  --tw-border-opacity: 1;\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.\\!tab.\\!tab-active {\n  border-color: hsla(var(--bc)/var(--tw-border-opacity,1)) !important;\n  --tw-border-opacity: 1 !important;\n  --tw-text-opacity: 1 !important;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1)) !important;\n}\n\n.tab:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.\\!tab:focus {\n  outline: 2px solid transparent !important;\n  outline-offset: 2px !important;\n}\n\n.tab:focus-visible {\n  box-shadow: inset 0 0 0 2px currentColor;\n}\n\n.\\!tab:focus-visible {\n  box-shadow: inset 0 0 0 2px currentColor !important;\n}\n\n.tab-lifted {\n  border-top-left-radius: var(--tab-radius,.5rem);\n  border-top-right-radius: var(--tab-radius,.5rem);\n  border: 0 solid transparent;\n  border-bottom: var(--tab-border,1px) solid hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));\n  padding-left: var(--tab-padding,1rem);\n  padding-right: var(--tab-padding,1rem);\n  padding-top: var(--tab-border,1px);\n}\n\n.tab-lifted.tab-active {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n  border-left-width: var(--tab-border,1px);\n  border-bottom-width: 0;\n  border-right-width: var(--tab-border,1px);\n  border-top-width: var(--tab-border,1px);\n  border-left-color: hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));\n  border-right-color: hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));\n  border-top-color: hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1));\n  padding-left: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));\n  padding-right: calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));\n  padding-bottom: var(--tab-border,1px);\n  padding-top: 0;\n}\n\n.tab-lifted.tab-active:after,.tab-lifted.tab-active:before {\n  z-index: 1;\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: var(--tab-radius,.5rem);\n  height: var(--tab-radius,.5rem);\n  bottom: 0;\n  --tab-grad: calc(68% - var(--tab-border, 1px));\n  --tab-corner-bg: radial-gradient(circle at var(--circle-pos),transparent var(--tab-grad),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + 0.3px),hsla(var(--border-color,var(--b3))/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px)),hsla(var(--b1)/var(--tw-border-opacity,1)) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.3px));\n}\n\n.tab-lifted.tab-active:before {\n  left: calc(var(--tab-radius, .5rem)*-1);\n  --circle-pos: top left;\n  background-image: var(--tab-corner-bg);\n}\n\n[dir=rtl] .tab-lifted.tab-active:before {\n  --circle-pos: top right;\n}\n\n.tab-lifted.tab-active:after {\n  right: calc(var(--tab-radius, .5rem)*-1);\n  --circle-pos: top right;\n  background-image: var(--tab-corner-bg);\n}\n\n[dir=rtl] .tab-lifted.tab-active:after {\n  --circle-pos: top left;\n}\n\n.tab-lifted.tab-active:first-child:before {\n  background: none;\n}\n\n.tab-lifted.tab-active:last-child:after {\n  background: none;\n}\n\n.tab-lifted.tab-active+.tab-lifted.tab-active:before {\n  background: none;\n}\n\n.tabs-boxed {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2)/var(--tw-bg-opacity,1));\n  padding: .25rem;\n  border-radius: var(--rounded-btn,.5rem);\n}\n\n.tabs-boxed .tab-active {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc)/var(--tw-text-opacity,1));\n  border-radius: var(--rounded-btn,.5rem);\n}\n\n.tabs-boxed .tab-active:hover {\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.table td,.table th {\n  padding: 1rem;\n  white-space: nowrap;\n}\n\n.table tr.active td,.table tr.active th {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b3)/var(--tw-bg-opacity,1));\n}\n\n.table:not(.table-zebra) tbody tr:not(:last-child) td,.table:not(.table-zebra) tbody tr:not(:last-child) th,.table:not(.table-zebra) tfoot tr:not(:last-child) td,.table:not(.table-zebra) tfoot tr:not(:last-child) th,.table:not(.table-zebra) thead tr:not(:last-child) td,.table:not(.table-zebra) thead tr:not(:last-child) th {\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n  border-bottom-width: 1px;\n}\n\n.table tfoot td,.table tfoot th,.table thead td,.table thead th {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2)/var(--tw-bg-opacity,1));\n  font-weight: 700;\n  font-size: .75rem;\n  line-height: 1rem;\n  text-transform: uppercase;\n}\n\n.table tfoot td:first-child,.table tfoot th:first-child,.table thead td:first-child,.table thead th:first-child {\n  border-top-left-radius: .5rem;\n  border-bottom-left-radius: .5rem;\n}\n\n.table tfoot td:last-child,.table tfoot th:last-child,.table thead td:last-child,.table thead th:last-child {\n  border-top-right-radius: .5rem;\n  border-bottom-right-radius: .5rem;\n}\n\n.table tbody td,.table tbody th {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1)/var(--tw-bg-opacity,1));\n}\n\n.table-compact td,.table-compact th {\n  font-size: .875rem;\n  line-height: 1.25rem;\n  padding: .5rem;\n}\n\n.textarea-disabled,.textarea[disabled] {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b2)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--b2)/var(--tw-border-opacity,1));\n  cursor: not-allowed;\n  --tw-text-opacity: 0.2;\n}\n\n.textarea-disabled::placeholder,.textarea[disabled]::placeholder {\n  --tw-placeholder-opacity: 0.2;\n  color: hsla(var(--bc)/var(--tw-placeholder-opacity,1));\n}\n\n.toggle {\n  --chkbg: hsla(var(--bc)/.2);\n  --focus-shadow: 0 0 0;\n  --handleoffset: 1.5rem;\n  -webkit-appearance: none;\n  appearance: none;\n  --tw-bg-opacity: 0.2;\n  background-color: hsla(var(--bc)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 0.2;\n  border-color: hsla(var(--bc)/var(--tw-border-opacity,1));\n  border-width: 1px;\n  cursor: pointer;\n  height: 1.5rem;\n  width: 3rem;\n  transition-timing-function: cubic-bezier(.4,0,.2,1);\n  transition-duration: .3s;\n  border-radius: var(--rounded-badge,1.9rem);\n  transition: background,box-shadow var(--animation-input,.2s) ease-in-out;\n  box-shadow: calc(var(--handleoffset)*-1) 0 0 2px hsl(var(--b1)) inset,0 0 0 2px hsl(var(--b1)) inset,var(--focus-shadow);\n}\n\n.toggle:focus-visible {\n  --focus-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--bc));\n}\n\n.toggle:checked {\n  --chkbg: hsl(var(--bc));\n  --tw-bg-opacity: 1;\n  --tw-border-opacity: 1;\n  box-shadow: var(--handleoffset) 0 0 2px hsl(var(--b1)) inset,0 0 0 2px hsl(var(--b1)) inset,var(--focus-shadow);\n}\n\n.toggle-primary:focus-visible {\n  --focus-shadow: 0 0 0 2px hsl(var(--b1)),0 0 0 4px hsl(var(--p));\n}\n\n.toggle-primary:checked {\n  --chkbg: hsl(var(--p));\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 0.1;\n  border-color: hsla(var(--p)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.toggle:disabled {\n  --tw-bg-opacity: 0.2;\n  background-color: hsla(var(--bc)/var(--tw-bg-opacity,1));\n  border-color: transparent;\n  cursor: not-allowed;\n}\n\n.rounded-box {\n  border-radius: var(--rounded-box,1rem);\n}\n\n.badge-sm {\n  height: 1rem;\n  font-size: .75rem;\n  line-height: 1rem;\n  padding-left: .438rem;\n  padding-right: .438rem;\n}\n\n.btn-xs {\n  height: 1.5rem;\n  font-size: .75rem;\n  line-height: 1rem;\n  line-height: 1.625;\n  padding-left: .5rem;\n  padding-right: .5rem;\n  min-height: 1.5rem;\n}\n\n.btn-sm {\n  height: 2rem;\n  font-size: .875rem;\n  line-height: 2rem;\n  padding-left: .75rem;\n  padding-right: .75rem;\n  min-height: 2rem;\n}\n\n.btn-square.btn-xs {\n  height: 1.5rem;\n  padding: 0;\n  width: 1.5rem;\n}\n\n.btn-square.btn-sm {\n  height: 2rem;\n  padding: 0;\n  width: 2rem;\n}\n\n.btn-square.btn-md {\n  height: 3rem;\n  padding: 0;\n  width: 3rem;\n}\n\n.btn-square.btn-lg {\n  height: 4rem;\n  padding: 0;\n  width: 4rem;\n}\n\n.btn-circle.btn-xs {\n  border-radius: 9999px;\n  height: 1.5rem;\n  padding: 0;\n  width: 1.5rem;\n}\n\n.btn-circle.btn-sm {\n  border-radius: 9999px;\n  height: 2rem;\n  padding: 0;\n  width: 2rem;\n}\n\n.checkbox-sm {\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n.input-sm {\n  height: 2rem;\n  font-size: .875rem;\n  line-height: 2rem;\n  padding-left: .75rem;\n  padding-right: .75rem;\n}\n\n.select-sm {\n  height: 2rem;\n  font-size: .875rem;\n  line-height: 2rem;\n  padding-left: .75rem;\n  padding-right: .75rem;\n  min-height: 2rem;\n}\n\n.alert-success {\n  --tw-bg-opacity: 0.1;\n  background-color: hsla(var(--su)/var(--tw-bg-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--su)/var(--tw-text-opacity,1));\n}\n\n.avatar.online:before {\n  content: \"\";\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--su)/var(--tw-bg-opacity,1));\n  border-radius: 9999px;\n  display: block;\n  height: .5rem;\n  position: absolute;\n  width: .5rem;\n  z-index: 10;\n  top: 5%;\n  right: 5%;\n  box-shadow: 0 0 0 2px hsl(var(--b1));\n}\n\n.avatar.offline:before {\n  content: \"\";\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b3)/var(--tw-bg-opacity,1));\n  border-radius: 9999px;\n  display: block;\n  height: .5rem;\n  position: absolute;\n  width: .5rem;\n  z-index: 10;\n  top: 5%;\n  right: 5%;\n  box-shadow: 0 0 0 2px hsl(var(--b1));\n}\n\n.badge-primary {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--p)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc)/var(--tw-text-opacity,1));\n}\n\n.badge-secondary {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--s)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--s)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--sc)/var(--tw-text-opacity,1));\n}\n\n.badge-accent {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--a)/var(--tw-bg-opacity,1));\n  --tw-border-opacity: 1;\n  border-color: hsla(var(--a)/var(--tw-border-opacity,1));\n  --tw-text-opacity: 1;\n  color: hsla(var(--ac)/var(--tw-text-opacity,1));\n}\n\n.badge-outline {\n  background-color: transparent;\n  border-color: currentColor;\n  --tw-border-opacity: 0.5;\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc)/var(--tw-text-opacity,1));\n}\n\n.badge-outline.badge-primary {\n  --tw-text-opacity: 1;\n  color: hsla(var(--p)/var(--tw-text-opacity,1));\n}\n\n.badge-outline.badge-secondary {\n  --tw-text-opacity: 1;\n  color: hsla(var(--s)/var(--tw-text-opacity,1));\n}\n\n.badge-outline.badge-accent {\n  --tw-text-opacity: 1;\n  color: hsla(var(--a)/var(--tw-text-opacity,1));\n}\n\n.badge-info {\n  --tw-bg-opacity: 0.1;\n  background-color: hsla(var(--in)/var(--tw-bg-opacity,1));\n  border-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsla(var(--in)/var(--tw-text-opacity,1));\n}\n\n.badge-success {\n  --tw-bg-opacity: 0.1;\n  background-color: hsla(var(--su)/var(--tw-bg-opacity,1));\n  border-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsla(var(--su)/var(--tw-text-opacity,1));\n}\n\n.badge-error {\n  --tw-bg-opacity: 0.1;\n  background-color: hsla(var(--er)/var(--tw-bg-opacity,1));\n  border-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsla(var(--er)/var(--tw-text-opacity,1));\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.sticky {\n  position: sticky;\n}\n\n.top-0 {\n  top: 0px;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.z-20 {\n  z-index: 20;\n}\n\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n\n.col-span-full {\n  grid-column: 1 / -1;\n}\n\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n\n.row-span-2 {\n  grid-row: span 2 / span 2;\n}\n\n.m-1 {\n  margin: 0.25rem;\n}\n\n.m-4 {\n  margin: 1rem;\n}\n\n.mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.my-0 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.mr-2 {\n  margin-right: 0.5rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.ml-2 {\n  margin-left: 0.5rem;\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n}\n\n.table {\n  display: table;\n}\n\n.grid {\n  display: grid;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.h-10 {\n  height: 2.5rem;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-48 {\n  height: 12rem;\n}\n\n.h-60 {\n  height: 15rem;\n}\n\n.h-4 {\n  height: 1rem;\n}\n\n.h-24 {\n  height: 6rem;\n}\n\n.max-h-28 {\n  max-height: 7rem;\n}\n\n.max-h-56 {\n  max-height: 14rem;\n}\n\n.max-h-80 {\n  max-height: 20rem;\n}\n\n.min-h-screen {\n  min-height: 100vh;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.w-10 {\n  width: 2.5rem;\n}\n\n.w-60 {\n  width: 15rem;\n}\n\n.w-96 {\n  width: 24rem;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.w-52 {\n  width: 13rem;\n}\n\n.w-5\\/12 {\n  width: 41.666667%;\n}\n\n.w-3\\/12 {\n  width: 25%;\n}\n\n.w-1\\/12 {\n  width: 8.333333%;\n}\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-80 {\n  width: 20rem;\n}\n\n.w-72 {\n  width: 18rem;\n}\n\n.max-w-snippet {\n  max-width: 40ch;\n}\n\n.max-w-prose {\n  max-width: 65ch;\n}\n\n.flex-1 {\n  flex: 1 1 0%;\n}\n\n.flex-none {\n  flex: none;\n}\n\n.table-fixed {\n  table-layout: fixed;\n}\n\n.origin-top-left {\n  transform-origin: top left;\n}\n\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@keyframes pulse {\n\n  50% {\n    opacity: .5;\n  }\n}\n\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.cursor-default {\n  cursor: default;\n}\n\n.grid-flow-row-dense {\n  grid-auto-flow: row dense;\n}\n\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.grid-rows-3 {\n  grid-template-rows: repeat(3, minmax(0, 1fr));\n}\n\n.grid-rows-1 {\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.items-start {\n  align-items: flex-start;\n}\n\n.items-end {\n  align-items: flex-end;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.gap-3 {\n  gap: 0.75rem;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-1 {\n  gap: 0.25rem;\n}\n\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.self-end {\n  align-self: flex-end;\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n\n.overflow-visible {\n  overflow: visible;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.rounded-l-none {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n.border-none {\n  border-style: none;\n}\n\n.bg-neutral {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--n) / var(--tw-bg-opacity));\n}\n\n.bg-base-100 {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--b1) / var(--tw-bg-opacity));\n}\n\n.bg-neutral-content {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--nc) / var(--tw-bg-opacity));\n}\n\n.bg-primary {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--p) / var(--tw-bg-opacity));\n}\n\n.bg-accent {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--a) / var(--tw-bg-opacity));\n}\n\n.bg-secondary {\n  --tw-bg-opacity: 1;\n  background-color: hsla(var(--s) / var(--tw-bg-opacity));\n}\n\n.bg-emerald-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(4 120 87 / var(--tw-bg-opacity));\n}\n\n.bg-teal-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 118 110 / var(--tw-bg-opacity));\n}\n\n.bg-cyan-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(14 116 144 / var(--tw-bg-opacity));\n}\n\n.bg-sky-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(3 105 161 / var(--tw-bg-opacity));\n}\n\n.bg-blue-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n\n.bg-indigo-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(67 56 202 / var(--tw-bg-opacity));\n}\n\n.bg-violet-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(109 40 217 / var(--tw-bg-opacity));\n}\n\n.bg-rose-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(136 19 55 / var(--tw-bg-opacity));\n}\n\n.bg-pink-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(131 24 67 / var(--tw-bg-opacity));\n}\n\n.bg-fuchsia-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(112 26 117 / var(--tw-bg-opacity));\n}\n\n.bg-purple-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(88 28 135 / var(--tw-bg-opacity));\n}\n\n.bg-violet-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(76 29 149 / var(--tw-bg-opacity));\n}\n\n.bg-amber-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(120 53 15 / var(--tw-bg-opacity));\n}\n\n.bg-orange-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(124 45 18 / var(--tw-bg-opacity));\n}\n\n.bg-cyan-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 78 99 / var(--tw-bg-opacity));\n}\n\n.bg-sky-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(12 74 110 / var(--tw-bg-opacity));\n}\n\n.bg-teal-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(19 78 74 / var(--tw-bg-opacity));\n}\n\n.bg-emerald-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(6 78 59 / var(--tw-bg-opacity));\n}\n\n.bg-green-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(20 83 45 / var(--tw-bg-opacity));\n}\n\n.bg-lime-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(54 83 20 / var(--tw-bg-opacity));\n}\n\n.bg-yellow-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(113 63 18 / var(--tw-bg-opacity));\n}\n\n.bg-stone-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(41 37 36 / var(--tw-bg-opacity));\n}\n\n.bg-stone-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 229 228 / var(--tw-bg-opacity));\n}\n\n.stroke-current {\n  stroke: currentColor;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.pt-4 {\n  padding-top: 1rem;\n}\n\n.pl-0 {\n  padding-left: 0px;\n}\n\n.pr-1\\.5 {\n  padding-right: 0.375rem;\n}\n\n.pr-1 {\n  padding-right: 0.25rem;\n}\n\n.pt-6 {\n  padding-top: 1.5rem;\n}\n\n.pr-16 {\n  padding-right: 4rem;\n}\n\n.pr-2 {\n  padding-right: 0.5rem;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.text-base-content {\n  --tw-text-opacity: 1;\n  color: hsla(var(--bc) / var(--tw-text-opacity));\n}\n\n.text-neutral {\n  --tw-text-opacity: 1;\n  color: hsla(var(--n) / var(--tw-text-opacity));\n}\n\n.text-error {\n  --tw-text-opacity: 1;\n  color: hsla(var(--er) / var(--tw-text-opacity));\n}\n\n.text-primary {\n  --tw-text-opacity: 1;\n  color: hsla(var(--p) / var(--tw-text-opacity));\n}\n\n.text-primary-content {\n  --tw-text-opacity: 1;\n  color: hsla(var(--pc) / var(--tw-text-opacity));\n}\n\n.text-accent-content {\n  --tw-text-opacity: 1;\n  color: hsla(var(--ac) / var(--tw-text-opacity));\n}\n\n.text-secondary-content {\n  --tw-text-opacity: 1;\n  color: hsla(var(--sc) / var(--tw-text-opacity));\n}\n\n.text-success {\n  --tw-text-opacity: 1;\n  color: hsla(var(--su) / var(--tw-text-opacity));\n}\n\n.text-info {\n  --tw-text-opacity: 1;\n  color: hsla(var(--in) / var(--tw-text-opacity));\n}\n\n.text-stone-400 {\n  --tw-text-opacity: 1;\n  color: rgb(168 162 158 / var(--tw-text-opacity));\n}\n\n.text-stone-500 {\n  --tw-text-opacity: 1;\n  color: rgb(120 113 108 / var(--tw-text-opacity));\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-neutral-content {\n  --tw-text-opacity: 1;\n  color: hsla(var(--nc) / var(--tw-text-opacity));\n}\n\n.text-stone-300 {\n  --tw-text-opacity: 1;\n  color: rgb(214 211 209 / var(--tw-text-opacity));\n}\n\n.text-sky-700 {\n  --tw-text-opacity: 1;\n  color: rgb(3 105 161 / var(--tw-text-opacity));\n}\n\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.scrollbar {\n  --scrollbar-track-x: #9ca3af;\n  --scrollbar-track-y: #9ca3af;\n  --scrollbar-thumb-x: #4b5563;\n  --scrollbar-thumb-y: #4b5563;\n  --scrollbar-track-radius-x: 0.375rem;\n  --scrollbar-track-radius-y: 0.375rem;\n  --scrollbar-thumb-radius-x: 0.375rem;\n  --scrollbar-thumb-radius-y: 0.375rem;\n  --scrollbar-width-x: 0.25rem;\n  --scrollbar-width-y: 0.25rem;\n  --scrollbar-auto-track: #9ca3af;\n  --scrollbar-auto-thumb: #4b5563;\n  --scrollbar-auto-track-radius: 0.375rem;\n  --scrollbar-auto-thumb-radius: 0.375rem;\n  --scrollbar-auto-width: 0.25rem;\n  overflow: overlay;\n}\n\n.scrollbar scrollbar-hidden {\n  --scrollbar-track-x: transparent;\n  --scrollbar-track-y: transparent;\n  --scrollbar-thumb-x: transparent;\n  --scrollbar-thumb-y: transparent;\n}\n\n.scrollbar hover\\:scrollbar-hidden:hover {\n  --scrollbar-track-y: transparent;\n  --scrollbar-thumb-y: transparent;\n}\n\n.scrollbar scrollbar-auto {\n  --scrollbar-track-x: var(--scrollbar-auto-track);\n  --scrollbar-track-y: var(--scrollbar-auto-track);\n  --scrollbar-thumb-x: var(--scrollbar-auto-thumb);\n  --scrollbar-thumb-y: var(--scrollbar-auto-thumb);\n}\n\n.scrollbar hover\\:scrollbar-auto:hover {\n  --scrollbar-track-x: var(--scrollbar-auto-track);\n  --scrollbar-track-y: var(--scrollbar-auto-track);\n  --scrollbar-thumb-x: var(--scrollbar-auto-thumb);\n  --scrollbar-thumb-y: var(--scrollbar-auto-thumb);\n}\n\n.scrollbar scrollbar-x-hidden {\n  --scrollbar-track-x: transparent;\n  --scrollbar-thumb-x: transparent;\n}\n\n.scrollbar hover\\:scrollbar-x-hidden {\n  --scrollbar-track-x: transparent;\n  --scrollbar-thumb-x: transparent;\n}\n\n.scrollbar scrollbar-y-hidden {\n  --scrollbar-track-y: transparent;\n  --scrollbar-thumb-y: transparent;\n}\n\n.scrollbar hover\\:scrollbar-y-hidden {\n  --scrollbar-track-y: transparent;\n  --scrollbar-thumb-y: transparent;\n}\n\n.scrollbar::-webkit-scrollbar {\n  height: var(--scrollbar-width-x);\n  width: var(--scrollbar-width-y);\n}\n\n.scrollbar::-webkit-scrollbar-track {\n  background-color: var(--scrollbar-track-x);\n  border-radius: var(--scrollbar-track-radius-x);\n  -webkit-border-radius: var(--scrollbar-track-radius-x);\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb-x);\n  border-radius: var(--scrollbar-thumb-radius-x);\n}\n\n.scrollbar::-webkit-scrollbar:horizontal {\n  height: var(--scrollbar-width-x);\n}\n\n.scrollbar::-webkit-scrollbar-track:horizontal {\n  background-color: var(--scrollbar-track-x);\n  border-radius: var(--scrollbar-track-radius-x);\n  -webkit-border-radius: var(--scrollbar-track-radius-x);\n}\n\n.scrollbar::-webkit-scrollbar-thumb:horizontal {\n  background-color: var(--scrollbar-thumb-x);\n  border-radius: var(--scrollbar-thumb-radius-x);\n}\n\n.scrollbar::-webkit-scrollbar:vertical {\n  width: var(--scrollbar-width-y);\n}\n\n.scrollbar::-webkit-scrollbar-track:vertical {\n  background-color: var(--scrollbar-track-y);\n  border-radius: var(--scrollbar-track-radius-y);\n  -webkit-border-radius: var(--scrollbar-track-radius-y);\n}\n\n.scrollbar::-webkit-scrollbar-thumb:vertical {\n  background-color: var(--scrollbar-thumb-y);\n  border-radius: var(--scrollbar-thumb-radius-y);\n}\n\n.scrollbar::-webkit-scrollbar:hover {\n  height: var(--scrollbar-width-x);\n  width: var(--scrollbar-width-y);\n}\n\n.scrollbar::-webkit-scrollbar-track:hover {\n  background-color: var(--scrollbar-track-x);\n  border-radius: var(--scrollbar-track-radius-x);\n  -webkit-border-radius: var(--scrollbar-track-radius-x);\n}\n\n.scrollbar::-webkit-scrollbar-thumb:hover {\n  background-color: var(--scrollbar-thumb-x);\n  border-radius: var(--scrollbar-thumb-radius-x);\n}\n\n.scrollbar::-webkit-scrollbar:horizontal:hover {\n  height: var(--scrollbar-width-x);\n}\n\n.scrollbar::-webkit-scrollbar-track:horizontal:hover {\n  background-color: var(--scrollbar-track-x);\n  border-radius: var(--scrollbar-track-radius-x);\n  -webkit-border-radius: var(--scrollbar-track-radius-x);\n}\n\n.scrollbar::-webkit-scrollbar-thumb:horizontal:hover {\n  background-color: var(--scrollbar-thumb-x);\n  border-radius: var(--scrollbar-thumb-radius-x);\n}\n\n.scrollbar::-webkit-scrollbar:vertical:hover {\n  width: var(--scrollbar-width-y);\n}\n\n.scrollbar::-webkit-scrollbar-track:vertical:hover {\n  background-color: var(--scrollbar-track-y);\n  border-radius: var(--scrollbar-track-radius-y);\n  -webkit-border-radius: var(--scrollbar-track-radius-y);\n}\n\n.scrollbar::-webkit-scrollbar-thumb:vertical:hover {\n  background-color: var(--scrollbar-thumb-y);\n  border-radius: var(--scrollbar-thumb-radius-y);\n}\n\n.scrollbar-hidden {\n  --scrollbar-track-x: transparent;\n  --scrollbar-track-y: transparent;\n  --scrollbar-thumb-x: transparent;\n  --scrollbar-thumb-y: transparent;\n}\n\n.hover\\:text-amber-300:hover {\n  --tw-text-opacity: 1;\n  color: rgb(252 211 77 / var(--tw-text-opacity));\n}\n\n.hover\\:scrollbar-track-transparent:hover {\n  --scrollbar-track-x: transparent;\n  --scrollbar-track-y: transparent;\n}\n\n.hover\\:scrollbar-track-transparent:hover::-webkit-scrollbar-track {\n  --scrollbar-track-x: transparent;\n  --scrollbar-track-y: transparent;\n}\n\n.hover\\:scrollbar-thumb-yellow-600:hover {\n  --scrollbar-thumb-x: #ca8a04;\n  --scrollbar-thumb-y: #ca8a04;\n}\n\n.hover\\:scrollbar-thumb-yellow-600:hover::-webkit-scrollbar-thumb {\n  --scrollbar-thumb-x: #ca8a04;\n  --scrollbar-thumb-y: #ca8a04;\n}\n\n.hover\\:scrollbar-width-1:hover {\n  --scrollbar-width-x: 0.25rem;\n  --scrollbar-width-y: 0.25rem;\n}\n\n.hover\\:scrollbar-width-1:hover::-webkit-scrollbar-width {\n  --scrollbar-width-x: 0.25rem;\n  --scrollbar-width-y: 0.25rem;\n}\n\n.hover\\:scrollbar-track-radius-full:hover {\n  --scrollbar-track-radius-x: 9999px;\n  --scrollbar-track-radius-y: 9999px;\n}\n\n.hover\\:scrollbar-track-radius-full:hover::-webkit-scrollbar-track-radius {\n  --scrollbar-track-radius-x: 9999px;\n  --scrollbar-track-radius-y: 9999px;\n}\n\n@media (min-width: 640px) {\n\n  .sm\\:visible {\n    visibility: visible;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .md\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  .md\\:grid-rows-none {\n    grid-template-rows: none;\n  }\n\n  .md\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .md\\:pt-8 {\n    padding-top: 2rem;\n  }\n\n  .md\\:pl-6 {\n    padding-left: 1.5rem;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .lg\\:hidden {\n    display: none;\n  }\n\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .lg\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://node_modules/tailwindcss/tailwind.css","webpack://node_modules/tailwindcss/%3Cinput%20css%20lfmaK-%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n","/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: theme('borderColor.DEFAULT', 'currentColor'); /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-hot-toast/dist/react-hot-toast.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-hot-toast/dist/react-hot-toast.esm.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckmarkIcon": function() { return /* binding */ CheckmarkIcon; },
/* harmony export */   "ErrorIcon": function() { return /* binding */ ErrorIcon; },
/* harmony export */   "LoaderIcon": function() { return /* binding */ LoaderIcon; },
/* harmony export */   "ToastBar": function() { return /* binding */ ToastBar; },
/* harmony export */   "ToastIcon": function() { return /* binding */ ToastIcon; },
/* harmony export */   "Toaster": function() { return /* binding */ Toaster; },
/* harmony export */   "resolveValue": function() { return /* binding */ resolveValue; },
/* harmony export */   "toast": function() { return /* binding */ toast; },
/* harmony export */   "useToaster": function() { return /* binding */ useToaster; },
/* harmony export */   "useToasterStore": function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var goober__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goober */ "./node_modules/goober/dist/goober.modern.js");



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var isFunction = function isFunction(valOrFunction) {
  return typeof valOrFunction === 'function';
};

var resolveValue = function resolveValue(valOrFunction, arg) {
  return isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
};

var genId = /*#__PURE__*/function () {
  var count = 0;
  return function () {
    return (++count).toString();
  };
}();
var createRectRef = function createRectRef(onRect) {
  return function (el) {
    if (el) {
      setTimeout(function () {
        var boundingRect = el.getBoundingClientRect();
        onRect(boundingRect);
      });
    }
  };
};
var prefersReducedMotion = /*#__PURE__*/function () {
  // Cache result
  var shouldReduceMotion = undefined;
  return function () {
    if (shouldReduceMotion === undefined) {
      var mediaQuery = matchMedia('(prefers-reduced-motion: reduce)');
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }

    return shouldReduceMotion;
  };
}();

var TOAST_LIMIT = 20;
var ActionType;

(function (ActionType) {
  ActionType[ActionType["ADD_TOAST"] = 0] = "ADD_TOAST";
  ActionType[ActionType["UPDATE_TOAST"] = 1] = "UPDATE_TOAST";
  ActionType[ActionType["UPSERT_TOAST"] = 2] = "UPSERT_TOAST";
  ActionType[ActionType["DISMISS_TOAST"] = 3] = "DISMISS_TOAST";
  ActionType[ActionType["REMOVE_TOAST"] = 4] = "REMOVE_TOAST";
  ActionType[ActionType["START_PAUSE"] = 5] = "START_PAUSE";
  ActionType[ActionType["END_PAUSE"] = 6] = "END_PAUSE";
})(ActionType || (ActionType = {}));

var toastTimeouts = /*#__PURE__*/new Map();

var addToRemoveQueue = function addToRemoveQueue(toastId) {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  var timeout = setTimeout(function () {
    toastTimeouts["delete"](toastId);
    dispatch({
      type: ActionType.REMOVE_TOAST,
      toastId: toastId
    });
  }, 1000);
  toastTimeouts.set(toastId, timeout);
};

var clearFromRemoveQueue = function clearFromRemoveQueue(toastId) {
  var timeout = toastTimeouts.get(toastId);

  if (timeout) {
    clearTimeout(timeout);
  }
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return _extends({}, state, {
        toasts: [action.toast].concat(state.toasts).slice(0, TOAST_LIMIT)
      });

    case ActionType.UPDATE_TOAST:
      //  ! Side effects !
      if (action.toast.id) {
        clearFromRemoveQueue(action.toast.id);
      }

      return _extends({}, state, {
        toasts: state.toasts.map(function (t) {
          return t.id === action.toast.id ? _extends({}, t, action.toast) : t;
        })
      });

    case ActionType.UPSERT_TOAST:
      var toast = action.toast;
      return state.toasts.find(function (t) {
        return t.id === toast.id;
      }) ? reducer(state, {
        type: ActionType.UPDATE_TOAST,
        toast: toast
      }) : reducer(state, {
        type: ActionType.ADD_TOAST,
        toast: toast
      });

    case ActionType.DISMISS_TOAST:
      var toastId = action.toastId; // ! Side effects ! - This could be execrated into a dismissToast() action, but I'll keep it here for simplicity

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach(function (toast) {
          addToRemoveQueue(toast.id);
        });
      }

      return _extends({}, state, {
        toasts: state.toasts.map(function (t) {
          return t.id === toastId || toastId === undefined ? _extends({}, t, {
            visible: false
          }) : t;
        })
      });

    case ActionType.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return _extends({}, state, {
          toasts: []
        });
      }

      return _extends({}, state, {
        toasts: state.toasts.filter(function (t) {
          return t.id !== action.toastId;
        })
      });

    case ActionType.START_PAUSE:
      return _extends({}, state, {
        pausedAt: action.time
      });

    case ActionType.END_PAUSE:
      var diff = action.time - (state.pausedAt || 0);
      return _extends({}, state, {
        pausedAt: undefined,
        toasts: state.toasts.map(function (t) {
          return _extends({}, t, {
            pauseDuration: t.pauseDuration + diff
          });
        })
      });
  }
};
var listeners = [];
var memoryState = {
  toasts: [],
  pausedAt: undefined
};
var dispatch = function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach(function (listener) {
    listener(memoryState);
  });
};
var defaultTimeouts = {
  blank: 4000,
  error: 4000,
  success: 2000,
  loading: Infinity,
  custom: 4000
};
var useStore = function useStore(toastOptions) {
  if (toastOptions === void 0) {
    toastOptions = {};
  }

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(memoryState),
      state = _useState[0],
      setState = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    listeners.push(setState);
    return function () {
      var index = listeners.indexOf(setState);

      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  var mergedToasts = state.toasts.map(function (t) {
    var _toastOptions$t$type, _toastOptions, _toastOptions$t$type2;

    return _extends({}, toastOptions, toastOptions[t.type], t, {
      duration: t.duration || ((_toastOptions$t$type = toastOptions[t.type]) == null ? void 0 : _toastOptions$t$type.duration) || ((_toastOptions = toastOptions) == null ? void 0 : _toastOptions.duration) || defaultTimeouts[t.type],
      style: _extends({}, toastOptions.style, (_toastOptions$t$type2 = toastOptions[t.type]) == null ? void 0 : _toastOptions$t$type2.style, t.style)
    });
  });
  return _extends({}, state, {
    toasts: mergedToasts
  });
};

var createToast = function createToast(message, type, opts) {
  if (type === void 0) {
    type = 'blank';
  }

  return _extends({
    createdAt: Date.now(),
    visible: true,
    type: type,
    ariaProps: {
      role: 'status',
      'aria-live': 'polite'
    },
    message: message,
    pauseDuration: 0
  }, opts, {
    id: (opts == null ? void 0 : opts.id) || genId()
  });
};

var createHandler = function createHandler(type) {
  return function (message, options) {
    var toast = createToast(message, type, options);
    dispatch({
      type: ActionType.UPSERT_TOAST,
      toast: toast
    });
    return toast.id;
  };
};

var toast = function toast(message, opts) {
  return createHandler('blank')(message, opts);
};

toast.error = /*#__PURE__*/createHandler('error');
toast.success = /*#__PURE__*/createHandler('success');
toast.loading = /*#__PURE__*/createHandler('loading');
toast.custom = /*#__PURE__*/createHandler('custom');

toast.dismiss = function (toastId) {
  dispatch({
    type: ActionType.DISMISS_TOAST,
    toastId: toastId
  });
};

toast.remove = function (toastId) {
  return dispatch({
    type: ActionType.REMOVE_TOAST,
    toastId: toastId
  });
};

toast.promise = function (promise, msgs, opts) {
  var id = toast.loading(msgs.loading, _extends({}, opts, opts == null ? void 0 : opts.loading));
  promise.then(function (p) {
    toast.success(resolveValue(msgs.success, p), _extends({
      id: id
    }, opts, opts == null ? void 0 : opts.success));
    return p;
  })["catch"](function (e) {
    toast.error(resolveValue(msgs.error, e), _extends({
      id: id
    }, opts, opts == null ? void 0 : opts.error));
  });
  return promise;
};

var useToaster = function useToaster(toastOptions) {
  var _useStore = useStore(toastOptions),
      toasts = _useStore.toasts,
      pausedAt = _useStore.pausedAt;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (pausedAt) {
      return;
    }

    var now = Date.now();
    var timeouts = toasts.map(function (t) {
      if (t.duration === Infinity) {
        return;
      }

      var durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);

      if (durationLeft < 0) {
        if (t.visible) {
          toast.dismiss(t.id);
        }

        return;
      }

      return setTimeout(function () {
        return toast.dismiss(t.id);
      }, durationLeft);
    });
    return function () {
      timeouts.forEach(function (timeout) {
        return timeout && clearTimeout(timeout);
      });
    };
  }, [toasts, pausedAt]);
  var handlers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      startPause: function startPause() {
        dispatch({
          type: ActionType.START_PAUSE,
          time: Date.now()
        });
      },
      endPause: function endPause() {
        if (pausedAt) {
          dispatch({
            type: ActionType.END_PAUSE,
            time: Date.now()
          });
        }
      },
      updateHeight: function updateHeight(toastId, height) {
        return dispatch({
          type: ActionType.UPDATE_TOAST,
          toast: {
            id: toastId,
            height: height
          }
        });
      },
      calculateOffset: function calculateOffset(toast, opts) {
        var _relevantToasts$filte;

        var _ref = opts || {},
            _ref$reverseOrder = _ref.reverseOrder,
            reverseOrder = _ref$reverseOrder === void 0 ? false : _ref$reverseOrder,
            _ref$gutter = _ref.gutter,
            gutter = _ref$gutter === void 0 ? 8 : _ref$gutter,
            defaultPosition = _ref.defaultPosition;

        var relevantToasts = toasts.filter(function (t) {
          return (t.position || defaultPosition) === (toast.position || defaultPosition) && t.height;
        });
        var toastIndex = relevantToasts.findIndex(function (t) {
          return t.id === toast.id;
        });
        var toastsBefore = relevantToasts.filter(function (toast, i) {
          return i < toastIndex && toast.visible;
        }).length;

        var offset = (_relevantToasts$filte = relevantToasts.filter(function (t) {
          return t.visible;
        })).slice.apply(_relevantToasts$filte, reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce(function (acc, t) {
          return acc + (t.height || 0) + gutter;
        }, 0);

        return offset;
      }
    };
  }, [toasts, pausedAt]);
  return {
    toasts: toasts,
    handlers: handlers
  };
};

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ", ";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: ", " 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var circleAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject());
var firstLineAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject2());
var secondLineAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject3());
var ErrorIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject4(), function (p) {
  return p.primary || '#ff4b4b';
}, circleAnimation, firstLineAnimation, function (p) {
  return p.secondary || '#fff';
}, secondLineAnimation);

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ", ";\n  border-right-color: ", ";\n  animation: ", " 1s linear infinite;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var rotate = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject$1());
var LoaderIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$1(), function (p) {
  return p.secondary || '#e0e0e0';
}, function (p) {
  return p.primary || '#616161';
}, rotate);

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ", ";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: ", " 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: ", " 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ", ";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var circleAnimation$1 = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject$2());
var checkmarkAnimation = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject2$2());
var CheckmarkIcon = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject3$1(), function (p) {
  return p.primary || '#61d345';
}, circleAnimation$1, checkmarkAnimation, function (p) {
  return p.secondary || '#fff';
});

function _templateObject4$1() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: ", " 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StatusWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject$3());
var IndicatorWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$3());
var enter = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)( /*#__PURE__*/_templateObject3$2());
var AnimatedIconWrapper = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject4$1(), enter);
var ToastIcon = function ToastIcon(_ref) {
  var toast = _ref.toast;
  var icon = toast.icon,
      type = toast.type,
      iconTheme = toast.iconTheme;

  if (icon !== undefined) {
    if (typeof icon === 'string') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AnimatedIconWrapper, null, icon);
    } else {
      return icon;
    }
  }

  if (type === 'blank') {
    return null;
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IndicatorWrapper, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoaderIcon, Object.assign({}, iconTheme)), type !== 'loading' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StatusWrapper, null, type === 'error' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ErrorIcon, Object.assign({}, iconTheme)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckmarkIcon, Object.assign({}, iconTheme))));
};

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var enterAnimation = function enterAnimation(factor) {
  return "\n0% {transform: translate3d(0," + factor * -200 + "%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n";
};

var exitAnimation = function exitAnimation(factor) {
  return "\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0," + factor * -150 + "%,-1px) scale(.6); opacity:0;}\n";
};

var fadeInAnimation = "0%{opacity:0;} 100%{opacity:1;}";
var fadeOutAnimation = "0%{opacity:1;} 100%{opacity:0;}";
var ToastBarBase = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div', react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)( /*#__PURE__*/_templateObject$4());
var Message = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)('div')( /*#__PURE__*/_templateObject2$4());

var getAnimationStyle = function getAnimationStyle(position, visible) {
  var top = position.includes('top');
  var factor = top ? 1 : -1;

  var _ref = prefersReducedMotion() ? [fadeInAnimation, fadeOutAnimation] : [enterAnimation(factor), exitAnimation(factor)],
      enter = _ref[0],
      exit = _ref[1];

  return {
    animation: visible ? (0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(enter) + " 0.35s cubic-bezier(.21,1.02,.73,1) forwards" : (0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(exit) + " 0.4s forwards cubic-bezier(.06,.71,.55,1)"
  };
};

var ToastBar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (_ref2) {
  var toast = _ref2.toast,
      position = _ref2.position,
      style = _ref2.style,
      children = _ref2.children;
  var animationStyle = toast != null && toast.height ? getAnimationStyle(toast.position || position || 'top-center', toast.visible) : {
    opacity: 0
  };
  var icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastIcon, {
    toast: toast
  });
  var message = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Message, Object.assign({}, toast.ariaProps), resolveValue(toast.message, toast));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastBarBase, {
    className: toast.className,
    style: _extends({}, animationStyle, style, toast.style)
  }, typeof children === 'function' ? children({
    icon: icon,
    message: message
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, icon, message));
});

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
(0,goober__WEBPACK_IMPORTED_MODULE_1__.setup)(react__WEBPACK_IMPORTED_MODULE_0__.createElement);

var getPositionStyle = function getPositionStyle(position, offset) {
  var top = position.includes('top');
  var verticalStyle = top ? {
    top: 0
  } : {
    bottom: 0
  };
  var horizontalStyle = position.includes('center') ? {
    justifyContent: 'center'
  } : position.includes('right') ? {
    justifyContent: 'flex-end'
  } : {};
  return _extends({
    left: 0,
    right: 0,
    display: 'flex',
    position: 'absolute',
    transition: prefersReducedMotion() ? undefined : "all 230ms cubic-bezier(.21,1.02,.73,1)",
    transform: "translateY(" + offset * (top ? 1 : -1) + "px)"
  }, verticalStyle, horizontalStyle);
};

var activeClass = /*#__PURE__*/(0,goober__WEBPACK_IMPORTED_MODULE_1__.css)( /*#__PURE__*/_templateObject$5());
var DEFAULT_OFFSET = 16;
var Toaster = function Toaster(_ref) {
  var reverseOrder = _ref.reverseOrder,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top-center' : _ref$position,
      toastOptions = _ref.toastOptions,
      gutter = _ref.gutter,
      children = _ref.children,
      containerStyle = _ref.containerStyle,
      containerClassName = _ref.containerClassName;

  var _useToaster = useToaster(toastOptions),
      toasts = _useToaster.toasts,
      handlers = _useToaster.handlers;

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _extends({
      position: 'fixed',
      zIndex: 9999,
      top: DEFAULT_OFFSET,
      left: DEFAULT_OFFSET,
      right: DEFAULT_OFFSET,
      bottom: DEFAULT_OFFSET,
      pointerEvents: 'none'
    }, containerStyle),
    className: containerClassName,
    onMouseEnter: handlers.startPause,
    onMouseLeave: handlers.endPause
  }, toasts.map(function (t) {
    var toastPosition = t.position || position;
    var offset = handlers.calculateOffset(t, {
      reverseOrder: reverseOrder,
      gutter: gutter,
      defaultPosition: position
    });
    var positionStyle = getPositionStyle(toastPosition, offset);
    var ref = t.height ? undefined : createRectRef(function (rect) {
      handlers.updateHeight(t.id, rect.height);
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: ref,
      className: t.visible ? activeClass : '',
      key: t.id,
      style: positionStyle
    }, t.type === 'custom' ? resolveValue(t.message, t) : children ? children(t) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToastBar, {
      toast: t,
      position: toastPosition
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (toast);

//# sourceMappingURL=react-hot-toast.esm.js.map


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXBpL3NrZWxlZmlyZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvYXBpL3N0cmF3YmVycnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvY29udGV4dHMvS29rb2FQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvY29udGV4dHMvU2lkZWJhckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2NvbnRleHRzL1NrZWxlZmlyZUNvbnRleHQvU2tlbGVmaXJlUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2NvbnRleHRzL1NrZWxlZmlyZUNvbnRleHQvU2tlbGVmaXJlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvY29udGV4dHMvU3RyYXdiZXJyeUNvbnRleHQvU3RyYXdiZXJyeVByb3ZpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9jb250ZXh0cy9TdHJhd2JlcnJ5Q29udGV4dC9TdHJhd2JlcnJ5UmVkdWNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ29vYmVyL2Rpc3QvZ29vYmVyLm1vZGVybi5qcyIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcz84NjcxIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhvdC10b2FzdC9kaXN0L3JlYWN0LWhvdC10b2FzdC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0U2tlbGVGaXJlIiwiYXhpb3MiLCJBUElfVVJMIiwiZ2V0QWN0aXZlQ291cnNlcyIsImdldFVucmVhZEFjdGl2aXRpZXMiLCJtYXJrQXNSZWFkIiwibW9kdWxlSUQiLCJtYXJrU2VsZWN0ZWRBc1JlYWQiLCJtb2R1bGVJRHMiLCJpZHMiLCJxdWlja0FkZExvZyIsInJhd0xvZyIsImRhdGVPYmoiLCJEYXRlIiwiZGF0ZSIsInNUaW1lIiwic3RhcnRUaW1lIiwic3BsaXQiLCJlVGltZSIsImVuZFRpbWUiLCJsb2ciLCJpZCIsImNhdGVnb3J5IiwiZGVzYyIsImRlc2NyaXB0aW9uIiwiZGF5IiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwibW9udGgiLCJnZXRNb250aCIsInN0YXJ0X2hvdXIiLCJzdGFydF9taW4iLCJlbmRfaG91ciIsImVuZF9taW4iLCJmZXRjaE1vbnRobHlMb2dzIiwieWVhciIsImZldGNoTW9udGhseUVhcm5pbmdzIiwiZmV0Y2hZZWFybHlFYXJuaW5ncyIsImZldGNoQWxsTGlzdGluZ3MiLCJyZXNldEFjdGl2ZVBlcmlvZCIsInNjcmFwZUxpc3RpbmdzIiwic2NyYXBlT2xkZXJMb2dzIiwic2NyYXBlTG9ncyIsImNvdXJzZUlkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFBheWRheSIsInBheWxvYWQiLCJzY3JhcGVBbmRGZXRjaCIsInByZWZlcnJlZF9vcmRlciIsImxpc3RpbmdzIiwiZGF0YSIsInNvcnQiLCJhIiwiYiIsInN0YXRlIiwiaW5kZXhPZiIsInN0YXR1cyIsImNvbnNvbGUiLCJDVVJSRU5UX01PTlRIIiwiQ1VSUkVOVF9ZRUFSIiwiZ2V0RnVsbFllYXIiLCJLb2tvYVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJJTklUSUFMX1NUQVRFIiwiaXNFeHBhbmRlZCIsIlNpZGViYXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlNpZGViYXJQcm92aWRlciIsInVzZVJlZHVjZXIiLCJTaWRlYmFyUmVkdWNlciIsInNpZGViYXIiLCJkaXNwYXRjaCIsImFjdGlvbiIsInR5cGUiLCJ1c2VTaWRlYmFyIiwiY29udGV4dCIsIlJlYWN0IiwidW5kZWZpbmVkIiwiRXJyb3IiLCJjb3Vyc2VzIiwiYWN0aXZpdGllcyIsImlzQWN0aXZlIiwiU2tlbGVmaXJlQ29udGV4dCIsIlNrZWxlZmlyZVByb3ZpZGVyIiwiU2tlbGVmaXJlUmVkdWNlciIsInNrZWxlZmlyZSIsInRvZ2dsZVBvd2VyIiwic2V0Q291cnNlcyIsInNldEFjdGl2aXRpZXMiLCJjb3VudFVucmVhZEFjdGl2aXRpZXMiLCJtYXAiLCJjb3Vyc2UiLCJ1bnJlYWQiLCJmaWx0ZXIiLCJhY3Rpdml0eSIsImNvdXJzZUlEIiwibGVuZ3RoIiwidG9hc3QiLCJpbmNsdWRlcyIsInJlcG9ydHMiLCJsb2dzIiwiU3RyYXdiZXJyeUNvbnRleHQiLCJTdHJhd2JlcnJ5UHJvdmlkZXIiLCJTdHJhd2JlcnJ5UmVkdWNlciIsInN0cmF3YmVycnkiLCJ2YWx1ZSIsInJlcG9ydFVwZGF0ZWQiLCJwYWlkIiwiZmluZEluZGV4IiwieCIsInJlcG9ydF9pZCIsImlzX3BhaWQiLCJwYWlkX29uIiwic29ydGVkX2xpc3RpbmdzIiwidGl0bGUiLCJuZWVkZWQiLCJhcHBsaWVkIiwiYWNjZXB0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUjJFO0FBQzVEO0FBQ2YsaUNBQWlDLG9GQUFnQjtBQUNqRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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YSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsWUFBWSxPQUFPLE1BQU0sTUFBTSxNQUFNLGFBQWEsT0FBTyxPQUFPLE1BQU0sUUFBUSx1QkFBdUIscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxRQUFRLE1BQU0sS0FBSyxxQkFBcUIsdUJBQXVCLHVCQUF1QixRQUFRLFFBQVEsTUFBTSxTQUFTLHVCQUF1QixxQkFBcUIsdUJBQXVCLHFCQUFxQixxQkFBcUIscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sYUFBYSxPQUFPLE9BQU8sTUFBTSxRQUFRLHVCQUF1Qix1QkFBdUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLE1BQU0sV0FBVyxPQUFPLE9BQU8sTUFBTSxLQUFLLHVCQUF1Qix1QkFBdUIsUUFBUSxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssdUJBQXVCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0saUJBQWlCLFdBQVcsT0FBTyxLQUFLLFdBQVcsVUFBVSxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sT0FBTyxNQUFNLE1BQU0scUJBQXFCLHNCQUFzQixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssS0FBSyxXQUFXLE9BQU8sUUFBUSxNQUFNLFlBQVkscUJBQXFCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLFFBQVEsTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxTQUFTLE9BQU8sS0FBSyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sU0FBUyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxTQUFTLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxTQUFTLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sU0FBUyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxTQUFTLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLFFB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLDJEQUEyRCxTQUFTO0FBQ3BFLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNsckNhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsdUpBQXNFO0FBQ3hFIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgS29rb2FQcm92aWRlciBmcm9tIFwiLi4vc2VydmljZXMvY29udGV4dHMvS29rb2FQcm92aWRlclwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8S29rb2FQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0tva29hUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNrZWxlRmlyZSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAke0FQSV9VUkx9L3NrZWxlZmlyZS9gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGl2ZUNvdXJzZXMoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtBUElfVVJMfS9za2VsZWZpcmUvY291cnNlcy9gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVucmVhZEFjdGl2aXRpZXMoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtBUElfVVJMfS9za2VsZWZpcmUvYWN0aXZpdGllcy9gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc1JlYWQobW9kdWxlSUQpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYCR7QVBJX1VSTH0vc2tlbGVmaXJlL2FjdGl2aXRpZXMvJHttb2R1bGVJRH0vbWFya19hc19yZWFkL2ApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFya1NlbGVjdGVkQXNSZWFkKG1vZHVsZUlEcykge1xyXG4gIGNvbnN0IGlkcyA9IHsgaWRzOiBtb2R1bGVJRHMgfTtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYCR7QVBJX1VSTH0vc2tlbGVmaXJlL2FjdGl2aXRpZXMvbWFya19zZWxlY3RlZF9hc19yZWFkL2AsIGlkcyk7XHJcbn1cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxdWlja0FkZExvZyhyYXdMb2cpIHtcclxuICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUocmF3TG9nLmRhdGUpXHJcbiAgY29uc3Qgc1RpbWUgPSByYXdMb2cuc3RhcnRUaW1lLnNwbGl0KCc6JylcclxuICBjb25zdCBlVGltZSA9IHJhd0xvZy5lbmRUaW1lLnNwbGl0KCc6JylcclxuXHJcbiAgY29uc3QgbG9nID0ge1xyXG4gICAgaWQ6IHJhd0xvZy5pZCxcclxuICAgIGNhdGVnb3J5OiByYXdMb2cuY2F0ZWdvcnksXHJcbiAgICBkZXNjOiByYXdMb2cuZGVzY3JpcHRpb24sXHJcbiAgICBkYXk6IGRhdGVPYmouZ2V0RGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBtb250aDogKGRhdGVPYmouZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCksXHJcbiAgICBzdGFydF9ob3VyOiBzVGltZVswXSxcclxuICAgIHN0YXJ0X21pbjogc1RpbWVbMV0sXHJcbiAgICBlbmRfaG91cjogZVRpbWVbMF0sXHJcbiAgICBlbmRfbWluOiBlVGltZVsxXSxcclxuICB9XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7QVBJX1VSTH0vc3RyYXdiZXJyeS9xdWlja2xvZy9gLCBsb2cpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1vbnRobHlMb2dzKG1vbnRoLCB5ZWFyKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtBUElfVVJMfS9zdHJhd2JlcnJ5L2xvZ3MvJHt5ZWFyfS8ke21vbnRofWApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaE1vbnRobHlFYXJuaW5ncyhtb250aCwgeWVhcikge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYCR7QVBJX1VSTH0vc3RyYXdiZXJyeS9lYXJuaW5ncy8ke3llYXJ9LyR7bW9udGh9YClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoWWVhcmx5RWFybmluZ3MoeWVhcikge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYCR7QVBJX1VSTH0vc3RyYXdiZXJyeS9lYXJuaW5ncy8ke3llYXJ9YClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQWxsTGlzdGluZ3MoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtBUElfVVJMfS9zdHJhd2JlcnJ5L2xpc3RpbmdzL2ApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldEFjdGl2ZVBlcmlvZCgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAke0FQSV9VUkx9L3N0cmF3YmVycnkvbGlzdGluZ3MvYnVsa19zZXRfbGlzdGluZ19pbmFjdGl2ZS9gKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2NyYXBlTGlzdGluZ3MoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtBUElfVVJMfS9zdHJhd2JlcnJ5L2dldC1saXN0aW5nc2ApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JhcGVPbGRlckxvZ3MoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtBUElfVVJMfS9zdHJhd2JlcnJ5L2dldC1vbGQtbG9nc2ApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JhcGVMb2dzKCkge1xyXG4gIGNvbnN0IGNvdXJzZUlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0cmF3YmVycnlfY291cnNlX3NpYXNpc3RlbicpXHJcbiAgcmV0dXJuIGF4aW9zLmdldChgJHtBUElfVVJMfS9zdHJhd2JlcnJ5L2dldC1sb2dzLyR7Y291cnNlSWR9YClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFBheWRheShpZCwgcGF5bG9hZCkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgJHtBUElfVVJMfS9zdHJhd2JlcnJ5L3JlcG9ydC8ke2lkfS9gLCBwYXlsb2FkKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2NyYXBlQW5kRmV0Y2goKSB7XHJcbiAgdmFyIHByZWZlcnJlZF9vcmRlciA9IFsnZGl0ZXJpbWEnLCAnZGlyZWtvbWVuZGFzaWthbicsICdtZWxhbWFyJywgJy0tLS0tLS0nXVxyXG4gIGF3YWl0IHNjcmFwZUxpc3RpbmdzKClcclxuICBjb25zdCB7IGRhdGE6IGxpc3RpbmdzIH0gPSBhd2FpdCBmZXRjaEFsbExpc3RpbmdzKClcclxuICBsaXN0aW5nc1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IChhLnN0YXRlIDwgYi5zdGF0ZSA/IDEgOiAtMSkpXHJcbiAgICAuc29ydCgoYSwgYikgPT5cclxuICAgICAgcHJlZmVycmVkX29yZGVyLmluZGV4T2YoYS5zdGF0dXMpID4gcHJlZmVycmVkX29yZGVyLmluZGV4T2YoYi5zdGF0dXMpXHJcbiAgICAgICAgPyAxXHJcbiAgICAgICAgOiAtMVxyXG4gICAgKVxyXG4gIGNvbnNvbGUubG9nKGxpc3RpbmdzKVxyXG4gIHJldHVybiBsaXN0aW5nc1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuQVBJX1VSTFxyXG5leHBvcnQgY29uc3QgQ1VSUkVOVF9NT05USCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDFcclxuZXhwb3J0IGNvbnN0IENVUlJFTlRfWUVBUiA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNpZGViYXJQcm92aWRlciB9IGZyb20gJy4vU2lkZWJhckNvbnRleHQnXHJcbmltcG9ydCB7IFNrZWxlZmlyZVByb3ZpZGVyIH0gZnJvbSAnLi9Ta2VsZWZpcmVDb250ZXh0L1NrZWxlZmlyZVByb3ZpZGVyJ1xyXG5pbXBvcnQgeyBTdHJhd2JlcnJ5UHJvdmlkZXIgfSBmcm9tICcuL1N0cmF3YmVycnlDb250ZXh0L1N0cmF3YmVycnlQcm92aWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtva29hUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlYmFyUHJvdmlkZXI+XHJcbiAgICAgIDxTa2VsZWZpcmVQcm92aWRlcj5cclxuICAgICAgICA8U3RyYXdiZXJyeVByb3ZpZGVyPntjaGlsZHJlbn08L1N0cmF3YmVycnlQcm92aWRlcj5cclxuICAgICAgPC9Ta2VsZWZpcmVQcm92aWRlcj5cclxuICAgIDwvU2lkZWJhclByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBpc0V4cGFuZGVkOiB0cnVlLFxyXG59XHJcblxyXG5jb25zdCBTaWRlYmFyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoSU5JVElBTF9TVEFURSlcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlYmFyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3NpZGViYXIsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoU2lkZWJhclJlZHVjZXIsIElOSVRJQUxfU1RBVEUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZWJhckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBzaWRlYmFyLFxyXG4gICAgICAgIGRpc3BhdGNoLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NpZGViYXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdzZXRfZXhwYW5kZWQnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNFeHBhbmRlZDogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlU2lkZWJhcigpIHtcclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChTaWRlYmFyQ29udGV4dClcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVNpZGViYXIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFNpZGViYXJQcm92aWRlcicpXHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNrZWxlZmlyZVJlZHVjZXIgZnJvbSAnLi9Ta2VsZWZpcmVSZWR1Y2VyJ1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBjb3Vyc2VzOiBbXSxcclxuICBhY3Rpdml0aWVzOiBbXSxcclxuICBpc0FjdGl2ZTogZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IFNrZWxlZmlyZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KElOSVRJQUxfU1RBVEUpXHJcblxyXG5jb25zdCBTa2VsZWZpcmVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc2tlbGVmaXJlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFNrZWxlZmlyZVJlZHVjZXIsIElOSVRJQUxfU1RBVEUpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBvd2VyID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnVE9HR0xFX1BPV0VSJyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRDb3Vyc2VzID0gKGNvdXJzZXMpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ1NFVF9DT1VSU0VTJyxcclxuICAgICAgcGF5bG9hZDogY291cnNlcyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRBY3Rpdml0aWVzID0gKGFjdGl2aXRpZXMpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ1NFVF9BQ1RJVklUSUVTJyxcclxuICAgICAgcGF5bG9hZDogYWN0aXZpdGllcyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjb3VudFVucmVhZEFjdGl2aXRpZXMgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdDT1VOVF9VTlJFQURfQUNUSVZJVElFUycsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFya0FzUmVhZCA9IChtb2R1bGVJRCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnTUFSS19SRUFEJyxcclxuICAgICAgcGF5bG9hZDogbW9kdWxlSUQsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTa2VsZWZpcmVDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgc2tlbGVmaXJlLFxyXG4gICAgICAgIHRvZ2dsZVBvd2VyLFxyXG4gICAgICAgIHNldENvdXJzZXMsXHJcbiAgICAgICAgc2V0QWN0aXZpdGllcyxcclxuICAgICAgICBjb3VudFVucmVhZEFjdGl2aXRpZXMsXHJcbiAgICAgICAgbWFya0FzUmVhZCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Ta2VsZWZpcmVDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgU2tlbGVmaXJlQ29udGV4dCwgU2tlbGVmaXJlUHJvdmlkZXIgfVxyXG4iLCJpbXBvcnQgeyBtYXJrQXNSZWFkLCBtYXJrU2VsZWN0ZWRBc1JlYWQgfSBmcm9tICdAYXBpL3NrZWxlZmlyZSdcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2VsZWZpcmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBjb25zdCB7IGFjdGl2aXRpZXMsIGNvdXJzZXMsIGlzQWN0aXZlIH0gPSBzdGF0ZVxyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdUT0dHTEVfUE9XRVInOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNBY3RpdmU6ICFpc0FjdGl2ZSB9XHJcbiAgICBjYXNlICdTRVRfQ09VUlNFUyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb3Vyc2VzOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICBjYXNlICdTRVRfQUNUSVZJVElFUyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhY3Rpdml0aWVzOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICBjYXNlICdDT1VOVF9VTlJFQURfQUNUSVZJVElFUyc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY291cnNlczogY291cnNlcy5tYXAoKGNvdXJzZSkgPT4gKHtcclxuICAgICAgICAgIC4uLmNvdXJzZSxcclxuICAgICAgICAgIHVucmVhZDogYWN0aXZpdGllcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChhY3Rpdml0eSkgPT4gYWN0aXZpdHkuY291cnNlID09PSBjb3Vyc2UuY291cnNlSURcclxuICAgICAgICAgICkubGVuZ3RoLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgfVxyXG4gICAgY2FzZSAnTUFSS19SRUFEJzpcclxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgbWFya0FzUmVhZChhY3Rpb24ucGF5bG9hZFswXSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtYXJrU2VsZWN0ZWRBc1JlYWQoYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgIH1cclxuICAgICAgdG9hc3Quc3VjY2VzcyhgJHthY3Rpb24ucGF5bG9hZC5sZW5ndGh9IGFjdGl2aXR5KHMpIG1hcmtlZCBhcyByZWFkIWApXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcy5maWx0ZXIoXHJcbiAgICAgICAgICAoYWN0aXZpdHkpID0+ICFhY3Rpb24ucGF5bG9hZC5pbmNsdWRlcyhhY3Rpdml0eS5tb2R1bGVJRClcclxuICAgICAgICApLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0cmF3YmVycnlSZWR1Y2VyIGZyb20gJy4vU3RyYXdiZXJyeVJlZHVjZXInXHJcblxyXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xyXG4gIGxpc3RpbmdzOiBbXSxcclxuICByZXBvcnRzOiBbXSxcclxuICBsb2dzOiBbXSxcclxufVxyXG5cclxuY29uc3QgU3RyYXdiZXJyeUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KElOSVRJQUxfU1RBVEUpXHJcblxyXG5jb25zdCBTdHJhd2JlcnJ5UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0cmF3YmVycnksIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoU3RyYXdiZXJyeVJlZHVjZXIsIElOSVRJQUxfU1RBVEUpXHJcblxyXG4gIGNvbnN0IHZhbHVlID0geyBzdHJhd2JlcnJ5LCBkaXNwYXRjaCB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHJhd2JlcnJ5Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1N0cmF3YmVycnlDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgU3RyYXdiZXJyeUNvbnRleHQsIFN0cmF3YmVycnlQcm92aWRlciB9XHJcbiIsImltcG9ydCB7IGZldGNoQWxsTGlzdGluZ3MgfSBmcm9tICdAYXBpL3N0cmF3YmVycnknXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RyYXdiZXJyeVJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ3NldF9yZXBvcnRzJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlcG9ydHM6IGFjdGlvbi5wYXlsb2FkIH1cclxuICAgIGNhc2UgJ3NldF9wYXlkYXknOlxyXG4gICAgICBjb25zdCB7IGlkLCBkYXRlIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBjb25zdCByZXBvcnRVcGRhdGVkID0gWy4uLnN0YXRlLnJlcG9ydHNdXHJcbiAgICAgIGNvbnN0IHBhaWQgPSByZXBvcnRVcGRhdGVkLmZpbmRJbmRleCgoeCkgPT4geC5yZXBvcnRfaWQgPT09IGlkKVxyXG4gICAgICByZXBvcnRVcGRhdGVkW3BhaWRdID0ge1xyXG4gICAgICAgIC4uLnJlcG9ydFVwZGF0ZWRbcGFpZF0sXHJcbiAgICAgICAgaXNfcGFpZDogdHJ1ZSxcclxuICAgICAgICBwYWlkX29uOiBkYXRlLFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZXBvcnRzOiByZXBvcnRVcGRhdGVkIH1cclxuICAgIGNhc2UgJ3NldF9saXN0aW5ncyc6XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1RBIExpc3RpbmdzIHVwZGF0ZWQhJylcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxpc3RpbmdzOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICBjYXNlICdzb3J0X2J5X2NvdXJzZV9uYW1lJzpcclxuICAgICAgdmFyIHNvcnRlZF9saXN0aW5ncyA9IFsuLi5zdGF0ZS5saXN0aW5nc11cclxuICAgICAgc29ydGVkX2xpc3RpbmdzLnNvcnQoKGEsIGIpID0+IChhLnRpdGxlID4gYi50aXRsZSA/IDEgOiAtMSkpXHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsaXN0aW5nczogc29ydGVkX2xpc3RpbmdzIH1cclxuICAgIGNhc2UgJ3NvcnRfYnlfbmVlZGVkJzpcclxuICAgICAgdmFyIHNvcnRlZF9saXN0aW5ncyA9IFsuLi5zdGF0ZS5saXN0aW5nc11cclxuICAgICAgc29ydGVkX2xpc3RpbmdzLnNvcnQoKGEsIGIpID0+IChhLm5lZWRlZCA8IGIubmVlZGVkID8gMSA6IC0xKSlcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxpc3RpbmdzOiBzb3J0ZWRfbGlzdGluZ3MgfVxyXG4gICAgY2FzZSAnc29ydF9ieV9hcHBsaWVkJzpcclxuICAgICAgdmFyIHNvcnRlZF9saXN0aW5ncyA9IFsuLi5zdGF0ZS5saXN0aW5nc11cclxuICAgICAgc29ydGVkX2xpc3RpbmdzLnNvcnQoKGEsIGIpID0+IChhLmFwcGxpZWQgPCBiLmFwcGxpZWQgPyAxIDogLTEpKVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbGlzdGluZ3M6IHNvcnRlZF9saXN0aW5ncyB9XHJcbiAgICBjYXNlICdzb3J0X2J5X2FjY2VwdGVkJzpcclxuICAgICAgdmFyIHNvcnRlZF9saXN0aW5ncyA9IFsuLi5zdGF0ZS5saXN0aW5nc11cclxuICAgICAgc29ydGVkX2xpc3RpbmdzLnNvcnQoKGEsIGIpID0+IChhLmFjY2VwdGVkIDwgYi5hY2NlcHRlZCA/IDEgOiAtMSkpXHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsaXN0aW5nczogc29ydGVkX2xpc3RpbmdzIH1cclxuICAgIGNhc2UgJ3NvcnRfYnlfc3RhdHVzJzpcclxuICAgICAgdmFyIHNvcnRlZF9saXN0aW5ncyA9IFsuLi5zdGF0ZS5saXN0aW5nc11cclxuICAgICAgdmFyIHByZWZlcnJlZF9vcmRlciA9IFtcclxuICAgICAgICAnZGl0ZXJpbWEnLFxyXG4gICAgICAgICdkaXJla29tZW5kYXNpa2FuJyxcclxuICAgICAgICAnbWVsYW1hcicsXHJcbiAgICAgICAgJy0tLS0tLS0nLFxyXG4gICAgICBdXHJcbiAgICAgIHNvcnRlZF9saXN0aW5ncy5zb3J0KChhLCBiKSA9PlxyXG4gICAgICAgIHByZWZlcnJlZF9vcmRlci5pbmRleE9mKGEuc3RhdHVzKSA+IHByZWZlcnJlZF9vcmRlci5pbmRleE9mKGIuc3RhdHVzKVxyXG4gICAgICAgICAgPyAxXHJcbiAgICAgICAgICA6IC0xXHJcbiAgICAgIClcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxpc3RpbmdzOiBzb3J0ZWRfbGlzdGluZ3MgfVxyXG4gICAgY2FzZSAnc2V0X2xvZ3MnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9nczogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzQXhpb3NFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAndGltZW91dE1lc3NhZ2UnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnZGVjb21wcmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCcsICdyZXNwb25zZUVuY29kaW5nJ1xuICBdO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRpcmVjdE1lcmdlS2V5cywgZnVuY3Rpb24gbWVyZ2UocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKVxuICAgIC5jb25jYXQoZGlyZWN0TWVyZ2VLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMSlcbiAgICAuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gKHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0JykgJiYgKHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICBpZiAodG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuZnVuY3Rpb24gc3RyaXBCT00oY29udGVudCkge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTtcbiIsImxldCBlPXtkYXRhOlwiXCJ9LHQ9dD0+XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdz8oKHQ/dC5xdWVyeVNlbGVjdG9yKFwiI19nb29iZXJcIik6d2luZG93Ll9nb29iZXIpfHxPYmplY3QuYXNzaWduKCh0fHxkb2N1bWVudC5oZWFkKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIikpLHtpbm5lckhUTUw6XCIgXCIsaWQ6XCJfZ29vYmVyXCJ9KSkuZmlyc3RDaGlsZDp0fHxlLHI9ZT0+e2xldCByPXQoZSksbD1yLmRhdGE7cmV0dXJuIHIuZGF0YT1cIlwiLGx9LGw9Lyg/OihbXFx1MDA4MC1cXHVGRkZGXFx3LSVAXSspICo6PyAqKFteeztdKz8pO3woW147fXtdKj8pICp7KXwofSkvZyxhPS9cXC9cXCpbXl0qP1xcKlxcL3xcXHNcXHMrfFxcbi9nLG89KGUsdCk9PntsZXQgcixsPVwiXCIsYT1cIlwiLG49XCJcIjtmb3IobGV0IGMgaW4gZSl7bGV0IHM9ZVtjXTtcIm9iamVjdFwiPT10eXBlb2Ygcz8ocj10P3QucmVwbGFjZSgvKFteLF0pKy9nLGU9PmMucmVwbGFjZSgvKFteLF0pKy9nLHQ9Pi8mLy50ZXN0KHQpP3QucmVwbGFjZSgvJi9nLGUpOmU/ZStcIiBcIit0OnQpKTpjLGErPVwiQFwiPT1jWzBdP1wiZlwiPT1jWzFdP28ocyxjKTpjK1wie1wiK28ocyxcImtcIj09Y1sxXT9cIlwiOnQpK1wifVwiOm8ocyxyKSk6XCJAXCI9PWNbMF0mJlwiaVwiPT1jWzFdP2w9YytcIiBcIitzK1wiO1wiOihjPWMucmVwbGFjZSgvW0EtWl0vZyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLG4rPW8ucD9vLnAoYyxzKTpjK1wiOlwiK3MrXCI7XCIpfXJldHVybiBuWzBdPyhyPXQ/dCtcIntcIituK1wifVwiOm4sbCtyK2EpOmwrYX0sbj17fSxjPWU9PntsZXQgdD1cIlwiO2ZvcihsZXQgciBpbiBlKXQrPXIrKFwib2JqZWN0XCI9PXR5cGVvZiBlW3JdP2MoZVtyXSk6ZVtyXSk7cmV0dXJuIHR9LHM9KGUsdCxyLHMsaSk9PntsZXQgcD1cIm9iamVjdFwiPT10eXBlb2YgZT9jKGUpOmUsdT1uW3BdfHwobltwXT0oZT0+e2xldCB0PTAscj0xMTtmb3IoO3Q8ZS5sZW5ndGg7KXI9MTAxKnIrZS5jaGFyQ29kZUF0KHQrKyk+Pj4wO3JldHVyblwiZ29cIityfSkocCkpO2lmKCFuW3VdKXtsZXQgdD1cIm9iamVjdFwiPT10eXBlb2YgZT9lOihlPT57bGV0IHQscj1be31dO2Zvcig7dD1sLmV4ZWMoZS5yZXBsYWNlKGEsXCJcIikpOyl0WzRdJiZyLnNoaWZ0KCksdFszXT9yLnVuc2hpZnQoclswXVt0WzNdXT1yWzBdW3RbM11dfHx7fSk6dFs0XXx8KHJbMF1bdFsxXV09dFsyXSk7cmV0dXJuIHJbMF19KShlKTtuW3VdPW8oaT97W1wiQGtleWZyYW1lcyBcIit1XTp0fTp0LHI/XCJcIjpcIi5cIit1KX1yZXR1cm4oKGUsdCxyKT0+ey0xPT10LmRhdGEuaW5kZXhPZihlKSYmKHQuZGF0YT1yP2UrdC5kYXRhOnQuZGF0YStlKX0pKG5bdV0sdCxzKSx1fSxpPShlLHQscik9PmUucmVkdWNlKChlLGwsYSk9PntsZXQgbj10W2FdO2lmKG4mJm4uY2FsbCl7bGV0IGU9bihyKSx0PWUmJmUucHJvcHMmJmUucHJvcHMuY2xhc3NOYW1lfHwvXmdvLy50ZXN0KGUpJiZlO249dD9cIi5cIit0OmUmJlwib2JqZWN0XCI9PXR5cGVvZiBlP2UucHJvcHM/XCJcIjpvKGUsXCJcIik6ZX1yZXR1cm4gZStsKyhudWxsPT1uP1wiXCI6bil9LFwiXCIpO2Z1bmN0aW9uIHAoZSl7bGV0IHI9dGhpc3x8e30sbD1lLmNhbGw/ZShyLnApOmU7cmV0dXJuIHMobC51bnNoaWZ0P2wucmF3P2kobCxbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxyLnApOmwucmVkdWNlKChlLHQpPT50P09iamVjdC5hc3NpZ24oZSx0LmNhbGw/dChyLnApOnQpOmUse30pOmwsdChyLnRhcmdldCksci5nLHIubyxyLmspfWxldCB1LGYsZCxnPXAuYmluZCh7ZzoxfSksYj1wLmJpbmQoe2s6MX0pO2Z1bmN0aW9uIGgoZSx0LHIsbCl7by5wPXQsdT1lLGY9cixkPWx9ZnVuY3Rpb24gaihlLHQpe2xldCByPXRoaXN8fHt9O3JldHVybiBmdW5jdGlvbigpe2xldCBsPWFyZ3VtZW50cztmdW5jdGlvbiBhKG8sbil7bGV0IGM9T2JqZWN0LmFzc2lnbih7fSxvKSxzPWMuY2xhc3NOYW1lfHxhLmNsYXNzTmFtZTtyLnA9T2JqZWN0LmFzc2lnbih7dGhlbWU6ZiYmZigpfSxjKSxyLm89LyAqZ29cXGQrLy50ZXN0KHMpLGMuY2xhc3NOYW1lPXAuYXBwbHkocixsKSsocz9cIiBcIitzOlwiXCIpLHQmJihjLnJlZj1uKTtsZXQgaT1jLmFzfHxlO3JldHVybiBkJiZpWzBdJiZkKGMpLHUoaSxjKX1yZXR1cm4gdD90KGEpOmF9fWV4cG9ydHtwIGFzIGNzcyxyIGFzIGV4dHJhY3RDc3MsZyBhcyBnbG9iLGIgYXMga2V5ZnJhbWVzLGggYXMgc2V0dXAsaiBhcyBzdHlsZWR9O1xuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi90YWlsd2luZC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3RhaWx3aW5kLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsxXSEuLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVsyXSEuL3RhaWx3aW5kLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuISB0YWlsd2luZGNzcyB2My4wLjEyIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxcbiovLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcbiovXFxuOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLypcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4qL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4qL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjEpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbmh0bWwge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wOiAwIDAlIDEwMCU7XFxuICAtLXBmOiAwIDAlIDkwLjIlO1xcbiAgLS1wYzogMCAwJSAwJTtcXG4gIC0tczogMjE4IDU0LjMlIDE4JTtcXG4gIC0tc2Y6IDIxOSA1Ni4xJSA4JTtcXG4gIC0tc2M6IDAgMCUgMTAwJTtcXG4gIC0tYTogMzE5IDIxLjglIDI2LjElO1xcbiAgLS1hZjogMzIwIDIyJSAxNi4xJTtcXG4gIC0tYWM6IDAgMCUgMTAwJTtcXG4gIC0tbjogMjcwIDQuMyUgOSU7XFxuICAtLW5mOiAyNzAgMi4yJSAxOCU7XFxuICAtLW5jOiAzNyA2Ny4zJSA1OCU7XFxuICAtLWIxOiAyNDAgMTAlIDMuOSU7XFxuICAtLWIyOiAyNzAgNC4zJSA5JTtcXG4gIC0tYjM6IDI3MCAyLjIlIDE4JTtcXG4gIC0tYmM6IDM3IDY3LjMlIDU4JTtcXG4gIC0taW46IDIwMiAxMDAlIDcwJTtcXG4gIC0tc3U6IDg5IDYxLjYlIDUyJTtcXG4gIC0td2E6IDU0IDY4LjglIDYzLjUlO1xcbiAgLS1lcjogMCAxMDAlIDcxLjglO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG5cXG4uYWxlcnQ+Om5vdChbaGlkZGVuXSl+Om5vdChbaGlkZGVuXSkge1xcbiAgLS10dy1zcGFjZS15LXJldmVyc2U6IDA7XFxuICBtYXJnaW4tdG9wOiBjYWxjKDAuNXJlbSooMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoMC41cmVtKnZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbn1cXG5cXG4uYWxlcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iMikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcm91bmRlZC1ib3gsMXJlbSk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XFxuXFxuICAuYWxlcnQ+Om5vdChbaGlkZGVuXSl+Om5vdChbaGlkZGVuXSkge1xcbiAgICAtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG4gICAgbWFyZ2luLXRvcDogY2FsYygwcHgqKDEgLSB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKSk7XFxuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMHB4KnZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbiAgfVxcblxcbiAgLmFsZXJ0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG59XFxuXFxuLmFsZXJ0Pioge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmF2YXRhciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmF2YXRhcj5kaXYge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYXZhdGFyIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYXZhdGFyLnBsYWNlaG9sZGVyPmRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmFkZ2Uge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLGJvcmRlci1jb2xvcixjb2xvcixmaWxsLHN0cm9rZSxvcGFjaXR5LGJveC1zaGFkb3csdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNCwwLC4yLDEpO1xcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmctbGVmdDogLjU2M3JlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IC41NjNyZW07XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLW4pL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1uKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tbmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yb3VuZGVkLWJhZGdlLDEuOXJlbSk7XFxufVxcblxcbi5idG4ge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1uKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcixib3JkZXItY29sb3IsY29sb3IsZmlsbCxzdHJva2Usb3BhY2l0eSxib3gtc2hhZG93LHRyYW5zZm9ybTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJvdW5kZWQtYnRuLC41cmVtKTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHZhcigtLWJ0bi10ZXh0LWNhc2UsdXBwZXJjYXNlKTtcXG4gIGJvcmRlci13aWR0aDogdmFyKC0tYm9yZGVyLWJ0biwxcHgpO1xcbiAgYW5pbWF0aW9uOiBidXR0b24tcG9wIHZhcigtLWFuaW1hdGlvbi1idG4sLjI1cykgZWFzZS1vdXQ7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLW4pL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tbmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG46Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuXFxuLmJ0bi1kaXNhYmxlZCwuYnRuW2Rpc2FibGVkXSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMC4yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1uKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDA7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMC4yO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tc3F1YXJlIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogM3JlbTtcXG59XFxuXFxuLmJ0bi5sb2FkaW5nLC5idG4ubG9hZGluZzpob3ZlciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmJ0bi5sb2FkaW5nOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogLjVyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgY3VycmVudENvbG9yIGN1cnJlbnRDb2xvciB0cmFuc3BhcmVudDtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOnJlZHVjZSkge1xcblxcbiAgLmJ0bi5sb2FkaW5nOmJlZm9yZSB7XFxuICAgIGFuaW1hdGlvbjogc3BpbiAxMHMgbGluZWFyIGluZmluaXRlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcblxcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xcbiAgfVxcbn1cXG5cXG4uYnRuLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5idG4tZ3JvdXA+aW5wdXRbdHlwZT1yYWRpb10uYnRuIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5idG4tZ3JvdXA+aW5wdXRbdHlwZT1yYWRpb10uYnRuOmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yb3VuZGVkLWJveCwxcmVtKTtcXG59XFxuXFxuLmNhcmQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuXFxuLmNhcmQtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy1jYXJkLDJyZW0pO1xcbn1cXG5cXG4uY2FyZCBmaWd1cmUsLmNhcmQgZmlndXJlPioge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkLmltYWdlLWZ1bGwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmNhcmQuaW1hZ2UtZnVsbDpiZWZvcmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLW4pL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgb3BhY2l0eTogLjc1O1xcbiAgei1pbmRleDogMTA7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yb3VuZGVkLWJveCwxcmVtKTtcXG59XFxuXFxuLmNhcmQuaW1hZ2UtZnVsbDpiZWZvcmUsLmNhcmQuaW1hZ2UtZnVsbD4qIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxufVxcblxcbi5jYXJkLmltYWdlLWZ1bGw+ZmlndXJlIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmNhcmQuaW1hZ2UtZnVsbD4uY2FyZC1ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tbmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLmNoZWNrYm94OmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi5jb2xsYXBzZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi5jb2xsYXBzZS1jb250ZW50LC5jb2xsYXBzZS10aXRsZSwuY29sbGFwc2U+aW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG59XFxuXFxuLmNvbGxhcHNlPmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY29sbGFwc2Utb3BlbiAuY29sbGFwc2UtY29udGVudCwuY29sbGFwc2U6Zm9jdXM6bm90KC5jb2xsYXBzZS1jbG9zZSkgLmNvbGxhcHNlLWNvbnRlbnQsLmNvbGxhcHNlOm5vdCguY29sbGFwc2UtY2xvc2UpIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWR+LmNvbGxhcHNlLWNvbnRlbnQge1xcbiAgbWF4LWhlaWdodDogOTAwMHB4O1xcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIHRyYW5zaXRpb246IHBhZGRpbmcgLjJzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZGl2aWRlcjphZnRlciwuZGl2aWRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICAtLXR3LWJnLW9wYWNpdHk6IHZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDAuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIGhlaWdodDogLjEyNXJlbTtcXG59XFxuXFxuLmRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRyb3Bkb3duPjpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4uZHJvcGRvd24gLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDUwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IC45NTtcXG4gIC0tdHctc2NhbGUteTogLjk1O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXR3LXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLGJvcmRlci1jb2xvcixjb2xvcixmaWxsLHN0cm9rZSxvcGFjaXR5LGJveC1zaGFkb3csdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNCwwLC4yLDEpO1xcbn1cXG5cXG4uZHJvcGRvd24tZW5kIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uZHJvcGRvd24tbGVmdCAuZHJvcGRvd24tY29udGVudCB7XFxuICB0b3A6IDA7XFxuICBib3R0b206IGF1dG87XFxuICByaWdodDogMTAwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcbn1cXG5cXG4uZHJvcGRvd24tcmlnaHQgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiBhdXRvO1xcbiAgbGVmdDogMTAwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbi5kcm9wZG93bi10b3AgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgdG9wOiBhdXRvO1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcbn1cXG5cXG4uZHJvcGRvd24tZW5kLmRyb3Bkb3duLXJpZ2h0IC5kcm9wZG93bi1jb250ZW50IHtcXG4gIGJvdHRvbTogMDtcXG4gIHRvcDogYXV0bztcXG59XFxuXFxuLmRyb3Bkb3duLWVuZC5kcm9wZG93bi1sZWZ0IC5kcm9wZG93bi1jb250ZW50IHtcXG4gIGJvdHRvbTogMDtcXG4gIHRvcDogYXV0bztcXG59XFxuXFxuLmRyb3Bkb3duLmRyb3Bkb3duLWhvdmVyOmhvdmVyIC5kcm9wZG93bi1jb250ZW50LC5kcm9wZG93bi5kcm9wZG93bi1vcGVuIC5kcm9wZG93bi1jb250ZW50LC5kcm9wZG93bjpub3QoLmRyb3Bkb3duLWhvdmVyKTpmb2N1cy13aXRoaW4gLmRyb3Bkb3duLWNvbnRlbnQsLmRyb3Bkb3duOm5vdCguZHJvcGRvd24taG92ZXIpOmZvY3VzIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZm9ybS1jb250cm9sIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwYWRkaW5nOiAuNXJlbSAuMjVyZW07XFxufVxcblxcbi5pbmRpY2F0b3Ige1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmluZGljYXRvciAuaW5kaWNhdG9yLWl0ZW0ge1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiA1MCU7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS10dy10cmFuc2xhdGUteCkpIHRyYW5zbGF0ZVkodmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IGF1dG87XFxuICBsZWZ0OiBhdXRvO1xcbn1cXG5cXG4uaW5kaWNhdG9yIC5pbmRpY2F0b3ItaXRlbS5pbmRpY2F0b3Itc3RhcnQge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgLS10dy10cmFuc2xhdGUteDogLTUwJTtcXG59XFxuXFxuLmluZGljYXRvciAuaW5kaWNhdG9yLWl0ZW0uaW5kaWNhdG9yLWNlbnRlciB7XFxuICByaWdodDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgLS10dy10cmFuc2xhdGUteDogLTUwJTtcXG59XFxuXFxuLmluZGljYXRvciAuaW5kaWNhdG9yLWl0ZW0uaW5kaWNhdG9yLWVuZCB7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IGF1dG87XFxuICAtLXR3LXRyYW5zbGF0ZS14OiA1MCU7XFxufVxcblxcbi5pbmRpY2F0b3IgLmluZGljYXRvci1pdGVtLmluZGljYXRvci1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgdG9wOiBhdXRvO1xcbiAgLS10dy10cmFuc2xhdGUteTogNTAlO1xcbn1cXG5cXG4uaW5kaWNhdG9yIC5pbmRpY2F0b3ItaXRlbS5pbmRpY2F0b3ItbWlkZGxlIHtcXG4gIHRvcDogNTAlO1xcbiAgYm90dG9tOiA1MCU7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xcbn1cXG5cXG4uaW5kaWNhdG9yIC5pbmRpY2F0b3ItaXRlbS5pbmRpY2F0b3ItdG9wIHtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogYXV0bztcXG4gIC0tdHctdHJhbnNsYXRlLXk6IC01MCU7XFxufVxcblxcbi5pbnB1dCB7XFxuICBmbGV4LXNocmluazogMTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsYm9yZGVyLWNvbG9yLGNvbG9yLGZpbGwsc3Ryb2tlLG9wYWNpdHksYm94LXNoYWRvdyx0cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBmb250LXNpemU6IC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjEpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMDtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yb3VuZGVkLWJ0biwuNXJlbSk7XFxufVxcblxcbi5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpLDAgMCAwIDRweCBoc2xhKHZhcigtLWJjKS8uMik7XFxufVxcblxcbi5saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tZW51Lmhvcml6b250YWwge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4ubWVudS5ob3Jpem9udGFsIGxpIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5tZW51IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5tZW51IGxpPmEsLm1lbnUgbGk+c3BhbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsYm9yZGVyLWNvbG9yLGNvbG9yLGZpbGwsc3Ryb2tlLG9wYWNpdHksYm94LXNoYWRvdyx0cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XFxuICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi5tZW51IGxpPmEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudSBsaT5hOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi5tZW51IGxpLmRpc2FibGVkPmEsLm1lbnUgbGkuZGlzYWJsZWQ+c3BhbiB7XFxuICBjdXJzb3I6IGF1dG87XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMC4yO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1uYXZiYXItcGFkZGluZywuNXJlbSk7XFxuICBtaW4taGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4ubmF2YmFyPioge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZiYXItY2VudGVyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uc2VsZWN0IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWIxKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDA7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsYm9yZGVyLWNvbG9yLGNvbG9yLGZpbGwsc3Ryb2tlLG9wYWNpdHksYm94LXNoYWRvdyx0cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yb3VuZGVkLWJ0biwuNXJlbSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsdHJhbnNwYXJlbnQgNTAlLGN1cnJlbnRDb2xvciAwKSxsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLGN1cnJlbnRDb2xvciA1MCUsdHJhbnNwYXJlbnQgMCk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFweCArIDUwJSksY2FsYygxMDAlIC0gMTZweCkgY2FsYygxcHggKyA1MCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggNHB4LDRweCA0cHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggaHNsKHZhcigtLWIxKSksMCAwIDAgNHB4IGhzbGEodmFyKC0tYmMpLy4yKTtcXG59XFxuXFxuLnNlbGVjdC1kaXNhYmxlZCwuc2VsZWN0W2Rpc2FibGVkXSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjIpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1iMikvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAwLjI7XFxufVxcblxcbi5zdGF0cyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJvdW5kZWQtYm94LDFyZW0pO1xcbn1cXG5cXG4uc3RhdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sdW1uLWdhcDogMS41cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjEpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uc3RhdC10aXRsZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLnN0YXQtdmFsdWUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxufVxcblxcbi5zdGF0LWRlc2Mge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuLnN0YXRzLmdyaWQtZmxvdy1yb3cge1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgwLDFmcik7XFxufVxcblxcbi50YWJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi50YWIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBmb250LXNpemU6IC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgLS10YWItcGFkZGluZzogMXJlbTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAwLjU7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tdGFiLXBhZGRpbmcsMXJlbSk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS10YWItcGFkZGluZywxcmVtKTtcXG59XFxuXFxuLlxcXFwhdGFiIHtcXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcXG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XFxuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IC44NzVyZW0gIWltcG9ydGFudDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtICFpbXBvcnRhbnQ7XFxuICBsaW5lLWhlaWdodDogMiAhaW1wb3J0YW50O1xcbiAgLS10YWItcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDAuNSAhaW1wb3J0YW50O1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSkgIWltcG9ydGFudDtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tdGFiLXBhZGRpbmcsMXJlbSkgIWltcG9ydGFudDtcXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXRhYi1wYWRkaW5nLDFyZW0pICFpbXBvcnRhbnQ7XFxufVxcblxcbi50YWJsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udGFibGUgdGg6Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLnRleHRhcmVhIHtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcixib3JkZXItY29sb3IsY29sb3IsZmlsbCxzdHJva2Usb3BhY2l0eSxib3gtc2hhZG93LHRyYW5zZm9ybTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjEpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMDtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yb3VuZGVkLWJ0biwuNXJlbSk7XFxufVxcblxcbi50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpLDAgMCAwIDRweCBoc2xhKHZhcigtLWJjKS8uMik7XFxufVxcblxcbi50b2dnbGU6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuXFxuLmF2YXRhci1ncm91cCAuYXZhdGFyIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tYjEpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJ0biAuYmFkZ2Uge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iMSkvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0biAuYmFkZ2Utb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tYjIpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYjIpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tb3V0bGluZSAuYmFkZ2Uge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1uZikvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1uYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1wcmltYXJ5IC5iYWRnZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLW91dGxpbmUuYnRuLXNlY29uZGFyeSAuYmFkZ2Uge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1zKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tcykvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1zYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1hY2NlbnQgLmJhZGdlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYSkvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWEpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYWMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tb3V0bGluZSAuYmFkZ2Uub3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tbmYpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1wcmltYXJ5IC5iYWRnZS1vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tb3V0bGluZS5idG4tc2Vjb25kYXJ5IC5iYWRnZS1vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1zKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tb3V0bGluZS5idG4tYWNjZW50IC5iYWRnZS1vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1hKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLWEpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tb3V0bGluZTpob3ZlciAuYmFkZ2Uge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iMikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWIyKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLW91dGxpbmU6aG92ZXIgLmJhZGdlLm91dGxpbmUge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1iMikvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1uYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1wcmltYXJ5OmhvdmVyIC5iYWRnZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tcGMpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tcCkvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1wcmltYXJ5OmhvdmVyIC5iYWRnZS5vdXRsaW5lIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tcGYpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wYykvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1wYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1zZWNvbmRhcnk6aG92ZXIgLmJhZGdlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tc2MpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1zYykvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1zKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLW91dGxpbmUuYnRuLXNlY29uZGFyeTpob3ZlciAuYmFkZ2Uub3V0bGluZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXNmKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tc2MpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tc2MpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tb3V0bGluZS5idG4tYWNjZW50OmhvdmVyIC5iYWRnZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWFjKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tYWMpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYSkvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1hY2NlbnQ6aG92ZXIgLmJhZGdlLm91dGxpbmUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1hZikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWFjKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLWFjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuOmFjdGl2ZTpmb2N1cywuYnRuOmFjdGl2ZTpob3ZlciB7XFxuICBhbmltYXRpb246IG5vbmU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWJ0bi1mb2N1cy1zY2FsZSwuOTUpKTtcXG59XFxuXFxuLmJ0bi1hY3RpdmUsLmJ0bjpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLW5mKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tbmYpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bjpmb2N1cy12aXNpYmxlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKSwwIDAgMCA0cHggaHNsKHZhcigtLW5mKSk7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLXByaW1hcnkuYnRuLWFjdGl2ZSwuYnRuLXByaW1hcnk6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1wZikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXBmKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tcHJpbWFyeTpmb2N1cy12aXNpYmxlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKSwwIDAgMCA0cHggaHNsKHZhcigtLXApKTtcXG59XFxuXFxuLmJ0bi1zZWNvbmRhcnkge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1zKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tcykvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1zYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1zZWNvbmRhcnkuYnRuLWFjdGl2ZSwuYnRuLXNlY29uZGFyeTpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXNmKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tc2YpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1zZWNvbmRhcnk6Zm9jdXMtdmlzaWJsZSB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggaHNsKHZhcigtLWIxKSksMCAwIDAgNHB4IGhzbCh2YXIoLS1zKSk7XFxufVxcblxcbi5idG4tYWNjZW50IHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYSkvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWEpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYWMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tYWNjZW50LmJ0bi1hY3RpdmUsLmJ0bi1hY2NlbnQ6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1hZikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWFmKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tYWNjZW50OmZvY3VzLXZpc2libGUge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpLDAgMCAwIDRweCBoc2wodmFyKC0tYSkpO1xcbn1cXG5cXG4uYnRuLmdsYXNzLmJ0bi1hY3RpdmUsLmJ0bi5nbGFzczpob3ZlciB7XFxuICAtLWdsYXNzLW9wYWNpdHk6IDI1JTtcXG4gIC0tZ2xhc3MtYm9yZGVyLW9wYWNpdHk6IDE1JTtcXG59XFxuXFxuLmJ0bi5nbGFzczpmb2N1cy12aXNpYmxlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi5idG4tZ2hvc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBjb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG4uYnRuLWdob3N0LmJ0bi1hY3RpdmUsLmJ0bi1naG9zdDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDAuMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMDtcXG59XFxuXFxuLmJ0bi1naG9zdDpmb2N1cy12aXNpYmxlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi5idG4tb3V0bGluZS5idG4tcHJpbWFyeSB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tb3V0bGluZS5idG4tcHJpbWFyeTpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXBmKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tcGYpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tcGMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tb3V0bGluZS5idG4tc2Vjb25kYXJ5IHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tcykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi1vdXRsaW5lLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1zZikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXNmKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXNjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLW91dGxpbmUuYnRuLWFjY2VudCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLWEpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5idG4tb3V0bGluZS5idG4tYWNjZW50OmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYWYpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1hZikvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1hYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJ0bi5sb2FkaW5nLmJ0bi1jaXJjbGU6YmVmb3JlLC5idG4ubG9hZGluZy5idG4tc3F1YXJlOmJlZm9yZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi5idG4ubG9hZGluZy5idG4tbGc6YmVmb3JlLC5idG4ubG9hZGluZy5idG4teGw6YmVmb3JlIHtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG4gIHdpZHRoOiAxLjI1cmVtO1xcbn1cXG5cXG4uYnRuLmxvYWRpbmcuYnRuLXNtOmJlZm9yZSwuYnRuLmxvYWRpbmcuYnRuLXhzOmJlZm9yZSB7XFxuICBoZWlnaHQ6IC43NXJlbTtcXG4gIHdpZHRoOiAuNzVyZW07XFxufVxcblxcbi5idG4tZ3JvdXA+LmJ0bi1hY3RpdmUsLmJ0bi1ncm91cD5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkLmJ0biB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYnRuLWdyb3VwPi5idG4tYWN0aXZlOmZvY3VzLXZpc2libGUsLmJ0bi1ncm91cD5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkLmJ0bjpmb2N1cy12aXNpYmxlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKSwwIDAgMCA0cHggaHNsKHZhcigtLXApKTtcXG59XFxuXFxuLmJ0bi1ncm91cD4uYnRuOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxufVxcblxcbi5idG4tZ3JvdXA+LmJ0bjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxufVxcblxcbkBrZXlmcmFtZXMgYnV0dG9uLXBvcCB7XFxuXFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tYnRuLWZvY3VzLXNjYWxlLC45NSkpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuLmNhcmQ6Zm9jdXMtdmlzaWJsZSB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggY3VycmVudENvbG9yO1xcbn1cXG5cXG4uY2FyZC5ib3JkZXJlZCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWIyKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuXFxuLmNhcmQuY29tcGFjdCAuY2FyZC1ib2R5IHtcXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNhcmQuY29tcGFjdCAuY2FyZC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIC0tY2hrYmc6IHZhcigtLWJjKTtcXG4gIC0tY2hrZmc6IHZhcigtLWIxKTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAwLjI7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcm91bmRlZC1idG4sLjVyZW0pO1xcbn1cXG5cXG4uY2hlY2tib3g6Zm9jdXMtdmlzaWJsZSB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggaHNsKHZhcigtLWIxKSksMCAwIDAgNHB4IGhzbCh2YXIoLS1iYykpO1xcbn1cXG5cXG4uY2hlY2tib3g6Y2hlY2tlZCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBhbmltYXRpb246IGNoZWNrbWFyayB2YXIoLS1hbmltYXRpb24taW5wdXQsLjJzKSBlYXNlLWluLW91dDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsdHJhbnNwYXJlbnQgNjUlLGhzbCh2YXIoLS1jaGtiZykpIDApLGxpbmVhci1ncmFkaWVudCg0NWRlZyx0cmFuc3BhcmVudCA3NSUsaHNsKHZhcigtLWNoa2JnKSkgMCksbGluZWFyLWdyYWRpZW50KC00NWRlZyxoc2wodmFyKC0tY2hrYmcpKSA0MCUsdHJhbnNwYXJlbnQgMCksbGluZWFyLWdyYWRpZW50KDQ1ZGVnLGhzbCh2YXIoLS1jaGtiZykpIDMwJSxoc2wodmFyKC0tY2hrZmcpKSAwLGhzbCh2YXIoLS1jaGtmZykpIDQwJSx0cmFuc3BhcmVudCAwKSxsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLGhzbCh2YXIoLS1jaGtmZykpIDUwJSxoc2wodmFyKC0tY2hrYmcpKSAwKTtcXG59XFxuXFxuLmNoZWNrYm94OmRpc2FibGVkIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBvcGFjaXR5OiAuMjtcXG59XFxuXFxuQGtleWZyYW1lcyBjaGVja21hcmsge1xcblxcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDVweDtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTJweDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwO1xcbiAgfVxcbn1cXG5cXG4uY29sbGFwc2U6bm90KC5jb2xsYXBzZS1vcGVuKTpub3QoLmNvbGxhcHNlLWNsb3NlKSAuY29sbGFwc2UtdGl0bGUsLmNvbGxhcHNlOm5vdCguY29sbGFwc2Utb3Blbik6bm90KC5jb2xsYXBzZS1jbG9zZSkgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29sbGFwc2U6Zm9jdXM6bm90KC5jb2xsYXBzZS1vcGVuKTpub3QoLmNvbGxhcHNlLWNsb3NlKSAuY29sbGFwc2UtdGl0bGUge1xcbiAgY3Vyc29yOiB1bnNldDtcXG59XFxuXFxuLmNvbGxhcHNlLXRpdGxlLC5jb2xsYXBzZT5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAzLjc1cmVtO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jb2xsYXBzZTpub3QoLmNvbGxhcHNlLWNsb3NlKSBpbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1c34uY29sbGFwc2UtdGl0bGUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAwLjE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmNvbGxhcHNlLW9wZW4gLmNvbGxhcHNlLXRpdGxlLC5jb2xsYXBzZTpmb2N1czpub3QoLmNvbGxhcHNlLWNsb3NlKSAuY29sbGFwc2UtdGl0bGUsLmNvbGxhcHNlOm5vdCguY29sbGFwc2UtY2xvc2UpIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWR+LmNvbGxhcHNlLXRpdGxlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMC4xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4uZGl2aWRlcjpub3QoOmVtcHR5KTpiZWZvcmUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZGl2aWRlcjpub3QoOmVtcHR5KTphZnRlciB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLmRyYXdlci10b2dnbGU6Zm9jdXMtdmlzaWJsZX4uZHJhd2VyLWNvbnRlbnQgLmRyYXdlci1idXR0b24ge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpLDAgMCAwIDRweCBoc2wodmFyKC0tbmYpKTtcXG59XFxuXFxuLmRyYXdlci10b2dnbGU6Zm9jdXMtdmlzaWJsZX4uZHJhd2VyLWNvbnRlbnQgLmRyYXdlci1idXR0b24uYnRuLXByaW1hcnkge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpLDAgMCAwIDRweCBoc2wodmFyKC0tcCkpO1xcbn1cXG5cXG4uZHJhd2VyLXRvZ2dsZTpmb2N1cy12aXNpYmxlfi5kcmF3ZXItY29udGVudCAuZHJhd2VyLWJ1dHRvbi5idG4tc2Vjb25kYXJ5IHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKSwwIDAgMCA0cHggaHNsKHZhcigtLXMpKTtcXG59XFxuXFxuLmRyYXdlci10b2dnbGU6Zm9jdXMtdmlzaWJsZX4uZHJhd2VyLWNvbnRlbnQgLmRyYXdlci1idXR0b24uYnRuLWFjY2VudCB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggaHNsKHZhcigtLWIxKSksMCAwIDAgNHB4IGhzbCh2YXIoLS1hKSk7XFxufVxcblxcbi5kcmF3ZXItdG9nZ2xlOmZvY3VzLXZpc2libGV+LmRyYXdlci1jb250ZW50IC5kcmF3ZXItYnV0dG9uLmJ0bi1pbmZvIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKSwwIDAgMCA0cHggaHNsKHZhcigtLWluKSk7XFxufVxcblxcbi5kcmF3ZXItdG9nZ2xlOmZvY3VzLXZpc2libGV+LmRyYXdlci1jb250ZW50IC5kcmF3ZXItYnV0dG9uLmJ0bi1zdWNjZXNzIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKSwwIDAgMCA0cHggaHNsKHZhcigtLXN1KSk7XFxufVxcblxcbi5kcmF3ZXItdG9nZ2xlOmZvY3VzLXZpc2libGV+LmRyYXdlci1jb250ZW50IC5kcmF3ZXItYnV0dG9uLmJ0bi13YXJuaW5nIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKSwwIDAgMCA0cHggaHNsKHZhcigtLXdhKSk7XFxufVxcblxcbi5kcmF3ZXItdG9nZ2xlOmZvY3VzLXZpc2libGV+LmRyYXdlci1jb250ZW50IC5kcmF3ZXItYnV0dG9uLmJ0bi1lcnJvciB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggaHNsKHZhcigtLWIxKSksMCAwIDAgNHB4IGhzbCh2YXIoLS1lcikpO1xcbn1cXG5cXG4uZHJhd2VyLXRvZ2dsZTpmb2N1cy12aXNpYmxlfi5kcmF3ZXItY29udGVudCAuZHJhd2VyLWJ1dHRvbi5nbGFzcyB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggY3VycmVudENvbG9yO1xcbn1cXG5cXG4uZHJhd2VyLXRvZ2dsZTpmb2N1cy12aXNpYmxlfi5kcmF3ZXItY29udGVudCAuZHJhd2VyLWJ1dHRvbi5idG4tZ2hvc3Qge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLmRyYXdlci10b2dnbGU6Zm9jdXMtdmlzaWJsZX4uZHJhd2VyLWNvbnRlbnQgLmRyYXdlci1idXR0b24uYnRuLWxpbmsge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLmRyb3Bkb3duLmRyb3Bkb3duLWhvdmVyOmhvdmVyIC5kcm9wZG93bi1jb250ZW50LC5kcm9wZG93bi5kcm9wZG93bi1vcGVuIC5kcm9wZG93bi1jb250ZW50LC5kcm9wZG93bjpmb2N1cy13aXRoaW4gLmRyb3Bkb3duLWNvbnRlbnQsLmRyb3Bkb3duOmZvY3VzIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG59XFxuXFxuLmxhYmVsLXRleHQge1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4ubGFiZWwgYTpob3ZlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uaW5wdXQtYm9yZGVyZWQge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uaW5wdXQtcHJpbWFyeSB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmlucHV0LXByaW1hcnk6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpLDAgMCAwIDRweCBoc2wodmFyKC0tcCkpO1xcbn1cXG5cXG4uaW5wdXQtZGlzYWJsZWQsLmlucHV0W2Rpc2FibGVkXSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWIyKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tYjIpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMC4yO1xcbn1cXG5cXG4uaW5wdXQtZGlzYWJsZWQ6OnBsYWNlaG9sZGVyLC5pbnB1dFtkaXNhYmxlZF06OnBsYWNlaG9sZGVyIHtcXG4gIC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMC4yO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHksMSkpO1xcbn1cXG5cXG4ubGluazpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4ubGluazpmb2N1cy12aXNpYmxlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi5tZW51Lmhvcml6b250YWwgbGkuYm9yZGVyZWQ+YSwubWVudS5ob3Jpem9udGFsIGxpLmJvcmRlcmVkPnNwYW4ge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICBib3JkZXItbGVmdC13aWR0aDogMDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcXG59XFxuXFxuLm1lbnVbY2xhc3MqPXAtXSBsaSBhIHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJvdW5kZWQtYnRuLC41cmVtKTtcXG59XFxuXFxuLm1lbnUgbGk+YTpmb2N1cywubWVudSBsaT5hOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMC4xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxufVxcblxcbi5tZW51IGxpPmEuYWN0aXZlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tcCkvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4ubWVudSBsaT5hOmFjdGl2ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXBmKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tcGMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5tZW51IGxpLmRpc2FibGVkPmE6aG92ZXIsLm1lbnUgbGkuZGlzYWJsZWQ+c3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLm1lbnUgbGkuYm9yZGVyZWQgYSwubWVudSBsaS5ib3JkZXJlZCBzcGFuIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tcCkvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcXG59XFxuXFxuLm1lbnUgbGkuaG92ZXItYm9yZGVyZWQgYSB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcXG59XFxuXFxuLm1lbnUgbGkuaG92ZXItYm9yZGVyZWQgYTpob3ZlciB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLm1lbnUgdWwge1xcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxufVxcblxcbi5tZW51LmNvbXBhY3QgbGk+YSwubWVudS5jb21wYWN0IGxpPnNwYW4ge1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuICBwYWRkaW5nLXRvcDogLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi5tZW51IC5tZW51LXRpdGxlPmEsLm1lbnUgLm1lbnUtdGl0bGU+c3BhbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDAuNDtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4ubW9ja3VwLXBob25lIC5kaXNwbGF5IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogLTI1cHg7XFxufVxcblxcbkBrZXlmcmFtZXMgcmFkaW9tYXJrIHtcXG5cXG4gIDAlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTJweCBoc2wodmFyKC0tYjEpKSBpbnNldCwwIDAgMCAxMnB4IGhzbCh2YXIoLS1iMSkpIGluc2V0LHZhcigtLWZvY3VzLXNoYWRvdyk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggaHNsKHZhcigtLWIxKSkgaW5zZXQsMCAwIDAgM3B4IGhzbCh2YXIoLS1iMSkpIGluc2V0LHZhcigtLWZvY3VzLXNoYWRvdyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCBoc2wodmFyKC0tYjEpKSBpbnNldCwwIDAgMCA0cHggaHNsKHZhcigtLWIxKSkgaW5zZXQsdmFyKC0tZm9jdXMtc2hhZG93KTtcXG4gIH1cXG59XFxuXFxuLnNlbGVjdC1kaXNhYmxlZDo6cGxhY2Vob2xkZXIsLnNlbGVjdFtkaXNhYmxlZF06OnBsYWNlaG9sZGVyIHtcXG4gIC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMC4yO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uc3RhdCsuc3RhdCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAwLjE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XFxufVxcblxcbi5zdGF0cy5ncmlkLWZsb3ctcm93IC5zdGF0Ky5zdGF0IHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG4udGFiOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbn1cXG5cXG4uXFxcXCF0YWI6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG59XFxuXFxuLnRhYi50YWItYWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5cXFxcIXRhYi5cXFxcIXRhYi1hY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSkgIWltcG9ydGFudDtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGFiOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi5cXFxcIXRhYjpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHggIWltcG9ydGFudDtcXG59XFxuXFxuLnRhYjpmb2N1cy12aXNpYmxlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCBjdXJyZW50Q29sb3I7XFxufVxcblxcbi5cXFxcIXRhYjpmb2N1cy12aXNpYmxlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCBjdXJyZW50Q29sb3IgIWltcG9ydGFudDtcXG59XFxuXFxuLnRhYi1saWZ0ZWQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tdGFiLXJhZGl1cywuNXJlbSk7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tdGFiLXJhZGl1cywuNXJlbSk7XFxuICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS10YWItYm9yZGVyLDFweCkgc29saWQgaHNsYSh2YXIoLS1ib3JkZXItY29sb3IsdmFyKC0tYjMpKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXRhYi1wYWRkaW5nLDFyZW0pO1xcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tdGFiLXBhZGRpbmcsMXJlbSk7XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tdGFiLWJvcmRlciwxcHgpO1xcbn1cXG5cXG4udGFiLWxpZnRlZC50YWItYWN0aXZlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjEpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IHZhcigtLXRhYi1ib3JkZXIsMXB4KTtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICBib3JkZXItcmlnaHQtd2lkdGg6IHZhcigtLXRhYi1ib3JkZXIsMXB4KTtcXG4gIGJvcmRlci10b3Atd2lkdGg6IHZhcigtLXRhYi1ib3JkZXIsMXB4KTtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiBoc2xhKHZhcigtLWJvcmRlci1jb2xvcix2YXIoLS1iMykpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogaHNsYSh2YXIoLS1ib3JkZXItY29sb3IsdmFyKC0tYjMpKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICBib3JkZXItdG9wLWNvbG9yOiBoc2xhKHZhcigtLWJvcmRlci1jb2xvcix2YXIoLS1iMykpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS10YWItcGFkZGluZywgMXJlbSkgLSB2YXIoLS10YWItYm9yZGVyLCAxcHgpKTtcXG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tdGFiLXBhZGRpbmcsIDFyZW0pIC0gdmFyKC0tdGFiLWJvcmRlciwgMXB4KSk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tdGFiLWJvcmRlciwxcHgpO1xcbiAgcGFkZGluZy10b3A6IDA7XFxufVxcblxcbi50YWItbGlmdGVkLnRhYi1hY3RpdmU6YWZ0ZXIsLnRhYi1saWZ0ZWQudGFiLWFjdGl2ZTpiZWZvcmUge1xcbiAgei1pbmRleDogMTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogdmFyKC0tdGFiLXJhZGl1cywuNXJlbSk7XFxuICBoZWlnaHQ6IHZhcigtLXRhYi1yYWRpdXMsLjVyZW0pO1xcbiAgYm90dG9tOiAwO1xcbiAgLS10YWItZ3JhZDogY2FsYyg2OCUgLSB2YXIoLS10YWItYm9yZGVyLCAxcHgpKTtcXG4gIC0tdGFiLWNvcm5lci1iZzogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB2YXIoLS1jaXJjbGUtcG9zKSx0cmFuc3BhcmVudCB2YXIoLS10YWItZ3JhZCksaHNsYSh2YXIoLS1ib3JkZXItY29sb3IsdmFyKC0tYjMpKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSkgY2FsYyh2YXIoLS10YWItZ3JhZCkgKyAwLjNweCksaHNsYSh2YXIoLS1ib3JkZXItY29sb3IsdmFyKC0tYjMpKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSkgY2FsYyh2YXIoLS10YWItZ3JhZCkgKyB2YXIoLS10YWItYm9yZGVyLCAxcHgpKSxoc2xhKHZhcigtLWIxKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSkgY2FsYyh2YXIoLS10YWItZ3JhZCkgKyB2YXIoLS10YWItYm9yZGVyLCAxcHgpICsgMC4zcHgpKTtcXG59XFxuXFxuLnRhYi1saWZ0ZWQudGFiLWFjdGl2ZTpiZWZvcmUge1xcbiAgbGVmdDogY2FsYyh2YXIoLS10YWItcmFkaXVzLCAuNXJlbSkqLTEpO1xcbiAgLS1jaXJjbGUtcG9zOiB0b3AgbGVmdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXRhYi1jb3JuZXItYmcpO1xcbn1cXG5cXG5bZGlyPXJ0bF0gLnRhYi1saWZ0ZWQudGFiLWFjdGl2ZTpiZWZvcmUge1xcbiAgLS1jaXJjbGUtcG9zOiB0b3AgcmlnaHQ7XFxufVxcblxcbi50YWItbGlmdGVkLnRhYi1hY3RpdmU6YWZ0ZXIge1xcbiAgcmlnaHQ6IGNhbGModmFyKC0tdGFiLXJhZGl1cywgLjVyZW0pKi0xKTtcXG4gIC0tY2lyY2xlLXBvczogdG9wIHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tdGFiLWNvcm5lci1iZyk7XFxufVxcblxcbltkaXI9cnRsXSAudGFiLWxpZnRlZC50YWItYWN0aXZlOmFmdGVyIHtcXG4gIC0tY2lyY2xlLXBvczogdG9wIGxlZnQ7XFxufVxcblxcbi50YWItbGlmdGVkLnRhYi1hY3RpdmU6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi50YWItbGlmdGVkLnRhYi1hY3RpdmU6bGFzdC1jaGlsZDphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4udGFiLWxpZnRlZC50YWItYWN0aXZlKy50YWItbGlmdGVkLnRhYi1hY3RpdmU6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi50YWJzLWJveGVkIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjIpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcm91bmRlZC1idG4sLjVyZW0pO1xcbn1cXG5cXG4udGFicy1ib3hlZCAudGFiLWFjdGl2ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1wYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJvdW5kZWQtYnRuLC41cmVtKTtcXG59XFxuXFxuLnRhYnMtYm94ZWQgLnRhYi1hY3RpdmU6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1wYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLnRhYmxlIHRkLC50YWJsZSB0aCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnRhYmxlIHRyLmFjdGl2ZSB0ZCwudGFibGUgdHIuYWN0aXZlIHRoIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjMpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbn1cXG5cXG4udGFibGU6bm90KC50YWJsZS16ZWJyYSkgdGJvZHkgdHI6bm90KDpsYXN0LWNoaWxkKSB0ZCwudGFibGU6bm90KC50YWJsZS16ZWJyYSkgdGJvZHkgdHI6bm90KDpsYXN0LWNoaWxkKSB0aCwudGFibGU6bm90KC50YWJsZS16ZWJyYSkgdGZvb3QgdHI6bm90KDpsYXN0LWNoaWxkKSB0ZCwudGFibGU6bm90KC50YWJsZS16ZWJyYSkgdGZvb3QgdHI6bm90KDpsYXN0LWNoaWxkKSB0aCwudGFibGU6bm90KC50YWJsZS16ZWJyYSkgdGhlYWQgdHI6bm90KDpsYXN0LWNoaWxkKSB0ZCwudGFibGU6bm90KC50YWJsZS16ZWJyYSkgdGhlYWQgdHI6bm90KDpsYXN0LWNoaWxkKSB0aCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWIyKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxufVxcblxcbi50YWJsZSB0Zm9vdCB0ZCwudGFibGUgdGZvb3QgdGgsLnRhYmxlIHRoZWFkIHRkLC50YWJsZSB0aGVhZCB0aCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWIyKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnRhYmxlIHRmb290IHRkOmZpcnN0LWNoaWxkLC50YWJsZSB0Zm9vdCB0aDpmaXJzdC1jaGlsZCwudGFibGUgdGhlYWQgdGQ6Zmlyc3QtY2hpbGQsLnRhYmxlIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjVyZW07XFxufVxcblxcbi50YWJsZSB0Zm9vdCB0ZDpsYXN0LWNoaWxkLC50YWJsZSB0Zm9vdCB0aDpsYXN0LWNoaWxkLC50YWJsZSB0aGVhZCB0ZDpsYXN0LWNoaWxkLC50YWJsZSB0aGVhZCB0aDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNXJlbTtcXG59XFxuXFxuLnRhYmxlIHRib2R5IHRkLC50YWJsZSB0Ym9keSB0aCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLWIxKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLnRhYmxlLWNvbXBhY3QgdGQsLnRhYmxlLWNvbXBhY3QgdGgge1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnRleHRhcmVhLWRpc2FibGVkLC50ZXh0YXJlYVtkaXNhYmxlZF0ge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iMikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLWIyKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLnRleHRhcmVhLWRpc2FibGVkOjpwbGFjZWhvbGRlciwudGV4dGFyZWFbZGlzYWJsZWRdOjpwbGFjZWhvbGRlciB7XFxuICAtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuMjtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLWJjKS92YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLnRvZ2dsZSB7XFxuICAtLWNoa2JnOiBoc2xhKHZhcigtLWJjKS8uMik7XFxuICAtLWZvY3VzLXNoYWRvdzogMCAwIDA7XFxuICAtLWhhbmRsZW9mZnNldDogMS41cmVtO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMC4yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAwLjI7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJvdW5kZWQtYmFkZ2UsMS45cmVtKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQsYm94LXNoYWRvdyB2YXIoLS1hbmltYXRpb24taW5wdXQsLjJzKSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGNhbGModmFyKC0taGFuZGxlb2Zmc2V0KSotMSkgMCAwIDJweCBoc2wodmFyKC0tYjEpKSBpbnNldCwwIDAgMCAycHggaHNsKHZhcigtLWIxKSkgaW5zZXQsdmFyKC0tZm9jdXMtc2hhZG93KTtcXG59XFxuXFxuLnRvZ2dsZTpmb2N1cy12aXNpYmxlIHtcXG4gIC0tZm9jdXMtc2hhZG93OiAwIDAgMCAycHggaHNsKHZhcigtLWIxKSksMCAwIDAgNHB4IGhzbCh2YXIoLS1iYykpO1xcbn1cXG5cXG4udG9nZ2xlOmNoZWNrZWQge1xcbiAgLS1jaGtiZzogaHNsKHZhcigtLWJjKSk7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogdmFyKC0taGFuZGxlb2Zmc2V0KSAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpIGluc2V0LDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKSBpbnNldCx2YXIoLS1mb2N1cy1zaGFkb3cpO1xcbn1cXG5cXG4udG9nZ2xlLXByaW1hcnk6Zm9jdXMtdmlzaWJsZSB7XFxuICAtLWZvY3VzLXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpLDAgMCAwIDRweCBoc2wodmFyKC0tcCkpO1xcbn1cXG5cXG4udG9nZ2xlLXByaW1hcnk6Y2hlY2tlZCB7XFxuICAtLWNoa2JnOiBoc2wodmFyKC0tcCkpO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDAuMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4udG9nZ2xlOmRpc2FibGVkIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMC4yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iYykvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnJvdW5kZWQtYm94IHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJvdW5kZWQtYm94LDFyZW0pO1xcbn1cXG5cXG4uYmFkZ2Utc20ge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgZm9udC1zaXplOiAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogLjQzOHJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IC40MzhyZW07XFxufVxcblxcbi5idG4teHMge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXNpemU6IC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjI1O1xcbiAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcbiAgbWluLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4uYnRuLXNtIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAuNzVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAuNzVyZW07XFxuICBtaW4taGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uYnRuLXNxdWFyZS5idG4teHMge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLmJ0bi1zcXVhcmUuYnRuLXNtIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLmJ0bi1zcXVhcmUuYnRuLW1kIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogM3JlbTtcXG59XFxuXFxuLmJ0bi1zcXVhcmUuYnRuLWxnIHtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogNHJlbTtcXG59XFxuXFxuLmJ0bi1jaXJjbGUuYnRuLXhzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi5idG4tY2lyY2xlLmJ0bi1zbSB7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5jaGVja2JveC1zbSB7XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxuICB3aWR0aDogMS4yNXJlbTtcXG59XFxuXFxuLmlucHV0LXNtIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAuNzVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAuNzVyZW07XFxufVxcblxcbi5zZWxlY3Qtc20ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZm9udC1zaXplOiAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IC43NXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IC43NXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDJyZW07XFxufVxcblxcbi5hbGVydC1zdWNjZXNzIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMC4xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1zdSkvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXN1KS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYXZhdGFyLm9ubGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXN1KS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAuNXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAuNXJlbTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdG9wOiA1JTtcXG4gIHJpZ2h0OiA1JTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCBoc2wodmFyKC0tYjEpKTtcXG59XFxuXFxuLmF2YXRhci5vZmZsaW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tYjMpL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IC41cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IC41cmVtO1xcbiAgei1pbmRleDogMTA7XFxuICB0b3A6IDUlO1xcbiAgcmlnaHQ6IDUlO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGhzbCh2YXIoLS1iMSkpO1xcbn1cXG5cXG4uYmFkZ2UtcHJpbWFyeSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXApL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy1ib3JkZXItb3BhY2l0eSwxKSk7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXBjKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYmFkZ2Utc2Vjb25kYXJ5IHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tcykvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiBoc2xhKHZhcigtLXMpL3ZhcigtLXR3LWJvcmRlci1vcGFjaXR5LDEpKTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tc2MpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5iYWRnZS1hY2NlbnQge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1hKS92YXIoLS10dy1iZy1vcGFjaXR5LDEpKTtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IGhzbGEodmFyKC0tYSkvdmFyKC0tdHctYm9yZGVyLW9wYWNpdHksMSkpO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1hYykvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJhZGdlLW91dGxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDAuNTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tYmMpL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5iYWRnZS1vdXRsaW5lLmJhZGdlLXByaW1hcnkge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1wKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYmFkZ2Utb3V0bGluZS5iYWRnZS1zZWNvbmRhcnkge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1zKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYmFkZ2Utb3V0bGluZS5iYWRnZS1hY2NlbnQge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1hKS92YXIoLS10dy10ZXh0LW9wYWNpdHksMSkpO1xcbn1cXG5cXG4uYmFkZ2UtaW5mbyB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDAuMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0taW4pL3ZhcigtLXR3LWJnLW9wYWNpdHksMSkpO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0taW4pL3ZhcigtLXR3LXRleHQtb3BhY2l0eSwxKSk7XFxufVxcblxcbi5iYWRnZS1zdWNjZXNzIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMC4xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1zdSkvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1zdSkvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmJhZGdlLWVycm9yIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMC4xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1lcikvdmFyKC0tdHctYmctb3BhY2l0eSwxKSk7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1lcikvdmFyKC0tdHctdGV4dC1vcGFjaXR5LDEpKTtcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5hYnNvbHV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5yZWxhdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdGlja3kge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG59XFxuXFxuLnRvcC0wIHtcXG4gIHRvcDogMHB4O1xcbn1cXG5cXG4ucmlnaHQtMCB7XFxuICByaWdodDogMHB4O1xcbn1cXG5cXG4uei0yMCB7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLmNvbC1zcGFuLTMge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMyAvIHNwYW4gMztcXG59XFxuXFxuLmNvbC1zcGFuLWZ1bGwge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLmNvbC1zcGFuLTIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMiAvIHNwYW4gMjtcXG59XFxuXFxuLnJvdy1zcGFuLTIge1xcbiAgZ3JpZC1yb3c6IHNwYW4gMiAvIHNwYW4gMjtcXG59XFxuXFxuLm0tMSB7XFxuICBtYXJnaW46IDAuMjVyZW07XFxufVxcblxcbi5tLTQge1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4ubXgtMSB7XFxuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuXFxuLm15LTAge1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4ubXgtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLm1iLTQge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLm1yLTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5tdC00IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5tYi0xIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcblxcbi5tbC1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubXQtMiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi5tbC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5tci1hdXRvIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLm1iLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhYmxlIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uaC1zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmgtOCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5oLTYge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5oLTEwIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbn1cXG5cXG4uaC1mdWxsIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmgtNSB7XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxufVxcblxcbi5oLTQ4IHtcXG4gIGhlaWdodDogMTJyZW07XFxufVxcblxcbi5oLTYwIHtcXG4gIGhlaWdodDogMTVyZW07XFxufVxcblxcbi5oLTQge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uaC0yNCB7XFxuICBoZWlnaHQ6IDZyZW07XFxufVxcblxcbi5tYXgtaC0yOCB7XFxuICBtYXgtaGVpZ2h0OiA3cmVtO1xcbn1cXG5cXG4ubWF4LWgtNTYge1xcbiAgbWF4LWhlaWdodDogMTRyZW07XFxufVxcblxcbi5tYXgtaC04MCB7XFxuICBtYXgtaGVpZ2h0OiAyMHJlbTtcXG59XFxuXFxuLm1pbi1oLXNjcmVlbiB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnctNiB7XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4udy0xMCB7XFxuICB3aWR0aDogMi41cmVtO1xcbn1cXG5cXG4udy02MCB7XFxuICB3aWR0aDogMTVyZW07XFxufVxcblxcbi53LTk2IHtcXG4gIHdpZHRoOiAyNHJlbTtcXG59XFxuXFxuLnctNSB7XFxuICB3aWR0aDogMS4yNXJlbTtcXG59XFxuXFxuLnctNTIge1xcbiAgd2lkdGg6IDEzcmVtO1xcbn1cXG5cXG4udy01XFxcXC8xMiB7XFxuICB3aWR0aDogNDEuNjY2NjY3JTtcXG59XFxuXFxuLnctM1xcXFwvMTIge1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuXFxuLnctMVxcXFwvMTIge1xcbiAgd2lkdGg6IDguMzMzMzMzJTtcXG59XFxuXFxuLnctNCB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLnctODAge1xcbiAgd2lkdGg6IDIwcmVtO1xcbn1cXG5cXG4udy03MiB7XFxuICB3aWR0aDogMThyZW07XFxufVxcblxcbi5tYXgtdy1zbmlwcGV0IHtcXG4gIG1heC13aWR0aDogNDBjaDtcXG59XFxuXFxuLm1heC13LXByb3NlIHtcXG4gIG1heC13aWR0aDogNjVjaDtcXG59XFxuXFxuLmZsZXgtMSB7XFxuICBmbGV4OiAxIDEgMCU7XFxufVxcblxcbi5mbGV4LW5vbmUge1xcbiAgZmxleDogbm9uZTtcXG59XFxuXFxuLnRhYmxlLWZpeGVkIHtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxufVxcblxcbi5vcmlnaW4tdG9wLWxlZnQge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbi50cmFuc2Zvcm0ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogLjU7XFxuICB9XFxufVxcblxcbi5hbmltYXRlLXB1bHNlIHtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG59XFxuXFxuLmN1cnNvci1wb2ludGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmN1cnNvci1kZWZhdWx0IHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmdyaWQtZmxvdy1yb3ctZGVuc2Uge1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdyBkZW5zZTtcXG59XFxuXFxuLmdyaWQtY29scy0xIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuXFxuLmdyaWQtY29scy0yIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuXFxuLmdyaWQtY29scy0zIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuXFxuLmdyaWQtcm93cy0zIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuXFxuLmdyaWQtcm93cy0xIHtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuXFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pdGVtcy1zdGFydCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLml0ZW1zLWVuZCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmdhcC00IHtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmdhcC0zIHtcXG4gIGdhcDogMC43NXJlbTtcXG59XFxuXFxuLmdhcC0yIHtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZ2FwLTEge1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG4uc3BhY2UteS00ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuICAtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG4gIG1hcmdpbi10b3A6IGNhbGMoMXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoMXJlbSAqIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbn1cXG5cXG4uc3BhY2UteC0yID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuICAtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXG4gIG1hcmdpbi1yaWdodDogY2FsYygwLjVyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDAuNXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpKTtcXG59XFxuXFxuLnNlbGYtZW5kIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ub3ZlcmZsb3ctYXV0byB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm92ZXJmbG93LXZpc2libGUge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5vdmVyZmxvdy15LWF1dG8ge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRydW5jYXRlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5yb3VuZGVkLWZ1bGwge1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbn1cXG5cXG4ucm91bmRlZC1sLW5vbmUge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcbn1cXG5cXG4uYm9yZGVyLW5vbmUge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4uYmctbmV1dHJhbCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLW4pIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctYmFzZS0xMDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1iMSkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1uZXV0cmFsLWNvbnRlbnQge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1uYykgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1wcmltYXJ5IHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEodmFyKC0tcCkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1hY2NlbnQge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSh2YXIoLS1hKSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXNlY29uZGFyeSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKHZhcigtLXMpIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctZW1lcmFsZC03MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQgMTIwIDg3IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctdGVhbC03MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1IDExOCAxMTAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1jeWFuLTcwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQgMTE2IDE0NCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXNreS03MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMgMTA1IDE2MSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLWJsdWUtNzAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSA3OCAyMTYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1pbmRpZ28tNzAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NyA1NiAyMDIgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy12aW9sZXQtNzAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDkgNDAgMjE3IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctcm9zZS05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNiAxOSA1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXBpbmstOTAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEgMjQgNjcgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1mdWNoc2lhLTkwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyIDI2IDExNyAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXB1cnBsZS05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4IDI4IDEzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXZpb2xldC05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2IDI5IDE0OSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLWFtYmVyLTkwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIwIDUzIDE1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctb3JhbmdlLTkwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI0IDQ1IDE4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctY3lhbi05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyIDc4IDk5IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctc2t5LTkwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIgNzQgMTEwIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctdGVhbC05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5IDc4IDc0IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctZW1lcmFsZC05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYgNzggNTkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5iZy1ncmVlbi05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwIDgzIDQ1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctbGltZS05MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0IDgzIDIwIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmcteWVsbG93LTkwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEzIDYzIDE4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmctc3RvbmUtODAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSAzNyAzNiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmJnLXN0b25lLTIwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxIDIyOSAyMjggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5zdHJva2UtY3VycmVudCB7XFxuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLnAtNCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHgtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ucHgtMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcXG59XFxuXFxuLnB4LTMge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcXG59XFxuXFxuLnB0LTQge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi5wbC0wIHtcXG4gIHBhZGRpbmctbGVmdDogMHB4O1xcbn1cXG5cXG4ucHItMVxcXFwuNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjM3NXJlbTtcXG59XFxuXFxuLnByLTEge1xcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcXG59XFxuXFxuLnB0LTYge1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG59XFxuXFxuLnByLTE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07XFxufVxcblxcbi5wci0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG5cXG4udGV4dC1iYXNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi50ZXh0LXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuXFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGV4dC1iYXNlLWNvbnRlbnQge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1iYykgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtbmV1dHJhbCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLW4pIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LWVycm9yIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tZXIpIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LXByaW1hcnkge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1wKSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4udGV4dC1wcmltYXJ5LWNvbnRlbnQge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1wYykgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtYWNjZW50LWNvbnRlbnQge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1hYykgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtc2Vjb25kYXJ5LWNvbnRlbnQge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogaHNsYSh2YXIoLS1zYykgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtc3VjY2VzcyB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiBoc2xhKHZhcigtLXN1KSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4udGV4dC1pbmZvIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0taW4pIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LXN0b25lLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTY4IDE2MiAxNTggLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtc3RvbmUtNTAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxMjAgMTEzIDEwOCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4udGV4dC13aGl0ZSB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtbmV1dHJhbC1jb250ZW50IHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IGhzbGEodmFyKC0tbmMpIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi50ZXh0LXN0b25lLTMwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjE0IDIxMSAyMDkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnRleHQtc2t5LTcwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMyAxMDUgMTYxIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5zaGFkb3ctbGcge1xcbiAgLS10dy1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMTBweCAxNXB4IC0zcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCA0cHggNnB4IC00cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcbi5zaGFkb3cge1xcbiAgLS10dy1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDAuMSksIDAgMXB4IDJweCAtMXB4IHJnYigwIDAgMCAvIDAuMSk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDFweCAzcHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDFweCAycHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuXFxuLmZpbHRlciB7XFxuICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxufVxcblxcbi50cmFuc2l0aW9uIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXIsIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcblxcbi5zY3JvbGxiYXIge1xcbiAgLS1zY3JvbGxiYXItdHJhY2steDogIzljYTNhZjtcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXk6ICM5Y2EzYWY7XFxuICAtLXNjcm9sbGJhci10aHVtYi14OiAjNGI1NTYzO1xcbiAgLS1zY3JvbGxiYXItdGh1bWIteTogIzRiNTU2MztcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXJhZGl1cy14OiAwLjM3NXJlbTtcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXJhZGl1cy15OiAwLjM3NXJlbTtcXG4gIC0tc2Nyb2xsYmFyLXRodW1iLXJhZGl1cy14OiAwLjM3NXJlbTtcXG4gIC0tc2Nyb2xsYmFyLXRodW1iLXJhZGl1cy15OiAwLjM3NXJlbTtcXG4gIC0tc2Nyb2xsYmFyLXdpZHRoLXg6IDAuMjVyZW07XFxuICAtLXNjcm9sbGJhci13aWR0aC15OiAwLjI1cmVtO1xcbiAgLS1zY3JvbGxiYXItYXV0by10cmFjazogIzljYTNhZjtcXG4gIC0tc2Nyb2xsYmFyLWF1dG8tdGh1bWI6ICM0YjU1NjM7XFxuICAtLXNjcm9sbGJhci1hdXRvLXRyYWNrLXJhZGl1czogMC4zNzVyZW07XFxuICAtLXNjcm9sbGJhci1hdXRvLXRodW1iLXJhZGl1czogMC4zNzVyZW07XFxuICAtLXNjcm9sbGJhci1hdXRvLXdpZHRoOiAwLjI1cmVtO1xcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XFxufVxcblxcbi5zY3JvbGxiYXIgc2Nyb2xsYmFyLWhpZGRlbiB7XFxuICAtLXNjcm9sbGJhci10cmFjay14OiB0cmFuc3BhcmVudDtcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXk6IHRyYW5zcGFyZW50O1xcbiAgLS1zY3JvbGxiYXItdGh1bWIteDogdHJhbnNwYXJlbnQ7XFxuICAtLXNjcm9sbGJhci10aHVtYi15OiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNjcm9sbGJhciBob3ZlclxcXFw6c2Nyb2xsYmFyLWhpZGRlbjpob3ZlciB7XFxuICAtLXNjcm9sbGJhci10cmFjay15OiB0cmFuc3BhcmVudDtcXG4gIC0tc2Nyb2xsYmFyLXRodW1iLXk6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2Nyb2xsYmFyIHNjcm9sbGJhci1hdXRvIHtcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXg6IHZhcigtLXNjcm9sbGJhci1hdXRvLXRyYWNrKTtcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXk6IHZhcigtLXNjcm9sbGJhci1hdXRvLXRyYWNrKTtcXG4gIC0tc2Nyb2xsYmFyLXRodW1iLXg6IHZhcigtLXNjcm9sbGJhci1hdXRvLXRodW1iKTtcXG4gIC0tc2Nyb2xsYmFyLXRodW1iLXk6IHZhcigtLXNjcm9sbGJhci1hdXRvLXRodW1iKTtcXG59XFxuXFxuLnNjcm9sbGJhciBob3ZlclxcXFw6c2Nyb2xsYmFyLWF1dG86aG92ZXIge1xcbiAgLS1zY3JvbGxiYXItdHJhY2steDogdmFyKC0tc2Nyb2xsYmFyLWF1dG8tdHJhY2spO1xcbiAgLS1zY3JvbGxiYXItdHJhY2steTogdmFyKC0tc2Nyb2xsYmFyLWF1dG8tdHJhY2spO1xcbiAgLS1zY3JvbGxiYXItdGh1bWIteDogdmFyKC0tc2Nyb2xsYmFyLWF1dG8tdGh1bWIpO1xcbiAgLS1zY3JvbGxiYXItdGh1bWIteTogdmFyKC0tc2Nyb2xsYmFyLWF1dG8tdGh1bWIpO1xcbn1cXG5cXG4uc2Nyb2xsYmFyIHNjcm9sbGJhci14LWhpZGRlbiB7XFxuICAtLXNjcm9sbGJhci10cmFjay14OiB0cmFuc3BhcmVudDtcXG4gIC0tc2Nyb2xsYmFyLXRodW1iLXg6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uc2Nyb2xsYmFyIGhvdmVyXFxcXDpzY3JvbGxiYXIteC1oaWRkZW4ge1xcbiAgLS1zY3JvbGxiYXItdHJhY2steDogdHJhbnNwYXJlbnQ7XFxuICAtLXNjcm9sbGJhci10aHVtYi14OiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNjcm9sbGJhciBzY3JvbGxiYXIteS1oaWRkZW4ge1xcbiAgLS1zY3JvbGxiYXItdHJhY2steTogdHJhbnNwYXJlbnQ7XFxuICAtLXNjcm9sbGJhci10aHVtYi15OiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNjcm9sbGJhciBob3ZlclxcXFw6c2Nyb2xsYmFyLXktaGlkZGVuIHtcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXk6IHRyYW5zcGFyZW50O1xcbiAgLS1zY3JvbGxiYXItdGh1bWIteTogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGhlaWdodDogdmFyKC0tc2Nyb2xsYmFyLXdpZHRoLXgpO1xcbiAgd2lkdGg6IHZhcigtLXNjcm9sbGJhci13aWR0aC15KTtcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Nyb2xsYmFyLXRyYWNrLXgpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Nyb2xsYmFyLXRyYWNrLXJhZGl1cy14KTtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogdmFyKC0tc2Nyb2xsYmFyLXRyYWNrLXJhZGl1cy14KTtcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Nyb2xsYmFyLXRodW1iLXgpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Nyb2xsYmFyLXRodW1iLXJhZGl1cy14KTtcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IHZhcigtLXNjcm9sbGJhci13aWR0aC14KTtcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG9yaXpvbnRhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JvbGxiYXItdHJhY2steCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zY3JvbGxiYXItdHJhY2stcmFkaXVzLXgpO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiB2YXIoLS1zY3JvbGxiYXItdHJhY2stcmFkaXVzLXgpO1xcbn1cXG5cXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbGJhci10aHVtYi14KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNjcm9sbGJhci10aHVtYi1yYWRpdXMteCk7XFxufVxcblxcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsIHtcXG4gIHdpZHRoOiB2YXIoLS1zY3JvbGxiYXItd2lkdGgteSk7XFxufVxcblxcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOnZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbGJhci10cmFjay15KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNjcm9sbGJhci10cmFjay1yYWRpdXMteSk7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IHZhcigtLXNjcm9sbGJhci10cmFjay1yYWRpdXMteSk7XFxufVxcblxcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbGJhci10aHVtYi15KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNjcm9sbGJhci10aHVtYi1yYWRpdXMteSk7XFxufVxcblxcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyOmhvdmVyIHtcXG4gIGhlaWdodDogdmFyKC0tc2Nyb2xsYmFyLXdpZHRoLXgpO1xcbiAgd2lkdGg6IHZhcigtLXNjcm9sbGJhci13aWR0aC15KTtcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Nyb2xsYmFyLXRyYWNrLXgpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Nyb2xsYmFyLXRyYWNrLXJhZGl1cy14KTtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogdmFyKC0tc2Nyb2xsYmFyLXRyYWNrLXJhZGl1cy14KTtcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Nyb2xsYmFyLXRodW1iLXgpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2Nyb2xsYmFyLXRodW1iLXJhZGl1cy14KTtcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXI6aG9yaXpvbnRhbDpob3ZlciB7XFxuICBoZWlnaHQ6IHZhcigtLXNjcm9sbGJhci13aWR0aC14KTtcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG9yaXpvbnRhbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JvbGxiYXItdHJhY2steCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zY3JvbGxiYXItdHJhY2stcmFkaXVzLXgpO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiB2YXIoLS1zY3JvbGxiYXItdHJhY2stcmFkaXVzLXgpO1xcbn1cXG5cXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3Jpem9udGFsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbGJhci10aHVtYi14KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNjcm9sbGJhci10aHVtYi1yYWRpdXMteCk7XFxufVxcblxcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyOnZlcnRpY2FsOmhvdmVyIHtcXG4gIHdpZHRoOiB2YXIoLS1zY3JvbGxiYXItd2lkdGgteSk7XFxufVxcblxcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOnZlcnRpY2FsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbGJhci10cmFjay15KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNjcm9sbGJhci10cmFjay1yYWRpdXMteSk7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IHZhcigtLXNjcm9sbGJhci10cmFjay1yYWRpdXMteSk7XFxufVxcblxcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcm9sbGJhci10aHVtYi15KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNjcm9sbGJhci10aHVtYi1yYWRpdXMteSk7XFxufVxcblxcbi5zY3JvbGxiYXItaGlkZGVuIHtcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXg6IHRyYW5zcGFyZW50O1xcbiAgLS1zY3JvbGxiYXItdHJhY2steTogdHJhbnNwYXJlbnQ7XFxuICAtLXNjcm9sbGJhci10aHVtYi14OiB0cmFuc3BhcmVudDtcXG4gIC0tc2Nyb2xsYmFyLXRodW1iLXk6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaG92ZXJcXFxcOnRleHQtYW1iZXItMzAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyNTIgMjExIDc3IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6c2Nyb2xsYmFyLXRyYWNrLXRyYW5zcGFyZW50OmhvdmVyIHtcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXg6IHRyYW5zcGFyZW50O1xcbiAgLS1zY3JvbGxiYXItdHJhY2steTogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5ob3ZlclxcXFw6c2Nyb2xsYmFyLXRyYWNrLXRyYW5zcGFyZW50OmhvdmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAtLXNjcm9sbGJhci10cmFjay14OiB0cmFuc3BhcmVudDtcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXk6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaG92ZXJcXFxcOnNjcm9sbGJhci10aHVtYi15ZWxsb3ctNjAwOmhvdmVyIHtcXG4gIC0tc2Nyb2xsYmFyLXRodW1iLXg6ICNjYThhMDQ7XFxuICAtLXNjcm9sbGJhci10aHVtYi15OiAjY2E4YTA0O1xcbn1cXG5cXG4uaG92ZXJcXFxcOnNjcm9sbGJhci10aHVtYi15ZWxsb3ctNjAwOmhvdmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAtLXNjcm9sbGJhci10aHVtYi14OiAjY2E4YTA0O1xcbiAgLS1zY3JvbGxiYXItdGh1bWIteTogI2NhOGEwNDtcXG59XFxuXFxuLmhvdmVyXFxcXDpzY3JvbGxiYXItd2lkdGgtMTpob3ZlciB7XFxuICAtLXNjcm9sbGJhci13aWR0aC14OiAwLjI1cmVtO1xcbiAgLS1zY3JvbGxiYXItd2lkdGgteTogMC4yNXJlbTtcXG59XFxuXFxuLmhvdmVyXFxcXDpzY3JvbGxiYXItd2lkdGgtMTpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItd2lkdGgge1xcbiAgLS1zY3JvbGxiYXItd2lkdGgteDogMC4yNXJlbTtcXG4gIC0tc2Nyb2xsYmFyLXdpZHRoLXk6IDAuMjVyZW07XFxufVxcblxcbi5ob3ZlclxcXFw6c2Nyb2xsYmFyLXRyYWNrLXJhZGl1cy1mdWxsOmhvdmVyIHtcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXJhZGl1cy14OiA5OTk5cHg7XFxuICAtLXNjcm9sbGJhci10cmFjay1yYWRpdXMteTogOTk5OXB4O1xcbn1cXG5cXG4uaG92ZXJcXFxcOnNjcm9sbGJhci10cmFjay1yYWRpdXMtZnVsbDpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcmFkaXVzIHtcXG4gIC0tc2Nyb2xsYmFyLXRyYWNrLXJhZGl1cy14OiA5OTk5cHg7XFxuICAtLXNjcm9sbGJhci10cmFjay1yYWRpdXMteTogOTk5OXB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG5cXG4gIC5zbVxcXFw6dmlzaWJsZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLm1kXFxcXDpjb2wtc3Bhbi0yIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMiAvIHNwYW4gMjtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6Z3JpZC1jb2xzLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuXFxuICAubWRcXFxcOmdyaWQtY29scy01IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcblxcbiAgLm1kXFxcXDpncmlkLXJvd3Mtbm9uZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbm9uZTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6cHgtOCB7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6cHQtOCB7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgfVxcblxcbiAgLm1kXFxcXDpwbC02IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG4gIC5sZ1xcXFw6aGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5sZ1xcXFw6Z3JpZC1jb2xzLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuXFxuICAubGdcXFxcOnB4LTQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCIsXCJ3ZWJwYWNrOi8vbm9kZV9tb2R1bGVzL3RhaWx3aW5kY3NzLyUzQ2lucHV0JTIwY3NzJTIwbGZtYUstJTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VDUUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixlQUFlLEVBQUUsTUFBTTtFQUN2QixtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLHFCQUEwRCxFQUFFLE1BQU07QURYdEQ7O0FBQWQ7O0VDZ0JFLGdCQUFnQjtBRGhCSjs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDtFQzJCRSxnQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCLDhCQUE4QixFQUFFLE1BQU07RUFDdEMsZ0JBQWdCLEVBQUUsTUFBTTtFQUN4QixXQUFXLEVBQUUsTUFBTTtFQUNuQiw0TkFBc1AsRUFBRSxNQUFNO0FEL0JsUDs7QUFBZDs7O0NBQWM7O0FBQWQ7RUN3Q0UsU0FBUyxFQUFFLE1BQU07RUFDakIsb0JBQW9CLEVBQUUsTUFBTTtBRHpDaEI7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQ21ERSxTQUFTLEVBQUUsTUFBTTtF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QSxXQUFBO0FGSW1COztBQUFuQjtFRUpBLGFBQUE7QUZJbUI7O0FBQW5CO0VFSkEsYUFBQTtBRkltQjs7QUFBbkI7RUVKQSxZQUFBO0FGSW1COztBQUFuQjtFRUpBLFlBQUE7QUZJbUI7O0FBQW5CO0VFSkEsY0FBQTtBRkltQjs7QUFBbkI7RUVKQSxZQUFBO0FGSW1COztBQUFuQjtFRUpBLGlCQUFBO0FGSW1COztBQUFuQjtFRUpBLFVBQUE7QUZJbUI7O0FBQW5CO0VFSkEsZ0JBQUE7QUZJbUI7O0FBQW5CO0VFSkEsV0FBQTtBRkltQjs7QUFBbkI7RUVKQSxZQUFBO0FGSW1COztBQUFuQjtFRUpBLFlBQUE7QUZJbUI7O0FBQW5CO0VFSkEsZUFBQTtBRkltQjs7QUFBbkI7RUVKQSxlQUFBO0FGSW1COztBQUFuQjtFRUpBLFlBQUE7QUZJbUI7O0FBQW5CO0VFSkEsVUFBQTtBRkltQjs7QUFBbkI7RUVKQSxtQkFBQTtBRkltQjs7QUFBbkI7RUVKQSwwQkFBQTtBRkltQjs7QUFBbkI7RUVKQSwrTEFBQTtBRkltQjs7QUFBbkI7O0VFSkE7SUFBQSxXQUFBO0VGZytFRTtBQTU5RWlCOztBQUFuQjtFRUpBLHlEQUFBO0FGSW1COztBQUFuQjtFRUpBLGVBQUE7QUZJbUI7O0FBQW5CO0VFSkEsZUFBQTtBRkltQjs7QUFBbkI7RUVKQSx5QkFBQTtBRkltQjs7QUFBbkI7RUVKQSxnREFBQTtBRkltQjs7QUFBbkI7RUVKQSxnREFBQTtBRkltQjs7QUFBbkI7RUVKQSxnREFBQTtBRkltQjs7QUFBbkI7RUVKQSw2Q0FBQTtBRkltQjs7QUFBbkI7RUVKQSw2Q0FBQTtBRkltQjs7QUFBbkI7RUVKQSxzQkFBQTtBRkltQjs7QUFBbkI7RUVKQSx1QkFBQTtBRkltQjs7QUFBbkI7RUVKQSxxQkFBQTtBRkltQjs7QUFBbkI7RUVKQSxtQkFBQTtBRkltQjs7QUFBbkI7RUVKQSx1QkFBQTtBRkltQjs7QUFBbkI7RUVKQSw4QkFBQTtBRkltQjs7QUFBbkI7RUVKQSxTQUFBO0FGSW1COztBQUFuQjtFRUpBLFlBQUE7QUZJbUI7O0FB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LG1CQUFBO0VGeXFHRTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcblxcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcblxcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXCIsXCIvKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IHRoZW1lKCdib3JkZXJDb2xvci5ERUZBVUxUJywgJ2N1cnJlbnRDb2xvcicpOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5zYW5zJywgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiKTsgLyogNCAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkubW9ubycsIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlKTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogdGhlbWUoJ2NvbG9ycy5ncmF5LjQwMCcsICM5Y2EzYWYpOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8sIGNyZWF0ZUVsZW1lbnQsIG1lbW8sIEZyYWdtZW50LCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3R5bGVkLCBrZXlmcmFtZXMsIHNldHVwLCBjc3MgfSBmcm9tICdnb29iZXInO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2Uoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHN0cmluZ3MucmF3ID0gcmF3O1xuICByZXR1cm4gc3RyaW5ncztcbn1cblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbE9yRnVuY3Rpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWxPckZ1bmN0aW9uID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIHJlc29sdmVWYWx1ZSA9IGZ1bmN0aW9uIHJlc29sdmVWYWx1ZSh2YWxPckZ1bmN0aW9uLCBhcmcpIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24odmFsT3JGdW5jdGlvbikgPyB2YWxPckZ1bmN0aW9uKGFyZykgOiB2YWxPckZ1bmN0aW9uO1xufTtcblxudmFyIGdlbklkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIGNvdW50ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKCsrY291bnQpLnRvU3RyaW5nKCk7XG4gIH07XG59KCk7XG52YXIgY3JlYXRlUmVjdFJlZiA9IGZ1bmN0aW9uIGNyZWF0ZVJlY3RSZWYob25SZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYm91bmRpbmdSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG9uUmVjdChib3VuZGluZ1JlY3QpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufTtcbnZhciBwcmVmZXJzUmVkdWNlZE1vdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIENhY2hlIHJlc3VsdFxuICB2YXIgc2hvdWxkUmVkdWNlTW90aW9uID0gdW5kZWZpbmVkO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzaG91bGRSZWR1Y2VNb3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIG1lZGlhUXVlcnkgPSBtYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpO1xuICAgICAgc2hvdWxkUmVkdWNlTW90aW9uID0gIW1lZGlhUXVlcnkgfHwgbWVkaWFRdWVyeS5tYXRjaGVzO1xuICAgIH1cblxuICAgIHJldHVybiBzaG91bGRSZWR1Y2VNb3Rpb247XG4gIH07XG59KCk7XG5cbnZhciBUT0FTVF9MSU1JVCA9IDIwO1xudmFyIEFjdGlvblR5cGU7XG5cbihmdW5jdGlvbiAoQWN0aW9uVHlwZSkge1xuICBBY3Rpb25UeXBlW0FjdGlvblR5cGVbXCJBRERfVE9BU1RcIl0gPSAwXSA9IFwiQUREX1RPQVNUXCI7XG4gIEFjdGlvblR5cGVbQWN0aW9uVHlwZVtcIlVQREFURV9UT0FTVFwiXSA9IDFdID0gXCJVUERBVEVfVE9BU1RcIjtcbiAgQWN0aW9uVHlwZVtBY3Rpb25UeXBlW1wiVVBTRVJUX1RPQVNUXCJdID0gMl0gPSBcIlVQU0VSVF9UT0FTVFwiO1xuICBBY3Rpb25UeXBlW0FjdGlvblR5cGVbXCJESVNNSVNTX1RPQVNUXCJdID0gM10gPSBcIkRJU01JU1NfVE9BU1RcIjtcbiAgQWN0aW9uVHlwZVtBY3Rpb25UeXBlW1wiUkVNT1ZFX1RPQVNUXCJdID0gNF0gPSBcIlJFTU9WRV9UT0FTVFwiO1xuICBBY3Rpb25UeXBlW0FjdGlvblR5cGVbXCJTVEFSVF9QQVVTRVwiXSA9IDVdID0gXCJTVEFSVF9QQVVTRVwiO1xuICBBY3Rpb25UeXBlW0FjdGlvblR5cGVbXCJFTkRfUEFVU0VcIl0gPSA2XSA9IFwiRU5EX1BBVVNFXCI7XG59KShBY3Rpb25UeXBlIHx8IChBY3Rpb25UeXBlID0ge30pKTtcblxudmFyIHRvYXN0VGltZW91dHMgPSAvKiNfX1BVUkVfXyovbmV3IE1hcCgpO1xuXG52YXIgYWRkVG9SZW1vdmVRdWV1ZSA9IGZ1bmN0aW9uIGFkZFRvUmVtb3ZlUXVldWUodG9hc3RJZCkge1xuICBpZiAodG9hc3RUaW1lb3V0cy5oYXModG9hc3RJZCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRvYXN0VGltZW91dHNbXCJkZWxldGVcIl0odG9hc3RJZCk7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZS5SRU1PVkVfVE9BU1QsXG4gICAgICB0b2FzdElkOiB0b2FzdElkXG4gICAgfSk7XG4gIH0sIDEwMDApO1xuICB0b2FzdFRpbWVvdXRzLnNldCh0b2FzdElkLCB0aW1lb3V0KTtcbn07XG5cbnZhciBjbGVhckZyb21SZW1vdmVRdWV1ZSA9IGZ1bmN0aW9uIGNsZWFyRnJvbVJlbW92ZVF1ZXVlKHRvYXN0SWQpIHtcbiAgdmFyIHRpbWVvdXQgPSB0b2FzdFRpbWVvdXRzLmdldCh0b2FzdElkKTtcblxuICBpZiAodGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgfVxufTtcblxudmFyIHJlZHVjZXIgPSBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQWN0aW9uVHlwZS5BRERfVE9BU1Q6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRvYXN0czogW2FjdGlvbi50b2FzdF0uY29uY2F0KHN0YXRlLnRvYXN0cykuc2xpY2UoMCwgVE9BU1RfTElNSVQpXG4gICAgICB9KTtcblxuICAgIGNhc2UgQWN0aW9uVHlwZS5VUERBVEVfVE9BU1Q6XG4gICAgICAvLyAgISBTaWRlIGVmZmVjdHMgIVxuICAgICAgaWYgKGFjdGlvbi50b2FzdC5pZCkge1xuICAgICAgICBjbGVhckZyb21SZW1vdmVRdWV1ZShhY3Rpb24udG9hc3QuaWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRvYXN0czogc3RhdGUudG9hc3RzLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LmlkID09PSBhY3Rpb24udG9hc3QuaWQgPyBfZXh0ZW5kcyh7fSwgdCwgYWN0aW9uLnRvYXN0KSA6IHQ7XG4gICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgIGNhc2UgQWN0aW9uVHlwZS5VUFNFUlRfVE9BU1Q6XG4gICAgICB2YXIgdG9hc3QgPSBhY3Rpb24udG9hc3Q7XG4gICAgICByZXR1cm4gc3RhdGUudG9hc3RzLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQuaWQgPT09IHRvYXN0LmlkO1xuICAgICAgfSkgPyByZWR1Y2VyKHN0YXRlLCB7XG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuVVBEQVRFX1RPQVNULFxuICAgICAgICB0b2FzdDogdG9hc3RcbiAgICAgIH0pIDogcmVkdWNlcihzdGF0ZSwge1xuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLkFERF9UT0FTVCxcbiAgICAgICAgdG9hc3Q6IHRvYXN0XG4gICAgICB9KTtcblxuICAgIGNhc2UgQWN0aW9uVHlwZS5ESVNNSVNTX1RPQVNUOlxuICAgICAgdmFyIHRvYXN0SWQgPSBhY3Rpb24udG9hc3RJZDsgLy8gISBTaWRlIGVmZmVjdHMgISAtIFRoaXMgY291bGQgYmUgZXhlY3JhdGVkIGludG8gYSBkaXNtaXNzVG9hc3QoKSBhY3Rpb24sIGJ1dCBJJ2xsIGtlZXAgaXQgaGVyZSBmb3Igc2ltcGxpY2l0eVxuXG4gICAgICBpZiAodG9hc3RJZCkge1xuICAgICAgICBhZGRUb1JlbW92ZVF1ZXVlKHRvYXN0SWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUudG9hc3RzLmZvckVhY2goZnVuY3Rpb24gKHRvYXN0KSB7XG4gICAgICAgICAgYWRkVG9SZW1vdmVRdWV1ZSh0b2FzdC5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRvYXN0czogc3RhdGUudG9hc3RzLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LmlkID09PSB0b2FzdElkIHx8IHRvYXN0SWQgPT09IHVuZGVmaW5lZCA/IF9leHRlbmRzKHt9LCB0LCB7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgIH0pIDogdDtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBBY3Rpb25UeXBlLlJFTU9WRV9UT0FTVDpcbiAgICAgIGlmIChhY3Rpb24udG9hc3RJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICB0b2FzdHM6IFtdXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRvYXN0czogc3RhdGUudG9hc3RzLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LmlkICE9PSBhY3Rpb24udG9hc3RJZDtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBBY3Rpb25UeXBlLlNUQVJUX1BBVVNFOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYXVzZWRBdDogYWN0aW9uLnRpbWVcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBBY3Rpb25UeXBlLkVORF9QQVVTRTpcbiAgICAgIHZhciBkaWZmID0gYWN0aW9uLnRpbWUgLSAoc3RhdGUucGF1c2VkQXQgfHwgMCk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHBhdXNlZEF0OiB1bmRlZmluZWQsXG4gICAgICAgIHRvYXN0czogc3RhdGUudG9hc3RzLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdCwge1xuICAgICAgICAgICAgcGF1c2VEdXJhdGlvbjogdC5wYXVzZUR1cmF0aW9uICsgZGlmZlxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXJzID0gW107XG52YXIgbWVtb3J5U3RhdGUgPSB7XG4gIHRvYXN0czogW10sXG4gIHBhdXNlZEF0OiB1bmRlZmluZWRcbn07XG52YXIgZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgbWVtb3J5U3RhdGUgPSByZWR1Y2VyKG1lbW9yeVN0YXRlLCBhY3Rpb24pO1xuICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcihtZW1vcnlTdGF0ZSk7XG4gIH0pO1xufTtcbnZhciBkZWZhdWx0VGltZW91dHMgPSB7XG4gIGJsYW5rOiA0MDAwLFxuICBlcnJvcjogNDAwMCxcbiAgc3VjY2VzczogMjAwMCxcbiAgbG9hZGluZzogSW5maW5pdHksXG4gIGN1c3RvbTogNDAwMFxufTtcbnZhciB1c2VTdG9yZSA9IGZ1bmN0aW9uIHVzZVN0b3JlKHRvYXN0T3B0aW9ucykge1xuICBpZiAodG9hc3RPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICB0b2FzdE9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShtZW1vcnlTdGF0ZSksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goc2V0U3RhdGUpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihzZXRTdGF0ZSk7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtzdGF0ZV0pO1xuICB2YXIgbWVyZ2VkVG9hc3RzID0gc3RhdGUudG9hc3RzLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHZhciBfdG9hc3RPcHRpb25zJHQkdHlwZSwgX3RvYXN0T3B0aW9ucywgX3RvYXN0T3B0aW9ucyR0JHR5cGUyO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0b2FzdE9wdGlvbnMsIHRvYXN0T3B0aW9uc1t0LnR5cGVdLCB0LCB7XG4gICAgICBkdXJhdGlvbjogdC5kdXJhdGlvbiB8fCAoKF90b2FzdE9wdGlvbnMkdCR0eXBlID0gdG9hc3RPcHRpb25zW3QudHlwZV0pID09IG51bGwgPyB2b2lkIDAgOiBfdG9hc3RPcHRpb25zJHQkdHlwZS5kdXJhdGlvbikgfHwgKChfdG9hc3RPcHRpb25zID0gdG9hc3RPcHRpb25zKSA9PSBudWxsID8gdm9pZCAwIDogX3RvYXN0T3B0aW9ucy5kdXJhdGlvbikgfHwgZGVmYXVsdFRpbWVvdXRzW3QudHlwZV0sXG4gICAgICBzdHlsZTogX2V4dGVuZHMoe30sIHRvYXN0T3B0aW9ucy5zdHlsZSwgKF90b2FzdE9wdGlvbnMkdCR0eXBlMiA9IHRvYXN0T3B0aW9uc1t0LnR5cGVdKSA9PSBudWxsID8gdm9pZCAwIDogX3RvYXN0T3B0aW9ucyR0JHR5cGUyLnN0eWxlLCB0LnN0eWxlKVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgIHRvYXN0czogbWVyZ2VkVG9hc3RzXG4gIH0pO1xufTtcblxudmFyIGNyZWF0ZVRvYXN0ID0gZnVuY3Rpb24gY3JlYXRlVG9hc3QobWVzc2FnZSwgdHlwZSwgb3B0cykge1xuICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7XG4gICAgdHlwZSA9ICdibGFuayc7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgYXJpYVByb3BzOiB7XG4gICAgICByb2xlOiAnc3RhdHVzJyxcbiAgICAgICdhcmlhLWxpdmUnOiAncG9saXRlJ1xuICAgIH0sXG4gICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICBwYXVzZUR1cmF0aW9uOiAwXG4gIH0sIG9wdHMsIHtcbiAgICBpZDogKG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaWQpIHx8IGdlbklkKClcbiAgfSk7XG59O1xuXG52YXIgY3JlYXRlSGFuZGxlciA9IGZ1bmN0aW9uIGNyZWF0ZUhhbmRsZXIodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgdG9hc3QgPSBjcmVhdGVUb2FzdChtZXNzYWdlLCB0eXBlLCBvcHRpb25zKTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLlVQU0VSVF9UT0FTVCxcbiAgICAgIHRvYXN0OiB0b2FzdFxuICAgIH0pO1xuICAgIHJldHVybiB0b2FzdC5pZDtcbiAgfTtcbn07XG5cbnZhciB0b2FzdCA9IGZ1bmN0aW9uIHRvYXN0KG1lc3NhZ2UsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZUhhbmRsZXIoJ2JsYW5rJykobWVzc2FnZSwgb3B0cyk7XG59O1xuXG50b2FzdC5lcnJvciA9IC8qI19fUFVSRV9fKi9jcmVhdGVIYW5kbGVyKCdlcnJvcicpO1xudG9hc3Quc3VjY2VzcyA9IC8qI19fUFVSRV9fKi9jcmVhdGVIYW5kbGVyKCdzdWNjZXNzJyk7XG50b2FzdC5sb2FkaW5nID0gLyojX19QVVJFX18qL2NyZWF0ZUhhbmRsZXIoJ2xvYWRpbmcnKTtcbnRvYXN0LmN1c3RvbSA9IC8qI19fUFVSRV9fKi9jcmVhdGVIYW5kbGVyKCdjdXN0b20nKTtcblxudG9hc3QuZGlzbWlzcyA9IGZ1bmN0aW9uICh0b2FzdElkKSB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlLkRJU01JU1NfVE9BU1QsXG4gICAgdG9hc3RJZDogdG9hc3RJZFxuICB9KTtcbn07XG5cbnRvYXN0LnJlbW92ZSA9IGZ1bmN0aW9uICh0b2FzdElkKSB7XG4gIHJldHVybiBkaXNwYXRjaCh7XG4gICAgdHlwZTogQWN0aW9uVHlwZS5SRU1PVkVfVE9BU1QsXG4gICAgdG9hc3RJZDogdG9hc3RJZFxuICB9KTtcbn07XG5cbnRvYXN0LnByb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZSwgbXNncywgb3B0cykge1xuICB2YXIgaWQgPSB0b2FzdC5sb2FkaW5nKG1zZ3MubG9hZGluZywgX2V4dGVuZHMoe30sIG9wdHMsIG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMubG9hZGluZykpO1xuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHApIHtcbiAgICB0b2FzdC5zdWNjZXNzKHJlc29sdmVWYWx1ZShtc2dzLnN1Y2Nlc3MsIHApLCBfZXh0ZW5kcyh7XG4gICAgICBpZDogaWRcbiAgICB9LCBvcHRzLCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnN1Y2Nlc3MpKTtcbiAgICByZXR1cm4gcDtcbiAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZSkge1xuICAgIHRvYXN0LmVycm9yKHJlc29sdmVWYWx1ZShtc2dzLmVycm9yLCBlKSwgX2V4dGVuZHMoe1xuICAgICAgaWQ6IGlkXG4gICAgfSwgb3B0cywgb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5lcnJvcikpO1xuICB9KTtcbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG52YXIgdXNlVG9hc3RlciA9IGZ1bmN0aW9uIHVzZVRvYXN0ZXIodG9hc3RPcHRpb25zKSB7XG4gIHZhciBfdXNlU3RvcmUgPSB1c2VTdG9yZSh0b2FzdE9wdGlvbnMpLFxuICAgICAgdG9hc3RzID0gX3VzZVN0b3JlLnRvYXN0cyxcbiAgICAgIHBhdXNlZEF0ID0gX3VzZVN0b3JlLnBhdXNlZEF0O1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHBhdXNlZEF0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgdmFyIHRpbWVvdXRzID0gdG9hc3RzLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgaWYgKHQuZHVyYXRpb24gPT09IEluZmluaXR5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGR1cmF0aW9uTGVmdCA9ICh0LmR1cmF0aW9uIHx8IDApICsgdC5wYXVzZUR1cmF0aW9uIC0gKG5vdyAtIHQuY3JlYXRlZEF0KTtcblxuICAgICAgaWYgKGR1cmF0aW9uTGVmdCA8IDApIHtcbiAgICAgICAgaWYgKHQudmlzaWJsZSkge1xuICAgICAgICAgIHRvYXN0LmRpc21pc3ModC5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvYXN0LmRpc21pc3ModC5pZCk7XG4gICAgICB9LCBkdXJhdGlvbkxlZnQpO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aW1lb3V0cy5mb3JFYWNoKGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gICAgICAgIHJldHVybiB0aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFt0b2FzdHMsIHBhdXNlZEF0XSk7XG4gIHZhciBoYW5kbGVycyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydFBhdXNlOiBmdW5jdGlvbiBzdGFydFBhdXNlKCkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5TVEFSVF9QQVVTRSxcbiAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVuZFBhdXNlOiBmdW5jdGlvbiBlbmRQYXVzZSgpIHtcbiAgICAgICAgaWYgKHBhdXNlZEF0KSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5FTkRfUEFVU0UsXG4gICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGVIZWlnaHQ6IGZ1bmN0aW9uIHVwZGF0ZUhlaWdodCh0b2FzdElkLCBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlVQREFURV9UT0FTVCxcbiAgICAgICAgICB0b2FzdDoge1xuICAgICAgICAgICAgaWQ6IHRvYXN0SWQsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgY2FsY3VsYXRlT2Zmc2V0OiBmdW5jdGlvbiBjYWxjdWxhdGVPZmZzZXQodG9hc3QsIG9wdHMpIHtcbiAgICAgICAgdmFyIF9yZWxldmFudFRvYXN0cyRmaWx0ZTtcblxuICAgICAgICB2YXIgX3JlZiA9IG9wdHMgfHwge30sXG4gICAgICAgICAgICBfcmVmJHJldmVyc2VPcmRlciA9IF9yZWYucmV2ZXJzZU9yZGVyLFxuICAgICAgICAgICAgcmV2ZXJzZU9yZGVyID0gX3JlZiRyZXZlcnNlT3JkZXIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRyZXZlcnNlT3JkZXIsXG4gICAgICAgICAgICBfcmVmJGd1dHRlciA9IF9yZWYuZ3V0dGVyLFxuICAgICAgICAgICAgZ3V0dGVyID0gX3JlZiRndXR0ZXIgPT09IHZvaWQgMCA/IDggOiBfcmVmJGd1dHRlcixcbiAgICAgICAgICAgIGRlZmF1bHRQb3NpdGlvbiA9IF9yZWYuZGVmYXVsdFBvc2l0aW9uO1xuXG4gICAgICAgIHZhciByZWxldmFudFRvYXN0cyA9IHRvYXN0cy5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gKHQucG9zaXRpb24gfHwgZGVmYXVsdFBvc2l0aW9uKSA9PT0gKHRvYXN0LnBvc2l0aW9uIHx8IGRlZmF1bHRQb3NpdGlvbikgJiYgdC5oZWlnaHQ7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdG9hc3RJbmRleCA9IHJlbGV2YW50VG9hc3RzLmZpbmRJbmRleChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LmlkID09PSB0b2FzdC5pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0b2FzdHNCZWZvcmUgPSByZWxldmFudFRvYXN0cy5maWx0ZXIoZnVuY3Rpb24gKHRvYXN0LCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGkgPCB0b2FzdEluZGV4ICYmIHRvYXN0LnZpc2libGU7XG4gICAgICAgIH0pLmxlbmd0aDtcblxuICAgICAgICB2YXIgb2Zmc2V0ID0gKF9yZWxldmFudFRvYXN0cyRmaWx0ZSA9IHJlbGV2YW50VG9hc3RzLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LnZpc2libGU7XG4gICAgICAgIH0pKS5zbGljZS5hcHBseShfcmVsZXZhbnRUb2FzdHMkZmlsdGUsIHJldmVyc2VPcmRlciA/IFt0b2FzdHNCZWZvcmUgKyAxXSA6IFswLCB0b2FzdHNCZWZvcmVdKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgdCkge1xuICAgICAgICAgIHJldHVybiBhY2MgKyAodC5oZWlnaHQgfHwgMCkgKyBndXR0ZXI7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3RvYXN0cywgcGF1c2VkQXRdKTtcbiAgcmV0dXJuIHtcbiAgICB0b2FzdHM6IHRvYXN0cyxcbiAgICBoYW5kbGVyczogaGFuZGxlcnNcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDQoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbiAgd2lkdGg6IDIwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IFwiLCBcIjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cXG4gIGFuaW1hdGlvbjogXCIsIFwiIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpXFxuICAgIGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcXG5cXG4gICY6YWZ0ZXIsXFxuICAmOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBhbmltYXRpb246IFwiLCBcIiAwLjE1cyBlYXNlLW91dCBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxNTBtcztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJhY2tncm91bmQ6IFwiLCBcIjtcXG4gICAgYm90dG9tOiA5cHg7XFxuICAgIGxlZnQ6IDRweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIHdpZHRoOiAxMnB4O1xcbiAgfVxcblxcbiAgJjpiZWZvcmUge1xcbiAgICBhbmltYXRpb246IFwiLCBcIiAwLjE1cyBlYXNlLW91dCBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxODBtcztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgfVxcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0NCA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDQoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDMoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbmZyb20ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoOTBkZWcpO1xcblxcdG9wYWNpdHk6IDA7XFxufVxcbnRvIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDkwZGVnKTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdDMgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QzKCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QyKCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG5mcm9tIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG50byB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgb3BhY2l0eTogMTtcXG59XCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QyID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0MigpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG5mcm9tIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDQ1ZGVnKTtcXG5cXHRvcGFjaXR5OiAwO1xcbn1cXG50byB7XFxuIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDQ1ZGVnKTtcXG4gIG9wYWNpdHk6IDE7XFxufVwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0ID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxudmFyIGNpcmNsZUFuaW1hdGlvbiA9IC8qI19fUFVSRV9fKi9rZXlmcmFtZXMoIC8qI19fUFVSRV9fKi9fdGVtcGxhdGVPYmplY3QoKSk7XG52YXIgZmlyc3RMaW5lQW5pbWF0aW9uID0gLyojX19QVVJFX18qL2tleWZyYW1lcyggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdDIoKSk7XG52YXIgc2Vjb25kTGluZUFuaW1hdGlvbiA9IC8qI19fUFVSRV9fKi9rZXlmcmFtZXMoIC8qI19fUFVSRV9fKi9fdGVtcGxhdGVPYmplY3QzKCkpO1xudmFyIEVycm9ySWNvbiA9IC8qI19fUFVSRV9fKi9zdHlsZWQoJ2RpdicpKCAvKiNfX1BVUkVfXyovX3RlbXBsYXRlT2JqZWN0NCgpLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcC5wcmltYXJ5IHx8ICcjZmY0YjRiJztcbn0sIGNpcmNsZUFuaW1hdGlvbiwgZmlyc3RMaW5lQW5pbWF0aW9uLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcC5zZWNvbmRhcnkgfHwgJyNmZmYnO1xufSwgc2Vjb25kTGluZUFuaW1hdGlvbik7XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDIkMSgpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBib3JkZXItY29sb3I6IFwiLCBcIjtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogXCIsIFwiO1xcbiAgYW5pbWF0aW9uOiBcIiwgXCIgMXMgbGluZWFyIGluZmluaXRlO1xcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0MiQxID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0MigpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0JDEoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0JDEgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG52YXIgcm90YXRlID0gLyojX19QVVJFX18qL2tleWZyYW1lcyggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdCQxKCkpO1xudmFyIExvYWRlckljb24gPSAvKiNfX1BVUkVfXyovc3R5bGVkKCdkaXYnKSggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdDIkMSgpLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcC5zZWNvbmRhcnkgfHwgJyNlMGUwZTAnO1xufSwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAucHJpbWFyeSB8fCAnIzYxNjE2MSc7XG59LCByb3RhdGUpO1xuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QzJDEoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbiAgd2lkdGg6IDIwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IFwiLCBcIjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cXG4gIGFuaW1hdGlvbjogXCIsIFwiIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpXFxuICAgIGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcXG4gICY6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYW5pbWF0aW9uOiBcIiwgXCIgMC4ycyBlYXNlLW91dCBmb3J3YXJkcztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IFwiLCBcIjtcXG4gICAgYm90dG9tOiA2cHg7XFxuICAgIGxlZnQ6IDZweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgfVxcblwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0MyQxID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0MygpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0MiQyKCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG4wJSB7XFxuXFx0aGVpZ2h0OiAwO1xcblxcdHdpZHRoOiAwO1xcblxcdG9wYWNpdHk6IDA7XFxufVxcbjQwJSB7XFxuICBoZWlnaHQ6IDA7XFxuXFx0d2lkdGg6IDZweDtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0MiQyID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0MigpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0JDIoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbmZyb20ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNDVkZWcpO1xcblxcdG9wYWNpdHk6IDA7XFxufVxcbnRvIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDQ1ZGVnKTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdCQyID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxudmFyIGNpcmNsZUFuaW1hdGlvbiQxID0gLyojX19QVVJFX18qL2tleWZyYW1lcyggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdCQyKCkpO1xudmFyIGNoZWNrbWFya0FuaW1hdGlvbiA9IC8qI19fUFVSRV9fKi9rZXlmcmFtZXMoIC8qI19fUFVSRV9fKi9fdGVtcGxhdGVPYmplY3QyJDIoKSk7XG52YXIgQ2hlY2ttYXJrSWNvbiA9IC8qI19fUFVSRV9fKi9zdHlsZWQoJ2RpdicpKCAvKiNfX1BVUkVfXyovX3RlbXBsYXRlT2JqZWN0MyQxKCksIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwLnByaW1hcnkgfHwgJyM2MWQzNDUnO1xufSwgY2lyY2xlQW5pbWF0aW9uJDEsIGNoZWNrbWFya0FuaW1hdGlvbiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAuc2Vjb25kYXJ5IHx8ICcjZmZmJztcbn0pO1xuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3Q0JDEoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgbWluLXdpZHRoOiAyMHB4O1xcbiAgYW5pbWF0aW9uOiBcIiwgXCIgMC4zcyAwLjEycyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSlcXG4gICAgZm9yd2FyZHM7XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3Q0JDEgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3Q0KCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QzJDIoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbmZyb20ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG50byB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgb3BhY2l0eTogMTtcXG59XCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QzJDIgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QzKCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QyJDMoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcIlxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QyJDMgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QyKCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QkMygpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QkMyA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbnZhciBTdGF0dXNXcmFwcGVyID0gLyojX19QVVJFX18qL3N0eWxlZCgnZGl2JykoIC8qI19fUFVSRV9fKi9fdGVtcGxhdGVPYmplY3QkMygpKTtcbnZhciBJbmRpY2F0b3JXcmFwcGVyID0gLyojX19QVVJFX18qL3N0eWxlZCgnZGl2JykoIC8qI19fUFVSRV9fKi9fdGVtcGxhdGVPYmplY3QyJDMoKSk7XG52YXIgZW50ZXIgPSAvKiNfX1BVUkVfXyova2V5ZnJhbWVzKCAvKiNfX1BVUkVfXyovX3RlbXBsYXRlT2JqZWN0MyQyKCkpO1xudmFyIEFuaW1hdGVkSWNvbldyYXBwZXIgPSAvKiNfX1BVUkVfXyovc3R5bGVkKCdkaXYnKSggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdDQkMSgpLCBlbnRlcik7XG52YXIgVG9hc3RJY29uID0gZnVuY3Rpb24gVG9hc3RJY29uKF9yZWYpIHtcbiAgdmFyIHRvYXN0ID0gX3JlZi50b2FzdDtcbiAgdmFyIGljb24gPSB0b2FzdC5pY29uLFxuICAgICAgdHlwZSA9IHRvYXN0LnR5cGUsXG4gICAgICBpY29uVGhlbWUgPSB0b2FzdC5pY29uVGhlbWU7XG5cbiAgaWYgKGljb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEFuaW1hdGVkSWNvbldyYXBwZXIsIG51bGwsIGljb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaWNvbjtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ2JsYW5rJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoSW5kaWNhdG9yV3JhcHBlciwgbnVsbCwgY3JlYXRlRWxlbWVudChMb2FkZXJJY29uLCBPYmplY3QuYXNzaWduKHt9LCBpY29uVGhlbWUpKSwgdHlwZSAhPT0gJ2xvYWRpbmcnICYmIGNyZWF0ZUVsZW1lbnQoU3RhdHVzV3JhcHBlciwgbnVsbCwgdHlwZSA9PT0gJ2Vycm9yJyA/IGNyZWF0ZUVsZW1lbnQoRXJyb3JJY29uLCBPYmplY3QuYXNzaWduKHt9LCBpY29uVGhlbWUpKSA6IGNyZWF0ZUVsZW1lbnQoQ2hlY2ttYXJrSWNvbiwgT2JqZWN0LmFzc2lnbih7fSwgaWNvblRoZW1lKSkpKTtcbn07XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDIkNCgpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDRweCAxMHB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmbGV4OiAxIDEgYXV0bztcXG5cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdDIkNCA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdDIoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCQ0KCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMzYzNjM2O1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBwYWRkaW5nOiA4cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG5cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdCQ0ID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG52YXIgZW50ZXJBbmltYXRpb24gPSBmdW5jdGlvbiBlbnRlckFuaW1hdGlvbihmYWN0b3IpIHtcbiAgcmV0dXJuIFwiXFxuMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCxcIiArIGZhY3RvciAqIC0yMDAgKyBcIiUsMCkgc2NhbGUoLjYpOyBvcGFjaXR5Oi41O31cXG4xMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKTsgb3BhY2l0eToxO31cXG5cIjtcbn07XG5cbnZhciBleGl0QW5pbWF0aW9uID0gZnVuY3Rpb24gZXhpdEFuaW1hdGlvbihmYWN0b3IpIHtcbiAgcmV0dXJuIFwiXFxuMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLC0xcHgpIHNjYWxlKDEpOyBvcGFjaXR5OjE7fVxcbjEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCxcIiArIGZhY3RvciAqIC0xNTAgKyBcIiUsLTFweCkgc2NhbGUoLjYpOyBvcGFjaXR5OjA7fVxcblwiO1xufTtcblxudmFyIGZhZGVJbkFuaW1hdGlvbiA9IFwiMCV7b3BhY2l0eTowO30gMTAwJXtvcGFjaXR5OjE7fVwiO1xudmFyIGZhZGVPdXRBbmltYXRpb24gPSBcIjAle29wYWNpdHk6MTt9IDEwMCV7b3BhY2l0eTowO31cIjtcbnZhciBUb2FzdEJhckJhc2UgPSAvKiNfX1BVUkVfXyovc3R5bGVkKCdkaXYnLCBmb3J3YXJkUmVmKSggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdCQ0KCkpO1xudmFyIE1lc3NhZ2UgPSAvKiNfX1BVUkVfXyovc3R5bGVkKCdkaXYnKSggLyojX19QVVJFX18qL190ZW1wbGF0ZU9iamVjdDIkNCgpKTtcblxudmFyIGdldEFuaW1hdGlvblN0eWxlID0gZnVuY3Rpb24gZ2V0QW5pbWF0aW9uU3R5bGUocG9zaXRpb24sIHZpc2libGUpIHtcbiAgdmFyIHRvcCA9IHBvc2l0aW9uLmluY2x1ZGVzKCd0b3AnKTtcbiAgdmFyIGZhY3RvciA9IHRvcCA/IDEgOiAtMTtcblxuICB2YXIgX3JlZiA9IHByZWZlcnNSZWR1Y2VkTW90aW9uKCkgPyBbZmFkZUluQW5pbWF0aW9uLCBmYWRlT3V0QW5pbWF0aW9uXSA6IFtlbnRlckFuaW1hdGlvbihmYWN0b3IpLCBleGl0QW5pbWF0aW9uKGZhY3RvcildLFxuICAgICAgZW50ZXIgPSBfcmVmWzBdLFxuICAgICAgZXhpdCA9IF9yZWZbMV07XG5cbiAgcmV0dXJuIHtcbiAgICBhbmltYXRpb246IHZpc2libGUgPyBrZXlmcmFtZXMoZW50ZXIpICsgXCIgMC4zNXMgY3ViaWMtYmV6aWVyKC4yMSwxLjAyLC43MywxKSBmb3J3YXJkc1wiIDoga2V5ZnJhbWVzKGV4aXQpICsgXCIgMC40cyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoLjA2LC43MSwuNTUsMSlcIlxuICB9O1xufTtcblxudmFyIFRvYXN0QmFyID0gLyojX19QVVJFX18qL21lbW8oZnVuY3Rpb24gKF9yZWYyKSB7XG4gIHZhciB0b2FzdCA9IF9yZWYyLnRvYXN0LFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIHN0eWxlID0gX3JlZjIuc3R5bGUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuO1xuICB2YXIgYW5pbWF0aW9uU3R5bGUgPSB0b2FzdCAhPSBudWxsICYmIHRvYXN0LmhlaWdodCA/IGdldEFuaW1hdGlvblN0eWxlKHRvYXN0LnBvc2l0aW9uIHx8IHBvc2l0aW9uIHx8ICd0b3AtY2VudGVyJywgdG9hc3QudmlzaWJsZSkgOiB7XG4gICAgb3BhY2l0eTogMFxuICB9O1xuICB2YXIgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoVG9hc3RJY29uLCB7XG4gICAgdG9hc3Q6IHRvYXN0XG4gIH0pO1xuICB2YXIgbWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoTWVzc2FnZSwgT2JqZWN0LmFzc2lnbih7fSwgdG9hc3QuYXJpYVByb3BzKSwgcmVzb2x2ZVZhbHVlKHRvYXN0Lm1lc3NhZ2UsIHRvYXN0KSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFRvYXN0QmFyQmFzZSwge1xuICAgIGNsYXNzTmFtZTogdG9hc3QuY2xhc3NOYW1lLFxuICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgYW5pbWF0aW9uU3R5bGUsIHN0eWxlLCB0b2FzdC5zdHlsZSlcbiAgfSwgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oe1xuICAgIGljb246IGljb24sXG4gICAgbWVzc2FnZTogbWVzc2FnZVxuICB9KSA6IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGljb24sIG1lc3NhZ2UpKTtcbn0pO1xuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QkNSgpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wiXFxuICB6LWluZGV4OiA5OTk5O1xcbiAgPiAqIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICB9XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QkNSA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbnNldHVwKGNyZWF0ZUVsZW1lbnQpO1xuXG52YXIgZ2V0UG9zaXRpb25TdHlsZSA9IGZ1bmN0aW9uIGdldFBvc2l0aW9uU3R5bGUocG9zaXRpb24sIG9mZnNldCkge1xuICB2YXIgdG9wID0gcG9zaXRpb24uaW5jbHVkZXMoJ3RvcCcpO1xuICB2YXIgdmVydGljYWxTdHlsZSA9IHRvcCA/IHtcbiAgICB0b3A6IDBcbiAgfSA6IHtcbiAgICBib3R0b206IDBcbiAgfTtcbiAgdmFyIGhvcml6b250YWxTdHlsZSA9IHBvc2l0aW9uLmluY2x1ZGVzKCdjZW50ZXInKSA/IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgfSA6IHBvc2l0aW9uLmluY2x1ZGVzKCdyaWdodCcpID8ge1xuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXG4gIH0gOiB7fTtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0cmFuc2l0aW9uOiBwcmVmZXJzUmVkdWNlZE1vdGlvbigpID8gdW5kZWZpbmVkIDogXCJhbGwgMjMwbXMgY3ViaWMtYmV6aWVyKC4yMSwxLjAyLC43MywxKVwiLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKFwiICsgb2Zmc2V0ICogKHRvcCA/IDEgOiAtMSkgKyBcInB4KVwiXG4gIH0sIHZlcnRpY2FsU3R5bGUsIGhvcml6b250YWxTdHlsZSk7XG59O1xuXG52YXIgYWN0aXZlQ2xhc3MgPSAvKiNfX1BVUkVfXyovY3NzKCAvKiNfX1BVUkVfXyovX3RlbXBsYXRlT2JqZWN0JDUoKSk7XG52YXIgREVGQVVMVF9PRkZTRVQgPSAxNjtcbnZhciBUb2FzdGVyID0gZnVuY3Rpb24gVG9hc3RlcihfcmVmKSB7XG4gIHZhciByZXZlcnNlT3JkZXIgPSBfcmVmLnJldmVyc2VPcmRlcixcbiAgICAgIF9yZWYkcG9zaXRpb24gPSBfcmVmLnBvc2l0aW9uLFxuICAgICAgcG9zaXRpb24gPSBfcmVmJHBvc2l0aW9uID09PSB2b2lkIDAgPyAndG9wLWNlbnRlcicgOiBfcmVmJHBvc2l0aW9uLFxuICAgICAgdG9hc3RPcHRpb25zID0gX3JlZi50b2FzdE9wdGlvbnMsXG4gICAgICBndXR0ZXIgPSBfcmVmLmd1dHRlcixcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNvbnRhaW5lclN0eWxlID0gX3JlZi5jb250YWluZXJTdHlsZSxcbiAgICAgIGNvbnRhaW5lckNsYXNzTmFtZSA9IF9yZWYuY29udGFpbmVyQ2xhc3NOYW1lO1xuXG4gIHZhciBfdXNlVG9hc3RlciA9IHVzZVRvYXN0ZXIodG9hc3RPcHRpb25zKSxcbiAgICAgIHRvYXN0cyA9IF91c2VUb2FzdGVyLnRvYXN0cyxcbiAgICAgIGhhbmRsZXJzID0gX3VzZVRvYXN0ZXIuaGFuZGxlcnM7XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgIHRvcDogREVGQVVMVF9PRkZTRVQsXG4gICAgICBsZWZ0OiBERUZBVUxUX09GRlNFVCxcbiAgICAgIHJpZ2h0OiBERUZBVUxUX09GRlNFVCxcbiAgICAgIGJvdHRvbTogREVGQVVMVF9PRkZTRVQsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LCBjb250YWluZXJTdHlsZSksXG4gICAgY2xhc3NOYW1lOiBjb250YWluZXJDbGFzc05hbWUsXG4gICAgb25Nb3VzZUVudGVyOiBoYW5kbGVycy5zdGFydFBhdXNlLFxuICAgIG9uTW91c2VMZWF2ZTogaGFuZGxlcnMuZW5kUGF1c2VcbiAgfSwgdG9hc3RzLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHZhciB0b2FzdFBvc2l0aW9uID0gdC5wb3NpdGlvbiB8fCBwb3NpdGlvbjtcbiAgICB2YXIgb2Zmc2V0ID0gaGFuZGxlcnMuY2FsY3VsYXRlT2Zmc2V0KHQsIHtcbiAgICAgIHJldmVyc2VPcmRlcjogcmV2ZXJzZU9yZGVyLFxuICAgICAgZ3V0dGVyOiBndXR0ZXIsXG4gICAgICBkZWZhdWx0UG9zaXRpb246IHBvc2l0aW9uXG4gICAgfSk7XG4gICAgdmFyIHBvc2l0aW9uU3R5bGUgPSBnZXRQb3NpdGlvblN0eWxlKHRvYXN0UG9zaXRpb24sIG9mZnNldCk7XG4gICAgdmFyIHJlZiA9IHQuaGVpZ2h0ID8gdW5kZWZpbmVkIDogY3JlYXRlUmVjdFJlZihmdW5jdGlvbiAocmVjdCkge1xuICAgICAgaGFuZGxlcnMudXBkYXRlSGVpZ2h0KHQuaWQsIHJlY3QuaGVpZ2h0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICByZWY6IHJlZixcbiAgICAgIGNsYXNzTmFtZTogdC52aXNpYmxlID8gYWN0aXZlQ2xhc3MgOiAnJyxcbiAgICAgIGtleTogdC5pZCxcbiAgICAgIHN0eWxlOiBwb3NpdGlvblN0eWxlXG4gICAgfSwgdC50eXBlID09PSAnY3VzdG9tJyA/IHJlc29sdmVWYWx1ZSh0Lm1lc3NhZ2UsIHQpIDogY2hpbGRyZW4gPyBjaGlsZHJlbih0KSA6IGNyZWF0ZUVsZW1lbnQoVG9hc3RCYXIsIHtcbiAgICAgIHRvYXN0OiB0LFxuICAgICAgcG9zaXRpb246IHRvYXN0UG9zaXRpb25cbiAgICB9KSk7XG4gIH0pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvYXN0O1xuZXhwb3J0IHsgQ2hlY2ttYXJrSWNvbiwgRXJyb3JJY29uLCBMb2FkZXJJY29uLCBUb2FzdEJhciwgVG9hc3RJY29uLCBUb2FzdGVyLCByZXNvbHZlVmFsdWUsIHRvYXN0LCB1c2VUb2FzdGVyLCB1c2VTdG9yZSBhcyB1c2VUb2FzdGVyU3RvcmUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LWhvdC10b2FzdC5lc20uanMubWFwXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==