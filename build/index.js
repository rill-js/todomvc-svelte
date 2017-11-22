require("source-map-support").install({ hookRequire: true })
module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("rill");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rill_fresh__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rill_etag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__rill_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__rill_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__rill_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__rill_progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__rill_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__rill_expose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_body__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__rill_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rill_session__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rill_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__rill_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rill_redirect__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rill_redirect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__rill_redirect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rill_unhandled__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rill_unhandled___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__rill_unhandled__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__middleware_error_handler__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__middleware_preload__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__actions__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages__ = __webpack_require__(25);




















/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_1_rill___default.a().use(__WEBPACK_IMPORTED_MODULE_2__rill_helmet___default()()).use(__WEBPACK_IMPORTED_MODULE_3__rill_fresh___default()()).use(__WEBPACK_IMPORTED_MODULE_4__rill_etag___default()()).use(__WEBPACK_IMPORTED_MODULE_5__rill_compress___default()()).get('/polyfill.js', __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default()()).get(__WEBPACK_IMPORTED_MODULE_7__rill_static___default()('build/public', { gzip: true, cache: __WEBPACK_IMPORTED_MODULE_0_ms___default()('30 days') + '; immutable' })).use(__WEBPACK_IMPORTED_MODULE_8__rill_progress___default()({ spinner: false, color: 'rgba(175, 47, 47, .3)' })).use(__WEBPACK_IMPORTED_MODULE_11__rill_body___default()()).use(__WEBPACK_IMPORTED_MODULE_12__rill_session___default()()).use(__WEBPACK_IMPORTED_MODULE_9__rill_logger___default()()).use(__WEBPACK_IMPORTED_MODULE_10__rill_expose___default()()).use(__WEBPACK_IMPORTED_MODULE_14__rill_unhandled___default()(__WEBPACK_IMPORTED_MODULE_13__rill_redirect___default()('/404'))).use(__WEBPACK_IMPORTED_MODULE_15__middleware_error_handler__["a" /* default */]).use(__WEBPACK_IMPORTED_MODULE_16__middleware_preload__["a" /* default */]).at('/app/*', __WEBPACK_IMPORTED_MODULE_17__actions__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_18__pages__["a" /* default */]).listen({ port: process.env.PORT || 8080 }, function () {
  if (!undefined && "production" === 'production') {
    console.log('Server started on port \'' + this.address().port + '\'.');
    process.send && process.send('online');
  }
}));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("ms");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@rill/helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@rill/fresh");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@rill/etag");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@rill/compress");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@rill/polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@rill/static");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@rill/progress");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@rill/logger");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@rill/expose");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@rill/body");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@rill/session");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@rill/redirect");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@rill/unhandled");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_error__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_error__);




/**
 * Simple error handling middleware which redirects to the error page.
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref, next) {
    var res = _ref.res;
    var message;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return next();

          case 3:
            _context.next = 10;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context['catch'](0);
            message = _context.t0.message;


            if (!(_context.t0 instanceof __WEBPACK_IMPORTED_MODULE_2__rill_error___default.a)) {
              console.error(message);
              message = 'An unknown error has occurred.';
            }

            res.redirect('/500?message=' + message);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 5]]);
  }));

  function errorHandlerMiddleware(_x, _x2) {
    return _ref2.apply(this, arguments);
  }

  return errorHandlerMiddleware;
})());

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@rill/error");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


/**
 * Middleware which will tell the browser to preload files
 * we know are going to be needed to render.
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref, next) {
    var res = _ref.res;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function preloadMiddleware(_x, _x2) {
    return _ref2.apply(this, arguments);
  }

  return preloadMiddleware;
})());

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos__ = __webpack_require__(23);



// Create a nested rill router for the controller routes.
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_rill___default.a()
// Created a nested prefixed router for todo controls.
.at('/todo/*', new __WEBPACK_IMPORTED_MODULE_0_rill___default.a().post('/create', __WEBPACK_IMPORTED_MODULE_1__todos__["a" /* create */]).get('/open/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["b" /* openById */]).post('/update/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["g" /* updateById */]).get('/toggle/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["f" /* toggleById */]).get('/toggle-all', __WEBPACK_IMPORTED_MODULE_1__todos__["e" /* toggleAll */]).get('/remove/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["c" /* removeById */]).get('/remove-completed', __WEBPACK_IMPORTED_MODULE_1__todos__["d" /* removeCompleted */])));

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony export (immutable) */ __webpack_exports__["b"] = openById;
/* harmony export (immutable) */ __webpack_exports__["g"] = updateById;
/* harmony export (immutable) */ __webpack_exports__["f"] = toggleById;
/* harmony export (immutable) */ __webpack_exports__["e"] = toggleAll;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeById;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeCompleted;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cuid__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cuid__);


/**
 * Creates a new TODO.
 */
