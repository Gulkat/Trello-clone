parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WAnK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.swiperMode=void 0;var e=function(){var e=Swiper,i=!1,s=window.matchMedia("(min-width: 1025px)"),t=window.matchMedia("(min-width: 769px) and (max-width: 1024px)");s.matches?t.matches?($(".swiper").addClass("disabled"),i=!1):s.matches&&($(".swiper").addClass("disabled"),i=!1):i||(i=!0,e=new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},sliderPerView:1,breakpoints:{320:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:20},992:{slidesPerView:3,spaceBetween:30}}}),document.querySelectorAll(".card__todo").forEach(function(i){i.addEventListener("touchmove",function(i){e.slideNext(4e3,!1)})}));return e};exports.swiperMode=e;
},{}],"IgD5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createTodo=void 0;var e=function(e,t,a,d,c){var r=document.createElement("div");r.className="card__todo";var o=document.createElement("div");o.className="card_top";var n=document.createElement("h3");n.className="card__todo-title title4";var m=document.createTextNode(e),s=document.createElement("div"),p=(new Date).toLocaleTimeString();s.className="card__todo-title";var l=document.createElement("div");l.className="todo-description";var i=document.createTextNode(t);r.append(o),o.append(n),n.append(m),o.append(s),s.append(p),l.append(i),r.append(l);var u=document.createElement("div");u.className="card_bottom";var v=document.createElement("div");v.className="user";var _=document.createElement("img");_.className="card__todo-author";var N=document.createAttribute("src");N.value=a,_.setAttributeNode(N);var E=document.createElement("p"),b=document.createTextNode(d);E.className="todo__user-name";var x=document.createElement("div");x.className="card__todo-btns";var T=document.createElement("a");T.className="card__todo-edit";var h=document.createElement("i");h.className="edit icon",h.dataset.type="edit-card";var y=document.createElement("a");y.className="card__todo-delete";var A=document.createElement("i");return A.className="trash alternate icon",A.dataset.type="delete-one",r.append(u),u.append(v),v.append(_),v.append(E),u.append(x),x.append(T),x.append(y),T.append(h),y.append(A),E.append(b),r.dataset.trelloId=c,r.setAttribute("id","todo-id"),r};exports.createTodo=e;
},{}],"O30v":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}r.wrap=f;var h={};function p(){}function v(){}function d(){}var m={};s(m,a,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(j([])));g&&g!==n&&o.call(g,a)&&(m=g);var w=d.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function x(e,r){var n;this._invoke=function(i,a){function c(){return new r(function(n,c){!function n(i,a,c,u){var s=l(e[i],e,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):r.resolve(h).then(function(t){f.value=t,c(f)},function(t){return n("throw",t,c,u)})}u(s.arg)}(i,a,n,c)})}return n=n?n.then(c,c):c()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:A}}function A(){return{value:void 0,done:!0}}return v.prototype=d,s(w,"constructor",d),s(d,"constructor",v),v.displayName=s(d,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,c,function(){return this}),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},b(w),s(w,u,"Generator"),s(w,a,function(){return this}),s(w,"toString",function(){return"[object Generator]"}),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.userName=exports.userAvatarEdit=exports.userAvatar=exports.randomNum=void 0;var o=Math.floor(6*Math.random())+1;exports.randomNum=o;var i=function(){var t=n(e().mark(function t(){var r;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return r=t.sent,t.next=5,r.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();exports.userName=i;var a=function(t){var e=document.getElementById("menu"),r=document.createElement("div");r.className="item";var n=document.createAttribute("data-value");r.setAttributeNode(n);var o=document.createElement("img");o.className="ui mini avatar image";var i=document.createAttribute("src");return i.value="https://avatars.dicebear.com/api/bottts/".concat(t,".svg"),o.setAttributeNode(i),r.append(o),e.append(r),r};exports.userAvatar=a;var c=function(t){var e=document.getElementById("menu-edit"),r=document.createElement("div");r.className="item";var n=document.createAttribute("data-value");r.setAttributeNode(n);var o=document.createElement("img");o.className="ui mini avatar image";var i=document.createAttribute("src");return i.value="https://avatars.dicebear.com/api/bottts/".concat(t,".svg"),o.setAttributeNode(i),r.append(o),e.append(r),r};exports.userAvatarEdit=c;
},{}],"d6sW":[function(require,module,exports) {
"use strict";var e=require("./responsive.js"),t=require("./createCard.js"),o=require("./usersGenerate.js");function r(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=a(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,l=!0,i=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){i=!0,d=e},f:function(){try{l||null==o.return||o.return()}finally{if(i)throw d}}}}function n(e){return i(e)||l(e)||a(e)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"==typeof e)return c(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(e,t):void 0}}function l(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function i(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}window.addEventListener("load",function(){(0,e.swiperMode)()}),window.addEventListener("resize",function(){(0,e.swiperMode)()});for(var u=0;u<6;u++)(0,o.userAvatar)(u),(0,o.userAvatarEdit)(u);var s=document.getElementById("menu").children,m=document.getElementById("menu-edit").children;(0,o.userName)().then(function(e){for(var t,o=e.map(function(e){return e.name}),r=0;r<s.length;r++)(t=o[r].split(" ").join("_")).includes(".")&&(t=t.split(".").join("_")),s[r].dataset.value=t,m[r].dataset.value=t,s[r].append(o[r]),m[r].append(o[r])});var f={getDataByKey:function(e){return null!==localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]},pushDataByKey:function(e,t){var o=this.getDataByKey(e);o=[].concat(n(o),[t]),localStorage.setItem(e,JSON.stringify(o))}},y=[],p=document.querySelector(".dashboard__cards-inProgress"),v=document.querySelector(".dashboard__cards-todo"),g=document.querySelector(".dashboard__cards-done"),h=function(){var e=f.getDataByKey("cards");e&&(y=[].concat(n(y),n(e.map(function(e){return new q(e.todoTitle,e.todoDescription,e.todoImg,e.todoUser,e.todoId,e.todoColumn)}))));var o,d=r(e);try{for(d.s();!(o=d.n()).done;){var a=o.value;+a.todoColumn==+v.dataset.columnId?v.append((0,t.createTodo)(a.todoTitle,a.todoDescription,a.todoImg,a.todoUser,a.todoId,a.todoColumn)):+a.todoColumn==+p.dataset.columnId?p.append((0,t.createTodo)(a.todoTitle,a.todoDescription,a.todoImg,a.todoUser,a.todoId,a.todoColumn)):+a.todoColumn==+g.dataset.columnId&&g.append((0,t.createTodo)(a.todoTitle,a.todoDescription,a.todoImg,a.todoUser,a.todoId,a.todoColumn))}}catch(l){d.e(l)}finally{d.f()}},_=document.querySelector(".dashboard__cards-todo"),I=document.querySelector(".dashboard__cards-inProgress"),S=document.querySelector(".dashboard__cards-done"),b=document.getElementById("root"),w=dragula([_,I,S]);w.on("drop",function(e,t,o,n){t===I&&t.children.length>=6&&$(".ui.modal.pop-up__inprogress").modal({blurring:!0},{observeChanges:!0}).modal("show");var d,a=r(y);try{for(a.s();!(d=a.n()).done;){var l=d.value;+l.todoId==+e.dataset.trelloId&&(l.todoColumn=t.dataset.columnId)}}catch(i){a.e(i)}finally{a.f()}localStorage.setItem("cards",JSON.stringify(y))});var C=document.querySelectorAll(".search__box");C.forEach(function(e){e.addEventListener("keyup",function(e){var t=e.target,o=document.querySelectorAll(".card__todo"),n=t.value;n=n.toLowerCase();var d,a=r(o);try{for(a.s();!(d=a.n()).done;){var l=d.value;l.textContent.toLowerCase().includes(n)?l.style.display="block":l.style.display="none"}}catch(i){a.e(i)}finally{a.f()}})});var q=function(e,t,o,r,n,d){this.todoTitle=e,this.todoDescription=t,this.todoImg=o,this.todoUser=r,this.todoId=n,this.todoColumn=d},E=document.getElementById("approveBtn"),B=document.getElementById("todoCase"),x=document.getElementById("inputTitle"),A=document.getElementById("inputDescription"),D=document.getElementById("btn-add");D.addEventListener("click",function(){x.value="",A.value="",$("#modal_add").modal({blurring:!0},{allowMultiple:!0}).modal("show").modal({onApprove:function(){return $("#form-add").submit(),!1}});var e={onSuccess:function(){$(".modal").modal("hide")}};$("#form-add").form(e),$(".ui.dropdown").dropdown("restore defaults")}),E.addEventListener("click",function(){if(""===x.value&&""===A.value)$("#form-add").form({fields:{title:"empty",description:"empty"}});else if(""===x.value)$("#form-add").form({fields:{title:"empty"}});else if(""===A.value)$("#form-add").form({fields:{description:"empty"}});else{var e=$("#selection").dropdown("get value").split(" ").join("_");e.includes(".")&&(e=e.split(".").join("_"));var o=document.querySelector("[data-value = ".concat(e,"]")),r=o.firstChild.src,n=o.textContent,d=Date.now(),a=new q(x.value,document.getElementById("inputDescription").value,r,n,d,"1");B.append((0,t.createTodo)(x.value,document.getElementById("inputDescription").value,r,n,d,"1")),y.push(a),f.pushDataByKey("cards",a)}}),h();var T=document.querySelector(".btn__delete"),j=document.querySelector(".btn--dark"),L=document.querySelector(".dashboard__cards-done");b.addEventListener("click",function(e){if("delete-one"===e.target.dataset.type){var t=document.getElementById("todo-id"),o=e.target.closest(".card__todo");y.length?(y=y.filter(function(e){return+e.todoId!=+o.dataset.trelloId}),o.remove(),localStorage.setItem("cards",JSON.stringify(y))):(localStorage.clear(),t.remove())}if("edit-card"===e.target.dataset.type){var n=document.getElementById("title-edit"),d=document.getElementById("desc-edit"),a=document.getElementById("editBtn"),l=e.target.closest(".card__todo"),i=l.querySelector(".todo__user-name").textContent,c=i.split(" ").join("_");c.includes(".")&&(c=c.split(".").join("_"));var u=document.querySelector("[data-value = ".concat(c,"]")).firstChild.src;$("#modal_edit").modal({blurring:!0},{allowMultiple:!0}).modal("show").modal({onApprove:function(){return $("#form-edit").submit(),!1}});var s={onSuccess:function(){$("#modal_edit").modal("hide")}};$("#form-edit").form(s),$(".ui.dropdown").dropdown("set text",'<img class="ui mini avatar image" src= '.concat(u,"> ").concat(i));var m=document.querySelector("[data-value = ".concat(c,"]")),f=m;$("#dropdown-edit").dropdown({"set value":"".concat(i),onChange:function(e){return f=e,console.log(f),f}}),n.value=l.querySelector(".card__todo-title").textContent,d.value=l.querySelector(".todo-description").textContent;var p=l.querySelector(".card__todo-author"),v=l.querySelector(".todo__user-name");a.addEventListener("click",function(){if(""===n.value&&""===d.value)$("#form-edit").form({fields:{title:"empty",description:"empty"}});else if(""===n.value)$("#form-edit").form({fields:{title:"empty"}});else if(""===d.value)$("#form-edit").form({fields:{description:"empty"}});else{if(l.querySelector(".card__todo-title").textContent=n.value,l.querySelector(".todo-description").textContent=d.value,f!==m){var e=document.querySelector("[data-value = ".concat(f,"]"));p.src=e.querySelector(".ui.mini.avatar.image").src,v.textContent=e.textContent}else p.src=m.querySelector(".ui.mini.avatar.image").src,v.textContent=m.textContent;var t,o=r(y);try{for(o.s();!(t=o.n()).done;){var a=t.value;+a.todoId==+l.dataset.trelloId&&(a.todoTitle=n.value,a.todoDescription=d.value,a.todoImg=p.src,a.todoUser=v.textContent)}}catch(i){o.e(i)}finally{o.f()}localStorage.setItem("cards",JSON.stringify(y))}})}}),j.addEventListener("click",function(e){$(".ui.modal.pop-up__delete-all").modal({blurring:!0}).modal("show"),y=y.filter(function(e){return+e.todoColumn!=+g.dataset.columnId}),L.innerHTML="",localStorage.setItem("cards",JSON.stringify(y))}),T.addEventListener("click",function(e){if(!S.children.length)return S;$(".ui.modal.pop-up__delete-all").modal({blurring:!0}).modal("show")});
},{"./responsive.js":"WAnK","./createCard.js":"IgD5","./usersGenerate.js":"O30v"}]},{},["d6sW"], null)