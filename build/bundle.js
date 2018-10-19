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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 203);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newInterval;
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["a"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__merge__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__call__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nodes__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__size__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__empty__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attr__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__property__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classed__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__html__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__raise__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lower__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__append__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__insert__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__remove__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__clone__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__datum__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__on__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dispatch__ = __webpack_require__(162);































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */],
  enter: __WEBPACK_IMPORTED_MODULE_4__enter__["a" /* default */],
  exit: __WEBPACK_IMPORTED_MODULE_5__exit__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_6__merge__["a" /* default */],
  order: __WEBPACK_IMPORTED_MODULE_7__order__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_8__sort__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_9__call__["a" /* default */],
  nodes: __WEBPACK_IMPORTED_MODULE_10__nodes__["a" /* default */],
  node: __WEBPACK_IMPORTED_MODULE_11__node__["a" /* default */],
  size: __WEBPACK_IMPORTED_MODULE_12__size__["a" /* default */],
  empty: __WEBPACK_IMPORTED_MODULE_13__empty__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_14__each__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_15__attr__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_16__style__["a" /* default */],
  property: __WEBPACK_IMPORTED_MODULE_17__property__["a" /* default */],
  classed: __WEBPACK_IMPORTED_MODULE_18__classed__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_19__text__["a" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_20__html__["a" /* default */],
  raise: __WEBPACK_IMPORTED_MODULE_21__raise__["a" /* default */],
  lower: __WEBPACK_IMPORTED_MODULE_22__lower__["a" /* default */],
  append: __WEBPACK_IMPORTED_MODULE_23__append__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_24__insert__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_25__remove__["a" /* default */],
  clone: __WEBPACK_IMPORTED_MODULE_26__clone__["a" /* default */],
  datum: __WEBPACK_IMPORTED_MODULE_27__datum__["a" /* default */],
  on: __WEBPACK_IMPORTED_MODULE_28__on__["b" /* default */],
  dispatch: __WEBPACK_IMPORTED_MODULE_29__dispatch__["a" /* default */]
};

/* unused harmony default export */ var _unused_webpack_default_export = (selection);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bisect__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__bisect__["a"]; });
/* unused harmony reexport bisectRight */
/* unused harmony reexport bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bisector__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__bisector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cross__ = __webpack_require__(80);
/* unused harmony reexport cross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__descending__ = __webpack_require__(81);
/* unused harmony reexport descending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deviation__ = __webpack_require__(38);
/* unused harmony reexport deviation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extent__ = __webpack_require__(39);
/* unused harmony reexport extent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histogram__ = __webpack_require__(82);
/* unused harmony reexport histogram */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__threshold_freedmanDiaconis__ = __webpack_require__(92);
/* unused harmony reexport thresholdFreedmanDiaconis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__threshold_scott__ = __webpack_require__(93);
/* unused harmony reexport thresholdScott */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__threshold_sturges__ = __webpack_require__(43);
/* unused harmony reexport thresholdSturges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__max__ = __webpack_require__(84);
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mean__ = __webpack_require__(85);
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__median__ = __webpack_require__(86);
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__merge__ = __webpack_require__(87);
/* unused harmony reexport merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__min__ = __webpack_require__(40);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pairs__ = __webpack_require__(41);
/* unused harmony reexport pairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__permute__ = __webpack_require__(88);
/* unused harmony reexport permute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__quantile__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_18__quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__range__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_19__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scan__ = __webpack_require__(89);
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shuffle__ = __webpack_require__(90);
/* unused harmony reexport shuffle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sum__ = __webpack_require__(91);
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ticks__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_23__ticks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_23__ticks__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_23__ticks__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__transpose__ = __webpack_require__(45);
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__variance__ = __webpack_require__(46);
/* unused harmony reexport variance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__zip__ = __webpack_require__(94);
/* unused harmony reexport zip */





























/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* unused harmony reexport lch */
/* unused harmony reexport gray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = linearish;
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat__ = __webpack_require__(148);





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* ticks */])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tickFormat__["a" /* default */])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* tickIncrement */])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* tickIncrement */])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* tickIncrement */])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolateNumber */]);

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* copy */])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = hue;
/* harmony export (immutable) */ __webpack_exports__["c"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(54);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(21);


/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = deinterpolateLinear;
/* harmony export (immutable) */ __webpack_exports__["c"] = copy;
/* harmony export (immutable) */ __webpack_exports__["a"] = continuous;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(60);






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* default */])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisect */])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolate */],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_2__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateRound */], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(27);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces__["a" /* xhtml */] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces__["a" /* xhtml */]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["a"] = (map);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["h"] = color;
/* harmony export (immutable) */ __webpack_exports__["b"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["a"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(18);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

/* harmony default export */ __webpack_exports__["a"] = (function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? ""
        : reFormat.test(text += "") ? "\"" + text.replace(/"/g, "\"\"") + "\""
        : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseText(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.text();
}

/* harmony default export */ __webpack_exports__["a"] = (function(input, init) {
  return fetch(input, init).then(responseText);
});


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(52);
/* unused harmony reexport interpolateArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(23);
/* unused harmony reexport interpolateBasis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(53);
/* unused harmony reexport interpolateBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(55);
/* unused harmony reexport interpolateDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(56);
/* unused harmony reexport interpolateObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(58);
/* unused harmony reexport interpolateString */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(135);
/* unused harmony reexport interpolateTransformCss */
/* unused harmony reexport interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(137);
/* unused harmony reexport interpolateZoom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(57);
/* unused harmony reexport interpolateRgb */
/* unused harmony reexport interpolateRgbBasis */
/* unused harmony reexport interpolateRgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(129);
/* unused harmony reexport interpolateHsl */
/* unused harmony reexport interpolateHslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(130);
/* unused harmony reexport interpolateLab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(128);
/* unused harmony reexport interpolateHcl */
/* unused harmony reexport interpolateHclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(127);
/* unused harmony reexport interpolateCubehelix */
/* unused harmony reexport interpolateCubehelixLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_piecewise__ = __webpack_require__(131);
/* unused harmony reexport piecewise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_quantize__ = __webpack_require__(132);
/* unused harmony reexport quantize */




















/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(54);









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["b" /* default */].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["b" /* default */][prefix], local: name} : name;
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["b"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return event; });
/* unused harmony export customEvent */
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["b"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(28);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["a" /* event */], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return timeFormat; });
/* unused harmony export timeParse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcParse; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(72);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_interval__ = __webpack_require__(0);
/* unused harmony reexport timeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_millisecond__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport timeMilliseconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport utcMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_second__ = __webpack_require__(190);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport timeSeconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport utcSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_minute__ = __webpack_require__(188);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_3__src_minute__["a"]; });
/* unused harmony reexport timeMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_hour__ = __webpack_require__(186);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_4__src_hour__["a"]; });
/* unused harmony reexport timeHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_day__ = __webpack_require__(185);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__src_day__["a"]; });
/* unused harmony reexport timeDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_week__ = __webpack_require__(197);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["a"]; });
/* unused harmony reexport timeWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["a"]; });
/* unused harmony reexport timeSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* unused harmony reexport timeMondays */
/* unused harmony reexport timeTuesday */
/* unused harmony reexport timeTuesdays */
/* unused harmony reexport timeWednesday */
/* unused harmony reexport timeWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["c"]; });
/* unused harmony reexport timeThursdays */
/* unused harmony reexport timeFriday */
/* unused harmony reexport timeFridays */
/* unused harmony reexport timeSaturday */
/* unused harmony reexport timeSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_month__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__src_month__["a"]; });
/* unused harmony reexport timeMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_year__ = __webpack_require__(198);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_8__src_year__["a"]; });
/* unused harmony reexport timeYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__ = __webpack_require__(193);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__["a"]; });
/* unused harmony reexport utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcHour__ = __webpack_require__(192);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcHour__["a"]; });
/* unused harmony reexport utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_utcDay__ = __webpack_require__(191);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_11__src_utcDay__["a"]; });
/* unused harmony reexport utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__ = __webpack_require__(195);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["a"]; });
/* unused harmony reexport utcWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["a"]; });
/* unused harmony reexport utcSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* unused harmony reexport utcMondays */
/* unused harmony reexport utcTuesday */
/* unused harmony reexport utcTuesdays */
/* unused harmony reexport utcWednesday */
/* unused harmony reexport utcWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["c"]; });
/* unused harmony reexport utcThursdays */
/* unused harmony reexport utcFriday */
/* unused harmony reexport utcFridays */
/* unused harmony reexport utcSaturday */
/* unused harmony reexport utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__ = __webpack_require__(194);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__["a"]; });
/* unused harmony reexport utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_utcYear__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_14__src_utcYear__["a"]; });
/* unused harmony reexport utcYears */































/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDimensions;
const isLandscape = () => window.innerHeight > window.innerWidth ? false : true;

function getDimensions(parent) {
  const WIDTH = document.getElementsByClassName(parent.replace(/\./, ''))[0].offsetWidth;

  let HEIGHT;

  if (isLandscape()) {
    HEIGHT = WIDTH * 0.4;
  } else {
    HEIGHT = WIDTH * 1.25;
  }

  const MARGIN = 40;
  const MARGINS = { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN };

  return {
    WIDTH,
    HEIGHT,
    MARGINS
  };
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bisectRight */
/* unused harmony export bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(37);



var ascendingBisect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(46);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pair;
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tickIncrement;
/* harmony export (immutable) */ __webpack_exports__["c"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(40);


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(117);
/* unused harmony reexport formatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(51);
/* unused harmony reexport formatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__["a"]; });








/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return prefixExponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(21);


var prefixExponent;

/* harmony default export */ __webpack_exports__["b"] = (function(x, p) {
  var d = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatSpecifier;
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumerals__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatSpecifier__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatTrim__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatTypes__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__identity__ = __webpack_require__(123);









var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["a"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formatGroup__["a" /* default */])(locale.grouping, locale.thousands) : __WEBPACK_IMPORTED_MODULE_7__identity__["a" /* default */],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__formatNumerals__["a" /* default */])(locale.numerals) : __WEBPACK_IMPORTED_MODULE_7__identity__["a" /* default */],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!__WEBPACK_IMPORTED_MODULE_5__formatTypes__["a" /* default */][type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_5__formatTypes__["a" /* default */][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__formatTrim__["a" /* default */])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto__["a" /* prefixExponent */] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(24);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(23);


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__basis__["b" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(24);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rgbBasis */
/* unused harmony export rgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(9);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__color__["c" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* rgb */])(start)).r, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["a" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(11);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return +x;
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export implicit */
/* harmony export (immutable) */ __webpack_exports__["a"] = ordinal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(4);



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continuous__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nice__ = __webpack_require__(59);








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__continuous__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_5__continuous__["b" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolateNumber */]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["e" /* bisector */])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["d" /* tickStep */])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["d" /* tickStep */])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(__WEBPACK_IMPORTED_MODULE_4__array__["a" /* map */].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__nice__["a" /* default */])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__continuous__["c" /* copy */])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return calendar(__WEBPACK_IMPORTED_MODULE_2_d3_time__["l" /* timeYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["q" /* timeMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["r" /* timeWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["k" /* timeDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["s" /* timeHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["t" /* timeMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["u" /* timeSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["v" /* timeMillisecond */], __WEBPACK_IMPORTED_MODULE_3_d3_time_format__["b" /* timeFormat */]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_create__ = __webpack_require__(151);
/* unused harmony reexport create */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_creator__ = __webpack_require__(13);
/* unused harmony reexport creator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_local__ = __webpack_require__(152);
/* unused harmony reexport local */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_matcher__ = __webpack_require__(64);
/* unused harmony reexport matcher */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_mouse__ = __webpack_require__(153);
/* unused harmony reexport mouse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_namespace__ = __webpack_require__(26);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_namespaces__ = __webpack_require__(27);
/* unused harmony reexport namespaces */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_point__ = __webpack_require__(14);
/* unused harmony reexport clientPoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_select__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__src_select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_selectAll__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_9__src_selectAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_selection_index__ = __webpack_require__(1);
/* unused harmony reexport selection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_selector__ = __webpack_require__(29);
/* unused harmony reexport selector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_selectorAll__ = __webpack_require__(69);
/* unused harmony reexport selectorAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_selection_style__ = __webpack_require__(68);
/* unused harmony reexport style */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_touch__ = __webpack_require__(182);
/* unused harmony reexport touch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_touches__ = __webpack_require__(183);
/* unused harmony reexport touches */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_window__ = __webpack_require__(31);
/* unused harmony reexport window */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_selection_on__ = __webpack_require__(28);
/* unused harmony reexport event */
/* unused harmony reexport customEvent */




















/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (matcher);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* root */]);
});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(update) {
  return new Array(update.length);
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styleValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(31);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(32);
/* unused harmony reexport timeFormatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["c"]; });
/* unused harmony reexport timeParse */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* unused harmony reexport utcParse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(72);
/* unused harmony reexport timeFormatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__ = __webpack_require__(71);
/* unused harmony reexport isoFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_isoParse__ = __webpack_require__(184);
/* unused harmony reexport isoParse */






/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(32);


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["a" /* utcFormat */])(isoSpecifier);

/* unused harmony default export */ var _unused_webpack_default_export = (formatIso);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(33);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* utcMonday */].ceil(week) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* utcMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["d" /* utcDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["j" /* timeMonday */].ceil(week) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["j" /* timeMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeDay */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["m" /* timeSunday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeYear */])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["n" /* timeThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["n" /* timeThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["n" /* timeThursday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeYear */])(d), d) + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeYear */])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["j" /* timeMonday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* timeYear */])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["d" /* utcDay */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["o" /* utcSunday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* utcYear */])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcThursday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* utcYear */])(d), d) + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* utcYear */])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* utcMonday */].count(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* utcYear */])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__barchart_index__ = __webpack_require__(74);


const opts = {
  element: '.barchart',
  className: 'barchart'
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__barchart_index__["a" /* default */])(opts);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = barchart;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_css__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_css__);



function barchart(opts) {
  const chart = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__render__["a" /* default */])(opts.element, opts.className);
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_debounce__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_fetch__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_scale__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_axis__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_getDimensions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resize__ = __webpack_require__(76);








function render(element, className) {
  const { WIDTH, HEIGHT, MARGINS } = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utilities_getDimensions__["a" /* default */])(element);

  const opts = {
    canvas: 'canvas',
    xAxisClass: 'x-axis',
    yAxisClass: 'y-axis',
    rectangle: 'rectangle',
    rectangles: 'rectangles',
    xAxisLabel: 'x-axis-label',
    bargroup: 'bargroup',
    element,
    className,
    y: '',
    x: '',
    yAxis: '',
    xAxis: ''
  };

  // request
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_d3_fetch__["a" /* json */])('https://radiocontrolled.github.io/d3-aria-bar-chart/data/londonMedianHousepriceToMedianGrossIncome.json').then(rawData => {
    return rawData.figures.map(el => {
      const date = Object.keys(el)[0];
      return {
        ratio: el[`${date}`],
        date
      };
    });
  }).then(d => render(d));

  // render
  function render(data) {
    const maxRatio = data[0].ratio + 1;

    const y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["a" /* scaleBand */])().domain(data.map(obj => obj.date)).range([0, HEIGHT - MARGINS.bottom]).padding(0.1);

    const x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["b" /* scaleLinear */])().domain([0, maxRatio]).range([0, WIDTH - MARGINS.left - MARGINS.right]);

    const yAxis = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["a" /* axisLeft */])().ticks(data.length - 1).scale(y);

    const xAxis = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_axis__["b" /* axisTop */])().scale(x);

    const canvas = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["a" /* select */])(element).append('svg').attr('class', className).attr('width', WIDTH).attr('height', HEIGHT).append('g').attr('class', `${opts.canvas}`).attr('role', 'table').attr('width', WIDTH - MARGINS.right - MARGINS.left).attr('height', HEIGHT - MARGINS.top - MARGINS.bottom).attr('transform', `translate(0, ${MARGINS.top})`);

    canvas.append('g').attr('role', 'rowgroup').attr('class', 'tableheader').append('g').attr('role', 'row').attr('class', 'header').append('g').attr('role', 'columnheader').append('text').text('year').attr('class', 'a11yHidden');

    canvas.select('.header').append('g').attr('role', 'columnheader').append('text').text('ratio').attr('class', 'a11yHidden');

    canvas.append('g').attr('role', 'rowgroup').attr('class', 'tablebody');

    canvas.select('.tablebody').append('g').attr('class', `${opts.yAxisClass}`).attr('role', 'row').attr('transform', `translate(${MARGINS.right}, 0)`).attr('aria-hidden', true).call(yAxis);

    canvas.select('.tablebody').append('g').attr('class', `${opts.xAxisClass}`).attr('transform', `translate(${MARGINS.left}, 0)`).attr('aria-hidden', true).call(xAxis);

    canvas.select('.tablebody').append('g').attr('class', `${opts.rectangles}`).selectAll('rect').data(data).enter().append('g').attr('class', `${opts.bargroup}`).attr('role', 'row').append('rect').attr('class', `${opts.rectangle}`).attr('role', 'presentation').attr('y', d => y(d.date)).attr('x', MARGINS.left).attr('height', y.bandwidth()).attr('width', d => x(d.ratio));

    canvas.select('.tablebody').selectAll(`g.${opts.bargroup}`).append('text').text(d => d.date).attr('role', 'cell').attr('class', 'a11yHidden');

    canvas.select('.tablebody').selectAll(`g.${opts.bargroup}`).append('text').text(d => d.ratio).attr('y', d => y(d.date) - y.bandwidth() / 2).attr('dy', '5%').attr('x', d => x(d.ratio)).attr('class', `${opts.xAxisLabel}`).attr('role', 'cell');

    opts.y = y;
    opts.x = x;
    opts.xAxis = xAxis;
    opts.yAxis = yAxis;
  }

  // resize
  window.onresize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_debounce__["debounce"])(() => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__resize__["a" /* default */])(opts), 250);
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_getDimensions__ = __webpack_require__(34);



function resize(opts) {
  const { WIDTH, HEIGHT, MARGINS } = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_getDimensions__["a" /* default */])(opts.element);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["a" /* select */])(opts.element).select('svg').attr('width', WIDTH).attr('height', HEIGHT);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["a" /* select */])(opts.canvas).attr('width', WIDTH - MARGINS.right - MARGINS.left).attr('height', HEIGHT - MARGINS.top - MARGINS.bottom).attr('transform', `translate(0, ${MARGINS.top})`);

  opts.y.rangeRound([0, HEIGHT - MARGINS.bottom]);
  opts.x.range([0, WIDTH - MARGINS.left - MARGINS.right]);
  opts.yAxis.scale(opts.y);
  opts.xAxis.scale(opts.x);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["a" /* select */])(`.${opts.yAxisClass}`).attr('transform', `translate(${MARGINS.right}, 0)`).call(opts.yAxis);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["a" /* select */])(`.${opts.xAxisClass}`).attr('transform', `translate(${MARGINS.left}, 0)`).call(opts.xAxis);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["b" /* selectAll */])(`.${opts.rectangle}`).attr('y', d => opts.y(d.date)).attr('height', opts.y.bandwidth()).attr('width', d => opts.x(d.ratio));

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["b" /* selectAll */])(`.${opts.xAxisLabel}`).attr('y', d => opts.y(d.date) - opts.y.bandwidth() / 2).attr('dy', '5%').attr('x', d => opts.x(d.ratio));
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n  padding: 0 16px 0 16px;\n  margin: 0;\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nh1 {\n  color: #16A085;\n}\n\n.canvas {\n  fill: black;\n}\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: #eee;\n  shape-rendering: crispEdges;\n}\n\ntext {\n  font-size: 12px;\n  fill: #34495E;\n}\n\n.y-axis .tick line,\n.y-axis .domain {\n  display: none;\n}\n\n.rectangle {\n  fill: #34495E;\n}\n\n.x-axis-label {\n  fill: white;\n}\n\n.a11yHidden {\n  fill: transparent;\n}\n ", ""]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(41);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["a" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(43);









/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ticks__["c" /* tickStep */])(x0, x1, tz);
      tz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisect__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(8);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(15);




/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(5);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(15);





/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(38);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(45);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = axisTop;
/* unused harmony export axisRight */
/* unused harmony export axisBottom */
/* harmony export (immutable) */ __webpack_exports__["b"] = axisLeft;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(97);



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M0.5," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + ",0.5H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__axis__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__axis__["a"]; });
/* unused harmony reexport axisRight */
/* unused harmony reexport axisBottom */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__axis__["b"]; });



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_nest__ = __webpack_require__(102);
/* unused harmony reexport nest */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_set__ = __webpack_require__(103);
/* unused harmony reexport set */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_map__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_keys__ = __webpack_require__(101);
/* unused harmony reexport keys */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_values__ = __webpack_require__(104);
/* unused harmony reexport values */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_entries__ = __webpack_require__(100);
/* unused harmony reexport entries */








/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(16);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(16);


function Set() {}

var proto = __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[__WEBPACK_IMPORTED_MODULE_0__map__["b" /* prefix */] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* unused harmony default export */ var _unused_webpack_default_export = (set);


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(47);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */])) o = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["e" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["e" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gray */
/* harmony export (immutable) */ __webpack_exports__["b"] = lab;
/* unused harmony export Lab */
/* unused harmony export lch */
/* harmony export (immutable) */ __webpack_exports__["a"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(47);




// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */])) o = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* rgbConvert */])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dsv__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dsv__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_csv__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_csv__["a"]; });
/* unused harmony reexport csvParseRows */
/* unused harmony reexport csvFormat */
/* unused harmony reexport csvFormatRows */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_tsv__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_tsv__["a"]; });
/* unused harmony reexport tsvParseRows */
/* unused harmony reexport tsvFormat */
/* unused harmony reexport tsvFormatRows */





/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return csvParse; });
/* unused harmony export csvParseRows */
/* unused harmony export csvFormat */
/* unused harmony export csvFormatRows */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(19);


var csv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatRows = csv.formatRows;


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tsvParse; });
/* unused harmony export tsvParseRows */
/* unused harmony export tsvFormat */
/* unused harmony export tsvFormatRows */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv__ = __webpack_require__(19);


var tsv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv__["a" /* default */])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatRows = tsv.formatRows;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseBlob(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.blob();
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(input, init) {
  return fetch(input, init).then(responseBlob);
});


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseArrayBuffer(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.arrayBuffer();
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(input, init) {
  return fetch(input, init).then(responseArrayBuffer);
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export csv */
/* unused harmony export tsv */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dsv__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text__ = __webpack_require__(20);



function dsvParse(parse) {
  return function(input, init, row) {
    if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__text__["a" /* default */])(input, init).then(function(response) {
      return parse(response, row);
    });
  };
}

function dsv(delimiter, input, init, row) {
  if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
  var format = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_dsv__["a" /* dsvFormat */])(delimiter);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__text__["a" /* default */])(input, init).then(function(response) {
    return format.parse(response, row);
  });
}

var csv = dsvParse(__WEBPACK_IMPORTED_MODULE_0_d3_dsv__["b" /* csvParse */]);
var tsv = dsvParse(__WEBPACK_IMPORTED_MODULE_0_d3_dsv__["c" /* tsvParse */]);


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(input, init) {
  return new Promise(function(resolve, reject) {
    var image = new Image;
    for (var key in init) image[key] = init[key];
    image.onerror = reject;
    image.onload = function() { resolve(image); };
    image.src = input;
  });
});


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blob__ = __webpack_require__(110);
/* unused harmony reexport blob */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer__ = __webpack_require__(111);
/* unused harmony reexport buffer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dsv__ = __webpack_require__(112);
/* unused harmony reexport dsv */
/* unused harmony reexport csv */
/* unused harmony reexport tsv */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image__ = __webpack_require__(113);
/* unused harmony reexport image */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__json__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__json__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__text__ = __webpack_require__(20);
/* unused harmony reexport text */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__xml__ = __webpack_require__(116);
/* unused harmony reexport xml */
/* unused harmony reexport html */
/* unused harmony reexport svg */









/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function responseJson(response) {
  if (!response.ok) throw new Error(response.status + " " + response.statusText);
  return response.json();
}

/* harmony default export */ __webpack_exports__["a"] = (function(input, init) {
  return fetch(input, init).then(responseJson);
});


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export html */
/* unused harmony export svg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text__ = __webpack_require__(20);


function parser(type) {
  return function(input, init)  {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__text__["a" /* default */])(input, init).then(function(text) {
      return (new DOMParser).parseFromString(text, type);
    });
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (parser("application/xml"));

var html = parser("text/html");

var svg = parser("image/svg+xml");


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrefix; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(51);


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(21);


/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["a"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatPrefixAuto__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatRounded__ = __webpack_require__(120);



/* harmony default export */ __webpack_exports__["a"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__formatRounded__["a" /* default */])(x * 100, p); },
  "r": __WEBPACK_IMPORTED_MODULE_1__formatRounded__["a" /* default */],
  "s": __WEBPACK_IMPORTED_MODULE_0__formatPrefixAuto__["b" /* default */],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = (function(step) {
  return Math.max(0, -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(max) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(step)) + 1;
});


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cubehelixLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(9);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(end)).h),
          s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* unused harmony default export */ var _unused_webpack_default_export = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(9);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* hcl */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* hcl */])(end)).h),
        c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(9);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(9);



function lab(start, end) {
  var l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* lab */])(start)).l, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* lab */])(end)).l),
      a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["b"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export interpolateTransformCss */
/* unused harmony export interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(136);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(134);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  value = value.matrix;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* unused harmony default export */ var _unused_webpack_default_export = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_band__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["a"]; });
/* unused harmony reexport scalePoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_identity__ = __webpack_require__(141);
/* unused harmony reexport scaleIdentity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_linear__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_log__ = __webpack_require__(142);
/* unused harmony reexport scaleLog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ordinal__ = __webpack_require__(61);
/* unused harmony reexport scaleOrdinal */
/* unused harmony reexport scaleImplicit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pow__ = __webpack_require__(143);
/* unused harmony reexport scalePow */
/* unused harmony reexport scaleSqrt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_quantile__ = __webpack_require__(144);
/* unused harmony reexport scaleQuantile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_quantize__ = __webpack_require__(145);
/* unused harmony reexport scaleQuantize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold__ = __webpack_require__(147);
/* unused harmony reexport scaleThreshold */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_time__ = __webpack_require__(62);
/* unused harmony reexport scaleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcTime__ = __webpack_require__(149);
/* unused harmony reexport scaleUtc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_sequential__ = __webpack_require__(146);
/* unused harmony reexport scaleSequential */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_diverging__ = __webpack_require__(140);
/* unused harmony reexport scaleDiverging */



























/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = band;
/* unused harmony export point */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordinal__ = __webpack_require__(61);



function band() {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ordinal__["a" /* default */])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* range */])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(7);


function diverging(interpolator) {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      k10 = 1,
      k21 = 1,
      clamp = false;

  function scale(x) {
    var t = 0.5 + ((x = +x) - x1) * (x < x1 ? k10 : k21);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], x2 = +_[2], k10 = x0 === x1 ? 0 : 0.5 / (x1 - x0), k21 = x1 === x2 ? 0 : 0.5 / (x2 - x1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return diverging(interpolator).domain([x0, x1, x2]).clamp(clamp);
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(60);




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nice__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__continuous__ = __webpack_require__(12);






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__continuous__["a" /* default */])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* ticks */])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__nice__["a" /* default */])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__continuous__["c" /* copy */])(scale, log().base(base));
  };

  return scale;
}


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export sqrt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(12);




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* default */])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* copy */])(scale, pow().exponent(exponent));
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(4);



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* quantile */])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisect */])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["g" /* ascending */]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear__ = __webpack_require__(7);




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisect */])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(7);


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      k10 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) * k10;
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], k10 = x0 === x1 ? 0 : 1 / (x1 - x0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(4);



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisect */])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(48);



/* harmony default export */ __webpack_exports__["a"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["d" /* tickStep */])(start, stop, count == null ? 10 : count),
      precision;
  specifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* formatSpecifier */])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["b" /* precisionPrefix */])(step, value))) specifier.precision = precision;
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["c" /* formatPrefix */])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["d" /* precisionRound */])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["e" /* precisionFixed */])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* format */])(specifier);
});


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(33);




/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__time__["a" /* calendar */])(__WEBPACK_IMPORTED_MODULE_2_d3_time__["a" /* utcYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["b" /* utcMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["c" /* utcWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["d" /* utcDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["e" /* utcHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["f" /* utcMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["g" /* utcSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["h" /* utcMillisecond */], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["a" /* utcFormat */]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(65);



/* unused harmony default export */ var _unused_webpack_default_export = (function(name) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__select__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name).call(document.documentElement));
});


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(14);



/* unused harmony default export */ var _unused_webpack_default_export = (function(node) {
  var event = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])();
  if (event.changedTouches) event = event.changedTouches[0];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, event);
});


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* root */]);
});


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(13);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var create = typeof name === "function" ? name : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(26);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

/* harmony default export */ __webpack_exports__["a"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(150);




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["b" /* EnterNode */](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["b" /* EnterNode */](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(31);


function dispatchEvent(node, type, params) {
  var window = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return !this.node();
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(64);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__matcher__["a" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(29);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, before) {
  var create = typeof name === "function" ? name : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(lower);
});


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](merges, this._parents);
});


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(raise);
});


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(remove);
});


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(29);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(69);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selectorAll__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, parents);
});


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(14);



/* unused harmony default export */ var _unused_webpack_default_export = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touch);
    }
  }

  return null;
});


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(14);



/* unused harmony default export */ var _unused_webpack_default_export = (function(node, touches) {
  if (touches == null) touches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touches[i]);
  }

  return points;
});


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isoFormat__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultLocale__ = __webpack_require__(32);



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__defaultLocale__["b" /* utcParse */])(__WEBPACK_IMPORTED_MODULE_0__isoFormat__["a" /* isoSpecifier */]);

/* unused harmony default export */ var _unused_webpack_default_export = (parseIso);


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export days */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(3);



var day = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationDay */];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (day);
var days = day.range;


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(3);



var hour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  var offset = date.getTimezoneOffset() * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */] % __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
  if (offset < 0) offset += __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
  date.setTime(Math.floor((+date - offset) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */] + offset);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["a"] = (hour);
var hours = hour.range;


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export milliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);


var millisecond = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(3);



var minute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (minute);
var minutes = minute.range;


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export months */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);


var month = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (month);
var months = month.range;


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export seconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(3);



var second = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationSecond */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationSecond */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationSecond */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationSecond */];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["a"] = (second);
var seconds = second.range;


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(3);



var utcDay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationDay */];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(3);



var utcHour = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationHour */];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["a"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(3);



var utcMinute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);


var utcMonth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcMonday; });
/* unused harmony export utcTuesday */
/* unused harmony export utcWednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcThursday; });
/* unused harmony export utcFriday */
/* unused harmony export utcSaturday */
/* unused harmony export utcSundays */
/* unused harmony export utcMondays */
/* unused harmony export utcTuesdays */
/* unused harmony export utcWednesdays */
/* unused harmony export utcThursdays */
/* unused harmony export utcFridays */
/* unused harmony export utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(3);



function utcWeekday(i) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationWeek */];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);


var utcYear = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return monday; });
/* unused harmony export tuesday */
/* unused harmony export wednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return thursday; });
/* unused harmony export friday */
/* unused harmony export saturday */
/* unused harmony export sundays */
/* unused harmony export mondays */
/* unused harmony export tuesdays */
/* unused harmony export wednesdays */
/* unused harmony export thursdays */
/* unused harmony export fridays */
/* unused harmony export saturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(3);



function weekday(i) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationWeek */];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export years */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);


var year = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (year);
var years = year.range;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(77);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(201)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./index.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(202);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 202 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTliYjczOTRjMzkxNjM4MjJiNzQiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy9pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvZHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvYXNjZW5kaW5nLmpzIiwid2VicGFjazovLy8uL34vZDMtY29sb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvbGluZWFyLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWZvcm1hdC9zcmMvZXhwb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvbnVtYmVyLmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL2NvbnRpbnVvdXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3BvaW50LmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL3F1YW50aWxlLmpzIiwid2VicGFjazovLy8uL34vZDMtY29sbGVjdGlvbi9zcmMvbWFwLmpzIiwid2VicGFjazovLy8uL34vZDMtY29sb3Ivc3JjL2NvbG9yLmpzIiwid2VicGFjazovLy8uL34vZDMtY29sb3Ivc3JjL2RlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWRzdi9zcmMvZHN2LmpzIiwid2VicGFjazovLy8uL34vZDMtZmV0Y2gvc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdERlY2ltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1pbnRlcnBvbGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9iYXNpcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2VzLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zb3VyY2VFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvd2luZG93LmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS1mb3JtYXQvc3JjL2RlZmF1bHRMb2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi91dGlsaXRpZXMvZ2V0RGltZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9iaXNlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvYmlzZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvZGV2aWF0aW9uLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL2V4dGVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9taW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvcGFpcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvdGhyZXNob2xkL3N0dXJnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvdGlja3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvdHJhbnNwb3NlLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL3ZhcmlhbmNlLmpzIiwid2VicGFjazovLy8uL34vZDMtY29sb3Ivc3JjL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdFByZWZpeEF1dG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdFNwZWNpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWZvcm1hdC9zcmMvbG9jYWxlLmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL2FycmF5LmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL2Jhc2lzQ2xvc2VkLmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvbmljZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvb3JkaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy90aW1lLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NwYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3N0eWxlLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RvckFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXRpbWUtZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS1mb3JtYXQvc3JjL2lzb0Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXRpbWUtZm9ybWF0L3NyYy9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2JhcmNoYXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9iYXJjaGFydC9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2JhcmNoYXJ0L3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvY3Jvc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvZGVzY2VuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9oaXN0b2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvbWF4LmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL21lYW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvbWVkaWFuLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL21lcmdlLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL3Blcm11dGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvc2Nhbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy9zaHVmZmxlLmpzIiwid2VicGFjazovLy8uL34vZDMtYXJyYXkvc3JjL3N1bS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy90aHJlc2hvbGQvZnJlZWRtYW5EaWFjb25pcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWFycmF5L3NyYy90aHJlc2hvbGQvc2NvdHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1hcnJheS9zcmMvemlwLmpzIiwid2VicGFjazovLy8uL34vZDMtYXhpcy9zcmMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1heGlzL3NyYy9heGlzLmpzIiwid2VicGFjazovLy8uL34vZDMtYXhpcy9zcmMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1heGlzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWNvbGxlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1jb2xsZWN0aW9uL3NyYy9lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL34vZDMtY29sbGVjdGlvbi9zcmMva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWNvbGxlY3Rpb24vc3JjL25lc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1jb2xsZWN0aW9uL3NyYy9zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1jb2xsZWN0aW9uL3NyYy92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1jb2xvci9zcmMvY3ViZWhlbGl4LmpzIiwid2VicGFjazovLy8uL34vZDMtY29sb3Ivc3JjL2xhYi5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWRzdi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWRzdi9zcmMvY3N2LmpzIiwid2VicGFjazovLy8uL34vZDMtZHN2L3NyYy90c3YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mZXRjaC9zcmMvYmxvYi5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWZldGNoL3NyYy9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mZXRjaC9zcmMvZHN2LmpzIiwid2VicGFjazovLy8uL34vZDMtZmV0Y2gvc3JjL2ltYWdlLmpzIiwid2VicGFjazovLy8uL34vZDMtZmV0Y2gvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZDMtZmV0Y2gvc3JjL2pzb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mZXRjaC9zcmMveG1sLmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9kZWZhdWx0TG9jYWxlLmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9mb3JtYXRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWZvcm1hdC9zcmMvZm9ybWF0TnVtZXJhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdFJvdW5kZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdFRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdFR5cGVzLmpzIiwid2VicGFjazovLy8uL34vZDMtZm9ybWF0L3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uRml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1mb3JtYXQvc3JjL3ByZWNpc2lvblByZWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uUm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvY3ViZWhlbGl4LmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL2hjbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvbGFiLmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL3BpZWNld2lzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9xdWFudGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy9yb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vZGVjb21wb3NlLmpzIiwid2VicGFjazovLy8uL34vZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvem9vbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL2JhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvZGl2ZXJnaW5nLmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL34vZDMtc2NhbGUvc3JjL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy9wb3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvcXVhbnRpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvcXVhbnRpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvc2VxdWVudGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy90aHJlc2hvbGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zY2FsZS9zcmMvdGlja0Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNjYWxlL3NyYy91dGNUaW1lLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9sb2NhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jYWxsLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2xhc3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdHVtLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lYWNoLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9leGl0LmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2luc2VydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2xvd2VyLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9ub2RlLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmFpc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3RBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zaXplLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy1zZWxlY3Rpb24vc3JjL3RvdWNoLmpzIiwid2VicGFjazovLy8uL34vZDMtc2VsZWN0aW9uL3NyYy90b3VjaGVzLmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS1mb3JtYXQvc3JjL2lzb1BhcnNlLmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvZGF5LmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvaG91ci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXRpbWUvc3JjL21pbGxpc2Vjb25kLmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvbWludXRlLmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvbW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy9zZWNvbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy91dGNEYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy91dGNIb3VyLmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvdXRjTWludXRlLmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvdXRjTW9udGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy91dGNXZWVrLmpzIiwid2VicGFjazovLy8uL34vZDMtdGltZS9zcmMvdXRjWWVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2QzLXRpbWUvc3JjL3dlZWsuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kMy10aW1lL3NyYy95ZWFyLmpzIiwid2VicGFjazovLy8uL34vZGVib3VuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LmNzcz9jYzk5Iiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiXSwibmFtZXMiOlsiaXNMYW5kc2NhcGUiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJnZXREaW1lbnNpb25zIiwicGFyZW50IiwiV0lEVEgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJyZXBsYWNlIiwib2Zmc2V0V2lkdGgiLCJIRUlHSFQiLCJNQVJHSU4iLCJNQVJHSU5TIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwib3B0cyIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJiYXJjaGFydCIsImNoYXJ0IiwicmVuZGVyIiwiY2FudmFzIiwieEF4aXNDbGFzcyIsInlBeGlzQ2xhc3MiLCJyZWN0YW5nbGUiLCJyZWN0YW5nbGVzIiwieEF4aXNMYWJlbCIsImJhcmdyb3VwIiwieSIsIngiLCJ5QXhpcyIsInhBeGlzIiwianNvbiIsInRoZW4iLCJyYXdEYXRhIiwiZmlndXJlcyIsIm1hcCIsImVsIiwiZGF0ZSIsIk9iamVjdCIsImtleXMiLCJyYXRpbyIsImQiLCJkYXRhIiwibWF4UmF0aW8iLCJzY2FsZUJhbmQiLCJkb21haW4iLCJvYmoiLCJyYW5nZSIsInBhZGRpbmciLCJzY2FsZUxpbmVhciIsImF4aXNMZWZ0IiwidGlja3MiLCJsZW5ndGgiLCJzY2FsZSIsImF4aXNUb3AiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwidGV4dCIsImNhbGwiLCJzZWxlY3RBbGwiLCJlbnRlciIsImJhbmR3aWR0aCIsIm9ucmVzaXplIiwiZGVib3VuY2UiLCJyZXNpemUiLCJyYW5nZVJvdW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELFNBQVM7QUFDVCxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4QkFBOEI7QUFDM0QsNkJBQTZCLDBDQUEwQyxFQUFFO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVtRDtBQUN0QjtBQUNEO0FBQ0g7QUFDSztBQUNEO0FBQ0g7QUFDRztBQUNnQjtBQUNYO0FBQ0U7QUFDYjtBQUNDO0FBQ0U7QUFDRDtBQUNGO0FBQ0U7QUFDRTtBQUNDO0FBQ0g7QUFDRDtBQUNHO0FBQ0o7QUFDMkI7QUFDckI7QUFDRDtBQUNMOzs7Ozs7Ozs7Ozs7O0FDMUJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNKQTtBQUFBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRm1DO0FBQ0k7QUFDVjs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNjO0FBQytCO0FBQzFFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1QkE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKZTtBQUMyQztBQUN2QztBQUNuQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVDQUF1QztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1Q0FBdUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2hIQTtBQUNjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNaQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2JBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx5RUFBeUUsOENBQThDO0FBQ3ZIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStELHFCQUFxQixFQUFFOztBQUV0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFdUI7O0FBRXZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEVBQUU7QUFDNUIsMEJBQTBCLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Q2RDtBQUM3QjtBQUNHO0FBQ0Q7QUFDQztBQUNEOzs7Ozs7Ozs7O0FDTGxDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUtBQXdGO0FBQ3hGOzs7Ozs7OztBQ2ZBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFLHNFQUFzRTtBQUN0RSxxSUFBcUk7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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSdUY7QUFDbkQ7QUFDUDtBQUNEOzs7Ozs7Ozs7O0FDSFY7O0FBRWxCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNEQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSw0QkFBNEI7QUFDeEM7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25CWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUkE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNKQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0pBOzs7Ozs7Ozs7Ozs7OztBQ0FjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLGtGQUFrRixFQUFFOztBQUU5SDtBQUNBO0FBQ0EsMENBQTBDLGdDQUFnQyw2REFBNkQsRUFBRTtBQUN6STs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEg0QjtBQUM0QjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRnpEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BzQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOzs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSd0I7QUFDRTtBQUNPO0FBQ1I7QUFDRDtBQUNBO0FBQ1U7Ozs7Ozs7O0FDTmxDO0FBQ0E7QUFDQTtBQUNBOztB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRGU7QUFDRDtBQUNJOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdDa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOUJlO0FBQ0Q7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDaENpQjtBQUM4RTs7QUFFL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOUJpQjtBQUNDO0FBQ3dFOztBQUUxRjtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ0pBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ0xBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDMUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDUHdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7O0FDUEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1ZrQjtB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RDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7QUNkQTtBQUNxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN6QkE7QUFDdUI7O0FBRXZCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDdUI7O0FBRXZCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDb0I7O0FBRXBCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDcUI7O0FBRXJCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDdUI7O0FBRXZCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ3FCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIwMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTliYjczOTRjMzkxNjM4MjJiNzQiLCJ2YXIgdDAgPSBuZXcgRGF0ZSxcbiAgICB0MSA9IG5ldyBEYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdJbnRlcnZhbChmbG9vcmksIG9mZnNldGksIGNvdW50LCBmaWVsZCkge1xuXG4gIGZ1bmN0aW9uIGludGVydmFsKGRhdGUpIHtcbiAgICByZXR1cm4gZmxvb3JpKGRhdGUgPSBuZXcgRGF0ZSgrZGF0ZSkpLCBkYXRlO1xuICB9XG5cbiAgaW50ZXJ2YWwuZmxvb3IgPSBpbnRlcnZhbDtcblxuICBpbnRlcnZhbC5jZWlsID0gZnVuY3Rpb24oZGF0ZSkge1xuICAgIHJldHVybiBmbG9vcmkoZGF0ZSA9IG5ldyBEYXRlKGRhdGUgLSAxKSksIG9mZnNldGkoZGF0ZSwgMSksIGZsb29yaShkYXRlKSwgZGF0ZTtcbiAgfTtcblxuICBpbnRlcnZhbC5yb3VuZCA9IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICB2YXIgZDAgPSBpbnRlcnZhbChkYXRlKSxcbiAgICAgICAgZDEgPSBpbnRlcnZhbC5jZWlsKGRhdGUpO1xuICAgIHJldHVybiBkYXRlIC0gZDAgPCBkMSAtIGRhdGUgPyBkMCA6IGQxO1xuICB9O1xuXG4gIGludGVydmFsLm9mZnNldCA9IGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICByZXR1cm4gb2Zmc2V0aShkYXRlID0gbmV3IERhdGUoK2RhdGUpLCBzdGVwID09IG51bGwgPyAxIDogTWF0aC5mbG9vcihzdGVwKSksIGRhdGU7XG4gIH07XG5cbiAgaW50ZXJ2YWwucmFuZ2UgPSBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIHZhciByYW5nZSA9IFtdLCBwcmV2aW91cztcbiAgICBzdGFydCA9IGludGVydmFsLmNlaWwoc3RhcnQpO1xuICAgIHN0ZXAgPSBzdGVwID09IG51bGwgPyAxIDogTWF0aC5mbG9vcihzdGVwKTtcbiAgICBpZiAoIShzdGFydCA8IHN0b3ApIHx8ICEoc3RlcCA+IDApKSByZXR1cm4gcmFuZ2U7IC8vIGFsc28gaGFuZGxlcyBJbnZhbGlkIERhdGVcbiAgICBkbyByYW5nZS5wdXNoKHByZXZpb3VzID0gbmV3IERhdGUoK3N0YXJ0KSksIG9mZnNldGkoc3RhcnQsIHN0ZXApLCBmbG9vcmkoc3RhcnQpO1xuICAgIHdoaWxlIChwcmV2aW91cyA8IHN0YXJ0ICYmIHN0YXJ0IDwgc3RvcCk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIGludGVydmFsLmZpbHRlciA9IGZ1bmN0aW9uKHRlc3QpIHtcbiAgICByZXR1cm4gbmV3SW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgaWYgKGRhdGUgPj0gZGF0ZSkgd2hpbGUgKGZsb29yaShkYXRlKSwgIXRlc3QoZGF0ZSkpIGRhdGUuc2V0VGltZShkYXRlIC0gMSk7XG4gICAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgICAgaWYgKGRhdGUgPj0gZGF0ZSkge1xuICAgICAgICBpZiAoc3RlcCA8IDApIHdoaWxlICgrK3N0ZXAgPD0gMCkge1xuICAgICAgICAgIHdoaWxlIChvZmZzZXRpKGRhdGUsIC0xKSwgIXRlc3QoZGF0ZSkpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbiAgICAgICAgfSBlbHNlIHdoaWxlICgtLXN0ZXAgPj0gMCkge1xuICAgICAgICAgIHdoaWxlIChvZmZzZXRpKGRhdGUsICsxKSwgIXRlc3QoZGF0ZSkpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGlmIChjb3VudCkge1xuICAgIGludGVydmFsLmNvdW50ID0gZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgICAgdDAuc2V0VGltZSgrc3RhcnQpLCB0MS5zZXRUaW1lKCtlbmQpO1xuICAgICAgZmxvb3JpKHQwKSwgZmxvb3JpKHQxKTtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGNvdW50KHQwLCB0MSkpO1xuICAgIH07XG5cbiAgICBpbnRlcnZhbC5ldmVyeSA9IGZ1bmN0aW9uKHN0ZXApIHtcbiAgICAgIHN0ZXAgPSBNYXRoLmZsb29yKHN0ZXApO1xuICAgICAgcmV0dXJuICFpc0Zpbml0ZShzdGVwKSB8fCAhKHN0ZXAgPiAwKSA/IG51bGxcbiAgICAgICAgICA6ICEoc3RlcCA+IDEpID8gaW50ZXJ2YWxcbiAgICAgICAgICA6IGludGVydmFsLmZpbHRlcihmaWVsZFxuICAgICAgICAgICAgICA/IGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZpZWxkKGQpICUgc3RlcCA9PT0gMDsgfVxuICAgICAgICAgICAgICA6IGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGludGVydmFsLmNvdW50KDAsIGQpICUgc3RlcCA9PT0gMDsgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBpbnRlcnZhbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy9pbnRlcnZhbC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgc2VsZWN0aW9uX3NlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0QWxsIGZyb20gXCIuL3NlbGVjdEFsbFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9maWx0ZXIgZnJvbSBcIi4vZmlsdGVyXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2RhdGEgZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IHNlbGVjdGlvbl9lbnRlciBmcm9tIFwiLi9lbnRlclwiO1xuaW1wb3J0IHNlbGVjdGlvbl9leGl0IGZyb20gXCIuL2V4aXRcIjtcbmltcG9ydCBzZWxlY3Rpb25fbWVyZ2UgZnJvbSBcIi4vbWVyZ2VcIjtcbmltcG9ydCBzZWxlY3Rpb25fb3JkZXIgZnJvbSBcIi4vb3JkZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fc29ydCBmcm9tIFwiLi9zb3J0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2NhbGwgZnJvbSBcIi4vY2FsbFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlcyBmcm9tIFwiLi9ub2Rlc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9ub2RlIGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2l6ZSBmcm9tIFwiLi9zaXplXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VtcHR5IGZyb20gXCIuL2VtcHR5XCI7XG5pbXBvcnQgc2VsZWN0aW9uX2VhY2ggZnJvbSBcIi4vZWFjaFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9hdHRyIGZyb20gXCIuL2F0dHJcIjtcbmltcG9ydCBzZWxlY3Rpb25fc3R5bGUgZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCBzZWxlY3Rpb25fcHJvcGVydHkgZnJvbSBcIi4vcHJvcGVydHlcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xhc3NlZCBmcm9tIFwiLi9jbGFzc2VkXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3RleHQgZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9odG1sIGZyb20gXCIuL2h0bWxcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmFpc2UgZnJvbSBcIi4vcmFpc2VcIjtcbmltcG9ydCBzZWxlY3Rpb25fbG93ZXIgZnJvbSBcIi4vbG93ZXJcIjtcbmltcG9ydCBzZWxlY3Rpb25fYXBwZW5kIGZyb20gXCIuL2FwcGVuZFwiO1xuaW1wb3J0IHNlbGVjdGlvbl9pbnNlcnQgZnJvbSBcIi4vaW5zZXJ0XCI7XG5pbXBvcnQgc2VsZWN0aW9uX3JlbW92ZSBmcm9tIFwiLi9yZW1vdmVcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2xvbmUgZnJvbSBcIi4vY2xvbmVcIjtcbmltcG9ydCBzZWxlY3Rpb25fZGF0dW0gZnJvbSBcIi4vZGF0dW1cIjtcbmltcG9ydCBzZWxlY3Rpb25fb24gZnJvbSBcIi4vb25cIjtcbmltcG9ydCBzZWxlY3Rpb25fZGlzcGF0Y2ggZnJvbSBcIi4vZGlzcGF0Y2hcIjtcblxuZXhwb3J0IHZhciByb290ID0gW251bGxdO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0aW9uKGdyb3VwcywgcGFyZW50cykge1xuICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gIHRoaXMuX3BhcmVudHMgPSBwYXJlbnRzO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XV0sIHJvb3QpO1xufVxuXG5TZWxlY3Rpb24ucHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFNlbGVjdGlvbixcbiAgc2VsZWN0OiBzZWxlY3Rpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHNlbGVjdGlvbl9zZWxlY3RBbGwsXG4gIGZpbHRlcjogc2VsZWN0aW9uX2ZpbHRlcixcbiAgZGF0YTogc2VsZWN0aW9uX2RhdGEsXG4gIGVudGVyOiBzZWxlY3Rpb25fZW50ZXIsXG4gIGV4aXQ6IHNlbGVjdGlvbl9leGl0LFxuICBtZXJnZTogc2VsZWN0aW9uX21lcmdlLFxuICBvcmRlcjogc2VsZWN0aW9uX29yZGVyLFxuICBzb3J0OiBzZWxlY3Rpb25fc29ydCxcbiAgY2FsbDogc2VsZWN0aW9uX2NhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fbm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX2VhY2gsXG4gIGF0dHI6IHNlbGVjdGlvbl9hdHRyLFxuICBzdHlsZTogc2VsZWN0aW9uX3N0eWxlLFxuICBwcm9wZXJ0eTogc2VsZWN0aW9uX3Byb3BlcnR5LFxuICBjbGFzc2VkOiBzZWxlY3Rpb25fY2xhc3NlZCxcbiAgdGV4dDogc2VsZWN0aW9uX3RleHQsXG4gIGh0bWw6IHNlbGVjdGlvbl9odG1sLFxuICByYWlzZTogc2VsZWN0aW9uX3JhaXNlLFxuICBsb3dlcjogc2VsZWN0aW9uX2xvd2VyLFxuICBhcHBlbmQ6IHNlbGVjdGlvbl9hcHBlbmQsXG4gIGluc2VydDogc2VsZWN0aW9uX2luc2VydCxcbiAgcmVtb3ZlOiBzZWxlY3Rpb25fcmVtb3ZlLFxuICBjbG9uZTogc2VsZWN0aW9uX2Nsb25lLFxuICBkYXR1bTogc2VsZWN0aW9uX2RhdHVtLFxuICBvbjogc2VsZWN0aW9uX29uLFxuICBkaXNwYXRjaDogc2VsZWN0aW9uX2Rpc3BhdGNoXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGJpc2VjdCwgYmlzZWN0UmlnaHQsIGJpc2VjdExlZnR9IGZyb20gXCIuL2Jpc2VjdFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFzY2VuZGluZ30gZnJvbSBcIi4vYXNjZW5kaW5nXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYmlzZWN0b3J9IGZyb20gXCIuL2Jpc2VjdG9yXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3Jvc3N9IGZyb20gXCIuL2Nyb3NzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZGVzY2VuZGluZ30gZnJvbSBcIi4vZGVzY2VuZGluZ1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGRldmlhdGlvbn0gZnJvbSBcIi4vZGV2aWF0aW9uXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZXh0ZW50fSBmcm9tIFwiLi9leHRlbnRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBoaXN0b2dyYW19IGZyb20gXCIuL2hpc3RvZ3JhbVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRocmVzaG9sZEZyZWVkbWFuRGlhY29uaXN9IGZyb20gXCIuL3RocmVzaG9sZC9mcmVlZG1hbkRpYWNvbmlzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGhyZXNob2xkU2NvdHR9IGZyb20gXCIuL3RocmVzaG9sZC9zY290dFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRocmVzaG9sZFN0dXJnZXN9IGZyb20gXCIuL3RocmVzaG9sZC9zdHVyZ2VzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWF4fSBmcm9tIFwiLi9tYXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtZWFufSBmcm9tIFwiLi9tZWFuXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWVkaWFufSBmcm9tIFwiLi9tZWRpYW5cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtZXJnZX0gZnJvbSBcIi4vbWVyZ2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtaW59IGZyb20gXCIuL21pblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBhaXJzfSBmcm9tIFwiLi9wYWlyc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBlcm11dGV9IGZyb20gXCIuL3Blcm11dGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBxdWFudGlsZX0gZnJvbSBcIi4vcXVhbnRpbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyByYW5nZX0gZnJvbSBcIi4vcmFuZ2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzY2FufSBmcm9tIFwiLi9zY2FuXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2h1ZmZsZX0gZnJvbSBcIi4vc2h1ZmZsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN1bX0gZnJvbSBcIi4vc3VtXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGlja3MsIHRpY2tJbmNyZW1lbnQsIHRpY2tTdGVwfSBmcm9tIFwiLi90aWNrc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRyYW5zcG9zZX0gZnJvbSBcIi4vdHJhbnNwb3NlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdmFyaWFuY2V9IGZyb20gXCIuL3ZhcmlhbmNlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgemlwfSBmcm9tIFwiLi96aXBcIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBkdXJhdGlvblNlY29uZCA9IDFlMztcbmV4cG9ydCB2YXIgZHVyYXRpb25NaW51dGUgPSA2ZTQ7XG5leHBvcnQgdmFyIGR1cmF0aW9uSG91ciA9IDM2ZTU7XG5leHBvcnQgdmFyIGR1cmF0aW9uRGF5ID0gODY0ZTU7XG5leHBvcnQgdmFyIGR1cmF0aW9uV2VlayA9IDYwNDhlNTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy9kdXJhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXkgPSBBcnJheS5wcm90b3R5cGU7XG5cbmV4cG9ydCB2YXIgbWFwID0gYXJyYXkubWFwO1xuZXhwb3J0IHZhciBzbGljZSA9IGFycmF5LnNsaWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogYSA+PSBiID8gMCA6IE5hTjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvYXNjZW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBjb2xvciwgcmdiLCBoc2x9IGZyb20gXCIuL3NyYy9jb2xvclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGxhYiwgaGNsLCBsY2gsIGdyYXl9IGZyb20gXCIuL3NyYy9sYWJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjdWJlaGVsaXh9IGZyb20gXCIuL3NyYy9jdWJlaGVsaXhcIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3RpY2tzLCB0aWNrSW5jcmVtZW50fSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7aW50ZXJwb2xhdGVOdW1iZXIgYXMgcmVpbnRlcnBvbGF0ZX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge2RlZmF1bHQgYXMgY29udGludW91cywgY29weSwgZGVpbnRlcnBvbGF0ZUxpbmVhciBhcyBkZWludGVycG9sYXRlfSBmcm9tIFwiLi9jb250aW51b3VzXCI7XG5pbXBvcnQgdGlja0Zvcm1hdCBmcm9tIFwiLi90aWNrRm9ybWF0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJpc2goc2NhbGUpIHtcbiAgdmFyIGRvbWFpbiA9IHNjYWxlLmRvbWFpbjtcblxuICBzY2FsZS50aWNrcyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgdmFyIGQgPSBkb21haW4oKTtcbiAgICByZXR1cm4gdGlja3MoZFswXSwgZFtkLmxlbmd0aCAtIDFdLCBjb3VudCA9PSBudWxsID8gMTAgOiBjb3VudCk7XG4gIH07XG5cbiAgc2NhbGUudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKGNvdW50LCBzcGVjaWZpZXIpIHtcbiAgICByZXR1cm4gdGlja0Zvcm1hdChkb21haW4oKSwgY291bnQsIHNwZWNpZmllcik7XG4gIH07XG5cbiAgc2NhbGUubmljZSA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgaWYgKGNvdW50ID09IG51bGwpIGNvdW50ID0gMTA7XG5cbiAgICB2YXIgZCA9IGRvbWFpbigpLFxuICAgICAgICBpMCA9IDAsXG4gICAgICAgIGkxID0gZC5sZW5ndGggLSAxLFxuICAgICAgICBzdGFydCA9IGRbaTBdLFxuICAgICAgICBzdG9wID0gZFtpMV0sXG4gICAgICAgIHN0ZXA7XG5cbiAgICBpZiAoc3RvcCA8IHN0YXJ0KSB7XG4gICAgICBzdGVwID0gc3RhcnQsIHN0YXJ0ID0gc3RvcCwgc3RvcCA9IHN0ZXA7XG4gICAgICBzdGVwID0gaTAsIGkwID0gaTEsIGkxID0gc3RlcDtcbiAgICB9XG5cbiAgICBzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuXG4gICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICBzdGFydCA9IE1hdGguZmxvb3Ioc3RhcnQgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICBzdG9wID0gTWF0aC5jZWlsKHN0b3AgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICBzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICAgIH0gZWxzZSBpZiAoc3RlcCA8IDApIHtcbiAgICAgIHN0YXJ0ID0gTWF0aC5jZWlsKHN0YXJ0ICogc3RlcCkgLyBzdGVwO1xuICAgICAgc3RvcCA9IE1hdGguZmxvb3Ioc3RvcCAqIHN0ZXApIC8gc3RlcDtcbiAgICAgIHN0ZXAgPSB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCk7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICBkW2kwXSA9IE1hdGguZmxvb3Ioc3RhcnQgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICBkW2kxXSA9IE1hdGguY2VpbChzdG9wIC8gc3RlcCkgKiBzdGVwO1xuICAgICAgZG9tYWluKGQpO1xuICAgIH0gZWxzZSBpZiAoc3RlcCA8IDApIHtcbiAgICAgIGRbaTBdID0gTWF0aC5jZWlsKHN0YXJ0ICogc3RlcCkgLyBzdGVwO1xuICAgICAgZFtpMV0gPSBNYXRoLmZsb29yKHN0b3AgKiBzdGVwKSAvIHN0ZXA7XG4gICAgICBkb21haW4oZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjYWxlO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGluZWFyKCkge1xuICB2YXIgc2NhbGUgPSBjb250aW51b3VzKGRlaW50ZXJwb2xhdGUsIHJlaW50ZXJwb2xhdGUpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgbGluZWFyKCkpO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9saW5lYXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geCA9PT0gbnVsbCA/IE5hTiA6ICt4O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9udW1iZXIuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmZ1bmN0aW9uIGxpbmVhcihhLCBkKSB7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGEgKyB0ICogZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXhwb25lbnRpYWwoYSwgYiwgeSkge1xuICByZXR1cm4gYSA9IE1hdGgucG93KGEsIHkpLCBiID0gTWF0aC5wb3coYiwgeSkgLSBhLCB5ID0gMSAvIHksIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coYSArIHQgKiBiLCB5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1ZShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQgPiAxODAgfHwgZCA8IC0xODAgPyBkIC0gMzYwICogTWF0aC5yb3VuZChkIC8gMzYwKSA6IGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1tYSh5KSB7XG4gIHJldHVybiAoeSA9ICt5KSA9PT0gMSA/IG5vZ2FtbWEgOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGIgLSBhID8gZXhwb25lbnRpYWwoYSwgYiwgeSkgOiBjb25zdGFudChpc05hTihhKSA/IGIgOiBhKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9nYW1tYShhLCBiKSB7XG4gIHZhciBkID0gYiAtIGE7XG4gIHJldHVybiBkID8gbGluZWFyKGEsIGQpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL2NvbG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmb3JtYXREZWNpbWFsIGZyb20gXCIuL2Zvcm1hdERlY2ltYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geCA9IGZvcm1hdERlY2ltYWwoTWF0aC5hYnMoeCkpLCB4ID8geFsxXSA6IE5hTjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mb3JtYXQvc3JjL2V4cG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgLT0gYSwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgYiAqIHQ7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL251bWJlci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtiaXNlY3R9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZSBhcyBpbnRlcnBvbGF0ZVZhbHVlLCBpbnRlcnBvbGF0ZVJvdW5kfSBmcm9tIFwiZDMtaW50ZXJwb2xhdGVcIjtcbmltcG9ydCB7bWFwLCBzbGljZX0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxudmFyIHVuaXQgPSBbMCwgMV07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWludGVycG9sYXRlTGluZWFyKGEsIGIpIHtcbiAgcmV0dXJuIChiIC09IChhID0gK2EpKVxuICAgICAgPyBmdW5jdGlvbih4KSB7IHJldHVybiAoeCAtIGEpIC8gYjsgfVxuICAgICAgOiBjb25zdGFudChiKTtcbn1cblxuZnVuY3Rpb24gZGVpbnRlcnBvbGF0ZUNsYW1wKGRlaW50ZXJwb2xhdGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgZCA9IGRlaW50ZXJwb2xhdGUoYSA9ICthLCBiID0gK2IpO1xuICAgIHJldHVybiBmdW5jdGlvbih4KSB7IHJldHVybiB4IDw9IGEgPyAwIDogeCA+PSBiID8gMSA6IGQoeCk7IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlaW50ZXJwb2xhdGVDbGFtcChyZWludGVycG9sYXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHIgPSByZWludGVycG9sYXRlKGEgPSArYSwgYiA9ICtiKTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkgeyByZXR1cm4gdCA8PSAwID8gYSA6IHQgPj0gMSA/IGIgOiByKHQpOyB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW1hcChkb21haW4sIHJhbmdlLCBkZWludGVycG9sYXRlLCByZWludGVycG9sYXRlKSB7XG4gIHZhciBkMCA9IGRvbWFpblswXSwgZDEgPSBkb21haW5bMV0sIHIwID0gcmFuZ2VbMF0sIHIxID0gcmFuZ2VbMV07XG4gIGlmIChkMSA8IGQwKSBkMCA9IGRlaW50ZXJwb2xhdGUoZDEsIGQwKSwgcjAgPSByZWludGVycG9sYXRlKHIxLCByMCk7XG4gIGVsc2UgZDAgPSBkZWludGVycG9sYXRlKGQwLCBkMSksIHIwID0gcmVpbnRlcnBvbGF0ZShyMCwgcjEpO1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gcjAoZDAoeCkpOyB9O1xufVxuXG5mdW5jdGlvbiBwb2x5bWFwKGRvbWFpbiwgcmFuZ2UsIGRlaW50ZXJwb2xhdGUsIHJlaW50ZXJwb2xhdGUpIHtcbiAgdmFyIGogPSBNYXRoLm1pbihkb21haW4ubGVuZ3RoLCByYW5nZS5sZW5ndGgpIC0gMSxcbiAgICAgIGQgPSBuZXcgQXJyYXkoaiksXG4gICAgICByID0gbmV3IEFycmF5KGopLFxuICAgICAgaSA9IC0xO1xuXG4gIC8vIFJldmVyc2UgZGVzY2VuZGluZyBkb21haW5zLlxuICBpZiAoZG9tYWluW2pdIDwgZG9tYWluWzBdKSB7XG4gICAgZG9tYWluID0gZG9tYWluLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIHJhbmdlID0gcmFuZ2Uuc2xpY2UoKS5yZXZlcnNlKCk7XG4gIH1cblxuICB3aGlsZSAoKytpIDwgaikge1xuICAgIGRbaV0gPSBkZWludGVycG9sYXRlKGRvbWFpbltpXSwgZG9tYWluW2kgKyAxXSk7XG4gICAgcltpXSA9IHJlaW50ZXJwb2xhdGUocmFuZ2VbaV0sIHJhbmdlW2kgKyAxXSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oeCkge1xuICAgIHZhciBpID0gYmlzZWN0KGRvbWFpbiwgeCwgMSwgaikgLSAxO1xuICAgIHJldHVybiByW2ldKGRbaV0oeCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShzb3VyY2UsIHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0XG4gICAgICAuZG9tYWluKHNvdXJjZS5kb21haW4oKSlcbiAgICAgIC5yYW5nZShzb3VyY2UucmFuZ2UoKSlcbiAgICAgIC5pbnRlcnBvbGF0ZShzb3VyY2UuaW50ZXJwb2xhdGUoKSlcbiAgICAgIC5jbGFtcChzb3VyY2UuY2xhbXAoKSk7XG59XG5cbi8vIGRlaW50ZXJwb2xhdGUoYSwgYikoeCkgdGFrZXMgYSBkb21haW4gdmFsdWUgeCBpbiBbYSxiXSBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBwYXJhbWV0ZXIgdCBpbiBbMCwxXS5cbi8vIHJlaW50ZXJwb2xhdGUoYSwgYikodCkgdGFrZXMgYSBwYXJhbWV0ZXIgdCBpbiBbMCwxXSBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBkb21haW4gdmFsdWUgeCBpbiBbYSxiXS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRpbnVvdXMoZGVpbnRlcnBvbGF0ZSwgcmVpbnRlcnBvbGF0ZSkge1xuICB2YXIgZG9tYWluID0gdW5pdCxcbiAgICAgIHJhbmdlID0gdW5pdCxcbiAgICAgIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVWYWx1ZSxcbiAgICAgIGNsYW1wID0gZmFsc2UsXG4gICAgICBwaWVjZXdpc2UsXG4gICAgICBvdXRwdXQsXG4gICAgICBpbnB1dDtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHBpZWNld2lzZSA9IE1hdGgubWluKGRvbWFpbi5sZW5ndGgsIHJhbmdlLmxlbmd0aCkgPiAyID8gcG9seW1hcCA6IGJpbWFwO1xuICAgIG91dHB1dCA9IGlucHV0ID0gbnVsbDtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgcmV0dXJuIChvdXRwdXQgfHwgKG91dHB1dCA9IHBpZWNld2lzZShkb21haW4sIHJhbmdlLCBjbGFtcCA/IGRlaW50ZXJwb2xhdGVDbGFtcChkZWludGVycG9sYXRlKSA6IGRlaW50ZXJwb2xhdGUsIGludGVycG9sYXRlKSkpKCt4KTtcbiAgfVxuXG4gIHNjYWxlLmludmVydCA9IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4gKGlucHV0IHx8IChpbnB1dCA9IHBpZWNld2lzZShyYW5nZSwgZG9tYWluLCBkZWludGVycG9sYXRlTGluZWFyLCBjbGFtcCA/IHJlaW50ZXJwb2xhdGVDbGFtcChyZWludGVycG9sYXRlKSA6IHJlaW50ZXJwb2xhdGUpKSkoK3kpO1xuICB9O1xuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4gPSBtYXAuY2FsbChfLCBudW1iZXIpLCByZXNjYWxlKCkpIDogZG9tYWluLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBzbGljZS5jYWxsKF8pLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiByYW5nZSA9IHNsaWNlLmNhbGwoXyksIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVSb3VuZCwgcmVzY2FsZSgpO1xuICB9O1xuXG4gIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsYW1wID0gISFfLCByZXNjYWxlKCkpIDogY2xhbXA7XG4gIH07XG5cbiAgc2NhbGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW50ZXJwb2xhdGUgPSBfLCByZXNjYWxlKCkpIDogaW50ZXJwb2xhdGU7XG4gIH07XG5cbiAgcmV0dXJuIHJlc2NhbGUoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvY29udGludW91cy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi9uYW1lc3BhY2VcIjtcbmltcG9ydCB7eGh0bWx9IGZyb20gXCIuL25hbWVzcGFjZXNcIjtcblxuZnVuY3Rpb24gY3JlYXRvckluaGVyaXQobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRvY3VtZW50ID0gdGhpcy5vd25lckRvY3VtZW50LFxuICAgICAgICB1cmkgPSB0aGlzLm5hbWVzcGFjZVVSSTtcbiAgICByZXR1cm4gdXJpID09PSB4aHRtbCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubmFtZXNwYWNlVVJJID09PSB4aHRtbFxuICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSlcbiAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModXJpLCBuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRvckZpeGVkKGZ1bGxuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcbiAgcmV0dXJuIChmdWxsbmFtZS5sb2NhbFxuICAgICAgPyBjcmVhdG9yRml4ZWRcbiAgICAgIDogY3JlYXRvckluaGVyaXQpKGZ1bGxuYW1lKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIGV2ZW50KSB7XG4gIHZhciBzdmcgPSBub2RlLm93bmVyU1ZHRWxlbWVudCB8fCBub2RlO1xuXG4gIGlmIChzdmcuY3JlYXRlU1ZHUG9pbnQpIHtcbiAgICB2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICBwb2ludC54ID0gZXZlbnQuY2xpZW50WCwgcG9pbnQueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgcG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0obm9kZS5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuICAgIHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XG4gIH1cblxuICB2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiBbZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCAtIG5vZGUuY2xpZW50TGVmdCwgZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wIC0gbm9kZS5jbGllbnRUb3BdO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvcG9pbnQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgcCwgdmFsdWVvZikge1xuICBpZiAodmFsdWVvZiA9PSBudWxsKSB2YWx1ZW9mID0gbnVtYmVyO1xuICBpZiAoIShuID0gdmFsdWVzLmxlbmd0aCkpIHJldHVybjtcbiAgaWYgKChwID0gK3ApIDw9IDAgfHwgbiA8IDIpIHJldHVybiArdmFsdWVvZih2YWx1ZXNbMF0sIDAsIHZhbHVlcyk7XG4gIGlmIChwID49IDEpIHJldHVybiArdmFsdWVvZih2YWx1ZXNbbiAtIDFdLCBuIC0gMSwgdmFsdWVzKTtcbiAgdmFyIG4sXG4gICAgICBpID0gKG4gLSAxKSAqIHAsXG4gICAgICBpMCA9IE1hdGguZmxvb3IoaSksXG4gICAgICB2YWx1ZTAgPSArdmFsdWVvZih2YWx1ZXNbaTBdLCBpMCwgdmFsdWVzKSxcbiAgICAgIHZhbHVlMSA9ICt2YWx1ZW9mKHZhbHVlc1tpMCArIDFdLCBpMCArIDEsIHZhbHVlcyk7XG4gIHJldHVybiB2YWx1ZTAgKyAodmFsdWUxIC0gdmFsdWUwKSAqIChpIC0gaTApO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9xdWFudGlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciBwcmVmaXggPSBcIiRcIjtcblxuZnVuY3Rpb24gTWFwKCkge31cblxuTWFwLnByb3RvdHlwZSA9IG1hcC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBNYXAsXG4gIGhhczogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIChwcmVmaXggKyBrZXkpIGluIHRoaXM7XG4gIH0sXG4gIGdldDogZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXNbcHJlZml4ICsga2V5XTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgdGhpc1twcmVmaXggKyBrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgdmFyIHByb3BlcnR5ID0gcHJlZml4ICsga2V5O1xuICAgIHJldHVybiBwcm9wZXJ0eSBpbiB0aGlzICYmIGRlbGV0ZSB0aGlzW3Byb3BlcnR5XTtcbiAgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMpIGlmIChwcm9wZXJ0eVswXSA9PT0gcHJlZml4KSBkZWxldGUgdGhpc1twcm9wZXJ0eV07XG4gIH0sXG4gIGtleXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcykgaWYgKHByb3BlcnR5WzBdID09PSBwcmVmaXgpIGtleXMucHVzaChwcm9wZXJ0eS5zbGljZSgxKSk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH0sXG4gIHZhbHVlczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMpIGlmIChwcm9wZXJ0eVswXSA9PT0gcHJlZml4KSB2YWx1ZXMucHVzaCh0aGlzW3Byb3BlcnR5XSk7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfSxcbiAgZW50cmllczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVudHJpZXMgPSBbXTtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzKSBpZiAocHJvcGVydHlbMF0gPT09IHByZWZpeCkgZW50cmllcy5wdXNoKHtrZXk6IHByb3BlcnR5LnNsaWNlKDEpLCB2YWx1ZTogdGhpc1twcm9wZXJ0eV19KTtcbiAgICByZXR1cm4gZW50cmllcztcbiAgfSxcbiAgc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNpemUgPSAwO1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMpIGlmIChwcm9wZXJ0eVswXSA9PT0gcHJlZml4KSArK3NpemU7XG4gICAgcmV0dXJuIHNpemU7XG4gIH0sXG4gIGVtcHR5OiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiB0aGlzKSBpZiAocHJvcGVydHlbMF0gPT09IHByZWZpeCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBlYWNoOiBmdW5jdGlvbihmKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcykgaWYgKHByb3BlcnR5WzBdID09PSBwcmVmaXgpIGYodGhpc1twcm9wZXJ0eV0sIHByb3BlcnR5LnNsaWNlKDEpLCB0aGlzKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gbWFwKG9iamVjdCwgZikge1xuICB2YXIgbWFwID0gbmV3IE1hcDtcblxuICAvLyBDb3B5IGNvbnN0cnVjdG9yLlxuICBpZiAob2JqZWN0IGluc3RhbmNlb2YgTWFwKSBvYmplY3QuZWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7IG1hcC5zZXQoa2V5LCB2YWx1ZSk7IH0pO1xuXG4gIC8vIEluZGV4IGFycmF5IGJ5IG51bWVyaWMgaW5kZXggb3Igc3BlY2lmaWVkIGtleSBmdW5jdGlvbi5cbiAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgdmFyIGkgPSAtMSxcbiAgICAgICAgbiA9IG9iamVjdC5sZW5ndGgsXG4gICAgICAgIG87XG5cbiAgICBpZiAoZiA9PSBudWxsKSB3aGlsZSAoKytpIDwgbikgbWFwLnNldChpLCBvYmplY3RbaV0pO1xuICAgIGVsc2Ugd2hpbGUgKCsraSA8IG4pIG1hcC5zZXQoZihvID0gb2JqZWN0W2ldLCBpLCBvYmplY3QpLCBvKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgb2JqZWN0IHRvIG1hcC5cbiAgZWxzZSBpZiAob2JqZWN0KSBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBtYXAuc2V0KGtleSwgb2JqZWN0W2tleV0pO1xuXG4gIHJldHVybiBtYXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xsZWN0aW9uL3NyYy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3IoKSB7fVxuXG5leHBvcnQgdmFyIGRhcmtlciA9IDAuNztcbmV4cG9ydCB2YXIgYnJpZ2h0ZXIgPSAxIC8gZGFya2VyO1xuXG52YXIgcmVJID0gXCJcXFxccyooWystXT9cXFxcZCspXFxcXHMqXCIsXG4gICAgcmVOID0gXCJcXFxccyooWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPylcXFxccypcIixcbiAgICByZVAgPSBcIlxcXFxzKihbKy1dP1xcXFxkKlxcXFwuP1xcXFxkKyg/OltlRV1bKy1dP1xcXFxkKyk/KSVcXFxccypcIixcbiAgICByZUhleDMgPSAvXiMoWzAtOWEtZl17M30pJC8sXG4gICAgcmVIZXg2ID0gL14jKFswLTlhLWZdezZ9KSQvLFxuICAgIHJlUmdiSW50ZWdlciA9IG5ldyBSZWdFeHAoXCJecmdiXFxcXChcIiArIFtyZUksIHJlSSwgcmVJXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlUmdiUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJecmdiXFxcXChcIiArIFtyZVAsIHJlUCwgcmVQXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlUmdiYUludGVnZXIgPSBuZXcgUmVnRXhwKFwiXnJnYmFcXFxcKFwiICsgW3JlSSwgcmVJLCByZUksIHJlTl0gKyBcIlxcXFwpJFwiKSxcbiAgICByZVJnYmFQZXJjZW50ID0gbmV3IFJlZ0V4cChcIl5yZ2JhXFxcXChcIiArIFtyZVAsIHJlUCwgcmVQLCByZU5dICsgXCJcXFxcKSRcIiksXG4gICAgcmVIc2xQZXJjZW50ID0gbmV3IFJlZ0V4cChcIl5oc2xcXFxcKFwiICsgW3JlTiwgcmVQLCByZVBdICsgXCJcXFxcKSRcIiksXG4gICAgcmVIc2xhUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJeaHNsYVxcXFwoXCIgKyBbcmVOLCByZVAsIHJlUCwgcmVOXSArIFwiXFxcXCkkXCIpO1xuXG52YXIgbmFtZWQgPSB7XG4gIGFsaWNlYmx1ZTogMHhmMGY4ZmYsXG4gIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXG4gIGFxdWE6IDB4MDBmZmZmLFxuICBhcXVhbWFyaW5lOiAweDdmZmZkNCxcbiAgYXp1cmU6IDB4ZjBmZmZmLFxuICBiZWlnZTogMHhmNWY1ZGMsXG4gIGJpc3F1ZTogMHhmZmU0YzQsXG4gIGJsYWNrOiAweDAwMDAwMCxcbiAgYmxhbmNoZWRhbG1vbmQ6IDB4ZmZlYmNkLFxuICBibHVlOiAweDAwMDBmZixcbiAgYmx1ZXZpb2xldDogMHg4YTJiZTIsXG4gIGJyb3duOiAweGE1MmEyYSxcbiAgYnVybHl3b29kOiAweGRlYjg4NyxcbiAgY2FkZXRibHVlOiAweDVmOWVhMCxcbiAgY2hhcnRyZXVzZTogMHg3ZmZmMDAsXG4gIGNob2NvbGF0ZTogMHhkMjY5MWUsXG4gIGNvcmFsOiAweGZmN2Y1MCxcbiAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkLFxuICBjb3Juc2lsazogMHhmZmY4ZGMsXG4gIGNyaW1zb246IDB4ZGMxNDNjLFxuICBjeWFuOiAweDAwZmZmZixcbiAgZGFya2JsdWU6IDB4MDAwMDhiLFxuICBkYXJrY3lhbjogMHgwMDhiOGIsXG4gIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiLFxuICBkYXJrZ3JheTogMHhhOWE5YTksXG4gIGRhcmtncmVlbjogMHgwMDY0MDAsXG4gIGRhcmtncmV5OiAweGE5YTlhOSxcbiAgZGFya2toYWtpOiAweGJkYjc2YixcbiAgZGFya21hZ2VudGE6IDB4OGIwMDhiLFxuICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmYsXG4gIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwLFxuICBkYXJrb3JjaGlkOiAweDk5MzJjYyxcbiAgZGFya3JlZDogMHg4YjAwMDAsXG4gIGRhcmtzYWxtb246IDB4ZTk5NjdhLFxuICBkYXJrc2VhZ3JlZW46IDB4OGZiYzhmLFxuICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YixcbiAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGYsXG4gIGRhcmtzbGF0ZWdyZXk6IDB4MmY0ZjRmLFxuICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMSxcbiAgZGFya3Zpb2xldDogMHg5NDAwZDMsXG4gIGRlZXBwaW5rOiAweGZmMTQ5MyxcbiAgZGVlcHNreWJsdWU6IDB4MDBiZmZmLFxuICBkaW1ncmF5OiAweDY5Njk2OSxcbiAgZGltZ3JleTogMHg2OTY5NjksXG4gIGRvZGdlcmJsdWU6IDB4MWU5MGZmLFxuICBmaXJlYnJpY2s6IDB4YjIyMjIyLFxuICBmbG9yYWx3aGl0ZTogMHhmZmZhZjAsXG4gIGZvcmVzdGdyZWVuOiAweDIyOGIyMixcbiAgZnVjaHNpYTogMHhmZjAwZmYsXG4gIGdhaW5zYm9ybzogMHhkY2RjZGMsXG4gIGdob3N0d2hpdGU6IDB4ZjhmOGZmLFxuICBnb2xkOiAweGZmZDcwMCxcbiAgZ29sZGVucm9kOiAweGRhYTUyMCxcbiAgZ3JheTogMHg4MDgwODAsXG4gIGdyZWVuOiAweDAwODAwMCxcbiAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxuICBncmV5OiAweDgwODA4MCxcbiAgaG9uZXlkZXc6IDB4ZjBmZmYwLFxuICBob3RwaW5rOiAweGZmNjliNCxcbiAgaW5kaWFucmVkOiAweGNkNWM1YyxcbiAgaW5kaWdvOiAweDRiMDA4MixcbiAgaXZvcnk6IDB4ZmZmZmYwLFxuICBraGFraTogMHhmMGU2OGMsXG4gIGxhdmVuZGVyOiAweGU2ZTZmYSxcbiAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXG4gIGxhd25ncmVlbjogMHg3Y2ZjMDAsXG4gIGxlbW9uY2hpZmZvbjogMHhmZmZhY2QsXG4gIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXG4gIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwLFxuICBsaWdodGN5YW46IDB4ZTBmZmZmLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXG4gIGxpZ2h0Z3JheTogMHhkM2QzZDMsXG4gIGxpZ2h0Z3JlZW46IDB4OTBlZTkwLFxuICBsaWdodGdyZXk6IDB4ZDNkM2QzLFxuICBsaWdodHBpbms6IDB4ZmZiNmMxLFxuICBsaWdodHNhbG1vbjogMHhmZmEwN2EsXG4gIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxuICBsaWdodHNreWJsdWU6IDB4ODdjZWZhLFxuICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTksXG4gIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcbiAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlLFxuICBsaWdodHllbGxvdzogMHhmZmZmZTAsXG4gIGxpbWU6IDB4MDBmZjAwLFxuICBsaW1lZ3JlZW46IDB4MzJjZDMyLFxuICBsaW5lbjogMHhmYWYwZTYsXG4gIG1hZ2VudGE6IDB4ZmYwMGZmLFxuICBtYXJvb246IDB4ODAwMDAwLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYSxcbiAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXG4gIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDMsXG4gIG1lZGl1bXB1cnBsZTogMHg5MzcwZGIsXG4gIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcbiAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZSxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhLFxuICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxuICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1LFxuICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwLFxuICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxuICBtaXN0eXJvc2U6IDB4ZmZlNGUxLFxuICBtb2NjYXNpbjogMHhmZmU0YjUsXG4gIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcbiAgbmF2eTogMHgwMDAwODAsXG4gIG9sZGxhY2U6IDB4ZmRmNWU2LFxuICBvbGl2ZTogMHg4MDgwMDAsXG4gIG9saXZlZHJhYjogMHg2YjhlMjMsXG4gIG9yYW5nZTogMHhmZmE1MDAsXG4gIG9yYW5nZXJlZDogMHhmZjQ1MDAsXG4gIG9yY2hpZDogMHhkYTcwZDYsXG4gIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhLFxuICBwYWxlZ3JlZW46IDB4OThmYjk4LFxuICBwYWxldHVycXVvaXNlOiAweGFmZWVlZSxcbiAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTMsXG4gIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxuICBwZWFjaHB1ZmY6IDB4ZmZkYWI5LFxuICBwZXJ1OiAweGNkODUzZixcbiAgcGluazogMHhmZmMwY2IsXG4gIHBsdW06IDB4ZGRhMGRkLFxuICBwb3dkZXJibHVlOiAweGIwZTBlNixcbiAgcHVycGxlOiAweDgwMDA4MCxcbiAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTksXG4gIHJlZDogMHhmZjAwMDAsXG4gIHJvc3licm93bjogMHhiYzhmOGYsXG4gIHJveWFsYmx1ZTogMHg0MTY5ZTEsXG4gIHNhZGRsZWJyb3duOiAweDhiNDUxMyxcbiAgc2FsbW9uOiAweGZhODA3MixcbiAgc2FuZHlicm93bjogMHhmNGE0NjAsXG4gIHNlYWdyZWVuOiAweDJlOGI1NyxcbiAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxuICBzaWVubmE6IDB4YTA1MjJkLFxuICBzaWx2ZXI6IDB4YzBjMGMwLFxuICBza3libHVlOiAweDg3Y2VlYixcbiAgc2xhdGVibHVlOiAweDZhNWFjZCxcbiAgc2xhdGVncmF5OiAweDcwODA5MCxcbiAgc2xhdGVncmV5OiAweDcwODA5MCxcbiAgc25vdzogMHhmZmZhZmEsXG4gIHNwcmluZ2dyZWVuOiAweDAwZmY3ZixcbiAgc3RlZWxibHVlOiAweDQ2ODJiNCxcbiAgdGFuOiAweGQyYjQ4YyxcbiAgdGVhbDogMHgwMDgwODAsXG4gIHRoaXN0bGU6IDB4ZDhiZmQ4LFxuICB0b21hdG86IDB4ZmY2MzQ3LFxuICB0dXJxdW9pc2U6IDB4NDBlMGQwLFxuICB2aW9sZXQ6IDB4ZWU4MmVlLFxuICB3aGVhdDogMHhmNWRlYjMsXG4gIHdoaXRlOiAweGZmZmZmZixcbiAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXG4gIHllbGxvdzogMHhmZmZmMDAsXG4gIHllbGxvd2dyZWVuOiAweDlhY2QzMlxufTtcblxuZGVmaW5lKENvbG9yLCBjb2xvciwge1xuICBkaXNwbGF5YWJsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmdiKCkuZGlzcGxheWFibGUoKTtcbiAgfSxcbiAgaGV4OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZ2IoKS5oZXgoKTtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJnYigpICsgXCJcIjtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yKGZvcm1hdCkge1xuICB2YXIgbTtcbiAgZm9ybWF0ID0gKGZvcm1hdCArIFwiXCIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gKG0gPSByZUhleDMuZXhlYyhmb3JtYXQpKSA/IChtID0gcGFyc2VJbnQobVsxXSwgMTYpLCBuZXcgUmdiKChtID4+IDggJiAweGYpIHwgKG0gPj4gNCAmIDB4MGYwKSwgKG0gPj4gNCAmIDB4ZikgfCAobSAmIDB4ZjApLCAoKG0gJiAweGYpIDw8IDQpIHwgKG0gJiAweGYpLCAxKSkgLy8gI2YwMFxuICAgICAgOiAobSA9IHJlSGV4Ni5leGVjKGZvcm1hdCkpID8gcmdibihwYXJzZUludChtWzFdLCAxNikpIC8vICNmZjAwMDBcbiAgICAgIDogKG0gPSByZVJnYkludGVnZXIuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSwgbVsyXSwgbVszXSwgMSkgLy8gcmdiKDI1NSwgMCwgMClcbiAgICAgIDogKG0gPSByZVJnYlBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IG5ldyBSZ2IobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgMSkgLy8gcmdiKDEwMCUsIDAlLCAwJSlcbiAgICAgIDogKG0gPSByZVJnYmFJbnRlZ2VyLmV4ZWMoZm9ybWF0KSkgPyByZ2JhKG1bMV0sIG1bMl0sIG1bM10sIG1bNF0pIC8vIHJnYmEoMjU1LCAwLCAwLCAxKVxuICAgICAgOiAobSA9IHJlUmdiYVBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSAqIDI1NSAvIDEwMCwgbVsyXSAqIDI1NSAvIDEwMCwgbVszXSAqIDI1NSAvIDEwMCwgbVs0XSkgLy8gcmdiKDEwMCUsIDAlLCAwJSwgMSlcbiAgICAgIDogKG0gPSByZUhzbFBlcmNlbnQuZXhlYyhmb3JtYXQpKSA/IGhzbGEobVsxXSwgbVsyXSAvIDEwMCwgbVszXSAvIDEwMCwgMSkgLy8gaHNsKDEyMCwgNTAlLCA1MCUpXG4gICAgICA6IChtID0gcmVIc2xhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCBtWzRdKSAvLyBoc2xhKDEyMCwgNTAlLCA1MCUsIDEpXG4gICAgICA6IG5hbWVkLmhhc093blByb3BlcnR5KGZvcm1hdCkgPyByZ2JuKG5hbWVkW2Zvcm1hdF0pXG4gICAgICA6IGZvcm1hdCA9PT0gXCJ0cmFuc3BhcmVudFwiID8gbmV3IFJnYihOYU4sIE5hTiwgTmFOLCAwKVxuICAgICAgOiBudWxsO1xufVxuXG5mdW5jdGlvbiByZ2JuKG4pIHtcbiAgcmV0dXJuIG5ldyBSZ2IobiA+PiAxNiAmIDB4ZmYsIG4gPj4gOCAmIDB4ZmYsIG4gJiAweGZmLCAxKTtcbn1cblxuZnVuY3Rpb24gcmdiYShyLCBnLCBiLCBhKSB7XG4gIGlmIChhIDw9IDApIHIgPSBnID0gYiA9IE5hTjtcbiAgcmV0dXJuIG5ldyBSZ2IociwgZywgYiwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JDb252ZXJ0KG8pIHtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgUmdiO1xuICBvID0gby5yZ2IoKTtcbiAgcmV0dXJuIG5ldyBSZ2Ioby5yLCBvLmcsIG8uYiwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYihyLCBnLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gcmdiQ29udmVydChyKSA6IG5ldyBSZ2IociwgZywgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5yID0gK3I7XG4gIHRoaXMuZyA9ICtnO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShSZ2IsIHJnYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGJyaWdodGVyIDogTWF0aC5wb3coYnJpZ2h0ZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgUmdiKHRoaXMuciAqIGssIHRoaXMuZyAqIGssIHRoaXMuYiAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGRpc3BsYXlhYmxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKDAgPD0gdGhpcy5yICYmIHRoaXMuciA8PSAyNTUpXG4gICAgICAgICYmICgwIDw9IHRoaXMuZyAmJiB0aGlzLmcgPD0gMjU1KVxuICAgICAgICAmJiAoMCA8PSB0aGlzLmIgJiYgdGhpcy5iIDw9IDI1NSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5vcGFjaXR5ICYmIHRoaXMub3BhY2l0eSA8PSAxKTtcbiAgfSxcbiAgaGV4OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCIjXCIgKyBoZXgodGhpcy5yKSArIGhleCh0aGlzLmcpICsgaGV4KHRoaXMuYik7XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IHRoaXMub3BhY2l0eTsgYSA9IGlzTmFOKGEpID8gMSA6IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGEpKTtcbiAgICByZXR1cm4gKGEgPT09IDEgPyBcInJnYihcIiA6IFwicmdiYShcIilcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5yKSB8fCAwKSkgKyBcIiwgXCJcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5nKSB8fCAwKSkgKyBcIiwgXCJcbiAgICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5iKSB8fCAwKSlcbiAgICAgICAgKyAoYSA9PT0gMSA/IFwiKVwiIDogXCIsIFwiICsgYSArIFwiKVwiKTtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBoZXgodmFsdWUpIHtcbiAgdmFsdWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodmFsdWUpIHx8IDApKTtcbiAgcmV0dXJuICh2YWx1ZSA8IDE2ID8gXCIwXCIgOiBcIlwiKSArIHZhbHVlLnRvU3RyaW5nKDE2KTtcbn1cblxuZnVuY3Rpb24gaHNsYShoLCBzLCBsLCBhKSB7XG4gIGlmIChhIDw9IDApIGggPSBzID0gbCA9IE5hTjtcbiAgZWxzZSBpZiAobCA8PSAwIHx8IGwgPj0gMSkgaCA9IHMgPSBOYU47XG4gIGVsc2UgaWYgKHMgPD0gMCkgaCA9IE5hTjtcbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoc2xDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBuZXcgSHNsKG8uaCwgby5zLCBvLmwsIG8ub3BhY2l0eSk7XG4gIGlmICghKG8gaW5zdGFuY2VvZiBDb2xvcikpIG8gPSBjb2xvcihvKTtcbiAgaWYgKCFvKSByZXR1cm4gbmV3IEhzbDtcbiAgaWYgKG8gaW5zdGFuY2VvZiBIc2wpIHJldHVybiBvO1xuICBvID0gby5yZ2IoKTtcbiAgdmFyIHIgPSBvLnIgLyAyNTUsXG4gICAgICBnID0gby5nIC8gMjU1LFxuICAgICAgYiA9IG8uYiAvIDI1NSxcbiAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpLFxuICAgICAgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICBoID0gTmFOLFxuICAgICAgcyA9IG1heCAtIG1pbixcbiAgICAgIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gIGlmIChzKSB7XG4gICAgaWYgKHIgPT09IG1heCkgaCA9IChnIC0gYikgLyBzICsgKGcgPCBiKSAqIDY7XG4gICAgZWxzZSBpZiAoZyA9PT0gbWF4KSBoID0gKGIgLSByKSAvIHMgKyAyO1xuICAgIGVsc2UgaCA9IChyIC0gZykgLyBzICsgNDtcbiAgICBzIC89IGwgPCAwLjUgPyBtYXggKyBtaW4gOiAyIC0gbWF4IC0gbWluO1xuICAgIGggKj0gNjA7XG4gIH0gZWxzZSB7XG4gICAgcyA9IGwgPiAwICYmIGwgPCAxID8gMCA6IGg7XG4gIH1cbiAgcmV0dXJuIG5ldyBIc2woaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaHNsQ29udmVydChoKSA6IG5ldyBIc2woaCwgcywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5mdW5jdGlvbiBIc2woaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEhzbCwgaHNsLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgSHNsKHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0gdGhpcy5oICUgMzYwICsgKHRoaXMuaCA8IDApICogMzYwLFxuICAgICAgICBzID0gaXNOYU4oaCkgfHwgaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMsXG4gICAgICAgIGwgPSB0aGlzLmwsXG4gICAgICAgIG0yID0gbCArIChsIDwgMC41ID8gbCA6IDEgLSBsKSAqIHMsXG4gICAgICAgIG0xID0gMiAqIGwgLSBtMjtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIGhzbDJyZ2IoaCA+PSAyNDAgPyBoIC0gMjQwIDogaCArIDEyMCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCwgbTEsIG0yKSxcbiAgICAgIGhzbDJyZ2IoaCA8IDEyMCA/IGggKyAyNDAgOiBoIC0gMTIwLCBtMSwgbTIpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfSxcbiAgZGlzcGxheWFibGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoMCA8PSB0aGlzLnMgJiYgdGhpcy5zIDw9IDEgfHwgaXNOYU4odGhpcy5zKSlcbiAgICAgICAgJiYgKDAgPD0gdGhpcy5sICYmIHRoaXMubCA8PSAxKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9XG59KSk7XG5cbi8qIEZyb20gRnZEIDEzLjM3LCBDU1MgQ29sb3IgTW9kdWxlIExldmVsIDMgKi9cbmZ1bmN0aW9uIGhzbDJyZ2IoaCwgbTEsIG0yKSB7XG4gIHJldHVybiAoaCA8IDYwID8gbTEgKyAobTIgLSBtMSkgKiBoIC8gNjBcbiAgICAgIDogaCA8IDE4MCA/IG0yXG4gICAgICA6IGggPCAyNDAgPyBtMSArIChtMiAtIG0xKSAqICgyNDAgLSBoKSAvIDYwXG4gICAgICA6IG0xKSAqIDI1NTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xvci9zcmMvY29sb3IuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnN0cnVjdG9yLCBmYWN0b3J5LCBwcm90b3R5cGUpIHtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0gZmFjdG9yeS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKHBhcmVudCwgZGVmaW5pdGlvbikge1xuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQucHJvdG90eXBlKTtcbiAgZm9yICh2YXIga2V5IGluIGRlZmluaXRpb24pIHByb3RvdHlwZVtrZXldID0gZGVmaW5pdGlvbltrZXldO1xuICByZXR1cm4gcHJvdG90eXBlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWNvbG9yL3NyYy9kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBFT0wgPSB7fSxcbiAgICBFT0YgPSB7fSxcbiAgICBRVU9URSA9IDM0LFxuICAgIE5FV0xJTkUgPSAxMCxcbiAgICBSRVRVUk4gPSAxMztcblxuZnVuY3Rpb24gb2JqZWN0Q29udmVydGVyKGNvbHVtbnMpIHtcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbihcImRcIiwgXCJyZXR1cm4ge1wiICsgY29sdW1ucy5tYXAoZnVuY3Rpb24obmFtZSwgaSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShuYW1lKSArIFwiOiBkW1wiICsgaSArIFwiXVwiO1xuICB9KS5qb2luKFwiLFwiKSArIFwifVwiKTtcbn1cblxuZnVuY3Rpb24gY3VzdG9tQ29udmVydGVyKGNvbHVtbnMsIGYpIHtcbiAgdmFyIG9iamVjdCA9IG9iamVjdENvbnZlcnRlcihjb2x1bW5zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJvdywgaSkge1xuICAgIHJldHVybiBmKG9iamVjdChyb3cpLCBpLCBjb2x1bW5zKTtcbiAgfTtcbn1cblxuLy8gQ29tcHV0ZSB1bmlxdWUgY29sdW1ucyBpbiBvcmRlciBvZiBkaXNjb3ZlcnkuXG5mdW5jdGlvbiBpbmZlckNvbHVtbnMocm93cykge1xuICB2YXIgY29sdW1uU2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIGNvbHVtbnMgPSBbXTtcblxuICByb3dzLmZvckVhY2goZnVuY3Rpb24ocm93KSB7XG4gICAgZm9yICh2YXIgY29sdW1uIGluIHJvdykge1xuICAgICAgaWYgKCEoY29sdW1uIGluIGNvbHVtblNldCkpIHtcbiAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtblNldFtjb2x1bW5dID0gY29sdW1uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb2x1bW5zO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkZWxpbWl0ZXIpIHtcbiAgdmFyIHJlRm9ybWF0ID0gbmV3IFJlZ0V4cChcIltcXFwiXCIgKyBkZWxpbWl0ZXIgKyBcIlxcblxccl1cIiksXG4gICAgICBERUxJTUlURVIgPSBkZWxpbWl0ZXIuY2hhckNvZGVBdCgwKTtcblxuICBmdW5jdGlvbiBwYXJzZSh0ZXh0LCBmKSB7XG4gICAgdmFyIGNvbnZlcnQsIGNvbHVtbnMsIHJvd3MgPSBwYXJzZVJvd3ModGV4dCwgZnVuY3Rpb24ocm93LCBpKSB7XG4gICAgICBpZiAoY29udmVydCkgcmV0dXJuIGNvbnZlcnQocm93LCBpIC0gMSk7XG4gICAgICBjb2x1bW5zID0gcm93LCBjb252ZXJ0ID0gZiA/IGN1c3RvbUNvbnZlcnRlcihyb3csIGYpIDogb2JqZWN0Q29udmVydGVyKHJvdyk7XG4gICAgfSk7XG4gICAgcm93cy5jb2x1bW5zID0gY29sdW1ucyB8fCBbXTtcbiAgICByZXR1cm4gcm93cztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlUm93cyh0ZXh0LCBmKSB7XG4gICAgdmFyIHJvd3MgPSBbXSwgLy8gb3V0cHV0IHJvd3NcbiAgICAgICAgTiA9IHRleHQubGVuZ3RoLFxuICAgICAgICBJID0gMCwgLy8gY3VycmVudCBjaGFyYWN0ZXIgaW5kZXhcbiAgICAgICAgbiA9IDAsIC8vIGN1cnJlbnQgbGluZSBudW1iZXJcbiAgICAgICAgdCwgLy8gY3VycmVudCB0b2tlblxuICAgICAgICBlb2YgPSBOIDw9IDAsIC8vIGN1cnJlbnQgdG9rZW4gZm9sbG93ZWQgYnkgRU9GP1xuICAgICAgICBlb2wgPSBmYWxzZTsgLy8gY3VycmVudCB0b2tlbiBmb2xsb3dlZCBieSBFT0w/XG5cbiAgICAvLyBTdHJpcCB0aGUgdHJhaWxpbmcgbmV3bGluZS5cbiAgICBpZiAodGV4dC5jaGFyQ29kZUF0KE4gLSAxKSA9PT0gTkVXTElORSkgLS1OO1xuICAgIGlmICh0ZXh0LmNoYXJDb2RlQXQoTiAtIDEpID09PSBSRVRVUk4pIC0tTjtcblxuICAgIGZ1bmN0aW9uIHRva2VuKCkge1xuICAgICAgaWYgKGVvZikgcmV0dXJuIEVPRjtcbiAgICAgIGlmIChlb2wpIHJldHVybiBlb2wgPSBmYWxzZSwgRU9MO1xuXG4gICAgICAvLyBVbmVzY2FwZSBxdW90ZXMuXG4gICAgICB2YXIgaSwgaiA9IEksIGM7XG4gICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KGopID09PSBRVU9URSkge1xuICAgICAgICB3aGlsZSAoSSsrIDwgTiAmJiB0ZXh0LmNoYXJDb2RlQXQoSSkgIT09IFFVT1RFIHx8IHRleHQuY2hhckNvZGVBdCgrK0kpID09PSBRVU9URSk7XG4gICAgICAgIGlmICgoaSA9IEkpID49IE4pIGVvZiA9IHRydWU7XG4gICAgICAgIGVsc2UgaWYgKChjID0gdGV4dC5jaGFyQ29kZUF0KEkrKykpID09PSBORVdMSU5FKSBlb2wgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmIChjID09PSBSRVRVUk4pIHsgZW9sID0gdHJ1ZTsgaWYgKHRleHQuY2hhckNvZGVBdChJKSA9PT0gTkVXTElORSkgKytJOyB9XG4gICAgICAgIHJldHVybiB0ZXh0LnNsaWNlKGogKyAxLCBpIC0gMSkucmVwbGFjZSgvXCJcIi9nLCBcIlxcXCJcIik7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpbmQgbmV4dCBkZWxpbWl0ZXIgb3IgbmV3bGluZS5cbiAgICAgIHdoaWxlIChJIDwgTikge1xuICAgICAgICBpZiAoKGMgPSB0ZXh0LmNoYXJDb2RlQXQoaSA9IEkrKykpID09PSBORVdMSU5FKSBlb2wgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmIChjID09PSBSRVRVUk4pIHsgZW9sID0gdHJ1ZTsgaWYgKHRleHQuY2hhckNvZGVBdChJKSA9PT0gTkVXTElORSkgKytJOyB9XG4gICAgICAgIGVsc2UgaWYgKGMgIT09IERFTElNSVRFUikgY29udGludWU7XG4gICAgICAgIHJldHVybiB0ZXh0LnNsaWNlKGosIGkpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gbGFzdCB0b2tlbiBiZWZvcmUgRU9GLlxuICAgICAgcmV0dXJuIGVvZiA9IHRydWUsIHRleHQuc2xpY2UoaiwgTik7XG4gICAgfVxuXG4gICAgd2hpbGUgKCh0ID0gdG9rZW4oKSkgIT09IEVPRikge1xuICAgICAgdmFyIHJvdyA9IFtdO1xuICAgICAgd2hpbGUgKHQgIT09IEVPTCAmJiB0ICE9PSBFT0YpIHJvdy5wdXNoKHQpLCB0ID0gdG9rZW4oKTtcbiAgICAgIGlmIChmICYmIChyb3cgPSBmKHJvdywgbisrKSkgPT0gbnVsbCkgY29udGludWU7XG4gICAgICByb3dzLnB1c2gocm93KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm93cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdChyb3dzLCBjb2x1bW5zKSB7XG4gICAgaWYgKGNvbHVtbnMgPT0gbnVsbCkgY29sdW1ucyA9IGluZmVyQ29sdW1ucyhyb3dzKTtcbiAgICByZXR1cm4gW2NvbHVtbnMubWFwKGZvcm1hdFZhbHVlKS5qb2luKGRlbGltaXRlcildLmNvbmNhdChyb3dzLm1hcChmdW5jdGlvbihyb3cpIHtcbiAgICAgIHJldHVybiBjb2x1bW5zLm1hcChmdW5jdGlvbihjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFZhbHVlKHJvd1tjb2x1bW5dKTtcbiAgICAgIH0pLmpvaW4oZGVsaW1pdGVyKTtcbiAgICB9KSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFJvd3Mocm93cykge1xuICAgIHJldHVybiByb3dzLm1hcChmb3JtYXRSb3cpLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRSb3cocm93KSB7XG4gICAgcmV0dXJuIHJvdy5tYXAoZm9ybWF0VmFsdWUpLmpvaW4oZGVsaW1pdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFZhbHVlKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dCA9PSBudWxsID8gXCJcIlxuICAgICAgICA6IHJlRm9ybWF0LnRlc3QodGV4dCArPSBcIlwiKSA/IFwiXFxcIlwiICsgdGV4dC5yZXBsYWNlKC9cIi9nLCBcIlxcXCJcXFwiXCIpICsgXCJcXFwiXCJcbiAgICAgICAgOiB0ZXh0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXJzZTogcGFyc2UsXG4gICAgcGFyc2VSb3dzOiBwYXJzZVJvd3MsXG4gICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgZm9ybWF0Um93czogZm9ybWF0Um93c1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWRzdi9zcmMvZHN2LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiByZXNwb25zZVRleHQocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBmZXRjaChpbnB1dCwgaW5pdCkudGhlbihyZXNwb25zZVRleHQpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZldGNoL3NyYy90ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb21wdXRlcyB0aGUgZGVjaW1hbCBjb2VmZmljaWVudCBhbmQgZXhwb25lbnQgb2YgdGhlIHNwZWNpZmllZCBudW1iZXIgeCB3aXRoXG4vLyBzaWduaWZpY2FudCBkaWdpdHMgcCwgd2hlcmUgeCBpcyBwb3NpdGl2ZSBhbmQgcCBpcyBpbiBbMSwgMjFdIG9yIHVuZGVmaW5lZC5cbi8vIEZvciBleGFtcGxlLCBmb3JtYXREZWNpbWFsKDEuMjMpIHJldHVybnMgW1wiMTIzXCIsIDBdLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICBpZiAoKGkgPSAoeCA9IHAgPyB4LnRvRXhwb25lbnRpYWwocCAtIDEpIDogeC50b0V4cG9uZW50aWFsKCkpLmluZGV4T2YoXCJlXCIpKSA8IDApIHJldHVybiBudWxsOyAvLyBOYU4sIMKxSW5maW5pdHlcbiAgdmFyIGksIGNvZWZmaWNpZW50ID0geC5zbGljZSgwLCBpKTtcblxuICAvLyBUaGUgc3RyaW5nIHJldHVybmVkIGJ5IHRvRXhwb25lbnRpYWwgZWl0aGVyIGhhcyB0aGUgZm9ybSBcXGRcXC5cXGQrZVstK11cXGQrXG4gIC8vIChlLmcuLCAxLjJlKzMpIG9yIHRoZSBmb3JtIFxcZGVbLStdXFxkKyAoZS5nLiwgMWUrMykuXG4gIHJldHVybiBbXG4gICAgY29lZmZpY2llbnQubGVuZ3RoID4gMSA/IGNvZWZmaWNpZW50WzBdICsgY29lZmZpY2llbnQuc2xpY2UoMikgOiBjb2VmZmljaWVudCxcbiAgICAreC5zbGljZShpICsgMSlcbiAgXTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdERlY2ltYWwuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZX0gZnJvbSBcIi4vc3JjL3ZhbHVlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVBcnJheX0gZnJvbSBcIi4vc3JjL2FycmF5XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVCYXNpc30gZnJvbSBcIi4vc3JjL2Jhc2lzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVCYXNpc0Nsb3NlZH0gZnJvbSBcIi4vc3JjL2Jhc2lzQ2xvc2VkXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVEYXRlfSBmcm9tIFwiLi9zcmMvZGF0ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlTnVtYmVyfSBmcm9tIFwiLi9zcmMvbnVtYmVyXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVPYmplY3R9IGZyb20gXCIuL3NyYy9vYmplY3RcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZVJvdW5kfSBmcm9tIFwiLi9zcmMvcm91bmRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZVN0cmluZ30gZnJvbSBcIi4vc3JjL3N0cmluZ1wiO1xuZXhwb3J0IHtpbnRlcnBvbGF0ZVRyYW5zZm9ybUNzcywgaW50ZXJwb2xhdGVUcmFuc2Zvcm1Tdmd9IGZyb20gXCIuL3NyYy90cmFuc2Zvcm0vaW5kZXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZVpvb219IGZyb20gXCIuL3NyYy96b29tXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVSZ2IsIHJnYkJhc2lzIGFzIGludGVycG9sYXRlUmdiQmFzaXMsIHJnYkJhc2lzQ2xvc2VkIGFzIGludGVycG9sYXRlUmdiQmFzaXNDbG9zZWR9IGZyb20gXCIuL3NyYy9yZ2JcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUhzbCwgaHNsTG9uZyBhcyBpbnRlcnBvbGF0ZUhzbExvbmd9IGZyb20gXCIuL3NyYy9oc2xcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUxhYn0gZnJvbSBcIi4vc3JjL2xhYlwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlSGNsLCBoY2xMb25nIGFzIGludGVycG9sYXRlSGNsTG9uZ30gZnJvbSBcIi4vc3JjL2hjbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQ3ViZWhlbGl4LCBjdWJlaGVsaXhMb25nIGFzIGludGVycG9sYXRlQ3ViZWhlbGl4TG9uZ30gZnJvbSBcIi4vc3JjL2N1YmVoZWxpeFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBpZWNld2lzZX0gZnJvbSBcIi4vc3JjL3BpZWNld2lzZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHF1YW50aXplfSBmcm9tIFwiLi9zcmMvcXVhbnRpemVcIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGJhc2lzKHQxLCB2MCwgdjEsIHYyLCB2Mykge1xuICB2YXIgdDIgPSB0MSAqIHQxLCB0MyA9IHQyICogdDE7XG4gIHJldHVybiAoKDEgLSAzICogdDEgKyAzICogdDIgLSB0MykgKiB2MFxuICAgICAgKyAoNCAtIDYgKiB0MiArIDMgKiB0MykgKiB2MVxuICAgICAgKyAoMSArIDMgKiB0MSArIDMgKiB0MiAtIDMgKiB0MykgKiB2MlxuICAgICAgKyB0MyAqIHYzKSAvIDY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gdCA8PSAwID8gKHQgPSAwKSA6IHQgPj0gMSA/ICh0ID0gMSwgbiAtIDEpIDogTWF0aC5mbG9vcih0ICogbiksXG4gICAgICAgIHYxID0gdmFsdWVzW2ldLFxuICAgICAgICB2MiA9IHZhbHVlc1tpICsgMV0sXG4gICAgICAgIHYwID0gaSA+IDAgPyB2YWx1ZXNbaSAtIDFdIDogMiAqIHYxIC0gdjIsXG4gICAgICAgIHYzID0gaSA8IG4gLSAxID8gdmFsdWVzW2kgKyAyXSA6IDIgKiB2MiAtIHYxO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvYmFzaXMuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Y29sb3J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IHJnYiBmcm9tIFwiLi9yZ2JcIjtcbmltcG9ydCBhcnJheSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IGRhdGUgZnJvbSBcIi4vZGF0ZVwiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcbmltcG9ydCBvYmplY3QgZnJvbSBcIi4vb2JqZWN0XCI7XG5pbXBvcnQgc3RyaW5nIGZyb20gXCIuL3N0cmluZ1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIHQgPSB0eXBlb2YgYiwgYztcbiAgcmV0dXJuIGIgPT0gbnVsbCB8fCB0ID09PSBcImJvb2xlYW5cIiA/IGNvbnN0YW50KGIpXG4gICAgICA6ICh0ID09PSBcIm51bWJlclwiID8gbnVtYmVyXG4gICAgICA6IHQgPT09IFwic3RyaW5nXCIgPyAoKGMgPSBjb2xvcihiKSkgPyAoYiA9IGMsIHJnYikgOiBzdHJpbmcpXG4gICAgICA6IGIgaW5zdGFuY2VvZiBjb2xvciA/IHJnYlxuICAgICAgOiBiIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGVcbiAgICAgIDogQXJyYXkuaXNBcnJheShiKSA/IGFycmF5XG4gICAgICA6IHR5cGVvZiBiLnZhbHVlT2YgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgYi50b1N0cmluZyAhPT0gXCJmdW5jdGlvblwiIHx8IGlzTmFOKGIpID8gb2JqZWN0XG4gICAgICA6IG51bWJlcikoYSwgYik7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL3ZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvY29uc3RhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBuYW1lc3BhY2VzIGZyb20gXCIuL25hbWVzcGFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgcHJlZml4ID0gbmFtZSArPSBcIlwiLCBpID0gcHJlZml4LmluZGV4T2YoXCI6XCIpO1xuICBpZiAoaSA+PSAwICYmIChwcmVmaXggPSBuYW1lLnNsaWNlKDAsIGkpKSAhPT0gXCJ4bWxuc1wiKSBuYW1lID0gbmFtZS5zbGljZShpICsgMSk7XG4gIHJldHVybiBuYW1lc3BhY2VzLmhhc093blByb3BlcnR5KHByZWZpeCkgPyB7c3BhY2U6IG5hbWVzcGFjZXNbcHJlZml4XSwgbG9jYWw6IG5hbWV9IDogbmFtZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZS5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHZhciB4aHRtbCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN2ZzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB4aHRtbDogeGh0bWwsXG4gIHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgeG1sOiBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvbmFtZXNwYWNlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZpbHRlckV2ZW50cyA9IHt9O1xuXG5leHBvcnQgdmFyIGV2ZW50ID0gbnVsbDtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgaWYgKCEoXCJvbm1vdXNlZW50ZXJcIiBpbiBlbGVtZW50KSkge1xuICAgIGZpbHRlckV2ZW50cyA9IHttb3VzZWVudGVyOiBcIm1vdXNlb3ZlclwiLCBtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCJ9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlckNvbnRleHRMaXN0ZW5lcihsaXN0ZW5lciwgaW5kZXgsIGdyb3VwKSB7XG4gIGxpc3RlbmVyID0gY29udGV4dExpc3RlbmVyKGxpc3RlbmVyLCBpbmRleCwgZ3JvdXApO1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgcmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XG4gICAgaWYgKCFyZWxhdGVkIHx8IChyZWxhdGVkICE9PSB0aGlzICYmICEocmVsYXRlZC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0aGlzKSAmIDgpKSkge1xuICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjb250ZXh0TGlzdGVuZXIobGlzdGVuZXIsIGluZGV4LCBncm91cCkge1xuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQxKSB7XG4gICAgdmFyIGV2ZW50MCA9IGV2ZW50OyAvLyBFdmVudHMgY2FuIGJlIHJlZW50cmFudCAoZS5nLiwgZm9jdXMpLlxuICAgIGV2ZW50ID0gZXZlbnQxO1xuICAgIHRyeSB7XG4gICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX19kYXRhX18sIGluZGV4LCBncm91cCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGV2ZW50ID0gZXZlbnQwO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzKSB7XG4gIHJldHVybiB0eXBlbmFtZXMudHJpbSgpLnNwbGl0KC9efFxccysvKS5tYXAoZnVuY3Rpb24odCkge1xuICAgIHZhciBuYW1lID0gXCJcIiwgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgbmFtZSA9IHQuc2xpY2UoaSArIDEpLCB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICByZXR1cm4ge3R5cGU6IHQsIG5hbWU6IG5hbWV9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb25SZW1vdmUodHlwZW5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbiA9IHRoaXMuX19vbjtcbiAgICBpZiAoIW9uKSByZXR1cm47XG4gICAgZm9yICh2YXIgaiA9IDAsIGkgPSAtMSwgbSA9IG9uLmxlbmd0aCwgbzsgaiA8IG07ICsraikge1xuICAgICAgaWYgKG8gPSBvbltqXSwgKCF0eXBlbmFtZS50eXBlIHx8IG8udHlwZSA9PT0gdHlwZW5hbWUudHlwZSkgJiYgby5uYW1lID09PSB0eXBlbmFtZS5uYW1lKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLnR5cGUsIG8ubGlzdGVuZXIsIG8uY2FwdHVyZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvblsrK2ldID0gbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCsraSkgb24ubGVuZ3RoID0gaTtcbiAgICBlbHNlIGRlbGV0ZSB0aGlzLl9fb247XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9uQWRkKHR5cGVuYW1lLCB2YWx1ZSwgY2FwdHVyZSkge1xuICB2YXIgd3JhcCA9IGZpbHRlckV2ZW50cy5oYXNPd25Qcm9wZXJ0eSh0eXBlbmFtZS50eXBlKSA/IGZpbHRlckNvbnRleHRMaXN0ZW5lciA6IGNvbnRleHRMaXN0ZW5lcjtcbiAgcmV0dXJuIGZ1bmN0aW9uKGQsIGksIGdyb3VwKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uLCBvLCBsaXN0ZW5lciA9IHdyYXAodmFsdWUsIGksIGdyb3VwKTtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgICBpZiAoKG8gPSBvbltqXSkudHlwZSA9PT0gdHlwZW5hbWUudHlwZSAmJiBvLm5hbWUgPT09IHR5cGVuYW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciwgby5jYXB0dXJlKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciA9IGxpc3RlbmVyLCBvLmNhcHR1cmUgPSBjYXB0dXJlKTtcbiAgICAgICAgby52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih0eXBlbmFtZS50eXBlLCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgbyA9IHt0eXBlOiB0eXBlbmFtZS50eXBlLCBuYW1lOiB0eXBlbmFtZS5uYW1lLCB2YWx1ZTogdmFsdWUsIGxpc3RlbmVyOiBsaXN0ZW5lciwgY2FwdHVyZTogY2FwdHVyZX07XG4gICAgaWYgKCFvbikgdGhpcy5fX29uID0gW29dO1xuICAgIGVsc2Ugb24ucHVzaChvKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZW5hbWUsIHZhbHVlLCBjYXB0dXJlKSB7XG4gIHZhciB0eXBlbmFtZXMgPSBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZSArIFwiXCIpLCBpLCBuID0gdHlwZW5hbWVzLmxlbmd0aCwgdDtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgb24gPSB0aGlzLm5vZGUoKS5fX29uO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGZvciAoaSA9IDAsIG8gPSBvbltqXTsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoKHQgPSB0eXBlbmFtZXNbaV0pLnR5cGUgPT09IG8udHlwZSAmJiB0Lm5hbWUgPT09IG8ubmFtZSkge1xuICAgICAgICAgIHJldHVybiBvLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIG9uID0gdmFsdWUgPyBvbkFkZCA6IG9uUmVtb3ZlO1xuICBpZiAoY2FwdHVyZSA9PSBudWxsKSBjYXB0dXJlID0gZmFsc2U7XG4gIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHRoaXMuZWFjaChvbih0eXBlbmFtZXNbaV0sIHZhbHVlLCBjYXB0dXJlKSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tRXZlbnQoZXZlbnQxLCBsaXN0ZW5lciwgdGhhdCwgYXJncykge1xuICB2YXIgZXZlbnQwID0gZXZlbnQ7XG4gIGV2ZW50MS5zb3VyY2VFdmVudCA9IGV2ZW50O1xuICBldmVudCA9IGV2ZW50MTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0gZmluYWxseSB7XG4gICAgZXZlbnQgPSBldmVudDA7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vbi5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gbm9uZSgpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA9PSBudWxsID8gbm9uZSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7ZXZlbnR9IGZyb20gXCIuL3NlbGVjdGlvbi9vblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGN1cnJlbnQgPSBldmVudCwgc291cmNlO1xuICB3aGlsZSAoc291cmNlID0gY3VycmVudC5zb3VyY2VFdmVudCkgY3VycmVudCA9IHNvdXJjZTtcbiAgcmV0dXJuIGN1cnJlbnQ7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zb3VyY2VFdmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSkge1xuICByZXR1cm4gKG5vZGUub3duZXJEb2N1bWVudCAmJiBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIC8vIG5vZGUgaXMgYSBOb2RlXG4gICAgICB8fCAobm9kZS5kb2N1bWVudCAmJiBub2RlKSAvLyBub2RlIGlzIGEgV2luZG93XG4gICAgICB8fCBub2RlLmRlZmF1bHRWaWV3OyAvLyBub2RlIGlzIGEgRG9jdW1lbnRcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3dpbmRvdy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZvcm1hdExvY2FsZSBmcm9tIFwiLi9sb2NhbGVcIjtcblxudmFyIGxvY2FsZTtcbmV4cG9ydCB2YXIgdGltZUZvcm1hdDtcbmV4cG9ydCB2YXIgdGltZVBhcnNlO1xuZXhwb3J0IHZhciB1dGNGb3JtYXQ7XG5leHBvcnQgdmFyIHV0Y1BhcnNlO1xuXG5kZWZhdWx0TG9jYWxlKHtcbiAgZGF0ZVRpbWU6IFwiJXgsICVYXCIsXG4gIGRhdGU6IFwiJS1tLyUtZC8lWVwiLFxuICB0aW1lOiBcIiUtSTolTTolUyAlcFwiLFxuICBwZXJpb2RzOiBbXCJBTVwiLCBcIlBNXCJdLFxuICBkYXlzOiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXSxcbiAgc2hvcnREYXlzOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gIG1vbnRoczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG4gIHNob3J0TW9udGhzOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZhdWx0TG9jYWxlKGRlZmluaXRpb24pIHtcbiAgbG9jYWxlID0gZm9ybWF0TG9jYWxlKGRlZmluaXRpb24pO1xuICB0aW1lRm9ybWF0ID0gbG9jYWxlLmZvcm1hdDtcbiAgdGltZVBhcnNlID0gbG9jYWxlLnBhcnNlO1xuICB1dGNGb3JtYXQgPSBsb2NhbGUudXRjRm9ybWF0O1xuICB1dGNQYXJzZSA9IGxvY2FsZS51dGNQYXJzZTtcbiAgcmV0dXJuIGxvY2FsZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lLWZvcm1hdC9zcmMvZGVmYXVsdExvY2FsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lSW50ZXJ2YWxcbn0gZnJvbSBcIi4vc3JjL2ludGVydmFsXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZU1pbGxpc2Vjb25kLFxuICBtaWxsaXNlY29uZHMgYXMgdGltZU1pbGxpc2Vjb25kcyxcbiAgZGVmYXVsdCBhcyB1dGNNaWxsaXNlY29uZCxcbiAgbWlsbGlzZWNvbmRzIGFzIHV0Y01pbGxpc2Vjb25kc1xufSBmcm9tIFwiLi9zcmMvbWlsbGlzZWNvbmRcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lU2Vjb25kLFxuICBzZWNvbmRzIGFzIHRpbWVTZWNvbmRzLFxuICBkZWZhdWx0IGFzIHV0Y1NlY29uZCxcbiAgc2Vjb25kcyBhcyB1dGNTZWNvbmRzXG59IGZyb20gXCIuL3NyYy9zZWNvbmRcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lTWludXRlLFxuICBtaW51dGVzIGFzIHRpbWVNaW51dGVzXG59IGZyb20gXCIuL3NyYy9taW51dGVcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lSG91cixcbiAgaG91cnMgYXMgdGltZUhvdXJzXG59IGZyb20gXCIuL3NyYy9ob3VyXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZURheSxcbiAgZGF5cyBhcyB0aW1lRGF5c1xufSBmcm9tIFwiLi9zcmMvZGF5XCI7XG5cbmV4cG9ydCB7XG4gIHN1bmRheSBhcyB0aW1lV2VlayxcbiAgc3VuZGF5cyBhcyB0aW1lV2Vla3MsXG4gIHN1bmRheSBhcyB0aW1lU3VuZGF5LFxuICBzdW5kYXlzIGFzIHRpbWVTdW5kYXlzLFxuICBtb25kYXkgYXMgdGltZU1vbmRheSxcbiAgbW9uZGF5cyBhcyB0aW1lTW9uZGF5cyxcbiAgdHVlc2RheSBhcyB0aW1lVHVlc2RheSxcbiAgdHVlc2RheXMgYXMgdGltZVR1ZXNkYXlzLFxuICB3ZWRuZXNkYXkgYXMgdGltZVdlZG5lc2RheSxcbiAgd2VkbmVzZGF5cyBhcyB0aW1lV2VkbmVzZGF5cyxcbiAgdGh1cnNkYXkgYXMgdGltZVRodXJzZGF5LFxuICB0aHVyc2RheXMgYXMgdGltZVRodXJzZGF5cyxcbiAgZnJpZGF5IGFzIHRpbWVGcmlkYXksXG4gIGZyaWRheXMgYXMgdGltZUZyaWRheXMsXG4gIHNhdHVyZGF5IGFzIHRpbWVTYXR1cmRheSxcbiAgc2F0dXJkYXlzIGFzIHRpbWVTYXR1cmRheXNcbn0gZnJvbSBcIi4vc3JjL3dlZWtcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lTW9udGgsXG4gIG1vbnRocyBhcyB0aW1lTW9udGhzXG59IGZyb20gXCIuL3NyYy9tb250aFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVZZWFyLFxuICB5ZWFycyBhcyB0aW1lWWVhcnNcbn0gZnJvbSBcIi4vc3JjL3llYXJcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB1dGNNaW51dGUsXG4gIHV0Y01pbnV0ZXMgYXMgdXRjTWludXRlc1xufSBmcm9tIFwiLi9zcmMvdXRjTWludXRlXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdXRjSG91cixcbiAgdXRjSG91cnMgYXMgdXRjSG91cnNcbn0gZnJvbSBcIi4vc3JjL3V0Y0hvdXJcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB1dGNEYXksXG4gIHV0Y0RheXMgYXMgdXRjRGF5c1xufSBmcm9tIFwiLi9zcmMvdXRjRGF5XCI7XG5cbmV4cG9ydCB7XG4gIHV0Y1N1bmRheSBhcyB1dGNXZWVrLFxuICB1dGNTdW5kYXlzIGFzIHV0Y1dlZWtzLFxuICB1dGNTdW5kYXkgYXMgdXRjU3VuZGF5LFxuICB1dGNTdW5kYXlzIGFzIHV0Y1N1bmRheXMsXG4gIHV0Y01vbmRheSBhcyB1dGNNb25kYXksXG4gIHV0Y01vbmRheXMgYXMgdXRjTW9uZGF5cyxcbiAgdXRjVHVlc2RheSBhcyB1dGNUdWVzZGF5LFxuICB1dGNUdWVzZGF5cyBhcyB1dGNUdWVzZGF5cyxcbiAgdXRjV2VkbmVzZGF5IGFzIHV0Y1dlZG5lc2RheSxcbiAgdXRjV2VkbmVzZGF5cyBhcyB1dGNXZWRuZXNkYXlzLFxuICB1dGNUaHVyc2RheSBhcyB1dGNUaHVyc2RheSxcbiAgdXRjVGh1cnNkYXlzIGFzIHV0Y1RodXJzZGF5cyxcbiAgdXRjRnJpZGF5IGFzIHV0Y0ZyaWRheSxcbiAgdXRjRnJpZGF5cyBhcyB1dGNGcmlkYXlzLFxuICB1dGNTYXR1cmRheSBhcyB1dGNTYXR1cmRheSxcbiAgdXRjU2F0dXJkYXlzIGFzIHV0Y1NhdHVyZGF5c1xufSBmcm9tIFwiLi9zcmMvdXRjV2Vla1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHV0Y01vbnRoLFxuICB1dGNNb250aHMgYXMgdXRjTW9udGhzXG59IGZyb20gXCIuL3NyYy91dGNNb250aFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHV0Y1llYXIsXG4gIHV0Y1llYXJzIGFzIHV0Y1llYXJzXG59IGZyb20gXCIuL3NyYy91dGNZZWFyXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgaXNMYW5kc2NhcGUgPSAoKSA9PlxuICB3aW5kb3cuaW5uZXJIZWlnaHQgPiB3aW5kb3cuaW5uZXJXaWR0aCA/IGZhbHNlIDogdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGltZW5zaW9ucyhwYXJlbnQpIHtcbiAgY29uc3QgV0lEVEggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHBhcmVudC5yZXBsYWNlKC9cXC4vLCAnJykpWzBdXG4gICAgLm9mZnNldFdpZHRoO1xuICBcbiAgbGV0IEhFSUdIVDsgXG5cbiAgaWYgKGlzTGFuZHNjYXBlKCkpIHtcbiAgICBIRUlHSFQgPSBXSURUSCAqIDAuNDtcbiAgfSBlbHNlIHtcbiAgICBIRUlHSFQgPSBXSURUSCAqIDEuMjU7XG4gIH1cblxuICBjb25zdCBNQVJHSU4gPSA0MDtcbiAgY29uc3QgTUFSR0lOUyA9IHsgdG9wOiBNQVJHSU4sIHJpZ2h0OiBNQVJHSU4sIGJvdHRvbTogTUFSR0lOLCBsZWZ0OiBNQVJHSU4gfTtcblxuICByZXR1cm4ge1xuICAgIFdJRFRILFxuICAgIEhFSUdIVCxcbiAgICBNQVJHSU5TXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbGl0aWVzL2dldERpbWVuc2lvbnMuanMiLCJ2YXIgYXJyYXkgPSBBcnJheS5wcm90b3R5cGU7XG5cbmV4cG9ydCB2YXIgc2xpY2UgPSBhcnJheS5zbGljZTtcbmV4cG9ydCB2YXIgbWFwID0gYXJyYXkubWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmdcIjtcbmltcG9ydCBiaXNlY3RvciBmcm9tIFwiLi9iaXNlY3RvclwiO1xuXG52YXIgYXNjZW5kaW5nQmlzZWN0ID0gYmlzZWN0b3IoYXNjZW5kaW5nKTtcbmV4cG9ydCB2YXIgYmlzZWN0UmlnaHQgPSBhc2NlbmRpbmdCaXNlY3QucmlnaHQ7XG5leHBvcnQgdmFyIGJpc2VjdExlZnQgPSBhc2NlbmRpbmdCaXNlY3QubGVmdDtcbmV4cG9ydCBkZWZhdWx0IGJpc2VjdFJpZ2h0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9iaXNlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBhcmUpIHtcbiAgaWYgKGNvbXBhcmUubGVuZ3RoID09PSAxKSBjb21wYXJlID0gYXNjZW5kaW5nQ29tcGFyYXRvcihjb21wYXJlKTtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBmdW5jdGlvbihhLCB4LCBsbywgaGkpIHtcbiAgICAgIGlmIChsbyA9PSBudWxsKSBsbyA9IDA7XG4gICAgICBpZiAoaGkgPT0gbnVsbCkgaGkgPSBhLmxlbmd0aDtcbiAgICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICAgIHZhciBtaWQgPSBsbyArIGhpID4+PiAxO1xuICAgICAgICBpZiAoY29tcGFyZShhW21pZF0sIHgpIDwgMCkgbG8gPSBtaWQgKyAxO1xuICAgICAgICBlbHNlIGhpID0gbWlkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxvO1xuICAgIH0sXG4gICAgcmlnaHQ6IGZ1bmN0aW9uKGEsIHgsIGxvLCBoaSkge1xuICAgICAgaWYgKGxvID09IG51bGwpIGxvID0gMDtcbiAgICAgIGlmIChoaSA9PSBudWxsKSBoaSA9IGEubGVuZ3RoO1xuICAgICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgICAgdmFyIG1pZCA9IGxvICsgaGkgPj4+IDE7XG4gICAgICAgIGlmIChjb21wYXJlKGFbbWlkXSwgeCkgPiAwKSBoaSA9IG1pZDtcbiAgICAgICAgZWxzZSBsbyA9IG1pZCArIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gbG87XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmdDb21wYXJhdG9yKGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGQsIHgpIHtcbiAgICByZXR1cm4gYXNjZW5kaW5nKGYoZCksIHgpO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9iaXNlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHZhcmlhbmNlIGZyb20gXCIuL3ZhcmlhbmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCBmKSB7XG4gIHZhciB2ID0gdmFyaWFuY2UoYXJyYXksIGYpO1xuICByZXR1cm4gdiA/IE1hdGguc3FydCh2KSA6IHY7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL2RldmlhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgbWluLFxuICAgICAgbWF4O1xuXG4gIGlmICh2YWx1ZW9mID09IG51bGwpIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlc1tpXSkgIT0gbnVsbCAmJiB2YWx1ZSA+PSB2YWx1ZSkge1xuICAgICAgICBtaW4gPSBtYXggPSB2YWx1ZTtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gQ29tcGFyZSB0aGUgcmVtYWluaW5nIHZhbHVlcy5cbiAgICAgICAgICBpZiAoKHZhbHVlID0gdmFsdWVzW2ldKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobWluID4gdmFsdWUpIG1pbiA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKG1heCA8IHZhbHVlKSBtYXggPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSAhPSBudWxsICYmIHZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgIG1pbiA9IG1heCA9IHZhbHVlO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBDb21wYXJlIHRoZSByZW1haW5pbmcgdmFsdWVzLlxuICAgICAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG1pbiA+IHZhbHVlKSBtaW4gPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChtYXggPCB2YWx1ZSkgbWF4ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFttaW4sIG1heF07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL2V4dGVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgbWluO1xuXG4gIGlmICh2YWx1ZW9mID09IG51bGwpIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlc1tpXSkgIT0gbnVsbCAmJiB2YWx1ZSA+PSB2YWx1ZSkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gQ29tcGFyZSB0aGUgcmVtYWluaW5nIHZhbHVlcy5cbiAgICAgICAgICBpZiAoKHZhbHVlID0gdmFsdWVzW2ldKSAhPSBudWxsICYmIG1pbiA+IHZhbHVlKSB7XG4gICAgICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSAhPSBudWxsICYmIHZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgIG1pbiA9IHZhbHVlO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBDb21wYXJlIHRoZSByZW1haW5pbmcgdmFsdWVzLlxuICAgICAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkgIT0gbnVsbCAmJiBtaW4gPiB2YWx1ZSkge1xuICAgICAgICAgICAgbWluID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1pbjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvbWluLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgZikge1xuICBpZiAoZiA9PSBudWxsKSBmID0gcGFpcjtcbiAgdmFyIGkgPSAwLCBuID0gYXJyYXkubGVuZ3RoIC0gMSwgcCA9IGFycmF5WzBdLCBwYWlycyA9IG5ldyBBcnJheShuIDwgMCA/IDAgOiBuKTtcbiAgd2hpbGUgKGkgPCBuKSBwYWlyc1tpXSA9IGYocCwgcCA9IGFycmF5WysraV0pO1xuICByZXR1cm4gcGFpcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWlyKGEsIGIpIHtcbiAgcmV0dXJuIFthLCBiXTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvcGFpcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIHN0YXJ0ID0gK3N0YXJ0LCBzdG9wID0gK3N0b3AsIHN0ZXAgPSAobiA9IGFyZ3VtZW50cy5sZW5ndGgpIDwgMiA/IChzdG9wID0gc3RhcnQsIHN0YXJ0ID0gMCwgMSkgOiBuIDwgMyA/IDEgOiArc3RlcDtcblxuICB2YXIgaSA9IC0xLFxuICAgICAgbiA9IE1hdGgubWF4KDAsIE1hdGguY2VpbCgoc3RvcCAtIHN0YXJ0KSAvIHN0ZXApKSB8IDAsXG4gICAgICByYW5nZSA9IG5ldyBBcnJheShuKTtcblxuICB3aGlsZSAoKytpIDwgbikge1xuICAgIHJhbmdlW2ldID0gc3RhcnQgKyBpICogc3RlcDtcbiAgfVxuXG4gIHJldHVybiByYW5nZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvcmFuZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gTWF0aC5jZWlsKE1hdGgubG9nKHZhbHVlcy5sZW5ndGgpIC8gTWF0aC5MTjIpICsgMTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvdGhyZXNob2xkL3N0dXJnZXMuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBlMTAgPSBNYXRoLnNxcnQoNTApLFxuICAgIGU1ID0gTWF0aC5zcXJ0KDEwKSxcbiAgICBlMiA9IE1hdGguc3FydCgyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhcnQsIHN0b3AsIGNvdW50KSB7XG4gIHZhciByZXZlcnNlLFxuICAgICAgaSA9IC0xLFxuICAgICAgbixcbiAgICAgIHRpY2tzLFxuICAgICAgc3RlcDtcblxuICBzdG9wID0gK3N0b3AsIHN0YXJ0ID0gK3N0YXJ0LCBjb3VudCA9ICtjb3VudDtcbiAgaWYgKHN0YXJ0ID09PSBzdG9wICYmIGNvdW50ID4gMCkgcmV0dXJuIFtzdGFydF07XG4gIGlmIChyZXZlcnNlID0gc3RvcCA8IHN0YXJ0KSBuID0gc3RhcnQsIHN0YXJ0ID0gc3RvcCwgc3RvcCA9IG47XG4gIGlmICgoc3RlcCA9IHRpY2tJbmNyZW1lbnQoc3RhcnQsIHN0b3AsIGNvdW50KSkgPT09IDAgfHwgIWlzRmluaXRlKHN0ZXApKSByZXR1cm4gW107XG5cbiAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgc3RhcnQgPSBNYXRoLmNlaWwoc3RhcnQgLyBzdGVwKTtcbiAgICBzdG9wID0gTWF0aC5mbG9vcihzdG9wIC8gc3RlcCk7XG4gICAgdGlja3MgPSBuZXcgQXJyYXkobiA9IE1hdGguY2VpbChzdG9wIC0gc3RhcnQgKyAxKSk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHRpY2tzW2ldID0gKHN0YXJ0ICsgaSkgKiBzdGVwO1xuICB9IGVsc2Uge1xuICAgIHN0YXJ0ID0gTWF0aC5mbG9vcihzdGFydCAqIHN0ZXApO1xuICAgIHN0b3AgPSBNYXRoLmNlaWwoc3RvcCAqIHN0ZXApO1xuICAgIHRpY2tzID0gbmV3IEFycmF5KG4gPSBNYXRoLmNlaWwoc3RhcnQgLSBzdG9wICsgMSkpO1xuICAgIHdoaWxlICgrK2kgPCBuKSB0aWNrc1tpXSA9IChzdGFydCAtIGkpIC8gc3RlcDtcbiAgfVxuXG4gIGlmIChyZXZlcnNlKSB0aWNrcy5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIHRpY2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgdmFyIHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIE1hdGgubWF4KDAsIGNvdW50KSxcbiAgICAgIHBvd2VyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhzdGVwKSAvIE1hdGguTE4xMCksXG4gICAgICBlcnJvciA9IHN0ZXAgLyBNYXRoLnBvdygxMCwgcG93ZXIpO1xuICByZXR1cm4gcG93ZXIgPj0gMFxuICAgICAgPyAoZXJyb3IgPj0gZTEwID8gMTAgOiBlcnJvciA+PSBlNSA/IDUgOiBlcnJvciA+PSBlMiA/IDIgOiAxKSAqIE1hdGgucG93KDEwLCBwb3dlcilcbiAgICAgIDogLU1hdGgucG93KDEwLCAtcG93ZXIpIC8gKGVycm9yID49IGUxMCA/IDEwIDogZXJyb3IgPj0gZTUgPyA1IDogZXJyb3IgPj0gZTIgPyAyIDogMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWNrU3RlcChzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgdmFyIHN0ZXAwID0gTWF0aC5hYnMoc3RvcCAtIHN0YXJ0KSAvIE1hdGgubWF4KDAsIGNvdW50KSxcbiAgICAgIHN0ZXAxID0gTWF0aC5wb3coMTAsIE1hdGguZmxvb3IoTWF0aC5sb2coc3RlcDApIC8gTWF0aC5MTjEwKSksXG4gICAgICBlcnJvciA9IHN0ZXAwIC8gc3RlcDE7XG4gIGlmIChlcnJvciA+PSBlMTApIHN0ZXAxICo9IDEwO1xuICBlbHNlIGlmIChlcnJvciA+PSBlNSkgc3RlcDEgKj0gNTtcbiAgZWxzZSBpZiAoZXJyb3IgPj0gZTIpIHN0ZXAxICo9IDI7XG4gIHJldHVybiBzdG9wIDwgc3RhcnQgPyAtc3RlcDEgOiBzdGVwMTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvdGlja3MuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBtaW4gZnJvbSBcIi4vbWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdHJpeCkge1xuICBpZiAoIShuID0gbWF0cml4Lmxlbmd0aCkpIHJldHVybiBbXTtcbiAgZm9yICh2YXIgaSA9IC0xLCBtID0gbWluKG1hdHJpeCwgbGVuZ3RoKSwgdHJhbnNwb3NlID0gbmV3IEFycmF5KG0pOyArK2kgPCBtOykge1xuICAgIGZvciAodmFyIGogPSAtMSwgbiwgcm93ID0gdHJhbnNwb3NlW2ldID0gbmV3IEFycmF5KG4pOyArK2ogPCBuOykge1xuICAgICAgcm93W2pdID0gbWF0cml4W2pdW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhbnNwb3NlO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgoZCkge1xuICByZXR1cm4gZC5sZW5ndGg7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL3RyYW5zcG9zZS5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG0gPSAwLFxuICAgICAgaSA9IC0xLFxuICAgICAgbWVhbiA9IDAsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlbHRhLFxuICAgICAgc3VtID0gMDtcblxuICBpZiAodmFsdWVvZiA9PSBudWxsKSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICghaXNOYU4odmFsdWUgPSBudW1iZXIodmFsdWVzW2ldKSkpIHtcbiAgICAgICAgZGVsdGEgPSB2YWx1ZSAtIG1lYW47XG4gICAgICAgIG1lYW4gKz0gZGVsdGEgLyArK207XG4gICAgICAgIHN1bSArPSBkZWx0YSAqICh2YWx1ZSAtIG1lYW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVsc2Uge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAoIWlzTmFOKHZhbHVlID0gbnVtYmVyKHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSkpIHtcbiAgICAgICAgZGVsdGEgPSB2YWx1ZSAtIG1lYW47XG4gICAgICAgIG1lYW4gKz0gZGVsdGEgLyArK207XG4gICAgICAgIHN1bSArPSBkZWx0YSAqICh2YWx1ZSAtIG1lYW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtID4gMSkgcmV0dXJuIHN1bSAvIChtIC0gMSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL3ZhcmlhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgdmFyIGRlZzJyYWQgPSBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IHZhciByYWQyZGVnID0gMTgwIC8gTWF0aC5QSTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xvci9zcmMvbWF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm1hdERlZmF1bHRMb2NhbGUsIGZvcm1hdCwgZm9ybWF0UHJlZml4fSBmcm9tIFwiLi9zcmMvZGVmYXVsdExvY2FsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm1hdExvY2FsZX0gZnJvbSBcIi4vc3JjL2xvY2FsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm1hdFNwZWNpZmllcn0gZnJvbSBcIi4vc3JjL2Zvcm1hdFNwZWNpZmllclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHByZWNpc2lvbkZpeGVkfSBmcm9tIFwiLi9zcmMvcHJlY2lzaW9uRml4ZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwcmVjaXNpb25QcmVmaXh9IGZyb20gXCIuL3NyYy9wcmVjaXNpb25QcmVmaXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwcmVjaXNpb25Sb3VuZH0gZnJvbSBcIi4vc3JjL3ByZWNpc2lvblJvdW5kXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZm9ybWF0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZm9ybWF0RGVjaW1hbCBmcm9tIFwiLi9mb3JtYXREZWNpbWFsXCI7XG5cbmV4cG9ydCB2YXIgcHJlZml4RXhwb25lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHApIHtcbiAgdmFyIGQgPSBmb3JtYXREZWNpbWFsKHgsIHApO1xuICBpZiAoIWQpIHJldHVybiB4ICsgXCJcIjtcbiAgdmFyIGNvZWZmaWNpZW50ID0gZFswXSxcbiAgICAgIGV4cG9uZW50ID0gZFsxXSxcbiAgICAgIGkgPSBleHBvbmVudCAtIChwcmVmaXhFeHBvbmVudCA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50IC8gMykpKSAqIDMpICsgMSxcbiAgICAgIG4gPSBjb2VmZmljaWVudC5sZW5ndGg7XG4gIHJldHVybiBpID09PSBuID8gY29lZmZpY2llbnRcbiAgICAgIDogaSA+IG4gPyBjb2VmZmljaWVudCArIG5ldyBBcnJheShpIC0gbiArIDEpLmpvaW4oXCIwXCIpXG4gICAgICA6IGkgPiAwID8gY29lZmZpY2llbnQuc2xpY2UoMCwgaSkgKyBcIi5cIiArIGNvZWZmaWNpZW50LnNsaWNlKGkpXG4gICAgICA6IFwiMC5cIiArIG5ldyBBcnJheSgxIC0gaSkuam9pbihcIjBcIikgKyBmb3JtYXREZWNpbWFsKHgsIE1hdGgubWF4KDAsIHAgKyBpIC0gMSkpWzBdOyAvLyBsZXNzIHRoYW4gMXkhXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZm9ybWF0L3NyYy9mb3JtYXRQcmVmaXhBdXRvLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBbW2ZpbGxdYWxpZ25dW3NpZ25dW3N5bWJvbF1bMF1bd2lkdGhdWyxdWy5wcmVjaXNpb25dW35dW3R5cGVdXG52YXIgcmUgPSAvXig/OiguKT8oWzw+PV5dKSk/KFsrXFwtXFwoIF0pPyhbJCNdKT8oMCk/KFxcZCspPygsKT8oXFwuXFxkKyk/KH4pPyhbYS16JV0pPyQvaTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcikge1xuICByZXR1cm4gbmV3IEZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpO1xufVxuXG5mb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlID0gRm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZTsgLy8gaW5zdGFuY2VvZlxuXG5mdW5jdGlvbiBGb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gIGlmICghKG1hdGNoID0gcmUuZXhlYyhzcGVjaWZpZXIpKSkgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBmb3JtYXQ6IFwiICsgc3BlY2lmaWVyKTtcbiAgdmFyIG1hdGNoO1xuICB0aGlzLmZpbGwgPSBtYXRjaFsxXSB8fCBcIiBcIjtcbiAgdGhpcy5hbGlnbiA9IG1hdGNoWzJdIHx8IFwiPlwiO1xuICB0aGlzLnNpZ24gPSBtYXRjaFszXSB8fCBcIi1cIjtcbiAgdGhpcy5zeW1ib2wgPSBtYXRjaFs0XSB8fCBcIlwiO1xuICB0aGlzLnplcm8gPSAhIW1hdGNoWzVdO1xuICB0aGlzLndpZHRoID0gbWF0Y2hbNl0gJiYgK21hdGNoWzZdO1xuICB0aGlzLmNvbW1hID0gISFtYXRjaFs3XTtcbiAgdGhpcy5wcmVjaXNpb24gPSBtYXRjaFs4XSAmJiArbWF0Y2hbOF0uc2xpY2UoMSk7XG4gIHRoaXMudHJpbSA9ICEhbWF0Y2hbOV07XG4gIHRoaXMudHlwZSA9IG1hdGNoWzEwXSB8fCBcIlwiO1xufVxuXG5Gb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmZpbGxcbiAgICAgICsgdGhpcy5hbGlnblxuICAgICAgKyB0aGlzLnNpZ25cbiAgICAgICsgdGhpcy5zeW1ib2xcbiAgICAgICsgKHRoaXMuemVybyA/IFwiMFwiIDogXCJcIilcbiAgICAgICsgKHRoaXMud2lkdGggPT0gbnVsbCA/IFwiXCIgOiBNYXRoLm1heCgxLCB0aGlzLndpZHRoIHwgMCkpXG4gICAgICArICh0aGlzLmNvbW1hID8gXCIsXCIgOiBcIlwiKVxuICAgICAgKyAodGhpcy5wcmVjaXNpb24gPT0gbnVsbCA/IFwiXCIgOiBcIi5cIiArIE1hdGgubWF4KDAsIHRoaXMucHJlY2lzaW9uIHwgMCkpXG4gICAgICArICh0aGlzLnRyaW0gPyBcIn5cIiA6IFwiXCIpXG4gICAgICArIHRoaXMudHlwZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZm9ybWF0L3NyYy9mb3JtYXRTcGVjaWZpZXIuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudFwiO1xuaW1wb3J0IGZvcm1hdEdyb3VwIGZyb20gXCIuL2Zvcm1hdEdyb3VwXCI7XG5pbXBvcnQgZm9ybWF0TnVtZXJhbHMgZnJvbSBcIi4vZm9ybWF0TnVtZXJhbHNcIjtcbmltcG9ydCBmb3JtYXRTcGVjaWZpZXIgZnJvbSBcIi4vZm9ybWF0U3BlY2lmaWVyXCI7XG5pbXBvcnQgZm9ybWF0VHJpbSBmcm9tIFwiLi9mb3JtYXRUcmltXCI7XG5pbXBvcnQgZm9ybWF0VHlwZXMgZnJvbSBcIi4vZm9ybWF0VHlwZXNcIjtcbmltcG9ydCB7cHJlZml4RXhwb25lbnR9IGZyb20gXCIuL2Zvcm1hdFByZWZpeEF1dG9cIjtcbmltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eVwiO1xuXG52YXIgcHJlZml4ZXMgPSBbXCJ5XCIsXCJ6XCIsXCJhXCIsXCJmXCIsXCJwXCIsXCJuXCIsXCLCtVwiLFwibVwiLFwiXCIsXCJrXCIsXCJNXCIsXCJHXCIsXCJUXCIsXCJQXCIsXCJFXCIsXCJaXCIsXCJZXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihsb2NhbGUpIHtcbiAgdmFyIGdyb3VwID0gbG9jYWxlLmdyb3VwaW5nICYmIGxvY2FsZS50aG91c2FuZHMgPyBmb3JtYXRHcm91cChsb2NhbGUuZ3JvdXBpbmcsIGxvY2FsZS50aG91c2FuZHMpIDogaWRlbnRpdHksXG4gICAgICBjdXJyZW5jeSA9IGxvY2FsZS5jdXJyZW5jeSxcbiAgICAgIGRlY2ltYWwgPSBsb2NhbGUuZGVjaW1hbCxcbiAgICAgIG51bWVyYWxzID0gbG9jYWxlLm51bWVyYWxzID8gZm9ybWF0TnVtZXJhbHMobG9jYWxlLm51bWVyYWxzKSA6IGlkZW50aXR5LFxuICAgICAgcGVyY2VudCA9IGxvY2FsZS5wZXJjZW50IHx8IFwiJVwiO1xuXG4gIGZ1bmN0aW9uIG5ld0Zvcm1hdChzcGVjaWZpZXIpIHtcbiAgICBzcGVjaWZpZXIgPSBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKTtcblxuICAgIHZhciBmaWxsID0gc3BlY2lmaWVyLmZpbGwsXG4gICAgICAgIGFsaWduID0gc3BlY2lmaWVyLmFsaWduLFxuICAgICAgICBzaWduID0gc3BlY2lmaWVyLnNpZ24sXG4gICAgICAgIHN5bWJvbCA9IHNwZWNpZmllci5zeW1ib2wsXG4gICAgICAgIHplcm8gPSBzcGVjaWZpZXIuemVybyxcbiAgICAgICAgd2lkdGggPSBzcGVjaWZpZXIud2lkdGgsXG4gICAgICAgIGNvbW1hID0gc3BlY2lmaWVyLmNvbW1hLFxuICAgICAgICBwcmVjaXNpb24gPSBzcGVjaWZpZXIucHJlY2lzaW9uLFxuICAgICAgICB0cmltID0gc3BlY2lmaWVyLnRyaW0sXG4gICAgICAgIHR5cGUgPSBzcGVjaWZpZXIudHlwZTtcblxuICAgIC8vIFRoZSBcIm5cIiB0eXBlIGlzIGFuIGFsaWFzIGZvciBcIixnXCIuXG4gICAgaWYgKHR5cGUgPT09IFwiblwiKSBjb21tYSA9IHRydWUsIHR5cGUgPSBcImdcIjtcblxuICAgIC8vIFRoZSBcIlwiIHR5cGUsIGFuZCBhbnkgaW52YWxpZCB0eXBlLCBpcyBhbiBhbGlhcyBmb3IgXCIuMTJ+Z1wiLlxuICAgIGVsc2UgaWYgKCFmb3JtYXRUeXBlc1t0eXBlXSkgcHJlY2lzaW9uID09IG51bGwgJiYgKHByZWNpc2lvbiA9IDEyKSwgdHJpbSA9IHRydWUsIHR5cGUgPSBcImdcIjtcblxuICAgIC8vIElmIHplcm8gZmlsbCBpcyBzcGVjaWZpZWQsIHBhZGRpbmcgZ29lcyBhZnRlciBzaWduIGFuZCBiZWZvcmUgZGlnaXRzLlxuICAgIGlmICh6ZXJvIHx8IChmaWxsID09PSBcIjBcIiAmJiBhbGlnbiA9PT0gXCI9XCIpKSB6ZXJvID0gdHJ1ZSwgZmlsbCA9IFwiMFwiLCBhbGlnbiA9IFwiPVwiO1xuXG4gICAgLy8gQ29tcHV0ZSB0aGUgcHJlZml4IGFuZCBzdWZmaXguXG4gICAgLy8gRm9yIFNJLXByZWZpeCwgdGhlIHN1ZmZpeCBpcyBsYXppbHkgY29tcHV0ZWQuXG4gICAgdmFyIHByZWZpeCA9IHN5bWJvbCA9PT0gXCIkXCIgPyBjdXJyZW5jeVswXSA6IHN5bWJvbCA9PT0gXCIjXCIgJiYgL1tib3hYXS8udGVzdCh0eXBlKSA/IFwiMFwiICsgdHlwZS50b0xvd2VyQ2FzZSgpIDogXCJcIixcbiAgICAgICAgc3VmZml4ID0gc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5WzFdIDogL1slcF0vLnRlc3QodHlwZSkgPyBwZXJjZW50IDogXCJcIjtcblxuICAgIC8vIFdoYXQgZm9ybWF0IGZ1bmN0aW9uIHNob3VsZCB3ZSB1c2U/XG4gICAgLy8gSXMgdGhpcyBhbiBpbnRlZ2VyIHR5cGU/XG4gICAgLy8gQ2FuIHRoaXMgdHlwZSBnZW5lcmF0ZSBleHBvbmVudGlhbCBub3RhdGlvbj9cbiAgICB2YXIgZm9ybWF0VHlwZSA9IGZvcm1hdFR5cGVzW3R5cGVdLFxuICAgICAgICBtYXliZVN1ZmZpeCA9IC9bZGVmZ3BycyVdLy50ZXN0KHR5cGUpO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHByZWNpc2lvbiBpZiBub3Qgc3BlY2lmaWVkLFxuICAgIC8vIG9yIGNsYW1wIHRoZSBzcGVjaWZpZWQgcHJlY2lzaW9uIHRvIHRoZSBzdXBwb3J0ZWQgcmFuZ2UuXG4gICAgLy8gRm9yIHNpZ25pZmljYW50IHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMSwgMjFdLlxuICAgIC8vIEZvciBmaXhlZCBwcmVjaXNpb24sIGl0IG11c3QgYmUgaW4gWzAsIDIwXS5cbiAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24gPT0gbnVsbCA/IDZcbiAgICAgICAgOiAvW2dwcnNdLy50ZXN0KHR5cGUpID8gTWF0aC5tYXgoMSwgTWF0aC5taW4oMjEsIHByZWNpc2lvbikpXG4gICAgICAgIDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMjAsIHByZWNpc2lvbikpO1xuXG4gICAgZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XG4gICAgICB2YXIgdmFsdWVQcmVmaXggPSBwcmVmaXgsXG4gICAgICAgICAgdmFsdWVTdWZmaXggPSBzdWZmaXgsXG4gICAgICAgICAgaSwgbiwgYztcblxuICAgICAgaWYgKHR5cGUgPT09IFwiY1wiKSB7XG4gICAgICAgIHZhbHVlU3VmZml4ID0gZm9ybWF0VHlwZSh2YWx1ZSkgKyB2YWx1ZVN1ZmZpeDtcbiAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG5cbiAgICAgICAgLy8gUGVyZm9ybSB0aGUgaW5pdGlhbCBmb3JtYXR0aW5nLlxuICAgICAgICB2YXIgdmFsdWVOZWdhdGl2ZSA9IHZhbHVlIDwgMDtcbiAgICAgICAgdmFsdWUgPSBmb3JtYXRUeXBlKE1hdGguYWJzKHZhbHVlKSwgcHJlY2lzaW9uKTtcblxuICAgICAgICAvLyBUcmltIGluc2lnbmlmaWNhbnQgemVyb3MuXG4gICAgICAgIGlmICh0cmltKSB2YWx1ZSA9IGZvcm1hdFRyaW0odmFsdWUpO1xuXG4gICAgICAgIC8vIElmIGEgbmVnYXRpdmUgdmFsdWUgcm91bmRzIHRvIHplcm8gZHVyaW5nIGZvcm1hdHRpbmcsIHRyZWF0IGFzIHBvc2l0aXZlLlxuICAgICAgICBpZiAodmFsdWVOZWdhdGl2ZSAmJiArdmFsdWUgPT09IDApIHZhbHVlTmVnYXRpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBDb21wdXRlIHRoZSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAgICAgdmFsdWVQcmVmaXggPSAodmFsdWVOZWdhdGl2ZSA/IChzaWduID09PSBcIihcIiA/IHNpZ24gOiBcIi1cIikgOiBzaWduID09PSBcIi1cIiB8fCBzaWduID09PSBcIihcIiA/IFwiXCIgOiBzaWduKSArIHZhbHVlUHJlZml4O1xuICAgICAgICB2YWx1ZVN1ZmZpeCA9ICh0eXBlID09PSBcInNcIiA/IHByZWZpeGVzWzggKyBwcmVmaXhFeHBvbmVudCAvIDNdIDogXCJcIikgKyB2YWx1ZVN1ZmZpeCArICh2YWx1ZU5lZ2F0aXZlICYmIHNpZ24gPT09IFwiKFwiID8gXCIpXCIgOiBcIlwiKTtcblxuICAgICAgICAvLyBCcmVhayB0aGUgZm9ybWF0dGVkIHZhbHVlIGludG8gdGhlIGludGVnZXIg4oCcdmFsdWXigJ0gcGFydCB0aGF0IGNhbiBiZVxuICAgICAgICAvLyBncm91cGVkLCBhbmQgZnJhY3Rpb25hbCBvciBleHBvbmVudGlhbCDigJxzdWZmaXjigJ0gcGFydCB0aGF0IGlzIG5vdC5cbiAgICAgICAgaWYgKG1heWJlU3VmZml4KSB7XG4gICAgICAgICAgaSA9IC0xLCBuID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICAgICAgICBpZiAoYyA9IHZhbHVlLmNoYXJDb2RlQXQoaSksIDQ4ID4gYyB8fCBjID4gNTcpIHtcbiAgICAgICAgICAgICAgdmFsdWVTdWZmaXggPSAoYyA9PT0gNDYgPyBkZWNpbWFsICsgdmFsdWUuc2xpY2UoaSArIDEpIDogdmFsdWUuc2xpY2UoaSkpICsgdmFsdWVTdWZmaXg7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgZmlsbCBjaGFyYWN0ZXIgaXMgbm90IFwiMFwiLCBncm91cGluZyBpcyBhcHBsaWVkIGJlZm9yZSBwYWRkaW5nLlxuICAgICAgaWYgKGNvbW1hICYmICF6ZXJvKSB2YWx1ZSA9IGdyb3VwKHZhbHVlLCBJbmZpbml0eSk7XG5cbiAgICAgIC8vIENvbXB1dGUgdGhlIHBhZGRpbmcuXG4gICAgICB2YXIgbGVuZ3RoID0gdmFsdWVQcmVmaXgubGVuZ3RoICsgdmFsdWUubGVuZ3RoICsgdmFsdWVTdWZmaXgubGVuZ3RoLFxuICAgICAgICAgIHBhZGRpbmcgPSBsZW5ndGggPCB3aWR0aCA/IG5ldyBBcnJheSh3aWR0aCAtIGxlbmd0aCArIDEpLmpvaW4oZmlsbCkgOiBcIlwiO1xuXG4gICAgICAvLyBJZiB0aGUgZmlsbCBjaGFyYWN0ZXIgaXMgXCIwXCIsIGdyb3VwaW5nIGlzIGFwcGxpZWQgYWZ0ZXIgcGFkZGluZy5cbiAgICAgIGlmIChjb21tYSAmJiB6ZXJvKSB2YWx1ZSA9IGdyb3VwKHBhZGRpbmcgKyB2YWx1ZSwgcGFkZGluZy5sZW5ndGggPyB3aWR0aCAtIHZhbHVlU3VmZml4Lmxlbmd0aCA6IEluZmluaXR5KSwgcGFkZGluZyA9IFwiXCI7XG5cbiAgICAgIC8vIFJlY29uc3RydWN0IHRoZSBmaW5hbCBvdXRwdXQgYmFzZWQgb24gdGhlIGRlc2lyZWQgYWxpZ25tZW50LlxuICAgICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlIFwiPFwiOiB2YWx1ZSA9IHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeCArIHBhZGRpbmc7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiPVwiOiB2YWx1ZSA9IHZhbHVlUHJlZml4ICsgcGFkZGluZyArIHZhbHVlICsgdmFsdWVTdWZmaXg7IGJyZWFrO1xuICAgICAgICBjYXNlIFwiXlwiOiB2YWx1ZSA9IHBhZGRpbmcuc2xpY2UoMCwgbGVuZ3RoID0gcGFkZGluZy5sZW5ndGggPj4gMSkgKyB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXggKyBwYWRkaW5nLnNsaWNlKGxlbmd0aCk7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiB2YWx1ZSA9IHBhZGRpbmcgKyB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXg7IGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVtZXJhbHModmFsdWUpO1xuICAgIH1cblxuICAgIGZvcm1hdC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNwZWNpZmllciArIFwiXCI7XG4gICAgfTtcblxuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRQcmVmaXgoc3BlY2lmaWVyLCB2YWx1ZSkge1xuICAgIHZhciBmID0gbmV3Rm9ybWF0KChzcGVjaWZpZXIgPSBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSwgc3BlY2lmaWVyLnR5cGUgPSBcImZcIiwgc3BlY2lmaWVyKSksXG4gICAgICAgIGUgPSBNYXRoLm1heCgtOCwgTWF0aC5taW4oOCwgTWF0aC5mbG9vcihleHBvbmVudCh2YWx1ZSkgLyAzKSkpICogMyxcbiAgICAgICAgayA9IE1hdGgucG93KDEwLCAtZSksXG4gICAgICAgIHByZWZpeCA9IHByZWZpeGVzWzggKyBlIC8gM107XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZihrICogdmFsdWUpICsgcHJlZml4O1xuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvcm1hdDogbmV3Rm9ybWF0LFxuICAgIGZvcm1hdFByZWZpeDogZm9ybWF0UHJlZml4XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZm9ybWF0L3NyYy9sb2NhbGUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB2YWx1ZSBmcm9tIFwiLi92YWx1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciBuYiA9IGIgPyBiLmxlbmd0aCA6IDAsXG4gICAgICBuYSA9IGEgPyBNYXRoLm1pbihuYiwgYS5sZW5ndGgpIDogMCxcbiAgICAgIHggPSBuZXcgQXJyYXkobmEpLFxuICAgICAgYyA9IG5ldyBBcnJheShuYiksXG4gICAgICBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBuYTsgKytpKSB4W2ldID0gdmFsdWUoYVtpXSwgYltpXSk7XG4gIGZvciAoOyBpIDwgbmI7ICsraSkgY1tpXSA9IGJbaV07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbmE7ICsraSkgY1tpXSA9IHhbaV0odCk7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL2FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2Jhc2lzfSBmcm9tIFwiLi9iYXNpc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gTWF0aC5mbG9vcigoKHQgJT0gMSkgPCAwID8gKyt0IDogdCkgKiBuKSxcbiAgICAgICAgdjAgPSB2YWx1ZXNbKGkgKyBuIC0gMSkgJSBuXSxcbiAgICAgICAgdjEgPSB2YWx1ZXNbaSAlIG5dLFxuICAgICAgICB2MiA9IHZhbHVlc1soaSArIDEpICUgbl0sXG4gICAgICAgIHYzID0gdmFsdWVzWyhpICsgMikgJSBuXTtcbiAgICByZXR1cm4gYmFzaXMoKHQgLSBpIC8gbikgKiBuLCB2MCwgdjEsIHYyLCB2Myk7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL2Jhc2lzQ2xvc2VkLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvY29uc3RhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZTtcbiAgcmV0dXJuIGEgPSArYSwgYiAtPSBhLCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIGQuc2V0VGltZShhICsgYiAqIHQpLCBkO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWludGVycG9sYXRlL3NyYy9kYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgaSA9IHt9LFxuICAgICAgYyA9IHt9LFxuICAgICAgaztcblxuICBpZiAoYSA9PT0gbnVsbCB8fCB0eXBlb2YgYSAhPT0gXCJvYmplY3RcIikgYSA9IHt9O1xuICBpZiAoYiA9PT0gbnVsbCB8fCB0eXBlb2YgYiAhPT0gXCJvYmplY3RcIikgYiA9IHt9O1xuXG4gIGZvciAoayBpbiBiKSB7XG4gICAgaWYgKGsgaW4gYSkge1xuICAgICAgaVtrXSA9IHZhbHVlKGFba10sIGJba10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjW2tdID0gYltrXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoayBpbiBpKSBjW2tdID0gaVtrXSh0KTtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3JnYiBhcyBjb2xvclJnYn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgYmFzaXMgZnJvbSBcIi4vYmFzaXNcIjtcbmltcG9ydCBiYXNpc0Nsb3NlZCBmcm9tIFwiLi9iYXNpc0Nsb3NlZFwiO1xuaW1wb3J0IG5vZ2FtbWEsIHtnYW1tYX0gZnJvbSBcIi4vY29sb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHJnYkdhbW1hKHkpIHtcbiAgdmFyIGNvbG9yID0gZ2FtbWEoeSk7XG5cbiAgZnVuY3Rpb24gcmdiKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgciA9IGNvbG9yKChzdGFydCA9IGNvbG9yUmdiKHN0YXJ0KSkuciwgKGVuZCA9IGNvbG9yUmdiKGVuZCkpLnIpLFxuICAgICAgICBnID0gY29sb3Ioc3RhcnQuZywgZW5kLmcpLFxuICAgICAgICBiID0gY29sb3Ioc3RhcnQuYiwgZW5kLmIpLFxuICAgICAgICBvcGFjaXR5ID0gbm9nYW1tYShzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LnIgPSByKHQpO1xuICAgICAgc3RhcnQuZyA9IGcodCk7XG4gICAgICBzdGFydC5iID0gYih0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG5cbiAgcmdiLmdhbW1hID0gcmdiR2FtbWE7XG5cbiAgcmV0dXJuIHJnYjtcbn0pKDEpO1xuXG5mdW5jdGlvbiByZ2JTcGxpbmUoc3BsaW5lKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICB2YXIgbiA9IGNvbG9ycy5sZW5ndGgsXG4gICAgICAgIHIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGcgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGIgPSBuZXcgQXJyYXkobiksXG4gICAgICAgIGksIGNvbG9yO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbG9yID0gY29sb3JSZ2IoY29sb3JzW2ldKTtcbiAgICAgIHJbaV0gPSBjb2xvci5yIHx8IDA7XG4gICAgICBnW2ldID0gY29sb3IuZyB8fCAwO1xuICAgICAgYltpXSA9IGNvbG9yLmIgfHwgMDtcbiAgICB9XG4gICAgciA9IHNwbGluZShyKTtcbiAgICBnID0gc3BsaW5lKGcpO1xuICAgIGIgPSBzcGxpbmUoYik7XG4gICAgY29sb3Iub3BhY2l0eSA9IDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIGNvbG9yLnIgPSByKHQpO1xuICAgICAgY29sb3IuZyA9IGcodCk7XG4gICAgICBjb2xvci5iID0gYih0KTtcbiAgICAgIHJldHVybiBjb2xvciArIFwiXCI7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHZhciByZ2JCYXNpcyA9IHJnYlNwbGluZShiYXNpcyk7XG5leHBvcnQgdmFyIHJnYkJhc2lzQ2xvc2VkID0gcmdiU3BsaW5lKGJhc2lzQ2xvc2VkKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvcmdiLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlclwiO1xuXG52YXIgcmVBID0gL1stK10/KD86XFxkK1xcLj9cXGQqfFxcLj9cXGQrKSg/OltlRV1bLStdP1xcZCspPy9nLFxuICAgIHJlQiA9IG5ldyBSZWdFeHAocmVBLnNvdXJjZSwgXCJnXCIpO1xuXG5mdW5jdGlvbiB6ZXJvKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBiO1xuICB9O1xufVxuXG5mdW5jdGlvbiBvbmUoYikge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBiKHQpICsgXCJcIjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgYmkgPSByZUEubGFzdEluZGV4ID0gcmVCLmxhc3RJbmRleCA9IDAsIC8vIHNjYW4gaW5kZXggZm9yIG5leHQgbnVtYmVyIGluIGJcbiAgICAgIGFtLCAvLyBjdXJyZW50IG1hdGNoIGluIGFcbiAgICAgIGJtLCAvLyBjdXJyZW50IG1hdGNoIGluIGJcbiAgICAgIGJzLCAvLyBzdHJpbmcgcHJlY2VkaW5nIGN1cnJlbnQgbnVtYmVyIGluIGIsIGlmIGFueVxuICAgICAgaSA9IC0xLCAvLyBpbmRleCBpbiBzXG4gICAgICBzID0gW10sIC8vIHN0cmluZyBjb25zdGFudHMgYW5kIHBsYWNlaG9sZGVyc1xuICAgICAgcSA9IFtdOyAvLyBudW1iZXIgaW50ZXJwb2xhdG9yc1xuXG4gIC8vIENvZXJjZSBpbnB1dHMgdG8gc3RyaW5ncy5cbiAgYSA9IGEgKyBcIlwiLCBiID0gYiArIFwiXCI7XG5cbiAgLy8gSW50ZXJwb2xhdGUgcGFpcnMgb2YgbnVtYmVycyBpbiBhICYgYi5cbiAgd2hpbGUgKChhbSA9IHJlQS5leGVjKGEpKVxuICAgICAgJiYgKGJtID0gcmVCLmV4ZWMoYikpKSB7XG4gICAgaWYgKChicyA9IGJtLmluZGV4KSA+IGJpKSB7IC8vIGEgc3RyaW5nIHByZWNlZGVzIHRoZSBuZXh0IG51bWJlciBpbiBiXG4gICAgICBicyA9IGIuc2xpY2UoYmksIGJzKTtcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBicztcbiAgICB9XG4gICAgaWYgKChhbSA9IGFtWzBdKSA9PT0gKGJtID0gYm1bMF0pKSB7IC8vIG51bWJlcnMgaW4gYSAmIGIgbWF0Y2hcbiAgICAgIGlmIChzW2ldKSBzW2ldICs9IGJtOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgICAgZWxzZSBzWysraV0gPSBibTtcbiAgICB9IGVsc2UgeyAvLyBpbnRlcnBvbGF0ZSBub24tbWF0Y2hpbmcgbnVtYmVyc1xuICAgICAgc1srK2ldID0gbnVsbDtcbiAgICAgIHEucHVzaCh7aTogaSwgeDogbnVtYmVyKGFtLCBibSl9KTtcbiAgICB9XG4gICAgYmkgPSByZUIubGFzdEluZGV4O1xuICB9XG5cbiAgLy8gQWRkIHJlbWFpbnMgb2YgYi5cbiAgaWYgKGJpIDwgYi5sZW5ndGgpIHtcbiAgICBicyA9IGIuc2xpY2UoYmkpO1xuICAgIGlmIChzW2ldKSBzW2ldICs9IGJzOyAvLyBjb2FsZXNjZSB3aXRoIHByZXZpb3VzIHN0cmluZ1xuICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gIH1cblxuICAvLyBTcGVjaWFsIG9wdGltaXphdGlvbiBmb3Igb25seSBhIHNpbmdsZSBtYXRjaC5cbiAgLy8gT3RoZXJ3aXNlLCBpbnRlcnBvbGF0ZSBlYWNoIG9mIHRoZSBudW1iZXJzIGFuZCByZWpvaW4gdGhlIHN0cmluZy5cbiAgcmV0dXJuIHMubGVuZ3RoIDwgMiA/IChxWzBdXG4gICAgICA/IG9uZShxWzBdLngpXG4gICAgICA6IHplcm8oYikpXG4gICAgICA6IChiID0gcS5sZW5ndGgsIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbzsgaSA8IGI7ICsraSkgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgICAgIHJldHVybiBzLmpvaW4oXCJcIik7XG4gICAgICAgIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWludGVycG9sYXRlL3NyYy9zdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRvbWFpbiwgaW50ZXJ2YWwpIHtcbiAgZG9tYWluID0gZG9tYWluLnNsaWNlKCk7XG5cbiAgdmFyIGkwID0gMCxcbiAgICAgIGkxID0gZG9tYWluLmxlbmd0aCAtIDEsXG4gICAgICB4MCA9IGRvbWFpbltpMF0sXG4gICAgICB4MSA9IGRvbWFpbltpMV0sXG4gICAgICB0O1xuXG4gIGlmICh4MSA8IHgwKSB7XG4gICAgdCA9IGkwLCBpMCA9IGkxLCBpMSA9IHQ7XG4gICAgdCA9IHgwLCB4MCA9IHgxLCB4MSA9IHQ7XG4gIH1cblxuICBkb21haW5baTBdID0gaW50ZXJ2YWwuZmxvb3IoeDApO1xuICBkb21haW5baTFdID0gaW50ZXJ2YWwuY2VpbCh4MSk7XG4gIHJldHVybiBkb21haW47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL25pY2UuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuICt4O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9udW1iZXIuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7bWFwfSBmcm9tIFwiZDMtY29sbGVjdGlvblwiO1xuaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXlcIjtcblxuZXhwb3J0IHZhciBpbXBsaWNpdCA9IHtuYW1lOiBcImltcGxpY2l0XCJ9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRpbmFsKHJhbmdlKSB7XG4gIHZhciBpbmRleCA9IG1hcCgpLFxuICAgICAgZG9tYWluID0gW10sXG4gICAgICB1bmtub3duID0gaW1wbGljaXQ7XG5cbiAgcmFuZ2UgPSByYW5nZSA9PSBudWxsID8gW10gOiBzbGljZS5jYWxsKHJhbmdlKTtcblxuICBmdW5jdGlvbiBzY2FsZShkKSB7XG4gICAgdmFyIGtleSA9IGQgKyBcIlwiLCBpID0gaW5kZXguZ2V0KGtleSk7XG4gICAgaWYgKCFpKSB7XG4gICAgICBpZiAodW5rbm93biAhPT0gaW1wbGljaXQpIHJldHVybiB1bmtub3duO1xuICAgICAgaW5kZXguc2V0KGtleSwgaSA9IGRvbWFpbi5wdXNoKGQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmdlWyhpIC0gMSkgJSByYW5nZS5sZW5ndGhdO1xuICB9XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRvbWFpbi5zbGljZSgpO1xuICAgIGRvbWFpbiA9IFtdLCBpbmRleCA9IG1hcCgpO1xuICAgIHZhciBpID0gLTEsIG4gPSBfLmxlbmd0aCwgZCwga2V5O1xuICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoIWluZGV4LmhhcyhrZXkgPSAoZCA9IF9baV0pICsgXCJcIikpIGluZGV4LnNldChrZXksIGRvbWFpbi5wdXNoKGQpKTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBzbGljZS5jYWxsKF8pLCBzY2FsZSkgOiByYW5nZS5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBvcmRpbmFsKClcbiAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgIC5yYW5nZShyYW5nZSlcbiAgICAgICAgLnVua25vd24odW5rbm93bik7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9vcmRpbmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2Jpc2VjdG9yLCB0aWNrU3RlcH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2ludGVycG9sYXRlTnVtYmVyIGFzIHJlaW50ZXJwb2xhdGV9IGZyb20gXCJkMy1pbnRlcnBvbGF0ZVwiO1xuaW1wb3J0IHt0aW1lWWVhciwgdGltZU1vbnRoLCB0aW1lV2VlaywgdGltZURheSwgdGltZUhvdXIsIHRpbWVNaW51dGUsIHRpbWVTZWNvbmQsIHRpbWVNaWxsaXNlY29uZH0gZnJvbSBcImQzLXRpbWVcIjtcbmltcG9ydCB7dGltZUZvcm1hdH0gZnJvbSBcImQzLXRpbWUtZm9ybWF0XCI7XG5pbXBvcnQge21hcH0gZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCB7ZGVmYXVsdCBhcyBjb250aW51b3VzLCBjb3B5LCBkZWludGVycG9sYXRlTGluZWFyIGFzIGRlaW50ZXJwb2xhdGV9IGZyb20gXCIuL2NvbnRpbnVvdXNcIjtcbmltcG9ydCBuaWNlIGZyb20gXCIuL25pY2VcIjtcblxudmFyIGR1cmF0aW9uU2Vjb25kID0gMTAwMCxcbiAgICBkdXJhdGlvbk1pbnV0ZSA9IGR1cmF0aW9uU2Vjb25kICogNjAsXG4gICAgZHVyYXRpb25Ib3VyID0gZHVyYXRpb25NaW51dGUgKiA2MCxcbiAgICBkdXJhdGlvbkRheSA9IGR1cmF0aW9uSG91ciAqIDI0LFxuICAgIGR1cmF0aW9uV2VlayA9IGR1cmF0aW9uRGF5ICogNyxcbiAgICBkdXJhdGlvbk1vbnRoID0gZHVyYXRpb25EYXkgKiAzMCxcbiAgICBkdXJhdGlvblllYXIgPSBkdXJhdGlvbkRheSAqIDM2NTtcblxuZnVuY3Rpb24gZGF0ZSh0KSB7XG4gIHJldHVybiBuZXcgRGF0ZSh0KTtcbn1cblxuZnVuY3Rpb24gbnVtYmVyKHQpIHtcbiAgcmV0dXJuIHQgaW5zdGFuY2VvZiBEYXRlID8gK3QgOiArbmV3IERhdGUoK3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsZW5kYXIoeWVhciwgbW9udGgsIHdlZWssIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLCBmb3JtYXQpIHtcbiAgdmFyIHNjYWxlID0gY29udGludW91cyhkZWludGVycG9sYXRlLCByZWludGVycG9sYXRlKSxcbiAgICAgIGludmVydCA9IHNjYWxlLmludmVydCxcbiAgICAgIGRvbWFpbiA9IHNjYWxlLmRvbWFpbjtcblxuICB2YXIgZm9ybWF0TWlsbGlzZWNvbmQgPSBmb3JtYXQoXCIuJUxcIiksXG4gICAgICBmb3JtYXRTZWNvbmQgPSBmb3JtYXQoXCI6JVNcIiksXG4gICAgICBmb3JtYXRNaW51dGUgPSBmb3JtYXQoXCIlSTolTVwiKSxcbiAgICAgIGZvcm1hdEhvdXIgPSBmb3JtYXQoXCIlSSAlcFwiKSxcbiAgICAgIGZvcm1hdERheSA9IGZvcm1hdChcIiVhICVkXCIpLFxuICAgICAgZm9ybWF0V2VlayA9IGZvcm1hdChcIiViICVkXCIpLFxuICAgICAgZm9ybWF0TW9udGggPSBmb3JtYXQoXCIlQlwiKSxcbiAgICAgIGZvcm1hdFllYXIgPSBmb3JtYXQoXCIlWVwiKTtcblxuICB2YXIgdGlja0ludGVydmFscyA9IFtcbiAgICBbc2Vjb25kLCAgMSwgICAgICBkdXJhdGlvblNlY29uZF0sXG4gICAgW3NlY29uZCwgIDUsICA1ICogZHVyYXRpb25TZWNvbmRdLFxuICAgIFtzZWNvbmQsIDE1LCAxNSAqIGR1cmF0aW9uU2Vjb25kXSxcbiAgICBbc2Vjb25kLCAzMCwgMzAgKiBkdXJhdGlvblNlY29uZF0sXG4gICAgW21pbnV0ZSwgIDEsICAgICAgZHVyYXRpb25NaW51dGVdLFxuICAgIFttaW51dGUsICA1LCAgNSAqIGR1cmF0aW9uTWludXRlXSxcbiAgICBbbWludXRlLCAxNSwgMTUgKiBkdXJhdGlvbk1pbnV0ZV0sXG4gICAgW21pbnV0ZSwgMzAsIDMwICogZHVyYXRpb25NaW51dGVdLFxuICAgIFsgIGhvdXIsICAxLCAgICAgIGR1cmF0aW9uSG91ciAgXSxcbiAgICBbICBob3VyLCAgMywgIDMgKiBkdXJhdGlvbkhvdXIgIF0sXG4gICAgWyAgaG91ciwgIDYsICA2ICogZHVyYXRpb25Ib3VyICBdLFxuICAgIFsgIGhvdXIsIDEyLCAxMiAqIGR1cmF0aW9uSG91ciAgXSxcbiAgICBbICAgZGF5LCAgMSwgICAgICBkdXJhdGlvbkRheSAgIF0sXG4gICAgWyAgIGRheSwgIDIsICAyICogZHVyYXRpb25EYXkgICBdLFxuICAgIFsgIHdlZWssICAxLCAgICAgIGR1cmF0aW9uV2VlayAgXSxcbiAgICBbIG1vbnRoLCAgMSwgICAgICBkdXJhdGlvbk1vbnRoIF0sXG4gICAgWyBtb250aCwgIDMsICAzICogZHVyYXRpb25Nb250aCBdLFxuICAgIFsgIHllYXIsICAxLCAgICAgIGR1cmF0aW9uWWVhciAgXVxuICBdO1xuXG4gIGZ1bmN0aW9uIHRpY2tGb3JtYXQoZGF0ZSkge1xuICAgIHJldHVybiAoc2Vjb25kKGRhdGUpIDwgZGF0ZSA/IGZvcm1hdE1pbGxpc2Vjb25kXG4gICAgICAgIDogbWludXRlKGRhdGUpIDwgZGF0ZSA/IGZvcm1hdFNlY29uZFxuICAgICAgICA6IGhvdXIoZGF0ZSkgPCBkYXRlID8gZm9ybWF0TWludXRlXG4gICAgICAgIDogZGF5KGRhdGUpIDwgZGF0ZSA/IGZvcm1hdEhvdXJcbiAgICAgICAgOiBtb250aChkYXRlKSA8IGRhdGUgPyAod2VlayhkYXRlKSA8IGRhdGUgPyBmb3JtYXREYXkgOiBmb3JtYXRXZWVrKVxuICAgICAgICA6IHllYXIoZGF0ZSkgPCBkYXRlID8gZm9ybWF0TW9udGhcbiAgICAgICAgOiBmb3JtYXRZZWFyKShkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpY2tJbnRlcnZhbChpbnRlcnZhbCwgc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICBpZiAoaW50ZXJ2YWwgPT0gbnVsbCkgaW50ZXJ2YWwgPSAxMDtcblxuICAgIC8vIElmIGEgZGVzaXJlZCB0aWNrIGNvdW50IGlzIHNwZWNpZmllZCwgcGljayBhIHJlYXNvbmFibGUgdGljayBpbnRlcnZhbFxuICAgIC8vIGJhc2VkIG9uIHRoZSBleHRlbnQgb2YgdGhlIGRvbWFpbiBhbmQgYSByb3VnaCBlc3RpbWF0ZSBvZiB0aWNrIHNpemUuXG4gICAgLy8gT3RoZXJ3aXNlLCBhc3N1bWUgaW50ZXJ2YWwgaXMgYWxyZWFkeSBhIHRpbWUgaW50ZXJ2YWwgYW5kIHVzZSBpdC5cbiAgICBpZiAodHlwZW9mIGludGVydmFsID09PSBcIm51bWJlclwiKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gTWF0aC5hYnMoc3RvcCAtIHN0YXJ0KSAvIGludGVydmFsLFxuICAgICAgICAgIGkgPSBiaXNlY3RvcihmdW5jdGlvbihpKSB7IHJldHVybiBpWzJdOyB9KS5yaWdodCh0aWNrSW50ZXJ2YWxzLCB0YXJnZXQpO1xuICAgICAgaWYgKGkgPT09IHRpY2tJbnRlcnZhbHMubGVuZ3RoKSB7XG4gICAgICAgIHN0ZXAgPSB0aWNrU3RlcChzdGFydCAvIGR1cmF0aW9uWWVhciwgc3RvcCAvIGR1cmF0aW9uWWVhciwgaW50ZXJ2YWwpO1xuICAgICAgICBpbnRlcnZhbCA9IHllYXI7XG4gICAgICB9IGVsc2UgaWYgKGkpIHtcbiAgICAgICAgaSA9IHRpY2tJbnRlcnZhbHNbdGFyZ2V0IC8gdGlja0ludGVydmFsc1tpIC0gMV1bMl0gPCB0aWNrSW50ZXJ2YWxzW2ldWzJdIC8gdGFyZ2V0ID8gaSAtIDEgOiBpXTtcbiAgICAgICAgc3RlcCA9IGlbMV07XG4gICAgICAgIGludGVydmFsID0gaVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ZXAgPSBNYXRoLm1heCh0aWNrU3RlcChzdGFydCwgc3RvcCwgaW50ZXJ2YWwpLCAxKTtcbiAgICAgICAgaW50ZXJ2YWwgPSBtaWxsaXNlY29uZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcCA9PSBudWxsID8gaW50ZXJ2YWwgOiBpbnRlcnZhbC5ldmVyeShzdGVwKTtcbiAgfVxuXG4gIHNjYWxlLmludmVydCA9IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoaW52ZXJ0KHkpKTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBkb21haW4obWFwLmNhbGwoXywgbnVtYmVyKSkgOiBkb21haW4oKS5tYXAoZGF0ZSk7XG4gIH07XG5cbiAgc2NhbGUudGlja3MgPSBmdW5jdGlvbihpbnRlcnZhbCwgc3RlcCkge1xuICAgIHZhciBkID0gZG9tYWluKCksXG4gICAgICAgIHQwID0gZFswXSxcbiAgICAgICAgdDEgPSBkW2QubGVuZ3RoIC0gMV0sXG4gICAgICAgIHIgPSB0MSA8IHQwLFxuICAgICAgICB0O1xuICAgIGlmIChyKSB0ID0gdDAsIHQwID0gdDEsIHQxID0gdDtcbiAgICB0ID0gdGlja0ludGVydmFsKGludGVydmFsLCB0MCwgdDEsIHN0ZXApO1xuICAgIHQgPSB0ID8gdC5yYW5nZSh0MCwgdDEgKyAxKSA6IFtdOyAvLyBpbmNsdXNpdmUgc3RvcFxuICAgIHJldHVybiByID8gdC5yZXZlcnNlKCkgOiB0O1xuICB9O1xuXG4gIHNjYWxlLnRpY2tGb3JtYXQgPSBmdW5jdGlvbihjb3VudCwgc3BlY2lmaWVyKSB7XG4gICAgcmV0dXJuIHNwZWNpZmllciA9PSBudWxsID8gdGlja0Zvcm1hdCA6IGZvcm1hdChzcGVjaWZpZXIpO1xuICB9O1xuXG4gIHNjYWxlLm5pY2UgPSBmdW5jdGlvbihpbnRlcnZhbCwgc3RlcCkge1xuICAgIHZhciBkID0gZG9tYWluKCk7XG4gICAgcmV0dXJuIChpbnRlcnZhbCA9IHRpY2tJbnRlcnZhbChpbnRlcnZhbCwgZFswXSwgZFtkLmxlbmd0aCAtIDFdLCBzdGVwKSlcbiAgICAgICAgPyBkb21haW4obmljZShkLCBpbnRlcnZhbCkpXG4gICAgICAgIDogc2NhbGU7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb3B5KHNjYWxlLCBjYWxlbmRhcih5ZWFyLCBtb250aCwgd2VlaywgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQsIGZvcm1hdCkpO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjYWxlbmRhcih0aW1lWWVhciwgdGltZU1vbnRoLCB0aW1lV2VlaywgdGltZURheSwgdGltZUhvdXIsIHRpbWVNaW51dGUsIHRpbWVTZWNvbmQsIHRpbWVNaWxsaXNlY29uZCwgdGltZUZvcm1hdCkuZG9tYWluKFtuZXcgRGF0ZSgyMDAwLCAwLCAxKSwgbmV3IERhdGUoMjAwMCwgMCwgMildKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvdGltZS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0ZX0gZnJvbSBcIi4vc3JjL2NyZWF0ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0b3J9IGZyb20gXCIuL3NyYy9jcmVhdG9yXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbG9jYWx9IGZyb20gXCIuL3NyYy9sb2NhbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1hdGNoZXJ9IGZyb20gXCIuL3NyYy9tYXRjaGVyXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbW91c2V9IGZyb20gXCIuL3NyYy9tb3VzZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZX0gZnJvbSBcIi4vc3JjL25hbWVzcGFjZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZXN9IGZyb20gXCIuL3NyYy9uYW1lc3BhY2VzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY2xpZW50UG9pbnR9IGZyb20gXCIuL3NyYy9wb2ludFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdH0gZnJvbSBcIi4vc3JjL3NlbGVjdFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdEFsbH0gZnJvbSBcIi4vc3JjL3NlbGVjdEFsbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdGlvbn0gZnJvbSBcIi4vc3JjL3NlbGVjdGlvbi9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdG9yfSBmcm9tIFwiLi9zcmMvc2VsZWN0b3JcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3RvckFsbH0gZnJvbSBcIi4vc3JjL3NlbGVjdG9yQWxsXCI7XG5leHBvcnQge3N0eWxlVmFsdWUgYXMgc3R5bGV9IGZyb20gXCIuL3NyYy9zZWxlY3Rpb24vc3R5bGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0b3VjaH0gZnJvbSBcIi4vc3JjL3RvdWNoXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdG91Y2hlc30gZnJvbSBcIi4vc3JjL3RvdWNoZXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB3aW5kb3d9IGZyb20gXCIuL3NyYy93aW5kb3dcIjtcbmV4cG9ydCB7ZXZlbnQsIGN1c3RvbUV2ZW50fSBmcm9tIFwiLi9zcmMvc2VsZWN0aW9uL29uXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWF0Y2hlciA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfTtcbn07XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGlmICghZWxlbWVudC5tYXRjaGVzKSB7XG4gICAgdmFyIHZlbmRvck1hdGNoZXMgPSBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgIHx8IGVsZW1lbnQubW96TWF0Y2hlc1NlbGVjdG9yXG4gICAgICAgIHx8IGVsZW1lbnQub01hdGNoZXNTZWxlY3RvcjtcbiAgICBtYXRjaGVyID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHZlbmRvck1hdGNoZXMuY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL21hdGNoZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7U2VsZWN0aW9uLCByb290fSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBuZXcgU2VsZWN0aW9uKFtbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcildXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW1tzZWxlY3Rvcl1dLCByb290KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2VcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZW50ZXIgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVudGVyTm9kZShwYXJlbnQsIGRhdHVtKSB7XG4gIHRoaXMub3duZXJEb2N1bWVudCA9IHBhcmVudC5vd25lckRvY3VtZW50O1xuICB0aGlzLm5hbWVzcGFjZVVSSSA9IHBhcmVudC5uYW1lc3BhY2VVUkk7XG4gIHRoaXMuX25leHQgPSBudWxsO1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuX19kYXRhX18gPSBkYXR1bTtcbn1cblxuRW50ZXJOb2RlLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IEVudGVyTm9kZSxcbiAgYXBwZW5kQ2hpbGQ6IGZ1bmN0aW9uKGNoaWxkKSB7IHJldHVybiB0aGlzLl9wYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCB0aGlzLl9uZXh0KTsgfSxcbiAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbihjaGlsZCwgbmV4dCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgbmV4dCk7IH0sXG4gIHF1ZXJ5U2VsZWN0b3I6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7IH0sXG4gIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uKHNlbGVjdG9yKSB7IHJldHVybiB0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7IH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW50ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICByZXR1cm4gbmV3IEFycmF5KHVwZGF0ZS5sZW5ndGgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NwYXJzZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3dcIjtcblxuZnVuY3Rpb24gc3R5bGVSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVDb25zdGFudChuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUsIHByaW9yaXR5KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3R5bGVGdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgIGVsc2UgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2LCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBwcmlvcml0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgICA/IHN0eWxlUmVtb3ZlIDogdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gc3R5bGVGdW5jdGlvblxuICAgICAgICAgICAgOiBzdHlsZUNvbnN0YW50KShuYW1lLCB2YWx1ZSwgcHJpb3JpdHkgPT0gbnVsbCA/IFwiXCIgOiBwcmlvcml0eSkpXG4gICAgICA6IHN0eWxlVmFsdWUodGhpcy5ub2RlKCksIG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVWYWx1ZShub2RlLCBuYW1lKSB7XG4gIHJldHVybiBub2RlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSlcbiAgICAgIHx8IGRlZmF1bHRWaWV3KG5vZGUpLmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gZW1wdHkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBlbXB0eSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0b3JBbGwuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7ZGVmYXVsdCBhcyB0aW1lRm9ybWF0RGVmYXVsdExvY2FsZSwgdGltZUZvcm1hdCwgdGltZVBhcnNlLCB1dGNGb3JtYXQsIHV0Y1BhcnNlfSBmcm9tIFwiLi9zcmMvZGVmYXVsdExvY2FsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRpbWVGb3JtYXRMb2NhbGV9IGZyb20gXCIuL3NyYy9sb2NhbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpc29Gb3JtYXR9IGZyb20gXCIuL3NyYy9pc29Gb3JtYXRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpc29QYXJzZX0gZnJvbSBcIi4vc3JjL2lzb1BhcnNlXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS1mb3JtYXQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7dXRjRm9ybWF0fSBmcm9tIFwiLi9kZWZhdWx0TG9jYWxlXCI7XG5cbmV4cG9ydCB2YXIgaXNvU3BlY2lmaWVyID0gXCIlWS0lbS0lZFQlSDolTTolUy4lTFpcIjtcblxuZnVuY3Rpb24gZm9ybWF0SXNvTmF0aXZlKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKTtcbn1cblxudmFyIGZvcm1hdElzbyA9IERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nXG4gICAgPyBmb3JtYXRJc29OYXRpdmVcbiAgICA6IHV0Y0Zvcm1hdChpc29TcGVjaWZpZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRJc287XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS1mb3JtYXQvc3JjL2lzb0Zvcm1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtcbiAgdGltZURheSxcbiAgdGltZVN1bmRheSxcbiAgdGltZU1vbmRheSxcbiAgdGltZVRodXJzZGF5LFxuICB0aW1lWWVhcixcbiAgdXRjRGF5LFxuICB1dGNTdW5kYXksXG4gIHV0Y01vbmRheSxcbiAgdXRjVGh1cnNkYXksXG4gIHV0Y1llYXJcbn0gZnJvbSBcImQzLXRpbWVcIjtcblxuZnVuY3Rpb24gbG9jYWxEYXRlKGQpIHtcbiAgaWYgKDAgPD0gZC55ICYmIGQueSA8IDEwMCkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoLTEsIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpO1xuICAgIGRhdGUuc2V0RnVsbFllYXIoZC55KTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICByZXR1cm4gbmV3IERhdGUoZC55LCBkLm0sIGQuZCwgZC5ILCBkLk0sIGQuUywgZC5MKTtcbn1cblxuZnVuY3Rpb24gdXRjRGF0ZShkKSB7XG4gIGlmICgwIDw9IGQueSAmJiBkLnkgPCAxMDApIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKC0xLCBkLm0sIGQuZCwgZC5ILCBkLk0sIGQuUywgZC5MKSk7XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcihkLnkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyhkLnksIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpKTtcbn1cblxuZnVuY3Rpb24gbmV3WWVhcih5KSB7XG4gIHJldHVybiB7eTogeSwgbTogMCwgZDogMSwgSDogMCwgTTogMCwgUzogMCwgTDogMH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvY2FsZShsb2NhbGUpIHtcbiAgdmFyIGxvY2FsZV9kYXRlVGltZSA9IGxvY2FsZS5kYXRlVGltZSxcbiAgICAgIGxvY2FsZV9kYXRlID0gbG9jYWxlLmRhdGUsXG4gICAgICBsb2NhbGVfdGltZSA9IGxvY2FsZS50aW1lLFxuICAgICAgbG9jYWxlX3BlcmlvZHMgPSBsb2NhbGUucGVyaW9kcyxcbiAgICAgIGxvY2FsZV93ZWVrZGF5cyA9IGxvY2FsZS5kYXlzLFxuICAgICAgbG9jYWxlX3Nob3J0V2Vla2RheXMgPSBsb2NhbGUuc2hvcnREYXlzLFxuICAgICAgbG9jYWxlX21vbnRocyA9IGxvY2FsZS5tb250aHMsXG4gICAgICBsb2NhbGVfc2hvcnRNb250aHMgPSBsb2NhbGUuc2hvcnRNb250aHM7XG5cbiAgdmFyIHBlcmlvZFJlID0gZm9ybWF0UmUobG9jYWxlX3BlcmlvZHMpLFxuICAgICAgcGVyaW9kTG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9wZXJpb2RzKSxcbiAgICAgIHdlZWtkYXlSZSA9IGZvcm1hdFJlKGxvY2FsZV93ZWVrZGF5cyksXG4gICAgICB3ZWVrZGF5TG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV93ZWVrZGF5cyksXG4gICAgICBzaG9ydFdlZWtkYXlSZSA9IGZvcm1hdFJlKGxvY2FsZV9zaG9ydFdlZWtkYXlzKSxcbiAgICAgIHNob3J0V2Vla2RheUxvb2t1cCA9IGZvcm1hdExvb2t1cChsb2NhbGVfc2hvcnRXZWVrZGF5cyksXG4gICAgICBtb250aFJlID0gZm9ybWF0UmUobG9jYWxlX21vbnRocyksXG4gICAgICBtb250aExvb2t1cCA9IGZvcm1hdExvb2t1cChsb2NhbGVfbW9udGhzKSxcbiAgICAgIHNob3J0TW9udGhSZSA9IGZvcm1hdFJlKGxvY2FsZV9zaG9ydE1vbnRocyksXG4gICAgICBzaG9ydE1vbnRoTG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9zaG9ydE1vbnRocyk7XG5cbiAgdmFyIGZvcm1hdHMgPSB7XG4gICAgXCJhXCI6IGZvcm1hdFNob3J0V2Vla2RheSxcbiAgICBcIkFcIjogZm9ybWF0V2Vla2RheSxcbiAgICBcImJcIjogZm9ybWF0U2hvcnRNb250aCxcbiAgICBcIkJcIjogZm9ybWF0TW9udGgsXG4gICAgXCJjXCI6IG51bGwsXG4gICAgXCJkXCI6IGZvcm1hdERheU9mTW9udGgsXG4gICAgXCJlXCI6IGZvcm1hdERheU9mTW9udGgsXG4gICAgXCJmXCI6IGZvcm1hdE1pY3Jvc2Vjb25kcyxcbiAgICBcIkhcIjogZm9ybWF0SG91cjI0LFxuICAgIFwiSVwiOiBmb3JtYXRIb3VyMTIsXG4gICAgXCJqXCI6IGZvcm1hdERheU9mWWVhcixcbiAgICBcIkxcIjogZm9ybWF0TWlsbGlzZWNvbmRzLFxuICAgIFwibVwiOiBmb3JtYXRNb250aE51bWJlcixcbiAgICBcIk1cIjogZm9ybWF0TWludXRlcyxcbiAgICBcInBcIjogZm9ybWF0UGVyaW9kLFxuICAgIFwiUVwiOiBmb3JtYXRVbml4VGltZXN0YW1wLFxuICAgIFwic1wiOiBmb3JtYXRVbml4VGltZXN0YW1wU2Vjb25kcyxcbiAgICBcIlNcIjogZm9ybWF0U2Vjb25kcyxcbiAgICBcInVcIjogZm9ybWF0V2Vla2RheU51bWJlck1vbmRheSxcbiAgICBcIlVcIjogZm9ybWF0V2Vla051bWJlclN1bmRheSxcbiAgICBcIlZcIjogZm9ybWF0V2Vla051bWJlcklTTyxcbiAgICBcIndcIjogZm9ybWF0V2Vla2RheU51bWJlclN1bmRheSxcbiAgICBcIldcIjogZm9ybWF0V2Vla051bWJlck1vbmRheSxcbiAgICBcInhcIjogbnVsbCxcbiAgICBcIlhcIjogbnVsbCxcbiAgICBcInlcIjogZm9ybWF0WWVhcixcbiAgICBcIllcIjogZm9ybWF0RnVsbFllYXIsXG4gICAgXCJaXCI6IGZvcm1hdFpvbmUsXG4gICAgXCIlXCI6IGZvcm1hdExpdGVyYWxQZXJjZW50XG4gIH07XG5cbiAgdmFyIHV0Y0Zvcm1hdHMgPSB7XG4gICAgXCJhXCI6IGZvcm1hdFVUQ1Nob3J0V2Vla2RheSxcbiAgICBcIkFcIjogZm9ybWF0VVRDV2Vla2RheSxcbiAgICBcImJcIjogZm9ybWF0VVRDU2hvcnRNb250aCxcbiAgICBcIkJcIjogZm9ybWF0VVRDTW9udGgsXG4gICAgXCJjXCI6IG51bGwsXG4gICAgXCJkXCI6IGZvcm1hdFVUQ0RheU9mTW9udGgsXG4gICAgXCJlXCI6IGZvcm1hdFVUQ0RheU9mTW9udGgsXG4gICAgXCJmXCI6IGZvcm1hdFVUQ01pY3Jvc2Vjb25kcyxcbiAgICBcIkhcIjogZm9ybWF0VVRDSG91cjI0LFxuICAgIFwiSVwiOiBmb3JtYXRVVENIb3VyMTIsXG4gICAgXCJqXCI6IGZvcm1hdFVUQ0RheU9mWWVhcixcbiAgICBcIkxcIjogZm9ybWF0VVRDTWlsbGlzZWNvbmRzLFxuICAgIFwibVwiOiBmb3JtYXRVVENNb250aE51bWJlcixcbiAgICBcIk1cIjogZm9ybWF0VVRDTWludXRlcyxcbiAgICBcInBcIjogZm9ybWF0VVRDUGVyaW9kLFxuICAgIFwiUVwiOiBmb3JtYXRVbml4VGltZXN0YW1wLFxuICAgIFwic1wiOiBmb3JtYXRVbml4VGltZXN0YW1wU2Vjb25kcyxcbiAgICBcIlNcIjogZm9ybWF0VVRDU2Vjb25kcyxcbiAgICBcInVcIjogZm9ybWF0VVRDV2Vla2RheU51bWJlck1vbmRheSxcbiAgICBcIlVcIjogZm9ybWF0VVRDV2Vla051bWJlclN1bmRheSxcbiAgICBcIlZcIjogZm9ybWF0VVRDV2Vla051bWJlcklTTyxcbiAgICBcIndcIjogZm9ybWF0VVRDV2Vla2RheU51bWJlclN1bmRheSxcbiAgICBcIldcIjogZm9ybWF0VVRDV2Vla051bWJlck1vbmRheSxcbiAgICBcInhcIjogbnVsbCxcbiAgICBcIlhcIjogbnVsbCxcbiAgICBcInlcIjogZm9ybWF0VVRDWWVhcixcbiAgICBcIllcIjogZm9ybWF0VVRDRnVsbFllYXIsXG4gICAgXCJaXCI6IGZvcm1hdFVUQ1pvbmUsXG4gICAgXCIlXCI6IGZvcm1hdExpdGVyYWxQZXJjZW50XG4gIH07XG5cbiAgdmFyIHBhcnNlcyA9IHtcbiAgICBcImFcIjogcGFyc2VTaG9ydFdlZWtkYXksXG4gICAgXCJBXCI6IHBhcnNlV2Vla2RheSxcbiAgICBcImJcIjogcGFyc2VTaG9ydE1vbnRoLFxuICAgIFwiQlwiOiBwYXJzZU1vbnRoLFxuICAgIFwiY1wiOiBwYXJzZUxvY2FsZURhdGVUaW1lLFxuICAgIFwiZFwiOiBwYXJzZURheU9mTW9udGgsXG4gICAgXCJlXCI6IHBhcnNlRGF5T2ZNb250aCxcbiAgICBcImZcIjogcGFyc2VNaWNyb3NlY29uZHMsXG4gICAgXCJIXCI6IHBhcnNlSG91cjI0LFxuICAgIFwiSVwiOiBwYXJzZUhvdXIyNCxcbiAgICBcImpcIjogcGFyc2VEYXlPZlllYXIsXG4gICAgXCJMXCI6IHBhcnNlTWlsbGlzZWNvbmRzLFxuICAgIFwibVwiOiBwYXJzZU1vbnRoTnVtYmVyLFxuICAgIFwiTVwiOiBwYXJzZU1pbnV0ZXMsXG4gICAgXCJwXCI6IHBhcnNlUGVyaW9kLFxuICAgIFwiUVwiOiBwYXJzZVVuaXhUaW1lc3RhbXAsXG4gICAgXCJzXCI6IHBhcnNlVW5peFRpbWVzdGFtcFNlY29uZHMsXG4gICAgXCJTXCI6IHBhcnNlU2Vjb25kcyxcbiAgICBcInVcIjogcGFyc2VXZWVrZGF5TnVtYmVyTW9uZGF5LFxuICAgIFwiVVwiOiBwYXJzZVdlZWtOdW1iZXJTdW5kYXksXG4gICAgXCJWXCI6IHBhcnNlV2Vla051bWJlcklTTyxcbiAgICBcIndcIjogcGFyc2VXZWVrZGF5TnVtYmVyU3VuZGF5LFxuICAgIFwiV1wiOiBwYXJzZVdlZWtOdW1iZXJNb25kYXksXG4gICAgXCJ4XCI6IHBhcnNlTG9jYWxlRGF0ZSxcbiAgICBcIlhcIjogcGFyc2VMb2NhbGVUaW1lLFxuICAgIFwieVwiOiBwYXJzZVllYXIsXG4gICAgXCJZXCI6IHBhcnNlRnVsbFllYXIsXG4gICAgXCJaXCI6IHBhcnNlWm9uZSxcbiAgICBcIiVcIjogcGFyc2VMaXRlcmFsUGVyY2VudFxuICB9O1xuXG4gIC8vIFRoZXNlIHJlY3Vyc2l2ZSBkaXJlY3RpdmUgZGVmaW5pdGlvbnMgbXVzdCBiZSBkZWZlcnJlZC5cbiAgZm9ybWF0cy54ID0gbmV3Rm9ybWF0KGxvY2FsZV9kYXRlLCBmb3JtYXRzKTtcbiAgZm9ybWF0cy5YID0gbmV3Rm9ybWF0KGxvY2FsZV90aW1lLCBmb3JtYXRzKTtcbiAgZm9ybWF0cy5jID0gbmV3Rm9ybWF0KGxvY2FsZV9kYXRlVGltZSwgZm9ybWF0cyk7XG4gIHV0Y0Zvcm1hdHMueCA9IG5ld0Zvcm1hdChsb2NhbGVfZGF0ZSwgdXRjRm9ybWF0cyk7XG4gIHV0Y0Zvcm1hdHMuWCA9IG5ld0Zvcm1hdChsb2NhbGVfdGltZSwgdXRjRm9ybWF0cyk7XG4gIHV0Y0Zvcm1hdHMuYyA9IG5ld0Zvcm1hdChsb2NhbGVfZGF0ZVRpbWUsIHV0Y0Zvcm1hdHMpO1xuXG4gIGZ1bmN0aW9uIG5ld0Zvcm1hdChzcGVjaWZpZXIsIGZvcm1hdHMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZGF0ZSkge1xuICAgICAgdmFyIHN0cmluZyA9IFtdLFxuICAgICAgICAgIGkgPSAtMSxcbiAgICAgICAgICBqID0gMCxcbiAgICAgICAgICBuID0gc3BlY2lmaWVyLmxlbmd0aCxcbiAgICAgICAgICBjLFxuICAgICAgICAgIHBhZCxcbiAgICAgICAgICBmb3JtYXQ7XG5cbiAgICAgIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkgZGF0ZSA9IG5ldyBEYXRlKCtkYXRlKTtcblxuICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgaWYgKHNwZWNpZmllci5jaGFyQ29kZUF0KGkpID09PSAzNykge1xuICAgICAgICAgIHN0cmluZy5wdXNoKHNwZWNpZmllci5zbGljZShqLCBpKSk7XG4gICAgICAgICAgaWYgKChwYWQgPSBwYWRzW2MgPSBzcGVjaWZpZXIuY2hhckF0KCsraSldKSAhPSBudWxsKSBjID0gc3BlY2lmaWVyLmNoYXJBdCgrK2kpO1xuICAgICAgICAgIGVsc2UgcGFkID0gYyA9PT0gXCJlXCIgPyBcIiBcIiA6IFwiMFwiO1xuICAgICAgICAgIGlmIChmb3JtYXQgPSBmb3JtYXRzW2NdKSBjID0gZm9ybWF0KGRhdGUsIHBhZCk7XG4gICAgICAgICAgc3RyaW5nLnB1c2goYyk7XG4gICAgICAgICAgaiA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0cmluZy5wdXNoKHNwZWNpZmllci5zbGljZShqLCBpKSk7XG4gICAgICByZXR1cm4gc3RyaW5nLmpvaW4oXCJcIik7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld1BhcnNlKHNwZWNpZmllciwgbmV3RGF0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIHZhciBkID0gbmV3WWVhcigxOTAwKSxcbiAgICAgICAgICBpID0gcGFyc2VTcGVjaWZpZXIoZCwgc3BlY2lmaWVyLCBzdHJpbmcgKz0gXCJcIiwgMCksXG4gICAgICAgICAgd2VlaywgZGF5O1xuICAgICAgaWYgKGkgIT0gc3RyaW5nLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIC8vIElmIGEgVU5JWCB0aW1lc3RhbXAgaXMgc3BlY2lmaWVkLCByZXR1cm4gaXQuXG4gICAgICBpZiAoXCJRXCIgaW4gZCkgcmV0dXJuIG5ldyBEYXRlKGQuUSk7XG5cbiAgICAgIC8vIFRoZSBhbS1wbSBmbGFnIGlzIDAgZm9yIEFNLCBhbmQgMSBmb3IgUE0uXG4gICAgICBpZiAoXCJwXCIgaW4gZCkgZC5IID0gZC5IICUgMTIgKyBkLnAgKiAxMjtcblxuICAgICAgLy8gQ29udmVydCBkYXktb2Ytd2VlayBhbmQgd2Vlay1vZi15ZWFyIHRvIGRheS1vZi15ZWFyLlxuICAgICAgaWYgKFwiVlwiIGluIGQpIHtcbiAgICAgICAgaWYgKGQuViA8IDEgfHwgZC5WID4gNTMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoIShcIndcIiBpbiBkKSkgZC53ID0gMTtcbiAgICAgICAgaWYgKFwiWlwiIGluIGQpIHtcbiAgICAgICAgICB3ZWVrID0gdXRjRGF0ZShuZXdZZWFyKGQueSkpLCBkYXkgPSB3ZWVrLmdldFVUQ0RheSgpO1xuICAgICAgICAgIHdlZWsgPSBkYXkgPiA0IHx8IGRheSA9PT0gMCA/IHV0Y01vbmRheS5jZWlsKHdlZWspIDogdXRjTW9uZGF5KHdlZWspO1xuICAgICAgICAgIHdlZWsgPSB1dGNEYXkub2Zmc2V0KHdlZWssIChkLlYgLSAxKSAqIDcpO1xuICAgICAgICAgIGQueSA9IHdlZWsuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgICBkLm0gPSB3ZWVrLmdldFVUQ01vbnRoKCk7XG4gICAgICAgICAgZC5kID0gd2Vlay5nZXRVVENEYXRlKCkgKyAoZC53ICsgNikgJSA3O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlZWsgPSBuZXdEYXRlKG5ld1llYXIoZC55KSksIGRheSA9IHdlZWsuZ2V0RGF5KCk7XG4gICAgICAgICAgd2VlayA9IGRheSA+IDQgfHwgZGF5ID09PSAwID8gdGltZU1vbmRheS5jZWlsKHdlZWspIDogdGltZU1vbmRheSh3ZWVrKTtcbiAgICAgICAgICB3ZWVrID0gdGltZURheS5vZmZzZXQod2VlaywgKGQuViAtIDEpICogNyk7XG4gICAgICAgICAgZC55ID0gd2Vlay5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgIGQubSA9IHdlZWsuZ2V0TW9udGgoKTtcbiAgICAgICAgICBkLmQgPSB3ZWVrLmdldERhdGUoKSArIChkLncgKyA2KSAlIDc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXCJXXCIgaW4gZCB8fCBcIlVcIiBpbiBkKSB7XG4gICAgICAgIGlmICghKFwid1wiIGluIGQpKSBkLncgPSBcInVcIiBpbiBkID8gZC51ICUgNyA6IFwiV1wiIGluIGQgPyAxIDogMDtcbiAgICAgICAgZGF5ID0gXCJaXCIgaW4gZCA/IHV0Y0RhdGUobmV3WWVhcihkLnkpKS5nZXRVVENEYXkoKSA6IG5ld0RhdGUobmV3WWVhcihkLnkpKS5nZXREYXkoKTtcbiAgICAgICAgZC5tID0gMDtcbiAgICAgICAgZC5kID0gXCJXXCIgaW4gZCA/IChkLncgKyA2KSAlIDcgKyBkLlcgKiA3IC0gKGRheSArIDUpICUgNyA6IGQudyArIGQuVSAqIDcgLSAoZGF5ICsgNikgJSA3O1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBhIHRpbWUgem9uZSBpcyBzcGVjaWZpZWQsIGFsbCBmaWVsZHMgYXJlIGludGVycHJldGVkIGFzIFVUQyBhbmQgdGhlblxuICAgICAgLy8gb2Zmc2V0IGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIHRpbWUgem9uZS5cbiAgICAgIGlmIChcIlpcIiBpbiBkKSB7XG4gICAgICAgIGQuSCArPSBkLlogLyAxMDAgfCAwO1xuICAgICAgICBkLk0gKz0gZC5aICUgMTAwO1xuICAgICAgICByZXR1cm4gdXRjRGF0ZShkKTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlLCBhbGwgZmllbGRzIGFyZSBpbiBsb2NhbCB0aW1lLlxuICAgICAgcmV0dXJuIG5ld0RhdGUoZCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU3BlY2lmaWVyKGQsIHNwZWNpZmllciwgc3RyaW5nLCBqKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBuID0gc3BlY2lmaWVyLmxlbmd0aCxcbiAgICAgICAgbSA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgIGMsXG4gICAgICAgIHBhcnNlO1xuXG4gICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICBpZiAoaiA+PSBtKSByZXR1cm4gLTE7XG4gICAgICBjID0gc3BlY2lmaWVyLmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgIGlmIChjID09PSAzNykge1xuICAgICAgICBjID0gc3BlY2lmaWVyLmNoYXJBdChpKyspO1xuICAgICAgICBwYXJzZSA9IHBhcnNlc1tjIGluIHBhZHMgPyBzcGVjaWZpZXIuY2hhckF0KGkrKykgOiBjXTtcbiAgICAgICAgaWYgKCFwYXJzZSB8fCAoKGogPSBwYXJzZShkLCBzdHJpbmcsIGopKSA8IDApKSByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGMgIT0gc3RyaW5nLmNoYXJDb2RlQXQoaisrKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGo7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVBlcmlvZChkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IHBlcmlvZFJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLnAgPSBwZXJpb2RMb29rdXBbblswXS50b0xvd2VyQ2FzZSgpXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VTaG9ydFdlZWtkYXkoZCwgc3RyaW5nLCBpKSB7XG4gICAgdmFyIG4gPSBzaG9ydFdlZWtkYXlSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gICAgcmV0dXJuIG4gPyAoZC53ID0gc2hvcnRXZWVrZGF5TG9va3VwW25bMF0udG9Mb3dlckNhc2UoKV0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlV2Vla2RheShkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IHdlZWtkYXlSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gICAgcmV0dXJuIG4gPyAoZC53ID0gd2Vla2RheUxvb2t1cFtuWzBdLnRvTG93ZXJDYXNlKCldLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVNob3J0TW9udGgoZCwgc3RyaW5nLCBpKSB7XG4gICAgdmFyIG4gPSBzaG9ydE1vbnRoUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgIHJldHVybiBuID8gKGQubSA9IHNob3J0TW9udGhMb29rdXBbblswXS50b0xvd2VyQ2FzZSgpXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VNb250aChkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IG1vbnRoUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgIHJldHVybiBuID8gKGQubSA9IG1vbnRoTG9va3VwW25bMF0udG9Mb3dlckNhc2UoKV0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTG9jYWxlRGF0ZVRpbWUoZCwgc3RyaW5nLCBpKSB7XG4gICAgcmV0dXJuIHBhcnNlU3BlY2lmaWVyKGQsIGxvY2FsZV9kYXRlVGltZSwgc3RyaW5nLCBpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTG9jYWxlRGF0ZShkLCBzdHJpbmcsIGkpIHtcbiAgICByZXR1cm4gcGFyc2VTcGVjaWZpZXIoZCwgbG9jYWxlX2RhdGUsIHN0cmluZywgaSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUxvY2FsZVRpbWUoZCwgc3RyaW5nLCBpKSB7XG4gICAgcmV0dXJuIHBhcnNlU3BlY2lmaWVyKGQsIGxvY2FsZV90aW1lLCBzdHJpbmcsIGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0U2hvcnRXZWVrZGF5KGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3Nob3J0V2Vla2RheXNbZC5nZXREYXkoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRXZWVrZGF5KGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3dlZWtkYXlzW2QuZ2V0RGF5KCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0U2hvcnRNb250aChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9zaG9ydE1vbnRoc1tkLmdldE1vbnRoKCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0TW9udGgoZCkge1xuICAgIHJldHVybiBsb2NhbGVfbW9udGhzW2QuZ2V0TW9udGgoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRQZXJpb2QoZCkge1xuICAgIHJldHVybiBsb2NhbGVfcGVyaW9kc1srKGQuZ2V0SG91cnMoKSA+PSAxMildO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDU2hvcnRXZWVrZGF5KGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3Nob3J0V2Vla2RheXNbZC5nZXRVVENEYXkoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENXZWVrZGF5KGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3dlZWtkYXlzW2QuZ2V0VVRDRGF5KCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDU2hvcnRNb250aChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9zaG9ydE1vbnRoc1tkLmdldFVUQ01vbnRoKCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDTW9udGgoZCkge1xuICAgIHJldHVybiBsb2NhbGVfbW9udGhzW2QuZ2V0VVRDTW9udGgoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENQZXJpb2QoZCkge1xuICAgIHJldHVybiBsb2NhbGVfcGVyaW9kc1srKGQuZ2V0VVRDSG91cnMoKSA+PSAxMildO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXQ6IGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgICAgdmFyIGYgPSBuZXdGb3JtYXQoc3BlY2lmaWVyICs9IFwiXCIsIGZvcm1hdHMpO1xuICAgICAgZi50b1N0cmluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gc3BlY2lmaWVyOyB9O1xuICAgICAgcmV0dXJuIGY7XG4gICAgfSxcbiAgICBwYXJzZTogZnVuY3Rpb24oc3BlY2lmaWVyKSB7XG4gICAgICB2YXIgcCA9IG5ld1BhcnNlKHNwZWNpZmllciArPSBcIlwiLCBsb2NhbERhdGUpO1xuICAgICAgcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gc3BlY2lmaWVyOyB9O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICB1dGNGb3JtYXQ6IGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgICAgdmFyIGYgPSBuZXdGb3JtYXQoc3BlY2lmaWVyICs9IFwiXCIsIHV0Y0Zvcm1hdHMpO1xuICAgICAgZi50b1N0cmluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gc3BlY2lmaWVyOyB9O1xuICAgICAgcmV0dXJuIGY7XG4gICAgfSxcbiAgICB1dGNQYXJzZTogZnVuY3Rpb24oc3BlY2lmaWVyKSB7XG4gICAgICB2YXIgcCA9IG5ld1BhcnNlKHNwZWNpZmllciwgdXRjRGF0ZSk7XG4gICAgICBwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7IHJldHVybiBzcGVjaWZpZXI7IH07XG4gICAgICByZXR1cm4gcDtcbiAgICB9XG4gIH07XG59XG5cbnZhciBwYWRzID0ge1wiLVwiOiBcIlwiLCBcIl9cIjogXCIgXCIsIFwiMFwiOiBcIjBcIn0sXG4gICAgbnVtYmVyUmUgPSAvXlxccypcXGQrLywgLy8gbm90ZTogaWdub3JlcyBuZXh0IGRpcmVjdGl2ZVxuICAgIHBlcmNlbnRSZSA9IC9eJS8sXG4gICAgcmVxdW90ZVJlID0gL1tcXFxcXiQqKz98W1xcXSgpLnt9XS9nO1xuXG5mdW5jdGlvbiBwYWQodmFsdWUsIGZpbGwsIHdpZHRoKSB7XG4gIHZhciBzaWduID0gdmFsdWUgPCAwID8gXCItXCIgOiBcIlwiLFxuICAgICAgc3RyaW5nID0gKHNpZ24gPyAtdmFsdWUgOiB2YWx1ZSkgKyBcIlwiLFxuICAgICAgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcbiAgcmV0dXJuIHNpZ24gKyAobGVuZ3RoIDwgd2lkdGggPyBuZXcgQXJyYXkod2lkdGggLSBsZW5ndGggKyAxKS5qb2luKGZpbGwpICsgc3RyaW5nIDogc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gcmVxdW90ZShzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UocmVxdW90ZVJlLCBcIlxcXFwkJlwiKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UmUobmFtZXMpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyBuYW1lcy5tYXAocmVxdW90ZSkuam9pbihcInxcIikgKyBcIilcIiwgXCJpXCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRMb29rdXAobmFtZXMpIHtcbiAgdmFyIG1hcCA9IHt9LCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBtYXBbbmFtZXNbaV0udG9Mb3dlckNhc2UoKV0gPSBpO1xuICByZXR1cm4gbWFwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVdlZWtkYXlOdW1iZXJTdW5kYXkoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDEpKTtcbiAgcmV0dXJuIG4gPyAoZC53ID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VXZWVrZGF5TnVtYmVyTW9uZGF5KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAxKSk7XG4gIHJldHVybiBuID8gKGQudSA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlV2Vla051bWJlclN1bmRheShkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLlUgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVdlZWtOdW1iZXJJU08oZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5WID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VXZWVrTnVtYmVyTW9uZGF5KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuVyA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRnVsbFllYXIoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDQpKTtcbiAgcmV0dXJuIG4gPyAoZC55ID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQueSA9ICtuWzBdICsgKCtuWzBdID4gNjggPyAxOTAwIDogMjAwMCksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2Vab25lKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IC9eKFopfChbKy1dXFxkXFxkKSg/Ojo/KFxcZFxcZCkpPy8uZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDYpKTtcbiAgcmV0dXJuIG4gPyAoZC5aID0gblsxXSA/IDAgOiAtKG5bMl0gKyAoblszXSB8fCBcIjAwXCIpKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1vbnRoTnVtYmVyKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQubSA9IG5bMF0gLSAxLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF5T2ZNb250aChkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLmQgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZURheU9mWWVhcihkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMykpO1xuICByZXR1cm4gbiA/IChkLm0gPSAwLCBkLmQgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZUhvdXIyNChkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLkggPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1pbnV0ZXMoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5NID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTZWNvbmRzKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuUyA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTWlsbGlzZWNvbmRzKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAzKSk7XG4gIHJldHVybiBuID8gKGQuTCA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTWljcm9zZWNvbmRzKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyA2KSk7XG4gIHJldHVybiBuID8gKGQuTCA9IE1hdGguZmxvb3IoblswXSAvIDEwMDApLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGl0ZXJhbFBlcmNlbnQoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gcGVyY2VudFJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAxKSk7XG4gIHJldHVybiBuID8gaSArIG5bMF0ubGVuZ3RoIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVW5peFRpbWVzdGFtcChkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpKSk7XG4gIHJldHVybiBuID8gKGQuUSA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVW5peFRpbWVzdGFtcFNlY29uZHMoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICByZXR1cm4gbiA/IChkLlEgPSAoK25bMF0pICogMTAwMCwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXlPZk1vbnRoKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldERhdGUoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhvdXIyNChkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRIb3VycygpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0SG91cjEyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldEhvdXJzKCkgJSAxMiB8fCAxMiwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERheU9mWWVhcihkLCBwKSB7XG4gIHJldHVybiBwYWQoMSArIHRpbWVEYXkuY291bnQodGltZVllYXIoZCksIGQpLCBwLCAzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TWlsbGlzZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldE1pbGxpc2Vjb25kcygpLCBwLCAzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TWljcm9zZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIGZvcm1hdE1pbGxpc2Vjb25kcyhkLCBwKSArIFwiMDAwXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1vbnRoTnVtYmVyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldE1vbnRoKCkgKyAxLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TWludXRlcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRNaW51dGVzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRTZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFNlY29uZHMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdlZWtkYXlOdW1iZXJNb25kYXkoZCkge1xuICB2YXIgZGF5ID0gZC5nZXREYXkoKTtcbiAgcmV0dXJuIGRheSA9PT0gMCA/IDcgOiBkYXk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdlZWtOdW1iZXJTdW5kYXkoZCwgcCkge1xuICByZXR1cm4gcGFkKHRpbWVTdW5kYXkuY291bnQodGltZVllYXIoZCksIGQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0V2Vla051bWJlcklTTyhkLCBwKSB7XG4gIHZhciBkYXkgPSBkLmdldERheSgpO1xuICBkID0gKGRheSA+PSA0IHx8IGRheSA9PT0gMCkgPyB0aW1lVGh1cnNkYXkoZCkgOiB0aW1lVGh1cnNkYXkuY2VpbChkKTtcbiAgcmV0dXJuIHBhZCh0aW1lVGh1cnNkYXkuY291bnQodGltZVllYXIoZCksIGQpICsgKHRpbWVZZWFyKGQpLmdldERheSgpID09PSA0KSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdlZWtkYXlOdW1iZXJTdW5kYXkoZCkge1xuICByZXR1cm4gZC5nZXREYXkoKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0V2Vla051bWJlck1vbmRheShkLCBwKSB7XG4gIHJldHVybiBwYWQodGltZU1vbmRheS5jb3VudCh0aW1lWWVhcihkKSwgZCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldEZ1bGxZZWFyKCkgJSAxMDAsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRGdWxsWWVhcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRGdWxsWWVhcigpICUgMTAwMDAsIHAsIDQpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRab25lKGQpIHtcbiAgdmFyIHogPSBkLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIHJldHVybiAoeiA+IDAgPyBcIi1cIiA6ICh6ICo9IC0xLCBcIitcIikpXG4gICAgICArIHBhZCh6IC8gNjAgfCAwLCBcIjBcIiwgMilcbiAgICAgICsgcGFkKHogJSA2MCwgXCIwXCIsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENEYXlPZk1vbnRoKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0RhdGUoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0hvdXIyNChkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENIb3VycygpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDSG91cjEyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0RheU9mWWVhcihkLCBwKSB7XG4gIHJldHVybiBwYWQoMSArIHV0Y0RheS5jb3VudCh1dGNZZWFyKGQpLCBkKSwgcCwgMyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ01pbGxpc2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENNaWxsaXNlY29uZHMoKSwgcCwgMyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ01pY3Jvc2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBmb3JtYXRVVENNaWxsaXNlY29uZHMoZCwgcCkgKyBcIjAwMFwiO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENNb250aE51bWJlcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENNb250aCgpICsgMSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ01pbnV0ZXMoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDTWludXRlcygpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDU2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENTZWNvbmRzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENXZWVrZGF5TnVtYmVyTW9uZGF5KGQpIHtcbiAgdmFyIGRvdyA9IGQuZ2V0VVRDRGF5KCk7XG4gIHJldHVybiBkb3cgPT09IDAgPyA3IDogZG93O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENXZWVrTnVtYmVyU3VuZGF5KGQsIHApIHtcbiAgcmV0dXJuIHBhZCh1dGNTdW5kYXkuY291bnQodXRjWWVhcihkKSwgZCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENXZWVrTnVtYmVySVNPKGQsIHApIHtcbiAgdmFyIGRheSA9IGQuZ2V0VVRDRGF5KCk7XG4gIGQgPSAoZGF5ID49IDQgfHwgZGF5ID09PSAwKSA/IHV0Y1RodXJzZGF5KGQpIDogdXRjVGh1cnNkYXkuY2VpbChkKTtcbiAgcmV0dXJuIHBhZCh1dGNUaHVyc2RheS5jb3VudCh1dGNZZWFyKGQpLCBkKSArICh1dGNZZWFyKGQpLmdldFVUQ0RheSgpID09PSA0KSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXJTdW5kYXkoZCkge1xuICByZXR1cm4gZC5nZXRVVENEYXkoKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDV2Vla051bWJlck1vbmRheShkLCBwKSB7XG4gIHJldHVybiBwYWQodXRjTW9uZGF5LmNvdW50KHV0Y1llYXIoZCksIGQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDWWVhcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENGdWxsWWVhcigpICUgMTAwLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDRnVsbFllYXIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDRnVsbFllYXIoKSAlIDEwMDAwLCBwLCA0KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDWm9uZSgpIHtcbiAgcmV0dXJuIFwiKzAwMDBcIjtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TGl0ZXJhbFBlcmNlbnQoKSB7XG4gIHJldHVybiBcIiVcIjtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VW5peFRpbWVzdGFtcChkKSB7XG4gIHJldHVybiArZDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VW5peFRpbWVzdGFtcFNlY29uZHMoZCkge1xuICByZXR1cm4gTWF0aC5mbG9vcigrZCAvIDEwMDApO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUtZm9ybWF0L3NyYy9sb2NhbGUuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBiYXJjaGFydCBmcm9tICcuL2JhcmNoYXJ0L2luZGV4JztcblxuY29uc3Qgb3B0cyA9IHtcbiAgZWxlbWVudDogJy5iYXJjaGFydCcsXG4gIGNsYXNzTmFtZTogJ2JhcmNoYXJ0Jyxcbn07XG5cbmJhcmNoYXJ0KG9wdHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL21haW4uanMiLCJpbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuLy4uLy4uL3N0eWxlcy9pbmRleC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYXJjaGFydChvcHRzKSB7XG4gIGNvbnN0IGNoYXJ0ID0gcmVuZGVyKG9wdHMuZWxlbWVudCwgb3B0cy5jbGFzc05hbWUpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2JhcmNoYXJ0L2luZGV4LmpzIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdkZWJvdW5jZSc7XG5pbXBvcnQgeyBzZWxlY3QsIHNlbGVjdEFsbCB9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnZDMtZmV0Y2gnO1xuaW1wb3J0IHsgc2NhbGVCYW5kLCBzY2FsZUxpbmVhciB9IGZyb20gJ2QzLXNjYWxlJztcbmltcG9ydCB7IGF4aXNUb3AsIGF4aXNMZWZ0IH0gZnJvbSAnZDMtYXhpcyc7XG5pbXBvcnQgZ2V0RGltZW5zaW9ucyBmcm9tICcuLi91dGlsaXRpZXMvZ2V0RGltZW5zaW9ucyc7XG5pbXBvcnQgcmVzaXplIGZyb20gJy4vcmVzaXplJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBjb25zdCB7IFdJRFRILCBIRUlHSFQsIE1BUkdJTlMgfSA9IGdldERpbWVuc2lvbnMoZWxlbWVudCk7XG5cbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBjYW52YXM6ICdjYW52YXMnLFxuICAgIHhBeGlzQ2xhc3M6ICd4LWF4aXMnLFxuICAgIHlBeGlzQ2xhc3M6ICd5LWF4aXMnLFxuICAgIHJlY3RhbmdsZTogJ3JlY3RhbmdsZScsXG4gICAgcmVjdGFuZ2xlczogJ3JlY3RhbmdsZXMnLFxuICAgIHhBeGlzTGFiZWw6ICd4LWF4aXMtbGFiZWwnLFxuICAgIGJhcmdyb3VwOiAnYmFyZ3JvdXAnLFxuICAgIGVsZW1lbnQsXG4gICAgY2xhc3NOYW1lLFxuICAgIHk6ICcnLFxuICAgIHg6ICcnLFxuICAgIHlBeGlzOiAnJyxcbiAgICB4QXhpczogJycsXG4gIH07XG5cbiAgLy8gcmVxdWVzdFxuICBqc29uKCdodHRwczovL3JhZGlvY29udHJvbGxlZC5naXRodWIuaW8vZDMtYXJpYS1iYXItY2hhcnQvZGF0YS9sb25kb25NZWRpYW5Ib3VzZXByaWNlVG9NZWRpYW5Hcm9zc0luY29tZS5qc29uJylcbiAgICAudGhlbihyYXdEYXRhID0+IHtcbiAgICAgIHJldHVybiByYXdEYXRhLmZpZ3VyZXMubWFwKGVsID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IE9iamVjdC5rZXlzKGVsKVswXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByYXRpbzogZWxbYCR7ZGF0ZX1gXSxcbiAgICAgICAgICBkYXRlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAudGhlbihkID0+IHJlbmRlcihkKSk7XG5cbiAgLy8gcmVuZGVyXG4gIGZ1bmN0aW9uIHJlbmRlcihkYXRhKSB7XG4gICAgY29uc3QgbWF4UmF0aW8gPSBkYXRhWzBdLnJhdGlvICsgMTtcblxuICAgIGNvbnN0IHkgPSBzY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbihkYXRhLm1hcChvYmogPT4gb2JqLmRhdGUpKVxuICAgICAgLnJhbmdlKFswLCBIRUlHSFQgLSBNQVJHSU5TLmJvdHRvbV0pXG4gICAgICAucGFkZGluZygwLjEpO1xuXG4gICAgY29uc3QgeCA9IHNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIG1heFJhdGlvXSlcbiAgICAgIC5yYW5nZShbMCwgV0lEVEggLSBNQVJHSU5TLmxlZnQgLSBNQVJHSU5TLnJpZ2h0XSk7XG5cbiAgICBjb25zdCB5QXhpcyA9IGF4aXNMZWZ0KClcbiAgICAgIC50aWNrcyhkYXRhLmxlbmd0aCAtIDEpXG4gICAgICAuc2NhbGUoeSk7XG5cbiAgICBjb25zdCB4QXhpcyA9IGF4aXNUb3AoKS5zY2FsZSh4KTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IHNlbGVjdChlbGVtZW50KVxuICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGNsYXNzTmFtZSlcbiAgICAgIC5hdHRyKCd3aWR0aCcsIFdJRFRIKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIEhFSUdIVClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgYCR7b3B0cy5jYW52YXN9YClcbiAgICAgIC5hdHRyKCdyb2xlJywgJ3RhYmxlJylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIFdJRFRIIC0gTUFSR0lOUy5yaWdodCAtIE1BUkdJTlMubGVmdClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBIRUlHSFQgLSBNQVJHSU5TLnRvcCAtIE1BUkdJTlMuYm90dG9tKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtNQVJHSU5TLnRvcH0pYCk7XG5cbiAgICBjYW52YXNcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3JvbGUnLCAncm93Z3JvdXAnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3RhYmxlaGVhZGVyJylcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3JvbGUnLCAncm93JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdoZWFkZXInKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigncm9sZScsICdjb2x1bW5oZWFkZXInKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAudGV4dCgneWVhcicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYTExeUhpZGRlbicpO1xuXG4gICAgY2FudmFzXG4gICAgICAuc2VsZWN0KCcuaGVhZGVyJylcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3JvbGUnLCAnY29sdW1uaGVhZGVyJylcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLnRleHQoJ3JhdGlvJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdhMTF5SGlkZGVuJyk7XG5cbiAgICBjYW52YXNcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3JvbGUnLCAncm93Z3JvdXAnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ3RhYmxlYm9keScpXG5cbiAgICBjYW52YXNcbiAgICAgIC5zZWxlY3QoJy50YWJsZWJvZHknKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCBgJHtvcHRzLnlBeGlzQ2xhc3N9YClcbiAgICAgIC5hdHRyKCdyb2xlJywgJ3JvdycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke01BUkdJTlMucmlnaHR9LCAwKWApXG4gICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgICAgLmNhbGwoeUF4aXMpO1xuXG4gICAgY2FudmFzXG4gICAgICAuc2VsZWN0KCcudGFibGVib2R5JylcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgYCR7b3B0cy54QXhpc0NsYXNzfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke01BUkdJTlMubGVmdH0sIDApYClcbiAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgICAuY2FsbCh4QXhpcyk7XG5cbiAgICBjYW52YXNcbiAgICAgIC5zZWxlY3QoJy50YWJsZWJvZHknKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCBgJHtvcHRzLnJlY3RhbmdsZXN9YClcbiAgICAgIC5zZWxlY3RBbGwoJ3JlY3QnKVxuICAgICAgLmRhdGEoZGF0YSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGAke29wdHMuYmFyZ3JvdXB9YClcbiAgICAgIC5hdHRyKCdyb2xlJywgJ3JvdycpXG4gICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGAke29wdHMucmVjdGFuZ2xlfWApXG4gICAgICAuYXR0cigncm9sZScsICdwcmVzZW50YXRpb24nKVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHkoZC5kYXRlKSlcbiAgICAgIC5hdHRyKCd4JywgTUFSR0lOUy5sZWZ0KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIHkuYmFuZHdpZHRoKCkpXG4gICAgICAuYXR0cignd2lkdGgnLCBkID0+IHgoZC5yYXRpbykpO1xuXG4gICAgY2FudmFzXG4gICAgICAuc2VsZWN0KCcudGFibGVib2R5JylcbiAgICAgIC5zZWxlY3RBbGwoYGcuJHtvcHRzLmJhcmdyb3VwfWApXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC50ZXh0KGQgPT4gZC5kYXRlKVxuICAgICAgLmF0dHIoJ3JvbGUnLCAnY2VsbCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYTExeUhpZGRlbicpXG5cbiAgICBjYW52YXNcbiAgICAgIC5zZWxlY3QoJy50YWJsZWJvZHknKVxuICAgICAgLnNlbGVjdEFsbChgZy4ke29wdHMuYmFyZ3JvdXB9YClcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLnRleHQoZCA9PiBkLnJhdGlvKVxuICAgICAgLmF0dHIoJ3knLCBkID0+IHkoZC5kYXRlKSAtICh5LmJhbmR3aWR0aCgpIC8gMikpXG4gICAgICAuYXR0cignZHknLCAnNSUnKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IHgoZC5yYXRpbykpXG4gICAgICAuYXR0cignY2xhc3MnLCBgJHtvcHRzLnhBeGlzTGFiZWx9YClcbiAgICAgIC5hdHRyKCdyb2xlJywgJ2NlbGwnKTtcblxuXG4gICAgb3B0cy55ID0geTtcbiAgICBvcHRzLnggPSB4O1xuICAgIG9wdHMueEF4aXMgPSB4QXhpcztcbiAgICBvcHRzLnlBeGlzID0geUF4aXM7XG4gIH1cblxuICAvLyByZXNpemVcbiAgd2luZG93Lm9ucmVzaXplID0gZGVib3VuY2UoKCkgPT4gcmVzaXplKG9wdHMpLCAyNTApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2JhcmNoYXJ0L3JlbmRlci5qcyIsImltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsIH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCBnZXREaW1lbnNpb25zIGZyb20gJy4uL3V0aWxpdGllcy9nZXREaW1lbnNpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzaXplKG9wdHMpIHtcbiAgY29uc3QgeyBXSURUSCwgSEVJR0hULCBNQVJHSU5TIH0gPSBnZXREaW1lbnNpb25zKG9wdHMuZWxlbWVudCk7XG5cbiAgc2VsZWN0KG9wdHMuZWxlbWVudClcbiAgICAuc2VsZWN0KCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIFdJRFRIKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBIRUlHSFQpO1xuXG4gIHNlbGVjdChvcHRzLmNhbnZhcylcbiAgICAuYXR0cignd2lkdGgnLCBXSURUSCAtIE1BUkdJTlMucmlnaHQgLSBNQVJHSU5TLmxlZnQpXG4gICAgLmF0dHIoJ2hlaWdodCcsIEhFSUdIVCAtIE1BUkdJTlMudG9wIC0gTUFSR0lOUy5ib3R0b20pXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtNQVJHSU5TLnRvcH0pYCk7XG5cbiAgb3B0cy55LnJhbmdlUm91bmQoWzAsIEhFSUdIVCAtIE1BUkdJTlMuYm90dG9tXSk7XG4gIG9wdHMueC5yYW5nZShbMCwgV0lEVEggLSBNQVJHSU5TLmxlZnQgLSBNQVJHSU5TLnJpZ2h0XSk7XG4gIG9wdHMueUF4aXMuc2NhbGUob3B0cy55KTtcbiAgb3B0cy54QXhpcy5zY2FsZShvcHRzLngpO1xuXG4gIHNlbGVjdChgLiR7b3B0cy55QXhpc0NsYXNzfWApXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtNQVJHSU5TLnJpZ2h0fSwgMClgKVxuICAgIC5jYWxsKG9wdHMueUF4aXMpO1xuXG4gIHNlbGVjdChgLiR7b3B0cy54QXhpc0NsYXNzfWApXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtNQVJHSU5TLmxlZnR9LCAwKWApXG4gICAgLmNhbGwob3B0cy54QXhpcyk7XG5cbiAgc2VsZWN0QWxsKGAuJHtvcHRzLnJlY3RhbmdsZX1gKVxuICAgIC5hdHRyKCd5JywgZCA9PiBvcHRzLnkoZC5kYXRlKSlcbiAgICAuYXR0cignaGVpZ2h0Jywgb3B0cy55LmJhbmR3aWR0aCgpKVxuICAgIC5hdHRyKCd3aWR0aCcsIGQgPT4gb3B0cy54KGQucmF0aW8pKTtcbiAgXG4gIHNlbGVjdEFsbChgLiR7b3B0cy54QXhpc0xhYmVsfWApXG4gICAgLmF0dHIoJ3knLCBkID0+IG9wdHMueShkLmRhdGUpIC0gKG9wdHMueS5iYW5kd2lkdGgoKSAvIDIpKVxuICAgIC5hdHRyKCdkeScsICc1JScpXG4gICAgLmF0dHIoJ3gnLCBkID0+IG9wdHMueChkLnJhdGlvKSlcbiAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvYmFyY2hhcnQvcmVzaXplLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMCAxNnB4IDAgMTZweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogIzE2QTA4NTtcXG59XFxuXFxuLmNhbnZhcyB7XFxuICBmaWxsOiBibGFjaztcXG59XFxuXFxuLmF4aXMgcGF0aCxcXG4uYXhpcyBsaW5lIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNlZWU7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XFxufVxcblxcbnRleHQge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZmlsbDogIzM0NDk1RTtcXG59XFxuXFxuLnktYXhpcyAudGljayBsaW5lLFxcbi55LWF4aXMgLmRvbWFpbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmVjdGFuZ2xlIHtcXG4gIGZpbGw6ICMzNDQ5NUU7XFxufVxcblxcbi54LWF4aXMtbGFiZWwge1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbi5hMTF5SGlkZGVuIHtcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcbn1cXG4gXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9zdHlsZXMvaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9jb25zdGFudC5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtwYWlyfSBmcm9tIFwiLi9wYWlyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMwLCB2YWx1ZXMxLCByZWR1Y2UpIHtcbiAgdmFyIG4wID0gdmFsdWVzMC5sZW5ndGgsXG4gICAgICBuMSA9IHZhbHVlczEubGVuZ3RoLFxuICAgICAgdmFsdWVzID0gbmV3IEFycmF5KG4wICogbjEpLFxuICAgICAgaTAsXG4gICAgICBpMSxcbiAgICAgIGksXG4gICAgICB2YWx1ZTA7XG5cbiAgaWYgKHJlZHVjZSA9PSBudWxsKSByZWR1Y2UgPSBwYWlyO1xuXG4gIGZvciAoaTAgPSBpID0gMDsgaTAgPCBuMDsgKytpMCkge1xuICAgIGZvciAodmFsdWUwID0gdmFsdWVzMFtpMF0sIGkxID0gMDsgaTEgPCBuMTsgKytpMSwgKytpKSB7XG4gICAgICB2YWx1ZXNbaV0gPSByZWR1Y2UodmFsdWUwLCB2YWx1ZXMxW2kxXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvY3Jvc3MuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGIgPCBhID8gLTEgOiBiID4gYSA/IDEgOiBiID49IGEgPyAwIDogTmFOO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9kZXNjZW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3NsaWNlfSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IGJpc2VjdCBmcm9tIFwiLi9iaXNlY3RcIjtcbmltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IGV4dGVudCBmcm9tIFwiLi9leHRlbnRcIjtcbmltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eVwiO1xuaW1wb3J0IHJhbmdlIGZyb20gXCIuL3JhbmdlXCI7XG5pbXBvcnQge3RpY2tTdGVwfSBmcm9tIFwiLi90aWNrc1wiO1xuaW1wb3J0IHN0dXJnZXMgZnJvbSBcIi4vdGhyZXNob2xkL3N0dXJnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciB2YWx1ZSA9IGlkZW50aXR5LFxuICAgICAgZG9tYWluID0gZXh0ZW50LFxuICAgICAgdGhyZXNob2xkID0gc3R1cmdlcztcblxuICBmdW5jdGlvbiBoaXN0b2dyYW0oZGF0YSkge1xuICAgIHZhciBpLFxuICAgICAgICBuID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIHgsXG4gICAgICAgIHZhbHVlcyA9IG5ldyBBcnJheShuKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHZhbHVlc1tpXSA9IHZhbHVlKGRhdGFbaV0sIGksIGRhdGEpO1xuICAgIH1cblxuICAgIHZhciB4eiA9IGRvbWFpbih2YWx1ZXMpLFxuICAgICAgICB4MCA9IHh6WzBdLFxuICAgICAgICB4MSA9IHh6WzFdLFxuICAgICAgICB0eiA9IHRocmVzaG9sZCh2YWx1ZXMsIHgwLCB4MSk7XG5cbiAgICAvLyBDb252ZXJ0IG51bWJlciBvZiB0aHJlc2hvbGRzIGludG8gdW5pZm9ybSB0aHJlc2hvbGRzLlxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0eikpIHtcbiAgICAgIHR6ID0gdGlja1N0ZXAoeDAsIHgxLCB0eik7XG4gICAgICB0eiA9IHJhbmdlKE1hdGguY2VpbCh4MCAvIHR6KSAqIHR6LCB4MSwgdHopOyAvLyBleGNsdXNpdmVcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHRocmVzaG9sZHMgb3V0c2lkZSB0aGUgZG9tYWluLlxuICAgIHZhciBtID0gdHoubGVuZ3RoO1xuICAgIHdoaWxlICh0elswXSA8PSB4MCkgdHouc2hpZnQoKSwgLS1tO1xuICAgIHdoaWxlICh0elttIC0gMV0gPiB4MSkgdHoucG9wKCksIC0tbTtcblxuICAgIHZhciBiaW5zID0gbmV3IEFycmF5KG0gKyAxKSxcbiAgICAgICAgYmluO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBiaW5zLlxuICAgIGZvciAoaSA9IDA7IGkgPD0gbTsgKytpKSB7XG4gICAgICBiaW4gPSBiaW5zW2ldID0gW107XG4gICAgICBiaW4ueDAgPSBpID4gMCA/IHR6W2kgLSAxXSA6IHgwO1xuICAgICAgYmluLngxID0gaSA8IG0gPyB0eltpXSA6IHgxO1xuICAgIH1cblxuICAgIC8vIEFzc2lnbiBkYXRhIHRvIGJpbnMgYnkgdmFsdWUsIGlnbm9yaW5nIGFueSBvdXRzaWRlIHRoZSBkb21haW4uXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgeCA9IHZhbHVlc1tpXTtcbiAgICAgIGlmICh4MCA8PSB4ICYmIHggPD0geDEpIHtcbiAgICAgICAgYmluc1tiaXNlY3QodHosIHgsIDAsIG0pXS5wdXNoKGRhdGFbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiaW5zO1xuICB9XG5cbiAgaGlzdG9ncmFtLnZhbHVlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHZhbHVlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgaGlzdG9ncmFtKSA6IHZhbHVlO1xuICB9O1xuXG4gIGhpc3RvZ3JhbS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZG9tYWluID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChbX1swXSwgX1sxXV0pLCBoaXN0b2dyYW0pIDogZG9tYWluO1xuICB9O1xuXG4gIGhpc3RvZ3JhbS50aHJlc2hvbGRzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRocmVzaG9sZCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogQXJyYXkuaXNBcnJheShfKSA/IGNvbnN0YW50KHNsaWNlLmNhbGwoXykpIDogY29uc3RhbnQoXyksIGhpc3RvZ3JhbSkgOiB0aHJlc2hvbGQ7XG4gIH07XG5cbiAgcmV0dXJuIGhpc3RvZ3JhbTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvaGlzdG9ncmFtLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9pZGVudGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgbWF4O1xuXG4gIGlmICh2YWx1ZW9mID09IG51bGwpIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlc1tpXSkgIT0gbnVsbCAmJiB2YWx1ZSA+PSB2YWx1ZSkge1xuICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gQ29tcGFyZSB0aGUgcmVtYWluaW5nIHZhbHVlcy5cbiAgICAgICAgICBpZiAoKHZhbHVlID0gdmFsdWVzW2ldKSAhPSBudWxsICYmIHZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSAhPSBudWxsICYmIHZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgIG1heCA9IHZhbHVlO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBDb21wYXJlIHRoZSByZW1haW5pbmcgdmFsdWVzLlxuICAgICAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkgIT0gbnVsbCAmJiB2YWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1heDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvbWF4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgbSA9IG4sXG4gICAgICBpID0gLTEsXG4gICAgICB2YWx1ZSxcbiAgICAgIHN1bSA9IDA7XG5cbiAgaWYgKHZhbHVlb2YgPT0gbnVsbCkge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAoIWlzTmFOKHZhbHVlID0gbnVtYmVyKHZhbHVlc1tpXSkpKSBzdW0gKz0gdmFsdWU7XG4gICAgICBlbHNlIC0tbTtcbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaWYgKCFpc05hTih2YWx1ZSA9IG51bWJlcih2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkpKSBzdW0gKz0gdmFsdWU7XG4gICAgICBlbHNlIC0tbTtcbiAgICB9XG4gIH1cblxuICBpZiAobSkgcmV0dXJuIHN1bSAvIG07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL21lYW4uanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlclwiO1xuaW1wb3J0IHF1YW50aWxlIGZyb20gXCIuL3F1YW50aWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgdmFsdWVvZikge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBpID0gLTEsXG4gICAgICB2YWx1ZSxcbiAgICAgIG51bWJlcnMgPSBbXTtcblxuICBpZiAodmFsdWVvZiA9PSBudWxsKSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICghaXNOYU4odmFsdWUgPSBudW1iZXIodmFsdWVzW2ldKSkpIHtcbiAgICAgICAgbnVtYmVycy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaWYgKCFpc05hTih2YWx1ZSA9IG51bWJlcih2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkpKSB7XG4gICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHF1YW50aWxlKG51bWJlcnMuc29ydChhc2NlbmRpbmcpLCAwLjUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy9tZWRpYW4uanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgbiA9IGFycmF5cy5sZW5ndGgsXG4gICAgICBtLFxuICAgICAgaSA9IC0xLFxuICAgICAgaiA9IDAsXG4gICAgICBtZXJnZWQsXG4gICAgICBhcnJheTtcblxuICB3aGlsZSAoKytpIDwgbikgaiArPSBhcnJheXNbaV0ubGVuZ3RoO1xuICBtZXJnZWQgPSBuZXcgQXJyYXkoaik7XG5cbiAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgYXJyYXkgPSBhcnJheXNbbl07XG4gICAgbSA9IGFycmF5Lmxlbmd0aDtcbiAgICB3aGlsZSAoLS1tID49IDApIHtcbiAgICAgIG1lcmdlZFstLWpdID0gYXJyYXlbbV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlZDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvbWVyZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCBpbmRleGVzKSB7XG4gIHZhciBpID0gaW5kZXhlcy5sZW5ndGgsIHBlcm11dGVzID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tKSBwZXJtdXRlc1tpXSA9IGFycmF5W2luZGV4ZXNbaV1dO1xuICByZXR1cm4gcGVybXV0ZXM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL3Blcm11dGUuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgY29tcGFyZSkge1xuICBpZiAoIShuID0gdmFsdWVzLmxlbmd0aCkpIHJldHVybjtcbiAgdmFyIG4sXG4gICAgICBpID0gMCxcbiAgICAgIGogPSAwLFxuICAgICAgeGksXG4gICAgICB4aiA9IHZhbHVlc1tqXTtcblxuICBpZiAoY29tcGFyZSA9PSBudWxsKSBjb21wYXJlID0gYXNjZW5kaW5nO1xuXG4gIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgaWYgKGNvbXBhcmUoeGkgPSB2YWx1ZXNbaV0sIHhqKSA8IDAgfHwgY29tcGFyZSh4aiwgeGopICE9PSAwKSB7XG4gICAgICB4aiA9IHhpLCBqID0gaTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29tcGFyZSh4aiwgeGopID09PSAwKSByZXR1cm4gajtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvc2Nhbi5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIGkwLCBpMSkge1xuICB2YXIgbSA9IChpMSA9PSBudWxsID8gYXJyYXkubGVuZ3RoIDogaTEpIC0gKGkwID0gaTAgPT0gbnVsbCA/IDAgOiAraTApLFxuICAgICAgdCxcbiAgICAgIGk7XG5cbiAgd2hpbGUgKG0pIHtcbiAgICBpID0gTWF0aC5yYW5kb20oKSAqIG0tLSB8IDA7XG4gICAgdCA9IGFycmF5W20gKyBpMF07XG4gICAgYXJyYXlbbSArIGkwXSA9IGFycmF5W2kgKyBpMF07XG4gICAgYXJyYXlbaSArIGkwXSA9IHQ7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL3NodWZmbGUuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgdmFsdWVvZikge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBpID0gLTEsXG4gICAgICB2YWx1ZSxcbiAgICAgIHN1bSA9IDA7XG5cbiAgaWYgKHZhbHVlb2YgPT0gbnVsbCkge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodmFsdWUgPSArdmFsdWVzW2ldKSBzdW0gKz0gdmFsdWU7IC8vIE5vdGU6IHplcm8gYW5kIG51bGwgYXJlIGVxdWl2YWxlbnQuXG4gICAgfVxuICB9XG5cbiAgZWxzZSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh2YWx1ZSA9ICt2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkgc3VtICs9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdW07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXJyYXkvc3JjL3N1bS5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHttYXB9IGZyb20gXCIuLi9hcnJheVwiO1xuaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi4vYXNjZW5kaW5nXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuLi9udW1iZXJcIjtcbmltcG9ydCBxdWFudGlsZSBmcm9tIFwiLi4vcXVhbnRpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCBtaW4sIG1heCkge1xuICB2YWx1ZXMgPSBtYXAuY2FsbCh2YWx1ZXMsIG51bWJlcikuc29ydChhc2NlbmRpbmcpO1xuICByZXR1cm4gTWF0aC5jZWlsKChtYXggLSBtaW4pIC8gKDIgKiAocXVhbnRpbGUodmFsdWVzLCAwLjc1KSAtIHF1YW50aWxlKHZhbHVlcywgMC4yNSkpICogTWF0aC5wb3codmFsdWVzLmxlbmd0aCwgLTEgLyAzKSkpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy90aHJlc2hvbGQvZnJlZWRtYW5EaWFjb25pcy5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGRldmlhdGlvbiBmcm9tIFwiLi4vZGV2aWF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguY2VpbCgobWF4IC0gbWluKSAvICgzLjUgKiBkZXZpYXRpb24odmFsdWVzKSAqIE1hdGgucG93KHZhbHVlcy5sZW5ndGgsIC0xIC8gMykpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1hcnJheS9zcmMvdGhyZXNob2xkL3Njb3R0LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdHJhbnNwb3NlIGZyb20gXCIuL3RyYW5zcG9zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRyYW5zcG9zZShhcmd1bWVudHMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWFycmF5L3NyYy96aXAuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXhpcy9zcmMvYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7c2xpY2V9IGZyb20gXCIuL2FycmF5XCI7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4vaWRlbnRpdHlcIjtcblxudmFyIHRvcCA9IDEsXG4gICAgcmlnaHQgPSAyLFxuICAgIGJvdHRvbSA9IDMsXG4gICAgbGVmdCA9IDQsXG4gICAgZXBzaWxvbiA9IDFlLTY7XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVgoeCkge1xuICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeCArIDAuNSkgKyBcIiwwKVwiO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGVZKHkpIHtcbiAgcmV0dXJuIFwidHJhbnNsYXRlKDAsXCIgKyAoeSArIDAuNSkgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gbnVtYmVyKHNjYWxlKSB7XG4gIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuICtzY2FsZShkKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2VudGVyKHNjYWxlKSB7XG4gIHZhciBvZmZzZXQgPSBNYXRoLm1heCgwLCBzY2FsZS5iYW5kd2lkdGgoKSAtIDEpIC8gMjsgLy8gQWRqdXN0IGZvciAwLjVweCBvZmZzZXQuXG4gIGlmIChzY2FsZS5yb3VuZCgpKSBvZmZzZXQgPSBNYXRoLnJvdW5kKG9mZnNldCk7XG4gIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuICtzY2FsZShkKSArIG9mZnNldDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZW50ZXJpbmcoKSB7XG4gIHJldHVybiAhdGhpcy5fX2F4aXM7XG59XG5cbmZ1bmN0aW9uIGF4aXMob3JpZW50LCBzY2FsZSkge1xuICB2YXIgdGlja0FyZ3VtZW50cyA9IFtdLFxuICAgICAgdGlja1ZhbHVlcyA9IG51bGwsXG4gICAgICB0aWNrRm9ybWF0ID0gbnVsbCxcbiAgICAgIHRpY2tTaXplSW5uZXIgPSA2LFxuICAgICAgdGlja1NpemVPdXRlciA9IDYsXG4gICAgICB0aWNrUGFkZGluZyA9IDMsXG4gICAgICBrID0gb3JpZW50ID09PSB0b3AgfHwgb3JpZW50ID09PSBsZWZ0ID8gLTEgOiAxLFxuICAgICAgeCA9IG9yaWVudCA9PT0gbGVmdCB8fCBvcmllbnQgPT09IHJpZ2h0ID8gXCJ4XCIgOiBcInlcIixcbiAgICAgIHRyYW5zZm9ybSA9IG9yaWVudCA9PT0gdG9wIHx8IG9yaWVudCA9PT0gYm90dG9tID8gdHJhbnNsYXRlWCA6IHRyYW5zbGF0ZVk7XG5cbiAgZnVuY3Rpb24gYXhpcyhjb250ZXh0KSB7XG4gICAgdmFyIHZhbHVlcyA9IHRpY2tWYWx1ZXMgPT0gbnVsbCA/IChzY2FsZS50aWNrcyA/IHNjYWxlLnRpY2tzLmFwcGx5KHNjYWxlLCB0aWNrQXJndW1lbnRzKSA6IHNjYWxlLmRvbWFpbigpKSA6IHRpY2tWYWx1ZXMsXG4gICAgICAgIGZvcm1hdCA9IHRpY2tGb3JtYXQgPT0gbnVsbCA/IChzY2FsZS50aWNrRm9ybWF0ID8gc2NhbGUudGlja0Zvcm1hdC5hcHBseShzY2FsZSwgdGlja0FyZ3VtZW50cykgOiBpZGVudGl0eSkgOiB0aWNrRm9ybWF0LFxuICAgICAgICBzcGFjaW5nID0gTWF0aC5tYXgodGlja1NpemVJbm5lciwgMCkgKyB0aWNrUGFkZGluZyxcbiAgICAgICAgcmFuZ2UgPSBzY2FsZS5yYW5nZSgpLFxuICAgICAgICByYW5nZTAgPSArcmFuZ2VbMF0gKyAwLjUsXG4gICAgICAgIHJhbmdlMSA9ICtyYW5nZVtyYW5nZS5sZW5ndGggLSAxXSArIDAuNSxcbiAgICAgICAgcG9zaXRpb24gPSAoc2NhbGUuYmFuZHdpZHRoID8gY2VudGVyIDogbnVtYmVyKShzY2FsZS5jb3B5KCkpLFxuICAgICAgICBzZWxlY3Rpb24gPSBjb250ZXh0LnNlbGVjdGlvbiA/IGNvbnRleHQuc2VsZWN0aW9uKCkgOiBjb250ZXh0LFxuICAgICAgICBwYXRoID0gc2VsZWN0aW9uLnNlbGVjdEFsbChcIi5kb21haW5cIikuZGF0YShbbnVsbF0pLFxuICAgICAgICB0aWNrID0gc2VsZWN0aW9uLnNlbGVjdEFsbChcIi50aWNrXCIpLmRhdGEodmFsdWVzLCBzY2FsZSkub3JkZXIoKSxcbiAgICAgICAgdGlja0V4aXQgPSB0aWNrLmV4aXQoKSxcbiAgICAgICAgdGlja0VudGVyID0gdGljay5lbnRlcigpLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwidGlja1wiKSxcbiAgICAgICAgbGluZSA9IHRpY2suc2VsZWN0KFwibGluZVwiKSxcbiAgICAgICAgdGV4dCA9IHRpY2suc2VsZWN0KFwidGV4dFwiKTtcblxuICAgIHBhdGggPSBwYXRoLm1lcmdlKHBhdGguZW50ZXIoKS5pbnNlcnQoXCJwYXRoXCIsIFwiLnRpY2tcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRvbWFpblwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImN1cnJlbnRDb2xvclwiKSk7XG5cbiAgICB0aWNrID0gdGljay5tZXJnZSh0aWNrRW50ZXIpO1xuXG4gICAgbGluZSA9IGxpbmUubWVyZ2UodGlja0VudGVyLmFwcGVuZChcImxpbmVcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJjdXJyZW50Q29sb3JcIilcbiAgICAgICAgLmF0dHIoeCArIFwiMlwiLCBrICogdGlja1NpemVJbm5lcikpO1xuXG4gICAgdGV4dCA9IHRleHQubWVyZ2UodGlja0VudGVyLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpXG4gICAgICAgIC5hdHRyKHgsIGsgKiBzcGFjaW5nKVxuICAgICAgICAuYXR0cihcImR5XCIsIG9yaWVudCA9PT0gdG9wID8gXCIwZW1cIiA6IG9yaWVudCA9PT0gYm90dG9tID8gXCIwLjcxZW1cIiA6IFwiMC4zMmVtXCIpKTtcblxuICAgIGlmIChjb250ZXh0ICE9PSBzZWxlY3Rpb24pIHtcbiAgICAgIHBhdGggPSBwYXRoLnRyYW5zaXRpb24oY29udGV4dCk7XG4gICAgICB0aWNrID0gdGljay50cmFuc2l0aW9uKGNvbnRleHQpO1xuICAgICAgbGluZSA9IGxpbmUudHJhbnNpdGlvbihjb250ZXh0KTtcbiAgICAgIHRleHQgPSB0ZXh0LnRyYW5zaXRpb24oY29udGV4dCk7XG5cbiAgICAgIHRpY2tFeGl0ID0gdGlja0V4aXQudHJhbnNpdGlvbihjb250ZXh0KVxuICAgICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBlcHNpbG9uKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGlzRmluaXRlKGQgPSBwb3NpdGlvbihkKSkgPyB0cmFuc2Zvcm0oZCkgOiB0aGlzLmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTsgfSk7XG5cbiAgICAgIHRpY2tFbnRlclxuICAgICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCBlcHNpbG9uKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgdmFyIHAgPSB0aGlzLnBhcmVudE5vZGUuX19heGlzOyByZXR1cm4gdHJhbnNmb3JtKHAgJiYgaXNGaW5pdGUocCA9IHAoZCkpID8gcCA6IHBvc2l0aW9uKGQpKTsgfSk7XG4gICAgfVxuXG4gICAgdGlja0V4aXQucmVtb3ZlKCk7XG5cbiAgICBwYXRoXG4gICAgICAgIC5hdHRyKFwiZFwiLCBvcmllbnQgPT09IGxlZnQgfHwgb3JpZW50ID09IHJpZ2h0XG4gICAgICAgICAgICA/ICh0aWNrU2l6ZU91dGVyID8gXCJNXCIgKyBrICogdGlja1NpemVPdXRlciArIFwiLFwiICsgcmFuZ2UwICsgXCJIMC41VlwiICsgcmFuZ2UxICsgXCJIXCIgKyBrICogdGlja1NpemVPdXRlciA6IFwiTTAuNSxcIiArIHJhbmdlMCArIFwiVlwiICsgcmFuZ2UxKVxuICAgICAgICAgICAgOiAodGlja1NpemVPdXRlciA/IFwiTVwiICsgcmFuZ2UwICsgXCIsXCIgKyBrICogdGlja1NpemVPdXRlciArIFwiVjAuNUhcIiArIHJhbmdlMSArIFwiVlwiICsgayAqIHRpY2tTaXplT3V0ZXIgOiBcIk1cIiArIHJhbmdlMCArIFwiLDAuNUhcIiArIHJhbmdlMSkpO1xuXG4gICAgdGlja1xuICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gdHJhbnNmb3JtKHBvc2l0aW9uKGQpKTsgfSk7XG5cbiAgICBsaW5lXG4gICAgICAgIC5hdHRyKHggKyBcIjJcIiwgayAqIHRpY2tTaXplSW5uZXIpO1xuXG4gICAgdGV4dFxuICAgICAgICAuYXR0cih4LCBrICogc3BhY2luZylcbiAgICAgICAgLnRleHQoZm9ybWF0KTtcblxuICAgIHNlbGVjdGlvbi5maWx0ZXIoZW50ZXJpbmcpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgLmF0dHIoXCJmb250LXNpemVcIiwgMTApXG4gICAgICAgIC5hdHRyKFwiZm9udC1mYW1pbHlcIiwgXCJzYW5zLXNlcmlmXCIpXG4gICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgb3JpZW50ID09PSByaWdodCA/IFwic3RhcnRcIiA6IG9yaWVudCA9PT0gbGVmdCA/IFwiZW5kXCIgOiBcIm1pZGRsZVwiKTtcblxuICAgIHNlbGVjdGlvblxuICAgICAgICAuZWFjaChmdW5jdGlvbigpIHsgdGhpcy5fX2F4aXMgPSBwb3NpdGlvbjsgfSk7XG4gIH1cblxuICBheGlzLnNjYWxlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHNjYWxlID0gXywgYXhpcykgOiBzY2FsZTtcbiAgfTtcblxuICBheGlzLnRpY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRpY2tBcmd1bWVudHMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyksIGF4aXM7XG4gIH07XG5cbiAgYXhpcy50aWNrQXJndW1lbnRzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tBcmd1bWVudHMgPSBfID09IG51bGwgPyBbXSA6IHNsaWNlLmNhbGwoXyksIGF4aXMpIDogdGlja0FyZ3VtZW50cy5zbGljZSgpO1xuICB9O1xuXG4gIGF4aXMudGlja1ZhbHVlcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrVmFsdWVzID0gXyA9PSBudWxsID8gbnVsbCA6IHNsaWNlLmNhbGwoXyksIGF4aXMpIDogdGlja1ZhbHVlcyAmJiB0aWNrVmFsdWVzLnNsaWNlKCk7XG4gIH07XG5cbiAgYXhpcy50aWNrRm9ybWF0ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tGb3JtYXQgPSBfLCBheGlzKSA6IHRpY2tGb3JtYXQ7XG4gIH07XG5cbiAgYXhpcy50aWNrU2l6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrU2l6ZUlubmVyID0gdGlja1NpemVPdXRlciA9ICtfLCBheGlzKSA6IHRpY2tTaXplSW5uZXI7XG4gIH07XG5cbiAgYXhpcy50aWNrU2l6ZUlubmVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tTaXplSW5uZXIgPSArXywgYXhpcykgOiB0aWNrU2l6ZUlubmVyO1xuICB9O1xuXG4gIGF4aXMudGlja1NpemVPdXRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aWNrU2l6ZU91dGVyID0gK18sIGF4aXMpIDogdGlja1NpemVPdXRlcjtcbiAgfTtcblxuICBheGlzLnRpY2tQYWRkaW5nID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tQYWRkaW5nID0gK18sIGF4aXMpIDogdGlja1BhZGRpbmc7XG4gIH07XG5cbiAgcmV0dXJuIGF4aXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzVG9wKHNjYWxlKSB7XG4gIHJldHVybiBheGlzKHRvcCwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc1JpZ2h0KHNjYWxlKSB7XG4gIHJldHVybiBheGlzKHJpZ2h0LCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzQm90dG9tKHNjYWxlKSB7XG4gIHJldHVybiBheGlzKGJvdHRvbSwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXhpc0xlZnQoc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXMobGVmdCwgc2NhbGUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWF4aXMvc3JjL2F4aXMuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtYXhpcy9zcmMvaWRlbnRpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7XG4gIGF4aXNUb3AsXG4gIGF4aXNSaWdodCxcbiAgYXhpc0JvdHRvbSxcbiAgYXhpc0xlZnRcbn0gZnJvbSBcIi4vYXhpc1wiO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWF4aXMvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQge2RlZmF1bHQgYXMgbmVzdH0gZnJvbSBcIi4vc3JjL25lc3RcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZXR9IGZyb20gXCIuL3NyYy9zZXRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtYXB9IGZyb20gXCIuL3NyYy9tYXBcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBrZXlzfSBmcm9tIFwiLi9zcmMva2V5c1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHZhbHVlc30gZnJvbSBcIi4vc3JjL3ZhbHVlc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGVudHJpZXN9IGZyb20gXCIuL3NyYy9lbnRyaWVzXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtY29sbGVjdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFwKSB7XG4gIHZhciBlbnRyaWVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBtYXApIGVudHJpZXMucHVzaCh7a2V5OiBrZXksIHZhbHVlOiBtYXBba2V5XX0pO1xuICByZXR1cm4gZW50cmllcztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xsZWN0aW9uL3NyYy9lbnRyaWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFwKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBtYXApIGtleXMucHVzaChrZXkpO1xuICByZXR1cm4ga2V5cztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1jb2xsZWN0aW9uL3NyYy9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG1hcCBmcm9tIFwiLi9tYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBrZXlzID0gW10sXG4gICAgICBzb3J0S2V5cyA9IFtdLFxuICAgICAgc29ydFZhbHVlcyxcbiAgICAgIHJvbGx1cCxcbiAgICAgIG5lc3Q7XG5cbiAgZnVuY3Rpb24gYXBwbHkoYXJyYXksIGRlcHRoLCBjcmVhdGVSZXN1bHQsIHNldFJlc3VsdCkge1xuICAgIGlmIChkZXB0aCA+PSBrZXlzLmxlbmd0aCkge1xuICAgICAgaWYgKHNvcnRWYWx1ZXMgIT0gbnVsbCkgYXJyYXkuc29ydChzb3J0VmFsdWVzKTtcbiAgICAgIHJldHVybiByb2xsdXAgIT0gbnVsbCA/IHJvbGx1cChhcnJheSkgOiBhcnJheTtcbiAgICB9XG5cbiAgICB2YXIgaSA9IC0xLFxuICAgICAgICBuID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBrZXkgPSBrZXlzW2RlcHRoKytdLFxuICAgICAgICBrZXlWYWx1ZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHZhbHVlc0J5S2V5ID0gbWFwKCksXG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgcmVzdWx0ID0gY3JlYXRlUmVzdWx0KCk7XG5cbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaWYgKHZhbHVlcyA9IHZhbHVlc0J5S2V5LmdldChrZXlWYWx1ZSA9IGtleSh2YWx1ZSA9IGFycmF5W2ldKSArIFwiXCIpKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlc0J5S2V5LnNldChrZXlWYWx1ZSwgW3ZhbHVlXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsdWVzQnlLZXkuZWFjaChmdW5jdGlvbih2YWx1ZXMsIGtleSkge1xuICAgICAgc2V0UmVzdWx0KHJlc3VsdCwga2V5LCBhcHBseSh2YWx1ZXMsIGRlcHRoLCBjcmVhdGVSZXN1bHQsIHNldFJlc3VsdCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVudHJpZXMobWFwLCBkZXB0aCkge1xuICAgIGlmICgrK2RlcHRoID4ga2V5cy5sZW5ndGgpIHJldHVybiBtYXA7XG4gICAgdmFyIGFycmF5LCBzb3J0S2V5ID0gc29ydEtleXNbZGVwdGggLSAxXTtcbiAgICBpZiAocm9sbHVwICE9IG51bGwgJiYgZGVwdGggPj0ga2V5cy5sZW5ndGgpIGFycmF5ID0gbWFwLmVudHJpZXMoKTtcbiAgICBlbHNlIGFycmF5ID0gW10sIG1hcC5lYWNoKGZ1bmN0aW9uKHYsIGspIHsgYXJyYXkucHVzaCh7a2V5OiBrLCB2YWx1ZXM6IGVudHJpZXModiwgZGVwdGgpfSk7IH0pO1xuICAgIHJldHVybiBzb3J0S2V5ICE9IG51bGwgPyBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIHNvcnRLZXkoYS5rZXksIGIua2V5KTsgfSkgOiBhcnJheTtcbiAgfVxuXG4gIHJldHVybiBuZXN0ID0ge1xuICAgIG9iamVjdDogZnVuY3Rpb24oYXJyYXkpIHsgcmV0dXJuIGFwcGx5KGFycmF5LCAwLCBjcmVhdGVPYmplY3QsIHNldE9iamVjdCk7IH0sXG4gICAgbWFwOiBmdW5jdGlvbihhcnJheSkgeyByZXR1cm4gYXBwbHkoYXJyYXksIDAsIGNyZWF0ZU1hcCwgc2V0TWFwKTsgfSxcbiAgICBlbnRyaWVzOiBmdW5jdGlvbihhcnJheSkgeyByZXR1cm4gZW50cmllcyhhcHBseShhcnJheSwgMCwgY3JlYXRlTWFwLCBzZXRNYXApLCAwKTsgfSxcbiAgICBrZXk6IGZ1bmN0aW9uKGQpIHsga2V5cy5wdXNoKGQpOyByZXR1cm4gbmVzdDsgfSxcbiAgICBzb3J0S2V5czogZnVuY3Rpb24ob3JkZXIpIHsgc29ydEtleXNba2V5cy5sZW5ndGggLSAxXSA9IG9yZGVyOyByZXR1cm4gbmVzdDsgfSxcbiAgICBzb3J0VmFsdWVzOiBmdW5jdGlvbihvcmRlcikgeyBzb3J0VmFsdWVzID0gb3JkZXI7IHJldHVybiBuZXN0OyB9LFxuICAgIHJvbGx1cDogZnVuY3Rpb24oZikgeyByb2xsdXAgPSBmOyByZXR1cm4gbmVzdDsgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPYmplY3QoKSB7XG4gIHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gc2V0T2JqZWN0KG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYXAoKSB7XG4gIHJldHVybiBtYXAoKTtcbn1cblxuZnVuY3Rpb24gc2V0TWFwKG1hcCwga2V5LCB2YWx1ZSkge1xuICBtYXAuc2V0KGtleSwgdmFsdWUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWNvbGxlY3Rpb24vc3JjL25lc3QuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2RlZmF1bHQgYXMgbWFwLCBwcmVmaXh9IGZyb20gXCIuL21hcFwiO1xuXG5mdW5jdGlvbiBTZXQoKSB7fVxuXG52YXIgcHJvdG8gPSBtYXAucHJvdG90eXBlO1xuXG5TZXQucHJvdG90eXBlID0gc2V0LnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFNldCxcbiAgaGFzOiBwcm90by5oYXMsXG4gIGFkZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YWx1ZSArPSBcIlwiO1xuICAgIHRoaXNbcHJlZml4ICsgdmFsdWVdID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIHJlbW92ZTogcHJvdG8ucmVtb3ZlLFxuICBjbGVhcjogcHJvdG8uY2xlYXIsXG4gIHZhbHVlczogcHJvdG8ua2V5cyxcbiAgc2l6ZTogcHJvdG8uc2l6ZSxcbiAgZW1wdHk6IHByb3RvLmVtcHR5LFxuICBlYWNoOiBwcm90by5lYWNoXG59O1xuXG5mdW5jdGlvbiBzZXQob2JqZWN0LCBmKSB7XG4gIHZhciBzZXQgPSBuZXcgU2V0O1xuXG4gIC8vIENvcHkgY29uc3RydWN0b3IuXG4gIGlmIChvYmplY3QgaW5zdGFuY2VvZiBTZXQpIG9iamVjdC5lYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IHNldC5hZGQodmFsdWUpOyB9KTtcblxuICAvLyBPdGhlcndpc2UsIGFzc3VtZSBpdOKAmXMgYW4gYXJyYXkuXG4gIGVsc2UgaWYgKG9iamVjdCkge1xuICAgIHZhciBpID0gLTEsIG4gPSBvYmplY3QubGVuZ3RoO1xuICAgIGlmIChmID09IG51bGwpIHdoaWxlICgrK2kgPCBuKSBzZXQuYWRkKG9iamVjdFtpXSk7XG4gICAgZWxzZSB3aGlsZSAoKytpIDwgbikgc2V0LmFkZChmKG9iamVjdFtpXSwgaSwgb2JqZWN0KSk7XG4gIH1cblxuICByZXR1cm4gc2V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtY29sbGVjdGlvbi9zcmMvc2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWFwKSB7XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG1hcCkgdmFsdWVzLnB1c2gobWFwW2tleV0pO1xuICByZXR1cm4gdmFsdWVzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWNvbGxlY3Rpb24vc3JjL3ZhbHVlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZVwiO1xuaW1wb3J0IHtDb2xvciwgcmdiQ29udmVydCwgUmdiLCBkYXJrZXIsIGJyaWdodGVyfSBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IHtkZWcycmFkLCByYWQyZGVnfSBmcm9tIFwiLi9tYXRoXCI7XG5cbnZhciBBID0gLTAuMTQ4NjEsXG4gICAgQiA9ICsxLjc4Mjc3LFxuICAgIEMgPSAtMC4yOTIyNyxcbiAgICBEID0gLTAuOTA2NDksXG4gICAgRSA9ICsxLjk3Mjk0LFxuICAgIEVEID0gRSAqIEQsXG4gICAgRUIgPSBFICogQixcbiAgICBCQ19EQSA9IEIgKiBDIC0gRCAqIEE7XG5cbmZ1bmN0aW9uIGN1YmVoZWxpeENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEN1YmVoZWxpeCkgcmV0dXJuIG5ldyBDdWJlaGVsaXgoby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIFJnYikpIG8gPSByZ2JDb252ZXJ0KG8pO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbCA9IChCQ19EQSAqIGIgKyBFRCAqIHIgLSBFQiAqIGcpIC8gKEJDX0RBICsgRUQgLSBFQiksXG4gICAgICBibCA9IGIgLSBsLFxuICAgICAgayA9IChFICogKGcgLSBsKSAtIEMgKiBibCkgLyBELFxuICAgICAgcyA9IE1hdGguc3FydChrICogayArIGJsICogYmwpIC8gKEUgKiBsICogKDEgLSBsKSksIC8vIE5hTiBpZiBsPTAgb3IgbD0xXG4gICAgICBoID0gcyA/IE1hdGguYXRhbjIoaywgYmwpICogcmFkMmRlZyAtIDEyMCA6IE5hTjtcbiAgcmV0dXJuIG5ldyBDdWJlaGVsaXgoaCA8IDAgPyBoICsgMzYwIDogaCwgcywgbCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3ViZWhlbGl4KGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjdWJlaGVsaXhDb252ZXJ0KGgpIDogbmV3IEN1YmVoZWxpeChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDdWJlaGVsaXgoaCwgcywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5zID0gK3M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKEN1YmVoZWxpeCwgY3ViZWhlbGl4LCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBDdWJlaGVsaXgodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBkYXJrZXIgOiBNYXRoLnBvdyhkYXJrZXIsIGspO1xuICAgIHJldHVybiBuZXcgQ3ViZWhlbGl4KHRoaXMuaCwgdGhpcy5zLCB0aGlzLmwgKiBrLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoID0gaXNOYU4odGhpcy5oKSA/IDAgOiAodGhpcy5oICsgMTIwKSAqIGRlZzJyYWQsXG4gICAgICAgIGwgPSArdGhpcy5sLFxuICAgICAgICBhID0gaXNOYU4odGhpcy5zKSA/IDAgOiB0aGlzLnMgKiBsICogKDEgLSBsKSxcbiAgICAgICAgY29zaCA9IE1hdGguY29zKGgpLFxuICAgICAgICBzaW5oID0gTWF0aC5zaW4oaCk7XG4gICAgcmV0dXJuIG5ldyBSZ2IoXG4gICAgICAyNTUgKiAobCArIGEgKiAoQSAqIGNvc2ggKyBCICogc2luaCkpLFxuICAgICAgMjU1ICogKGwgKyBhICogKEMgKiBjb3NoICsgRCAqIHNpbmgpKSxcbiAgICAgIDI1NSAqIChsICsgYSAqIChFICogY29zaCkpLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfVxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWNvbG9yL3NyYy9jdWJlaGVsaXguanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmVcIjtcbmltcG9ydCB7Q29sb3IsIHJnYkNvbnZlcnQsIFJnYn0gZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCB7ZGVnMnJhZCwgcmFkMmRlZ30gZnJvbSBcIi4vbWF0aFwiO1xuXG4vLyBodHRwczovL2JldGEub2JzZXJ2YWJsZWhxLmNvbS9AbWJvc3RvY2svbGFiLWFuZC1yZ2JcbnZhciBLID0gMTgsXG4gICAgWG4gPSAwLjk2NDIyLFxuICAgIFluID0gMSxcbiAgICBabiA9IDAuODI1MjEsXG4gICAgdDAgPSA0IC8gMjksXG4gICAgdDEgPSA2IC8gMjksXG4gICAgdDIgPSAzICogdDEgKiB0MSxcbiAgICB0MyA9IHQxICogdDEgKiB0MTtcblxuZnVuY3Rpb24gbGFiQ29udmVydChvKSB7XG4gIGlmIChvIGluc3RhbmNlb2YgTGFiKSByZXR1cm4gbmV3IExhYihvLmwsIG8uYSwgby5iLCBvLm9wYWNpdHkpO1xuICBpZiAobyBpbnN0YW5jZW9mIEhjbCkge1xuICAgIGlmIChpc05hTihvLmgpKSByZXR1cm4gbmV3IExhYihvLmwsIDAsIDAsIG8ub3BhY2l0eSk7XG4gICAgdmFyIGggPSBvLmggKiBkZWcycmFkO1xuICAgIHJldHVybiBuZXcgTGFiKG8ubCwgTWF0aC5jb3MoaCkgKiBvLmMsIE1hdGguc2luKGgpICogby5jLCBvLm9wYWNpdHkpO1xuICB9XG4gIGlmICghKG8gaW5zdGFuY2VvZiBSZ2IpKSBvID0gcmdiQ29udmVydChvKTtcbiAgdmFyIHIgPSByZ2IybHJnYihvLnIpLFxuICAgICAgZyA9IHJnYjJscmdiKG8uZyksXG4gICAgICBiID0gcmdiMmxyZ2Ioby5iKSxcbiAgICAgIHkgPSB4eXoybGFiKCgwLjIyMjUwNDUgKiByICsgMC43MTY4Nzg2ICogZyArIDAuMDYwNjE2OSAqIGIpIC8gWW4pLCB4LCB6O1xuICBpZiAociA9PT0gZyAmJiBnID09PSBiKSB4ID0geiA9IHk7IGVsc2Uge1xuICAgIHggPSB4eXoybGFiKCgwLjQzNjA3NDcgKiByICsgMC4zODUwNjQ5ICogZyArIDAuMTQzMDgwNCAqIGIpIC8gWG4pO1xuICAgIHogPSB4eXoybGFiKCgwLjAxMzkzMjIgKiByICsgMC4wOTcxMDQ1ICogZyArIDAuNzE0MTczMyAqIGIpIC8gWm4pO1xuICB9XG4gIHJldHVybiBuZXcgTGFiKDExNiAqIHkgLSAxNiwgNTAwICogKHggLSB5KSwgMjAwICogKHkgLSB6KSwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyYXkobCwgb3BhY2l0eSkge1xuICByZXR1cm4gbmV3IExhYihsLCAwLCAwLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxhYihsLCBhLCBiLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gbGFiQ29udmVydChsKSA6IG5ldyBMYWIobCwgYSwgYiwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGFiKGwsIGEsIGIsIG9wYWNpdHkpIHtcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMuYSA9ICthO1xuICB0aGlzLmIgPSArYjtcbiAgdGhpcy5vcGFjaXR5ID0gK29wYWNpdHk7XG59XG5cbmRlZmluZShMYWIsIGxhYiwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBMYWIodGhpcy5sICsgSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMuYSwgdGhpcy5iLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IExhYih0aGlzLmwgLSBLICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5hLCB0aGlzLmIsIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHkgPSAodGhpcy5sICsgMTYpIC8gMTE2LFxuICAgICAgICB4ID0gaXNOYU4odGhpcy5hKSA/IHkgOiB5ICsgdGhpcy5hIC8gNTAwLFxuICAgICAgICB6ID0gaXNOYU4odGhpcy5iKSA/IHkgOiB5IC0gdGhpcy5iIC8gMjAwO1xuICAgIHggPSBYbiAqIGxhYjJ4eXooeCk7XG4gICAgeSA9IFluICogbGFiMnh5eih5KTtcbiAgICB6ID0gWm4gKiBsYWIyeHl6KHopO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgbHJnYjJyZ2IoIDMuMTMzODU2MSAqIHggLSAxLjYxNjg2NjcgKiB5IC0gMC40OTA2MTQ2ICogeiksXG4gICAgICBscmdiMnJnYigtMC45Nzg3Njg0ICogeCArIDEuOTE2MTQxNSAqIHkgKyAwLjAzMzQ1NDAgKiB6KSxcbiAgICAgIGxyZ2IycmdiKCAwLjA3MTk0NTMgKiB4IC0gMC4yMjg5OTE0ICogeSArIDEuNDA1MjQyNyAqIHopLFxuICAgICAgdGhpcy5vcGFjaXR5XG4gICAgKTtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiB4eXoybGFiKHQpIHtcbiAgcmV0dXJuIHQgPiB0MyA/IE1hdGgucG93KHQsIDEgLyAzKSA6IHQgLyB0MiArIHQwO1xufVxuXG5mdW5jdGlvbiBsYWIyeHl6KHQpIHtcbiAgcmV0dXJuIHQgPiB0MSA/IHQgKiB0ICogdCA6IHQyICogKHQgLSB0MCk7XG59XG5cbmZ1bmN0aW9uIGxyZ2IycmdiKHgpIHtcbiAgcmV0dXJuIDI1NSAqICh4IDw9IDAuMDAzMTMwOCA/IDEyLjkyICogeCA6IDEuMDU1ICogTWF0aC5wb3coeCwgMSAvIDIuNCkgLSAwLjA1NSk7XG59XG5cbmZ1bmN0aW9uIHJnYjJscmdiKHgpIHtcbiAgcmV0dXJuICh4IC89IDI1NSkgPD0gMC4wNDA0NSA/IHggLyAxMi45MiA6IE1hdGgucG93KCh4ICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG59XG5cbmZ1bmN0aW9uIGhjbENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEhjbCkgcmV0dXJuIG5ldyBIY2woby5oLCBvLmMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIExhYikpIG8gPSBsYWJDb252ZXJ0KG8pO1xuICBpZiAoby5hID09PSAwICYmIG8uYiA9PT0gMCkgcmV0dXJuIG5ldyBIY2woTmFOLCAwLCBvLmwsIG8ub3BhY2l0eSk7XG4gIHZhciBoID0gTWF0aC5hdGFuMihvLmIsIG8uYSkgKiByYWQyZGVnO1xuICByZXR1cm4gbmV3IEhjbChoIDwgMCA/IGggKyAzNjAgOiBoLCBNYXRoLnNxcnQoby5hICogby5hICsgby5iICogby5iKSwgby5sLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGNoKGwsIGMsIGgsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoY2xDb252ZXJ0KGwpIDogbmV3IEhjbChoLCBjLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoY2woaCwgYywgbCwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGhjbENvbnZlcnQoaCkgOiBuZXcgSGNsKGgsIGMsIGwsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhjbChoLCBjLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLmMgPSArYztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoSGNsLCBoY2wsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcjogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgSGNsKHRoaXMuaCwgdGhpcy5jLCB0aGlzLmwgKyBLICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBIY2wodGhpcy5oLCB0aGlzLmMsIHRoaXMubCAtIEsgKiAoayA9PSBudWxsID8gMSA6IGspLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICByZ2I6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsYWJDb252ZXJ0KHRoaXMpLnJnYigpO1xuICB9XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtY29sb3Ivc3JjL2xhYi5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBkc3ZGb3JtYXR9IGZyb20gXCIuL3NyYy9kc3ZcIjtcbmV4cG9ydCB7Y3N2UGFyc2UsIGNzdlBhcnNlUm93cywgY3N2Rm9ybWF0LCBjc3ZGb3JtYXRSb3dzfSBmcm9tIFwiLi9zcmMvY3N2XCI7XG5leHBvcnQge3RzdlBhcnNlLCB0c3ZQYXJzZVJvd3MsIHRzdkZvcm1hdCwgdHN2Rm9ybWF0Um93c30gZnJvbSBcIi4vc3JjL3RzdlwiO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWRzdi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBkc3YgZnJvbSBcIi4vZHN2XCI7XG5cbnZhciBjc3YgPSBkc3YoXCIsXCIpO1xuXG5leHBvcnQgdmFyIGNzdlBhcnNlID0gY3N2LnBhcnNlO1xuZXhwb3J0IHZhciBjc3ZQYXJzZVJvd3MgPSBjc3YucGFyc2VSb3dzO1xuZXhwb3J0IHZhciBjc3ZGb3JtYXQgPSBjc3YuZm9ybWF0O1xuZXhwb3J0IHZhciBjc3ZGb3JtYXRSb3dzID0gY3N2LmZvcm1hdFJvd3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZHN2L3NyYy9jc3YuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZHN2IGZyb20gXCIuL2RzdlwiO1xuXG52YXIgdHN2ID0gZHN2KFwiXFx0XCIpO1xuXG5leHBvcnQgdmFyIHRzdlBhcnNlID0gdHN2LnBhcnNlO1xuZXhwb3J0IHZhciB0c3ZQYXJzZVJvd3MgPSB0c3YucGFyc2VSb3dzO1xuZXhwb3J0IHZhciB0c3ZGb3JtYXQgPSB0c3YuZm9ybWF0O1xuZXhwb3J0IHZhciB0c3ZGb3JtYXRSb3dzID0gdHN2LmZvcm1hdFJvd3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZHN2L3NyYy90c3YuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiByZXNwb25zZUJsb2IocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBmZXRjaChpbnB1dCwgaW5pdCkudGhlbihyZXNwb25zZUJsb2IpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZldGNoL3NyYy9ibG9iLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gcmVzcG9uc2VBcnJheUJ1ZmZlcihyZXNwb25zZSkge1xuICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzICsgXCIgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBmZXRjaChpbnB1dCwgaW5pdCkudGhlbihyZXNwb25zZUFycmF5QnVmZmVyKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mZXRjaC9zcmMvYnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtjc3ZQYXJzZSwgZHN2Rm9ybWF0LCB0c3ZQYXJzZX0gZnJvbSBcImQzLWRzdlwiO1xuaW1wb3J0IHRleHQgZnJvbSBcIi4vdGV4dFwiO1xuXG5mdW5jdGlvbiBkc3ZQYXJzZShwYXJzZSkge1xuICByZXR1cm4gZnVuY3Rpb24oaW5wdXQsIGluaXQsIHJvdykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBpbml0ID09PSBcImZ1bmN0aW9uXCIpIHJvdyA9IGluaXQsIGluaXQgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRleHQoaW5wdXQsIGluaXQpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiBwYXJzZShyZXNwb25zZSwgcm93KTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHN2KGRlbGltaXRlciwgaW5wdXQsIGluaXQsIHJvdykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMyAmJiB0eXBlb2YgaW5pdCA9PT0gXCJmdW5jdGlvblwiKSByb3cgPSBpbml0LCBpbml0ID0gdW5kZWZpbmVkO1xuICB2YXIgZm9ybWF0ID0gZHN2Rm9ybWF0KGRlbGltaXRlcik7XG4gIHJldHVybiB0ZXh0KGlucHV0LCBpbml0KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIGZvcm1hdC5wYXJzZShyZXNwb25zZSwgcm93KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB2YXIgY3N2ID0gZHN2UGFyc2UoY3N2UGFyc2UpO1xuZXhwb3J0IHZhciB0c3YgPSBkc3ZQYXJzZSh0c3ZQYXJzZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZmV0Y2gvc3JjL2Rzdi5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2U7XG4gICAgZm9yICh2YXIga2V5IGluIGluaXQpIGltYWdlW2tleV0gPSBpbml0W2tleV07XG4gICAgaW1hZ2Uub25lcnJvciA9IHJlamVjdDtcbiAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHsgcmVzb2x2ZShpbWFnZSk7IH07XG4gICAgaW1hZ2Uuc3JjID0gaW5wdXQ7XG4gIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZldGNoL3NyYy9pbWFnZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7ZGVmYXVsdCBhcyBibG9ifSBmcm9tIFwiLi9ibG9iXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYnVmZmVyfSBmcm9tIFwiLi9idWZmZXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBkc3YsIGNzdiwgdHN2fSBmcm9tIFwiLi9kc3ZcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbWFnZX0gZnJvbSBcIi4vaW1hZ2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBqc29ufSBmcm9tIFwiLi9qc29uXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGV4dH0gZnJvbSBcIi4vdGV4dFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHhtbCwgaHRtbCwgc3ZnfSBmcm9tIFwiLi94bWxcIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mZXRjaC9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiByZXNwb25zZUpzb24ocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gIHJldHVybiBmZXRjaChpbnB1dCwgaW5pdCkudGhlbihyZXNwb25zZUpzb24pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZldGNoL3NyYy9qc29uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHRleHQgZnJvbSBcIi4vdGV4dFwiO1xuXG5mdW5jdGlvbiBwYXJzZXIodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24oaW5wdXQsIGluaXQpICB7XG4gICAgcmV0dXJuIHRleHQoaW5wdXQsIGluaXQpLnRoZW4oZnVuY3Rpb24odGV4dCkge1xuICAgICAgcmV0dXJuIChuZXcgRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcodGV4dCwgdHlwZSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlcihcImFwcGxpY2F0aW9uL3htbFwiKTtcblxuZXhwb3J0IHZhciBodG1sID0gcGFyc2VyKFwidGV4dC9odG1sXCIpO1xuXG5leHBvcnQgdmFyIHN2ZyA9IHBhcnNlcihcImltYWdlL3N2Zyt4bWxcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZmV0Y2gvc3JjL3htbC5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmb3JtYXRMb2NhbGUgZnJvbSBcIi4vbG9jYWxlXCI7XG5cbnZhciBsb2NhbGU7XG5leHBvcnQgdmFyIGZvcm1hdDtcbmV4cG9ydCB2YXIgZm9ybWF0UHJlZml4O1xuXG5kZWZhdWx0TG9jYWxlKHtcbiAgZGVjaW1hbDogXCIuXCIsXG4gIHRob3VzYW5kczogXCIsXCIsXG4gIGdyb3VwaW5nOiBbM10sXG4gIGN1cnJlbmN5OiBbXCIkXCIsIFwiXCJdXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdExvY2FsZShkZWZpbml0aW9uKSB7XG4gIGxvY2FsZSA9IGZvcm1hdExvY2FsZShkZWZpbml0aW9uKTtcbiAgZm9ybWF0ID0gbG9jYWxlLmZvcm1hdDtcbiAgZm9ybWF0UHJlZml4ID0gbG9jYWxlLmZvcm1hdFByZWZpeDtcbiAgcmV0dXJuIGxvY2FsZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mb3JtYXQvc3JjL2RlZmF1bHRMb2NhbGUuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihncm91cGluZywgdGhvdXNhbmRzKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgd2lkdGgpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmxlbmd0aCxcbiAgICAgICAgdCA9IFtdLFxuICAgICAgICBqID0gMCxcbiAgICAgICAgZyA9IGdyb3VwaW5nWzBdLFxuICAgICAgICBsZW5ndGggPSAwO1xuXG4gICAgd2hpbGUgKGkgPiAwICYmIGcgPiAwKSB7XG4gICAgICBpZiAobGVuZ3RoICsgZyArIDEgPiB3aWR0aCkgZyA9IE1hdGgubWF4KDEsIHdpZHRoIC0gbGVuZ3RoKTtcbiAgICAgIHQucHVzaCh2YWx1ZS5zdWJzdHJpbmcoaSAtPSBnLCBpICsgZykpO1xuICAgICAgaWYgKChsZW5ndGggKz0gZyArIDEpID4gd2lkdGgpIGJyZWFrO1xuICAgICAgZyA9IGdyb3VwaW5nW2ogPSAoaiArIDEpICUgZ3JvdXBpbmcubGVuZ3RoXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdC5yZXZlcnNlKCkuam9pbih0aG91c2FuZHMpO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9zcmMvZm9ybWF0R3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihudW1lcmFscykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvWzAtOV0vZywgZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIG51bWVyYWxzWytpXTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdE51bWVyYWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZvcm1hdERlY2ltYWwgZnJvbSBcIi4vZm9ybWF0RGVjaW1hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCBwKSB7XG4gIHZhciBkID0gZm9ybWF0RGVjaW1hbCh4LCBwKTtcbiAgaWYgKCFkKSByZXR1cm4geCArIFwiXCI7XG4gIHZhciBjb2VmZmljaWVudCA9IGRbMF0sXG4gICAgICBleHBvbmVudCA9IGRbMV07XG4gIHJldHVybiBleHBvbmVudCA8IDAgPyBcIjAuXCIgKyBuZXcgQXJyYXkoLWV4cG9uZW50KS5qb2luKFwiMFwiKSArIGNvZWZmaWNpZW50XG4gICAgICA6IGNvZWZmaWNpZW50Lmxlbmd0aCA+IGV4cG9uZW50ICsgMSA/IGNvZWZmaWNpZW50LnNsaWNlKDAsIGV4cG9uZW50ICsgMSkgKyBcIi5cIiArIGNvZWZmaWNpZW50LnNsaWNlKGV4cG9uZW50ICsgMSlcbiAgICAgIDogY29lZmZpY2llbnQgKyBuZXcgQXJyYXkoZXhwb25lbnQgLSBjb2VmZmljaWVudC5sZW5ndGggKyAyKS5qb2luKFwiMFwiKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1mb3JtYXQvc3JjL2Zvcm1hdFJvdW5kZWQuanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUcmltcyBpbnNpZ25pZmljYW50IHplcm9zLCBlLmcuLCByZXBsYWNlcyAxLjIwMDBrIHdpdGggMS4yay5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpIHtcbiAgb3V0OiBmb3IgKHZhciBuID0gcy5sZW5ndGgsIGkgPSAxLCBpMCA9IC0xLCBpMTsgaSA8IG47ICsraSkge1xuICAgIHN3aXRjaCAoc1tpXSkge1xuICAgICAgY2FzZSBcIi5cIjogaTAgPSBpMSA9IGk7IGJyZWFrO1xuICAgICAgY2FzZSBcIjBcIjogaWYgKGkwID09PSAwKSBpMCA9IGk7IGkxID0gaTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBpZiAoaTAgPiAwKSB7IGlmICghK3NbaV0pIGJyZWFrIG91dDsgaTAgPSAwOyB9IGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaTAgPiAwID8gcy5zbGljZSgwLCBpMCkgKyBzLnNsaWNlKGkxICsgMSkgOiBzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9zcmMvZm9ybWF0VHJpbS5qc1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmb3JtYXRQcmVmaXhBdXRvIGZyb20gXCIuL2Zvcm1hdFByZWZpeEF1dG9cIjtcbmltcG9ydCBmb3JtYXRSb3VuZGVkIGZyb20gXCIuL2Zvcm1hdFJvdW5kZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIiVcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4gKHggKiAxMDApLnRvRml4ZWQocCk7IH0sXG4gIFwiYlwiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDIpOyB9LFxuICBcImNcIjogZnVuY3Rpb24oeCkgeyByZXR1cm4geCArIFwiXCI7IH0sXG4gIFwiZFwiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDEwKTsgfSxcbiAgXCJlXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIHgudG9FeHBvbmVudGlhbChwKTsgfSxcbiAgXCJmXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIHgudG9GaXhlZChwKTsgfSxcbiAgXCJnXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIHgudG9QcmVjaXNpb24ocCk7IH0sXG4gIFwib1wiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDgpOyB9LFxuICBcInBcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4gZm9ybWF0Um91bmRlZCh4ICogMTAwLCBwKTsgfSxcbiAgXCJyXCI6IGZvcm1hdFJvdW5kZWQsXG4gIFwic1wiOiBmb3JtYXRQcmVmaXhBdXRvLFxuICBcIlhcIjogZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTsgfSxcbiAgXCJ4XCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoMTYpOyB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9zcmMvZm9ybWF0VHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9zcmMvaWRlbnRpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgLWV4cG9uZW50KE1hdGguYWJzKHN0ZXApKSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25GaXhlZC5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwLCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMgLSBleHBvbmVudChNYXRoLmFicyhzdGVwKSkpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uUHJlZml4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXAsIG1heCkge1xuICBzdGVwID0gTWF0aC5hYnMoc3RlcCksIG1heCA9IE1hdGguYWJzKG1heCkgLSBzdGVwO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgZXhwb25lbnQobWF4KSAtIGV4cG9uZW50KHN0ZXApKSArIDE7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25Sb3VuZC5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Y3ViZWhlbGl4IGFzIGNvbG9yQ3ViZWhlbGl4fSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciwge2h1ZX0gZnJvbSBcIi4vY29sb3JcIjtcblxuZnVuY3Rpb24gY3ViZWhlbGl4KGh1ZSkge1xuICByZXR1cm4gKGZ1bmN0aW9uIGN1YmVoZWxpeEdhbW1hKHkpIHtcbiAgICB5ID0gK3k7XG5cbiAgICBmdW5jdGlvbiBjdWJlaGVsaXgoc3RhcnQsIGVuZCkge1xuICAgICAgdmFyIGggPSBodWUoKHN0YXJ0ID0gY29sb3JDdWJlaGVsaXgoc3RhcnQpKS5oLCAoZW5kID0gY29sb3JDdWJlaGVsaXgoZW5kKSkuaCksXG4gICAgICAgICAgcyA9IGNvbG9yKHN0YXJ0LnMsIGVuZC5zKSxcbiAgICAgICAgICBsID0gY29sb3Ioc3RhcnQubCwgZW5kLmwpLFxuICAgICAgICAgIG9wYWNpdHkgPSBjb2xvcihzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICBzdGFydC5oID0gaCh0KTtcbiAgICAgICAgc3RhcnQucyA9IHModCk7XG4gICAgICAgIHN0YXJ0LmwgPSBsKE1hdGgucG93KHQsIHkpKTtcbiAgICAgICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGN1YmVoZWxpeC5nYW1tYSA9IGN1YmVoZWxpeEdhbW1hO1xuXG4gICAgcmV0dXJuIGN1YmVoZWxpeDtcbiAgfSkoMSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGN1YmVoZWxpeChodWUpO1xuZXhwb3J0IHZhciBjdWJlaGVsaXhMb25nID0gY3ViZWhlbGl4KGNvbG9yKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvY3ViZWhlbGl4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtoY2wgYXMgY29sb3JIY2x9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGNvbG9yLCB7aHVlfSBmcm9tIFwiLi9jb2xvclwiO1xuXG5mdW5jdGlvbiBoY2woaHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgdmFyIGggPSBodWUoKHN0YXJ0ID0gY29sb3JIY2woc3RhcnQpKS5oLCAoZW5kID0gY29sb3JIY2woZW5kKSkuaCksXG4gICAgICAgIGMgPSBjb2xvcihzdGFydC5jLCBlbmQuYyksXG4gICAgICAgIGwgPSBjb2xvcihzdGFydC5sLCBlbmQubCksXG4gICAgICAgIG9wYWNpdHkgPSBjb2xvcihzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LmggPSBoKHQpO1xuICAgICAgc3RhcnQuYyA9IGModCk7XG4gICAgICBzdGFydC5sID0gbCh0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhjbChodWUpO1xuZXhwb3J0IHZhciBoY2xMb25nID0gaGNsKGNvbG9yKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvaGNsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtoc2wgYXMgY29sb3JIc2x9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGNvbG9yLCB7aHVlfSBmcm9tIFwiLi9jb2xvclwiO1xuXG5mdW5jdGlvbiBoc2woaHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgdmFyIGggPSBodWUoKHN0YXJ0ID0gY29sb3JIc2woc3RhcnQpKS5oLCAoZW5kID0gY29sb3JIc2woZW5kKSkuaCksXG4gICAgICAgIHMgPSBjb2xvcihzdGFydC5zLCBlbmQucyksXG4gICAgICAgIGwgPSBjb2xvcihzdGFydC5sLCBlbmQubCksXG4gICAgICAgIG9wYWNpdHkgPSBjb2xvcihzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgIHN0YXJ0LmggPSBoKHQpO1xuICAgICAgc3RhcnQucyA9IHModCk7XG4gICAgICBzdGFydC5sID0gbCh0KTtcbiAgICAgIHN0YXJ0Lm9wYWNpdHkgPSBvcGFjaXR5KHQpO1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhzbChodWUpO1xuZXhwb3J0IHZhciBoc2xMb25nID0gaHNsKGNvbG9yKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvaHNsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtsYWIgYXMgY29sb3JMYWJ9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGNvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxhYihzdGFydCwgZW5kKSB7XG4gIHZhciBsID0gY29sb3IoKHN0YXJ0ID0gY29sb3JMYWIoc3RhcnQpKS5sLCAoZW5kID0gY29sb3JMYWIoZW5kKSkubCksXG4gICAgICBhID0gY29sb3Ioc3RhcnQuYSwgZW5kLmEpLFxuICAgICAgYiA9IGNvbG9yKHN0YXJ0LmIsIGVuZC5iKSxcbiAgICAgIG9wYWNpdHkgPSBjb2xvcihzdGFydC5vcGFjaXR5LCBlbmQub3BhY2l0eSk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgc3RhcnQubCA9IGwodCk7XG4gICAgc3RhcnQuYSA9IGEodCk7XG4gICAgc3RhcnQuYiA9IGIodCk7XG4gICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvbGFiLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGllY2V3aXNlKGludGVycG9sYXRlLCB2YWx1ZXMpIHtcbiAgdmFyIGkgPSAwLCBuID0gdmFsdWVzLmxlbmd0aCAtIDEsIHYgPSB2YWx1ZXNbMF0sIEkgPSBuZXcgQXJyYXkobiA8IDAgPyAwIDogbik7XG4gIHdoaWxlIChpIDwgbikgSVtpXSA9IGludGVycG9sYXRlKHYsIHYgPSB2YWx1ZXNbKytpXSk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihuIC0gMSwgTWF0aC5mbG9vcih0ICo9IG4pKSk7XG4gICAgcmV0dXJuIElbaV0odCAtIGkpO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWludGVycG9sYXRlL3NyYy9waWVjZXdpc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnRlcnBvbGF0b3IsIG4pIHtcbiAgdmFyIHNhbXBsZXMgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSBzYW1wbGVzW2ldID0gaW50ZXJwb2xhdG9yKGkgLyAobiAtIDEpKTtcbiAgcmV0dXJuIHNhbXBsZXM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL3F1YW50aXplLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA9ICthLCBiIC09IGEsIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChhICsgYiAqIHQpO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWludGVycG9sYXRlL3NyYy9yb3VuZC5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuZXhwb3J0IHZhciBpZGVudGl0eSA9IHtcbiAgdHJhbnNsYXRlWDogMCxcbiAgdHJhbnNsYXRlWTogMCxcbiAgcm90YXRlOiAwLFxuICBza2V3WDogMCxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFyIHNjYWxlWCwgc2NhbGVZLCBza2V3WDtcbiAgaWYgKHNjYWxlWCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSkgYSAvPSBzY2FsZVgsIGIgLz0gc2NhbGVYO1xuICBpZiAoc2tld1ggPSBhICogYyArIGIgKiBkKSBjIC09IGEgKiBza2V3WCwgZCAtPSBiICogc2tld1g7XG4gIGlmIChzY2FsZVkgPSBNYXRoLnNxcnQoYyAqIGMgKyBkICogZCkpIGMgLz0gc2NhbGVZLCBkIC89IHNjYWxlWSwgc2tld1ggLz0gc2NhbGVZO1xuICBpZiAoYSAqIGQgPCBiICogYykgYSA9IC1hLCBiID0gLWIsIHNrZXdYID0gLXNrZXdYLCBzY2FsZVggPSAtc2NhbGVYO1xuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZVg6IGUsXG4gICAgdHJhbnNsYXRlWTogZixcbiAgICByb3RhdGU6IE1hdGguYXRhbjIoYiwgYSkgKiBkZWdyZWVzLFxuICAgIHNrZXdYOiBNYXRoLmF0YW4oc2tld1gpICogZGVncmVlcyxcbiAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICBzY2FsZVk6IHNjYWxlWVxuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vZGVjb21wb3NlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi4vbnVtYmVyXCI7XG5pbXBvcnQge3BhcnNlQ3NzLCBwYXJzZVN2Z30gZnJvbSBcIi4vcGFyc2VcIjtcblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2UsIHB4Q29tbWEsIHB4UGFyZW4sIGRlZ1BhcmVuKSB7XG5cbiAgZnVuY3Rpb24gcG9wKHMpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPyBzLnBvcCgpICsgXCIgXCIgOiBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKFwidHJhbnNsYXRlKFwiLCBudWxsLCBweENvbW1hLCBudWxsLCBweFBhcmVuKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgfHwgeWIpIHtcbiAgICAgIHMucHVzaChcInRyYW5zbGF0ZShcIiArIHhiICsgcHhDb21tYSArIHliICsgcHhQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm90YXRlKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgaWYgKGEgLSBiID4gMTgwKSBiICs9IDM2MDsgZWxzZSBpZiAoYiAtIGEgPiAxODApIGEgKz0gMzYwOyAvLyBzaG9ydGVzdCBwYXRoXG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNrZXdYKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiwgbnVsbCwgXCIsXCIsIG51bGwsIFwiKVwiKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgIT09IDEgfHwgeWIgIT09IDEpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiICsgeGIgKyBcIixcIiArIHliICsgXCIpXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcbiAgICBhID0gcGFyc2UoYSksIGIgPSBwYXJzZShiKTtcbiAgICB0cmFuc2xhdGUoYS50cmFuc2xhdGVYLCBhLnRyYW5zbGF0ZVksIGIudHJhbnNsYXRlWCwgYi50cmFuc2xhdGVZLCBzLCBxKTtcbiAgICByb3RhdGUoYS5yb3RhdGUsIGIucm90YXRlLCBzLCBxKTtcbiAgICBza2V3WChhLnNrZXdYLCBiLnNrZXdYLCBzLCBxKTtcbiAgICBzY2FsZShhLnNjYWxlWCwgYS5zY2FsZVksIGIuc2NhbGVYLCBiLnNjYWxlWSwgcywgcSk7XG4gICAgYSA9IGIgPSBudWxsOyAvLyBnY1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgaSA9IC0xLCBuID0gcS5sZW5ndGgsIG87XG4gICAgICB3aGlsZSAoKytpIDwgbikgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtQ3NzID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VDc3MsIFwicHgsIFwiLCBcInB4KVwiLCBcImRlZylcIik7XG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtU3ZnID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VTdmcsIFwiLCBcIiwgXCIpXCIsIFwiKVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGRlY29tcG9zZSwge2lkZW50aXR5fSBmcm9tIFwiLi9kZWNvbXBvc2VcIjtcblxudmFyIGNzc05vZGUsXG4gICAgY3NzUm9vdCxcbiAgICBjc3NWaWV3LFxuICAgIHN2Z05vZGU7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNzcyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IFwibm9uZVwiKSByZXR1cm4gaWRlbnRpdHk7XG4gIGlmICghY3NzTm9kZSkgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIiksIGNzc1Jvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGNzc1ZpZXcgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcbiAgY3NzTm9kZS5zdHlsZS50cmFuc2Zvcm0gPSB2YWx1ZTtcbiAgdmFsdWUgPSBjc3NWaWV3LmdldENvbXB1dGVkU3R5bGUoY3NzUm9vdC5hcHBlbmRDaGlsZChjc3NOb2RlKSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKTtcbiAgY3NzUm9vdC5yZW1vdmVDaGlsZChjc3NOb2RlKTtcbiAgdmFsdWUgPSB2YWx1ZS5zbGljZSg3LCAtMSkuc3BsaXQoXCIsXCIpO1xuICByZXR1cm4gZGVjb21wb3NlKCt2YWx1ZVswXSwgK3ZhbHVlWzFdLCArdmFsdWVbMl0sICt2YWx1ZVszXSwgK3ZhbHVlWzRdLCArdmFsdWVbNV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdmcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBpZGVudGl0eTtcbiAgaWYgKCFzdmdOb2RlKSBzdmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICBzdmdOb2RlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB2YWx1ZSk7XG4gIGlmICghKHZhbHVlID0gc3ZnTm9kZS50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpKSkgcmV0dXJuIGlkZW50aXR5O1xuICB2YWx1ZSA9IHZhbHVlLm1hdHJpeDtcbiAgcmV0dXJuIGRlY29tcG9zZSh2YWx1ZS5hLCB2YWx1ZS5iLCB2YWx1ZS5jLCB2YWx1ZS5kLCB2YWx1ZS5lLCB2YWx1ZS5mKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1pbnRlcnBvbGF0ZS9zcmMvdHJhbnNmb3JtL3BhcnNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJobyA9IE1hdGguU1FSVDIsXG4gICAgcmhvMiA9IDIsXG4gICAgcmhvNCA9IDQsXG4gICAgZXBzaWxvbjIgPSAxZS0xMjtcblxuZnVuY3Rpb24gY29zaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCh4KSkgKyAxIC8geCkgLyAyO1xufVxuXG5mdW5jdGlvbiBzaW5oKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKHgpKSAtIDEgLyB4KSAvIDI7XG59XG5cbmZ1bmN0aW9uIHRhbmgoeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoMiAqIHgpKSAtIDEpIC8gKHggKyAxKTtcbn1cblxuLy8gcDAgPSBbdXgwLCB1eTAsIHcwXVxuLy8gcDEgPSBbdXgxLCB1eTEsIHcxXVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocDAsIHAxKSB7XG4gIHZhciB1eDAgPSBwMFswXSwgdXkwID0gcDBbMV0sIHcwID0gcDBbMl0sXG4gICAgICB1eDEgPSBwMVswXSwgdXkxID0gcDFbMV0sIHcxID0gcDFbMl0sXG4gICAgICBkeCA9IHV4MSAtIHV4MCxcbiAgICAgIGR5ID0gdXkxIC0gdXkwLFxuICAgICAgZDIgPSBkeCAqIGR4ICsgZHkgKiBkeSxcbiAgICAgIGksXG4gICAgICBTO1xuXG4gIC8vIFNwZWNpYWwgY2FzZSBmb3IgdTAg4omFIHUxLlxuICBpZiAoZDIgPCBlcHNpbG9uMikge1xuICAgIFMgPSBNYXRoLmxvZyh3MSAvIHcwKSAvIHJobztcbiAgICBpID0gZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgdXgwICsgdCAqIGR4LFxuICAgICAgICB1eTAgKyB0ICogZHksXG4gICAgICAgIHcwICogTWF0aC5leHAocmhvICogdCAqIFMpXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdlbmVyYWwgY2FzZS5cbiAgZWxzZSB7XG4gICAgdmFyIGQxID0gTWF0aC5zcXJ0KGQyKSxcbiAgICAgICAgYjAgPSAodzEgKiB3MSAtIHcwICogdzAgKyByaG80ICogZDIpIC8gKDIgKiB3MCAqIHJobzIgKiBkMSksXG4gICAgICAgIGIxID0gKHcxICogdzEgLSB3MCAqIHcwIC0gcmhvNCAqIGQyKSAvICgyICogdzEgKiByaG8yICogZDEpLFxuICAgICAgICByMCA9IE1hdGgubG9nKE1hdGguc3FydChiMCAqIGIwICsgMSkgLSBiMCksXG4gICAgICAgIHIxID0gTWF0aC5sb2coTWF0aC5zcXJ0KGIxICogYjEgKyAxKSAtIGIxKTtcbiAgICBTID0gKHIxIC0gcjApIC8gcmhvO1xuICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgcyA9IHQgKiBTLFxuICAgICAgICAgIGNvc2hyMCA9IGNvc2gocjApLFxuICAgICAgICAgIHUgPSB3MCAvIChyaG8yICogZDEpICogKGNvc2hyMCAqIHRhbmgocmhvICogcyArIHIwKSAtIHNpbmgocjApKTtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHV4MCArIHUgKiBkeCxcbiAgICAgICAgdXkwICsgdSAqIGR5LFxuICAgICAgICB3MCAqIGNvc2hyMCAvIGNvc2gocmhvICogcyArIHIwKVxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBpLmR1cmF0aW9uID0gUyAqIDEwMDA7XG5cbiAgcmV0dXJuIGk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtaW50ZXJwb2xhdGUvc3JjL3pvb20uanNcbi8vIG1vZHVsZSBpZCA9IDEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlQmFuZCxcbiAgcG9pbnQgYXMgc2NhbGVQb2ludFxufSBmcm9tIFwiLi9zcmMvYmFuZFwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlSWRlbnRpdHlcbn0gZnJvbSBcIi4vc3JjL2lkZW50aXR5XCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVMaW5lYXJcbn0gZnJvbSBcIi4vc3JjL2xpbmVhclwiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlTG9nXG59IGZyb20gXCIuL3NyYy9sb2dcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZU9yZGluYWwsXG4gIGltcGxpY2l0IGFzIHNjYWxlSW1wbGljaXRcbn0gZnJvbSBcIi4vc3JjL29yZGluYWxcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVBvdyxcbiAgc3FydCBhcyBzY2FsZVNxcnRcbn0gZnJvbSBcIi4vc3JjL3Bvd1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlUXVhbnRpbGVcbn0gZnJvbSBcIi4vc3JjL3F1YW50aWxlXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVRdWFudGl6ZVxufSBmcm9tIFwiLi9zcmMvcXVhbnRpemVcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVRocmVzaG9sZFxufSBmcm9tIFwiLi9zcmMvdGhyZXNob2xkXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVUaW1lXG59IGZyb20gXCIuL3NyYy90aW1lXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVVdGNcbn0gZnJvbSBcIi4vc3JjL3V0Y1RpbWVcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVNlcXVlbnRpYWxcbn0gZnJvbSBcIi4vc3JjL3NlcXVlbnRpYWxcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZURpdmVyZ2luZ1xufSBmcm9tIFwiLi9zcmMvZGl2ZXJnaW5nXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3JhbmdlIGFzIHNlcXVlbmNlfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCBvcmRpbmFsIGZyb20gXCIuL29yZGluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFuZCgpIHtcbiAgdmFyIHNjYWxlID0gb3JkaW5hbCgpLnVua25vd24odW5kZWZpbmVkKSxcbiAgICAgIGRvbWFpbiA9IHNjYWxlLmRvbWFpbixcbiAgICAgIG9yZGluYWxSYW5nZSA9IHNjYWxlLnJhbmdlLFxuICAgICAgcmFuZ2UgPSBbMCwgMV0sXG4gICAgICBzdGVwLFxuICAgICAgYmFuZHdpZHRoLFxuICAgICAgcm91bmQgPSBmYWxzZSxcbiAgICAgIHBhZGRpbmdJbm5lciA9IDAsXG4gICAgICBwYWRkaW5nT3V0ZXIgPSAwLFxuICAgICAgYWxpZ24gPSAwLjU7XG5cbiAgZGVsZXRlIHNjYWxlLnVua25vd247XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICB2YXIgbiA9IGRvbWFpbigpLmxlbmd0aCxcbiAgICAgICAgcmV2ZXJzZSA9IHJhbmdlWzFdIDwgcmFuZ2VbMF0sXG4gICAgICAgIHN0YXJ0ID0gcmFuZ2VbcmV2ZXJzZSAtIDBdLFxuICAgICAgICBzdG9wID0gcmFuZ2VbMSAtIHJldmVyc2VdO1xuICAgIHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIE1hdGgubWF4KDEsIG4gLSBwYWRkaW5nSW5uZXIgKyBwYWRkaW5nT3V0ZXIgKiAyKTtcbiAgICBpZiAocm91bmQpIHN0ZXAgPSBNYXRoLmZsb29yKHN0ZXApO1xuICAgIHN0YXJ0ICs9IChzdG9wIC0gc3RhcnQgLSBzdGVwICogKG4gLSBwYWRkaW5nSW5uZXIpKSAqIGFsaWduO1xuICAgIGJhbmR3aWR0aCA9IHN0ZXAgKiAoMSAtIHBhZGRpbmdJbm5lcik7XG4gICAgaWYgKHJvdW5kKSBzdGFydCA9IE1hdGgucm91bmQoc3RhcnQpLCBiYW5kd2lkdGggPSBNYXRoLnJvdW5kKGJhbmR3aWR0aCk7XG4gICAgdmFyIHZhbHVlcyA9IHNlcXVlbmNlKG4pLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBzdGFydCArIHN0ZXAgKiBpOyB9KTtcbiAgICByZXR1cm4gb3JkaW5hbFJhbmdlKHJldmVyc2UgPyB2YWx1ZXMucmV2ZXJzZSgpIDogdmFsdWVzKTtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4oXyksIHJlc2NhbGUoKSkgOiBkb21haW4oKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYW5nZSA9IFsrX1swXSwgK19bMV1dLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiByYW5nZSA9IFsrX1swXSwgK19bMV1dLCByb3VuZCA9IHRydWUsIHJlc2NhbGUoKTtcbiAgfTtcblxuICBzY2FsZS5iYW5kd2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYmFuZHdpZHRoO1xuICB9O1xuXG4gIHNjYWxlLnN0ZXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc3RlcDtcbiAgfTtcblxuICBzY2FsZS5yb3VuZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyb3VuZCA9ICEhXywgcmVzY2FsZSgpKSA6IHJvdW5kO1xuICB9O1xuXG4gIHNjYWxlLnBhZGRpbmcgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocGFkZGluZ0lubmVyID0gcGFkZGluZ091dGVyID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgXykpLCByZXNjYWxlKCkpIDogcGFkZGluZ0lubmVyO1xuICB9O1xuXG4gIHNjYWxlLnBhZGRpbmdJbm5lciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwYWRkaW5nSW5uZXIgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBfKSksIHJlc2NhbGUoKSkgOiBwYWRkaW5nSW5uZXI7XG4gIH07XG5cbiAgc2NhbGUucGFkZGluZ091dGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZGRpbmdPdXRlciA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIF8pKSwgcmVzY2FsZSgpKSA6IHBhZGRpbmdPdXRlcjtcbiAgfTtcblxuICBzY2FsZS5hbGlnbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbGlnbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIF8pKSwgcmVzY2FsZSgpKSA6IGFsaWduO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYmFuZCgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKCkpXG4gICAgICAgIC5yYW5nZShyYW5nZSlcbiAgICAgICAgLnJvdW5kKHJvdW5kKVxuICAgICAgICAucGFkZGluZ0lubmVyKHBhZGRpbmdJbm5lcilcbiAgICAgICAgLnBhZGRpbmdPdXRlcihwYWRkaW5nT3V0ZXIpXG4gICAgICAgIC5hbGlnbihhbGlnbik7XG4gIH07XG5cbiAgcmV0dXJuIHJlc2NhbGUoKTtcbn1cblxuZnVuY3Rpb24gcG9pbnRpc2goc2NhbGUpIHtcbiAgdmFyIGNvcHkgPSBzY2FsZS5jb3B5O1xuXG4gIHNjYWxlLnBhZGRpbmcgPSBzY2FsZS5wYWRkaW5nT3V0ZXI7XG4gIGRlbGV0ZSBzY2FsZS5wYWRkaW5nSW5uZXI7XG4gIGRlbGV0ZSBzY2FsZS5wYWRkaW5nT3V0ZXI7XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBwb2ludGlzaChjb3B5KCkpO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50KCkge1xuICByZXR1cm4gcG9pbnRpc2goYmFuZCgpLnBhZGRpbmdJbm5lcigxKSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL2JhbmQuanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2xpbmVhcmlzaH0gZnJvbSBcIi4vbGluZWFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpdmVyZ2luZyhpbnRlcnBvbGF0b3IpIHtcbiAgdmFyIHgwID0gMCxcbiAgICAgIHgxID0gMC41LFxuICAgICAgeDIgPSAxLFxuICAgICAgazEwID0gMSxcbiAgICAgIGsyMSA9IDEsXG4gICAgICBjbGFtcCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICB2YXIgdCA9IDAuNSArICgoeCA9ICt4KSAtIHgxKSAqICh4IDwgeDEgPyBrMTAgOiBrMjEpO1xuICAgIHJldHVybiBpbnRlcnBvbGF0b3IoY2xhbXAgPyBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0KSkgOiB0KTtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4MCA9ICtfWzBdLCB4MSA9ICtfWzFdLCB4MiA9ICtfWzJdLCBrMTAgPSB4MCA9PT0geDEgPyAwIDogMC41IC8gKHgxIC0geDApLCBrMjEgPSB4MSA9PT0geDIgPyAwIDogMC41IC8gKHgyIC0geDEpLCBzY2FsZSkgOiBbeDAsIHgxLCB4Ml07XG4gIH07XG5cbiAgc2NhbGUuY2xhbXAgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY2xhbXAgPSAhIV8sIHNjYWxlKSA6IGNsYW1wO1xuICB9O1xuXG4gIHNjYWxlLmludGVycG9sYXRvciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChpbnRlcnBvbGF0b3IgPSBfLCBzY2FsZSkgOiBpbnRlcnBvbGF0b3I7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXZlcmdpbmcoaW50ZXJwb2xhdG9yKS5kb21haW4oW3gwLCB4MSwgeDJdKS5jbGFtcChjbGFtcCk7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL2RpdmVyZ2luZy5qc1xuLy8gbW9kdWxlIGlkID0gMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7bWFwfSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IHtsaW5lYXJpc2h9IGZyb20gXCIuL2xpbmVhclwiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWRlbnRpdHkoKSB7XG4gIHZhciBkb21haW4gPSBbMCwgMV07XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiAreDtcbiAgfVxuXG4gIHNjYWxlLmludmVydCA9IHNjYWxlO1xuXG4gIHNjYWxlLmRvbWFpbiA9IHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRvbWFpbiA9IG1hcC5jYWxsKF8sIG51bWJlciksIHNjYWxlKSA6IGRvbWFpbi5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaWRlbnRpdHkoKS5kb21haW4oZG9tYWluKTtcbiAgfTtcblxuICByZXR1cm4gbGluZWFyaXNoKHNjYWxlKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvaWRlbnRpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3RpY2tzfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7Zm9ybWF0fSBmcm9tIFwiZDMtZm9ybWF0XCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBuaWNlIGZyb20gXCIuL25pY2VcIjtcbmltcG9ydCB7ZGVmYXVsdCBhcyBjb250aW51b3VzLCBjb3B5fSBmcm9tIFwiLi9jb250aW51b3VzXCI7XG5cbmZ1bmN0aW9uIGRlaW50ZXJwb2xhdGUoYSwgYikge1xuICByZXR1cm4gKGIgPSBNYXRoLmxvZyhiIC8gYSkpXG4gICAgICA/IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgubG9nKHggLyBhKSAvIGI7IH1cbiAgICAgIDogY29uc3RhbnQoYik7XG59XG5cbmZ1bmN0aW9uIHJlaW50ZXJwb2xhdGUoYSwgYikge1xuICByZXR1cm4gYSA8IDBcbiAgICAgID8gZnVuY3Rpb24odCkgeyByZXR1cm4gLU1hdGgucG93KC1iLCB0KSAqIE1hdGgucG93KC1hLCAxIC0gdCk7IH1cbiAgICAgIDogZnVuY3Rpb24odCkgeyByZXR1cm4gTWF0aC5wb3coYiwgdCkgKiBNYXRoLnBvdyhhLCAxIC0gdCk7IH07XG59XG5cbmZ1bmN0aW9uIHBvdzEwKHgpIHtcbiAgcmV0dXJuIGlzRmluaXRlKHgpID8gKyhcIjFlXCIgKyB4KSA6IHggPCAwID8gMCA6IHg7XG59XG5cbmZ1bmN0aW9uIHBvd3AoYmFzZSkge1xuICByZXR1cm4gYmFzZSA9PT0gMTAgPyBwb3cxMFxuICAgICAgOiBiYXNlID09PSBNYXRoLkUgPyBNYXRoLmV4cFxuICAgICAgOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnBvdyhiYXNlLCB4KTsgfTtcbn1cblxuZnVuY3Rpb24gbG9ncChiYXNlKSB7XG4gIHJldHVybiBiYXNlID09PSBNYXRoLkUgPyBNYXRoLmxvZ1xuICAgICAgOiBiYXNlID09PSAxMCAmJiBNYXRoLmxvZzEwXG4gICAgICB8fCBiYXNlID09PSAyICYmIE1hdGgubG9nMlxuICAgICAgfHwgKGJhc2UgPSBNYXRoLmxvZyhiYXNlKSwgZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5sb2coeCkgLyBiYXNlOyB9KTtcbn1cblxuZnVuY3Rpb24gcmVmbGVjdChmKSB7XG4gIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIC1mKC14KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nKCkge1xuICB2YXIgc2NhbGUgPSBjb250aW51b3VzKGRlaW50ZXJwb2xhdGUsIHJlaW50ZXJwb2xhdGUpLmRvbWFpbihbMSwgMTBdKSxcbiAgICAgIGRvbWFpbiA9IHNjYWxlLmRvbWFpbixcbiAgICAgIGJhc2UgPSAxMCxcbiAgICAgIGxvZ3MgPSBsb2dwKDEwKSxcbiAgICAgIHBvd3MgPSBwb3dwKDEwKTtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIGxvZ3MgPSBsb2dwKGJhc2UpLCBwb3dzID0gcG93cChiYXNlKTtcbiAgICBpZiAoZG9tYWluKClbMF0gPCAwKSBsb2dzID0gcmVmbGVjdChsb2dzKSwgcG93cyA9IHJlZmxlY3QocG93cyk7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgc2NhbGUuYmFzZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChiYXNlID0gK18sIHJlc2NhbGUoKSkgOiBiYXNlO1xuICB9O1xuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4oXyksIHJlc2NhbGUoKSkgOiBkb21haW4oKTtcbiAgfTtcblxuICBzY2FsZS50aWNrcyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgdmFyIGQgPSBkb21haW4oKSxcbiAgICAgICAgdSA9IGRbMF0sXG4gICAgICAgIHYgPSBkW2QubGVuZ3RoIC0gMV0sXG4gICAgICAgIHI7XG5cbiAgICBpZiAociA9IHYgPCB1KSBpID0gdSwgdSA9IHYsIHYgPSBpO1xuXG4gICAgdmFyIGkgPSBsb2dzKHUpLFxuICAgICAgICBqID0gbG9ncyh2KSxcbiAgICAgICAgcCxcbiAgICAgICAgayxcbiAgICAgICAgdCxcbiAgICAgICAgbiA9IGNvdW50ID09IG51bGwgPyAxMCA6ICtjb3VudCxcbiAgICAgICAgeiA9IFtdO1xuXG4gICAgaWYgKCEoYmFzZSAlIDEpICYmIGogLSBpIDwgbikge1xuICAgICAgaSA9IE1hdGgucm91bmQoaSkgLSAxLCBqID0gTWF0aC5yb3VuZChqKSArIDE7XG4gICAgICBpZiAodSA+IDApIGZvciAoOyBpIDwgajsgKytpKSB7XG4gICAgICAgIGZvciAoayA9IDEsIHAgPSBwb3dzKGkpOyBrIDwgYmFzZTsgKytrKSB7XG4gICAgICAgICAgdCA9IHAgKiBrO1xuICAgICAgICAgIGlmICh0IDwgdSkgY29udGludWU7XG4gICAgICAgICAgaWYgKHQgPiB2KSBicmVhaztcbiAgICAgICAgICB6LnB1c2godCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBmb3IgKDsgaSA8IGo7ICsraSkge1xuICAgICAgICBmb3IgKGsgPSBiYXNlIC0gMSwgcCA9IHBvd3MoaSk7IGsgPj0gMTsgLS1rKSB7XG4gICAgICAgICAgdCA9IHAgKiBrO1xuICAgICAgICAgIGlmICh0IDwgdSkgY29udGludWU7XG4gICAgICAgICAgaWYgKHQgPiB2KSBicmVhaztcbiAgICAgICAgICB6LnB1c2godCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgeiA9IHRpY2tzKGksIGosIE1hdGgubWluKGogLSBpLCBuKSkubWFwKHBvd3MpO1xuICAgIH1cblxuICAgIHJldHVybiByID8gei5yZXZlcnNlKCkgOiB6O1xuICB9O1xuXG4gIHNjYWxlLnRpY2tGb3JtYXQgPSBmdW5jdGlvbihjb3VudCwgc3BlY2lmaWVyKSB7XG4gICAgaWYgKHNwZWNpZmllciA9PSBudWxsKSBzcGVjaWZpZXIgPSBiYXNlID09PSAxMCA/IFwiLjBlXCIgOiBcIixcIjtcbiAgICBpZiAodHlwZW9mIHNwZWNpZmllciAhPT0gXCJmdW5jdGlvblwiKSBzcGVjaWZpZXIgPSBmb3JtYXQoc3BlY2lmaWVyKTtcbiAgICBpZiAoY291bnQgPT09IEluZmluaXR5KSByZXR1cm4gc3BlY2lmaWVyO1xuICAgIGlmIChjb3VudCA9PSBudWxsKSBjb3VudCA9IDEwO1xuICAgIHZhciBrID0gTWF0aC5tYXgoMSwgYmFzZSAqIGNvdW50IC8gc2NhbGUudGlja3MoKS5sZW5ndGgpOyAvLyBUT0RPIGZhc3QgZXN0aW1hdGU/XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgIHZhciBpID0gZCAvIHBvd3MoTWF0aC5yb3VuZChsb2dzKGQpKSk7XG4gICAgICBpZiAoaSAqIGJhc2UgPCBiYXNlIC0gMC41KSBpICo9IGJhc2U7XG4gICAgICByZXR1cm4gaSA8PSBrID8gc3BlY2lmaWVyKGQpIDogXCJcIjtcbiAgICB9O1xuICB9O1xuXG4gIHNjYWxlLm5pY2UgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZG9tYWluKG5pY2UoZG9tYWluKCksIHtcbiAgICAgIGZsb29yOiBmdW5jdGlvbih4KSB7IHJldHVybiBwb3dzKE1hdGguZmxvb3IobG9ncyh4KSkpOyB9LFxuICAgICAgY2VpbDogZnVuY3Rpb24oeCkgeyByZXR1cm4gcG93cyhNYXRoLmNlaWwobG9ncyh4KSkpOyB9XG4gICAgfSkpO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgbG9nKCkuYmFzZShiYXNlKSk7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9sb2cuanNcbi8vIG1vZHVsZSBpZCA9IDE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCB7bGluZWFyaXNofSBmcm9tIFwiLi9saW5lYXJcIjtcbmltcG9ydCB7ZGVmYXVsdCBhcyBjb250aW51b3VzLCBjb3B5fSBmcm9tIFwiLi9jb250aW51b3VzXCI7XG5cbmZ1bmN0aW9uIHJhaXNlKHgsIGV4cG9uZW50KSB7XG4gIHJldHVybiB4IDwgMCA/IC1NYXRoLnBvdygteCwgZXhwb25lbnQpIDogTWF0aC5wb3coeCwgZXhwb25lbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3coKSB7XG4gIHZhciBleHBvbmVudCA9IDEsXG4gICAgICBzY2FsZSA9IGNvbnRpbnVvdXMoZGVpbnRlcnBvbGF0ZSwgcmVpbnRlcnBvbGF0ZSksXG4gICAgICBkb21haW4gPSBzY2FsZS5kb21haW47XG5cbiAgZnVuY3Rpb24gZGVpbnRlcnBvbGF0ZShhLCBiKSB7XG4gICAgcmV0dXJuIChiID0gcmFpc2UoYiwgZXhwb25lbnQpIC0gKGEgPSByYWlzZShhLCBleHBvbmVudCkpKVxuICAgICAgICA/IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIChyYWlzZSh4LCBleHBvbmVudCkgLSBhKSAvIGI7IH1cbiAgICAgICAgOiBjb25zdGFudChiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlaW50ZXJwb2xhdGUoYSwgYikge1xuICAgIGIgPSByYWlzZShiLCBleHBvbmVudCkgLSAoYSA9IHJhaXNlKGEsIGV4cG9uZW50KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHsgcmV0dXJuIHJhaXNlKGEgKyBiICogdCwgMSAvIGV4cG9uZW50KTsgfTtcbiAgfVxuXG4gIHNjYWxlLmV4cG9uZW50ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGV4cG9uZW50ID0gK18sIGRvbWFpbihkb21haW4oKSkpIDogZXhwb25lbnQ7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb3B5KHNjYWxlLCBwb3coKS5leHBvbmVudChleHBvbmVudCkpO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3FydCgpIHtcbiAgcmV0dXJuIHBvdygpLmV4cG9uZW50KDAuNSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL3Bvdy5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YXNjZW5kaW5nLCBiaXNlY3QsIHF1YW50aWxlIGFzIHRocmVzaG9sZH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge3NsaWNlfSBmcm9tIFwiLi9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWFudGlsZSgpIHtcbiAgdmFyIGRvbWFpbiA9IFtdLFxuICAgICAgcmFuZ2UgPSBbXSxcbiAgICAgIHRocmVzaG9sZHMgPSBbXTtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHZhciBpID0gMCwgbiA9IE1hdGgubWF4KDEsIHJhbmdlLmxlbmd0aCk7XG4gICAgdGhyZXNob2xkcyA9IG5ldyBBcnJheShuIC0gMSk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHRocmVzaG9sZHNbaSAtIDFdID0gdGhyZXNob2xkKGRvbWFpbiwgaSAvIG4pO1xuICAgIHJldHVybiBzY2FsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICBpZiAoIWlzTmFOKHggPSAreCkpIHJldHVybiByYW5nZVtiaXNlY3QodGhyZXNob2xkcywgeCldO1xuICB9XG5cbiAgc2NhbGUuaW52ZXJ0RXh0ZW50ID0gZnVuY3Rpb24oeSkge1xuICAgIHZhciBpID0gcmFuZ2UuaW5kZXhPZih5KTtcbiAgICByZXR1cm4gaSA8IDAgPyBbTmFOLCBOYU5dIDogW1xuICAgICAgaSA+IDAgPyB0aHJlc2hvbGRzW2kgLSAxXSA6IGRvbWFpblswXSxcbiAgICAgIGkgPCB0aHJlc2hvbGRzLmxlbmd0aCA/IHRocmVzaG9sZHNbaV0gOiBkb21haW5bZG9tYWluLmxlbmd0aCAtIDFdXG4gICAgXTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZG9tYWluLnNsaWNlKCk7XG4gICAgZG9tYWluID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBfLmxlbmd0aCwgZDsgaSA8IG47ICsraSkgaWYgKGQgPSBfW2ldLCBkICE9IG51bGwgJiYgIWlzTmFOKGQgPSArZCkpIGRvbWFpbi5wdXNoKGQpO1xuICAgIGRvbWFpbi5zb3J0KGFzY2VuZGluZyk7XG4gICAgcmV0dXJuIHJlc2NhbGUoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYW5nZSA9IHNsaWNlLmNhbGwoXyksIHJlc2NhbGUoKSkgOiByYW5nZS5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnF1YW50aWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aHJlc2hvbGRzLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBxdWFudGlsZSgpXG4gICAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgICAucmFuZ2UocmFuZ2UpO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvcXVhbnRpbGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2Jpc2VjdH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge3NsaWNlfSBmcm9tIFwiLi9hcnJheVwiO1xuaW1wb3J0IHtsaW5lYXJpc2h9IGZyb20gXCIuL2xpbmVhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWFudGl6ZSgpIHtcbiAgdmFyIHgwID0gMCxcbiAgICAgIHgxID0gMSxcbiAgICAgIG4gPSAxLFxuICAgICAgZG9tYWluID0gWzAuNV0sXG4gICAgICByYW5nZSA9IFswLCAxXTtcblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgaWYgKHggPD0geCkgcmV0dXJuIHJhbmdlW2Jpc2VjdChkb21haW4sIHgsIDAsIG4pXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2NhbGUoKSB7XG4gICAgdmFyIGkgPSAtMTtcbiAgICBkb21haW4gPSBuZXcgQXJyYXkobik7XG4gICAgd2hpbGUgKCsraSA8IG4pIGRvbWFpbltpXSA9ICgoaSArIDEpICogeDEgLSAoaSAtIG4pICogeDApIC8gKG4gKyAxKTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeDAgPSArX1swXSwgeDEgPSArX1sxXSwgcmVzY2FsZSgpKSA6IFt4MCwgeDFdO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKG4gPSAocmFuZ2UgPSBzbGljZS5jYWxsKF8pKS5sZW5ndGggLSAxLCByZXNjYWxlKCkpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5pbnZlcnRFeHRlbnQgPSBmdW5jdGlvbih5KSB7XG4gICAgdmFyIGkgPSByYW5nZS5pbmRleE9mKHkpO1xuICAgIHJldHVybiBpIDwgMCA/IFtOYU4sIE5hTl1cbiAgICAgICAgOiBpIDwgMSA/IFt4MCwgZG9tYWluWzBdXVxuICAgICAgICA6IGkgPj0gbiA/IFtkb21haW5bbiAtIDFdLCB4MV1cbiAgICAgICAgOiBbZG9tYWluW2kgLSAxXSwgZG9tYWluW2ldXTtcbiAgfTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHF1YW50aXplKClcbiAgICAgICAgLmRvbWFpbihbeDAsIHgxXSlcbiAgICAgICAgLnJhbmdlKHJhbmdlKTtcbiAgfTtcblxuICByZXR1cm4gbGluZWFyaXNoKHNjYWxlKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvcXVhbnRpemUuanNcbi8vIG1vZHVsZSBpZCA9IDE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2xpbmVhcmlzaH0gZnJvbSBcIi4vbGluZWFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlcXVlbnRpYWwoaW50ZXJwb2xhdG9yKSB7XG4gIHZhciB4MCA9IDAsXG4gICAgICB4MSA9IDEsXG4gICAgICBrMTAgPSAxLFxuICAgICAgY2xhbXAgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgdmFyIHQgPSAoeCAtIHgwKSAqIGsxMDtcbiAgICByZXR1cm4gaW50ZXJwb2xhdG9yKGNsYW1wID8gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpIDogdCk7XG4gIH1cblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeDAgPSArX1swXSwgeDEgPSArX1sxXSwgazEwID0geDAgPT09IHgxID8gMCA6IDEgLyAoeDEgLSB4MCksIHNjYWxlKSA6IFt4MCwgeDFdO1xuICB9O1xuXG4gIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsYW1wID0gISFfLCBzY2FsZSkgOiBjbGFtcDtcbiAgfTtcblxuICBzY2FsZS5pbnRlcnBvbGF0b3IgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW50ZXJwb2xhdG9yID0gXywgc2NhbGUpIDogaW50ZXJwb2xhdG9yO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2VxdWVudGlhbChpbnRlcnBvbGF0b3IpLmRvbWFpbihbeDAsIHgxXSkuY2xhbXAoY2xhbXApO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy9zZXF1ZW50aWFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtiaXNlY3R9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyZXNob2xkKCkge1xuICB2YXIgZG9tYWluID0gWzAuNV0sXG4gICAgICByYW5nZSA9IFswLCAxXSxcbiAgICAgIG4gPSAxO1xuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICBpZiAoeCA8PSB4KSByZXR1cm4gcmFuZ2VbYmlzZWN0KGRvbWFpbiwgeCwgMCwgbildO1xuICB9XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRvbWFpbiA9IHNsaWNlLmNhbGwoXyksIG4gPSBNYXRoLm1pbihkb21haW4ubGVuZ3RoLCByYW5nZS5sZW5ndGggLSAxKSwgc2NhbGUpIDogZG9tYWluLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBzbGljZS5jYWxsKF8pLCBuID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoIC0gMSksIHNjYWxlKSA6IHJhbmdlLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUuaW52ZXJ0RXh0ZW50ID0gZnVuY3Rpb24oeSkge1xuICAgIHZhciBpID0gcmFuZ2UuaW5kZXhPZih5KTtcbiAgICByZXR1cm4gW2RvbWFpbltpIC0gMV0sIGRvbWFpbltpXV07XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aHJlc2hvbGQoKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKHJhbmdlKTtcbiAgfTtcblxuICByZXR1cm4gc2NhbGU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2NhbGUvc3JjL3RocmVzaG9sZC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7dGlja1N0ZXB9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtmb3JtYXQsIGZvcm1hdFByZWZpeCwgZm9ybWF0U3BlY2lmaWVyLCBwcmVjaXNpb25GaXhlZCwgcHJlY2lzaW9uUHJlZml4LCBwcmVjaXNpb25Sb3VuZH0gZnJvbSBcImQzLWZvcm1hdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkb21haW4sIGNvdW50LCBzcGVjaWZpZXIpIHtcbiAgdmFyIHN0YXJ0ID0gZG9tYWluWzBdLFxuICAgICAgc3RvcCA9IGRvbWFpbltkb21haW4ubGVuZ3RoIC0gMV0sXG4gICAgICBzdGVwID0gdGlja1N0ZXAoc3RhcnQsIHN0b3AsIGNvdW50ID09IG51bGwgPyAxMCA6IGNvdW50KSxcbiAgICAgIHByZWNpc2lvbjtcbiAgc3BlY2lmaWVyID0gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllciA9PSBudWxsID8gXCIsZlwiIDogc3BlY2lmaWVyKTtcbiAgc3dpdGNoIChzcGVjaWZpZXIudHlwZSkge1xuICAgIGNhc2UgXCJzXCI6IHtcbiAgICAgIHZhciB2YWx1ZSA9IE1hdGgubWF4KE1hdGguYWJzKHN0YXJ0KSwgTWF0aC5hYnMoc3RvcCkpO1xuICAgICAgaWYgKHNwZWNpZmllci5wcmVjaXNpb24gPT0gbnVsbCAmJiAhaXNOYU4ocHJlY2lzaW9uID0gcHJlY2lzaW9uUHJlZml4KHN0ZXAsIHZhbHVlKSkpIHNwZWNpZmllci5wcmVjaXNpb24gPSBwcmVjaXNpb247XG4gICAgICByZXR1cm4gZm9ybWF0UHJlZml4KHNwZWNpZmllciwgdmFsdWUpO1xuICAgIH1cbiAgICBjYXNlIFwiXCI6XG4gICAgY2FzZSBcImVcIjpcbiAgICBjYXNlIFwiZ1wiOlxuICAgIGNhc2UgXCJwXCI6XG4gICAgY2FzZSBcInJcIjoge1xuICAgICAgaWYgKHNwZWNpZmllci5wcmVjaXNpb24gPT0gbnVsbCAmJiAhaXNOYU4ocHJlY2lzaW9uID0gcHJlY2lzaW9uUm91bmQoc3RlcCwgTWF0aC5tYXgoTWF0aC5hYnMoc3RhcnQpLCBNYXRoLmFicyhzdG9wKSkpKSkgc3BlY2lmaWVyLnByZWNpc2lvbiA9IHByZWNpc2lvbiAtIChzcGVjaWZpZXIudHlwZSA9PT0gXCJlXCIpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgXCJmXCI6XG4gICAgY2FzZSBcIiVcIjoge1xuICAgICAgaWYgKHNwZWNpZmllci5wcmVjaXNpb24gPT0gbnVsbCAmJiAhaXNOYU4ocHJlY2lzaW9uID0gcHJlY2lzaW9uRml4ZWQoc3RlcCkpKSBzcGVjaWZpZXIucHJlY2lzaW9uID0gcHJlY2lzaW9uIC0gKHNwZWNpZmllci50eXBlID09PSBcIiVcIikgKiAyO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3JtYXQoc3BlY2lmaWVyKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zY2FsZS9zcmMvdGlja0Zvcm1hdC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Y2FsZW5kYXJ9IGZyb20gXCIuL3RpbWVcIjtcbmltcG9ydCB7dXRjRm9ybWF0fSBmcm9tIFwiZDMtdGltZS1mb3JtYXRcIjtcbmltcG9ydCB7dXRjWWVhciwgdXRjTW9udGgsIHV0Y1dlZWssIHV0Y0RheSwgdXRjSG91ciwgdXRjTWludXRlLCB1dGNTZWNvbmQsIHV0Y01pbGxpc2Vjb25kfSBmcm9tIFwiZDMtdGltZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGNhbGVuZGFyKHV0Y1llYXIsIHV0Y01vbnRoLCB1dGNXZWVrLCB1dGNEYXksIHV0Y0hvdXIsIHV0Y01pbnV0ZSwgdXRjU2Vjb25kLCB1dGNNaWxsaXNlY29uZCwgdXRjRm9ybWF0KS5kb21haW4oW0RhdGUuVVRDKDIwMDAsIDAsIDEpLCBEYXRlLlVUQygyMDAwLCAwLCAyKV0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNjYWxlL3NyYy91dGNUaW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9jb25zdGFudC5qc1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjcmVhdG9yIGZyb20gXCIuL2NyZWF0b3JcIjtcbmltcG9ydCBzZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHNlbGVjdChjcmVhdG9yKG5hbWUpLmNhbGwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmV4dElkID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWwoKSB7XG4gIHJldHVybiBuZXcgTG9jYWw7XG59XG5cbmZ1bmN0aW9uIExvY2FsKCkge1xuICB0aGlzLl8gPSBcIkBcIiArICgrK25leHRJZCkudG9TdHJpbmcoMzYpO1xufVxuXG5Mb2NhbC5wcm90b3R5cGUgPSBsb2NhbC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBMb2NhbCxcbiAgZ2V0OiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIGlkID0gdGhpcy5fO1xuICAgIHdoaWxlICghKGlkIGluIG5vZGUpKSBpZiAoIShub2RlID0gbm9kZS5wYXJlbnROb2RlKSkgcmV0dXJuO1xuICAgIHJldHVybiBub2RlW2lkXTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihub2RlLCB2YWx1ZSkge1xuICAgIHJldHVybiBub2RlW3RoaXMuX10gPSB2YWx1ZTtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuXyBpbiBub2RlICYmIGRlbGV0ZSBub2RlW3RoaXMuX107XG4gIH0sXG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvbG9jYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnRcIjtcbmltcG9ydCBwb2ludCBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlKSB7XG4gIHZhciBldmVudCA9IHNvdXJjZUV2ZW50KCk7XG4gIGlmIChldmVudC5jaGFuZ2VkVG91Y2hlcykgZXZlbnQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgcmV0dXJuIHBvaW50KG5vZGUsIGV2ZW50KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL21vdXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXSwgW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudF0pXG4gICAgICA6IG5ldyBTZWxlY3Rpb24oW3NlbGVjdG9yID09IG51bGwgPyBbXSA6IHNlbGVjdG9yXSwgcm9vdCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RBbGwuanNcbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qc1xuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4uL25hbWVzcGFjZVwiO1xuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyUmVtb3ZlTlMoZnVsbG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJDb25zdGFudE5TKGZ1bGxuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckZ1bmN0aW9uTlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICAgIGVsc2UgdGhpcy5zZXRBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwsIHYpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLm5vZGUoKTtcbiAgICByZXR1cm4gZnVsbG5hbWUubG9jYWxcbiAgICAgICAgPyBub2RlLmdldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbClcbiAgICAgICAgOiBub2RlLmdldEF0dHJpYnV0ZShmdWxsbmFtZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJSZW1vdmVOUyA6IGF0dHJSZW1vdmUpIDogKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICA/IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJGdW5jdGlvbk5TIDogYXR0ckZ1bmN0aW9uKVxuICAgICAgOiAoZnVsbG5hbWUubG9jYWwgPyBhdHRyQ29uc3RhbnROUyA6IGF0dHJDb25zdGFudCkpKShmdWxsbmFtZSwgdmFsdWUpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9hdHRyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1swXTtcbiAgYXJndW1lbnRzWzBdID0gdGhpcztcbiAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGNsYXNzQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudHJpbSgpLnNwbGl0KC9efFxccysvKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NMaXN0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0IHx8IG5ldyBDbGFzc0xpc3Qobm9kZSk7XG59XG5cbmZ1bmN0aW9uIENsYXNzTGlzdChub2RlKSB7XG4gIHRoaXMuX25vZGUgPSBub2RlO1xuICB0aGlzLl9uYW1lcyA9IGNsYXNzQXJyYXkobm9kZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKTtcbn1cblxuQ2xhc3NMaXN0LnByb3RvdHlwZSA9IHtcbiAgYWRkOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGkgPSB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgIGlmIChpIDwgMCkge1xuICAgICAgdGhpcy5fbmFtZXMucHVzaChuYW1lKTtcbiAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5fbmFtZXMuam9pbihcIiBcIikpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIGkgPSB0aGlzLl9uYW1lcy5pbmRleE9mKG5hbWUpO1xuICAgIGlmIChpID49IDApIHtcbiAgICAgIHRoaXMuX25hbWVzLnNwbGljZShpLCAxKTtcbiAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5fbmFtZXMuam9pbihcIiBcIikpO1xuICAgIH1cbiAgfSxcbiAgY29udGFpbnM6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKSA+PSAwO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjbGFzc2VkQWRkKG5vZGUsIG5hbWVzKSB7XG4gIHZhciBsaXN0ID0gY2xhc3NMaXN0KG5vZGUpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBsaXN0LmFkZChuYW1lc1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRSZW1vdmUobm9kZSwgbmFtZXMpIHtcbiAgdmFyIGxpc3QgPSBjbGFzc0xpc3Qobm9kZSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IG4pIGxpc3QucmVtb3ZlKG5hbWVzW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZFRydWUobmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzZWRBZGQodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkRmFsc2UobmFtZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzZWRSZW1vdmUodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkRnVuY3Rpb24obmFtZXMsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAodmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKSA/IGNsYXNzZWRBZGQgOiBjbGFzc2VkUmVtb3ZlKSh0aGlzLCBuYW1lcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBuYW1lcyA9IGNsYXNzQXJyYXkobmFtZSArIFwiXCIpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgIHZhciBsaXN0ID0gY2xhc3NMaXN0KHRoaXMubm9kZSgpKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoIWxpc3QuY29udGFpbnMobmFtZXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lYWNoKCh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBjbGFzc2VkRnVuY3Rpb24gOiB2YWx1ZVxuICAgICAgPyBjbGFzc2VkVHJ1ZVxuICAgICAgOiBjbGFzc2VkRmFsc2UpKG5hbWVzLCB2YWx1ZSkpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2NsYXNzZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVTaGFsbG93KCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNsb25lTm9kZShmYWxzZSksIHRoaXMubmV4dFNpYmxpbmcpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3Rpb25fY2xvbmVEZWVwKCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNsb25lTm9kZSh0cnVlKSwgdGhpcy5uZXh0U2libGluZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRlZXApIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGRlZXAgPyBzZWxlY3Rpb25fY2xvbmVEZWVwIDogc2VsZWN0aW9uX2Nsb25lU2hhbGxvdyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2xvbmUuanNcbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7RW50ZXJOb2RlfSBmcm9tIFwiLi9lbnRlclwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuLi9jb25zdGFudFwiO1xuXG52YXIga2V5UHJlZml4ID0gXCIkXCI7IC8vIFByb3RlY3QgYWdhaW5zdCBrZXlzIGxpa2Ug4oCcX19wcm90b19f4oCdLlxuXG5mdW5jdGlvbiBiaW5kSW5kZXgocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSkge1xuICB2YXIgaSA9IDAsXG4gICAgICBub2RlLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGZpdCBpbnRvIHVwZGF0ZS5cbiAgLy8gUHV0IGFueSBudWxsIG5vZGVzIGludG8gZW50ZXIuXG4gIC8vIFB1dCBhbnkgcmVtYWluaW5nIGRhdGEgaW50byBlbnRlci5cbiAgZm9yICg7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBkb27igJl0IGZpdCBpbnRvIGV4aXQuXG4gIGZvciAoOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kS2V5KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEsIGtleSkge1xuICB2YXIgaSxcbiAgICAgIG5vZGUsXG4gICAgICBub2RlQnlLZXlWYWx1ZSA9IHt9LFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICBrZXlWYWx1ZXMgPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpLFxuICAgICAga2V5VmFsdWU7XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIG5vZGUuXG4gIC8vIElmIG11bHRpcGxlIG5vZGVzIGhhdmUgdGhlIHNhbWUga2V5LCB0aGUgZHVwbGljYXRlcyBhcmUgYWRkZWQgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBrZXlWYWx1ZXNbaV0gPSBrZXlWYWx1ZSA9IGtleVByZWZpeCArIGtleS5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKTtcbiAgICAgIGlmIChrZXlWYWx1ZSBpbiBub2RlQnlLZXlWYWx1ZSkge1xuICAgICAgICBleGl0W2ldID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUga2V5IGZvciBlYWNoIGRhdHVtLlxuICAvLyBJZiB0aGVyZSBhIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LCBqb2luIGFuZCBhZGQgaXQgdG8gdXBkYXRlLlxuICAvLyBJZiB0aGVyZSBpcyBub3QgKG9yIHRoZSBrZXkgaXMgYSBkdXBsaWNhdGUpLCBhZGQgaXQgdG8gZW50ZXIuXG4gIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBrZXlWYWx1ZSA9IGtleVByZWZpeCArIGtleS5jYWxsKHBhcmVudCwgZGF0YVtpXSwgaSwgZGF0YSk7XG4gICAgaWYgKG5vZGUgPSBub2RlQnlLZXlWYWx1ZVtrZXlWYWx1ZV0pIHtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIG5vZGVCeUtleVZhbHVlW2tleVZhbHVlXSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhbnkgcmVtYWluaW5nIG5vZGVzIHRoYXQgd2VyZSBub3QgYm91bmQgdG8gZGF0YSB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAobm9kZUJ5S2V5VmFsdWVba2V5VmFsdWVzW2ldXSA9PT0gbm9kZSkpIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICBkYXRhID0gbmV3IEFycmF5KHRoaXMuc2l6ZSgpKSwgaiA9IC0xO1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbihkKSB7IGRhdGFbKytqXSA9IGQ7IH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGJpbmQgPSBrZXkgPyBiaW5kS2V5IDogYmluZEluZGV4LFxuICAgICAgcGFyZW50cyA9IHRoaXMuX3BhcmVudHMsXG4gICAgICBncm91cHMgPSB0aGlzLl9ncm91cHM7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB2YWx1ZSA9IGNvbnN0YW50KHZhbHVlKTtcblxuICBmb3IgKHZhciBtID0gZ3JvdXBzLmxlbmd0aCwgdXBkYXRlID0gbmV3IEFycmF5KG0pLCBlbnRlciA9IG5ldyBBcnJheShtKSwgZXhpdCA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50c1tqXSxcbiAgICAgICAgZ3JvdXAgPSBncm91cHNbal0sXG4gICAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgICBkYXRhID0gdmFsdWUuY2FsbChwYXJlbnQsIHBhcmVudCAmJiBwYXJlbnQuX19kYXRhX18sIGosIHBhcmVudHMpLFxuICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGgsXG4gICAgICAgIGVudGVyR3JvdXAgPSBlbnRlcltqXSA9IG5ldyBBcnJheShkYXRhTGVuZ3RoKSxcbiAgICAgICAgdXBkYXRlR3JvdXAgPSB1cGRhdGVbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIGV4aXRHcm91cCA9IGV4aXRbal0gPSBuZXcgQXJyYXkoZ3JvdXBMZW5ndGgpO1xuXG4gICAgYmluZChwYXJlbnQsIGdyb3VwLCBlbnRlckdyb3VwLCB1cGRhdGVHcm91cCwgZXhpdEdyb3VwLCBkYXRhLCBrZXkpO1xuXG4gICAgLy8gTm93IGNvbm5lY3QgdGhlIGVudGVyIG5vZGVzIHRvIHRoZWlyIGZvbGxvd2luZyB1cGRhdGUgbm9kZSwgc3VjaCB0aGF0XG4gICAgLy8gYXBwZW5kQ2hpbGQgY2FuIGluc2VydCB0aGUgbWF0ZXJpYWxpemVkIGVudGVyIG5vZGUgYmVmb3JlIHRoaXMgbm9kZSxcbiAgICAvLyByYXRoZXIgdGhhbiBhdCB0aGUgZW5kIG9mIHRoZSBwYXJlbnQgbm9kZS5cbiAgICBmb3IgKHZhciBpMCA9IDAsIGkxID0gMCwgcHJldmlvdXMsIG5leHQ7IGkwIDwgZGF0YUxlbmd0aDsgKytpMCkge1xuICAgICAgaWYgKHByZXZpb3VzID0gZW50ZXJHcm91cFtpMF0pIHtcbiAgICAgICAgaWYgKGkwID49IGkxKSBpMSA9IGkwICsgMTtcbiAgICAgICAgd2hpbGUgKCEobmV4dCA9IHVwZGF0ZUdyb3VwW2kxXSkgJiYgKytpMSA8IGRhdGFMZW5ndGgpO1xuICAgICAgICBwcmV2aW91cy5fbmV4dCA9IG5leHQgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGUgPSBuZXcgU2VsZWN0aW9uKHVwZGF0ZSwgcGFyZW50cyk7XG4gIHVwZGF0ZS5fZW50ZXIgPSBlbnRlcjtcbiAgdXBkYXRlLl9leGl0ID0gZXhpdDtcbiAgcmV0dXJuIHVwZGF0ZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5wcm9wZXJ0eShcIl9fZGF0YV9fXCIsIHZhbHVlKVxuICAgICAgOiB0aGlzLm5vZGUoKS5fX2RhdGFfXztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kYXR1bS5qc1xuLy8gbW9kdWxlIGlkID0gMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBkZWZhdWx0VmlldyBmcm9tIFwiLi4vd2luZG93XCI7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQobm9kZSwgdHlwZSwgcGFyYW1zKSB7XG4gIHZhciB3aW5kb3cgPSBkZWZhdWx0Vmlldyhub2RlKSxcbiAgICAgIGV2ZW50ID0gd2luZG93LkN1c3RvbUV2ZW50O1xuXG4gIGlmICh0eXBlb2YgZXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGV2ZW50ID0gbmV3IGV2ZW50KHR5cGUsIHBhcmFtcyk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBpZiAocGFyYW1zKSBldmVudC5pbml0RXZlbnQodHlwZSwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlKSwgZXZlbnQuZGV0YWlsID0gcGFyYW1zLmRldGFpbDtcbiAgICBlbHNlIGV2ZW50LmluaXRFdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hDb25zdGFudCh0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2hFdmVudCh0aGlzLCB0eXBlLCBwYXJhbXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gdGhpcy5lYWNoKCh0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gZGlzcGF0Y2hGdW5jdGlvblxuICAgICAgOiBkaXNwYXRjaENvbnN0YW50KSh0eXBlLCBwYXJhbXMpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9kaXNwYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gMCwgbSA9IGdyb3Vwcy5sZW5ndGg7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IDAsIG4gPSBncm91cC5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIGNhbGxiYWNrLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2VhY2guanNcbi8vIG1vZHVsZSBpZCA9IDE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICF0aGlzLm5vZGUoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbXB0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2V4aXQgfHwgdGhpcy5fZ3JvdXBzLm1hcChzcGFyc2UpLCB0aGlzLl9wYXJlbnRzKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9leGl0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgbWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICBpZiAodHlwZW9mIG1hdGNoICE9PSBcImZ1bmN0aW9uXCIpIG1hdGNoID0gbWF0Y2hlcihtYXRjaCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IFtdLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIG1hdGNoLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSB7XG4gICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBodG1sUmVtb3ZlKCkge1xuICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGh0bWxDb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaHRtbEZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pbm5lckhUTUwgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IGh0bWxSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IGh0bWxGdW5jdGlvblxuICAgICAgICAgIDogaHRtbENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLmlubmVySFRNTDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4uL2NyZWF0b3JcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3JcIjtcblxuZnVuY3Rpb24gY29uc3RhbnROdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgYmVmb3JlKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSksXG4gICAgICBzZWxlY3QgPSBiZWZvcmUgPT0gbnVsbCA/IGNvbnN0YW50TnVsbCA6IHR5cGVvZiBiZWZvcmUgPT09IFwiZnVuY3Rpb25cIiA/IGJlZm9yZSA6IHNlbGVjdG9yKGJlZm9yZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUoY3JlYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHNlbGVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IG51bGwpO1xuICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbnNlcnQuanNcbi8vIG1vZHVsZSBpZCA9IDE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBsb3dlcigpIHtcbiAgaWYgKHRoaXMucHJldmlvdXNTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMsIHRoaXMucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gobG93ZXIpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2xvd2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdGlvbikge1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSBzZWxlY3Rpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24obWVyZ2VzLCB0aGlzLl9wYXJlbnRzKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9tZXJnZS5qc1xuLy8gbW9kdWxlIGlkID0gMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgbm9kZSA9IGdyb3VwW2ldO1xuICAgICAgaWYgKG5vZGUpIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG5vZGVzID0gbmV3IEFycmF5KHRoaXMuc2l6ZSgpKSwgaSA9IC0xO1xuICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7IG5vZGVzWysraV0gPSB0aGlzOyB9KTtcbiAgcmV0dXJuIG5vZGVzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBqID0gLTEsIG0gPSBncm91cHMubGVuZ3RoOyArK2ogPCBtOykge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gZ3JvdXAubGVuZ3RoIC0gMSwgbmV4dCA9IGdyb3VwW2ldLCBub2RlOyAtLWkgPj0gMDspIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgaWYgKG5leHQgJiYgbmV4dCAhPT0gbm9kZS5uZXh0U2libGluZykgbmV4dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBuZXh0KTtcbiAgICAgICAgbmV4dCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb3JkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBwcm9wZXJ0eVJlbW92ZShuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpc1tuYW1lXTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlDb25zdGFudChuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgZGVsZXRlIHRoaXNbbmFtZV07XG4gICAgZWxzZSB0aGlzW25hbWVdID0gdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gcHJvcGVydHlSZW1vdmUgOiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gcHJvcGVydHlGdW5jdGlvblxuICAgICAgICAgIDogcHJvcGVydHlDb25zdGFudCkobmFtZSwgdmFsdWUpKVxuICAgICAgOiB0aGlzLm5vZGUoKVtuYW1lXTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHJhaXNlKCkge1xuICBpZiAodGhpcy5uZXh0U2libGluZykgdGhpcy5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyYWlzZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmFpc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiByZW1vdmUoKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gIGlmIChwYXJlbnQpIHBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gocmVtb3ZlKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yZW1vdmUuanNcbi8vIG1vZHVsZSBpZCA9IDE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBzZWxlY3RvciBmcm9tIFwiLi4vc2VsZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ICE9PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IHNlbGVjdG9yKHNlbGVjdCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgc3Vibm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmICgobm9kZSA9IGdyb3VwW2ldKSAmJiAoc3Vibm9kZSA9IHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSkpIHtcbiAgICAgICAgaWYgKFwiX19kYXRhX19cIiBpbiBub2RlKSBzdWJub2RlLl9fZGF0YV9fID0gbm9kZS5fX2RhdGFfXztcbiAgICAgICAgc3ViZ3JvdXBbaV0gPSBzdWJub2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHN1Ymdyb3VwcywgdGhpcy5fcGFyZW50cyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2VsZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgc2VsZWN0b3JBbGwgZnJvbSBcIi4uL3NlbGVjdG9yQWxsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvckFsbChzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IFtdLCBwYXJlbnRzID0gW10sIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIG4gPSBncm91cC5sZW5ndGgsIG5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIHN1Ymdyb3Vwcy5wdXNoKHNlbGVjdC5jYWxsKG5vZGUsIG5vZGUuX19kYXRhX18sIGksIGdyb3VwKSk7XG4gICAgICAgIHBhcmVudHMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHBhcmVudHMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdEFsbC5qc1xuLy8gbW9kdWxlIGlkID0gMTc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgc2l6ZSA9IDA7XG4gIHRoaXMuZWFjaChmdW5jdGlvbigpIHsgKytzaXplOyB9KTtcbiAgcmV0dXJuIHNpemU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb21wYXJlKSB7XG4gIGlmICghY29tcGFyZSkgY29tcGFyZSA9IGFzY2VuZGluZztcblxuICBmdW5jdGlvbiBjb21wYXJlTm9kZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgJiYgYiA/IGNvbXBhcmUoYS5fX2RhdGFfXywgYi5fX2RhdGFfXykgOiAhYSAtICFiO1xuICB9XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc29ydGdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc29ydGdyb3VwID0gc29ydGdyb3Vwc1tqXSA9IG5ldyBBcnJheShuKSwgbm9kZSwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgICAgc29ydGdyb3VwW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc29ydGdyb3VwLnNvcnQoY29tcGFyZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc29ydGdyb3VwcywgdGhpcy5fcGFyZW50cykub3JkZXIoKTtcbn1cblxuZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiB0ZXh0UmVtb3ZlKCkge1xuICB0aGlzLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHRleHRSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHRleHRGdW5jdGlvblxuICAgICAgICAgIDogdGV4dENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLnRleHRDb250ZW50O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3RleHQuanNcbi8vIG1vZHVsZSBpZCA9IDE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgc291cmNlRXZlbnQgZnJvbSBcIi4vc291cmNlRXZlbnRcIjtcbmltcG9ydCBwb2ludCBmcm9tIFwiLi9wb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2RlLCB0b3VjaGVzLCBpZGVudGlmaWVyKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykgaWRlbnRpZmllciA9IHRvdWNoZXMsIHRvdWNoZXMgPSBzb3VyY2VFdmVudCgpLmNoYW5nZWRUb3VjaGVzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBuID0gdG91Y2hlcyA/IHRvdWNoZXMubGVuZ3RoIDogMCwgdG91Y2g7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoKHRvdWNoID0gdG91Y2hlc1tpXSkuaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmV0dXJuIHBvaW50KG5vZGUsIHRvdWNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy1zZWxlY3Rpb24vc3JjL3RvdWNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHNvdXJjZUV2ZW50IGZyb20gXCIuL3NvdXJjZUV2ZW50XCI7XG5pbXBvcnQgcG9pbnQgZnJvbSBcIi4vcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSwgdG91Y2hlcykge1xuICBpZiAodG91Y2hlcyA9PSBudWxsKSB0b3VjaGVzID0gc291cmNlRXZlbnQoKS50b3VjaGVzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBuID0gdG91Y2hlcyA/IHRvdWNoZXMubGVuZ3RoIDogMCwgcG9pbnRzID0gbmV3IEFycmF5KG4pOyBpIDwgbjsgKytpKSB7XG4gICAgcG9pbnRzW2ldID0gcG9pbnQobm9kZSwgdG91Y2hlc1tpXSk7XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXNlbGVjdGlvbi9zcmMvdG91Y2hlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7aXNvU3BlY2lmaWVyfSBmcm9tIFwiLi9pc29Gb3JtYXRcIjtcbmltcG9ydCB7dXRjUGFyc2V9IGZyb20gXCIuL2RlZmF1bHRMb2NhbGVcIjtcblxuZnVuY3Rpb24gcGFyc2VJc29OYXRpdmUoc3RyaW5nKSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoc3RyaW5nKTtcbiAgcmV0dXJuIGlzTmFOKGRhdGUpID8gbnVsbCA6IGRhdGU7XG59XG5cbnZhciBwYXJzZUlzbyA9ICtuZXcgRGF0ZShcIjIwMDAtMDEtMDFUMDA6MDA6MDAuMDAwWlwiKVxuICAgID8gcGFyc2VJc29OYXRpdmVcbiAgICA6IHV0Y1BhcnNlKGlzb1NwZWNpZmllcik7XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlSXNvO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUtZm9ybWF0L3NyYy9pc29QYXJzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvbkRheSwgZHVyYXRpb25NaW51dGV9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciBkYXkgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIHN0ZXApO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0IC0gKGVuZC5nZXRUaW1lem9uZU9mZnNldCgpIC0gc3RhcnQuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiBkdXJhdGlvbk1pbnV0ZSkgLyBkdXJhdGlvbkRheTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpIC0gMTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkYXk7XG5leHBvcnQgdmFyIGRheXMgPSBkYXkucmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvZGF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsXCI7XG5pbXBvcnQge2R1cmF0aW9uSG91ciwgZHVyYXRpb25NaW51dGV9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciBob3VyID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICB2YXIgb2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogZHVyYXRpb25NaW51dGUgJSBkdXJhdGlvbkhvdXI7XG4gIGlmIChvZmZzZXQgPCAwKSBvZmZzZXQgKz0gZHVyYXRpb25Ib3VyO1xuICBkYXRlLnNldFRpbWUoTWF0aC5mbG9vcigoK2RhdGUgLSBvZmZzZXQpIC8gZHVyYXRpb25Ib3VyKSAqIGR1cmF0aW9uSG91ciArIG9mZnNldCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBkdXJhdGlvbkhvdXIpO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uSG91cjtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBob3VyO1xuZXhwb3J0IHZhciBob3VycyA9IGhvdXIucmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvaG91ci5qc1xuLy8gbW9kdWxlIGlkID0gMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuXG52YXIgbWlsbGlzZWNvbmQgPSBpbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgLy8gbm9vcFxufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGVuZCAtIHN0YXJ0O1xufSk7XG5cbi8vIEFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhpcyBzaW1wbGUgY2FzZS5cbm1pbGxpc2Vjb25kLmV2ZXJ5ID0gZnVuY3Rpb24oaykge1xuICBrID0gTWF0aC5mbG9vcihrKTtcbiAgaWYgKCFpc0Zpbml0ZShrKSB8fCAhKGsgPiAwKSkgcmV0dXJuIG51bGw7XG4gIGlmICghKGsgPiAxKSkgcmV0dXJuIG1pbGxpc2Vjb25kO1xuICByZXR1cm4gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VGltZShNYXRoLmZsb29yKGRhdGUgLyBrKSAqIGspO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGspO1xuICB9LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBrO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1pbGxpc2Vjb25kO1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZC5yYW5nZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy9taWxsaXNlY29uZC5qc1xuLy8gbW9kdWxlIGlkID0gMTg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvbk1pbnV0ZX0gZnJvbSBcIi4vZHVyYXRpb25cIjtcblxudmFyIG1pbnV0ZSA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRUaW1lKE1hdGguZmxvb3IoZGF0ZSAvIGR1cmF0aW9uTWludXRlKSAqIGR1cmF0aW9uTWludXRlKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGR1cmF0aW9uTWludXRlKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbk1pbnV0ZTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0TWludXRlcygpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1pbnV0ZTtcbmV4cG9ydCB2YXIgbWludXRlcyA9IG1pbnV0ZS5yYW5nZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy9taW51dGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcblxudmFyIG1vbnRoID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldERhdGUoMSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgc3RlcCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiBlbmQuZ2V0TW9udGgoKSAtIHN0YXJ0LmdldE1vbnRoKCkgKyAoZW5kLmdldEZ1bGxZZWFyKCkgLSBzdGFydC5nZXRGdWxsWWVhcigpKSAqIDEyO1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRNb250aCgpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbnRoO1xuZXhwb3J0IHZhciBtb250aHMgPSBtb250aC5yYW5nZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy9tb250aC5qc1xuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvblNlY29uZH0gZnJvbSBcIi4vZHVyYXRpb25cIjtcblxudmFyIHNlY29uZCA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRUaW1lKE1hdGguZmxvb3IoZGF0ZSAvIGR1cmF0aW9uU2Vjb25kKSAqIGR1cmF0aW9uU2Vjb25kKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGR1cmF0aW9uU2Vjb25kKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvblNlY29uZDtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDU2Vjb25kcygpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlY29uZDtcbmV4cG9ydCB2YXIgc2Vjb25kcyA9IHNlY29uZC5yYW5nZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy9zZWNvbmQuanNcbi8vIG1vZHVsZSBpZCA9IDE5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25EYXl9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciB1dGNEYXkgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIHN0ZXApO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uRGF5O1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRVVENEYXRlKCkgLSAxO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHV0Y0RheTtcbmV4cG9ydCB2YXIgdXRjRGF5cyA9IHV0Y0RheS5yYW5nZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy91dGNEYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25Ib3VyfSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG52YXIgdXRjSG91ciA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRVVENNaW51dGVzKDAsIDAsIDApO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogZHVyYXRpb25Ib3VyKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbkhvdXI7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ0hvdXJzKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXRjSG91cjtcbmV4cG9ydCB2YXIgdXRjSG91cnMgPSB1dGNIb3VyLnJhbmdlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUvc3JjL3V0Y0hvdXIuanNcbi8vIG1vZHVsZSBpZCA9IDE5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25NaW51dGV9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbnZhciB1dGNNaW51dGUgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VVRDU2Vjb25kcygwLCAwKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGR1cmF0aW9uTWludXRlKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbk1pbnV0ZTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDTWludXRlcygpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHV0Y01pbnV0ZTtcbmV4cG9ydCB2YXIgdXRjTWludXRlcyA9IHV0Y01pbnV0ZS5yYW5nZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy91dGNNaW51dGUuanNcbi8vIG1vZHVsZSBpZCA9IDE5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcblxudmFyIHV0Y01vbnRoID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFVUQ0RhdGUoMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VVRDTW9udGgoZGF0ZS5nZXRVVENNb250aCgpICsgc3RlcCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiBlbmQuZ2V0VVRDTW9udGgoKSAtIHN0YXJ0LmdldFVUQ01vbnRoKCkgKyAoZW5kLmdldFVUQ0Z1bGxZZWFyKCkgLSBzdGFydC5nZXRVVENGdWxsWWVhcigpKSAqIDEyO1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRVVENNb250aCgpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHV0Y01vbnRoO1xuZXhwb3J0IHZhciB1dGNNb250aHMgPSB1dGNNb250aC5yYW5nZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kMy10aW1lL3NyYy91dGNNb250aC5qc1xuLy8gbW9kdWxlIGlkID0gMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuaW1wb3J0IHtkdXJhdGlvbldlZWt9IGZyb20gXCIuL2R1cmF0aW9uXCI7XG5cbmZ1bmN0aW9uIHV0Y1dlZWtkYXkoaSkge1xuICByZXR1cm4gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIChkYXRlLmdldFVUQ0RheSgpICsgNyAtIGkpICUgNyk7XG4gICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIHN0ZXAgKiA3KTtcbiAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25XZWVrO1xuICB9KTtcbn1cblxuZXhwb3J0IHZhciB1dGNTdW5kYXkgPSB1dGNXZWVrZGF5KDApO1xuZXhwb3J0IHZhciB1dGNNb25kYXkgPSB1dGNXZWVrZGF5KDEpO1xuZXhwb3J0IHZhciB1dGNUdWVzZGF5ID0gdXRjV2Vla2RheSgyKTtcbmV4cG9ydCB2YXIgdXRjV2VkbmVzZGF5ID0gdXRjV2Vla2RheSgzKTtcbmV4cG9ydCB2YXIgdXRjVGh1cnNkYXkgPSB1dGNXZWVrZGF5KDQpO1xuZXhwb3J0IHZhciB1dGNGcmlkYXkgPSB1dGNXZWVrZGF5KDUpO1xuZXhwb3J0IHZhciB1dGNTYXR1cmRheSA9IHV0Y1dlZWtkYXkoNik7XG5cbmV4cG9ydCB2YXIgdXRjU3VuZGF5cyA9IHV0Y1N1bmRheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjTW9uZGF5cyA9IHV0Y01vbmRheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjVHVlc2RheXMgPSB1dGNUdWVzZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB1dGNXZWRuZXNkYXlzID0gdXRjV2VkbmVzZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB1dGNUaHVyc2RheXMgPSB1dGNUaHVyc2RheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjRnJpZGF5cyA9IHV0Y0ZyaWRheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjU2F0dXJkYXlzID0gdXRjU2F0dXJkYXkucmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvdXRjV2Vlay5qc1xuLy8gbW9kdWxlIGlkID0gMTk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuXG52YXIgdXRjWWVhciA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGVuZC5nZXRVVENGdWxsWWVhcigpIC0gc3RhcnQuZ2V0VVRDRnVsbFllYXIoKTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbn0pO1xuXG4vLyBBbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gZm9yIHRoaXMgc2ltcGxlIGNhc2UuXG51dGNZZWFyLmV2ZXJ5ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gIWlzRmluaXRlKGsgPSBNYXRoLmZsb29yKGspKSB8fCAhKGsgPiAwKSA/IG51bGwgOiBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcihNYXRoLmZsb29yKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSAvIGspICogayk7XG4gICAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBzdGVwICogayk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRjWWVhcjtcbmV4cG9ydCB2YXIgdXRjWWVhcnMgPSB1dGNZZWFyLnJhbmdlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUvc3JjL3V0Y1llYXIuanNcbi8vIG1vZHVsZSBpZCA9IDE5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWxcIjtcbmltcG9ydCB7ZHVyYXRpb25NaW51dGUsIGR1cmF0aW9uV2Vla30gZnJvbSBcIi4vZHVyYXRpb25cIjtcblxuZnVuY3Rpb24gd2Vla2RheShpKSB7XG4gIHJldHVybiBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gKGRhdGUuZ2V0RGF5KCkgKyA3IC0gaSkgJSA3KTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgc3RlcCAqIDcpO1xuICB9LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIChlbmQgLSBzdGFydCAtIChlbmQuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIHN0YXJ0LmdldFRpbWV6b25lT2Zmc2V0KCkpICogZHVyYXRpb25NaW51dGUpIC8gZHVyYXRpb25XZWVrO1xuICB9KTtcbn1cblxuZXhwb3J0IHZhciBzdW5kYXkgPSB3ZWVrZGF5KDApO1xuZXhwb3J0IHZhciBtb25kYXkgPSB3ZWVrZGF5KDEpO1xuZXhwb3J0IHZhciB0dWVzZGF5ID0gd2Vla2RheSgyKTtcbmV4cG9ydCB2YXIgd2VkbmVzZGF5ID0gd2Vla2RheSgzKTtcbmV4cG9ydCB2YXIgdGh1cnNkYXkgPSB3ZWVrZGF5KDQpO1xuZXhwb3J0IHZhciBmcmlkYXkgPSB3ZWVrZGF5KDUpO1xuZXhwb3J0IHZhciBzYXR1cmRheSA9IHdlZWtkYXkoNik7XG5cbmV4cG9ydCB2YXIgc3VuZGF5cyA9IHN1bmRheS5yYW5nZTtcbmV4cG9ydCB2YXIgbW9uZGF5cyA9IG1vbmRheS5yYW5nZTtcbmV4cG9ydCB2YXIgdHVlc2RheXMgPSB0dWVzZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB3ZWRuZXNkYXlzID0gd2VkbmVzZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB0aHVyc2RheXMgPSB0aHVyc2RheS5yYW5nZTtcbmV4cG9ydCB2YXIgZnJpZGF5cyA9IGZyaWRheS5yYW5nZTtcbmV4cG9ydCB2YXIgc2F0dXJkYXlzID0gc2F0dXJkYXkucmFuZ2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZDMtdGltZS9zcmMvd2Vlay5qc1xuLy8gbW9kdWxlIGlkID0gMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbFwiO1xuXG52YXIgeWVhciA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGVuZC5nZXRGdWxsWWVhcigpIC0gc3RhcnQuZ2V0RnVsbFllYXIoKTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbn0pO1xuXG4vLyBBbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gZm9yIHRoaXMgc2ltcGxlIGNhc2UuXG55ZWFyLmV2ZXJ5ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gIWlzRmluaXRlKGsgPSBNYXRoLmZsb29yKGspKSB8fCAhKGsgPiAwKSA/IG51bGwgOiBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihNYXRoLmZsb29yKGRhdGUuZ2V0RnVsbFllYXIoKSAvIGspICogayk7XG4gICAgZGF0ZS5zZXRNb250aCgwLCAxKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyBzdGVwICogayk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeWVhcjtcbmV4cG9ydCB2YXIgeWVhcnMgPSB5ZWFyLnJhbmdlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2QzLXRpbWUvc3JjL3llYXIuanNcbi8vIG1vZHVsZSBpZCA9IDE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAqIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAqIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICogbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy4gVGhlIGZ1bmN0aW9uIGFsc28gaGFzIGEgcHJvcGVydHkgJ2NsZWFyJyBcbiAqIHRoYXQgaXMgYSBmdW5jdGlvbiB3aGljaCB3aWxsIGNsZWFyIHRoZSB0aW1lciB0byBwcmV2ZW50IHByZXZpb3VzbHkgc2NoZWR1bGVkIGV4ZWN1dGlvbnMuIFxuICpcbiAqIEBzb3VyY2UgdW5kZXJzY29yZS5qc1xuICogQHNlZSBodHRwOi8vdW5zY3JpcHRhYmxlLmNvbS8yMDA5LzAzLzIwL2RlYm91bmNpbmctamF2YXNjcmlwdC1tZXRob2RzL1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3Rpb24gdG8gd3JhcFxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVvdXQgaW4gbXMgKGAxMDBgKVxuICogQHBhcmFtIHtCb29sZWFufSB3aGV0aGVyIHRvIGV4ZWN1dGUgYXQgdGhlIGJlZ2lubmluZyAoYGZhbHNlYClcbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSl7XG4gIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcbiAgaWYgKG51bGwgPT0gd2FpdCkgd2FpdCA9IDEwMDtcblxuICBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICB2YXIgbGFzdCA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG5cbiAgICBpZiAobGFzdCA8IHdhaXQgJiYgbGFzdCA+PSAwKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGRlYm91bmNlZCA9IGZ1bmN0aW9uKCl7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGlmICghdGltZW91dCkgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgZGVib3VuY2VkLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgXG4gIGRlYm91bmNlZC5mbHVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgICAgXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGRlYm91bmNlZDtcbn07XG5cbi8vIEFkZHMgY29tcGF0aWJpbGl0eSBmb3IgRVMgbW9kdWxlc1xuZGVib3VuY2UuZGVib3VuY2UgPSBkZWJvdW5jZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kZWJvdW5jZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGVzL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gMjAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==