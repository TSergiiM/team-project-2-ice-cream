parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/products/icecream.png":[["icecream.3b4c04d9.png","yZIY"],"yZIY"],"./../images/products/icecream@2x.png":[["icecream@2x.4bee3a7f.png","VAri"],"VAri"],"./../images/products/icecoffe.png":[["icecoffe.cdd2dd86.png","hN0Q"],"hN0Q"],"./../images/products/icecoffe@2x.png":[["icecoffe@2x.295628bc.png","Y9th"],"Y9th"],"./../images/products/milkshakes.png":[["milkshakes.463ec847.png","zc84"],"zc84"],"./../images/products/milkshakes@2x.png":[["milkshakes@2x.46a76b69.png","SVT5"],"SVT5"],"./../images/about/aboutmilk.png":[["aboutmilk.548448c4.png","yGmA"],"yGmA"],"./../images/about/aboutmilk@2x.png":[["aboutmilk@2x.69d726d8.png","XD64"],"XD64"],"./../images/advantages/advantagesicon1.png":[["advantagesicon1.28b56f7e.png","LhHr"],"LhHr"],"./../images/advantages/advantagesicon2.png":[["advantagesicon2.7b20a05f.png","NLQv"],"NLQv"],"./../images/advantages/advantagesicon3.png":[["advantagesicon3.c76fbf7b.png","Otwn"],"Otwn"],"./../images/contacts/contacts.png":[["contacts.fba54d96.png","MuKB"],"MuKB"],"./../images/contacts/contacts@2x.png":[["contacts@2x.c6fbdfea.png","Yg5P"],"Yg5P"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),c=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",c),o.addEventListener("click",c),window.matchMedia("(min-width: 1280px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/team-project-2-ice-cream/src.1596b4bf.js.map