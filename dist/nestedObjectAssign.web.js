!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("nestedObjectAssign",[],t):"object"==typeof exports?exports.nestedObjectAssign=t():e.nestedObjectAssign=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),f=1;f<t;f++)n[f-1]=arguments[f];if(!n.length)return e;var u=n.shift();if((0,i.isObject)(e)&&(0,i.isObject)(u))for(var c in u)(0,i.isObject)(u[c])?(e[c]||Object.assign(e,o({},c,{})),r(e[c],u[c])):Object.assign(e,o({},c,u[c]));return r.apply(void 0,[e].concat(n))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(1);e.exports=t.default},function(e,t){"use strict";function n(e){return e&&"object"===("undefined"==typeof e?"undefined":o(e))&&!Array.isArray(e)}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isObject=n}])});