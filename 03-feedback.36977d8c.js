!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var r,i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),m=Object.prototype.toString,b=Math.max,y=Math.min,g=function(){return v.Date.now()};function p(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){return c=e,f=setTimeout(w,t),d?m(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=g();if(S(e))return T(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?y(n,u-(e-c)):n}(e))}function T(e){return f=void 0,v&&r?m(e):(r=i=void 0,a)}function h(){var e=g(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return p(l);if(s)return f=setTimeout(w,t),m(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=O(t)||0,j(n)&&(d=!!n.leading,u=(s="maxWait"in n)?b(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},h.flush=function(){return void 0===f?a:T(g())},h}function j(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=f.test(t);return r||l.test(t)?c(t.slice(2),r?2:8):a.test(t)?NaN:+t}r=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var S,w="feedback-form-state",T=document.querySelector(".feedback-form"),h=document.querySelector('[name="email"]'),N=document.querySelector('[name="message"]');!function(){var e=localStorage.getItem(w),t=JSON.parse(e);if(!t)return;h.value=t.email,N.value=t.message}();var x=(S={},e(n)(S,h.name,h.value),e(n)(S,N.name,N.value),S);localStorage.setItem(w,JSON.stringify(x)),T.addEventListener("input",e(r)((function(e){x[h.name]=h.value,x[N.name]=N.value,localStorage.setItem(w,JSON.stringify(x))}),500)),T.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(x),localStorage.removeItem(w)}))}();
//# sourceMappingURL=03-feedback.36977d8c.js.map