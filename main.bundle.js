webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<geno-header [isExpanded]=\"isHeaderExpand\"></geno-header>\r\n<!-- <div mnFullpage> -->\r\n<geno-head class=\"section  welcome-section\"></geno-head>\r\n<geno-space></geno-space>\r\n<geno-main class=\"section\"></geno-main>\r\n<!-- <geno-phone class=\"section\"></geno-phone> -->\r\n<geno-services class=\"section\"></geno-services>\r\n<geno-driver class=\"section\"></geno-driver>\r\n<geno-join-us></geno-join-us>\r\n<geno-footer class=\"section\"></geno-footer>\r\n<geno-hud class=\"section\"></geno-hud>\r\n<!-- </div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onScroll = function (event) {
        var number = event.srcElement.body.scrollTop;
        // console.log(number);
        if (number === 0) {
            this.isHeaderExpand = false;
        }
        else {
            this.isHeaderExpand = true;
        }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onScroll", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__driver_driver_component__ = __webpack_require__("../../../../../src/app/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__phone_phone_component__ = __webpack_require__("../../../../../src/app/phone/phone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_card_card_component__ = __webpack_require__("../../../../../src/app/services/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hud_hud_component__ = __webpack_require__("../../../../../src/app/hud/hud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__roadmap_roadmap_component__ = __webpack_require__("../../../../../src/app/roadmap/roadmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__head_head_component__ = __webpack_require__("../../../../../src/app/head/head.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__space_space_component__ = __webpack_require__("../../../../../src/app/space/space.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__join_us_join_us_component__ = __webpack_require__("../../../../../src/app/join-us/join-us.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__driver_driver_component__["a" /* DriverComponent */],
            __WEBPACK_IMPORTED_MODULE_8__phone_phone_component__["a" /* PhoneComponent */],
            __WEBPACK_IMPORTED_MODULE_9__services_card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__hud_hud_component__["a" /* HudComponent */],
            __WEBPACK_IMPORTED_MODULE_11__roadmap_roadmap_component__["a" /* RoadmapComponent */],
            __WEBPACK_IMPORTED_MODULE_12__head_head_component__["a" /* HeadComponent */],
            __WEBPACK_IMPORTED_MODULE_13__space_space_component__["a" /* SpaceComponent */],
            __WEBPACK_IMPORTED_MODULE_14__join_us_join_us_component__["a" /* JoinUsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/driver/driver.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section-title\">\n  <h1>پیوستن به ناوگان</h1>\n</div>\n<geno-roadmap></geno-roadmap>\n"

/***/ }),

/***/ "../../../../../src/app/driver/driver.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  text-align: center;\n  background-color: #eee;\n  background: url(\"/assets/images/city.jpg\") center center;\n  background-size: cover;\n  padding: 2em 10% 6em;\n  overflow: hidden; }\n\n.section-title h1 {\n  background: #f7faff; }\n\ngeno-roadmap {\n  padding: 8em 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/driver/driver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DriverComponent = (function () {
    function DriverComponent() {
    }
    DriverComponent.prototype.ngOnInit = function () {
    };
    return DriverComponent;
}());
DriverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-driver',
        template: __webpack_require__("../../../../../src/app/driver/driver.component.html"),
        styles: [__webpack_require__("../../../../../src/app/driver/driver.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DriverComponent);

//# sourceMappingURL=driver.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <ul class=\"left\">\r\n    <li><a href=\"#\">شرایط و قوانین</a></li>\r\n    <li><a href=\"#\">سوالات رایج</a></li>\r\n    <li><a href=\"#\">حریم خصوصی</a></li>\r\n  </ul>\r\n\r\n  <ul class=\"social\">\r\n    <li>\r\n      <a href=\"#\">\r\n        <svg>\r\n          <use xlink:href=\"/assets/svg/social-sprites.svg#telegram\"></use>\r\n        </svg>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\">\r\n        <svg>\r\n          <use xlink:href=\"/assets/svg/social-sprites.svg#instagram\"></use>\r\n        </svg>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#\">\r\n        <svg>\r\n          <use xlink:href=\"/assets/svg/social-sprites.svg#google-plus\"></use>\r\n        </svg>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</footer>\r\n<footer class=\"enamad\">\r\n  <img src=\"/assets/images/enamad.png\" alt=\"enamd\">\r\n  <img src=\"/assets/images/namad.png\" alt=\"samandehi.ir\">\r\n  <p class=\"copy-right\">COPYRIGHT © GENO SOFT.</p>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #333;\n  color: #eee;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1em; }\n  .footer ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    list-style: none;\n    margin: 0 2em;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-family: Yas; }\n    .footer ul li {\n      margin: 20px; }\n    .footer ul.social li {\n      margin: 1em 10px; }\n    .footer ul.social svg {\n      fill: #eee;\n      width: 40px;\n      height: 40px;\n      transition: 500ms fill; }\n      .footer ul.social svg:hover {\n        fill: #fbb03c; }\n\n.enamad {\n  background: #eee;\n  padding: 1em;\n  text-align: center; }\n\n.copy-right {\n  color: #bababa;\n  margin-top: 2em;\n  font-size: small; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/head/head.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"phone-container\">\r\n    <div class=\"phone\">\r\n      <object id=\"phone-outline\" data=\"/assets/svg/iphone-outline_animated.svg\" width=\"100%\" type=\"image/svg+xml\"></object>\r\n      <object id=\"phone\" data=\"/assets/svg/iphone.svg\" width=\"100%\" type=\"image/svg+xml\"></object>\r\n      <div class=\"ui\">\r\n        <svg viewBox=\"0 0 64 64\">\r\n          <circle cy=\"50%\" r=\"50%\" cx=\"50%\" fill=\"#fbb03c\"></circle>\r\n          <!-- <path d=\"M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M32,62C15.432,62,2,48.568,2,32.001\r\n          C2,15.432,15.432,2,32,2c16.568,0,30,13.432,30,30.001C62,48.568,48.568,62,32,62z\"/> -->\r\n          <path d=\"M41.109,30.341l-12-7.989c-0.613-0.408-1.402-0.447-2.053-0.1C26.406,22.599,26,23.275,26,24.013v15.98\r\n          c0,0.737,0.406,1.412,1.057,1.761c0.65,0.348,1.439,0.311,2.053-0.1l12-7.989C41.666,33.294,42,32.67,42,32.003\r\n          C42,31.335,41.666,30.712,41.109,30.341z M38.8,33.422l-9.389,5.786C28.907,39.543,28,39.559,28,39.559s0-0.93,0-1.533V26.007\r\n          c0-0.604,0-1.659,0-1.659s0.907-0.046,1.411,0.287l9.389,6.193c0.457,0.303,0.731,0.688,0.731,1.234\r\n          C39.531,32.607,39.257,33.119,38.8,33.422z\"/>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ribon\">\r\n    <div class=\"about\">\r\n      <div class=\"text\">\r\n        سریع ترین نرم افزار، عملی و قابل اعتماد به سفارش یک تاکسی است. تنها با یک کلیک شما می توانید WIFI در هیئت مدیره، دکمه از راننده مورد علاقه، و بیشتر لذت ببرید. سعی کنید آن را در حال حاضر شروع خود را!\r\n      </div>\r\n\r\n      <div class=\"action\">\r\n        <button class=\"\" type=\"button\" name=\"button\">\r\n          <svg class=\"bazaar\" viewBox=\"0 0 90 30\">\r\n            <path d=\"M22.62,8.62V3.8a1.86,1.86,0,0,1,.55-1.35,1.86,1.86,0,0,1,2.63,0,1.88,1.88,0,0,1,.58,1.3v8.84a.83.83,0,0,0,.19.6.81.81,0,0,0,.6.19h2.93a2,2,0,0,1,1.4.59A1.78,1.78,0,0,1,32,15.34a1.77,1.77,0,0,1-.51,1.27,1.64,1.64,0,0,1-1.23.54c-.71,0-1.4,0-2.08,0s-1.37,0-2,0a3.36,3.36,0,0,1-2.3-1,3.77,3.77,0,0,1-1.18-2.29c0-.11,0-.23,0-.33s0-.21,0-.33V8.62Zm-1.91,3.85v2.74A3.79,3.79,0,0,1,19.62,18a3.65,3.65,0,0,1-2.69,1.11H13.13A1.9,1.9,0,0,1,12,18.64a1.84,1.84,0,0,1-.63-1.08,2.14,2.14,0,0,1,.17-1.25,1.59,1.59,0,0,1,.89-.83,1.45,1.45,0,0,1,.43-.14,2.65,2.65,0,0,1,.43,0q.72,0,1.43,0h1.43a1,1,0,0,0,.67-.17.88.88,0,0,0,.19-.66V9.59a2,2,0,0,1,.39-1.21,1.88,1.88,0,0,1,1-.69,1.85,1.85,0,0,1,2.28,1.8v3ZM15.08,6.68V9.09s0,.79,0,2.37a1.75,1.75,0,0,1-.9,1.61,1.77,1.77,0,0,1-1.83.05,1.84,1.84,0,0,1-.7-.66,2,2,0,0,1-.29-.94V2A2,2,0,0,1,11.68.79a1.72,1.72,0,0,1,1-.69,1.75,1.75,0,0,1,1.64.28,1.85,1.85,0,0,1,.78,1.49V6.68ZM20.71,3.8a1.87,1.87,0,0,1-.55,1.33,1.73,1.73,0,0,1-1.3.57,1.8,1.8,0,0,1-1.33-.55A1.86,1.86,0,0,1,17,3.8a1.87,1.87,0,0,1,.55-1.34,1.73,1.73,0,0,1,1.3-.57,1.8,1.8,0,0,1,1.33.55,1.86,1.86,0,0,1,.55,1.35Zm3.75,15.29a1.86,1.86,0,0,1-.55,1.35,1.76,1.76,0,0,1-1.3.55,1.8,1.8,0,0,1-1.33-.55,1.86,1.86,0,0,1-.55-1.35,1.88,1.88,0,0,1,1.88-1.87,1.77,1.77,0,0,1,1.31.54,1.83,1.83,0,0,1,.53,1.34ZM9.42,5.6a1.77,1.77,0,0,0-.75-1.4,1.74,1.74,0,0,0-1.53-.33,1.88,1.88,0,0,0-1,.68A1.94,1.94,0,0,0,5.7,5.78c0,.81,0,1.62,0,2.45s0,1.65,0,2.48a.78.78,0,0,1-.19.57.81.81,0,0,1-.6.19h-3l-.19,0-.15,0A1.84,1.84,0,0,0,0,13.34a1.9,1.9,0,0,0,.26,1A1.84,1.84,0,0,0,1,15H1L1,15l.07,0,.1.05a2,2,0,0,0,.36.1,2.09,2.09,0,0,0,.39,0,7.16,7.16,0,0,0,.72,0h.72c.45,0,.91,0,1.36,0a11.3,11.3,0,0,0,1.36-.05,3.42,3.42,0,0,0,2.3-1.15,3.55,3.55,0,0,0,1-2.39V5.6Z\"/>\r\n            <path d=\"M43.55,13a2.9,2.9,0,0,1-.73,2,2.44,2.44,0,0,1-1.91.86h-1.4l-.18-1.08h1.18a2.33,2.33,0,0,0,1.31-.36,1.32,1.32,0,0,0,.63-1.15V9.91h1.08Zm0-6a.71.71,0,0,1-.21.52.71.71,0,0,1-.52.21Q42,7.78,42,7t.77-.64Q43.51,6.41,43.51,7Z\"/>\r\n            <path d=\"M46.38,13.22h-1V6.46h1Z\"/>\r\n            <path d=\"M60.53,13.22a2.47,2.47,0,0,1-1.68-.41,1.72,1.72,0,0,1-1,.41H52.28a1.36,1.36,0,0,1-1.1-.54,1.81,1.81,0,0,1-.41-1.18V9.91h1.05v1.45A.89.89,0,0,0,52,12a.85.85,0,0,0,.61.18h4.9a.81.81,0,0,0,.61-.18.93.93,0,0,0,.17-.63V9.91h1.07v1.45q0,.81,1.16.81v1.05ZM54.79,8.15a.57.57,0,0,1-.2.44.68.68,0,0,1-.47.18q-.75,0-.75-.62t.68-.58C54.55,7.57,54.79,7.77,54.79,8.15Zm2,0a.57.57,0,0,1-.2.44.68.68,0,0,1-.47.18q-.75,0-.75-.62t.69-.58Q56.82,7.57,56.82,8.15Z\"/>\r\n            <path d=\"M65,11.56a1.47,1.47,0,0,1-.5,1.18,1.73,1.73,0,0,1-1.21.48H60.16v-1h3.18q.58,0,.58-.79-.82,0-1.86-.1a1.36,1.36,0,0,1-.87-1.44,1.66,1.66,0,0,1,.48-1.24,1.71,1.71,0,0,1,1.25-.47A2,2,0,0,1,65,10.24Zm-1.18-1.17q0-1.17-1-1.17-.7,0-.7.56c0,.3.09.48.26.55a2.53,2.53,0,0,0,.66.05Zm-.15-3.6a.7.7,0,0,1-.22.52.72.72,0,0,1-.52.21q-.77,0-.77-.73t.74-.63Q63.7,6.16,63.7,6.79Z\"/>\r\n            <path d=\"M68.68,13.22a2.71,2.71,0,0,1-1.88-.52,1.43,1.43,0,0,1-.36-1.1v-5H67.5v4.52q0,.73.25.9a2.6,2.6,0,0,0,.94.12Z\"/>\r\n            <path d=\"M72,11.5a1.82,1.82,0,0,1-.4,1.18,1.36,1.36,0,0,1-1.1.53H68.24v-1h1.93a.82.82,0,0,0,.61-.18.92.92,0,0,0,.17-.63V9.91H72Zm-2.2,3.74a.57.57,0,0,1-.2.44.68.68,0,0,1-.47.18.82.82,0,0,1-.5-.16.56.56,0,0,1-.23-.46q0-.59.67-.59T69.8,15.24Zm2,0a.57.57,0,0,1-.2.44.68.68,0,0,1-.47.18.82.82,0,0,1-.5-.16.56.56,0,0,1-.23-.46q0-.59.67-.59T71.82,15.24Z\"/>\r\n            <path d=\"M76.92,13a2.91,2.91,0,0,1-.73,2,2.44,2.44,0,0,1-1.91.85H72.87L72.7,14.8h1.19a2.3,2.3,0,0,0,1.31-.36,1.32,1.32,0,0,0,.63-1.15V9.91h1.08Z\"/>\r\n            <path d=\"M83.06,11.84a1.25,1.25,0,0,1-.47,1,1.66,1.66,0,0,1-1.08.36H78.23l-.15-1h3.35q.59,0,.59-.41a.55.55,0,0,0-.16-.38L79.49,8.85l.71-.72,2.38,2.51A1.71,1.71,0,0,1,83.06,11.84Z\"/>\r\n          </svg>\r\n        </button>\r\n        <button class=\"google-play\" type=\"button\" name=\"button\">\r\n          <svg>\r\n            <use xlink:href=\"/assets/svg/icons.svg#google-play\"></use>\r\n          </svg>\r\n          Google Play\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/head/head.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 700px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: url(\"/assets/images/main.jpg\"); }\n\n.phone-container {\n  z-index: 1;\n  display: inline-block;\n  min-width: 320px;\n  max-width: 320px;\n  width: 320px;\n  position: absolute;\n  left: 20%; }\n  .phone-container .ui {\n    background: #333;\n    position: absolute;\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 183px;\n    bottom: 56px;\n    left: 68px;\n    height: 0;\n    -webkit-animation: open 500ms linear 4s;\n            animation: open 500ms linear 4s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n    .phone-container .ui svg {\n      cursor: pointer;\n      fill: #333;\n      width: 0;\n      -webkit-animation: pop 500ms ease-in-out 4.5s, clickme 3s 5s infinite;\n              animation: pop 500ms ease-in-out 4.5s, clickme 3s 5s infinite; }\n  .phone-container #phone-outline {\n    top: 3px;\n    height: 425px;\n    position: absolute;\n    -webkit-animation: fadeout 1s linear 3s;\n            animation: fadeout 1s linear 3s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n  .phone-container #phone {\n    height: 430px;\n    opacity: 0;\n    -webkit-animation: fadein 1s linear 3s;\n            animation: fadein 1s linear 3s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n\n.ribon {\n  width: 100%;\n  position: absolute;\n  background: #fbb03c;\n  left: -200%;\n  -webkit-animation: 1s ribon cubic-bezier(0.82, 0.15, 0.5, 0.31) 4s;\n          animation: 1s ribon cubic-bezier(0.82, 0.15, 0.5, 0.31) 4s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n  .ribon::after {\n    content: '';\n    width: 100%;\n    height: 99%;\n    position: absolute;\n    left: 100%;\n    top: 0;\n    border-width: 1px 0;\n    border-color: #fbb03c;\n    border-style: solid; }\n\n.about {\n  position: relative;\n  box-sizing: content-box;\n  padding: 2em;\n  min-width: 275px;\n  width: 275px;\n  text-align: right;\n  left: 25%;\n  padding-left: 320px;\n  opacity: 0;\n  -webkit-animation: fadein 1s linear 5s;\n          animation: fadein 1s linear 5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n  .about .text {\n    direction: rtl;\n    text-align: justify; }\n  .about .action {\n    margin-top: 1em; }\n    .about .action button {\n      vertical-align: middle;\n      color: #eee;\n      background: #333;\n      width: 45%;\n      height: 36px;\n      border-radius: 16px; }\n      .about .action button:hover, .about .action button:focus {\n        color: #333;\n        border-color: #333; }\n        .about .action button:hover svg, .about .action button:focus svg {\n          fill: #333; }\n        .about .action button:hover:after, .about .action button:focus:after {\n          background-color: #fbb03c; }\n      .about .action button:first-child {\n        margin-right: 8%; }\n      .about .action button .fa-pull-left {\n        position: relative;\n        top: 3px; }\n\n.bazaar {\n  height: 100%;\n  width: 100%;\n  top: 4px;\n  position: relative;\n  fill: #eee; }\n\n.google-play {\n  padding-left: 40px; }\n  .google-play svg {\n    top: 5px;\n    left: 14px;\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    fill: #eee; }\n  .google-play:hover svg {\n    fill: #333; }\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@-webkit-keyframes open {\n  0% {\n    height: 0; }\n  70% {\n    height: 333px; }\n  100% {\n    height: 323px; } }\n\n@keyframes open {\n  0% {\n    height: 0; }\n  70% {\n    height: 333px; }\n  100% {\n    height: 323px; } }\n\n@-webkit-keyframes pop {\n  0% {\n    width: 0; }\n  70% {\n    width: 74px; }\n  100% {\n    width: 64px; } }\n\n@keyframes pop {\n  0% {\n    width: 0; }\n  70% {\n    width: 74px; }\n  100% {\n    width: 64px; } }\n\n@-webkit-keyframes clickme {\n  0%,\n  60%,\n  100% {\n    width: 64px; }\n  25% {\n    width: 70px; } }\n\n@keyframes clickme {\n  0%,\n  60%,\n  100% {\n    width: 64px; }\n  25% {\n    width: 70px; } }\n\n@-webkit-keyframes ribon {\n  0% {\n    left: -200%; }\n  50% {\n    left: -100%; }\n  99% {\n    left: 0;\n    overflow: visible; }\n  100% {\n    left: 0;\n    overflow: hidden; } }\n\n@keyframes ribon {\n  0% {\n    left: -200%; }\n  50% {\n    left: -100%; }\n  99% {\n    left: 0;\n    overflow: visible; }\n  100% {\n    left: 0;\n    overflow: hidden; } }\n\n/* Small Devices, Tablets */\n@media only screen and (max-width: 768px) {\n  .phone {\n    display: none; }\n  .about {\n    padding-left: 0;\n    -webkit-animation: fadein 1s linear 2s;\n            animation: fadein 1s linear 2s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n  .ribon {\n    -webkit-animation: 1s ribon cubic-bezier(0.82, 0.15, 0.5, 0.31) 1s;\n            animation: 1s ribon cubic-bezier(0.82, 0.15, 0.5, 0.31) 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/head/head.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadComponent = (function () {
    function HeadComponent(elRef) {
        this.elRef = elRef;
    }
    HeadComponent.prototype.ngOnInit = function () {
    };
    HeadComponent.prototype.ngAfterViewInit = function () {
    };
    return HeadComponent;
}());
HeadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-head',
        template: __webpack_require__("../../../../../src/app/head/head.component.html"),
        styles: [__webpack_require__("../../../../../src/app/head/head.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], HeadComponent);

var _a;
//# sourceMappingURL=head.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"header\" [ngClass]=\"{expanded: isExpanded}\">\n  <span class=\"brand\">Geno</span>\n  <nav class=\"navbar\">\n    <a href=\"#\"><span class=\"\"></span> پیوستن به ناوگان</a>\n    <a href=\"#\"><span class=\"\"></span> پنل سازمانی</a>\n    <a href=\"#\"><span class=\"\"></span> آموزش</a>\n  </nav>\n  <div class=\"actions\">\n    <button class=\"accent download\">\n      <svg>\n        <use xlink:href=\"/assets/svg/icons.svg#download\"></use>\n      </svg>\n      دریافت\n    </button>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100; }\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #eee;\n  height: 95px;\n  padding: 0 4em;\n  transition: 500ms height, 500ms padding; }\n  .header .brand {\n    font-size: 28px;\n    transition: 200ms font-size; }\n  .header.expanded {\n    color: #333;\n    height: 65px;\n    background: #fff;\n    border-bottom: 3px solid #fbb03c; }\n    .header.expanded .brand {\n      font-size: 24px; }\n  .header button:hover::after {\n    background: #fff; }\n\n.navbar {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: right;\n  padding-right: 1em; }\n  .navbar a {\n    margin: 0 1em;\n    font-size: 1em; }\n\n.download {\n  height: 40px;\n  width: 150px;\n  border-radius: 25px;\n  padding-left: 25px; }\n  .download svg {\n    fill: #333;\n    top: 4px;\n    left: 18px;\n    width: 28px;\n    height: 28px;\n    position: absolute; }\n\n@media only screen and (max-width: 768px) {\n  .header {\n    color: #333;\n    height: 50px;\n    background: #fff;\n    border-bottom: 3px solid #fbb03c;\n    padding: 0 2em; }\n    .header .brand {\n      font-size: 24px; }\n  .navbar {\n    text-align: center;\n    font-size: .9em; }\n  .download {\n    height: 33px;\n    width: 105px;\n    padding-left: 26px; }\n    .download svg {\n      top: 5px;\n      left: 11px;\n      width: 22px;\n      height: 22px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "isExpanded", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/hud/hud.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/hud/hud.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hud/hud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HudComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HudComponent = (function () {
    function HudComponent() {
    }
    HudComponent.prototype.ngOnInit = function () {
    };
    return HudComponent;
}());
HudComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-hud',
        template: __webpack_require__("../../../../../src/app/hud/hud.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hud/hud.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HudComponent);

//# sourceMappingURL=hud.component.js.map

/***/ }),

