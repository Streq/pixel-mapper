!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=1)}([function(t,e,r){"use strict";var n=r(4);function o(){}var i=null,s={};function a(t){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==o&&d(t,this)}function u(t,e){for(;3===t._83;)t=t._18;if(a._47&&a._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);!function(t,e){n(function(){var r=1===t._83?e.onFulfilled:e.onRejected;if(null!==r){var n=function(t,e){try{return t(e)}catch(t){return i=t,s}}(r,t._18);n===s?c(e.promise,i):f(e.promise,n)}else 1===t._83?f(e.promise,t._18):c(e.promise,t._18)})}(t,e)}function f(t,e){if(e===t)return c(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"===typeof e||"function"===typeof e)){var r=function(t){try{return t.then}catch(t){return i=t,s}}(e);if(r===s)return c(t,i);if(r===t.then&&e instanceof a)return t._83=3,t._18=e,void h(t);if("function"===typeof r)return void d(r.bind(e),t)}t._83=1,t._18=e,h(t)}function c(t,e){t._83=2,t._18=e,a._71&&a._71(t,e),h(t)}function h(t){if(1===t._75&&(u(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)u(t,t._38[e]);t._38=null}}function l(t,e,r){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=r}function d(t,e){var r=!1,n=function(t,e,r){try{t(e,r)}catch(t){return i=t,s}}(t,function(t){r||(r=!0,f(e,t))},function(t){r||(r=!0,c(e,t))});r||n!==s||(r=!0,c(e,i))}t.exports=a,a._47=null,a._71=null,a._44=o,a.prototype.then=function(t,e){if(this.constructor!==a)return function(t,e,r){return new t.constructor(function(n,i){var s=new a(o);s.then(n,i),u(t,new l(e,r,s))})}(this,t,e);var r=new a(o);return u(this,new l(t,e,r)),r}},function(t,e,r){r(2),t.exports=r(9)},function(t,e,r){"use strict";"undefined"===typeof Promise&&(r(3).enable(),window.Promise=r(6)),r(7),Object.assign=r(8)},function(t,e,r){"use strict";var n=r(0),o=[ReferenceError,TypeError,RangeError],i=!1;function s(){i=!1,n._47=null,n._71=null}function a(t,e){return e.some(function(e){return t instanceof e})}e.disable=s,e.enable=function(t){t=t||{},i&&s();i=!0;var e=0,r=0,u={};function f(e){(t.allRejections||a(u[e].error,t.whitelist||o))&&(u[e].displayId=r++,t.onUnhandled?(u[e].logged=!0,t.onUnhandled(u[e].displayId,u[e].error)):(u[e].logged=!0,function(t,e){console.warn("Possible Unhandled Promise Rejection (id: "+t+"):"),((e&&(e.stack||e))+"").split("\n").forEach(function(t){console.warn("  "+t)})}(u[e].displayId,u[e].error)))}n._47=function(e){var r;2===e._83&&u[e._56]&&(u[e._56].logged?(r=e._56,u[r].logged&&(t.onHandled?t.onHandled(u[r].displayId,u[r].error):u[r].onUnhandled||(console.warn("Promise Rejection Handled (id: "+u[r].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+u[r].displayId+".")))):clearTimeout(u[e._56].timeout),delete u[e._56])},n._71=function(t,r){0===t._75&&(t._56=e++,u[t._56]={displayId:null,error:r,timeout:setTimeout(f.bind(null,t._56),a(r,o)?100:2e3),logged:!1})}}},function(t,e,r){"use strict";(function(e){function r(t){o.length||(n(),!0),o[o.length]=t}t.exports=r;var n,o=[],i=0,s=1024;function a(){for(;i<o.length;){var t=i;if(i+=1,o[t].call(),i>s){for(var e=0,r=o.length-i;e<r;e++)o[e]=o[e+i];o.length-=i,i=0}}o.length=0,i=0,!1}var u,f,c,h="undefined"!==typeof e?e:self,l=h.MutationObserver||h.WebKitMutationObserver;function d(t){return function(){var e=setTimeout(n,0),r=setInterval(n,50);function n(){clearTimeout(e),clearInterval(r),t()}}}"function"===typeof l?(u=1,f=new l(a),c=document.createTextNode(""),f.observe(c,{characterData:!0}),n=function(){u=-u,c.data=u}):n=d(a),r.requestFlush=n,r.makeRequestCallFromTimer=d}).call(e,r(5))},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";var n=r(0);t.exports=n;var o=c(!0),i=c(!1),s=c(null),a=c(void 0),u=c(0),f=c("");function c(t){var e=new n(n._44);return e._83=1,e._18=t,e}n.resolve=function(t){if(t instanceof n)return t;if(null===t)return s;if(void 0===t)return a;if(!0===t)return o;if(!1===t)return i;if(0===t)return u;if(""===t)return f;if("object"===typeof t||"function"===typeof t)try{var e=t.then;if("function"===typeof e)return new n(e.bind(t))}catch(t){return new n(function(e,r){r(t)})}return c(t)},n.all=function(t){var e=Array.prototype.slice.call(t);return new n(function(t,r){if(0===e.length)return t([]);var o=e.length;function i(s,a){if(a&&("object"===typeof a||"function"===typeof a)){if(a instanceof n&&a.then===n.prototype.then){for(;3===a._83;)a=a._18;return 1===a._83?i(s,a._18):(2===a._83&&r(a._18),void a.then(function(t){i(s,t)},r))}var u=a.then;if("function"===typeof u)return void new n(u.bind(a)).then(function(t){i(s,t)},r)}e[s]=a,0===--o&&t(e)}for(var s=0;s<e.length;s++)i(s,e[s])})},n.reject=function(t){return new n(function(e,r){r(t)})},n.race=function(t){return new n(function(e,r){t.forEach(function(t){n.resolve(t).then(e,r)})})},n.prototype.catch=function(t){return this.then(null,t)}},function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};c.prototype.append=function(t,e){t=a(t),e=u(e);var r=this.map[t];this.map[t]=r?r+","+e:e},c.prototype.delete=function(t){delete this.map[a(t)]},c.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},c.prototype.set=function(t,e){this.map[a(t)]=u(e)},c.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},c.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),f(t)},c.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),f(t)},c.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),f(t)},e.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},y.call(b.prototype),y.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var s=[301,302,303,307,308];m.redirect=function(t,e){if(-1===s.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.Headers=c,t.Request=b,t.Response=m,t.fetch=function(t,r){return new Promise(function(n,o){var i=new b(t,r),s=new XMLHttpRequest;s.onload=function(){var t,e,r={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new c,t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;n(new m(o,r))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials&&(s.withCredentials=!0),"responseType"in s&&e.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send("undefined"===typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function a(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!==typeof t&&(t=String(t)),t}function f(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function c(t){this.map={},t instanceof c?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function h(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function d(t){var e=new FileReader,r=l(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t))this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,r,n=h(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=l(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}function b(t,e){var r,n,o=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),i.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function m(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!==typeof self?self:this)},function(t,e,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,s,a=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),u=1;u<arguments.length;u++){for(var f in r=Object(arguments[u]))o.call(r,f)&&(a[f]=r[f]);if(n){s=n(r);for(var c=0;c<s.length;c++)i.call(r,s[c])&&(a[s[c]]=r[s[c]])}}return a}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(10),o=(r.n(n),r(11)),i=r(12),s=r(13),a=r(14),u=document.querySelector("[app-obj=output]"),f=document.querySelector("[app-obj=mappings]"),c=document.querySelector("[app-obj=img]");window.addEventListener("paste",function(t){var e=Object(o.a)(t).then(function(t){return Object(i.a)(t)});e.then(function(t){return Object(s.a)(t)}).then(function(t){return Object(a.a)(t,function(){try{return new Map(JSON.parse(f.value))}catch(t){return new Map([])}}())}).then(function(t){return e=JSON.stringify(t),void(u.value=e);var e}),e.then(function(t){return function(t){var e=c.getContext("2d");c.width=t.width,c.height=t.height,e.drawImage(t,0,0)}(t)})},!1)},function(t,e){},function(t,e,r){"use strict";e.a=function(t){return new Promise(function(e,r){if(!t.clipboardData)return r(void 0);var n=t.clipboardData.items;if(!n)return r(void 0);for(var o=0;o<n.length;o++)if(-1!=n[o].type.indexOf("image")){var i=n[o].getAsFile();return e(i)}})}},function(t,e,r){"use strict";e.a=function(t){return new Promise(function(e){if(t){var r=new Image;r.onload=function(){e(r)};var n=window.URL||window.webkitURL;r.src=n.createObjectURL(t)}})}},function(t,e,r){"use strict";e.a=function(t){var e=document.createElement("canvas"),r=e.getContext("2d");return e.width=t.width,e.height=t.height,r.drawImage(t,0,0),r.getImageData(0,0,e.width,e.height)}},function(t,e,r){"use strict";e.a=function(t,e){var r=[];return Object(n.a)(t,function(t){r.push(e.get(o.a(t)))}),{width:t.width,height:t.height,data:r}};var n=r(15),o=r(16)},function(t,e,r){"use strict";e.a=function(t,e){for(var r=0,n=t.data,o=t.width,i=n.length/4;r<i;++r){var s={r:n[4*r+0],g:n[4*r+1],b:n[4*r+2],a:n[4*r+3],x:r%o,y:Math.trunc(r/o)};e(s)}}},function(t,e,r){"use strict";e.a=function(t){return"#"+function(t,e,r){return(e.repeat(r)+t).slice(-r)}(function(t){return 0+t.r*Math.pow(256,3)+t.g*Math.pow(256,2)+t.b*Math.pow(256,1)+t.a*Math.pow(256,0)}(t).toString(16),"0",8)}}]);
//# sourceMappingURL=main.33e22b89.js.map