function create(_ref) {
  var req = _ref.req,
      res = _ref.res,
      session = _ref.session;

  var todos = session.get('todos') || [];
  if (!req.body.text) return;
  todos.push({ id: __WEBPACK_IMPORTED_MODULE_0_cuid___default()(), text: req.body.text });
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Opens a todo to be updated.
 */
function openById(_ref2) {
  var req = _ref2.req,
      res = _ref2.res,
      session = _ref2.session;

  var todos = session.get('todos') || [];
  var todo = todos.find(function (todo) {
    return todo.id === req.params.id;
  });
  if (!todo) return;
  todo.editing = true;
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Update an existing todo.
 */
function updateById(_ref3) {
  var req = _ref3.req,
      res = _ref3.res,
      session = _ref3.session;

  var todos = session.get('todos') || [];
  var todo = todos.find(function (todo) {
    return todo.id === req.params.id;
  });
  if (!todo || !req.body.text) return;
  todo.text = req.body.text;
  todo.editing = false;
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Toggles a todo's completion.
 */
function toggleById(_ref4) {
  var req = _ref4.req,
      res = _ref4.res,
      session = _ref4.session;

  var todos = session.get('todos') || [];
  var todo = todos.find(function (todo) {
    return todo.id === req.params.id;
  });
  if (!todo) return;
  todo.completed = !todo.completed;
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Toggles all todos completion.
 */
function toggleAll(_ref5) {
  var req = _ref5.req,
      res = _ref5.res,
      session = _ref5.session;

  var todos = session.get('todos') || [];
  todos.forEach(function (todo) {
    todo.completed = !todo.completed;
  });
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Removes an existing todo.
 */
function removeById(_ref6) {
  var req = _ref6.req,
      res = _ref6.res,
      session = _ref6.session;

  var todos = session.get('todos') || [];
  todos.splice(todos.findIndex(function (todo) {
    return todo.id === req.params.id;
  }), 1);
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Removes all completed todos.
 */
function removeCompleted(_ref7) {
  var req = _ref7.req,
      res = _ref7.res,
      session = _ref7.session;

  var todos = session.get('todos') || [];
  session.set('todos', todos.filter(function (todo) {
    return !todo.completed;
  }));
  res.redirect('back');
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_page__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_svelte__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_svelte___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rill_svelte__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_html__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__500_html__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__404_html__ = __webpack_require__(35);









/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_rill___default.a().get(__WEBPACK_IMPORTED_MODULE_2__rill_page___default.a.html({ lang: 'en' }).meta({ charset: 'utf-8' }).meta({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }).title('Rill/Svelte Todo-MVC').meta({ name: 'description', content: 'Todo MVC app using Rill and Svelte.' }).link({ rel: 'stylesheet', href: '/index.css' }).script({ src: '/polyfill.js', async: true }).script({ src: '/index.js', async: true })).get(__WEBPACK_IMPORTED_MODULE_3__rill_svelte___default()()).get('/500', function (_ref) {
  var req = _ref.req,
      res = _ref.res,
      locals = _ref.locals;

  locals.message = req.query.message;
  res.status = 500;
  res.body = __WEBPACK_IMPORTED_MODULE_5__500_html__["a" /* default */];
}).get('/404', function (_ref2) {
  var res = _ref2.res;

  res.status = 404;
  res.body = __WEBPACK_IMPORTED_MODULE_6__404_html__["a" /* default */];
}).get('/:filter(all|pending|completed)?', function (_ref3) {
  var req = _ref3.req,
      res = _ref3.res,
      session = _ref3.session,
      locals = _ref3.locals;

  locals.filter = req.params.filter || 'all';
  locals.todos = session.get('todos') || [];
  res.body = __WEBPACK_IMPORTED_MODULE_4__home_html__["a" /* default */];
}));

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@rill/page");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@rill/svelte");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_html__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_todo_list_html__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer_html__ = __webpack_require__(33);




var _500 = {};

_500.filename = "/Users/andrewsmith/Code/todomvc-svelte/app/pages/home.html";

_500.data = function () {
	return {};
};

_500.render = function (state, options) {
	state = state || {};

	return ('<div>\n  <section class="todoapp">\n    ' + __WEBPACK_IMPORTED_MODULE_0__components_header_html__["a" /* default */].render({}) + '\n    ' + (state.todos.length ? '' + __WEBPACK_IMPORTED_MODULE_1__components_todo_list_html__["a" /* default */].render({ filter: state.filter, todos: state.todos }) : '') + '\n  </section>\n  ' + __WEBPACK_IMPORTED_MODULE_2__components_footer_html__["a" /* default */].render({}) + '\n</div>\n\n').trim();
};

_500.renderCss = function () {
	var components = [];

	var seen = {};

	function addComponent(component) {
		var result = component.renderCss();
		result.components.forEach(function (x) {
			if (seen[x.filename]) return;
			seen[x.filename] = true;
			components.push(x);
		});
	}

	addComponent(__WEBPACK_IMPORTED_MODULE_0__components_header_html__["a" /* default */]);
	addComponent(__WEBPACK_IMPORTED_MODULE_1__components_todo_list_html__["a" /* default */]);
	addComponent(__WEBPACK_IMPORTED_MODULE_2__components_footer_html__["a" /* default */]);

	return {
		css: components.map(function (x) {
			return x.css;
		}).join('\n'),
		map: null,
		components: components
	};
};

var escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function __escape(html) {
	return String(html).replace(/["'&<>]/g, function (match) {
		return escaped[match];
	});
}
/* harmony default export */ __webpack_exports__["a"] = (_500);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _500 = {};

_500.filename = "/Users/andrewsmith/Code/todomvc-svelte/app/components/header.html";

_500.data = function () {
	return {};
};

_500.render = function (state, options) {
	state = state || {};

	return '<header class="header">\n  <h1>todos</h1>\n  <form class="create-form" action="/app/todo/create" method="POST" autocomplete="off">\n    <input class="new-todo" name="text" placeholder="What needs to be done?" autocomplete="off">\n    <button type="submit"></button>\n  </form>\n</header>'.trim();
};

_500.renderCss = function () {
	var components = [];

	return {
		css: components.map(function (x) {
			return x.css;
		}).join('\n'),
		map: null,
		components: components
	};
};

var escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function __escape(html) {
	return String(html).replace(/["'&<>]/g, function (match) {
		return escaped[match];
	});
}
/* harmony default export */ __webpack_exports__["a"] = (_500);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_item_html__ = __webpack_require__(32);



function completed(todos) {
  return todos.filter(function (todo) {
    return todo.completed;
  });
}

function pending(todos) {
  return todos.filter(function (todo) {
    return !todo.completed;
  });
}

function todoList(todos, pending, completed, filter) {
  return filter === 'all' ? todos : filter === 'pending' ? pending : filter === 'completed' ? completed : null;
}

var _500 = {};

_500.filename = "/Users/andrewsmith/Code/todomvc-svelte/app/components/todo-list.html";

_500.data = function () {
  return {};
};

_500.render = function (state, options) {
  state = state || {};

  state.completed = completed(state.todos);
  state.pending = pending(state.todos);
  state.todoList = todoList(state.todos, state.pending, state.completed, state.filter);

  return ('<div>\n  <section class="main">\n    <a href="/app/todo/toggle-all">\n      <input class="toggle-all" type="checkbox">\n      <label for="toggle-all">Mark all as complete</label>\n    </a>\n    <ul class="todo-list">\n      ' + state.todoList.map(function (todo) {
    return '' + __WEBPACK_IMPORTED_MODULE_1__todo_item_html__["a" /* default */].render({ todo: todo });
  }).join("") + '\n    </ul>\n  </section>\n  <footer class="footer">\n    <span class="todo-count"><strong>' + __escape(state.pending.length) + '</strong> item left</span>\n    <ul class="filters">\n      <li>\n        <a class="' + __WEBPACK_IMPORTED_MODULE_0_classnames___default()({ selected: state.filter === "all" }) + '" href="/">All</a>\n      </li>\n      <li>\n        <a class="' + __WEBPACK_IMPORTED_MODULE_0_classnames___default()({ selected: state.filter === "pending" }) + '" href="/pending">Active</a>\n      </li>\n      <li>\n        <a class="' + __WEBPACK_IMPORTED_MODULE_0_classnames___default()({ selected: state.filter === "completed" }) + '" href="/completed">Completed</a>\n      </li>\n    </ul>\n\n    <form action="/app/todo/remove-completed">\n      <button type="submit" class="clear-completed">Clear completed</button>\n    </form>\n  </footer>\n</div>\n\n').trim();
};

_500.renderCss = function () {
  var components = [];

  var seen = {};

  function addComponent(component) {
    var result = component.renderCss();
    result.components.forEach(function (x) {
      if (seen[x.filename]) return;
      seen[x.filename] = true;
      components.push(x);
    });
  }

  addComponent(__WEBPACK_IMPORTED_MODULE_1__todo_item_html__["a" /* default */]);

  return {
    css: components.map(function (x) {
      return x.css;
    }).join('\n'),
    map: null,
    components: components
  };
};

var escaped = {
  '"': '&quot;',
  "'": '&#39;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

function __escape(html) {
  return String(html).replace(/["'&<>]/g, function (match) {
    return escaped[match];
  });
}
/* harmony default export */ __webpack_exports__["a"] = (_500);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


var _500 = {};

_500.filename = "/Users/andrewsmith/Code/todomvc-svelte/app/components/todo-item.html";

_500.data = function () {
	return {};
};

_500.render = function (state, options) {
	state = state || {};

	return ('<li class="' + __WEBPACK_IMPORTED_MODULE_0_classnames___default()({ completed: state.todo.completed, editing: state.todo.editing }) + '">\n  <div class="view">\n    <a href="' + ('/app/todo/toggle/' + state.todo.id) + '">\n      <input class="toggle" type="checkbox" checked="' + state.todo.completed + '">\n      <label></label>\n    </a>\n    <a href="' + ('/app/todo/open/' + state.todo.id) + '"><label>' + __escape(state.todo.text) + '</label></a>\n    <form action="' + ('/app/todo/remove/' + state.todo.id) + '">\n      <button class="destroy" type="submit"></button>\n    </form>\n  </div>\n\n  ' + (state.todo.editing ? '<form class="update-form" action="' + ('/app/todo/update/' + state.todo.id) + '" method="POST">\n      <input class="edit" name="text" value="' + state.todo.text + '">\n      <button type="submit"></button>\n    </form>' : '') + '\n</li>\n\n').trim();
};

_500.renderCss = function () {
	var components = [];

	return {
		css: components.map(function (x) {
			return x.css;
		}).join('\n'),
		map: null,
		components: components
	};
};

var escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function __escape(html) {
	return String(html).replace(/["'&<>]/g, function (match) {
		return escaped[match];
	});
}
/* harmony default export */ __webpack_exports__["a"] = (_500);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _500 = {};

_500.filename = "/Users/andrewsmith/Code/todomvc-svelte/app/components/footer.html";

_500.data = function () {
	return {};
};

_500.render = function (state, options) {
	state = state || {};

	return '<footer id="info" class="info">\n  <h3>Go ahead, disable JavaScript.</h3>\n  <p>Single-click to edit a todo</p>\n  <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\n  <p>Created by <a href="http://todomvc.com">Dylan Piercey</a></p>\n  <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>\n</footer>'.trim();
};

_500.renderCss = function () {
	var components = [];

	return {
		css: components.map(function (x) {
			return x.css;
		}).join('\n'),
		map: null,
		components: components
	};
};

var escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function __escape(html) {
	return String(html).replace(/["'&<>]/g, function (match) {
		return escaped[match];
	});
}
/* harmony default export */ __webpack_exports__["a"] = (_500);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _500 = {};

_500.filename = "/Users/andrewsmith/Code/todomvc-svelte/app/pages/500.html";

_500.data = function () {
	return {};
};

_500.render = function (state, options) {
	state = state || {};

	return ('<div>\n  <footer class="info">\n    <h3>' + __escape(state.message) + '</h3>\n    <h2><a href="/">Click here to go back</a></h2>\n    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\n    <p>Created by <a href="http://todomvc.com">Dylan Piercey</a></p>\n    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>\n  </footer>\n</div>').trim();
};

_500.renderCss = function () {
	var components = [];

	return {
		css: components.map(function (x) {
			return x.css;
		}).join('\n'),
		map: null,
		components: components
	};
};

var escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function __escape(html) {
	return String(html).replace(/["'&<>]/g, function (match) {
		return escaped[match];
	});
}
/* harmony default export */ __webpack_exports__["a"] = (_500);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _500 = {};

_500.filename = "/Users/andrewsmith/Code/todomvc-svelte/app/pages/404.html";

_500.data = function () {
	return {};
};

_500.render = function (state, options) {
	state = state || {};

	return '<div>\n  <footer id="info" class="info">\n    <h3>The requested page could not be found.</h3>\n    <h2><a href="/">Click here to go back</a></h2>\n    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\n    <p>Created by <a href="http://todomvc.com">Dylan Piercey</a></p>\n    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>\n  </footer>\n</div>'.trim();
};

_500.renderCss = function () {
	var components = [];

	return {
		css: components.map(function (x) {
			return x.css;
		}).join('\n'),
		map: null,
		components: components
	};
};

var escaped = {
	'"': '&quot;',
	"'": '&#39;',
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};

function __escape(html) {
	return String(html).replace(/["'&<>]/g, function (match) {
		return escaped[match];
	});
}
/* harmony default export */ __webpack_exports__["a"] = (_500);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTU4YWU4YzRhYmU5MTEzNmQ5NjciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZnJlc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9ldGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvY29tcHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3N0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvYm9keVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Nlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9yZWRpcmVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiIiwid2VicGFjazovLy9hcHAvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2Vycm9yXCIiLCJ3ZWJwYWNrOi8vL2FwcC9taWRkbGV3YXJlL3ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy9hcHAvYWN0aW9ucy90b2Rvcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjdWlkXCIiLCJ3ZWJwYWNrOi8vL2FwcC9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvc3R5bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9zdmVsdGVcIiIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvaG9tZS5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3RvZG8tbGlzdC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3RvZG8taXRlbS5odG1sIiwid2VicGFjazovLy8uL2FwcC9wYWdlcy81MDAuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NThhZThjNGFiZTkxMTM2ZDk2NyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbXMgZnJvbSAnbXMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgaGVsbWV0IGZyb20gJ0ByaWxsL2hlbG1ldCdcbmltcG9ydCBmcmVzaCBmcm9tICdAcmlsbC9mcmVzaCdcbmltcG9ydCBldGFnIGZyb20gJ0ByaWxsL2V0YWcnXG5pbXBvcnQgY29tcHJlc3MgZnJvbSAnQHJpbGwvY29tcHJlc3MnXG5pbXBvcnQgcG9seWZpbGwgZnJvbSAnQHJpbGwvcG9seWZpbGwnXG5pbXBvcnQgc2VydmUgZnJvbSAnQHJpbGwvc3RhdGljJ1xuaW1wb3J0IHByb2dyZXNzIGZyb20gJ0ByaWxsL3Byb2dyZXNzJ1xuaW1wb3J0IGxvZ2dlciBmcm9tICdAcmlsbC9sb2dnZXInXG5pbXBvcnQgZXhwb3NlIGZyb20gJ0ByaWxsL2V4cG9zZSdcbmltcG9ydCBib2R5IGZyb20gJ0ByaWxsL2JvZHknXG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdAcmlsbC9zZXNzaW9uJ1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gJ0ByaWxsL3JlZGlyZWN0J1xuaW1wb3J0IHVuaGFuZGxlZCBmcm9tICdAcmlsbC91bmhhbmRsZWQnXG5pbXBvcnQgZXJyb3JIYW5kbGVyTWlkZGxld2FyZSBmcm9tICcuL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlcidcbmltcG9ydCBwcmVsb2FkTWlkZGxld2FyZSBmcm9tICcuL21pZGRsZXdhcmUvcHJlbG9hZCdcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCBwYWdlcyBmcm9tICcuL3BhZ2VzJ1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgUm91dGVyKClcbiAgLnVzZShoZWxtZXQoKSlcbiAgLnVzZShmcmVzaCgpKVxuICAudXNlKGV0YWcoKSlcbiAgLnVzZShjb21wcmVzcygpKVxuICAuZ2V0KCcvcG9seWZpbGwuanMnLCBwb2x5ZmlsbCgpKVxuICAuZ2V0KHNlcnZlKCdidWlsZC9wdWJsaWMnLCB7IGd6aXA6IHRydWUsIGNhY2hlOiBgJHttcygnMzAgZGF5cycpfTsgaW1tdXRhYmxlYCB9KSlcbiAgLnVzZShwcm9ncmVzcyh7IHNwaW5uZXI6IGZhbHNlLCBjb2xvcjogJ3JnYmEoMTc1LCA0NywgNDcsIC4zKScgfSkpXG4gIC51c2UoYm9keSgpKVxuICAudXNlKHNlc3Npb24oKSlcbiAgLnVzZShsb2dnZXIoKSlcbiAgLnVzZShleHBvc2UoKSlcbiAgLnVzZSh1bmhhbmRsZWQocmVkaXJlY3QoJy80MDQnKSkpXG4gIC51c2UoZXJyb3JIYW5kbGVyTWlkZGxld2FyZSlcbiAgLnVzZShwcmVsb2FkTWlkZGxld2FyZSlcbiAgLmF0KCcvYXBwLyonLCBhY3Rpb25zKVxuICAuZ2V0KHBhZ2VzKVxuICAubGlzdGVuKHsgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXByb2Nlc3MuYnJvd3NlciAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhgU2VydmVyIHN0YXJ0ZWQgb24gcG9ydCAnJHt0aGlzLmFkZHJlc3MoKS5wb3J0fScuYClcbiAgICAgIHByb2Nlc3Muc2VuZCAmJiBwcm9jZXNzLnNlbmQoJ29ubGluZScpXG4gICAgfVxuICB9KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibXNcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9oZWxtZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9oZWxtZXRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9mcmVzaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2ZyZXNoXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZXRhZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2V0YWdcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9jb21wcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2NvbXByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9zdGF0aWNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9zdGF0aWNcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcHJvZ3Jlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9wcm9ncmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9sb2dnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9sb2dnZXJcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZXhwb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2JvZHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9ib2R5XCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3Nlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9zZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3JlZGlyZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcmVkaXJlY3RcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvdW5oYW5kbGVkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvdW5oYW5kbGVkXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBIdHRwRXJyb3IgZnJvbSAnQHJpbGwvZXJyb3InXG5cbi8qKlxuICogU2ltcGxlIGVycm9yIGhhbmRsaW5nIG1pZGRsZXdhcmUgd2hpY2ggcmVkaXJlY3RzIHRvIHRoZSBlcnJvciBwYWdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBlcnJvckhhbmRsZXJNaWRkbGV3YXJlICh7IHJlcyB9LCBuZXh0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgbmV4dCgpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGxldCBtZXNzYWdlID0gZXJyLm1lc3NhZ2VcblxuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvcikpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSlcbiAgICAgIG1lc3NhZ2UgPSAnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJyZWQuJ1xuICAgIH1cblxuICAgIHJlcy5yZWRpcmVjdChgLzUwMD9tZXNzYWdlPSR7bWVzc2FnZX1gKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2Vycm9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZXJyb3JcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBNaWRkbGV3YXJlIHdoaWNoIHdpbGwgdGVsbCB0aGUgYnJvd3NlciB0byBwcmVsb2FkIGZpbGVzXG4gKiB3ZSBrbm93IGFyZSBnb2luZyB0byBiZSBuZWVkZWQgdG8gcmVuZGVyLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkTWlkZGxld2FyZSAoeyByZXMgfSwgbmV4dCkge1xuICBhd2FpdCBuZXh0KClcbiAgLy8gSWYgd2UgYXJlIHNlbmRpbmcgb3V0IGEgcmVhY3QgY29tcG9uZW50IHRoZW4gd2UgbmVlZCB0aGUgbWFpbiBKUyBhbmQgQ1NTLlxuICAvLyBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQocmVzLmJvZHkpKSB7XG4gIC8vICAgcmVzLmFwcGVuZCgnTGluaycsICc8L2luZGV4LmNzcz47IHJlbD1wcmVsb2FkOyBhcz1zdHlsZTsnKVxuICAvLyAgIHJlcy5hcHBlbmQoJ0xpbmsnLCAnPC9wb2x5ZmlsbC5qcz47IHJlbD1wcmVsb2FkOyBhcz1zY3JpcHQ7JylcbiAgLy8gICByZXMuYXBwZW5kKCdMaW5rJywgJzwvaW5kZXguanM+OyByZWw9cHJlbG9hZDsgYXM9c2NyaXB0OycpXG4gIC8vIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvbWlkZGxld2FyZS9wcmVsb2FkLmpzIiwiaW1wb3J0IFJvdXRlciBmcm9tICdyaWxsJ1xuaW1wb3J0ICogYXMgdG9kb0N0cmwgZnJvbSAnLi90b2RvcydcblxuLy8gQ3JlYXRlIGEgbmVzdGVkIHJpbGwgcm91dGVyIGZvciB0aGUgY29udHJvbGxlciByb3V0ZXMuXG5leHBvcnQgZGVmYXVsdCBuZXcgUm91dGVyKClcbiAgLy8gQ3JlYXRlZCBhIG5lc3RlZCBwcmVmaXhlZCByb3V0ZXIgZm9yIHRvZG8gY29udHJvbHMuXG4gIC5hdCgnL3RvZG8vKicsIG5ldyBSb3V0ZXIoKVxuICAgIC5wb3N0KCcvY3JlYXRlJywgdG9kb0N0cmwuY3JlYXRlKVxuICAgIC5nZXQoJy9vcGVuLzppZCcsIHRvZG9DdHJsLm9wZW5CeUlkKVxuICAgIC5wb3N0KCcvdXBkYXRlLzppZCcsIHRvZG9DdHJsLnVwZGF0ZUJ5SWQpXG4gICAgLmdldCgnL3RvZ2dsZS86aWQnLCB0b2RvQ3RybC50b2dnbGVCeUlkKVxuICAgIC5nZXQoJy90b2dnbGUtYWxsJywgdG9kb0N0cmwudG9nZ2xlQWxsKVxuICAgIC5nZXQoJy9yZW1vdmUvOmlkJywgdG9kb0N0cmwucmVtb3ZlQnlJZClcbiAgICAuZ2V0KCcvcmVtb3ZlLWNvbXBsZXRlZCcsIHRvZG9DdHJsLnJlbW92ZUNvbXBsZXRlZClcbiAgKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IHVpZCBmcm9tICdjdWlkJ1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVE9ETy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgaWYgKCFyZXEuYm9keS50ZXh0KSByZXR1cm5cbiAgdG9kb3MucHVzaCh7IGlkOiB1aWQoKSwgdGV4dDogcmVxLmJvZHkudGV4dCB9KVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBPcGVucyBhIHRvZG8gdG8gYmUgdXBkYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9wZW5CeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpXG4gIGlmICghdG9kbykgcmV0dXJuXG4gIHRvZG8uZWRpdGluZyA9IHRydWVcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogVXBkYXRlIGFuIGV4aXN0aW5nIHRvZG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpXG4gIGlmICghdG9kbyB8fCAhcmVxLmJvZHkudGV4dCkgcmV0dXJuXG4gIHRvZG8udGV4dCA9IHJlcS5ib2R5LnRleHRcbiAgdG9kby5lZGl0aW5nID0gZmFsc2VcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogVG9nZ2xlcyBhIHRvZG8ncyBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQnlJZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgY29uc3QgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSByZXEucGFyYW1zLmlkKVxuICBpZiAoIXRvZG8pIHJldHVyblxuICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZFxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBUb2dnbGVzIGFsbCB0b2RvcyBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQWxsICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4geyB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZCB9KVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGV4aXN0aW5nIHRvZG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICB0b2Rvcy5zcGxpY2UodG9kb3MuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PT0gcmVxLnBhcmFtcy5pZCksIDEpXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGNvbXBsZXRlZCB0b2Rvcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBsZXRlZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKSlcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYWN0aW9ucy90b2Rvcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImN1aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjdWlkXCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBwYWdlIGZyb20gJ0ByaWxsL3BhZ2UnXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnQHJpbGwvc3ZlbHRlJ1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZS5odG1sJ1xuaW1wb3J0IGVycm9yUGFnZSBmcm9tICcuLzUwMC5odG1sJ1xuaW1wb3J0IG1pc3NpbmdQYWdlIGZyb20gJy4vNDA0Lmh0bWwnXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoKVxuICAuZ2V0KHBhZ2VcbiAgICAuaHRtbCh7IGxhbmc6ICdlbicgfSlcbiAgICAubWV0YSh7IGNoYXJzZXQ6ICd1dGYtOCcgfSlcbiAgICAubWV0YSh7IG5hbWU6ICd2aWV3cG9ydCcsIGNvbnRlbnQ6ICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyB9KVxuICAgIC50aXRsZSgnUmlsbC9TdmVsdGUgVG9kby1NVkMnKVxuICAgIC5tZXRhKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogJ1RvZG8gTVZDIGFwcCB1c2luZyBSaWxsIGFuZCBTdmVsdGUuJyB9KVxuICAgIC5saW5rKHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6ICcvaW5kZXguY3NzJyB9KVxuICAgIC5zY3JpcHQoeyBzcmM6ICcvcG9seWZpbGwuanMnLCBhc3luYzogdHJ1ZSB9KVxuICAgIC5zY3JpcHQoeyBzcmM6ICcvaW5kZXguanMnLCBhc3luYzogdHJ1ZSB9KVxuICApXG4gIC5nZXQocmVuZGVyZXIoKSlcbiAgLmdldCgnLzUwMCcsICh7IHJlcSwgcmVzLCBsb2NhbHMgfSkgPT4ge1xuICAgIGxvY2Fscy5tZXNzYWdlID0gcmVxLnF1ZXJ5Lm1lc3NhZ2VcbiAgICByZXMuc3RhdHVzID0gNTAwXG4gICAgcmVzLmJvZHkgPSBlcnJvclBhZ2VcbiAgfSlcbiAgLmdldCgnLzQwNCcsICh7IHJlcyB9KSA9PiB7XG4gICAgcmVzLnN0YXR1cyA9IDQwNFxuICAgIHJlcy5ib2R5ID0gbWlzc2luZ1BhZ2VcbiAgfSlcbiAgLmdldCgnLzpmaWx0ZXIoYWxsfHBlbmRpbmd8Y29tcGxldGVkKT8nLCAoeyByZXEsIHJlcywgc2Vzc2lvbiwgbG9jYWxzIH0pID0+IHtcbiAgICBsb2NhbHMuZmlsdGVyID0gcmVxLnBhcmFtcy5maWx0ZXIgfHwgJ2FsbCdcbiAgICBsb2NhbHMudG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICAgIHJlcy5ib2R5ID0gaG9tZVBhZ2VcbiAgfSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvcGFnZXMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3BhZ2VzL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcGFnZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3BhZ2VcIlxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvc3ZlbHRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvc3ZlbHRlXCJcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjxkaXY+XG4gIDxzZWN0aW9uIGNsYXNzPVwidG9kb2FwcFwiPlxuICAgIDxIZWFkZXIgLz5cbiAgICB7eyNpZiB0b2Rvcy5sZW5ndGh9fVxuICAgICAgPFRvZG9MaXN0IGZpbHRlcj17e2ZpbHRlcn19IHRvZG9zPXt7dG9kb3N9fSAvPlxuICAgIHt7L2lmfX1cbiAgPC9zZWN0aW9uPlxuICA8Rm9vdGVyIC8+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci5odG1sJ1xuICBpbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy90b2RvLWxpc3QuaHRtbCdcbiAgaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci5odG1sJ1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBIZWFkZXIsIFRvZG9MaXN0LCBGb290ZXIgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9wYWdlcy9ob21lLmh0bWwiLCI8ZGl2PlxuICA8c2VjdGlvbiBjbGFzcz1cIm1haW5cIj5cbiAgICA8YSBocmVmPVwiL2FwcC90b2RvL3RvZ2dsZS1hbGxcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZS1hbGxcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgPGxhYmVsIGZvcj1cInRvZ2dsZS1hbGxcIj5NYXJrIGFsbCBhcyBjb21wbGV0ZTwvbGFiZWw+XG4gICAgPC9hPlxuICAgIDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuICAgICAge3sjZWFjaCB0b2RvTGlzdCBhcyB0b2RvfX1cbiAgICAgICAgPFRvZG9JdGVtIHRvZG89e3t0b2RvfX0vPlxuICAgICAge3svZWFjaH19XG4gICAgPC91bD5cbiAgPC9zZWN0aW9uPlxuICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJ0b2RvLWNvdW50XCI+PHN0cm9uZz57e3BlbmRpbmcubGVuZ3RofX08L3N0cm9uZz4gaXRlbSBsZWZ0PC9zcGFuPlxuICAgIDx1bCBjbGFzcz1cImZpbHRlcnNcIj5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgY2xhc3M9e3tjeCh7IHNlbGVjdGVkOiBmaWx0ZXIgPT09IFwiYWxsXCIgfSl9fSBocmVmPVwiL1wiPkFsbDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGNsYXNzPXt7Y3goeyBzZWxlY3RlZDogZmlsdGVyID09PSBcInBlbmRpbmdcIiB9KX19IGhyZWY9XCIvcGVuZGluZ1wiPkFjdGl2ZTwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGNsYXNzPXt7Y3goeyBzZWxlY3RlZDogZmlsdGVyID09PSBcImNvbXBsZXRlZFwiIH0pfX0gaHJlZj1cIi9jb21wbGV0ZWRcIj5Db21wbGV0ZWQ8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG5cbiAgICA8Zm9ybSBhY3Rpb249XCIvYXBwL3RvZG8vcmVtb3ZlLWNvbXBsZXRlZFwiPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJjbGVhci1jb21wbGV0ZWRcIj5DbGVhciBjb21wbGV0ZWQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZm9vdGVyPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuICBpbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi90b2RvLWl0ZW0uaHRtbCdcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGhlbHBlcnM6IHsgY3ggfSxcbiAgICBjb21wb25lbnRzOiB7IFRvZG9JdGVtIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGNvbXBsZXRlZDogdG9kb3MgPT4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5jb21wbGV0ZWQpLFxuICAgICAgcGVuZGluZzogdG9kb3MgPT4gdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKSxcbiAgICAgIHRvZG9MaXN0OiAodG9kb3MsIHBlbmRpbmcsIGNvbXBsZXRlZCwgZmlsdGVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgZmlsdGVyID09PSAnYWxsJyA/IHRvZG9zXG4gICAgICAgICAgOiBmaWx0ZXIgPT09ICdwZW5kaW5nJyA/IHBlbmRpbmdcbiAgICAgICAgICA6IGZpbHRlciA9PT0gJ2NvbXBsZXRlZCcgPyBjb21wbGV0ZWRcbiAgICAgICAgICA6IG51bGxcbiAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL3RvZG8tbGlzdC5odG1sIiwiPGxpIGNsYXNzPXt7Y3goeyBjb21wbGV0ZWQ6IHRvZG8uY29tcGxldGVkLCBlZGl0aW5nOiB0b2RvLmVkaXRpbmcgfSl9fT5cbiAgPGRpdiBjbGFzcz1cInZpZXdcIj5cbiAgICA8YSBocmVmPXt7YC9hcHAvdG9kby90b2dnbGUvJHt0b2RvLmlkfWB9fT5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZVwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3t0b2RvLmNvbXBsZXRlZH19IC8+XG4gICAgICA8bGFiZWwgLz5cbiAgICA8L2E+XG4gICAgPGEgaHJlZj17e2AvYXBwL3RvZG8vb3Blbi8ke3RvZG8uaWR9YH19PjxsYWJlbD57e3RvZG8udGV4dH19PC9sYWJlbD48L2E+XG4gICAgPGZvcm0gYWN0aW9uPXt7YC9hcHAvdG9kby9yZW1vdmUvJHt0b2RvLmlkfWB9fT5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJkZXN0cm95XCIgdHlwZT1cInN1Ym1pdFwiPjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG5cbiAge3sjaWYgdG9kby5lZGl0aW5nfX1cbiAgICA8Zm9ybSBjbGFzcz1cInVwZGF0ZS1mb3JtXCIgYWN0aW9uPXt7YC9hcHAvdG9kby91cGRhdGUvJHt0b2RvLmlkfWB9fSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJlZGl0XCIgbmFtZT1cInRleHRcIiB2YWx1ZT17e3RvZG8udGV4dH19IC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj48L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIHt7L2lmfX1cbjwvbGk+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgaGVscGVyczogeyBjeCB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvdG9kby1pdGVtLmh0bWwiLCI8ZGl2PlxuICA8Zm9vdGVyIGNsYXNzPVwiaW5mb1wiPlxuICAgIDxoMz57e21lc3NhZ2V9fTwvaDM+XG4gICAgPGgyPjxhIGhyZWY9XCIvXCI+Q2xpY2sgaGVyZSB0byBnbyBiYWNrPC9hPjwvaDI+XG4gICAgPHA+VGVtcGxhdGUgYnkgPGEgaHJlZj1cImh0dHA6Ly9zaW5kcmVzb3JodXMuY29tXCI+U2luZHJlIFNvcmh1czwvYT48L3A+XG4gICAgPHA+Q3JlYXRlZCBieSA8YSBocmVmPVwiaHR0cDovL3RvZG9tdmMuY29tXCI+RHlsYW4gUGllcmNleTwvYT48L3A+XG4gICAgPHA+UGFydCBvZiA8YSBocmVmPVwiaHR0cDovL3RvZG9tdmMuY29tXCI+VG9kb01WQzwvYT48L3A+XG4gIDwvZm9vdGVyPlxuPC9kaXY+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcGFnZXMvNTAwLmh0bWwiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7O0FDN0RBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMxQ0E7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7QUNMQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQzdFQTs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsQ0E7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvQ0E7QUFBQTtBQUFBO0FBQUE7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUNBO0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQTFDQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9