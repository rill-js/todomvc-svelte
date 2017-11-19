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




















/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_1_rill___default.a().use(__WEBPACK_IMPORTED_MODULE_2__rill_helmet___default()()).use(__WEBPACK_IMPORTED_MODULE_3__rill_fresh___default()()).use(__WEBPACK_IMPORTED_MODULE_4__rill_etag___default()()).use(__WEBPACK_IMPORTED_MODULE_5__rill_compress___default()()).get('/polyfill.js', __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default()()).get(__WEBPACK_IMPORTED_MODULE_7__rill_static___default()('build/public', { gzip: true, cache: __WEBPACK_IMPORTED_MODULE_0_ms___default()('30 days') + '; immutable' })).use(__WEBPACK_IMPORTED_MODULE_8__rill_progress___default()({ spinner: false, color: 'rgba(175, 47, 47, .3)' })).use(__WEBPACK_IMPORTED_MODULE_11__rill_body___default()()).use(__WEBPACK_IMPORTED_MODULE_12__rill_session___default()()).use(__WEBPACK_IMPORTED_MODULE_9__rill_logger___default()()).use(__WEBPACK_IMPORTED_MODULE_10__rill_expose___default()()).use(__WEBPACK_IMPORTED_MODULE_14__rill_unhandled___default()(__WEBPACK_IMPORTED_MODULE_13__rill_redirect___default()('/404'))).use(__WEBPACK_IMPORTED_MODULE_15__middleware_error_handler__["a" /* default */]).use(__WEBPACK_IMPORTED_MODULE_16__middleware_preload__["a" /* default */]).at('/app/*', __WEBPACK_IMPORTED_MODULE_17__actions__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_18__pages__["a" /* default */]).listen({ port: process.env.PORT }, function () {
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




var Home = {};

Home.filename = "/Users/dylanpiercey/Development/github/todo-mvc-svelte/app/pages/home.html";

Home.data = function () {
	return {};
};

Home.render = function (state, options) {
	state = state || {};

	return ('<div>\n  <section class="todoapp">\n    ' + __WEBPACK_IMPORTED_MODULE_0__components_header_html__["a" /* default */].render({}) + '\n    ' + (state.todos.length ? '' + __WEBPACK_IMPORTED_MODULE_1__components_todo_list_html__["a" /* default */].render({ filter: state.filter, todos: state.todos }) : '') + '\n  </section>\n  ' + __WEBPACK_IMPORTED_MODULE_2__components_footer_html__["a" /* default */].render({}) + '\n</div>\n\n').trim();
};

Home.renderCss = function () {
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
/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Home = {};

Home.filename = "/Users/dylanpiercey/Development/github/todo-mvc-svelte/app/components/header.html";

Home.data = function () {
	return {};
};

Home.render = function (state, options) {
	state = state || {};

	return '<header class="header">\n  <h1>todos</h1>\n  <form class="create-form" action="/app/todo/create" method="POST" autocomplete="off">\n    <input class="new-todo" name="text" placeholder="What needs to be done?" autocomplete="off">\n    <button type="submit"></button>\n  </form>\n</header>'.trim();
};

Home.renderCss = function () {
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
/* harmony default export */ __webpack_exports__["a"] = (Home);

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

function display(todos, pending, completed, filter) {
  return filter === 'all' ? todos : filter === 'pending' ? pending : filter === 'completed' ? completed : null;
}

var Home = {};

Home.filename = "/Users/dylanpiercey/Development/github/todo-mvc-svelte/app/components/todo-list.html";

Home.data = function () {
  return {};
};

Home.render = function (state, options) {
  state = state || {};

  state.completed = completed(state.todos);
  state.pending = pending(state.todos);
  state.display = display(state.todos, state.pending, state.completed, state.filter);

  return ('<div>\n  <section class="main">\n    <a href="/app/todo/toggle-all">\n      <input class="toggle-all" type="checkbox">\n      <label for="toggle-all">Mark all as complete</label>\n    </a>\n    <ul class="todo-list">\n      ' + state.todos.map(function (todo) {
    return '' + __WEBPACK_IMPORTED_MODULE_1__todo_item_html__["a" /* default */].render({ todo: todo });
  }).join("") + '\n    </ul>\n  </section>\n  <footer class="footer">\n    <span class="todo-count"><strong>' + __escape(state.pending.length) + '</strong> item left</span>\n    <ul class="filters">\n      <li>\n        <a class="' + __WEBPACK_IMPORTED_MODULE_0_classnames___default()({ selected: state.filter === "all" }) + '" href="/">All</a>\n      </li>\n      <li>\n        <a class="' + __WEBPACK_IMPORTED_MODULE_0_classnames___default()({ selected: state.filter === "pending" }) + '" href="/pending">Active</a>\n      </li>\n      <li>\n        <a class="' + __WEBPACK_IMPORTED_MODULE_0_classnames___default()({ selected: state.filter === "completed" }) + '" href="/completed">Completed</a>\n      </li>\n    </ul>\n\n    <form action="/app/todo/remove-completed">\n      <button type="submit" class="clear-completed">Clear completed</button>\n    </form>\n  </footer>\n</div>\n\n').trim();
};

Home.renderCss = function () {
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
/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);


var Home = {};

Home.filename = "/Users/dylanpiercey/Development/github/todo-mvc-svelte/app/components/todo-item.html";

Home.data = function () {
	return {};
};

Home.render = function (state, options) {
	state = state || {};

	return ('<li class="' + __WEBPACK_IMPORTED_MODULE_0_classnames___default()({ completed: state.todo.completed, editing: state.todo.editing }) + '">\n  <div class="view">\n    <a href="' + ('/app/todo/toggle/' + state.todo.id) + '">\n      <input class="toggle" type="checkbox" checked="' + state.todo.completed + '">\n      <label></label>\n    </a>\n    <a href="' + ('/app/todo/open/' + state.todo.id) + '"><label>' + __escape(state.todo.text) + '</label></a>\n    <form action="' + ('/app/todo/remove/' + state.todo.id) + '">\n      <button class="destroy" type="submit"></button>\n    </form>\n  </div>\n\n  ' + (state.todo.editing ? '<form class="update-form" action="' + ('/app/todo/update/' + state.todo.id) + '" method="POST">\n      <input class="edit" name="text" value="' + state.todo.text + '">\n      <button type="submit"></button>\n    </form>' : '') + '\n</li>\n\n').trim();
};

Home.renderCss = function () {
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
/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Home = {};

Home.filename = "/Users/dylanpiercey/Development/github/todo-mvc-svelte/app/components/footer.html";

Home.data = function () {
	return {};
};

Home.render = function (state, options) {
	state = state || {};

	return '<footer id="info" class="info">\n  <h3>Go ahead, disable JavaScript.</h3>\n  <p>Single-click to edit a todo</p>\n  <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\n  <p>Created by <a href="http://todomvc.com">Dylan Piercey</a></p>\n  <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>\n</footer>'.trim();
};

Home.renderCss = function () {
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
/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Home = {};

Home.filename = "/Users/dylanpiercey/Development/github/todo-mvc-svelte/app/pages/500.html";

Home.data = function () {
	return {};
};

Home.render = function (state, options) {
	state = state || {};

	return ('<div>\n  <footer class="info">\n    <h3>' + __escape(state.message) + '</h3>\n    <h2><a href="/">Click here to go back</a></h2>\n    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\n    <p>Created by <a href="http://todomvc.com">Dylan Piercey</a></p>\n    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>\n  </footer>\n</div>').trim();
};

Home.renderCss = function () {
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
/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Home = {};

Home.filename = "/Users/dylanpiercey/Development/github/todo-mvc-svelte/app/pages/404.html";

Home.data = function () {
	return {};
};

Home.render = function (state, options) {
	state = state || {};

	return '<div>\n  <footer id="info" class="info">\n    <h3>The requested page could not be found.</h3>\n    <h2><a href="/">Click here to go back</a></h2>\n    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\n    <p>Created by <a href="http://todomvc.com">Dylan Piercey</a></p>\n    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>\n  </footer>\n</div>'.trim();
};

Home.renderCss = function () {
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
/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTJhMTMyZjk4MDUzYThjZTMxMjIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZnJlc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9ldGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvY29tcHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3N0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvYm9keVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Nlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9yZWRpcmVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiIiwid2VicGFjazovLy9hcHAvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2Vycm9yXCIiLCJ3ZWJwYWNrOi8vL2FwcC9taWRkbGV3YXJlL3ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy9hcHAvYWN0aW9ucy90b2Rvcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjdWlkXCIiLCJ3ZWJwYWNrOi8vL2FwcC9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvc3R5bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9zdmVsdGVcIiIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvaG9tZS5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3RvZG8tbGlzdC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3RvZG8taXRlbS5odG1sIiwid2VicGFjazovLy8uL2FwcC9wYWdlcy81MDAuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMmExMzJmOTgwNTNhOGNlMzEyMiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbXMgZnJvbSAnbXMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgaGVsbWV0IGZyb20gJ0ByaWxsL2hlbG1ldCdcbmltcG9ydCBmcmVzaCBmcm9tICdAcmlsbC9mcmVzaCdcbmltcG9ydCBldGFnIGZyb20gJ0ByaWxsL2V0YWcnXG5pbXBvcnQgY29tcHJlc3MgZnJvbSAnQHJpbGwvY29tcHJlc3MnXG5pbXBvcnQgcG9seWZpbGwgZnJvbSAnQHJpbGwvcG9seWZpbGwnXG5pbXBvcnQgc2VydmUgZnJvbSAnQHJpbGwvc3RhdGljJ1xuaW1wb3J0IHByb2dyZXNzIGZyb20gJ0ByaWxsL3Byb2dyZXNzJ1xuaW1wb3J0IGxvZ2dlciBmcm9tICdAcmlsbC9sb2dnZXInXG5pbXBvcnQgZXhwb3NlIGZyb20gJ0ByaWxsL2V4cG9zZSdcbmltcG9ydCBib2R5IGZyb20gJ0ByaWxsL2JvZHknXG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdAcmlsbC9zZXNzaW9uJ1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gJ0ByaWxsL3JlZGlyZWN0J1xuaW1wb3J0IHVuaGFuZGxlZCBmcm9tICdAcmlsbC91bmhhbmRsZWQnXG5pbXBvcnQgZXJyb3JIYW5kbGVyTWlkZGxld2FyZSBmcm9tICcuL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlcidcbmltcG9ydCBwcmVsb2FkTWlkZGxld2FyZSBmcm9tICcuL21pZGRsZXdhcmUvcHJlbG9hZCdcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCBwYWdlcyBmcm9tICcuL3BhZ2VzJ1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgUm91dGVyKClcbiAgLnVzZShoZWxtZXQoKSlcbiAgLnVzZShmcmVzaCgpKVxuICAudXNlKGV0YWcoKSlcbiAgLnVzZShjb21wcmVzcygpKVxuICAuZ2V0KCcvcG9seWZpbGwuanMnLCBwb2x5ZmlsbCgpKVxuICAuZ2V0KHNlcnZlKCdidWlsZC9wdWJsaWMnLCB7IGd6aXA6IHRydWUsIGNhY2hlOiBgJHttcygnMzAgZGF5cycpfTsgaW1tdXRhYmxlYCB9KSlcbiAgLnVzZShwcm9ncmVzcyh7IHNwaW5uZXI6IGZhbHNlLCBjb2xvcjogJ3JnYmEoMTc1LCA0NywgNDcsIC4zKScgfSkpXG4gIC51c2UoYm9keSgpKVxuICAudXNlKHNlc3Npb24oKSlcbiAgLnVzZShsb2dnZXIoKSlcbiAgLnVzZShleHBvc2UoKSlcbiAgLnVzZSh1bmhhbmRsZWQocmVkaXJlY3QoJy80MDQnKSkpXG4gIC51c2UoZXJyb3JIYW5kbGVyTWlkZGxld2FyZSlcbiAgLnVzZShwcmVsb2FkTWlkZGxld2FyZSlcbiAgLmF0KCcvYXBwLyonLCBhY3Rpb25zKVxuICAuZ2V0KHBhZ2VzKVxuICAubGlzdGVuKHsgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2coYFNlcnZlciBzdGFydGVkIG9uIHBvcnQgJyR7dGhpcy5hZGRyZXNzKCkucG9ydH0nLmApXG4gICAgICBwcm9jZXNzLnNlbmQgJiYgcHJvY2Vzcy5zZW5kKCdvbmxpbmUnKVxuICAgIH1cbiAgfSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1zXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvaGVsbWV0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvaGVsbWV0XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZnJlc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9mcmVzaFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2V0YWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9ldGFnXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvY29tcHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9jb21wcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3BvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvc3RhdGljXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvc3RhdGljXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3Byb2dyZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcHJvZ3Jlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2V4cG9zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2V4cG9zZVwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9ib2R5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvYm9keVwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9zZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvc2Vzc2lvblwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9yZWRpcmVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3JlZGlyZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3VuaGFuZGxlZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSHR0cEVycm9yIGZyb20gJ0ByaWxsL2Vycm9yJ1xuXG4vKipcbiAqIFNpbXBsZSBlcnJvciBoYW5kbGluZyBtaWRkbGV3YXJlIHdoaWNoIHJlZGlyZWN0cyB0byB0aGUgZXJyb3IgcGFnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZXJyb3JIYW5kbGVyTWlkZGxld2FyZSAoeyByZXMgfSwgbmV4dCkge1xuICB0cnkge1xuICAgIGF3YWl0IG5leHQoKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsZXQgbWVzc2FnZSA9IGVyci5tZXNzYWdlXG5cbiAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3IpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpXG4gICAgICBtZXNzYWdlID0gJ0FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VycmVkLidcbiAgICB9XG5cbiAgICByZXMucmVkaXJlY3QoYC81MDA/bWVzc2FnZT0ke21lc3NhZ2V9YClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9lcnJvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2Vycm9yXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogTWlkZGxld2FyZSB3aGljaCB3aWxsIHRlbGwgdGhlIGJyb3dzZXIgdG8gcHJlbG9hZCBmaWxlc1xuICogd2Uga25vdyBhcmUgZ29pbmcgdG8gYmUgbmVlZGVkIHRvIHJlbmRlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZE1pZGRsZXdhcmUgKHsgcmVzIH0sIG5leHQpIHtcbiAgYXdhaXQgbmV4dCgpXG4gIC8vIElmIHdlIGFyZSBzZW5kaW5nIG91dCBhIHJlYWN0IGNvbXBvbmVudCB0aGVuIHdlIG5lZWQgdGhlIG1haW4gSlMgYW5kIENTUy5cbiAgLy8gaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KHJlcy5ib2R5KSkge1xuICAvLyAgIHJlcy5hcHBlbmQoJ0xpbmsnLCAnPC9pbmRleC5jc3M+OyByZWw9cHJlbG9hZDsgYXM9c3R5bGU7JylcbiAgLy8gICByZXMuYXBwZW5kKCdMaW5rJywgJzwvcG9seWZpbGwuanM+OyByZWw9cHJlbG9hZDsgYXM9c2NyaXB0OycpXG4gIC8vICAgcmVzLmFwcGVuZCgnTGluaycsICc8L2luZGV4LmpzPjsgcmVsPXByZWxvYWQ7IGFzPXNjcmlwdDsnKVxuICAvLyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL21pZGRsZXdhcmUvcHJlbG9hZC5qcyIsImltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCAqIGFzIHRvZG9DdHJsIGZyb20gJy4vdG9kb3MnXG5cbi8vIENyZWF0ZSBhIG5lc3RlZCByaWxsIHJvdXRlciBmb3IgdGhlIGNvbnRyb2xsZXIgcm91dGVzLlxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlcigpXG4gIC8vIENyZWF0ZWQgYSBuZXN0ZWQgcHJlZml4ZWQgcm91dGVyIGZvciB0b2RvIGNvbnRyb2xzLlxuICAuYXQoJy90b2RvLyonLCBuZXcgUm91dGVyKClcbiAgICAucG9zdCgnL2NyZWF0ZScsIHRvZG9DdHJsLmNyZWF0ZSlcbiAgICAuZ2V0KCcvb3Blbi86aWQnLCB0b2RvQ3RybC5vcGVuQnlJZClcbiAgICAucG9zdCgnL3VwZGF0ZS86aWQnLCB0b2RvQ3RybC51cGRhdGVCeUlkKVxuICAgIC5nZXQoJy90b2dnbGUvOmlkJywgdG9kb0N0cmwudG9nZ2xlQnlJZClcbiAgICAuZ2V0KCcvdG9nZ2xlLWFsbCcsIHRvZG9DdHJsLnRvZ2dsZUFsbClcbiAgICAuZ2V0KCcvcmVtb3ZlLzppZCcsIHRvZG9DdHJsLnJlbW92ZUJ5SWQpXG4gICAgLmdldCgnL3JlbW92ZS1jb21wbGV0ZWQnLCB0b2RvQ3RybC5yZW1vdmVDb21wbGV0ZWQpXG4gIClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCB1aWQgZnJvbSAnY3VpZCdcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFRPRE8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIGlmICghcmVxLmJvZHkudGV4dCkgcmV0dXJuXG4gIHRvZG9zLnB1c2goeyBpZDogdWlkKCksIHRleHQ6IHJlcS5ib2R5LnRleHQgfSlcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogT3BlbnMgYSB0b2RvIHRvIGJlIHVwZGF0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcGVuQnlJZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgY29uc3QgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSByZXEucGFyYW1zLmlkKVxuICBpZiAoIXRvZG8pIHJldHVyblxuICB0b2RvLmVkaXRpbmcgPSB0cnVlXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyB0b2RvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQnlJZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgY29uc3QgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSByZXEucGFyYW1zLmlkKVxuICBpZiAoIXRvZG8gfHwgIXJlcS5ib2R5LnRleHQpIHJldHVyblxuICB0b2RvLnRleHQgPSByZXEuYm9keS50ZXh0XG4gIHRvZG8uZWRpdGluZyA9IGZhbHNlXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFRvZ2dsZXMgYSB0b2RvJ3MgY29tcGxldGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUJ5SWQgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIGNvbnN0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PT0gcmVxLnBhcmFtcy5pZClcbiAgaWYgKCF0b2RvKSByZXR1cm5cbiAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWRcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogVG9nZ2xlcyBhbGwgdG9kb3MgY29tcGxldGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUFsbCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHsgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQgfSlcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbiBleGlzdGluZyB0b2RvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQnlJZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgdG9kb3Muc3BsaWNlKHRvZG9zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpLCAxKVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBjb21wbGV0ZWQgdG9kb3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb21wbGV0ZWQgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZCkpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2FjdGlvbnMvdG9kb3MuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjdWlkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY3VpZFwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5pbXBvcnQgUm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgcGFnZSBmcm9tICdAcmlsbC9wYWdlJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJ0ByaWxsL3N2ZWx0ZSdcbmltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUuaHRtbCdcbmltcG9ydCBlcnJvclBhZ2UgZnJvbSAnLi81MDAuaHRtbCdcbmltcG9ydCBtaXNzaW5nUGFnZSBmcm9tICcuLzQwNC5odG1sJ1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgUm91dGVyKClcbiAgLmdldChwYWdlXG4gICAgLmh0bWwoeyBsYW5nOiAnZW4nIH0pXG4gICAgLm1ldGEoeyBjaGFyc2V0OiAndXRmLTgnIH0pXG4gICAgLm1ldGEoeyBuYW1lOiAndmlld3BvcnQnLCBjb250ZW50OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcgfSlcbiAgICAudGl0bGUoJ1JpbGwvU3ZlbHRlIFRvZG8tTVZDJylcbiAgICAubWV0YSh7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6ICdUb2RvIE1WQyBhcHAgdXNpbmcgUmlsbCBhbmQgU3ZlbHRlLicgfSlcbiAgICAubGluayh7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiAnL2luZGV4LmNzcycgfSlcbiAgICAuc2NyaXB0KHsgc3JjOiAnL3BvbHlmaWxsLmpzJywgYXN5bmM6IHRydWUgfSlcbiAgICAuc2NyaXB0KHsgc3JjOiAnL2luZGV4LmpzJywgYXN5bmM6IHRydWUgfSlcbiAgKVxuICAuZ2V0KHJlbmRlcmVyKCkpXG4gIC5nZXQoJy81MDAnLCAoeyByZXEsIHJlcywgbG9jYWxzIH0pID0+IHtcbiAgICBsb2NhbHMubWVzc2FnZSA9IHJlcS5xdWVyeS5tZXNzYWdlXG4gICAgcmVzLnN0YXR1cyA9IDUwMFxuICAgIHJlcy5ib2R5ID0gZXJyb3JQYWdlXG4gIH0pXG4gIC5nZXQoJy80MDQnLCAoeyByZXMgfSkgPT4ge1xuICAgIHJlcy5zdGF0dXMgPSA0MDRcbiAgICByZXMuYm9keSA9IG1pc3NpbmdQYWdlXG4gIH0pXG4gIC5nZXQoJy86ZmlsdGVyKGFsbHxwZW5kaW5nfGNvbXBsZXRlZCk/JywgKHsgcmVxLCByZXMsIHNlc3Npb24sIGxvY2FscyB9KSA9PiB7XG4gICAgbG9jYWxzLmZpbHRlciA9IHJlcS5wYXJhbXMuZmlsdGVyIHx8ICdhbGwnXG4gICAgbG9jYWxzLnRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgICByZXMuYm9keSA9IGhvbWVQYWdlXG4gIH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3BhZ2VzL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9wYWdlcy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3BhZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9wYWdlXCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3N2ZWx0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3N2ZWx0ZVwiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8ZGl2PlxuICA8c2VjdGlvbiBjbGFzcz1cInRvZG9hcHBcIj5cbiAgICA8SGVhZGVyIC8+XG4gICAge3sjaWYgdG9kb3MubGVuZ3RofX1cbiAgICAgIDxUb2RvTGlzdCBmaWx0ZXI9e3tmaWx0ZXJ9fSB0b2Rvcz17e3RvZG9zfX0gLz5cbiAgICB7ey9pZn19XG4gIDwvc2VjdGlvbj5cbiAgPEZvb3RlciAvPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIuaHRtbCdcbiAgaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdG9kby1saXN0Lmh0bWwnXG4gIGltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXIuaHRtbCdcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgSGVhZGVyLCBUb2RvTGlzdCwgRm9vdGVyIH1cbiAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcGFnZXMvaG9tZS5odG1sIiwiPGRpdj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJtYWluXCI+XG4gICAgPGEgaHJlZj1cIi9hcHAvdG9kby90b2dnbGUtYWxsXCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJ0b2dnbGUtYWxsXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgIDxsYWJlbCBmb3I9XCJ0b2dnbGUtYWxsXCI+TWFyayBhbGwgYXMgY29tcGxldGU8L2xhYmVsPlxuICAgIDwvYT5cbiAgICA8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cbiAgICAgIHt7I2VhY2ggdG9kb3MgYXMgdG9kb319XG4gICAgICAgIDxUb2RvSXRlbSB0b2RvPXt7dG9kb319Lz5cbiAgICAgIHt7L2VhY2h9fVxuICAgIDwvdWw+XG4gIDwvc2VjdGlvbj5cbiAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxuICAgIDxzcGFuIGNsYXNzPVwidG9kby1jb3VudFwiPjxzdHJvbmc+e3twZW5kaW5nLmxlbmd0aH19PC9zdHJvbmc+IGl0ZW0gbGVmdDwvc3Bhbj5cbiAgICA8dWwgY2xhc3M9XCJmaWx0ZXJzXCI+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGNsYXNzPXt7Y3goeyBzZWxlY3RlZDogZmlsdGVyID09PSBcImFsbFwiIH0pfX0gaHJlZj1cIi9cIj5BbGw8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBjbGFzcz17e2N4KHsgc2VsZWN0ZWQ6IGZpbHRlciA9PT0gXCJwZW5kaW5nXCIgfSl9fSBocmVmPVwiL3BlbmRpbmdcIj5BY3RpdmU8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBjbGFzcz17e2N4KHsgc2VsZWN0ZWQ6IGZpbHRlciA9PT0gXCJjb21wbGV0ZWRcIiB9KX19IGhyZWY9XCIvY29tcGxldGVkXCI+Q29tcGxldGVkPC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuXG4gICAgPGZvcm0gYWN0aW9uPVwiL2FwcC90b2RvL3JlbW92ZS1jb21wbGV0ZWRcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiY2xlYXItY29tcGxldGVkXCI+Q2xlYXIgY29tcGxldGVkPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Zvb3Rlcj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbiAgaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vdG9kby1pdGVtLmh0bWwnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBoZWxwZXJzOiB7IGN4IH0sXG4gICAgY29tcG9uZW50czogeyBUb2RvSXRlbSB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBjb21wbGV0ZWQ6IHRvZG9zID0+IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uY29tcGxldGVkKSxcbiAgICAgIHBlbmRpbmc6IHRvZG9zID0+IHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZCksXG4gICAgICBkaXNwbGF5OiAodG9kb3MsIHBlbmRpbmcsIGNvbXBsZXRlZCwgZmlsdGVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgZmlsdGVyID09PSAnYWxsJyA/IHRvZG9zXG4gICAgICAgICAgOiBmaWx0ZXIgPT09ICdwZW5kaW5nJyA/IHBlbmRpbmdcbiAgICAgICAgICA6IGZpbHRlciA9PT0gJ2NvbXBsZXRlZCcgPyBjb21wbGV0ZWRcbiAgICAgICAgICA6IG51bGxcbiAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL3RvZG8tbGlzdC5odG1sIiwiPGxpIGNsYXNzPXt7Y3goeyBjb21wbGV0ZWQ6IHRvZG8uY29tcGxldGVkLCBlZGl0aW5nOiB0b2RvLmVkaXRpbmcgfSl9fT5cbiAgPGRpdiBjbGFzcz1cInZpZXdcIj5cbiAgICA8YSBocmVmPXt7YC9hcHAvdG9kby90b2dnbGUvJHt0b2RvLmlkfWB9fT5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRvZ2dsZVwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3t0b2RvLmNvbXBsZXRlZH19IC8+XG4gICAgICA8bGFiZWwgLz5cbiAgICA8L2E+XG4gICAgPGEgaHJlZj17e2AvYXBwL3RvZG8vb3Blbi8ke3RvZG8uaWR9YH19PjxsYWJlbD57e3RvZG8udGV4dH19PC9sYWJlbD48L2E+XG4gICAgPGZvcm0gYWN0aW9uPXt7YC9hcHAvdG9kby9yZW1vdmUvJHt0b2RvLmlkfWB9fT5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJkZXN0cm95XCIgdHlwZT1cInN1Ym1pdFwiPjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG5cbiAge3sjaWYgdG9kby5lZGl0aW5nfX1cbiAgICA8Zm9ybSBjbGFzcz1cInVwZGF0ZS1mb3JtXCIgYWN0aW9uPXt7YC9hcHAvdG9kby91cGRhdGUvJHt0b2RvLmlkfWB9fSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJlZGl0XCIgbmFtZT1cInRleHRcIiB2YWx1ZT17e3RvZG8udGV4dH19IC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj48L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIHt7L2lmfX1cbjwvbGk+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgaGVscGVyczogeyBjeCB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvdG9kby1pdGVtLmh0bWwiLCI8ZGl2PlxuICA8Zm9vdGVyIGNsYXNzPVwiaW5mb1wiPlxuICAgIDxoMz57e21lc3NhZ2V9fTwvaDM+XG4gICAgPGgyPjxhIGhyZWY9XCIvXCI+Q2xpY2sgaGVyZSB0byBnbyBiYWNrPC9hPjwvaDI+XG4gICAgPHA+VGVtcGxhdGUgYnkgPGEgaHJlZj1cImh0dHA6Ly9zaW5kcmVzb3JodXMuY29tXCI+U2luZHJlIFNvcmh1czwvYT48L3A+XG4gICAgPHA+Q3JlYXRlZCBieSA8YSBocmVmPVwiaHR0cDovL3RvZG9tdmMuY29tXCI+RHlsYW4gUGllcmNleTwvYT48L3A+XG4gICAgPHA+UGFydCBvZiA8YSBocmVmPVwiaHR0cDovL3RvZG9tdmMuY29tXCI+VG9kb01WQzwvYT48L3A+XG4gIDwvZm9vdGVyPlxuPC9kaXY+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcGFnZXMvNTAwLmh0bWwiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7O0FDN0RBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMxQ0E7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7QUNMQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQzdFQTs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsQ0E7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvQ0E7QUFBQTtBQUFBO0FBQUE7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUNBO0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQTFDQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9