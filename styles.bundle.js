webpackJsonp([2],{

/***/ "../../../../../src/assets/fonts/BTitrBold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "BTitrBold.65187b1da7ed3702ba0e.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/BYekan.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "BYekan.7449863a7fc414e1f4d5.eot";

/***/ }),

/***/ "../../../../../src/assets/fonts/BYekan.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "BYekan.0fddb75cc4bafe0b40c3.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/BYekan.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "BYekan.d7b709263103c998c712.woff";

/***/ }),

/***/ "../../../../../src/assets/fonts/irsansans.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "irsansans.e20972aee7112921a84f.ttf";

/***/ }),

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[\"D:/Project/Geno/Website/src/src/assets/scss\"]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--10-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--10-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--10-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--10-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[\"D:/Project/Geno/Website/src/src/assets/scss\"]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Yekan;\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/BYekan.eot") + "), url(" + __webpack_require__("../../../../../src/assets/fonts/BYekan.woff") + ") format(\"woff\"), url(" + __webpack_require__("../../../../../src/assets/fonts/BYekan.ttf") + ") format(\"truetype\"); }\n\n@font-face {\n  font-family: Yas;\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/irsansans.ttf") + ");\n  font-weight: 400; }\n\n@font-face {\n  font-family: Titr;\n  src: url(" + __webpack_require__("../../../../../src/assets/fonts/BTitrBold.ttf") + ");\n  font-weight: 400; }\n\n* {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100%; }\n\nbody {\n  font-family: Yas;\n  font-size: 14px; }\n\nbutton {\n  font-family: inherit;\n  border: 0; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: Yekan;\n  margin: 0; }\n\nul {\n  margin: 0; }\n\nbutton {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  transition: border-color .3s, color .3s;\n  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1); }\n  button.accent {\n    color: #333;\n    background: #fbb03c; }\n  button.dark {\n    color: #eee;\n    background: #333; }\n  button::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 150%;\n    height: 100%;\n    background: #eee;\n    z-index: -1;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);\n            transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n    transition: opacity .3s, background-color .3s, -webkit-transform .3s;\n    transition: transform .3s, opacity .3s, background-color .3s;\n    transition: transform .3s, opacity .3s, background-color .3s, -webkit-transform .3s; }\n  button:hover, button:focus {\n    outline: none;\n    color: #333;\n    border: 2px solid #fbb03c; }\n    button:hover::after, button:focus::after {\n      background-color: #eee;\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\n              transform: rotate3d(0, 0, 1, 0deg);\n      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1); }\n\n.section-title {\n  border-bottom: 1px solid #dee0df;\n  color: #333;\n  text-align: center;\n  margin: 0 0 5em; }\n  .section-title h1 {\n    font-family: Yekan;\n    font-weight: bold;\n    font-size: 22px;\n    top: 15px;\n    position: relative;\n    display: inline-block;\n    padding: 0 1em; }\n\n.quote {\n  padding: 5em 0;\n  background-size: cover;\n  text-align: center; }\n  .quote blockquote {\n    font-family: Yekan;\n    font-weight: bold;\n    font-size: 3em;\n    margin: 0;\n    text-align: center; }\n  .quote .quote-icon {\n    width: 24px;\n    height: 24px;\n    top: -11px;\n    position: relative;\n    left: 6px; }\n\n/* Large Devices, Wide Screens */\n/* Medium Devices, Desktops */\n/* Small Devices, Tablets */\n@media only screen and (max-width: 768px) {\n  .quote {\n    padding: 4em; }\n    .quote blockquote {\n      font-size: 2.4em; }\n    .quote .quote-icon {\n      width: 18px;\n      height: 18px;\n      top: -11px;\n      position: relative;\n      left: 6px; } }\n\n/* Extra Small Devices, Phones */\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
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

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map