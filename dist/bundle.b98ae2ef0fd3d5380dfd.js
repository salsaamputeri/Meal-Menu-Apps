/*! For license information please see bundle.b98ae2ef0fd3d5380dfd.js.LICENSE.txt */
(()=>{var t,n={984:(t,n,e)=>{"use strict";e(666);var r=e(379),o=e.n(r),i=e(795),c=e.n(i),u=e(569),a=e.n(u),l=e(565),f=e.n(l),s=e(216),p=e.n(s),h=e(589),y=e.n(h),d=e(890),b={};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,n){if("object"!==v(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function g(t){var n="function"==typeof Map?new Map:void 0;return g=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return w(t,arguments,j(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),O(r,t)},g(t)}function w(t,n,e){return w=x()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&O(o,e.prototype),o},w.apply(null,arguments)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function O(t,n){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},O(t,n)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}b.styleTagTransform=y(),b.setAttributes=f(),b.insert=a().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=p(),o()(d.Z,b),d.Z&&d.Z.locals&&d.Z.locals,e(705),e(869);var E=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&O(t,n)}(c,t);var n,e,r,o,i=(r=c,o=x(),function(){var t,n=j(r);if(o){var e=j(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return function(t,n){if(n&&("object"===v(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function c(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return n=c,(e=[{key:"menus",set:function(t){this._menus=t,this.render()}},{key:"renderError",value:function(t){this.shadowDOM.innerHTML="\n    <style>\n    .placeholder {\n      text-align: center;\n      color: #555;\n      font-style: italic;\n    }\n    </style>\n    ",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(t,"</h2>")}},{key:"render",value:function(){var t=this;this.shadowDOM.innerHTML="",this._menus&&this._menus.length>0?this._menus.forEach((function(n){var e=document.createElement("menu-item");e.menu=n,t.shadowDOM.appendChild(e)})):this.renderError("Menu tidak ditemukan")}}])&&m(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),c}(g(HTMLElement));function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,n){if("object"!==S(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}customElements.define("menu-list",E),e(998);const P=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e;return n=t,e=[{key:"searchMenu",value:function(t){return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(t)).then((function(t){return t.json()})).then((function(n){var e=n.meals;return e?Promise.resolve(e):Promise.reject("".concat(t," tidak ditemukan"))}))}}],null&&k(n.prototype,null),e&&k(n,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function M(){M=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function l(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var i=n&&n.prototype instanceof v?n:v,c=Object.create(i.prototype),u=new R(r||[]);return o(c,"_invoke",{value:k(t,e,u)}),c}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p="suspendedStart",h="suspendedYield",y="executing",d="completed",b={};function v(){}function m(){}function g(){}var w={};l(w,c,(function(){return this}));var x=Object.getPrototypeOf,O=x&&x(x(D([])));O&&O!==e&&r.call(O,c)&&(w=O);var j=g.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function e(o,i,c,u){var a=s(t[o],t,i);if("throw"!==a.type){var l=a.arg,f=l.value;return f&&"object"==_(f)&&r.call(f,"__await")?n.resolve(f.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(a.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function k(n,e,r){var o=p;return function(i,c){if(o===y)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw c;return{value:t,done:!0}}for(r.method=i,r.arg=c;;){var u=r.delegate;if(u){var a=P(u,r);if(a){if(a===b)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=s(n,e,r);if("normal"===l.type){if(o=r.done?d:h,l.arg===b)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg)}}}function P(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,P(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=s(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,b;var c=i.arg;return c?c.done?(e[n.resultName]=c.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,b):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function T(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function D(n){if(n||""===n){var e=n[c];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(_(n)+" is not iterable")}return m.prototype=g,o(j,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=l(g,a,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,a,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},E(S.prototype),l(S.prototype,u,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var c=new S(f(t,e,r,o),i);return n.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},E(j),l(j,a,"Generator"),l(j,c,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=D,R.prototype={constructor:R,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return u.type="throw",u.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var a=r.call(c,"catchLoc"),l=r.call(c,"finallyLoc");if(a&&l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),b},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),b}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:D(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),b}},n}function L(t,n,e,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void e(t)}u.done?n(a):Promise.resolve(a).then(r,o)}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("search-bar"),n=document.querySelector("menu-list"),e=function(){var n,e=(n=M().mark((function n(){var e;return M().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.searchMenu(t.value);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),o(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})),function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function c(t){L(i,r,o,c,u,"next",t)}function u(t){L(i,r,o,c,u,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),r=function(t){n.menus=t},o=function(t){n.renderError(t)};t.clickEvent=e}))},705:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(n,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,(void 0,i=function(n,e){if("object"!==t(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}function e(t){var n="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return r(t,arguments,c(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,t)},e(t)}function r(t,n,e){return r=o()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&i(o,e.prototype),o},r.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var u=function(e){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(s,e);var r,u,a,l,f=(a=s,l=o(),function(){var n,e=c(a);if(l){var r=c(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(this,n)});function s(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s),(t=f.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=s,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n      <style>\n        * {\n          margin: 0;\n          padding: 0;\n          box-sizing: border-box;\n        }\n        :host {\n          display: block;\n          padding: 16px;\n          width: 100%;\n          background-color: #952323;\n          color: #f9f3e0;\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n          text-align: center;\n        }\n      </style>\n      \n      <h2>Meal Menu</h2>\n      <p>Your Daily Recipe</p>"}}])&&n(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),s}(e(HTMLElement));customElements.define("app-bar",u)},869:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(n,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,(void 0,i=function(n,e){if("object"!==t(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}function e(t){var n="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return r(t,arguments,c(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,t)},e(t)}function r(t,n,e){return r=o()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&i(o,e.prototype),o},r.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var u=function(e){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(s,e);var r,u,a,l,f=(a=s,l=o(),function(){var n,e=c(a);if(l){var r=c(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(this,n)});function s(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s),(t=f.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=s,(u=[{key:"menu",set:function(t){this._menu=t,this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n\n    <style>\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    :host {\n      display: block;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n      border-radius: 10px;\n      overflow: hidden;\n      transition: transform 0.3s ease;\n      position: relative;\n    }\n    :host(:hover) {\n      transform: scale(1.05);\n      z-index: 1;\n    }\n    .gambar {\n      width: 100%;\n      max-height: 300px;\n      object-fit: cover;\n      object-position: center;\n    }\n    .menu-info {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.7);\n      color: #fff;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      opacity: 0;\n      transition: opacity 0.3s ease;\n    }\n    :host(:hover) .menu-info {\n      opacity: 1;\n    }\n    .menu-info h2 {\n      margin: 40px 0 5px 0;\n    }\n    .menu-info p {\n      margin: 5px 0;\n      text-align: center;\n      padding: 0 10px;\n    }\n\n    .ingredients {\n      max-height: 300px;\n      overflow: auto;\n      font-size: 16px;\n    }\n    \n    .ingredients::-webkit-scrollbar {\n      width: 12px; \n    }\n    \n    .ingredients::-webkit-scrollbar-thumb {\n      background-color: #888;\n      border-radius: 6px; \n    }\n    \n    .ingredients::-webkit-scrollbar-thumb:hover {\n      background-color: #555; \n    }\n\n    .search-button {\n      cursor: pointer;\n      padding: 16px;\n      background-color: #BC1823;\n      color: white;\n      border: 0;\n      text-transform: uppercase;\n      border-radius: 25px;\n      margin-top: 16px; \n    }\n  \n\n    /* Media Query untuk layar besar */\n    @media screen and (min-width: 768px) {\n      .menu-info h2 {\n        font-size: 24px; \n        margin: 30px 0 5px 0;\n      }\n      .menu-info p {\n        font-size: 14px; \n      }\n    }\n\n    /* Media Query untuk layar kecil */\n    @media screen and (max-width: 550px) {\n      .menu-info h2 {\n        margin: 20px 0 5px 0;\n        font-size: 18px;\n      }\n      .menu-info p {\n        padding: 0 5px;\n        font-size: 14px;\n      }\n    }\n    </style>\n\n    <div class="menu-item">\n    <img class="gambar" src="'.concat(this._menu.strMealThumb,'" alt="Gambar">\n    <div class="menu-info">\n      <h2>').concat(this._menu.strMeal,"</h2>\n      <p>Kategori: ").concat(this._menu.strCategory,'</p>\n      <p>Bahan-bahan:</p>\n      <div class="ingredients">\n        ').concat(this.renderIngredients(),'\n        </div>\n        <button class="search-button">Beli Resep Lengkap</button>\n      </div>\n  </div>  \n    ')}},{key:"renderIngredients",value:function(){for(var t="",n=1;n<=20;n++){var e=this._menu["strIngredient"+n];e&&(t+="<li>".concat(e," - ").concat(this._menu["strMeasure"+n],"</li>"))}return t}}])&&n(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),s}(e(HTMLElement));customElements.define("menu-item",u)},998:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(n,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,(void 0,i=function(n,e){if("object"!==t(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var o=r.call(n,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}function e(t){var n="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return r(t,arguments,c(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,t)},e(t)}function r(t,n,e){return r=o()?Reflect.construct.bind():function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&i(o,e.prototype),o},r.apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},i(t,n)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}var u=function(e){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&i(t,n)}(s,e);var r,u,a,l,f=(a=s,l=o(),function(){var n,e=c(a);if(l){var r=c(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(this,n)});function s(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s),(t=f.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=s,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(t){this._clickEvent=t,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n      <style>\n        .search-container {\n          max-width: 800px;\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n          padding: 10px;\n          border-radius: 50px;\n          display: flex;\n          position: sticky;\n          top: 10px;\n          background-color: #f7f7f7;\n          z-index: 2;\n        }\n        \n        .search-container > input {\n          width: 70%;\n          padding: 16px;\n          border: 0;\n          border-radius: 50px;\n          font-weight: bold;\n          background-color: #f7f7f7;\n        }\n        \n        .search-container > input:focus {\n          outline: 0;\n        }\n        \n        .search-container > input:focus::placeholder {\n          font-weight: bold;\n        }\n        \n        .search-container > input::placeholder {\n          color: #BC1823;\n          font-weight: normal;\n        }\n        \n        .search-container > button {\n          width: 23%;\n          cursor: pointer;\n          margin-left: auto;\n          padding: 16px;\n          background-color: #BC1823;\n          color: white;\n          border: 0;\n          text-transform: uppercase;\n          border-radius: 25px;\n        }\n        \n        @media screen and (max-width: 550px) {\n          .search-container {\n            flex-direction: column;\n            position: static;\n          }\n        \n          .search-container > input {\n            width: 100%;\n            margin-bottom: 12px;\n          }\n        \n          .search-container > button {\n            width: 100%;\n          }\n        }      \n        </style>\n      \n        <div id="search-container" class="search-container">\n        <input placeholder="Cari Menu Makanan" id="searchElement" type="search">\n        <button id="searchButtonElement" type="button">Search</button>\n        </div>\n      ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}}])&&n(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),s}(e(HTMLElement));customElements.define("search-bar",u)},890:(t,n,e)=>{"use strict";e.d(n,{Z:()=>u});var r=e(81),o=e.n(r),i=e(645),c=e.n(i)()(o());c.push([t.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n\n}\n\nbody {\n  background-color: #F2E8C6;\n}\n\nmain {\n  width: 90%;\n  max-width: 800px;\n  margin: 32px auto;\n}\n\nmenu-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  margin-top: 32px;\n  width: 100%;\n  padding: 16px;\n}",""]);const u=c}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,t=[],r.O=(n,e,o,i)=>{if(!e){var c=1/0;for(f=0;f<t.length;f++){for(var[e,o,i]=t[f],u=!0,a=0;a<e.length;a++)(!1&i||c>=i)&&Object.keys(r.O).every((t=>r.O[t](e[a])))?e.splice(a--,1):(u=!1,i<c&&(c=i));if(u){t.splice(f--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[e,o,i]},r.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return r.d(n,{a:n}),n},r.d=(t,n)=>{for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t={179:0};r.O.j=n=>0===t[n];var n=(n,e)=>{var o,i,[c,u,a]=e,l=0;if(c.some((n=>0!==t[n]))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(a)var f=a(r)}for(n&&n(e);l<c.length;l++)i=c[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(f)},e=self.webpackChunkmealmenu=self.webpackChunkmealmenu||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))})(),r.nc=void 0;var o=r.O(void 0,[631],(()=>r(984)));o=r.O(o)})();