/***/ "../../../../../src/app/join-us/join-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"quote\">\n  <blockquote>\n    به خانواده بزرگ گنو بپیوندید\n    <svg class=\"quote-icon\">\n      <use xlink:href=\"/assets/svg/icons.svg#quote\"></use>\n    </svg>\n  </blockquote>\n  <a href=\"#\">اطلاعات بیشتر</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/join-us/join-us.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quote {\n  background: url(\"/assets/images/footer.jpg\") center center no-repeat;\n  background-attachment: fixed;\n  color: #eee; }\n  .quote a {\n    display: inline-block;\n    margin-top: 1em; }\n\n.quote-icon {\n  fill: #eee; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/join-us/join-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinUsComponent = (function () {
    function JoinUsComponent() {
    }
    JoinUsComponent.prototype.ngOnInit = function () {
    };
    return JoinUsComponent;
}());
JoinUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-join-us',
        template: __webpack_require__("../../../../../src/app/join-us/join-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/join-us/join-us.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], JoinUsComponent);

//# sourceMappingURL=join-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngFor=\"let info of infos\">\r\n  <img class=\"background\" src=\"assets/images/{{info.image}}\" alt=\"\">\r\n  <div class=\"info\">\r\n    <div class=\"header\">\r\n      <h1>{{info.title}}</h1>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  overflow: hidden; }\n\nsection {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  position: relative;\n  background: #707070;\n  color: #eee;\n  transition: 1s -webkit-box-flex;\n  transition: 1s flex;\n  transition: 1s flex, 1s -webkit-box-flex, 1s -ms-flex; }\n  section:hover {\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3; }\n\n.background {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.info {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  font-family: Titr;\n  font-size: 1.8em;\n  width: 100%;\n  background: rgba(51, 51, 51, 0.4);\n  padding: 1em 0; }\n\n.header {\n  white-space: nowrap;\n  -webkit-font-smoothing: antialiased;\n  color: inherit;\n  clear: both;\n  display: block;\n  text-align: center;\n  position: relative; }\n\n.sub-header {\n  position: relative;\n  border-right: 2px solid #fbb03c;\n  clear: both;\n  display: block;\n  margin: 10px 0;\n  padding: 1em;\n  font-family: Yas;\n  text-align: right;\n  background: rgba(0, 0, 0, 0.4);\n  max-width: 600px; }\n  .sub-header h2 {\n    font-size: 1em; }\n\n@media only screen and (max-width: 992px) {\n  :host {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap; }\n  section {\n    min-height: 33.334%;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
        this.infos = [
            {
                title: 'سرویس هاس لوکس',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                image: 'lux.jpg',
                state: 'lux'
            },
            {
                title: 'شهر پاک با سرویس های سبز',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                image: 'green.jpg',
                state: 'green'
            },
            {
                title: 'دسترسی 24 ساعته',
                subtitle: 'با استفاده از سرویس های متنوع ما در سطح شهر هر مکان میتوانید دسترسی ۲۴ ساعته داشته باشید',
                image: 'map.jpg',
                state: 'map'
            },
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/phone/phone.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"phone\">\n    <img src=\"/assets/images/iphone.png\" alt=\"\">\n    <div class=\"ui\">\n      <svg>\n        <circle/>\n      </svg>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/phone/phone.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.phone {\n  z-index: 1;\n  position: relative; }\n  .phone img {\n    height: 600px; }\n  .phone .ui {\n    background: #333;\n    height: 395px;\n    position: absolute;\n    width: 221px;\n    top: 102px;\n    left: 49px;\n    z-index: -1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .phone svg {\n    width: 200px;\n    height: 200px; }\n\ncircle {\n  stroke: #fbb03c;\n  stroke-width: 3;\n  fill: #eee;\n  r: 45%;\n  cx: 50%;\n  cy: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/phone/phone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhoneComponent = (function () {
    function PhoneComponent() {
    }
    PhoneComponent.prototype.ngOnInit = function () {
    };
    return PhoneComponent;
}());
PhoneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-phone',
        template: __webpack_require__("../../../../../src/app/phone/phone.component.html"),
        styles: [__webpack_require__("../../../../../src/app/phone/phone.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PhoneComponent);

//# sourceMappingURL=phone.component.js.map

/***/ }),

