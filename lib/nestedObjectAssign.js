module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = nestedObjectAssign;\n\nvar _isObject = __webpack_require__(1);\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction nestedObjectAssign(target) {\n    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        sources[_key - 1] = arguments[_key];\n    }\n\n    if (!sources.length) return target;\n\n    var source = sources.shift();\n\n    if ((0, _isObject.isObject)(target) && (0, _isObject.isObject)(source)) {\n        for (var key in source) {\n            if ((0, _isObject.isObject)(source[key])) {\n                if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));\n\n                nestedObjectAssign(target[key], source[key]);\n            } else {\n                Object.assign(target, _defineProperty({}, key, source[key]));\n            }\n        }\n    }\n\n    return nestedObjectAssign.apply(undefined, [target].concat(sources));\n}\nmodule.exports = exports['default'];\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbmVzdGVkT2JqZWN0QXNzaWduLmpzP2ZmYWMiXSwibmFtZXMiOlsibmVzdGVkT2JqZWN0QXNzaWduIiwidGFyZ2V0Iiwic291cmNlcyIsImxlbmd0aCIsInNvdXJjZSIsInNoaWZ0Iiwia2V5IiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLGtCOztBQUZ4Qjs7OztBQUVlLFNBQVNBLGtCQUFULENBQTRCQyxNQUE1QixFQUErQztBQUFBLHNDQUFSQyxPQUFRO0FBQVJBLGVBQVE7QUFBQTs7QUFDMUQsUUFBSSxDQUFDQSxRQUFRQyxNQUFiLEVBQ0ksT0FBT0YsTUFBUDs7QUFFSixRQUFNRyxTQUFTRixRQUFRRyxLQUFSLEVBQWY7O0FBRUEsUUFBSSx3QkFBU0osTUFBVCxLQUFvQix3QkFBU0csTUFBVCxDQUF4QixFQUF5QztBQUNyQyxhQUFLLElBQU1FLEdBQVgsSUFBa0JGLE1BQWxCLEVBQXlCO0FBQ3JCLGdCQUFJLHdCQUFTQSxPQUFPRSxHQUFQLENBQVQsQ0FBSixFQUEwQjtBQUN0QixvQkFBSSxDQUFDTCxPQUFPSyxHQUFQLENBQUwsRUFDSUMsT0FBT0MsTUFBUCxDQUFjUCxNQUFkLHNCQUF3QkssR0FBeEIsRUFBOEIsRUFBOUI7O0FBRUpOLG1DQUFtQkMsT0FBT0ssR0FBUCxDQUFuQixFQUFnQ0YsT0FBT0UsR0FBUCxDQUFoQztBQUNILGFBTEQsTUFNSztBQUNEQyx1QkFBT0MsTUFBUCxDQUFjUCxNQUFkLHNCQUF3QkssR0FBeEIsRUFBOEJGLE9BQU9FLEdBQVAsQ0FBOUI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsV0FBT04scUNBQW1CQyxNQUFuQixTQUE4QkMsT0FBOUIsRUFBUDtBQUNIIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzT2JqZWN0fSBmcm9tICcuL2lzT2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5lc3RlZE9iamVjdEFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpe1xyXG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG5cclxuICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcclxuXHJcbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKXtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2Upe1xyXG4gICAgICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKXtcclxuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0W2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtba2V5XToge319KTtcclxuXHJcbiAgICAgICAgICAgICAgICBuZXN0ZWRPYmplY3RBc3NpZ24odGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7W2tleV06IHNvdXJjZVtrZXldfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5lc3RlZE9iamVjdEFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25lc3RlZE9iamVjdEFzc2lnbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nexports.isObject = isObject;\nfunction isObject(item) {\n    return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNPYmplY3QuanM/YzBhOCJdLCJuYW1lcyI6WyJpc09iamVjdCIsIml0ZW0iLCJBcnJheSIsImlzQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBQWdCQSxRLEdBQUFBLFE7QUFBVCxTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUF1QjtBQUMxQixXQUFRQSxRQUFRLFFBQU9BLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBeEIsSUFBb0MsQ0FBQ0MsTUFBTUMsT0FBTixDQUFjRixJQUFkLENBQTdDO0FBQ0giLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChpdGVtKXtcclxuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2lzT2JqZWN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);