/***/ "../../../../../src/app/roadmap/roadmap.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let step of steps; index as i\">\n    <span class=\"info\">\n      <span class=\"icon\">\n        <svg>\n          <use attr.xlink:href=\"/assets/svg/roadmap-sprites.svg#{{step.icon}}\"></use>\n        </svg>\n      </span>\n    <span class=\"title\">{{step.title}}</span>\n    </span>\n    <span *ngIf=\"i < steps.length - 1\" class=\"dot\"></span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/roadmap/roadmap.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  text-align: center; }\n\nul {\n  padding: 0;\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  list-style: none;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative; }\n  ul li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n    ul li:last-child {\n      -webkit-box-flex: 0;\n          -ms-flex: 0;\n              flex: 0; }\n    ul li .icon {\n      display: block;\n      border: 2px dashed black;\n      border-radius: 50%;\n      width: 120px;\n      height: 120px;\n      margin: .8em 0;\n      padding: 25%; }\n    ul li .title {\n      font-size: 1.4em;\n      text-align: center;\n      display: block; }\n    ul li .dot {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      border-bottom: 2px dashed black;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      width: 100%;\n      position: relative;\n      top: -13px; }\n\nsvg {\n  width: 100%;\n  height: 100%; }\n\n/* Small Devices, Tablets */\n@media only screen and (max-width: 768px) {\n  ul li .icon {\n    width: 75px;\n    height: 75px; }\n  ul li .dot {\n    top: -22px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/roadmap/roadmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoadmapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoadmapComponent = (function () {
    function RoadmapComponent() {
        this.steps = [
            { icon: 'signin', title: 'ثبت نام', state: 1 },
            { icon: 'moraje', title: 'مراجعه', state: 0 },
            { icon: 'accept', title: 'تایید', state: 0 },
            { icon: 'drive', title: 'شیفت', state: 0 },
            { icon: 'money', title: 'کسب درامد', state: 0 }
        ];
    }
    RoadmapComponent.prototype.ngOnInit = function () {
    };
    return RoadmapComponent;
}());
RoadmapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-roadmap',
        template: __webpack_require__("../../../../../src/app/roadmap/roadmap.component.html"),
        styles: [__webpack_require__("../../../../../src/app/roadmap/roadmap.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RoadmapComponent);

//# sourceMappingURL=roadmap.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"card\">\n  <header>\n    <span class=\"service-icon {{service.icon}}\">\n      <svg class=\"\">\n        <use attr.xlink:href=\"assets/svg/services-sprites.svg#{{service.icon}}\"></use>\n      </svg>\n    </span>\n    <h1 class=\"title\">{{service.title}}</h1>\n  </header>\n  <article class=\"about\">\n    <p>{{service.about}}</p>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/services/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n  height: 100%; }\n  .card:hover .about::before {\n    bottom: 0; }\n\nheader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px 30px;\n  height: 75px;\n  background: #fff;\n  text-align: right;\n  position: relative; }\n  header .service-icon {\n    position: absolute;\n    width: 100px;\n    height: 100%;\n    left: 7px;\n    padding: 10px 0; }\n    header .service-icon.green svg {\n      -webkit-transform: scaleX(-1);\n              transform: scaleX(-1); }\n    header .service-icon svg {\n      fill: #333;\n      width: 100%;\n      height: 100%; }\n  header .title {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-size: 1.5em; }\n\n.about {\n  z-index: 1;\n  background: #f7f7f7;\n  direction: rtl;\n  padding: 15px 30px;\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 13px; }\n  .about::before {\n    content: '';\n    background: #fbb03c;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    transition: 400ms bottom ease-in;\n    bottom: -100%;\n    z-index: -1; }\n  .about p {\n    margin: 0; }\n\n@media only screen and (max-width: 1316px) {\n  .card {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  header {\n    min-width: 150px;\n    padding: 20px; }\n  .about {\n    padding: 1em; } }\n\n@media only screen and (max-width: 1016px) {\n  .card {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  header {\n    min-width: 150px;\n    padding: 20px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100%; }\n    header .title {\n      margin: 0; }\n  .about {\n    padding: 1em; } }\n\n@media only screen and (max-width: 768px) {\n  header .service-icon {\n    width: 60px;\n    height: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__("../../../../../src/app/services/service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = (function () {
    function CardComponent() {
        this.service = new __WEBPACK_IMPORTED_MODULE_1__service__["a" /* Service */]();
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    return CardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "service", void 0);
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-card',
        template: __webpack_require__("../../../../../src/app/services/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/card/card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CardComponent);

//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
var IService = (function () {
    function IService() {
    }
    return IService;
}());
var Service = (function () {
    function Service(service) {
        this.icon = (service && service.icon) || '';
        this.title = (service && service.title) || 'Title';
        this.about = (service && service.about) || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    }
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"section-title\">\n    <h1>تنوع سرویس ها</h1>\n  </div>\n  <div class=\"services\">\n    <geno-card *ngFor=\"let service of services\" [service]=\"service\"></geno-card>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/services/services.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: #eee;\n  padding: 3em 0 6em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.services {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.section-title h1 {\n  background: #eee; }\n\ngeno-card {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 250px;\n          flex: 1 1 250px;\n  margin: 25px;\n  max-width: 250px;\n  color: #333; }\n\n@media only screen and (max-width: 1316px) {\n  :host {\n    padding: 3em 0 6em; }\n  geno-card {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 450px;\n            flex: 1 0 450px;\n    margin: 25px;\n    max-width: 450px; } }\n\n@media only screen and (max-width: 1016px) {\n  geno-card {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 325px;\n            flex: 1 0 325px;\n    margin: 25px;\n    max-width: 450px; } }\n\n@media only screen and (max-width: 768px) {\n  geno-card {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 90%;\n            flex: 1 0 90%;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin: 10px;\n    min-width: 90%;\n    min-height: 100px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__("../../../../../src/app/services/service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = (function () {
    function ServicesComponent() {
        this.services = [
            new __WEBPACK_IMPORTED_MODULE_1__service__["a" /* Service */]({ title: 'لوکس', icon: 'lux', about: 'سرویس شماره یک. شیک، سریع و پرهزینه' }),
            new __WEBPACK_IMPORTED_MODULE_1__service__["a" /* Service */]({ title: 'خانواده', icon: 'suv', about: 'برای وقتهایی  که به فضای بیشتری احتیاج دارید\n تا ظرفیت 6 نفر' }),
            new __WEBPACK_IMPORTED_MODULE_1__service__["a" /* Service */]({ title: 'سبز', icon: 'green', about: 'اگر به محیط زیست احمیت میدین این سرویس مناسب شماست. سرویس های سبز با استفاده از ماشین های هیبریدی برای شهری پاکتر.' }),
            new __WEBPACK_IMPORTED_MODULE_1__service__["a" /* Service */]({ title: 'ویژه', icon: 'normal', about: 'پیشنهاد ما برای مسافرت های داخل شهری و رفت و آمد های روزانه، سریع، امن و اقتصادی.' }),
            new __WEBPACK_IMPORTED_MODULE_1__service__["a" /* Service */]({ title: 'تاکسی', icon: 'normal', about: 'تاکسی های ناوگان تاکسی رانی شهر، بدون تخفیف ' }),
        ];
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-services',
        template: __webpack_require__("../../../../../src/app/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/services.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/space/space.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"quote\">\n  <blockquote>\n      یک جمله اینجا\n    <svg class=\"quote-icon\">\n      <use xlink:href=\"/assets/svg/icons.svg#quote\"></use>\n    </svg>\n  </blockquote>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/space/space.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quote {\n  color: #333;\n  background: url(\"/assets/images/mock-city.jpg\") center center no-repeat; }\n\n.quote-icon {\n  fill: #333; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/space/space.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpaceComponent = (function () {
    function SpaceComponent() {
    }
    SpaceComponent.prototype.ngOnInit = function () {
    };
    return SpaceComponent;
}());
SpaceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'geno-space',
        template: __webpack_require__("../../../../../src/app/space/space.component.html"),
        styles: [__webpack_require__("../../../../../src/app/space/space.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SpaceComponent);

//# sourceMappingURL=space.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map